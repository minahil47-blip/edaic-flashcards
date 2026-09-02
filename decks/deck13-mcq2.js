window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "mcq2",
  title: "MCQ 2",
  emoji: "🎯",
  subtitle: "Mixed true/false · 50 stems · Part I basic sciences + Part II clinical",
  colors: {
    front1: "#f43f5e", front2: "#f59e0b",
    back1: "#c7d2fe", back2: "#bae6fd", backText: "#1e1b4b",
    chips: ["#f43f5e","#f59e0b","#ffd93d","#7bd88f","#3dd6d6","#5ab0ff","#b98bff","#ff8fb1"]
  },
  cards: [
    {cat:"Physiology", q:"The Frank-Starling relationship describes the rise in stroke volume with increasing end-diastolic fibre length.", a:"TRUE. Increased preload optimises actin-myosin overlap and calcium sensitivity, raising stroke volume until the curve plateaus."},
    {cat:"Physiology", q:"The plateau phase of the ventricular action potential is due to potassium influx.", a:"FALSE. It is due to CALCIUM influx through L-type channels. Potassium efflux causes repolarisation."},
    {cat:"Physiology", q:"Physiological dead space equals anatomical dead space plus alveolar dead space.", a:"TRUE. Anatomical is the conducting airways (about 2 ml/kg); alveolar is ventilated but unperfused alveoli."},
    {cat:"Physiology", q:"In West zone 1 of the lung, alveolar pressure exceeds arterial pressure.", a:"TRUE. PA > Pa > Pv, so there is ventilation without perfusion — alveolar dead space. It does not normally exist but appears with hypovolaemia or high PEEP."},
    {cat:"Physiology", q:"Hypoxic pulmonary vasoconstriction is enhanced by volatile anaesthetic agents.", a:"FALSE. Volatiles INHIBIT hypoxic pulmonary vasoconstriction, worsening shunt — relevant during one-lung ventilation."},
    {cat:"Physiology", q:"Closing capacity increases with age.", a:"TRUE. It exceeds FRC at about age 44 supine and 66 erect, contributing to the age-related fall in PaO2."},
    {cat:"Physiology", q:"The Na+/K+ ATPase transports three sodium ions out for every two potassium ions in.", a:"TRUE. It is electrogenic, contributing directly to the resting membrane potential, and consumes a large share of cellular ATP."},

    {cat:"Anatomy", q:"The right main bronchus is shorter, wider and more vertical than the left.", a:"TRUE. It leaves the carina at about 25 degrees versus 45 on the left — hence preferential right endobronchial intubation and aspiration."},
    {cat:"Anatomy", q:"The coeliac plexus lies at the level of L3-L4.", a:"FALSE. It lies at T12-L1, anterolateral to the aorta at the origin of the coeliac trunk."},
    {cat:"Anatomy", q:"The stellate ganglion is formed by fusion of the inferior cervical and first thoracic sympathetic ganglia.", a:"TRUE. Blockade produces Horner's syndrome — ptosis, miosis, anhidrosis and enophthalmos."},

    {cat:"Pharmacology", q:"Atracurium releases histamine, whereas cisatracurium does not significantly.", a:"TRUE. Cisatracurium is a single isomer, roughly four times more potent, and is essentially free of histamine release."},
    {cat:"Pharmacology", q:"Laudanosine is a metabolite of atracurium that may accumulate in hepatic failure.", a:"TRUE. It is potentially epileptogenic at very high concentrations, though rarely clinically relevant."},
    {cat:"Pharmacology", q:"Barbiturates increase the frequency of GABA-A chloride channel opening.", a:"FALSE. Barbiturates increase the DURATION of opening; benzodiazepines increase the FREQUENCY."},
    {cat:"Pharmacology", q:"Alfentanil has a faster onset than fentanyl despite being less lipid soluble.", a:"TRUE. Its low pKa (6.5) means about 90% is un-ionised at physiological pH, giving a large diffusion gradient and rapid effect-site equilibration."},
    {cat:"Pharmacology", q:"Magnesium prolongs the action of non-depolarising neuromuscular blockers.", a:"TRUE. It inhibits presynaptic acetylcholine release and reduces postsynaptic sensitivity. Aminoglycosides act similarly."},
    {cat:"Pharmacology", q:"Aminoglycosides potentiate neuromuscular blockade.", a:"TRUE. Gentamicin, kanamycin and neomycin all do so by reducing presynaptic ACh release."},
    {cat:"Pharmacology", q:"Enzyme induction by rifampicin occurs within hours of the first dose.", a:"FALSE. Induction requires new protein synthesis and takes days to weeks. Enzyme INHIBITION is rapid, often within hours."},
    {cat:"Pharmacology", q:"Thiopentone is contraindicated in acute intermittent porphyria.", a:"TRUE. Barbiturates induce ALA synthase, precipitating an attack. Propofol, suxamethonium and opioids are considered safe."},

    {cat:"Physics & measurement", q:"A paramagnetic analyser is used to measure oxygen concentration.", a:"TRUE. Oxygen is attracted into a magnetic field because of its unpaired electrons. Volatile agents and CO2 are measured by infrared absorption instead."},
    {cat:"Physics & measurement", q:"Infrared absorption can be used to measure nitrogen.", a:"FALSE. Infrared analysis requires a molecule with two DIFFERENT atoms. Nitrogen, oxygen and argon cannot be measured this way."},
    {cat:"Physics & measurement", q:"Reynolds number depends on fluid density, velocity, diameter and viscosity.", a:"TRUE. Re = (density x velocity x diameter) / viscosity. It is dimensionless."},
    {cat:"Physics & measurement", q:"A rotameter is a constant-pressure, variable-orifice flowmeter.", a:"TRUE. The pressure drop across the bobbin stays constant while the annular orifice enlarges as the bobbin rises."},
    {cat:"Physics & measurement", q:"Doubling the ultrasound frequency improves resolution but reduces tissue penetration.", a:"TRUE. High-frequency linear probes (10-15 MHz) suit superficial blocks; low-frequency curvilinear probes (2-5 MHz) are needed for deep structures such as the sciatic nerve."},
    {cat:"Physics & measurement", q:"Surgical diathermy typically operates below 10 kHz.", a:"FALSE. It uses 300 kHz to 3 MHz — high frequency avoids depolarising excitable tissue, so heating predominates without causing VF."},

    {cat:"Statistics", q:"Positive predictive value is independent of disease prevalence.", a:"FALSE. PPV and NPV both vary with prevalence. Sensitivity and specificity are the prevalence-independent properties."},
    {cat:"Statistics", q:"The median is more useful than the mean for skewed data.", a:"TRUE. It is not distorted by outliers, which is why non-parametric statistics use ranks."},

    {cat:"Clinical anaesthesia", q:"A laryngeal mask airway reliably protects against pulmonary aspiration.", a:"FALSE. It does not protect the airway. Second-generation devices with a gastric drain port reduce but do not eliminate the risk."},
    {cat:"Clinical anaesthesia", q:"Preoxygenation aims to replace alveolar nitrogen with oxygen, extending safe apnoea time.", a:"TRUE. Effective denitrogenation needs 3 minutes of tidal breathing or 8 vital capacity breaths, with an end-tidal oxygen target above 0.85-0.9."},
    {cat:"Clinical anaesthesia", q:"Awareness under anaesthesia is more likely in obstetric and cardiac surgery.", a:"TRUE. Also in major trauma and rapid sequence induction. Benzodiazepine premedication and depth-of-anaesthesia monitoring reduce the risk."},
    {cat:"Clinical anaesthesia", q:"A normal blood pressure and heart rate reliably exclude intraoperative awareness.", a:"FALSE. Autonomic signs are neither sensitive nor specific, particularly with beta blockade or neuromuscular blockade."},
    {cat:"Clinical anaesthesia", q:"Suxamethonium may be given safely to a burns patient within the first 24 hours.", a:"TRUE. Extrajunctional receptor proliferation takes 24-48 hours to develop; the hyperkalaemic risk then persists for up to a year."},
    {cat:"Clinical anaesthesia", q:"MAC requirements are reduced in the elderly.", a:"TRUE. By roughly 6% per decade after age 40. MAC is highest in infancy, not the neonatal period."},
    {cat:"Clinical anaesthesia", q:"Postoperative nausea risk is increased by female sex, non-smoking status, previous PONV and postoperative opioids.", a:"TRUE. These are the four Apfel risk factors, each adding roughly 20% to the baseline risk."},

    {cat:"Obstetrics", q:"Plasma volume increases proportionally more than red cell mass in pregnancy.", a:"TRUE. Plasma rises about 45% and red cell mass about 25%, producing the physiological dilutional anaemia."},
    {cat:"Obstetrics", q:"Minute ventilation increases by approximately 50% at term.", a:"TRUE. Mainly through increased tidal volume, driven by progesterone. PaCO2 falls to around 4.1 kPa with a compensatory fall in bicarbonate."},
    {cat:"Obstetrics", q:"Plasma cholinesterase activity increases during pregnancy.", a:"FALSE. It falls by about 25%, though this rarely prolongs suxamethonium clinically as volume of distribution also rises."},
    {cat:"Obstetrics", q:"Ergometrine is the drug of choice for uterine atony in a hypertensive pre-eclamptic patient.", a:"FALSE. Ergometrine causes marked vasoconstriction and hypertension and should be avoided. Oxytocin, then carboprost, are preferred."},

    {cat:"Paediatrics", q:"The neonatal circulating blood volume is approximately 80-90 ml/kg.", a:"TRUE. Compared with about 80 ml/kg in a child and 70 ml/kg in an adult."},
    {cat:"Paediatrics", q:"The ductus arteriosus closes functionally within the first 24-48 hours of life.", a:"TRUE. Driven by the rise in PaO2 and fall in prostaglandins. Anatomical closure takes weeks."},
    {cat:"Paediatrics", q:"Neonates have a higher ratio of alveolar ventilation to FRC than adults.", a:"TRUE. About 5:1 versus 1.5:1, giving faster inhalational induction but also much faster desaturation."},

    {cat:"Regional", q:"The sympathetic block after a spinal extends about two dermatomes above the sensory level.", a:"TRUE. Motor block extends about two segments BELOW the sensory level — a useful trio to remember."},
    {cat:"Regional", q:"Intercostal nerve block produces the highest plasma local anaesthetic concentration of any regional technique.", a:"TRUE. The intercostal space is highly vascular. Order of absorption: intercostal > caudal > epidural > brachial plexus > subcutaneous."},
    {cat:"Regional", q:"Bupivacaine is a suitable agent for intravenous regional anaesthesia.", a:"FALSE. It is absolutely contraindicated because of its cardiotoxicity. Prilocaine is the agent of choice for a Bier's block."},
    {cat:"Regional", q:"Interscalene block causes ipsilateral phrenic nerve palsy in the majority of cases.", a:"TRUE. Close to 100% with traditional volumes, so it is relatively contraindicated in significant respiratory disease."},

    {cat:"Intensive care", q:"A raised intrathoracic pressure increases measured central venous pressure while reducing cardiac output.", a:"TRUE. Positive pressure ventilation reduces venous return and so cardiac output, while the transmitted pressure raises the measured CVP."},
    {cat:"Intensive care", q:"Propofol infusion syndrome is associated with doses above 4 mg/kg/h for more than 48 hours.", a:"TRUE. Features include metabolic acidosis, rhabdomyolysis, hyperkalaemia, arrhythmias and cardiac failure. Children and head-injured patients are at highest risk."},
    {cat:"Intensive care", q:"A restrictive transfusion threshold of 70 g/L is appropriate for most critically ill patients.", a:"TRUE. Supported by TRICC and TRISS; 80 g/L is used in acute coronary syndrome and cardiac surgery."},
    {cat:"Intensive care", q:"Tight glycaemic control to 4.5-6.0 mmol/L improves mortality in critically ill patients.", a:"FALSE. NICE-SUGAR showed increased hypoglycaemia and mortality. A target of about 6-10 mmol/L is used."},

    {cat:"Trauma & emergency", q:"Hypothermia, acidosis and coagulopathy form the lethal triad of trauma.", a:"TRUE. Each worsens the others; hypocalcaemia is often added as a fourth element."},
    {cat:"Trauma & emergency", q:"Permissive hypotension is appropriate in penetrating torso trauma before surgical control.", a:"TRUE. It limits clot disruption and dilution — but it is contraindicated in traumatic brain injury, where perfusion pressure must be maintained."}
  ]
});
