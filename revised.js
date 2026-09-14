// revised.js — "mark as revised" ticks for every deck and every note.
//
// Loaded by index.html and by each notes/*.html page (as ../revised.js).
// Ticks live only in this browser's localStorage; the "Copy progress code" /
// "Paste code" buttons move them between devices. Nothing here touches app.js
// or style.css — the few styles needed are injected from this file.
//
// Stored shape:  { n: { "<note filename without .html>": timestamp },
//                  d: { "<deck id>": timestamp } }
(function () {
  var KEY = 'edaic-revised-v1';

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || '{}');
      return { n: s.n || {}, d: s.d || {} };
    } catch (e) { return { n: {}, d: {} }; }
  }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* storage blocked */ }
  }
  function toggle(kind, id) {
    var s = load();
    if (s[kind][id]) delete s[kind][id]; else s[kind][id] = Date.now();
    save(s);
  }
  function noteKey(href) {
    return String(href).split(/[?#]/)[0].split('/').pop().replace(/\.html$/, '');
  }
  function addStyle(css) {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
  }

  if (/\/notes\//.test(location.pathname)) notePage(); else indexPage();

  // ---------------------------------------------------------------- note page
  function notePage() {
    var id = noteKey(location.pathname);
    addStyle(
      '.rp-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;margin:0 0 18px;' +
        'padding:12px 16px;border-radius:12px;border:2px dashed #9FB3A8;background:#fff;color:#152420;' +
        'font:700 15px "Public Sans",system-ui,sans-serif;cursor:pointer}' +
      '.rp-btn.done{border-style:solid;border-color:#0E7A66;background:#E6F7F2;color:#0A4E41}' +
      '.rp-box{width:20px;height:20px;border-radius:5px;border:2px solid currentColor;display:inline-flex;' +
        'align-items:center;justify-content:center;font-size:14px;line-height:1}' +
      '@media print{.rp-btn{display:none}}'
    );

    var btns = [];
    function make() {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'rp-btn';
      b.addEventListener('click', function () { toggle('n', id); render(); });
      btns.push(b);
      return b;
    }
    // One button under the title, one at the end of the note.
    var header = document.querySelector('header.top');
    if (header) header.insertAdjacentElement('afterend', make());
    var end = document.querySelector('.wrap > p.src') || document.querySelector('.wrap > footer');
    if (end) end.insertAdjacentElement('beforebegin', make());

    function render() {
      var done = !!load().n[id];
      btns.forEach(function (b) {
        b.classList.toggle('done', done);
        b.innerHTML = '<span class="rp-box">' + (done ? '✓' : '') + '</span>' +
          (done ? 'Revised — tap to undo' : 'Mark this note as revised');
      });
    }
    render();
    window.addEventListener('pageshow', render);
    window.addEventListener('storage', render);
  }

  // --------------------------------------------------------------- home page
  function indexPage() {
    addStyle(
      '.rp-tick{display:inline-flex;align-items:center;justify-content:center;flex:none;width:18px;height:18px;' +
        'box-sizing:border-box;border-radius:5px;border:1.7px solid currentColor;opacity:.8;cursor:pointer;' +
        'font-size:12.5px;font-weight:900;line-height:1;vertical-align:-3px}' +
      '.rp-tick.on{background:#3ddc97;border-color:#3ddc97;opacity:1}' +
      '.rp-tick.on::after{content:"✓";color:#0c2b23}' +
      '.deck-tab .rp-tick{margin-right:7px}' +
      '.rp-row{display:flex;align-items:flex-start;gap:9px;padding:5px 0;line-height:1.35}' +
      '.rp-row .rp-tick{margin-top:1px}' +
      'a.rp-done{opacity:.55}' +
      '.rp-sum{color:#3ddc97;font-weight:700;margin-left:6px;font-size:13px}' +
      '.rp-meter{display:block;height:6px;margin:9px 0 5px;border-radius:6px;background:rgba(255,255,255,.14);overflow:hidden}' +
      '.rp-fill{display:block;height:100%;width:0;border-radius:6px;background:#3ddc97;transition:width .25s}' +
      '.rp-meta{display:block;font-size:12.5px;font-weight:600;color:#bfb3dd}' +
      '.rp-meta b{color:#3ddc97}' +
      '.rp-backup{margin:10px 2px 2px;font-size:12.5px;color:#9d8fc4;line-height:1.9}' +
      '.rp-backup button{font:600 12.5px inherit;font-family:inherit;color:#fff;background:rgba(203,184,255,.16);' +
        'border:1px solid rgba(203,184,255,.35);border-radius:8px;padding:3px 10px;margin:0 4px 0 0;cursor:pointer}'
    );

    function tick(kind, id, name) {
      var t = document.createElement('span');
      t.className = 'rp-tick';
      t.dataset.kind = kind;
      t.dataset.id = id;
      t.setAttribute('role', 'checkbox');
      t.setAttribute('aria-label', 'Mark ' + name + ' as revised');
      return t;
    }

    function meter(summary) {
      var wrap = document.createElement('span');
      wrap.innerHTML = '<span class="rp-meter"><span class="rp-fill"></span></span><span class="rp-meta"></span>';
      summary.appendChild(wrap);
      return { fill: wrap.querySelector('.rp-fill'), meta: wrap.querySelector('.rp-meta') };
    }

    function backupRow(container) {
      var row = document.createElement('div');
      row.className = 'rp-backup';
      row.innerHTML = 'Ticks are saved on this device only. ' +
        '<button type="button" data-rp="copy">Copy progress code</button>' +
        '<button type="button" data-rp="paste">Paste code</button>';
      container.appendChild(row);
    }

    // ---- notes: turn each group's inline list into a checklist ----
    var firstNote = document.querySelector('details a[href^="notes/"]');
    var menu = firstNote && firstNote.closest('details').parentElement.closest('details');
    var groups = [], notesMeter = null;

    if (menu) {
      [].slice.call(menu.querySelectorAll('details')).forEach(function (g) {
        var div = g.querySelector(':scope > div');
        if (!div) return;
        var links = [].slice.call(div.children).filter(function (el) { return el.matches('a[href^="notes/"]'); });
        if (!links.length) return;
        // Drop the " · " separators between links.
        [].slice.call(div.childNodes).forEach(function (n) {
          if (n.nodeType === 3 && /^[\s·]*$/.test(n.nodeValue)) div.removeChild(n);
        });
        links.forEach(function (a) {
          var row = document.createElement('div');
          row.className = 'rp-row';
          div.insertBefore(row, a);
          row.appendChild(tick('n', noteKey(a.getAttribute('href')), a.textContent.trim()));
          row.appendChild(a);
        });
        var sum = document.createElement('span');
        sum.className = 'rp-sum';
        g.querySelector('summary').appendChild(sum);
        groups.push({ el: g, sum: sum });
      });
      notesMeter = meter(menu.querySelector('summary'));
      backupRow(menu.querySelector(':scope > div'));
    }

    // ---- decks: a tick inside every deck tab ----
    var idByLabel = {};
    (window.DECKS || []).forEach(function (d) {
      idByLabel[(d.emoji ? d.emoji + ' ' : '') + d.title] = d.id;
    });
    var picker = document.getElementById('deckPicker');
    var decksMeter = picker ? meter(picker.querySelector('summary')) : null;
    var subSums = {};
    ['nTopic', 'nMcq'].forEach(function (id) {
      var n = document.getElementById(id);
      if (!n) return;
      var sum = document.createElement('span');
      sum.className = 'rp-sum';
      n.insertAdjacentElement('afterend', sum);
      subSums[id] = sum;
    });
    if (picker) backupRow(picker.querySelector(':scope > div'));

    function decorateTabs() {
      [].slice.call(document.querySelectorAll('.deck-tab')).forEach(function (b) {
        if (b.querySelector('.rp-tick')) return;
        var id = idByLabel[b.textContent];
        if (!id) return;
        b.insertBefore(tick('d', id, b.textContent.trim()), b.firstChild);
      });
      renderAll();
    }
    // app.js rebuilds the tabs on every deck change, and the helper in
    // index.html then moves the MCQ ones — re-decorate whenever either list
    // changes. Adding a tick inside a tab is not a childList change on these
    // containers, so this cannot loop.
    ['deckTabs', 'mcqTabs'].forEach(function (id) {
      var c = document.getElementById(id);
      if (c) new MutationObserver(decorateTabs).observe(c, { childList: true });
    });

    function setMeter(m, done, total, noun) {
      if (!m) return;
      m.fill.style.width = (total ? Math.round(100 * done / total) : 0) + '%';
      m.meta.innerHTML = '<b>' + done + '</b> of ' + total + ' ' + noun + ' revised · ' + (total - done) + ' left';
    }

    function renderAll() {
      var s = load();
      [].slice.call(document.querySelectorAll('.rp-tick')).forEach(function (t) {
        var on = !!s[t.dataset.kind][t.dataset.id];
        t.classList.toggle('on', on);
        t.setAttribute('aria-checked', on ? 'true' : 'false');
        if (t.dataset.kind === 'n') {
          var a = t.parentNode.querySelector('a');
          if (a) a.classList.toggle('rp-done', on);
        }
      });

      function countNotes(root) {
        var ids = {};
        [].slice.call(root.querySelectorAll('.rp-tick[data-kind="n"]')).forEach(function (t) { ids[t.dataset.id] = 1; });
        var all = Object.keys(ids);
        return { total: all.length, done: all.filter(function (k) { return s.n[k]; }).length };
      }
      groups.forEach(function (g) {
        var c = countNotes(g.el);
        g.sum.textContent = '✓ ' + c.done + '/' + c.total;
      });
      if (menu) { var c = countNotes(menu); setMeter(notesMeter, c.done, c.total, 'notes'); }

      function countTabs(container) {
        var ts = container ? [].slice.call(container.querySelectorAll('.rp-tick')) : [];
        return { total: ts.length, done: ts.filter(function (t) { return s.d[t.dataset.id]; }).length };
      }
      var topic = countTabs(document.getElementById('deckTabs'));
      var mcq = countTabs(document.getElementById('mcqTabs'));
      if (subSums.nTopic) subSums.nTopic.textContent = '✓ ' + topic.done + '/' + topic.total;
      if (subSums.nMcq) subSums.nMcq.textContent = '✓ ' + mcq.done + '/' + mcq.total;
      setMeter(decksMeter, topic.done + mcq.done, topic.total + mcq.total, 'decks');
    }

    // Capture phase, so tapping a tick never also opens the note, switches
    // the deck, or closes the deck picker.
    document.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('.rp-tick') : null;
      if (t) {
        e.preventDefault();
        e.stopPropagation();
        toggle(t.dataset.kind, t.dataset.id);
        renderAll();
        return;
      }
      var b = e.target.closest ? e.target.closest('.rp-backup button') : null;
      if (!b) return;
      e.stopPropagation();
      if (b.dataset.rp === 'copy') copyCode(); else pasteCode();
    }, true);

    function copyCode() {
      var code = 'EDAIC1:' + btoa(JSON.stringify(load()));
      function fallback() { window.prompt('Copy this code, then paste it on your other device:', code); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(function () {
          alert('Progress code copied. On your other device, open the site and tap "Paste code".');
        }, fallback);
      } else fallback();
    }

    function pasteCode() {
      var code = window.prompt('Paste your progress code:');
      if (!code) return;
      try {
        var got = JSON.parse(atob(code.trim().replace(/^EDAIC1:/, '')));
        var s = load(), added = 0;
        ['n', 'd'].forEach(function (k) {
          Object.keys(got[k] || {}).forEach(function (id) {
            if (!s[k][id]) { s[k][id] = got[k][id]; added++; }
          });
        });
        save(s);
        renderAll();
        alert(added ? 'Done — ' + added + ' ticks added. Nothing already ticked here was removed.' : 'Nothing new — this device already has all of those ticks.');
      } catch (err) {
        alert('That code did not work. Copy it again in full and retry.');
      }
    }

    decorateTabs();
    window.addEventListener('pageshow', renderAll);
    window.addEventListener('storage', renderAll);
  }
})();
