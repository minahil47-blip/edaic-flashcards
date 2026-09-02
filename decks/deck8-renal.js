window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "renal",
  title: "Renal",
  emoji: "🩸",
  subtitle: "GFR · Tubular function · Acid-base · Fluid compartments · Electrolytes · AKI",
  colors: {
    front1: "#2563eb", front2: "#7c3aed",
    back1: "#fef08a", back2: "#bbf7d0", backText: "#1e293b",
    chips: ["#2563eb","#7c3aed","#3dd6d6","#7bd88f","#ffd93d","#ff9a3d","#ff6b9d","#5ab0ff"]
  },
  cards: [
    {cat:"Anatomy & flow", q:"What is renal blood flow, and what fraction of cardiac output?", a:"About 1000–1250 ml/min, roughly 20–25% of cardiac output — the highest flow per gram of any organ."},
    {cat:"Anatomy & flow", q:"How is renal blood flow distributed?", a:"About 90% to the cortex, 10% to the medulla. The medulla is relatively hypoxic, making the thick ascending limb vulnerable to ischaemia."},
    {cat:"Anatomy & flow", q:"Over what pressure range is renal blood flow autoregulated?", a:"MAP of roughly 80–180 mmHg, via the myogenic response and tubuloglomerular feedback."},
    {cat:"Anatomy & flow", q:"What is tubuloglomerular feedback?", a:"The macula densa senses distal tubular sodium chloride; a rise causes afferent arteriolar constriction, reducing GFR. A fall triggers renin release."},
    {cat:"Anatomy & flow", q:"Difference between afferent and efferent arteriolar constriction?", a:"Afferent constriction reduces both renal blood flow and GFR. Efferent constriction (e.g. angiotensin II) reduces flow but maintains or raises GFR by increasing filtration pressure."},
    {cat:"Anatomy & flow", q:"Why do ACE inhibitors and NSAIDs risk AKI together?", a:"NSAIDs block prostaglandin-mediated afferent vasodilation while ACE inhibitors block angiotensin-mediated efferent constriction — filtration pressure collapses, especially if hypovolaemic."},

    {cat:"GFR", q:"What is normal GFR and filtration fraction?", a:"About 125 ml/min (180 L/day). Filtration fraction = GFR/renal plasma flow ≈ 20%."},
    {cat:"GFR", q:"What determines glomerular filtration?", a:"Net filtration pressure = glomerular capillary hydrostatic pressure − (Bowman's capsule pressure + capillary oncotic pressure). Roughly 55 − (15 + 30) = 10 mmHg."},
    {cat:"GFR", q:"What makes an ideal marker for measuring GFR, and what is the gold standard?", a:"Freely filtered, neither secreted nor reabsorbed, not metabolised or protein bound. Inulin is the gold standard; creatinine is the practical substitute."},
    {cat:"GFR", q:"Why does creatinine clearance overestimate GFR?", a:"Creatinine is filtered but also actively secreted by the proximal tubule, so clearance exceeds true GFR by 10–20%."},
    {cat:"GFR", q:"Why is serum creatinine an insensitive early marker of renal impairment?", a:"GFR must fall by roughly 50% before creatinine rises above the normal range, and it depends on muscle mass, age and sex."},
    {cat:"GFR", q:"Which substance is used to measure renal plasma flow?", a:"Para-aminohippuric acid (PAH), which is almost completely cleared in one pass by filtration and secretion."},
    {cat:"GFR", q:"What is the filtration barrier composed of?", a:"Fenestrated capillary endothelium, glomerular basement membrane, and podocyte foot processes with filtration slits. It is negatively charged, restricting albumin."},

    {cat:"Tubular function", q:"What is reabsorbed in the proximal convoluted tubule?", a:"About 65–70% of filtered sodium and water isosmotically, plus essentially all glucose and amino acids, most bicarbonate, and phosphate. Site of organic acid and base secretion."},
    {cat:"Tubular function", q:"What is the renal threshold for glucose?", a:"About 10–11 mmol/L, at which the sodium-glucose cotransporters saturate and glycosuria appears."},
    {cat:"Tubular function", q:"What happens in the loop of Henle?", a:"Descending limb: water permeable, solute impermeable. Thick ascending limb: solute (Na-K-2Cl) reabsorption, water impermeable — the 'diluting segment'. Together they form the countercurrent multiplier."},
    {cat:"Tubular function", q:"What is the role of the vasa recta?", a:"A countercurrent exchanger preserving the medullary concentration gradient while supplying blood to the medulla."},
    {cat:"Tubular function", q:"What happens in the distal convoluted tubule and collecting duct?", a:"DCT: Na-Cl cotransport (thiazide site), PTH-regulated calcium reabsorption. Collecting duct: aldosterone-driven sodium reabsorption with potassium and hydrogen secretion, and ADH-dependent water reabsorption via aquaporin-2."},
    {cat:"Tubular function", q:"Where do the main diuretic classes act?", a:"Carbonic anhydrase inhibitors: PCT. Osmotic diuretics: whole tubule, mainly loop. Loop diuretics: NKCC2 in the thick ascending limb. Thiazides: DCT. Potassium-sparing (spironolactone, amiloride): collecting duct."},
    {cat:"Tubular function", q:"How does ADH act?", a:"Via V2 receptors on the collecting duct, inserting aquaporin-2 channels to increase water permeability. V1 receptors mediate vasoconstriction."},
    {cat:"Tubular function", q:"What stimulates ADH release?", a:"Increased plasma osmolality (the most sensitive stimulus, from about 280 mosmol/kg), hypovolaemia, hypotension, pain, nausea, stress and surgery."},

    {cat:"Acid-base", q:"How do the kidneys handle bicarbonate?", a:"Essentially all filtered bicarbonate is reabsorbed, mostly in the proximal tubule, via carbonic anhydrase-dependent H+ secretion. New bicarbonate is generated distally alongside acid excretion."},
    {cat:"Acid-base", q:"How is acid excreted in urine?", a:"As titratable acid (mainly phosphate buffer) and as ammonium — about 50–100 mmol/day of fixed acid."},
    {cat:"Acid-base", q:"State the Henderson–Hasselbalch equation.", a:"pH = 6.1 + log([HCO3⁻] / (0.03 × PaCO2 in mmHg)). Normal pH 7.35–7.45."},
    {cat:"Acid-base", q:"How do you calculate and interpret the anion gap?", a:"(Na+ + K+) − (Cl⁻ + HCO3⁻), normally 10–18 mmol/L (or 8–16 without potassium). A raised gap indicates unmeasured anions."},
    {cat:"Acid-base", q:"Causes of a high anion gap metabolic acidosis?", a:"Lactate, ketones (DKA, alcohol, starvation), urate (renal failure), and toxins — methanol, ethylene glycol, salicylates. Mnemonic: MUDPILES."},
    {cat:"Acid-base", q:"Causes of a normal anion gap (hyperchloraemic) acidosis?", a:"Diarrhoea, renal tubular acidosis, carbonic anhydrase inhibitors, ureteric diversion, and large-volume 0.9% saline infusion."},
    {cat:"Acid-base", q:"What is base excess?", a:"The amount of strong acid or base needed to return 1 litre of blood to pH 7.4 at PaCO2 5.3 kPa and 37°C. Normal ±2 mmol/L; more negative than −2 indicates metabolic acidosis."},
    {cat:"Acid-base", q:"How rapid is respiratory versus renal compensation?", a:"Respiratory compensation begins within minutes and is complete in hours. Renal compensation takes 2–5 days but is more complete."},
    {cat:"Acid-base", q:"Outline the Stewart (physicochemical) approach.", a:"pH is determined by three independent variables: PaCO2, the strong ion difference, and total weak acid concentration. It explains hyperchloraemic acidosis from saline better than the traditional approach."},

    {cat:"Fluid compartments", q:"Describe body fluid compartments in a 70 kg adult.", a:"Total body water about 42 L (60% of weight): intracellular 28 L (two thirds), extracellular 14 L (one third) — interstitial about 10.5 L and plasma about 3.5 L."},
    {cat:"Fluid compartments", q:"How are compartment volumes measured?", a:"Total body water: deuterium or tritiated water. ECF: inulin or mannitol. Plasma volume: labelled albumin or Evans blue. ICF is calculated by subtraction."},
    {cat:"Fluid compartments", q:"Difference between osmolarity and osmolality, and normal values?", a:"Osmolarity is per litre of solution, osmolality per kilogram of solvent. Normal plasma osmolality 275–295 mosmol/kg."},
    {cat:"Fluid compartments", q:"How do you calculate plasma osmolality and the osmolar gap?", a:"Calculated osmolality ≈ 2×Na+ + urea + glucose (mmol/L). The osmolar gap is measured minus calculated; a gap >10 suggests unmeasured osmoles such as alcohols or mannitol."},
    {cat:"Fluid compartments", q:"State the Starling equation in words.", a:"Net fluid flux depends on the balance between hydrostatic and oncotic pressure gradients across the capillary, modified by permeability and the reflection coefficient. The glycocalyx is now recognised as central to this."},
    {cat:"Fluid compartments", q:"How do crystalloid and colloid distribute?", a:"0.9% saline and Hartmann's distribute through the ECF (about 25% stays intravascular). 5% dextrose distributes through total body water (about 8% stays intravascular). Colloids stay largely intravascular initially."},

    {cat:"Electrolytes", q:"Causes and ECG features of hyperkalaemia?", a:"Renal failure, acidosis, tissue breakdown, suxamethonium, potassium-sparing diuretics, Addison's. ECG: tall peaked T waves, flattened P, PR prolongation, broad QRS, then sine wave and arrest."},
    {cat:"Electrolytes", q:"How is severe hyperkalaemia treated?", a:"Calcium chloride or gluconate to stabilise the myocardium, insulin with dextrose and nebulised salbutamol to shift potassium intracellularly, and dialysis or resins to remove it."},
    {cat:"Electrolytes", q:"Why must chronic hyponatraemia be corrected slowly?", a:"Rapid correction risks osmotic demyelination (central pontine myelinolysis). Limit correction to about 8–10 mmol/L in 24 hours."},
    {cat:"Electrolytes", q:"How is hyponatraemia classified?", a:"By volume status: hypovolaemic (diuretics, GI loss), euvolaemic (SIADH, hypothyroidism), hypervolaemic (cardiac, hepatic or renal failure). Also consider TURP syndrome perioperatively."},
    {cat:"Electrolytes", q:"What is TURP syndrome?", a:"Absorption of hypotonic irrigation fluid causing dilutional hyponatraemia, fluid overload, confusion, seizures and visual disturbance. Reduced risk with bipolar resection using saline irrigation."},
    {cat:"Electrolytes", q:"Features of hypomagnesaemia?", a:"Arrhythmias including torsades, tetany, weakness, and refractory hypokalaemia and hypocalcaemia. Magnesium also potentiates neuromuscular blockade."},

    {cat:"AKI & renal failure", q:"How is AKI classified?", a:"By the KDIGO criteria, using a rise in serum creatinine (≥26 micromol/L in 48 hours, or ≥1.5× baseline) or urine output <0.5 ml/kg/h, graded stages 1–3."},
    {cat:"AKI & renal failure", q:"Distinguish pre-renal, renal and post-renal causes.", a:"Pre-renal: hypoperfusion (commonest perioperatively). Renal: intrinsic — ATN, nephrotoxins, glomerulonephritis. Post-renal: obstruction."},
    {cat:"AKI & renal failure", q:"How do urinary indices differentiate pre-renal from ATN?", a:"Pre-renal: urine sodium <20 mmol/L, fractional excretion of sodium <1%, high urine osmolality. ATN: urine sodium >40, FENa >2%, urine osmolality near plasma."},
    {cat:"AKI & renal failure", q:"Which perioperative measures protect the kidney?", a:"Maintain perfusion pressure and euvolaemia, avoid nephrotoxins (NSAIDs, aminoglycosides, contrast), treat sepsis early. Neither dopamine nor loop diuretics prevent AKI."},
    {cat:"AKI & renal failure", q:"Which anaesthetic drugs need caution in renal failure?", a:"Morphine (M6G accumulation), pethidine (norpethidine), suxamethonium if hyperkalaemic, gabapentin, and renally cleared relaxants. Atracurium and cisatracurium are preferred; remifentanil is unaffected."},
    {cat:"AKI & renal failure", q:"What are the indications for renal replacement therapy?", a:"Refractory hyperkalaemia, severe acidosis, fluid overload with pulmonary oedema, uraemic complications (pericarditis, encephalopathy) and certain poisonings."},
    {cat:"AKI & renal failure", q:"Which non-excretory renal functions are lost in chronic kidney disease?", a:"Erythropoietin production (anaemia), vitamin D activation (renal bone disease and hypocalcaemia), and acid-base and blood pressure regulation."}
  ]
});
