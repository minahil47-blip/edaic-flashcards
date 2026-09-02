window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "gastro-liver-endo",
  title: "GI · Liver · Endo",
  emoji: "🫀",
  subtitle: "Gut · Hepatic function · Bilirubin · Thyroid · Adrenal · Glucose · Calcium",
  colors: {
    front1: "#f97316", front2: "#e11d48",
    back1: "#bbf7d0", back2: "#a5f3fc", backText: "#0f2b23",
    chips: ["#f97316","#e11d48","#ffd93d","#7bd88f","#3dd6d6","#5ab0ff","#b98bff","#ff8fb1"]
  },
  cards: [
    {cat:"GI physiology", q:"What are the main gastric secretions and their sources?", a:"Parietal cells: HCl and intrinsic factor. Chief cells: pepsinogen. G cells: gastrin. Mucous cells: mucus and bicarbonate."},
    {cat:"GI physiology", q:"What stimulates gastric acid secretion?", a:"Acetylcholine (vagal), gastrin and histamine acting on H2 receptors — all converging on the parietal cell H+/K+ ATPase (proton pump)."},
    {cat:"GI physiology", q:"What is normal gastric volume and pH, and what is the aspiration risk threshold?", a:"Resting volume under 25 ml with pH about 1.5–3.5. Classical (though debated) risk thresholds are volume >25 ml and pH <2.5."},
    {cat:"GI physiology", q:"Which factors delay gastric emptying?", a:"Opioids, anticholinergics, pain, anxiety, trauma, diabetic autonomic neuropathy, labour and raised intracranial pressure."},
    {cat:"GI physiology", q:"What are the current fasting guidelines?", a:"6 hours for solids and formula, 4 hours for breast milk, 2 hours for clear fluids."},
    {cat:"GI physiology", q:"Describe the lower oesophageal sphincter and what affects it.", a:"A physiological sphincter; barrier pressure = LOS pressure − gastric pressure. Reduced by opioids, volatiles, propofol, anticholinergics and pregnancy; increased by metoclopramide and suxamethonium."},
    {cat:"GI physiology", q:"Where are the main nutrients absorbed?", a:"Iron and calcium in the duodenum; most carbohydrate, protein and fat in the jejunum; vitamin B12 and bile salts in the terminal ileum; water and electrolytes in the colon."},
    {cat:"GI physiology", q:"What is intrinsic factor and why does it matter?", a:"A parietal cell glycoprotein required for vitamin B12 absorption in the terminal ileum. Its loss causes pernicious anaemia; nitrous oxide separately inactivates B12-dependent methionine synthase."},
    {cat:"GI physiology", q:"What is splanchnic blood flow and how is it affected by anaesthesia?", a:"About 25% of cardiac output. Reduced by hypovolaemia, sympathetic stimulation, vasopressors and positive pressure ventilation."},

    {cat:"Liver", q:"Describe the liver's dual blood supply.", a:"Portal vein supplies about 70–75% of flow but only around half the oxygen; hepatic artery supplies about 25–30% of flow and half the oxygen. Total flow is roughly 25% of cardiac output (1500 ml/min)."},
    {cat:"Liver", q:"What is the hepatic arterial buffer response?", a:"Hepatic arterial flow increases when portal venous flow falls, partially maintaining total hepatic blood flow. Mediated by adenosine washout."},
    {cat:"Liver", q:"Describe the liver acinus and which zone is most vulnerable.", a:"Zone 1 (periportal) is best oxygenated; zone 3 (centrilobular, around the hepatic vein) is least oxygenated and most vulnerable to ischaemia and to paracetamol toxicity."},
    {cat:"Liver", q:"List the main synthetic functions of the liver.", a:"Albumin, clotting factors (all except factor VIII and von Willebrand factor), plasma cholinesterase, complement, thrombopoietin, and carrier proteins."},
    {cat:"Liver", q:"Which clotting factor is NOT made in the liver?", a:"Factor VIII, produced largely by endothelium — hence it is preserved or raised in liver disease, unlike the others."},
    {cat:"Liver", q:"Distinguish phase I and phase II metabolism.", a:"Phase I: oxidation, reduction and hydrolysis (mainly cytochrome P450), producing a reactive group. Phase II: conjugation (glucuronidation, sulphation, acetylation) to a water-soluble excretable form."},
    {cat:"Liver", q:"What is first-pass metabolism?", a:"Metabolism of an orally absorbed drug by the gut wall and liver before it reaches the systemic circulation — extensive for morphine, GTN, propranolol and lidocaine."},
    {cat:"Liver", q:"What does hepatic extraction ratio predict about clearance?", a:"High extraction ratio (>0.7, e.g. propofol, morphine, lidocaine) means flow-dependent clearance. Low extraction ratio (<0.3, e.g. diazepam, phenytoin, warfarin) means capacity-dependent clearance affected by enzyme induction and protein binding."},
    {cat:"Liver", q:"Name important P450 inducers and inhibitors.", a:"Inducers: rifampicin, phenytoin, carbamazepine, barbiturates, chronic alcohol, St John's wort. Inhibitors: erythromycin, ciprofloxacin, cimetidine, omeprazole, grapefruit juice, acute alcohol."},
    {cat:"Liver", q:"How is albumin relevant to anaesthesia?", a:"Normal 35–50 g/L, half-life about 20 days. It binds acidic drugs; alpha-1 acid glycoprotein binds basic drugs. Hypoalbuminaemia increases free drug fraction."},
    {cat:"Liver", q:"How is the liver involved in acid-base and metabolic homeostasis?", a:"Gluconeogenesis and glycogen storage, urea synthesis from ammonia (ornithine cycle), lactate clearance via the Cori cycle, and ketone production."},
    {cat:"Liver", q:"What is the Child–Pugh score?", a:"A severity score for chronic liver disease using bilirubin, albumin, INR, ascites and encephalopathy; classes A, B and C predict increasing perioperative mortality."},

    {cat:"Bilirubin", q:"Describe bilirubin metabolism.", a:"Haem breakdown gives unconjugated (fat-soluble, albumin-bound) bilirubin, conjugated with glucuronide in the liver to a water-soluble form, excreted in bile, converted by gut bacteria to urobilinogen and stercobilin."},
    {cat:"Bilirubin", q:"How do the three types of jaundice differ biochemically?", a:"Pre-hepatic (haemolysis): unconjugated bilirubin high, urobilinogen high, no bilirubin in urine. Hepatic: mixed. Post-hepatic (obstructive): conjugated bilirubin high, bilirubin in urine, pale stools, low urobilinogen."},
    {cat:"Bilirubin", q:"Why does neonatal jaundice occur and when is it pathological?", a:"Immature glucuronyl transferase plus a high red cell turnover. Jaundice within 24 hours of birth, or very high levels risking kernicterus, is pathological."},

    {cat:"Thyroid", q:"Outline thyroid hormone synthesis and control.", a:"Iodide trapping, oxidation and organification onto thyroglobulin, coupling to T3 and T4, released under TSH from the anterior pituitary, itself driven by hypothalamic TRH with negative feedback."},
    {cat:"Thyroid", q:"Compare T3 and T4.", a:"T4 is the main secretory product with a half-life of about 7 days; T3 is about 4 times more potent, mostly formed by peripheral deiodination, half-life about 1 day. Both are highly protein bound."},
    {cat:"Thyroid", q:"What are the anaesthetic concerns in hyperthyroidism?", a:"Risk of thyroid storm, tachyarrhythmias, high output failure, and a potentially difficult airway with goitre. Render euthyroid preoperatively; treat with beta blockade, carbimazole/propylthiouracil, iodine and steroids."},
    {cat:"Thyroid", q:"What are the anaesthetic concerns in hypothyroidism?", a:"Sensitivity to anaesthetic agents, reduced cardiac output, hypothermia, hyponatraemia, delayed gastric emptying and adrenal insufficiency. Severe cases risk myxoedema coma."},
    {cat:"Thyroid", q:"Which nerve is at risk in thyroid surgery and what results from injury?", a:"The recurrent laryngeal nerve. Unilateral injury gives hoarseness; bilateral injury can cause stridor and airway obstruction requiring reintubation."},

    {cat:"Adrenal", q:"What does each layer of the adrenal cortex produce?", a:"Zona glomerulosa: aldosterone. Zona fasciculata: cortisol. Zona reticularis: androgens. Remember: salt, sugar, sex."},
    {cat:"Adrenal", q:"What does the adrenal medulla secrete?", a:"Catecholamines, approximately 80% adrenaline and 20% noradrenaline. It is effectively a modified sympathetic ganglion supplied by preganglionic fibres."},
    {cat:"Adrenal", q:"Describe the actions of cortisol.", a:"Gluconeogenesis and insulin antagonism, protein catabolism, lipolysis, anti-inflammatory and immunosuppressive effects, permissive action on catecholamines, and mineralocorticoid activity at high doses."},
    {cat:"Adrenal", q:"Outline the renin–angiotensin–aldosterone system.", a:"Renin from juxtaglomerular cells converts angiotensinogen to angiotensin I; ACE (mainly pulmonary) converts it to angiotensin II, a potent vasoconstrictor which stimulates aldosterone release, causing sodium and water retention with potassium loss."},
    {cat:"Adrenal", q:"What triggers renin release?", a:"Reduced renal perfusion pressure, reduced distal tubular sodium (macula densa) and sympathetic beta-1 stimulation."},
    {cat:"Adrenal", q:"What is the perioperative steroid concern and typical cover?", a:"Suppression of the hypothalamic-pituitary-adrenal axis in patients on long-term steroids risks addisonian crisis. Supplementary hydrocortisone is given, scaled to the magnitude of surgery."},
    {cat:"Adrenal", q:"What are the anaesthetic priorities in phaeochromocytoma?", a:"Alpha blockade first (phenoxybenzamine or doxazosin), then beta blockade if needed — never beta first, which risks unopposed alpha vasoconstriction. Expect swings in BP on tumour handling and hypotension after venous ligation."},

    {cat:"Glucose", q:"Describe the actions of insulin.", a:"Anabolic: glucose uptake via GLUT4 in muscle and fat, glycogenesis, lipogenesis, protein synthesis, and potassium shift into cells."},
    {cat:"Glucose", q:"Name the counter-regulatory hormones.", a:"Glucagon, adrenaline, cortisol and growth hormone."},
    {cat:"Glucose", q:"What is the metabolic stress response to surgery?", a:"Catabolic: raised cortisol, catecholamines, glucagon, growth hormone, ADH and aldosterone; insulin resistance with hyperglycaemia, sodium and water retention, and protein breakdown. Attenuated by regional anaesthesia and by minimally invasive surgery."},
    {cat:"Glucose", q:"How does DKA differ from HHS?", a:"DKA: type 1, ketoacidosis, high anion gap, glucose often moderately raised. HHS: type 2, profound hyperglycaemia and hyperosmolality with minimal ketosis, greater dehydration and higher mortality."},
    {cat:"Glucose", q:"Key anaesthetic considerations in diabetes?", a:"Autonomic neuropathy (silent ischaemia, gastroparesis, cardiovascular instability), stiff joint syndrome and potentially difficult intubation, renal impairment, infection risk, and the need for careful perioperative glycaemic control."},

    {cat:"Calcium", q:"How is plasma calcium distributed and regulated?", a:"About 45% ionised (the active fraction), 45% protein bound (mainly albumin) and 10% complexed. Regulated by parathyroid hormone, vitamin D and calcitonin."},
    {cat:"Calcium", q:"What are the actions of parathyroid hormone?", a:"Raises plasma calcium: bone resorption, renal calcium reabsorption with phosphate excretion, and activation of vitamin D to increase gut absorption."},
    {cat:"Calcium", q:"Why does alkalosis cause tetany?", a:"Alkalosis increases calcium binding to albumin, reducing the ionised fraction — total calcium is unchanged but symptoms of hypocalcaemia appear."},
    {cat:"Calcium", q:"Causes and features of hypocalcaemia?", a:"Hypoparathyroidism (including post-thyroidectomy), vitamin D deficiency, pancreatitis, massive transfusion (citrate), alkalosis. Features: paraesthesia, tetany, Chvostek and Trousseau signs, prolonged QT, laryngospasm."},
    {cat:"Calcium", q:"Features of hypercalcaemia?", a:"Nausea, constipation, polyuria, confusion, shortened QT, renal stones. Commonest causes are malignancy and primary hyperparathyroidism."},

    {cat:"Pituitary", q:"What does the anterior pituitary secrete?", a:"ACTH, TSH, FSH, LH, growth hormone and prolactin — under hypothalamic releasing hormones via the portal system."},
    {cat:"Pituitary", q:"What does the posterior pituitary secrete?", a:"ADH (vasopressin) and oxytocin — synthesised in the hypothalamus and transported down axons."},
    {cat:"Pituitary", q:"Compare diabetes insipidus and SIADH.", a:"DI: ADH deficiency or resistance — large volumes of dilute urine, hypernatraemia, high plasma osmolality. SIADH: excess ADH — concentrated urine, hyponatraemia, low plasma osmolality with euvolaemia."},
    {cat:"Pituitary", q:"What are the anaesthetic concerns in acromegaly?", a:"Difficult airway (macroglossia, prognathism, subglottic narrowing), obstructive sleep apnoea, hypertension, cardiomyopathy, diabetes and possible recurrent laryngeal nerve involvement."}
  ]
});
