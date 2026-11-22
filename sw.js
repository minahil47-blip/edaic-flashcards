/* sw.js — offline support.
 *
 * Every page, deck and note is precached on first visit, so after one load on
 * a good connection the whole app works with the network completely off.
 *
 * Bump CACHE whenever content changes: the old cache is deleted on activate,
 * which is what makes a new deck or note actually reach people who already
 * installed the app.
 */
const CACHE = 'edaic-v4';

const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './style.css',
  './app.js',
  './highlights.js',
  './revised.js',
  './decks/deck1-cvs-core.js',
  './decks/deck10-icu.js',
  './decks/deck11-pharmacology.js',
  './decks/deck12-formulas.js',
  './decks/deck13-mcq2.js',
  './decks/deck14-mcq3.js',
  './decks/deck15-mcq4.js',
  './decks/deck16-mcq5.js',
  './decks/deck17-cardiac-ap.js',
  './decks/deck18-cardiac-cycle.js',
  './decks/deck19-autonomic.js',
  './decks/deck2-cvs-mechanisms.js',
  './decks/deck20-lung-volumes.js',
  './decks/deck21-muscle-nerve.js',
  './decks/deck22-drug-lists.js',
  './decks/deck23-cardiac-antiinfective-drugs.js',
  './decks/deck24-coronary-exercise.js',
  './decks/deck25-csf-nmj-disease.js',
  './decks/deck26-equipment.js',
  './decks/deck27-exam-mcq1.js',
  './decks/deck28-exam-physiology.js',
  './decks/deck29-exam-pharmacology.js',
  './decks/deck3-respiratory.js',
  './decks/deck30-exam-physics.js',
  './decks/deck31-exam-anatomy-regional.js',
  './decks/deck32-exam-clinical-icu.js',
  './decks/deck33-statistics-research.js',
  './decks/deck34-airway.js',
  './decks/deck4-mixed-mcq.js',
  './decks/deck5-neurophysiology.js',
  './decks/deck6-physics-stats.js',
  './decks/deck7-gastro-liver-endo.js',
  './decks/deck8-renal.js',
  './decks/deck9-regional.js',
  './notes/notes.css',
  './notes/adrenal-pituitary-steroids.html',
  './notes/anatomy-thorax-abdomen.html',
  './notes/anion-gap.html',
  './notes/antiarrhythmics.html',
  './notes/antimicrobials.html',
  './notes/asthma-bronchospasm.html',
  './notes/autonomic-adrenoceptors.html',
  './notes/blood-groups-crossmatching.html',
  './notes/brachial-plexus.html',
  './notes/cannulae-flow-physics.html',
  './notes/cardiac-action-potentials.html',
  './notes/cardiac-cycle.html',
  './notes/cardiothoracic-neuroanaesthesia.html',
  './notes/co-poisoning-burns.html',
  './notes/coagulation-transfusion.html',
  './notes/complications-positioning.html',
  './notes/coronary-circulation.html',
  './notes/csf-and-meningitis.html',
  './notes/dka-hhs.html',
  './notes/drug-lists.html',
  './notes/drug-metabolism-kinetics-porphyria.html',
  './notes/drugs-internal-medicine.html',
  './notes/ethics-decision-making.html',
  './notes/fetal-circulation.html',
  './notes/hypoxaemia-a-a-gradient.html',
  './notes/immunology-anaphylaxis.html',
  './notes/inhalational-agents.html',
  './notes/iv-induction-agents.html',
  './notes/larynx-airway-anatomy.html',
  './notes/lung-resection-thoracic.html',
  './notes/lung-volumes.html',
  './notes/mapleson-systems.html',
  './notes/massive-transfusion-electrolytes.html',
  './notes/myasthenia-lems-cholinergic.html',
  './notes/nerve-ap-reflexes.html',
  './notes/neuromuscular-monitoring.html',
  './notes/nmb-anticholinesterases.html',
  './notes/nutrition-fluids-refeeding.html',
  './notes/obstetric-anaesthesia.html',
  './notes/obstetric-emergencies.html',
  './notes/opioids.html',
  './notes/oxygen-delivery-devices.html',
  './notes/paediatric-neonatal.html',
  './notes/pain.html',
  './notes/physiology-pregnancy-child-ageing.html',
  './notes/pneumonectomy-vs-lobectomy.html',
  './notes/poisoning-toxicology.html',
  './notes/preoperative-assessment.html',
  './notes/pulmonary-function-tests.html',
  './notes/rass-cam-icu.html',
  './notes/regional-blood-flow-exercise.html',
  './notes/renal-physiology.html',
  './notes/resuscitation-als.html',
  './notes/sga-cuff-pressures.html',
  './notes/shock-haemodynamics.html',
  './notes/skeletal-muscle.html',
  './notes/sodium-fluid-compartments.html',
  './notes/spinal-needles-pdph.html',
  './notes/stress-response-surgery.html',
  './notes/theatre-safety-physics.html',
  './notes/tongue-pharynx-reflexes.html',
  './notes/vap-cpis.html',
  './notes/workstation-pressures.html',
];

self.addEventListener('install', (e) => {
  // addAll fails the whole install if any single file 404s, so cache
  // individually and tolerate misses — a stale precache list must not make
  // the app uninstallable.
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(PRECACHE.map((u) => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // leave Google Fonts etc. to the network

  // Stale-while-revalidate: answer instantly from cache (so it is fast and
  // works with no signal), and refresh the cached copy in the background for
  // next time. Plain cache-first would pin users to whatever shipped on their
  // first visit, which is wrong for a site whose notes and decks change often.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      const live = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => null);

      if (hit) return hit;                       // cached: instant, refresh behind
      return live.then((res) => {
        if (res) return res;
        // Offline and never cached: navigations fall back to the app shell.
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 504, statusText: 'offline' });
      });
    })
  );
});
