window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "mcq4",
  title: "MCQ 4",
  emoji: "🎯",
  subtitle: "Mixed true/false · 50 stems · Part I basic sciences + Part II clinical",
  colors: {
    front1: "#7c3aed", front2: "#db2777",
    back1: "#a7f3d0", back2: "#fde68a", backText: "#0f2b23",
    chips: ["#7c3aed","#db2777","#ff9a3d","#ffd93d","#7bd88f","#3dd6d6","#5ab0ff","#ff8fb1"]
  },
  cards: [
    {cat:"Physiology", q:"Aldosterone increases sodium reabsorption and potassium secretion in the collecting duct.", a:"TRUE. It acts on mineralocorticoid receptors in principal cells, increasing ENaC and Na+/K+ ATPase activity."},
    {cat:"Physiology", q:"Renin directly causes vasoconstriction.", a:"FALSE. Renin is an enzyme converting angiotensinogen to angiotensin I. Angiotensin II is the vasoconstrictor, formed by ACE."},
    {cat:"Physiology", q:"Angiotensin-converting enzyme is found predominantly in the pulmonary circulation.", a:"TRUE. It also degrades bradykinin — which is why ACE inhibitors cause cough and angioedema."},
    {cat:"Physiology", q:"ADH acts on V2 receptors to insert aquaporin-2 channels in the collecting duct.", a:"TRUE. V1 receptors mediate vasoconstriction, which is why vasopressin is used as a vasopressor."},
    {cat:"Physiology", q:"The proximal convoluted tubule reabsorbs approximately 25% of the filtered sodium load.", a:"FALSE. It reabsorbs about 65-70%. The loop of Henle takes a further 25%, with fine tuning distally."},
    {cat:"Physiology", q:"Erythropoietin is produced by the renal interstitial cells in response to hypoxia.", a:"TRUE. Its loss in chronic kidney disease causes normochromic normocytic anaemia."},
    {cat:"Physiology", q:"The liver receives approximately 25% of cardiac output.", a:"TRUE. About 1500 ml/min, of which roughly 75% is portal venous and 25% hepatic arterial."},
    {cat:"Physiology", q:"Factor VIII is synthesised in the liver.", a:"FALSE. It is produced largely by vascular endothelium, so it is preserved or raised in liver disease — unlike the other factors."},

    {cat:"Anatomy", q:"The epidural space is bounded posteriorly by the ligamentum flavum.", a:"TRUE. Anteriorly by the posterior longitudinal ligament and laterally by the pedicles and intervertebral foramina."},
    {cat:"Anatomy", q:"The T4 dermatome corresponds to the umbilicus.", a:"FALSE. T4 is the nipple line; T10 is the umbilicus. T6 is the xiphisternum."},
    {cat:"Anatomy", q:"The cricothyroid membrane lies between the thyroid and cricoid cartilages.", a:"TRUE. It is the site for emergency front-of-neck access, typically 8-10 mm high and relatively avascular in the midline."},
    {cat:"Anatomy", q:"The subclavian vein passes anterior to the anterior scalene muscle.", a:"TRUE. The subclavian artery and brachial plexus pass posterior to it — the basis of the supraclavicular approach."},

    {cat:"Pharmacology", q:"Propofol reduces cerebral metabolic rate, cerebral blood flow and intracranial pressure.", a:"TRUE. Flow-metabolism coupling is preserved, unlike with volatile agents."},
    {cat:"Pharmacology", q:"Volatile anaesthetic agents preserve cerebral flow-metabolism coupling.", a:"FALSE. They UNCOUPLE it — reducing CMRO2 while causing dose-dependent cerebral vasodilation, so CBF and ICP rise."},
    {cat:"Pharmacology", q:"Etomidate suppresses adrenocortical function after a single induction dose.", a:"TRUE. By inhibiting 11-beta-hydroxylase, with suppression lasting up to 24 hours — the main reason for its decline in use."},
    {cat:"Pharmacology", q:"Ketamine is a useful induction agent in severe asthma.", a:"TRUE. It is a bronchodilator and preserves respiratory drive and cardiovascular stability, though it increases secretions."},
    {cat:"Pharmacology", q:"Flumazenil has a longer duration of action than midazolam.", a:"FALSE. It is shorter (about 45-60 minutes), so resedation can occur and an infusion may be needed."},
    {cat:"Pharmacology", q:"Nitrous oxide irreversibly oxidises the cobalt ion in vitamin B12.", a:"TRUE. This inactivates methionine synthase, impairing DNA synthesis. Prolonged or repeated exposure causes megaloblastic change and neuropathy."},
    {cat:"Pharmacology", q:"Desflurane causes airway irritation and is unsuitable for gas induction.", a:"TRUE. It causes coughing, breath-holding and laryngospasm. Sevoflurane is the agent of choice for inhalational induction."},
    {cat:"Pharmacology", q:"A rapid increase in inspired desflurane concentration can cause tachycardia and hypertension.", a:"TRUE. Through sympathetic stimulation, most marked above 1 MAC — mitigated by increasing the concentration gradually."},
    {cat:"Pharmacology", q:"Metformin should be withheld before surgery because it causes hypoglycaemia.", a:"FALSE. Metformin does not typically cause hypoglycaemia; the concern is lactic acidosis, particularly with renal impairment or contrast."},
    {cat:"Pharmacology", q:"Sulphonylureas can cause hypoglycaemia in the fasted surgical patient.", a:"TRUE. They stimulate insulin release independently of glucose, so they are usually omitted on the day of surgery."},

    {cat:"Physics & measurement", q:"Cerebral oximetry uses near-infrared light passing through skin and skull to sample brain tissue.", a:"TRUE. It gives a regional saturation reflecting mostly venous blood, and is not dependent on pulsatile flow."},
    {cat:"Physics & measurement", q:"Mass spectrometry and Raman spectrometry can both identify volatile anaesthetic agents.", a:"TRUE. As can infrared absorption. Paramagnetic analysis is used for oxygen only."},
    {cat:"Physics & measurement", q:"An oxygen fuel cell requires an external power source.", a:"FALSE. It is a self-powered galvanic cell that generates its own current, and is consumed over time. A Clark polarographic electrode does require a power source."},
    {cat:"Physics & measurement", q:"A bimetallic strip is used for temperature compensation in a plenum vaporiser.", a:"TRUE. It alters the splitting ratio as vaporiser temperature falls, keeping output constant."},
    {cat:"Physics & measurement", q:"The pumping effect increases vaporiser output during positive pressure ventilation.", a:"TRUE. Retrograde pressure fluctuations push gas back into the vaporising chamber. Minimised by long inlet tubes and one-way valves."},
    {cat:"Physics & measurement", q:"Antistatic flooring in theatre should have a very low electrical resistance.", a:"FALSE. It needs INTERMEDIATE resistance — low enough to dissipate static charge, high enough to protect against electrocution from mains faults."},

    {cat:"Statistics", q:"Ordinal data should be analysed with non-parametric tests.", a:"TRUE. Ordinal data are ranked but with unequal intervals, so means and standard deviations are inappropriate."},
    {cat:"Statistics", q:"The standard deviation describes the precision of the sample mean.", a:"FALSE. SD describes the spread of the data. The STANDARD ERROR (SD/root n) describes the precision of the mean."},

    {cat:"Clinical anaesthesia", q:"A Mallampati class I view means the soft palate, fauces, uvula and pillars are all visible.", a:"TRUE. Class II loses the pillars, class III shows only soft palate and base of uvula, class IV shows only hard palate."},
    {cat:"Clinical anaesthesia", q:"A thyromental distance of less than 6 cm predicts potential difficulty with laryngoscopy.", a:"TRUE. As does a sternomental distance under 12.5 cm, limited mouth opening under 3 cm, and reduced neck extension."},
    {cat:"Clinical anaesthesia", q:"Cricoid pressure should be released if the patient actively vomits.", a:"TRUE. Continued pressure during active vomiting risks oesophageal rupture."},
    {cat:"Clinical anaesthesia", q:"Fibreoptic intubation can be performed through a laryngeal mask airway.", a:"TRUE. Particularly through intubating LMAs, and it forms part of difficult airway algorithms as a conduit technique."},
    {cat:"Clinical anaesthesia", q:"Benzodiazepine premedication reduces the risk of awareness.", a:"TRUE. Their amnesic effect is useful where awareness risk is high, such as obstetric and cardiac surgery."},
    {cat:"Clinical anaesthesia", q:"During sleep the BIS trace can resemble that seen under general anaesthesia.", a:"TRUE. The processed EEG is not specific to anaesthesia, which is one limitation of depth monitoring."},
    {cat:"Clinical anaesthesia", q:"Suxamethonium causes a transient rise in intragastric pressure but barrier pressure is usually maintained.", a:"TRUE. Lower oesophageal sphincter tone rises in parallel, so barrier pressure is generally preserved."},

    {cat:"Obstetrics", q:"Aortocaval compression is relieved by a right lateral tilt.", a:"FALSE. LEFT lateral tilt (or manual left uterine displacement) moves the uterus off the inferior vena cava."},
    {cat:"Obstetrics", q:"Phenylephrine is associated with less fetal acidosis than ephedrine during spinal for caesarean section.", a:"TRUE. Ephedrine crosses the placenta and increases fetal metabolic rate, lowering umbilical pH."},
    {cat:"Obstetrics", q:"Pre-eclampsia is associated with thrombocytopenia and may preclude neuraxial blockade.", a:"TRUE. Check the platelet count and its trend, plus coagulation if HELLP is suspected."},

    {cat:"Paediatrics", q:"Neonates rely on non-shivering thermogenesis in brown adipose tissue.", a:"TRUE. They cannot shiver effectively, and their high surface area to volume ratio makes them very prone to hypothermia."},
    {cat:"Paediatrics", q:"Fetal haemoglobin constitutes the majority of haemoglobin at birth and falls over the first months of life.", a:"TRUE. About 70-80% at birth, reaching adult proportions by around 6 months — contributing to the physiological nadir of infancy."},

    {cat:"Regional", q:"A test dose containing adrenaline produces tachycardia if injected intravascularly.", a:"TRUE. Typically 3 ml of 2% lidocaine with 1:200,000 adrenaline. A rapid dense motor block instead suggests intrathecal placement."},
    {cat:"Regional", q:"Post-dural puncture headache is characteristically worse on lying flat.", a:"FALSE. It is POSTURAL — worse on sitting or standing, relieved by lying flat."},
    {cat:"Regional", q:"Pencil-point spinal needles reduce the incidence of post-dural puncture headache compared with cutting needles.", a:"TRUE. As does using a smaller gauge needle. Whitacre and Sprotte are pencil-point designs."},
    {cat:"Regional", q:"An expanding epidural haematoma requires decompression within 24 hours for the best chance of recovery.", a:"FALSE. Decompression should occur within about 8 hours of symptom onset; delay markedly worsens neurological outcome."},

    {cat:"Intensive care", q:"Noradrenaline is the first-line vasopressor in septic shock.", a:"TRUE. Vasopressin may be added second line; dopamine is no longer recommended because of arrhythmia risk."},
    {cat:"Intensive care", q:"Hydrocortisone is indicated in septic shock refractory to fluids and vasopressors.", a:"TRUE. About 200 mg/day. It shortens time to shock reversal, though the mortality benefit remains debated."},
    {cat:"Intensive care", q:"Dopamine at low dose reliably protects renal function in critical illness.", a:"FALSE. So-called renal-dose dopamine does not prevent AKI or improve outcome, and increases arrhythmias."},
    {cat:"Intensive care", q:"Prone positioning for at least 16 hours per session improves mortality in severe ARDS.", a:"TRUE. Demonstrated in PROSEVA for PaO2/FiO2 below 150 mmHg."}
  ]
});
