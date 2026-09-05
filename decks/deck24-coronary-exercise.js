window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "coronary-exercise",
  title: "Coronary & Exercise",
  emoji: "🏃",
  subtitle: "Coronary anatomy & perfusion · regional blood flow · exercise physiology · RQ · BMR",
  colors: {
    front1: "#b91c1c", front2: "#c2410c",
    back1: "#BAE6FD", back2: "#D9F99D", backText: "#1c1917",
    chips: ["#b91c1c","#c2410c","#0E7A66","#1B5FA8","#7A3B9E","#ffd93d","#3dd6d6","#ff8fb1"]
  },
  cards: [
    {cat:"Coronary flow", q:"What is resting coronary blood flow, and what fraction of cardiac output?", a:"About 250 ml/min, roughly 5% of cardiac output. It can rise 4–5 fold to about 1000–1250 ml/min in exercise."},
    {cat:"Coronary flow", q:"What proportion of oxygen does the heart extract, compared with the rest of the body?", a:"About 70% for the myocardium, versus about 25% for the body as a whole."},
    {cat:"Coronary flow", q:"Why can the heart not meet increased demand by extracting more oxygen?", a:"Because it already extracts about 70% at rest, so extraction reserve is nearly exhausted. Extra demand must be met almost entirely by increased coronary FLOW — the physiological basis of angina."},
    {cat:"Coronary flow", q:"What is coronary sinus oxygen saturation?", a:"About 30% — the most desaturated blood in the body."},
    {cat:"Coronary flow", q:"State myocardial oxygen consumption at rest and in exercise.", a:"About 10 ml/100 g/min at rest, rising to about 70 ml/100 g/min in heavy exercise."},
    {cat:"Coronary flow", q:"What determines myocardial oxygen demand?", a:"Heart rate, contractility and wall tension (preload and afterload). Heart rate is usually the one most amenable to control."},

    {cat:"Perfusion pressure", q:"State the coronary perfusion pressure equation and its normal value.", a:"CPP = aortic diastolic pressure − LVEDP, normally about 60–80 mmHg."},
    {cat:"Perfusion pressure", q:"When does left coronary flow occur, and why?", a:"Almost entirely in DIASTOLE — during systole, intramyocardial pressure exceeds perfusion pressure and effectively occludes the vessels."},
    {cat:"Perfusion pressure", q:"When does right coronary flow occur?", a:"In both systole and diastole, because RV wall pressure is much lower."},
    {cat:"Perfusion pressure", q:"Name three things that reduce coronary perfusion.", a:"Falling aortic diastolic pressure, rising LVEDP, and tachycardia (which shortens diastole disproportionately)."},
    {cat:"Perfusion pressure", q:"Which myocardial layer is most vulnerable to ischaemia and why?", a:"The subendocardium — furthest from the epicardial vessels and exposed to the highest wall tension."},
    {cat:"Perfusion pressure", q:"Over what pressure range is coronary flow autoregulated?", a:"A perfusion pressure of roughly 60 to 180 mmHg."},
    {cat:"Perfusion pressure", q:"What controls coronary blood flow?", a:"Metabolic factors dominate — adenosine is the most important, plus hypoxia, H+, K+, CO2 and nitric oxide. Local metabolic control overrides autonomic tone."},

    {cat:"Coronary anatomy", q:"Where do the coronary arteries arise?", a:"From the ascending aorta — the right from the anterior aortic sinus, the left from the posterior (left) aortic sinus."},
    {cat:"Coronary anatomy", q:"What does the right coronary artery supply?", a:"Right atrium, right ventricle, the inferior wall of the LV, and the posterior third of the interventricular septum."},
    {cat:"Coronary anatomy", q:"Name the branches of the right coronary artery.", a:"Conus branch, SA nodal branch, right marginal, AV nodal branch, and the posterior descending artery in a right-dominant heart."},
    {cat:"Coronary anatomy", q:"What does the left anterior descending artery supply?", a:"The anterior wall of the LV, the apex, the anterior two-thirds of the interventricular septum, and most of the bundle branches. Its branches are the septal perforators and diagonals."},
    {cat:"Coronary anatomy", q:"What does the circumflex artery supply?", a:"The left atrium and the lateral and posterior LV, via obtuse marginal branches. It supplies the SA node and PDA in a minority of hearts."},
    {cat:"Coronary anatomy", q:"Which arteries supply the SA node?", a:"RCA in about 60%, circumflex in about 40%."},
    {cat:"Coronary anatomy", q:"Which arteries supply the AV node?", a:"RCA in about 80–90%, circumflex in about 10–20%."},
    {cat:"Coronary anatomy", q:"What is the blood supply of the bundle of His and the bundle branches?", a:"The bundle of His has a DUAL supply from LAD and RCA, so it is relatively protected. The left and right bundle branches are supplied by LAD septal perforators."},
    {cat:"Coronary anatomy", q:"Why does inferior MI cause bradycardia and heart block?", a:"Because the RCA supplies both the SA and AV nodes in most people. Heart block after an ANTERIOR (LAD) MI instead signifies a very large infarct and a far worse prognosis."},
    {cat:"Coronary anatomy", q:"How is coronary dominance defined, and what is the distribution?", a:"By which artery gives rise to the posterior descending artery. Right-dominant in about 70–80%, left-dominant in about 10%, co-dominant in the rest."},

    {cat:"Venous drainage", q:"How does venous blood leave the myocardium?", a:"About 85% via the coronary sinus into the right atrium (great, middle and small cardiac veins); anterior cardiac veins drain directly into the right atrium; and Thebesian veins drain directly into whichever chamber they lie beneath."},
    {cat:"Venous drainage", q:"Why are the Thebesian veins examinable?", a:"With the bronchial circulation they drain deoxygenated blood into the LEFT heart, creating the normal anatomical shunt of about 2–5% of cardiac output — which is why the A–a gradient is never zero."},

    {cat:"Regional flow", q:"How is cardiac output distributed at rest?", a:"Roughly: GI tract 25%, skeletal muscle 20%, kidney 20%, brain 15%, skin 5%, coronary 5% — on a resting output of about 5 L/min."},
    {cat:"Regional flow", q:"Give resting blood flow to skeletal muscle and its change in exercise.", a:"About 1200 ml/min at rest (20% of CO). Rises to about 4500 ml/min (47%) in light exercise and 22 000 ml/min (88%) in heavy exercise."},
    {cat:"Regional flow", q:"What happens to gut and renal blood flow in heavy exercise?", a:"Both fall sharply — the gut from about 1400 to 300 ml/min, and the kidney from about 1100 to 250 ml/min."},
    {cat:"Regional flow", q:"What happens to cerebral blood flow in exercise?", a:"It is essentially unchanged — the brain is protected."},
    {cat:"Regional flow", q:"Why do the kidney and gut suffer first in prolonged hypoperfusion?", a:"They are the organs sacrificed by the redistribution response, which preserves brain and heart. Hence AKI and gut ischaemia precede cerebral injury."},

    {cat:"Oxygen use", q:"Give oxygen consumption per 100 g for heart, kidney and brain.", a:"Heart about 10 ml/100 g/min, kidney 5, brain 3."},
    {cat:"Oxygen use", q:"What is whole-body oxygen consumption at rest?", a:"About 250 ml/min, with an extraction ratio of about 25%."},
    {cat:"Oxygen use", q:"What is mitochondrial PO2, and what is the critical value?", a:"About 1–3 kPa at the bottom of the oxygen cascade. Below a critical value of roughly 0.13 kPa (about 1 mmHg), oxidative phosphorylation fails and lactate is produced."},

    {cat:"Exercise metabolism", q:"How much ATP comes from one mole of glucose aerobically and anaerobically?", a:"38 ATP aerobically (glycolysis, Krebs and the electron transport chain) versus only about 3 ATP anaerobically from glycolysis alone."},
    {cat:"Exercise metabolism", q:"What is the respiratory quotient at rest, and for each substrate?", a:"About 0.8 on a mixed diet. Pure carbohydrate 1.0, pure fat 0.7, protein 0.8."},
    {cat:"Exercise metabolism", q:"Why does the respiratory quotient exceed 1.0 above the anaerobic threshold?", a:"Extra CO2 is produced from bicarbonate buffering of lactate — which is what makes the threshold detectable on CPET."},
    {cat:"Exercise metabolism", q:"What is the anaerobic threshold as a fraction of VO2max?", a:"About 45–65% of VO2max in the untrained, rising to around 80% in trained athletes."},
    {cat:"Exercise metabolism", q:"State the normal basal metabolic rate.", a:"About 197 kJ/m2/hr, or roughly 40 kcal/m2/hr — approximately 2000 kcal/day for an average adult."},
    {cat:"Exercise metabolism", q:"What is one MET?", a:"Resting oxygen consumption — 3.5 ml/kg/min."},
    {cat:"Exercise metabolism", q:"What functional capacity threshold is used preoperatively?", a:"4 METs — climbing a flight of stairs or walking up a hill."},
    {cat:"Exercise metabolism", q:"What CPET anaerobic threshold predicts increased perioperative risk?", a:"An anaerobic threshold below about 11 ml/kg/min."}
  ]
});
