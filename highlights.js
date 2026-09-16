// highlights.js — highlights AND tiny note boxes in a note page.
//
// Select text (drag on a computer; press-and-hold then drag the handles on a
// phone) and a small bar appears: pick a colour to highlight, or press
// "📝 Note" to attach a note box to those words. Tap a highlight to recolour
// or remove it; tap a 📝 pin to read, edit or delete a note. "My highlights &
// notes", under the title, lists everything and jumps to it. Any bar closes
// with its × button, a right-click anywhere, the Esc key, or a click away.
//
// Loaded by every notes/*.html page after revised.js. Saved in this browser's
// localStorage only:
//   edaic-highlights-v1  { "<note file>": [ { id, t, p, s, c, at } ] }
//   edaic-notes-v1       { "<note file>": [ { id, t, p, s, body, at } ] }
// t is the anchored text and p / s are up to 32 characters either side, all
// with whitespace collapsed, used to find the same spot again. A note with an
// empty t is a page note, shown only in the panel. The progress code on the
// home page (revised.js) carries highlights and notes as well as ticks.
(function () {
  var KEY = 'edaic-highlights-v1';
  var NKEY = 'edaic-notes-v1';
  var CTX = 32;
  var COLOURS = [
    { c: 'y', name: 'yellow' }, { c: 'g', name: 'green' },
    { c: 'p', name: 'pink' }, { c: 'b', name: 'blue' }
  ];
  var noteId = location.pathname.split(/[?#]/)[0].split('/').pop().replace(/\.html$/, '');
  var root = document.querySelector('.wrap') || document.body;
  // Never annotate inside diagrams, controls, banners or the page chrome.
  var SKIP = 'svg, script, style, button, input, textarea, footer, .backlink, .newflag, .hl-ui, .rp-btn';

  // ------------------------------------------------------------- storage
  function readKey(k) {
    try { return JSON.parse(localStorage.getItem(k) || '{}') || {}; } catch (e) { return {}; }
  }
  function writeKey(k, all) {
    try { localStorage.setItem(k, JSON.stringify(all)); } catch (e) { /* storage blocked */ }
  }
  function getList() { return (readKey(KEY)[noteId] || []).slice(); }
  function setList(list) {
    var all = readKey(KEY);
    if (list.length) all[noteId] = list; else delete all[noteId];
    writeKey(KEY, all);
  }
  function getNotes() { return (readKey(NKEY)[noteId] || []).slice(); }
  function setNotes(list) {
    var all = readKey(NKEY);
    if (list.length) all[noteId] = list; else delete all[noteId];
    writeKey(NKEY, all);
  }

  // ------------------------------------------------------------- styles
  var st = document.createElement('style');
  st.textContent =
    '.hl-y{background:#FFE27A}.hl-g{background:#A8EBC6}.hl-p{background:#FFC2D6}.hl-b{background:#BFDDFF}' +
    '.hl-n{background:#FFF6D6;border-bottom:2px dotted #B4690E}' +
    'mark.hl{color:inherit;border-radius:3px;padding:0 1px;cursor:pointer;' +
      '-webkit-box-decoration-break:clone;box-decoration-break:clone}' +
    'header.top mark.hl{color:#152420}' +
    'mark.hl.hl-flash{outline:3px solid #7A3B9E;outline-offset:2px}' +
    '.nb-pin{border:0;background:transparent;padding:0 2px;font-size:13px;line-height:1;cursor:pointer;vertical-align:2px}' +
    // display:flex below would otherwise beat the browser's own [hidden] rule,
    // leaving the bars on screen after they are "hidden".
    '.hl-ui[hidden]{display:none!important}' +
    '.hl-bar,.hl-pop{position:absolute;z-index:60;display:flex;align-items:center;gap:8px;padding:7px 8px 7px 10px;' +
      'background:#152420;border-radius:24px;box-shadow:0 6px 20px rgba(0,0,0,.28)}' +
    '.hl-dot{width:28px;height:28px;border-radius:50%;border:2px solid #fff;padding:0;cursor:pointer;flex:none}' +
    '.hl-dot.on{box-shadow:0 0 0 3px #7A3B9E}' +
    '.hl-lbl{color:#fff;font:700 13px "Public Sans",system-ui,sans-serif;margin:0 2px;white-space:nowrap}' +
    '.hl-rm,.nb-add{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.55);border-radius:14px;' +
      'padding:5px 11px;font:700 12.5px "Public Sans",system-ui,sans-serif;cursor:pointer;white-space:nowrap}' +
    '.hl-x{flex:none;width:28px;height:28px;border-radius:50%;border:0;background:rgba(255,255,255,.14);color:#fff;' +
      'font:700 18px/28px system-ui,sans-serif;padding:0;cursor:pointer;text-align:center}' +
    '.hl-x:hover{background:rgba(255,255,255,.28)}' +
    // the note editor
    '.nb-edit{position:absolute;z-index:61;width:min(300px,calc(100vw - 24px));background:#FFFBEF;border:1px solid #E8B84B;' +
      'border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.25);padding:10px}' +
    '.nb-quote{font:600 12px "Public Sans",system-ui,sans-serif;color:#6B4E10;margin:0 0 6px;' +
      'overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '.nb-ta{width:100%;box-sizing:border-box;min-height:74px;border:1px solid #E0D3AE;border-radius:8px;padding:8px;' +
      'font:400 14px "Public Sans",system-ui,sans-serif;color:#152420;background:#fff;resize:vertical}' +
    '.nb-row{display:flex;gap:8px;align-items:center;margin-top:8px}' +
    '.nb-save{background:#0E7A66;color:#fff;border:0;border-radius:8px;padding:7px 14px;' +
      'font:700 13px "Public Sans",system-ui,sans-serif;cursor:pointer}' +
    '.nb-del{background:transparent;color:#A8123E;border:0;padding:7px 4px;' +
      'font:700 13px "Public Sans",system-ui,sans-serif;cursor:pointer}' +
    '.nb-close{margin-left:auto;background:transparent;border:0;color:#6B4E10;font:700 18px system-ui,sans-serif;cursor:pointer;padding:0 4px}' +
    // the panel
    '.hl-panel{background:#fff;border-radius:12px;margin:0 0 18px}' +
    '.hl-panel summary{cursor:pointer;list-style:none;padding:12px 16px;font:700 15px "Public Sans",system-ui,sans-serif;color:#152420}' +
    '.hl-panel summary::-webkit-details-marker{display:none}' +
    '.hl-panel summary .hl-hint{font-weight:500;color:#5C6E66;font-size:13.5px}' +
    '.hl-body{padding:0 16px 14px;font:400 14px "Public Sans",system-ui,sans-serif;color:#5C6E66}' +
    '.hl-item{display:flex;gap:9px;align-items:flex-start;width:100%;text-align:left;background:#F1F4F1;border:0;' +
      'border-radius:8px;padding:8px 10px;margin:6px 0 0;font:500 14px "Public Sans",system-ui,sans-serif;color:#152420;cursor:pointer}' +
    '.hl-item.note{background:#FFF6D6}' +
    '.hl-item.gone{opacity:.55}' +
    '.hl-item .nb-body{display:block}' +
    '.hl-item .nb-cite{display:block;font-size:12.5px;color:#6B4E10;font-style:italic;margin-top:2px}' +
    '.hl-sw{flex:none;width:14px;height:14px;border-radius:4px;margin-top:3px}' +
    '.hl-add{margin-top:10px;background:#FFF6D6;border:1px dashed #E8B84B;border-radius:8px;padding:8px 10px;width:100%;' +
      'text-align:left;font:700 13.5px "Public Sans",system-ui,sans-serif;color:#6B4E10;cursor:pointer}' +
    '.hl-clear{margin-top:10px;background:none;border:0;color:#A8123E;font:600 13px "Public Sans",system-ui,sans-serif;cursor:pointer;padding:4px 0}' +
    '@media print{.hl-ui{display:none!important}.nb-pin{display:none}}';
  document.head.appendChild(st);

  // --------------------------------------------------------- text index
  // Every annotatable text node in reading order, with its offset in the
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
  // so reformatting the HTML later does not lose annotations.
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

  // Turn a pair of offsets into the anchor we store.
  function anchorFrom(offs) {
    var N = norm(textIndex().text);
    var ns = 0, ne;
    while (N.map[ns] < offs.start) ns++;
    ne = ns;
    while (N.map[ne] < offs.end) ne++;
    return {
      t: N.s.slice(ns, ne),
      p: N.s.slice(Math.max(0, ns - CTX), ns),
      s: N.s.slice(ne, ne + CTX)
    };
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

  function marksOf(id) {
    return [].slice.call(document.querySelectorAll('mark.hl[data-hl="' + id + '"]'));
  }

  function unwrap(id) {
    var pin = document.querySelector('.nb-pin[data-note="' + id + '"]');
    if (pin) pin.parentNode.removeChild(pin);
    marksOf(id).forEach(function (m) {
      var parent = m.parentNode;
      while (m.firstChild) parent.insertBefore(m.firstChild, m);
      parent.removeChild(m);
      parent.normalize();
    });
  }

  function addPin(id) {
    var marks = marksOf(id);
    if (!marks.length || document.querySelector('.nb-pin[data-note="' + id + '"]')) return;
    var pin = document.createElement('button');
    pin.type = 'button';
    pin.className = 'nb-pin';
    pin.dataset.note = id;
    pin.title = 'Open this note';
    pin.setAttribute('aria-label', 'Open note');
    pin.textContent = '📝';
    marks[marks.length - 1].insertAdjacentElement('afterend', pin);
  }

  // Find a saved anchor in the current text; prefer the occurrence whose
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
    if (top + bh > window.innerHeight - 8) top = Math.max(8, rect.top - bh - 12);
    var left = rect.left + rect.width / 2 - bw / 2;
    left = Math.max(8, Math.min(left, document.documentElement.clientWidth - bw - 8));
    box.style.top = (window.scrollY + Math.max(8, top)) + 'px';
    box.style.left = (window.scrollX + left) + 'px';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]; });
  }
  function cut(s, n) { return s.length > n ? s.slice(0, n) + '…' : s; }

  // After acting, ignore selection events briefly so the bar cannot pop
  // straight back up.
  var quietUntil = 0;
  function quiet() { quietUntil = Date.now() + 700; }
  function clearSelection() {
    var sel = window.getSelection();
    if (sel && sel.rangeCount) sel.removeAllRanges();
  }

  // ------------------------------------------------------ selection bar
  var bar = el('div', 'hl-ui hl-bar',
    dots('') + '<span class="hl-lbl">Highlight</span>' +
    '<button type="button" class="nb-add">📝 Note</button>' + CLOSE);
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

  // Keep the text selected while pressing a button on a computer.
  bar.addEventListener('mousedown', function (e) { e.preventDefault(); });

  bar.addEventListener('click', function (e) {
    if (e.target.closest('.hl-x')) { clearSelection(); hideBar(); quiet(); return; }
    if (!pending) return;

    if (e.target.closest('.nb-add')) {
      var offs = pending, rect = null;
      var sel = window.getSelection();
      if (sel && sel.rangeCount) rect = sel.getRangeAt(0).getBoundingClientRect();
      var a = anchorFrom(offs);
      hideBar();
      clearSelection();
      quiet();
      openEditor({ id: '', t: a.t, p: a.p, s: a.s, body: '', offs: offs }, rect);
      return;
    }

    var d = e.target.closest('.hl-dot');
    if (!d) return;
    var anc = anchorFrom(pending);
    var h = {
      id: newId(), t: anc.t, p: anc.p, s: anc.s, c: d.dataset.c, at: Date.now()
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

  function newId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

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
      marksOf(popId).forEach(function (m) { m.className = 'hl hl-' + d.dataset.c; });
    }
    hidePop();
    quiet();
    renderPanel();
  });

  // ------------------------------------------------------- note editor
  var editor = el('div', 'hl-ui nb-edit');
  editor.hidden = true;
  document.body.appendChild(editor);
  var editing = null; // { id, t, p, s, body, offs? }

  function hideEditor() { editor.hidden = true; editing = null; }

  function openEditor(note, rect) {
    editing = note;
    editor.innerHTML =
      (note.t ? '<p class="nb-quote">📝 on: “' + esc(cut(note.t, 60)) + '”</p>' : '<p class="nb-quote">📝 Note for this page</p>') +
      '<textarea class="nb-ta" placeholder="Write your note…"></textarea>' +
      '<div class="nb-row"><button type="button" class="nb-save">Save</button>' +
      (note.id ? '<button type="button" class="nb-del">Delete</button>' : '') +
      '<button type="button" class="nb-close" aria-label="Close">×</button></div>';
    hideBar();
    hidePop();
    var r = rect;
    if (!r) {
      var host = note.id ? (document.querySelector('.nb-pin[data-note="' + note.id + '"]') || panel) : panel;
      r = host.getBoundingClientRect();
    }
    place(editor, r);
    var ta = editor.querySelector('.nb-ta');
    ta.value = note.body || '';
    setTimeout(function () { ta.focus(); }, 0);
  }

  editor.addEventListener('click', function (e) {
    if (e.target.closest('.nb-close')) { hideEditor(); quiet(); return; }
    if (!editing) return;
    var list = getNotes();

    if (e.target.closest('.nb-del')) {
      setNotes(list.filter(function (n) { return n.id !== editing.id; }));
      unwrap(editing.id);
      hideEditor();
      quiet();
      renderPanel();
      return;
    }

    if (!e.target.closest('.nb-save')) return;
    var body = editor.querySelector('.nb-ta').value.trim();
    if (!body) {
      // Saving an empty note deletes it (or simply cancels a new one).
      if (editing.id) {
        setNotes(list.filter(function (n) { return n.id !== editing.id; }));
        unwrap(editing.id);
      }
      hideEditor();
      quiet();
      renderPanel();
      return;
    }
    if (editing.id) {
      list.forEach(function (n) { if (n.id === editing.id) { n.body = body; n.at = Date.now(); } });
      setNotes(list);
    } else {
      var n = { id: newId(), t: editing.t || '', p: editing.p || '', s: editing.s || '', body: body, at: Date.now() };
      list.push(n);
      setNotes(list);
      if (editing.offs) { wrap(editing.offs.start, editing.offs.end, 'n', n.id); addPin(n.id); }
    }
    hideEditor();
    quiet();
    renderPanel();
  });

  // --------------------------------------------------- clicks elsewhere
  document.addEventListener('click', function (e) {
    if (e.target.closest('.hl-pop, .hl-bar, .nb-edit, .hl-panel')) return;

    var pin = e.target.closest('.nb-pin');
    var m = e.target.closest('mark.hl');
    var isNoteMark = m && m.classList.contains('hl-n');
    var id = pin ? pin.dataset.note : (isNoteMark ? m.dataset.hl : null);

    if (id) {
      var note = getNotes().filter(function (n) { return n.id === id; })[0];
      if (note) { openEditor(note, (pin || m).getBoundingClientRect()); return; }
    }
    var sel = window.getSelection();
    if (m && !isNoteMark && (!sel || sel.isCollapsed)) { hideEditor(); showPop(m); return; }
    hidePop();
    hideEditor();
  });

  function closeAll() {
    clearSelection();
    hideBar();
    hidePop();
    hideEditor();
    quiet();
  }

  // Right-click anywhere closes whichever box is open (and, while one is open,
  // takes the place of the browser's own right-click menu).
  document.addEventListener('contextmenu', function (e) {
    if (bar.hidden && pop.hidden && editor.hidden) return;
    e.preventDefault();
    closeAll();
  }, true);

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || (bar.hidden && pop.hidden && editor.hidden)) return;
    closeAll();
  });

  window.addEventListener('resize', function () { hideBar(); hidePop(); });

  // --------------------------------------------- "My highlights & notes"
  var panel = el('details', 'hl-ui hl-panel');
  var header = document.querySelector('header.top');
  var anchor = header && header.nextElementSibling && header.nextElementSibling.classList.contains('rp-btn')
    ? header.nextElementSibling : header;
  if (anchor) anchor.insertAdjacentElement('afterend', panel);
  else root.insertBefore(panel, root.firstChild);

  function renderPanel() {
    var hls = getList(), notes = getNotes();
    var total = hls.length + notes.length;
    var found = {};
    [].slice.call(document.querySelectorAll('mark.hl')).forEach(function (m) { found[m.dataset.hl] = 1; });

    var html = '<summary>🖍 My highlights &amp; notes · ' + total +
      (total ? '' : ' <span class="hl-hint">— select any text to highlight it or add a note</span>') +
      '</summary><div class="hl-body">';

    if (!total) {
      html += 'Select words anywhere in this note, then pick a colour or press <b>📝 Note</b>. Tap a highlight to recolour it, or a 📝 pin to open its note. Close any box with ×, a right-click or Esc.';
    }
    hls.forEach(function (h) {
      html += '<button type="button" class="hl-item' + (found[h.id] ? '' : ' gone') + '" data-id="' + h.id + '">' +
        '<span class="hl-sw hl-' + h.c + '"></span><span>' + esc(cut(h.t, 140)) +
        (found[h.id] ? '' : ' <i>(this text has changed in the note)</i>') + '</span></button>';
    });
    notes.forEach(function (n) {
      var missing = n.t && !found[n.id];
      html += '<button type="button" class="hl-item note' + (missing ? ' gone' : '') + '" data-note="' + n.id + '">' +
        '<span class="hl-sw">📝</span><span><span class="nb-body">' + esc(cut(n.body, 160)) + '</span>' +
        (n.t ? '<span class="nb-cite">on “' + esc(cut(n.t, 60)) + '”' + (missing ? ' — this text has changed' : '') + '</span>' : '<span class="nb-cite">note for this page</span>') +
        '</span></button>';
    });
    html += '<button type="button" class="hl-add">＋ Add a note for this page</button>';
    if (total) html += '<button type="button" class="hl-clear">Clear all highlights and notes in this note</button>';
    html += '</div>';

    var wasOpen = panel.open;
    panel.innerHTML = html;
    panel.open = wasOpen;
  }

  panel.addEventListener('click', function (e) {
    if (e.target.closest('.hl-add')) {
      openEditor({ id: '', t: '', p: '', s: '', body: '' }, panel.getBoundingClientRect());
      return;
    }
    if (e.target.closest('.hl-clear')) {
      if (!window.confirm('Remove every highlight and note on this page?')) return;
      getList().forEach(function (h) { unwrap(h.id); });
      getNotes().forEach(function (n) { unwrap(n.id); });
      setList([]);
      setNotes([]);
      hideEditor();
      renderPanel();
      return;
    }
    var item = e.target.closest('.hl-item');
    if (!item) return;

    if (item.dataset.note) {
      var note = getNotes().filter(function (n) { return n.id === item.dataset.note; })[0];
      if (!note) return;
      var pin = document.querySelector('.nb-pin[data-note="' + note.id + '"]');
      if (pin) pin.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(function () { openEditor(note, (pin || panel).getBoundingClientRect()); }, pin ? 420 : 0);
      return;
    }
    var marks = marksOf(item.dataset.id);
    if (!marks.length) return;
    marks[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    marks.forEach(function (x) { x.classList.add('hl-flash'); });
    setTimeout(function () { marks.forEach(function (x) { x.classList.remove('hl-flash'); }); }, 1600);
  });

  // ------------------------------------------------------------ start
  (function applySaved() {
    var hls = getList(), notes = getNotes();
    if (!hls.length && !notes.length) return;
    var N = norm(textIndex().text);
    hls.forEach(function (h) {
      var i = locate(h, N);
      if (i < 0 || !h.t) return;
      wrap(N.map[i], N.map[i + h.t.length - 1] + 1, h.c, h.id);
    });
    notes.forEach(function (n) {
      if (!n.t) return;
      var i = locate(n, N);
      if (i < 0) return;
      wrap(N.map[i], N.map[i + n.t.length - 1] + 1, 'n', n.id);
      addPin(n.id);
    });
  })();
  renderPanel();
})();
