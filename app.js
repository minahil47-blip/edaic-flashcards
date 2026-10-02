// app.js — shared engine for all decks.
// Each deck file (decks/deckN.js) pushes an object into window.DECKS:
// { id, title, subtitle, emoji, colors:{front1,front2,back1,back2,backText,chips:[...]}, cards:[{cat,q,a}, ...] }

(function () {
  const DECKS = window.DECKS || [];
  if (!DECKS.length) {
    document.getElementById('app-root').innerHTML =
      '<p style="padding:40px;text-align:center;">No decks loaded yet.</p>';
    return;
  }

  let deckIndex = 0;
  let activeCat = "All";
  let filtered = [];
  let order = [];
  let idx = 0;
  // Card number to land on when the app reopens; read once at startup.
  let pendingIdx = 0;

  const el = (sel) => document.querySelector(sel);
  const sceneEl = el('.scene');
  const faceEls = document.querySelectorAll('.face');
  const deckTabsEl = el('#deckTabs');
  const deckSubtitleEl = el('#deckSubtitle');
  const chipsEl = el('#chips');
  const progressEl = el('#progress');
  const cardEl = el('#card');
  const qtextEl = el('#qtext');
  const atextEl = el('#atext');
  const tagFrontEl = el('#tagFront');
  const tagBackEl = el('#tagBack');
  const jumpInput = el('#jumpInput');

  // ---- picking up where you left off --------------------------------------
  // Cards sit in a FIXED order — there is no shuffle — so "Card 7 of 50" is
  // the same card on every device, and two people can revise together by
  // calling out card numbers. The deck, topic filter and card number are kept
  // in this browser so the app reopens on the same card.
  const POS_KEY = 'edaic-last-card-v1';

  function savePosition() {
    try {
      localStorage.setItem(POS_KEY, JSON.stringify({
        deck: DECKS[deckIndex].id, cat: activeCat, idx: idx, at: Date.now()
      }));
    } catch (e) { /* storage blocked */ }
  }

  function restorePosition() {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(POS_KEY) || 'null'); } catch (e) { return; }
    if (!saved) return;
    const i = DECKS.findIndex(d => d.id === saved.deck);
    if (i < 0) return;                       // that deck is no longer on the site
    deckIndex = i;
    const cats = DECKS[i].cards.map(c => c.cat);
    // Without a chip UI there is no way to clear a restored filter, so a
    // category saved by an earlier version must not be honoured.
    activeCat = chipsEl && saved.cat && (saved.cat === 'All' || cats.indexOf(saved.cat) >= 0) ? saved.cat : 'All';
    pendingIdx = Math.max(0, parseInt(saved.idx, 10) || 0);
  }

  function applyDeckColors(deck) {
    const c = deck.colors || {};
    const root = document.documentElement.style;
    root.setProperty('--front1', c.front1 || '#a63dff');
    root.setProperty('--front2', c.front2 || '#ff3d81');
    root.setProperty('--back1', c.back1 || '#3ddc97');
    root.setProperty('--back2', c.back2 || '#3dd6d6');
    root.setProperty('--back-text', c.backText || '#0c2b23');
  }

  function buildDeckTabs() {
    deckTabsEl.innerHTML = "";
    DECKS.forEach((deck, i) => {
      const b = document.createElement('button');
      b.className = 'deck-tab' + (i === deckIndex ? ' active' : '');
      b.textContent = (deck.emoji ? deck.emoji + ' ' : '') + deck.title;
      b.onclick = () => { deckIndex = i; activeCat = "All"; loadDeck(); buildDeckTabs(); };
      deckTabsEl.appendChild(b);
    });
  }

  function buildChips(deck) {
    // The category filter was removed from the UI; keep the deck on "All" and
    // skip rendering if the container is absent. Restoring a #chips element is
    // all that is needed to bring the filter back.
    if (!chipsEl) return;
    const cats = ["All", ...Array.from(new Set(deck.cards.map(c => c.cat)))];
    const palette = (deck.colors && deck.colors.chips) || ["#3d8bff","#a63dff","#ff3d81","#ff9a3d","#ffd93d","#3ddc97","#3dd6d6","#ff6b6b","#c6ff3d"];
    chipsEl.innerHTML = "";
    cats.forEach((cat, i) => {
      const b = document.createElement('button');
      b.className = 'chip' + (cat === activeCat ? ' active' : '');
      b.textContent = cat;
      b.style.background = palette[i % palette.length];
      b.onclick = () => { activeCat = cat; applyFilter(); buildChips(deck); };
      chipsEl.appendChild(b);
    });
  }

  function applyFilter() {
    const deck = DECKS[deckIndex];
    filtered = activeCat === "All" ? deck.cards.slice() : deck.cards.filter(c => c.cat === activeCat);
    order = filtered.map((_, i) => i);   // fixed order: same card numbers on every device
    idx = Math.min(pendingIdx, Math.max(0, filtered.length - 1));
    pendingIdx = 0;
    showCard();
  }

  function showCard() {
    cardEl.classList.remove('flipped');
    if (!filtered.length) {
      qtextEl.textContent = "No cards in this category.";
      atextEl.textContent = "";
      progressEl.textContent = "";
      return;
    }
    const item = filtered[order[idx]];
    renderCard(item);
    tagFrontEl.textContent = item.cat;
    tagBackEl.textContent = item.cat;
    progressEl.textContent = `${item.opts ? 'Question' : 'Card'} ${idx + 1} of ${filtered.length}`;
    if (jumpInput) {
      jumpInput.max = filtered.length;
      jumpInput.placeholder = String(idx + 1);
      jumpInput.value = '';
    }
    savePosition();
  }

  // Two card shapes are supported:
  //   simple   { cat, q, a }
  //   grouped  { cat, stem, opts:[5 statements], ans:[5 "TRUE …"/"FALSE …"] }
  // Grouped cards render the EDAIC multiple-true/false layout: one stem with
  // five independently marked sub-statements.
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  function esc(s) {
    return String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  }

  function listHTML(item, withAnswers) {
    const rows = item.opts.map((opt, i) => {
      const letter = `<span class="mcq-let">${LETTERS[i]}</span>`;
      if (!withAnswers) return `<li>${letter}<span>${esc(opt)}</span></li>`;
      const raw = item.ans[i] || '';
      const isTrue = /^TRUE/i.test(raw);
      const verdict = isTrue ? 'TRUE' : 'FALSE';
      const rest = raw.replace(/^(TRUE|FALSE)[.\s—-]*/i, '');
      return `<li>${letter}<span><span class="mcq-v ${isTrue ? 't' : 'f'}">${verdict}</span>` +
             `<span class="mcq-opt">${esc(opt)}</span>` +
             (rest ? `<span class="mcq-exp">${esc(rest)}</span>` : '') + `</span></li>`;
    }).join('');
    return `<div class="mcq-stem">${esc(item.stem)}</div><ul class="mcq-list">${rows}</ul>`;
  }

  function renderCard(item) {
    const grouped = Array.isArray(item.opts);
    sceneEl.classList.toggle('mcq', grouped);
    faceEls.forEach(f => f.classList.toggle('mcqface', grouped));
    if (grouped) {
      qtextEl.innerHTML = listHTML(item, false);
      atextEl.innerHTML = listHTML(item, true);
    } else {
      qtextEl.textContent = item.q;
      atextEl.textContent = item.a;
    }
    faceEls.forEach(f => { f.scrollTop = 0; });
  }

  function loadDeck() {
    const deck = DECKS[deckIndex];
    applyDeckColors(deck);
    deckSubtitleEl.textContent = deck.subtitle || "";
    buildChips(deck);
    applyFilter();
  }

  cardEl.addEventListener('click', () => cardEl.classList.toggle('flipped'));

  el('#nextBtn').onclick = () => {
    if (!filtered.length) return;
    idx = (idx + 1) % filtered.length;
    showCard();
  };
  el('#prevBtn').onclick = () => {
    if (!filtered.length) return;
    idx = (idx - 1 + filtered.length) % filtered.length;
    showCard();
  };
  // Jump straight to a card number — how two people on different devices land
  // on the same card.
  const jumpTo = () => {
    const n = parseInt(jumpInput.value, 10);
    if (!filtered.length || !n) return;
    idx = Math.min(Math.max(n, 1), filtered.length) - 1;
    showCard();
    jumpInput.blur();
  };
  el('#jumpBtn').onclick = jumpTo;
  jumpInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); jumpTo(); }
  });

  // keyboard support
  document.addEventListener('keydown', (e) => {
    // Ignore keystrokes aimed at a text field — otherwise Space would flip the
    // card instead of typing a space in the search box.
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === 'ArrowRight') el('#nextBtn').click();
    if (e.key === 'ArrowLeft') el('#prevBtn').click();
    if (e.key === ' ') { e.preventDefault(); cardEl.classList.toggle('flipped'); }
  });

  // Minimal public API, used only by the search box in index.html.
  // goTo(deckIndex, cardIndex) switches deck, clears the category filter and
  // lands on that exact card, unflipped. cardIndex is the index within
  // deck.cards, which with activeCat "All" is also the index within `filtered`.
  window.EDAIC = {
    get decks() { return DECKS; },
    goTo: function (di, cardIndex) {
      if (di < 0 || di >= DECKS.length) return;
      deckIndex = di;
      activeCat = "All";
      loadDeck();
      buildDeckTabs();
      var pos = order.indexOf(cardIndex);
      if (pos >= 0) { idx = pos; showCard(); }
    }
  };

  restorePosition();
  buildDeckTabs();
  loadDeck();
})();
