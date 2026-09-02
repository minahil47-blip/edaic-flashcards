window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "cvs-mechanisms",
  title: "CVS Mechanisms",
  emoji: "⚡",
  subtitle: "PV loops · Action potentials · Conduction · Coronary anatomy · Traps",
  colors: {
    front1: "#3d8bff", front2: "#a63dff",
    back1: "#c6ff3d", back2: "#3dd6d6", backText: "#0f2b2b",
    chips: ["#3d8bff","#a63dff","#ff3d81","#ff9a3d","#ffd93d","#3ddc97","#3dd6d6","#ff6b6b","#c6ff3d"]
  },
  cards: [
    {cat:"Cycle phases", q:"List the phases of the cardiac cycle in order.", a:"Atrial systole → isovolumetric contraction → ventricular ejection → isovolumetric relaxation → ventricular filling."},
    {cat:"Cycle phases", q:"What defines isovolumetric contraction?", a:"Both AV and semilunar valves are closed; ventricular pressure rises sharply while volume stays constant."},
    {cat:"Cycle phases", q:"What defines isovolumetric relaxation?", a:"Both AV and semilunar valves are closed; ventricular pressure falls sharply while volume stays constant."},
    {cat:"Cycle phases", q:"What opens the mitral valve and starts ventricular filling?", a:"LV pressure falling below LA pressure at the end of isovolumetric relaxation."},
    {cat:"Cycle phases", q:"What opens the aortic valve?", a:"LV pressure exceeding aortic pressure at the end of isovolumetric contraction."},

    {cat:"PV loop", q:"What does the width of the PV loop represent?", a:"Stroke volume (EDV − ESV)."},
    {cat:"PV loop", q:"What does the area enclosed by the PV loop represent?", a:"Stroke work (external work done by the ventricle per beat)."},
    {cat:"PV loop", q:"What does the slope of the end-systolic PV relationship (ESPVR) represent?", a:"Contractility (Ees) — steeper slope = greater contractility."},
    {cat:"PV loop", q:"What does the end-diastolic PV relationship (EDPVR) represent?", a:"Passive ventricular filling/compliance — steeper = stiffer, less compliant ventricle."},
    {cat:"PV loop", q:"On a PV loop, which corner corresponds to mitral valve opening?", a:"The lower-left corner (lowest pressure, ESV point) where filling begins."},
    {cat:"PV loop", q:"Which line of the PV loop is vertical and why?", a:"The isovolumetric contraction and relaxation lines — volume is constant while pressure changes."},
    {cat:"PV loop", q:"How does the PV loop change in aortic stenosis?", a:"It becomes taller and narrower — high peak pressure needed to overcome the stenotic valve, reduced SV."},
    {cat:"PV loop", q:"How does the PV loop change in acute increased afterload?", a:"Loop shifts up/right; SV falls and ESV rises for the same contractility."},

    {cat:"Numbers", q:"Typical normal EDV, ESV and SV values?", a:"EDV ≈ 120 mL, ESV ≈ 50 mL, SV ≈ 70 mL."},
    {cat:"Numbers", q:"Normal LVEDP?", a:"≈ 8–12 mmHg."},
    {cat:"Numbers", q:"Normal LV systolic pressure?", a:"≈ 120 mmHg (same as aortic systolic)."},
    {cat:"Numbers", q:"Normal RV systolic / diastolic pressure?", a:"≈ 25 / 0–5 mmHg."},
    {cat:"Numbers", q:"Normal pulmonary artery pressure?", a:"≈ 25/8 mmHg (mean ≈ 12–15 mmHg)."},
    {cat:"Numbers", q:"Normal right atrial (CVP) pressure?", a:"≈ 2–6 mmHg."},
    {cat:"Numbers", q:"Normal pulmonary capillary wedge pressure (PCWP)?", a:"≈ 6–12 mmHg — estimates LA pressure/preload."},

    {cat:"Heart sounds", q:"S1 occurs at the start of which phase?", a:"Isovolumetric contraction (mitral + tricuspid valves close)."},
    {cat:"Heart sounds", q:"S2 occurs at the start of which phase?", a:"Isovolumetric relaxation (aortic + pulmonic valves close)."},
    {cat:"Heart sounds", q:"What causes physiological splitting of S2?", a:"Inspiration ↑ venous return to RV, delaying pulmonic valve closure relative to aortic."},
    {cat:"Heart sounds", q:"When in the cycle does S3 occur?", a:"Early diastole, during rapid ventricular filling."},
    {cat:"Heart sounds", q:"When in the cycle does S4 occur?", a:"Late diastole, during atrial contraction (the 'atrial kick')."},

    {cat:"SA node AP", q:"What generates the pacemaker (phase 4) potential in SA node cells?", a:"The funny current (If) through HCN channels, causing slow spontaneous depolarisation."},
    {cat:"SA node AP", q:"What causes phase 0 upstroke in the SA node?", a:"Opening of L-type calcium channels (slow upstroke) — NOT fast sodium channels."},
    {cat:"SA node AP", q:"Does the SA node action potential have a true plateau (phase 2)?", a:"No — SA/AV node cells lack the fast Na+ channel and plateau seen in ventricular myocytes."},
    {cat:"SA node AP", q:"What causes repolarisation (phase 3) in the SA node?", a:"K+ efflux through delayed rectifier potassium channels."},
    {cat:"SA node AP", q:"Which autonomic input speeds SA node phase 4 slope, and how?", a:"Sympathetic stimulation (β1) increases If and Ca2+ current, steepening phase 4 and increasing HR."},

    {cat:"AV node AP", q:"How is AV node conduction similar to the SA node?", a:"Slow, calcium-channel-dependent upstroke; no fast Na+ phase 0."},
    {cat:"AV node AP", q:"Why does the AV node cause a physiological delay?", a:"Slow decremental conduction through the node delays the impulse (~0.1 s), allowing ventricular filling before contraction."},
    {cat:"AV node AP", q:"Why is the AV node particularly vulnerable to ischaemia/block?", a:"Its slow calcium-dependent conduction makes it sensitive to hypoxia, ischaemia and vagal tone, predisposing to conduction block."},

    {cat:"Ventricular AP", q:"What causes phase 0 in a ventricular myocyte?", a:"Rapid Na+ influx through fast voltage-gated sodium channels."},
    {cat:"Ventricular AP", q:"What causes the phase 1 notch?", a:"Transient outward K+ current."},
    {cat:"Ventricular AP", q:"What maintains the phase 2 plateau?", a:"Balance between Ca2+ influx (L-type channels) and K+ efflux."},
    {cat:"Ventricular AP", q:"What causes phase 3 repolarisation?", a:"K+ efflux via delayed rectifier channels as Ca2+ channels close."},
    {cat:"Ventricular AP", q:"What is phase 4 in a ventricular myocyte?", a:"Stable resting membrane potential (≈ −90 mV), unlike the pacemaker cells."},
    {cat:"Ventricular AP", q:"Key difference: ventricular myocyte AP vs SA/AV node AP?", a:"Ventricular cells have a fast Na+-driven upstroke and true plateau; nodal cells have a slow Ca2+-driven upstroke, no plateau, and spontaneous phase 4 depolarisation."},

    {cat:"Conduction", q:"List the normal conduction pathway from SA node to ventricle.", a:"SA node → internodal pathways → AV node → bundle of His → bundle branches → Purkinje fibres → ventricular myocardium."},
    {cat:"Conduction", q:"Which part of the conduction system has the fastest conduction velocity?", a:"Purkinje fibres."},
    {cat:"Conduction", q:"Which part of the conduction system has the slowest conduction velocity?", a:"The AV node."},
    {cat:"Conduction", q:"Why is slow AV nodal conduction physiologically useful?", a:"It protects the ventricles from very fast atrial rates (e.g. in AF or flutter) by limiting impulses that get through."},

    {cat:"AV block", q:"Describe first-degree AV block.", a:"Prolonged but fixed PR interval (>200 ms); every P wave conducts."},
    {cat:"AV block", q:"Describe Mobitz type I (Wenckebach) block.", a:"Progressive PR prolongation until a P wave fails to conduct (dropped beat), then the cycle repeats."},
    {cat:"AV block", q:"Describe Mobitz type II block.", a:"Fixed PR interval with intermittent non-conducted P waves; more dangerous, often needs pacing."},
    {cat:"AV block", q:"Describe third-degree (complete) heart block.", a:"Complete AV dissociation — atria and ventricles beat independently; ventricular escape rhythm."},
    {cat:"AV block", q:"Which block type usually needs a pacemaker: Mobitz I or Mobitz II?", a:"Mobitz II (higher risk of progression to complete heart block)."},

    {cat:"Baroreceptors", q:"Where are the two main arterial baroreceptor sites?", a:"Carotid sinus and aortic arch."},
    {cat:"Baroreceptors", q:"Which cranial nerve carries carotid sinus baroreceptor afferents?", a:"CN IX (glossopharyngeal)."},
    {cat:"Baroreceptors", q:"Which cranial nerve carries aortic arch baroreceptor afferents?", a:"CN X (vagus)."},
    {cat:"Baroreceptors", q:"Where do baroreceptor afferents synapse centrally?", a:"The nucleus tractus solitarius (NTS) in the medulla."},
    {cat:"Baroreceptors", q:"What is the reflex response to a rise in BP (↑ stretch)?", a:"↑ Baroreceptor firing → ↑ parasympathetic and ↓ sympathetic outflow → ↓ HR, ↓ contractility, ↓ SVR."},
    {cat:"Baroreceptors", q:"What is the reflex response to a fall in BP (e.g. haemorrhage)?", a:"↓ Baroreceptor firing → ↓ parasympathetic and ↑ sympathetic outflow → ↑ HR, ↑ contractility, ↑ SVR."},

    {cat:"Coronary anatomy", q:"What does the LAD supply?", a:"Anterior LV wall and the anterior two-thirds of the interventricular septum."},
    {cat:"Coronary anatomy", q:"What does the left circumflex (LCx) supply?", a:"The lateral and posterior LV wall."},
    {cat:"Coronary anatomy", q:"What does the RCA typically supply?", a:"Inferior wall, RV, and (in most people) the SA and AV nodes."},
    {cat:"Coronary anatomy", q:"What proportion of people supply the SA node from the RCA?", a:"≈ 60%."},
    {cat:"Coronary anatomy", q:"What proportion of people supply the AV node from the RCA?", a:"≈ 90%."},
    {cat:"Coronary anatomy", q:"What defines coronary 'dominance'?", a:"Whichever artery (RCA or LCx) gives rise to the posterior descending artery (PDA)."},
    {cat:"Coronary anatomy", q:"Approximate distribution of right vs left vs codominance?", a:"Right dominant ≈ 70%, left dominant ≈ 10%, codominant ≈ 20%."},

    {cat:"Vaso-substances", q:"Name three endogenous vasodilators.", a:"Nitric oxide (NO), prostacyclin (PGI2), adenosine."},
    {cat:"Vaso-substances", q:"Name three endogenous vasoconstrictors.", a:"Endothelin-1, thromboxane A2, angiotensin II."},
    {cat:"Vaso-substances", q:"Where is nitric oxide produced and what is its mechanism?", a:"Vascular endothelium; activates guanylate cyclase → ↑ cGMP → smooth muscle relaxation."},
    {cat:"Vaso-substances", q:"What is the most potent endogenous vasoconstrictor?", a:"Endothelin-1."},

    {cat:"Poiseuille", q:"State Poiseuille's law for vascular resistance.", a:"Resistance = 8ηL / (πr⁴), where η = viscosity, L = length, r = radius."},
    {cat:"Poiseuille", q:"How does flow relate to vessel radius?", a:"Flow is proportional to r⁴ — small changes in radius cause huge changes in flow/resistance."},
    {cat:"Poiseuille", q:"If vessel radius halves, what happens to resistance?", a:"Resistance increases 16-fold (2⁴)."},
    {cat:"Poiseuille", q:"Which vessels contribute most to total systemic vascular resistance?", a:"Arterioles ('resistance vessels')."},

    {cat:"Traps", q:"Normal SVR range (dynes·s/cm⁵)?", a:"≈ 800–1200 dynes·s/cm⁵."},
    {cat:"Traps", q:"Normal PVR range (dynes·s/cm⁵)?", a:"≈ 40–160 dynes·s/cm⁵ (much lower than SVR)."},
    {cat:"Traps", q:"Trap: does S3 always mean heart failure?", a:"No — it can be normal in young people and pregnancy; pathological S3 usually implies volume overload/heart failure in older adults."},
    {cat:"Trap", q:"Trap: which valve closes first, aortic or pulmonic, in normal physiological splitting?", a:"Aortic valve closes first; pulmonic closure is delayed, especially on inspiration."},
    {cat:"Traps", q:"Trap: is coronary perfusion pressure calculated from systolic or diastolic aortic pressure?", a:"Diastolic aortic pressure (CPP ≈ aortic DBP − LVEDP), since most LV flow occurs in diastole."},
    {cat:"Traps", q:"Trap: which node has faster intrinsic rate, SA or AV?", a:"SA node (≈60–100 bpm) is faster than the AV node's intrinsic escape rate (≈40–60 bpm)."},
    {cat:"Traps", q:"Trap: does phenylephrine increase or decrease HR, and why?", a:"It tends to decrease HR — pure α1 agonism raises SVR/BP, triggering a baroreceptor-mediated reflex bradycardia."},
    {cat:"Traps", q:"Trap: MAP formula — is it CO × SVR or CO / SVR?", a:"MAP ≈ CO × SVR (not divided)."},
    {cat:"Traps", q:"Trap: what is the vulnerable period for arrhythmia on the ECG?", a:"The peak/downslope of the T wave (relative refractory period) — an R-on-T stimulus can trigger VT/VF."}
  ]
});
