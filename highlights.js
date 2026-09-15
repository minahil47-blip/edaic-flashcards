// highlights.js — highlight any text in a note.
//
// Select text (drag on a computer; press-and-hold then drag the handles on a
// phone) and a small bar appears: pick a colour. Tap a highlight to change its
// colour or remove it. "My highlights", under the title, lists them all and
// jumps to each one. Either bar closes with its × button, a right-click
// anywhere, the Esc key, or a click elsewhere.
//
// Loaded by every notes/*.html page after revised.js. Saved in this browser's
// localStorage only, under edaic-highlights-v1:
//   { "<note file name>": [ { id, t, p, s, c, at } ] }
// t is the highlighted text and p / s are up to 32 characters either side, all
// with whitespace collapsed, used to find the same spot again. The progress
// code on the home page (revised.js) carries highlights as well as ticks.
(function () {
  var KEY = 'edaic-highlights-v1';
  var CTX = 32;
  var COLOURS = [
    { c: 'y', name: 'yellow' }, { c: 'g', name: 'green' },
    { c: 'p', name: 'pink' }, { c: 'b', name: 'blue' }
  ];
  var noteId = location.pathname.split(/[?#]/)[0].split('/').pop().replace(/\.html$/, '');
  var root = document.querySelector('.wrap') || document.body;
  // Never highlight inside diagrams, controls, banners or the page chrome.
  var SKIP = 'svg, script, style, button, input, textarea, footer, .backlink, .newflag, .hl-ui, .rp-btn';

  // ------------------------------------------------------------- storage
  function loadAll() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; }
  }
  function getList() { return (loadAll()[noteId] || []).slice(); }
  function setList(list) {
    var all = loadAll();
    if (list.length) all[noteId] = list; else delete all[noteId];
    try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) { /* storage blocked */ }
  }

  // ------------------------------------------------------------- styles
  var st = document.createElement('style');
  st.textContent =
    '.hl-y{background:#FFE27A}.hl-g{background:#A8EBC6}.hl-p{background:#FFC2D6}.hl-b{background:#BFDDFF}' +
    'mark.hl{color:inherit;border-radius:3px;padding:0 1px;cursor:pointer;' +
      '-webkit-box-decoration-break:clone;box-decoration-break:clone}' +
    'header.top mark.hl{color:#152420}' +
    'mark.hl.hl-flash{outline:3px solid #7A3B9E;outline-offset:2px}' +
    '.hl-bar,.hl-pop{position:absolute;z-index:60;display:flex;align-items:center;gap:8px;padding:7px 8px 7px 10px;' +
      'background:#152420;border-radius:24px;box-shadow:0 6px 20px rgba(0,0,0,.28)}' +
    '.hl-dot{width:28px;height:28px;border-radius:50%;border:2px solid #fff;padding:0;cursor:pointer;flex:none}' +
    '.hl-dot.on{box-shadow:0 0 0 3px #7A3B9E}' +
    '.hl-lbl{color:#fff;font:700 13px "Public Sans",system-ui,sans-serif;margin:0 2px 0 2px;white-space:nowrap}' +
    '.hl-rm{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.55);border-radius:14px;' +
      'padding:5px 11px;font:700 12.5px "Public Sans",system-ui,sans-serif;cursor:pointer;white-space:nowrap}' +
    '.hl-x{flex:none;width:28px;height:28px;border-radius:50%;border:0;background:rgba(255,255,255,.14);color:#fff;' +
      'font:700 18px/28px system-ui,sans-serif;padding:0;cursor:pointer;text-align:center}' +
    '.hl-x:hover{background:rgba(255,255,255,.28)}' +
    '.hl-panel{background:#fff;border-radius:12px;margin:0 0 18px}' +
    '.hl-panel summary{cursor:pointer;list-style:none;padding:12px 16px;font:700 15px "Public Sans",system-ui,sans-serif;color:#152420}' +
    '.hl-panel summary::-webkit-details-marker{display:none}' +
    '.hl-panel summary .hl-hint{font-weight:500;color:#5C6E66;font-size:13.5px}' +
    '.hl-body{padding:0 16px 14px;font:400 14px "Public Sans",system-ui,sans-serif;color:#5C6E66}' +
    '.hl-item{display:flex;gap:9px;align-items:flex-start;width:100%;text-align:left;background:#F1F4F1;border:0;' +
      'border-radius:8px;padding:8px 10px;margin:6px 0 0;font:500 14px "Public Sans",system-ui,sans-serif;color:#152420;cursor:pointer}' +
    '.hl-item.gone{opacity:.55;cursor:default}' +
    '.hl-sw{flex:none;width:14px;height:14px;border-radius:4px;margin-top:3px}' +
    '.hl-clear{margin-top:10px;background:none;border:0;color:#A8123E;font:600 13px "Public Sans",system-ui,sans-serif;cursor:pointer;padding:4px 0}' +
    '@media print{.hl-ui{display:none!important}}';
  document.head.appendChild(st);

  // --------------------------------------------------------- text index
  // Every highlightable text node in reading order, with its offset in the
  // concatenated text. Marks do not change the text, so offsets stay stable.
  // A virtual space is added where the text moves into a new block (table
  // cell, list item, paragraph) so neighbouring cells do not run together;
  // it belongs to no node, so wrapping simply skips it.
  var BLOCK = 'p, li, td, th, h1, h2, h3, summary, div, header, section';
  function textIndex() {
    var nodes = [], text = '', pos = 0, lastBlock = null, n;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (t) {
        return t.parentElement && t.parentElement.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    while ((n = walker.nextNode())) {
      var block = n.parentElement.closest(BLOCK);
      if (lastBlock && block !== lastBlock) { text += ' '; pos += 1; }
      lastBlock = block;
      nodes.push({ node: n, start: pos });
      text += n.nodeValue;
      pos += n.nodeValue.length;
    }
    return { nodes: nodes, text: text };
  }

  // Collapse whitespace runs to one space, keeping a map back to raw offsets,
  // so reformatting the HTML later does not lose highlights.
  function norm(raw) {
    var s = '', map = [], prevSpace = false;
    for (var k = 0; k < raw.length; k++) {
      var sp = /\s/.test(raw[k]);
      if (sp && prevSpace) continue;
      s += sp ? ' ' : raw[k];
      map.push(k);
      prevSpace = sp;
    }
    map.push(raw.length);
    return { s: s, map: map };
  }

  function rangeOffsets(range) {
    var idx = textIndex(), start = -1, end = -1;
    idx.nodes.forEach(function (o) {
      if (!range.intersectsNode(o.node)) return;
      var len = o.node.nodeValue.length;
      var a = o.node === range.startContainer ? range.startOffset : 0;
      var b = o.node === range.endContainer ? range.endOffset : len;
      if (b <= a) return;
      if (start < 0) start = o.start + a;
      end = o.start + b;
    });
    if (start < 0) return null;
    while (start < end && /\s/.test(idx.text[start])) start++;
    while (end > start && /\s/.test(idx.text[end - 1])) end--;
    return end - start >= 2 ? { start: start, end: end } : null;
  }

  function wrap(start, end, colour, id) {
    textIndex().nodes.forEach(function (o) {
      var n = o.node, ns = o.start, ne = ns + n.nodeValue.length;
      if (ne <= start || ns >= end) return;
      var a = Math.max(start, ns) - ns, b = Math.min(end, ne) - ns;
      if (!n.nodeValue.slice(a, b).trim()) return; // never wrap bare whitespace (e.g. between table cells)
      var mid = a > 0 ? n.splitText(a) : n;
      if (b - a < mid.nodeValue.length) mid.splitText(b - a);
      var m = document.createElement('mark');
      m.className = 'hl hl-' + colour;
      m.dataset.hl = id;
      mid.parentNode.insertBefore(m, mid);
      m.appendChild(mid);
    });
  }

  function unwrap(id) {
    [].slice.call(document.querySelectorAll('mark.hl[data-hl="' + id + '"]')).forEach(function (m) {
      var parent = m.parentNode;
      while (m.firstChild) parent.insertBefore(m.firstChild, m);
      parent.removeChild(m);
      parent.normalize();
    });
  }

  // Find a saved highlight in the current text; prefer the occurrence whose
  // surrounding text matches, so repeated phrases land in the right place.
  function locate(h, N) {
    var best = -1, bestScore = -1, i = N.s.indexOf(h.t);
    while (i >= 0) {
      var score = (N.s.slice(Math.max(0, i - h.p.length), i) === h.p ? 2 : 0) +
                  (N.s.slice(i + h.t.length, i + h.t.length + h.s.length) === h.s ? 1 : 0);
      if (score > bestScore) { best = i; bestScore = score; }
      if (score === 3) break;
      i = N.s.indexOf(h.t, i + 1);
    }
    return best;
  }

  // ---------------------------------------------------------- UI helpers
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  }
  function dots(active) {
    return COLOURS.map(function (k) {
      return '<button type="button" class="hl-dot hl-' + k.c + (k.c === active ? ' on' : '') +
        '" data-c="' + k.c + '" aria-label="Highlight ' + k.name + '"></button>';
    }).join('');
  }
  var CLOSE = '<button type="button" class="hl-x" aria-label="Close" title="Close (or right-click)">×</button>';
  function place(box, rect) {
    box.hidden = false;
    var bw = box.offsetWidth, bh = box.offsetHeight;
    var top = rect.bottom + 12;
    if (top + bh > window.innerHeight - 8) top = rect.top - bh - 12;
    var left = rect.left + rect.width / 2 - bw / 2;
    left = Math.max(8, Math.min(left, document.documentElement.clientWidth - bw - 8));
    box.style.top = (window.scrollY + Math.max(8, top)) + 'px';
    box.style.left = (window.scrollX + left) + 'px';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]; });
  }

  // After highlighting, removing or closing, ignore selection events briefly
  // so the bar cannot pop straight back up.
  var quietUntil = 0;
  function quiet() { quietUntil = Date.now() + 700; }
  function clearSelection() {
    var sel = window.getSelection();
    if (sel && sel.rangeCount) sel.removeAllRanges();
  }

  // ------------------------------------------------------ selection bar
  var bar = el('div', 'hl-ui hl-bar', dots('') + '<span class="hl-lbl">Highlight</span>' + CLOSE);
  bar.hidden = true;
  document.body.appendChild(bar);
  var pending = null;

  function hideBar() { bar.hidden = true; pending = null; }

  function checkSelection() {
    if (Date.now() < quietUntil) return;
    var sel = window.getSelection();
    if (!sel || !sel.rangeCount || sel.isCollapsed) { hideBar(); return; }
    var range = sel.getRangeAt(0);
    if (!root.contains(range.commonAncestorContainer)) { hideBar(); return; }
    var offs = rangeOffsets(range);
    if (!offs) { hideBar(); return; }
    pending = offs;
    hidePop();
    place(bar, range.getBoundingClientRect());
  }

  var timer;
  document.addEventListener('selectionchange', function () { clearTimeout(timer); timer = setTimeout(checkSelection, 300); });
  document.addEventListener('mouseup', function (e) { if (e.button === 0) setTimeout(checkSelection, 0); });
  document.addEventListener('touchend', function () { setTimeout(checkSelection, 350); });

  // Keep the text selected while pressing a colour on a computer.
  bar.addEventListener('mousedown', function (e) { e.preventDefault(); });

  bar.addEventListener('click', function (e) {
    if (e.target.closest('.hl-x')) { clearSelection(); hideBar(); quiet(); return; }
    var d = e.target.closest('.hl-dot');
    if (!d || !pending) return;
    var raw = textIndex().text, N = norm(raw);
    var ns = 0, ne;
    while (N.map[ns] < pending.start) ns++;
    ne = ns;
    while (N.map[ne] < pending.end) ne++;
    var h = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      t: N.s.slice(ns, ne),
      p: N.s.slice(Math.max(0, ns - CTX), ns),
      s: N.s.slice(ne, ne + CTX),
      c: d.dataset.c,
      at: Date.now()
    };
    var list = getList();
    list.push(h);
    setList(list);
    wrap(pending.start, pending.end, h.c, h.id);
    clearSelection();
    hideBar();
    quiet();
    renderPanel();
  });

  // ------------------------------------------------ tap a highlight: edit
  var pop = el('div', 'hl-ui hl-pop');
  pop.hidden = true;
  document.body.appendChild(pop);
  var popId = null;

  function hidePop() { pop.hidden = true; popId = null; }

  function showPop(mark) {
    popId = mark.dataset.hl;
    var item = getList().filter(function (h) { return h.id === popId; })[0];
    pop.innerHTML = dots(item ? item.c : '') + '<button type="button" class="hl-rm">Remove</button>' + CLOSE;
    place(pop, mark.getBoundingClientRect());
  }

  pop.addEventListener('click', function (e) {
    if (e.target.closest('.hl-x')) { hidePop(); quiet(); return; }
    if (!popId) return;
    var list = getList();
    if (e.target.closest('.hl-rm')) {
      setList(list.filter(function (h) { return h.id !== popId; }));
      unwrap(popId);
    } else {
      var d = e.target.closest('.hl-dot');
      if (!d) return;
      list.forEach(function (h) { if (h.id === popId) h.c = d.dataset.c; });
      setList(list);
      [].slice.call(document.querySelectorAll('mark.hl[data-hl="' + popId + '"]')).forEach(function (m) {
        m.className = 'hl hl-' + d.dataset.c;
      });
    }
    hidePop();
    quiet();
    renderPanel();
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('.hl-pop, .hl-bar')) return;
    var m = e.target.closest('mark.hl');
    var sel = window.getSelection();
    if (m && (!sel || sel.isCollapsed)) showPop(m); else hidePop();
  });

  // Right-click anywhere closes whichever bar is open (and, while one is open,
  // takes the place of the browser's own right-click menu).
  document.addEventListener('contextmenu', function (e) {
    if (bar.hidden && pop.hidden) return;
    e.preventDefault();
    clearSelection();
    hideBar();
    hidePop();
    quiet();
  }, true);

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || (bar.hidden && pop.hidden)) return;
    clearSelection();
    hideBar();
    hidePop();
    quiet();
  });

  window.addEventListener('resize', function () { hideBar(); hidePop(); });

  // --------------------------------------------------- "My highlights"
  var panel = el('details', 'hl-ui hl-panel');
  var header = document.querySelector('header.top');
  var anchor = header && header.nextElementSibling && header.nextElementSibling.classList.contains('rp-btn')
    ? header.nextElementSibling : header;
  if (anchor) anchor.insertAdjacentElement('afterend', panel);
  else root.insertBefore(panel, root.firstChild);

  function renderPanel() {
    var list = getList();
    var found = {};
    [].slice.call(document.querySelectorAll('mark.hl')).forEach(function (m) { found[m.dataset.hl] = 1; });
    var html = '<summary>🖍 My highlights · ' + list.length +
      (list.length ? '' : ' <span class="hl-hint">— select any text to highlight it</span>') + '</summary><div class="hl-body">';
    if (!list.length) {
      html += 'Select words anywhere in this note, then pick a colour. Tap a highlight later to change its colour or remove it. Close the colour bar with ×, a right-click or Esc.';
    } else {
      list.forEach(function (h) {
        var gone = !found[h.id];
        html += '<button type="button" class="hl-item' + (gone ? ' gone' : '') + '" data-id="' + h.id + '">' +
          '<span class="hl-sw hl-' + h.c + '"></span><span>' +
          esc(h.t.length > 140 ? h.t.slice(0, 140) + '…' : h.t) +
          (gone ? ' <i>(this text has changed in the note)</i>' : '') + '</span></button>';
      });
      html += '<button type="button" class="hl-clear">Clear all highlights in this note</button>';
    }
    html += '</div>';
    var wasOpen = panel.open;
    panel.innerHTML = html;
    panel.open = wasOpen && list.length > 0;
  }

  panel.addEventListener('click', function (e) {
    var item = e.target.closest('.hl-item');
    if (item) {
      var m = document.querySelector('mark.hl[data-hl="' + item.dataset.id + '"]');
      if (!m) return;
      m.scrollIntoView({ behavior: 'smooth', block: 'center' });
      var marks = [].slice.call(document.querySelectorAll('mark.hl[data-hl="' + item.dataset.id + '"]'));
      marks.forEach(function (x) { x.classList.add('hl-flash'); });
      setTimeout(function () { marks.forEach(function (x) { x.classList.remove('hl-flash'); }); }, 1600);
      return;
    }
    if (e.target.closest('.hl-clear') && window.confirm('Remove every highlight in this note?')) {
      getList().forEach(function (h) { unwrap(h.id); });
      setList([]);
      renderPanel();
    }
  });

  // ------------------------------------------------------------ start
  (function applySaved() {
    var list = getList();
    if (!list.length) return;
    var N = norm(textIndex().text);
    list.forEach(function (h) {
      var i = locate(h, N);
      if (i < 0 || !h.t) return;
      wrap(N.map[i], N.map[i + h.t.length - 1] + 1, h.c, h.id);
    });
  })();
  renderPanel();
})();
