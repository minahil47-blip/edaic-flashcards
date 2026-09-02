window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "mcq1",
  title: "MCQ 1",
  emoji: "🎯",
  subtitle: "Mixed true/false · 50 stems · Part I basic sciences + Part II clinical",
  colors: {
    front1: "#ffb020", front2: "#ff5e3a",
    back1: "#d6c7ff", back2: "#a8e6ff", backText: "#241a4d",
    chips: ["#ff5e3a","#ffb020","#ffd93d","#7bd88f","#3dd6d6","#5ab0ff","#b98bff","#ff8fb1"]
  },
  cards: [
    {cat:"Physiology", q:"Total body water is approximately 60% of body weight in an adult male.", a:"TRUE. About 60% in men and 50-55% in women; intracellular fluid is roughly two thirds of the total."},
    {cat:"Physiology", q:"Creatinine clearance overestimates true GFR.", a:"TRUE. Creatinine is filtered but also secreted by the proximal tubule, so clearance exceeds true GFR."},
    {cat:"Physiology", q:"The Haldane effect describes increased CO2 carriage by deoxygenated haemoglobin.", a:"TRUE. Deoxyhaemoglobin binds CO2 more readily, aiding CO2 uptake at the tissues. The Bohr effect is the converse - CO2 and H+ shifting the oxygen curve right."},
    {cat:"Physiology", q:"Surfactant increases alveolar surface tension.", a:"FALSE. It reduces surface tension, improving compliance and stabilising small alveoli against collapse."},
    {cat:"Physiology", q:"Fetal haemoglobin has a lower affinity for oxygen than adult haemoglobin.", a:"FALSE. HbF has a HIGHER affinity (curve shifted left), because it binds 2,3-DPG poorly - this favours placental oxygen transfer."},

    {cat:"Anatomy", q:"The cricoid cartilage is the only complete cartilaginous ring in the airway.", a:"TRUE. Its signet-ring shape is what allows cricoid pressure to compress the oesophagus."},
    {cat:"Anatomy", q:"The cricothyroid muscle is supplied by the recurrent laryngeal nerve.", a:"FALSE. It is supplied by the external branch of the superior laryngeal nerve; all other intrinsic laryngeal muscles are recurrent laryngeal."},
    {cat:"Anatomy", q:"In an adult the spinal cord typically terminates at L1-L2.", a:"TRUE. It ends lower (about L3) in neonates, which is why lower interspaces are chosen in children."},
    {cat:"Anatomy", q:"At the level of the cricoid, the internal jugular vein lies lateral to the carotid artery.", a:"TRUE. Lateral and slightly anterior - the basis of the landmark approach for central access."},

    {cat:"Pharmacology", q:"Phenytoin exhibits zero-order kinetics at therapeutic doses.", a:"TRUE. Its metabolic pathways saturate within the therapeutic range, so a constant AMOUNT is cleared per unit time. Alcohol and high-dose aspirin behave similarly."},
    {cat:"Pharmacology", q:"The volume of distribution is a real anatomical volume.", a:"FALSE. It is an apparent volume, and for highly tissue-bound drugs it can far exceed total body water."},
    {cat:"Pharmacology", q:"Ketamine lowers intraocular pressure.", a:"FALSE. It RAISES intraocular pressure, and also raises ICP, heart rate and blood pressure."},
    {cat:"Pharmacology", q:"MAC increases during pregnancy.", a:"FALSE. MAC falls by around 30%. It also falls with age, hypothermia, hypothyroidism and opioids."},
    {cat:"Pharmacology", q:"Sugammadex will reverse atracurium.", a:"FALSE. It encapsulates aminosteroids only - rocuronium, vecuronium and less effectively pancuronium. Atracurium is a benzylisoquinolinium."},
    {cat:"Pharmacology", q:"Ester local anaesthetics are metabolised by plasma cholinesterase.", a:"TRUE. Amide local anaesthetics are metabolised in the liver."},
    {cat:"Pharmacology", q:"Naloxone has a longer duration of action than morphine.", a:"FALSE. It is considerably shorter (about 30-60 minutes), so re-narcotisation can occur and repeat dosing or an infusion may be required."},

    {cat:"Physics & measurement", q:"Laminar flow is proportional to the fourth power of the radius.", a:"TRUE. From the Hagen-Poiseuille equation - halving the radius reduces flow sixteen-fold. It applies to laminar flow only."},
    {cat:"Physics & measurement", q:"Carboxyhaemoglobinaemia causes the pulse oximeter to read falsely high.", a:"TRUE. COHb absorbs at 660 nm much like oxyhaemoglobin. Methaemoglobin instead drags the reading towards 85%."},
    {cat:"Physics & measurement", q:"A full oxygen cylinder at 137 bar contains liquid oxygen.", a:"FALSE. Oxygen's critical temperature is -118 degrees C, so at room temperature it is entirely gaseous - which is why cylinder pressure does reflect content. Nitrous oxide (critical temperature 36.5 degrees C) is the opposite."},
    {cat:"Physics & measurement", q:"Desflurane vaporisers are heated and pressurised.", a:"TRUE. To 39 degrees C and about 2 atmospheres, because desflurane boils at 22.8 degrees C - close to room temperature."},
    {cat:"Physics & measurement", q:"An over-damped arterial trace under-reads the systolic pressure.", a:"TRUE. It also over-reads diastolic, though the mean arterial pressure stays reasonably accurate. Optimal damping coefficient is about 0.64."},

    {cat:"Statistics", q:"A p value of 0.05 means there is a 5% probability that the null hypothesis is true.", a:"FALSE. It is the probability of obtaining a result at least this extreme IF the null hypothesis were true - a subtle but heavily examined distinction."},
    {cat:"Statistics", q:"Statistical power equals 1 minus beta.", a:"TRUE. Beta is the type II error rate; power is conventionally set at 80% or more."},
    {cat:"Statistics", q:"The Mann-Whitney U test is a parametric test.", a:"FALSE. It is the non-parametric equivalent of the unpaired t-test, used for ordinal or non-normally distributed data."},

    {cat:"Clinical anaesthesia", q:"A Mallampati score of III predicts an easy intubation.", a:"FALSE. Classes III and IV predict increasing difficulty. Used alone the test has poor sensitivity and specificity - it should form part of a composite assessment."},
    {cat:"Clinical anaesthesia", q:"A cricoid force of about 30 newtons is recommended once consciousness is lost during a rapid sequence induction.", a:"TRUE. Roughly 10 N while awake, increasing to 30 N after loss of consciousness. Excessive force can distort the view and impede ventilation."},
    {cat:"Clinical anaesthesia", q:"Malignant hyperthermia can be triggered by both suxamethonium and volatile agents.", a:"TRUE. It results from an abnormal ryanodine receptor. Nitrous oxide, propofol, opioids and non-depolarising relaxants are safe."},
    {cat:"Clinical anaesthesia", q:"The initial dose of dantrolene in malignant hyperthermia is 2.5 mg/kg.", a:"TRUE. Repeated as needed up to about 10 mg/kg, alongside stopping the trigger, hyperventilating with 100% oxygen and active cooling."},
    {cat:"Clinical anaesthesia", q:"Neuromuscular blocking drugs are the commonest cause of perioperative anaphylaxis.", a:"TRUE. Followed by antibiotics and chlorhexidine. Mast cell tryptase should be sampled to confirm the diagnosis."},
    {cat:"Clinical anaesthesia", q:"Adrenaline 500 micrograms intramuscularly is the first-line dose for anaphylaxis in an adult.", a:"TRUE. That is 0.5 ml of 1:1000. Under anaesthesia with IV access already established, titrated IV boluses of around 50 micrograms are used instead."},
    {cat:"Clinical anaesthesia", q:"Nitrous oxide should be avoided in a patient with a pneumothorax.", a:"TRUE. It is 34 times more soluble than nitrogen and diffuses into closed air spaces faster than nitrogen leaves, expanding them. The same applies to bowel obstruction and air embolism."},

    {cat:"Obstetrics", q:"Aortocaval compression becomes significant after about 20 weeks' gestation.", a:"TRUE. Left lateral tilt of at least 15 degrees, or manual uterine displacement, should be used from this point."},
    {cat:"Obstetrics", q:"Functional residual capacity is increased at term.", a:"FALSE. FRC FALLS by about 20%, while oxygen consumption rises - which is exactly why obstetric patients desaturate so quickly."},
    {cat:"Obstetrics", q:"Epidural analgesia in labour is associated with a prolonged second stage.", a:"TRUE. And with increased instrumental delivery, but no increase in caesarean section rate and no long-term backache."},
    {cat:"Obstetrics", q:"Magnesium sulphate is the treatment of choice for eclamptic seizures.", a:"TRUE. 4 g loading dose then 1 g/hour. Monitor tendon reflexes, respiratory rate and urine output; calcium gluconate is the antidote."},

    {cat:"Paediatrics", q:"Neonates desaturate more rapidly than adults during apnoea.", a:"TRUE. They have a much higher oxygen consumption per kilogram and a proportionally smaller FRC, so oxygen reserves are exhausted quickly."},
    {cat:"Paediatrics", q:"The narrowest part of the paediatric airway is classically described as the cricoid ring.", a:"TRUE. This is the traditional teaching, though imaging studies suggest the glottis may be narrower and the airway is better described as cylindrical."},
    {cat:"Paediatrics", q:"Neonates generate heat primarily by shivering.", a:"FALSE. They rely on non-shivering thermogenesis in brown adipose tissue. Their high surface area to volume ratio makes them very prone to hypothermia."},

    {cat:"Regional", q:"The maximum dose of lidocaine with adrenaline is 7 mg/kg.", a:"TRUE. Compared with 3 mg/kg plain, and 2 mg/kg for bupivacaine."},
    {cat:"Regional", q:"Intravenous lipid emulsion is indicated in local anaesthetic systemic toxicity.", a:"TRUE. 1.5 ml/kg bolus of 20% lipid followed by an infusion, alongside standard resuscitation, which may need to be prolonged."},
    {cat:"Regional", q:"After a spinal anaesthetic the sympathetic block extends higher than the sensory block.", a:"TRUE. Typically about two dermatomes above the sensory level, with motor block roughly two below - which explains the degree of hypotension seen."},

    {cat:"Intensive care", q:"ARDS is defined in part by a PaO2/FiO2 ratio of 300 mmHg or less.", a:"TRUE. The Berlin definition requires this with PEEP of at least 5 cmH2O, bilateral infiltrates, onset within a week, and no primary cardiac cause."},
    {cat:"Intensive care", q:"Lung-protective ventilation uses tidal volumes of about 6 ml/kg predicted body weight.", a:"TRUE. With plateau pressure kept below 30 cmH2O. Note PREDICTED, not actual, body weight."},
    {cat:"Intensive care", q:"Prone positioning improves mortality in severe ARDS.", a:"TRUE. Demonstrated in the PROSEVA trial for PaO2/FiO2 below 150, using sessions of at least 16 hours."},
    {cat:"Intensive care", q:"Noradrenaline is the recommended first-line vasopressor in septic shock.", a:"TRUE. Adequate fluid resuscitation should accompany it; vasopressin may be added as a second agent."},
    {cat:"Intensive care", q:"Brainstem death testing requires the exclusion of hypothermia and drug effects.", a:"TRUE. Along with severe metabolic and endocrine disturbance, and a known cause of irreversible brain damage. Two doctors test on two separate occasions."},

    {cat:"Pain", q:"Gabapentin acts at the alpha-2-delta subunit of voltage-gated calcium channels.", a:"TRUE. Despite the name it has no action at GABA receptors. It is a first-line agent in neuropathic pain."},
    {cat:"Pain", q:"Amitriptyline is effective in neuropathic pain.", a:"TRUE. At doses well below those used for depression, and with benefit appearing sooner than its antidepressant effect."},

    {cat:"Trauma & emergency", q:"Tranexamic acid in major trauma is most effective when given within 3 hours of injury.", a:"TRUE. Shown in CRASH-2; given after 3 hours it may increase mortality, so timing genuinely matters."},
    {cat:"Trauma & emergency", q:"Permissive hypotension is contraindicated in traumatic brain injury.", a:"TRUE. Cerebral perfusion pressure must be maintained, so the low-pressure strategy used in other haemorrhagic trauma is inappropriate here."}
  ]
});
