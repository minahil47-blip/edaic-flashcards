window.DECKS = window.DECKS || [];
// Grouped card shape: { cat, stem, opts:[5], ans:[5] }
window.DECKS.push({
  id: "exam-clinical-icu",
  title: "Exam MCQ · Clinical & ICU",
  emoji: "🏥",
  subtitle: "True/false, exam format · 60 questions × 5 stems = 300 marks",
  colors: {
    front1: "#2a0713", front2: "#A8123E",
    back1: "#FFF4F7", back2: "#FBDDE6", backText: "#2a0713",
    chips: ["#A8123E","#B4690E","#0E7A66","#4338ca","#0369a1","#7A3B9E","#2a0713","#be123c"]
  },
  cards: [
    {
      cat: "Preoperative",
      stem: "Preoperative assessment:",
      opts: [
        "ASA physical status 3 describes severe systemic disease that is a constant threat to life",
        "Metabolic equivalents of 4 METs correspond to climbing a flight of stairs",
        "The Revised Cardiac Risk Index includes ischaemic heart disease and insulin-treated diabetes",
        "A functional capacity below 4 METs is associated with increased perioperative risk",
        "ASA grade alone reliably predicts perioperative mortality for an individual"
      ],
      ans: [
        "FALSE. ASA 3 is SEVERE systemic disease with substantive functional limitation. ASA 4 is severe disease that is a CONSTANT THREAT TO LIFE.",
        "TRUE. A widely used practical threshold.",
        "TRUE. Along with cerebrovascular disease, congestive cardiac failure, creatinine above 177 µmol/L, and high-risk surgery.",
        "TRUE. And warrants further assessment before major surgery.",
        "FALSE. It is a population-level descriptor with poor inter-rater reliability, not an individual risk predictor. Use it alongside functional capacity, surgical risk and a validated score."
      ]
    },
    {
      cat: "Preoperative",
      stem: "Fasting and aspiration prophylaxis:",
      opts: [
        "Clear fluids may be taken up to 2 hours before anaesthesia",
        "Breast milk is permitted up to 4 hours before",
        "Solid food requires 6 hours",
        "Chewing gum mandates cancellation of the list",
        "Sodium citrate is a non-particulate antacid used in obstetric practice"
      ],
      ans: [
        "TRUE. And encouraging clear fluids up to that point improves comfort and reduces hypotension.",
        "TRUE. With formula milk requiring 6 hours and infant formula in some guidance 4–6.",
        "TRUE. The 6-4-2 rule.",
        "FALSE. Chewing gum should be removed but does not itself require cancellation or delay in most guidance.",
        "TRUE. 30 ml of 0.3 molar, raising gastric pH without adding particulate risk."
      ]
    },
    {
      cat: "Preoperative",
      stem: "Assessment of the airway:",
      opts: [
        "A Mallampati class III view shows the soft palate and base of uvula only",
        "A thyromental distance below 6 cm suggests difficult laryngoscopy",
        "The Mallampati score has high sensitivity when used alone",
        "A history of previous difficult intubation is the strongest single predictor",
        "Reduced neck extension is a risk factor for difficult direct laryngoscopy"
      ],
      ans: [
        "TRUE. Class IV shows hard palate only; class I shows faucial pillars, soft palate and uvula.",
        "TRUE. Along with a sternomental distance below 12.5 cm and an interincisor gap below 3 cm.",
        "FALSE. Its sensitivity and specificity are poor alone — bedside tests must be combined, and even then prediction is imperfect.",
        "TRUE. Which is why documentation and an alert are so important.",
        "TRUE. Particularly ankylosing spondylitis, rheumatoid disease and cervical fixation."
      ]
    },
    {
      cat: "Preoperative",
      stem: "The diabetic patient for surgery:",
      opts: [
        "Diabetic patients should be placed first on the list where possible",
        "A variable rate intravenous insulin infusion is indicated when more than one meal will be missed",
        "Long-acting basal insulin is usually continued at a reduced dose",
        "HbA1c above 69 mmol/mol suggests poor control and possible deferral of elective surgery",
        "Capillary glucose should be maintained between 4 and 12 mmol/L perioperatively"
      ],
      ans: [
        "TRUE. Minimising the fasting period.",
        "TRUE. Or where control is poor, or in emergency surgery.",
        "TRUE. Typically by about 20%, to avoid ketosis.",
        "TRUE. Where the surgery can safely wait for optimisation.",
        "TRUE. With substrate provided to prevent ketosis when insulin is running."
      ]
    },
    {
      cat: "Preoperative",
      stem: "The patient with ischaemic heart disease:",
      opts: [
        "Elective non-cardiac surgery should be deferred for 6 weeks after a bare metal stent",
        "Elective surgery should be deferred for 6 months after a drug-eluting stent where possible",
        "Beta blockers should be started routinely on the morning of surgery in at-risk patients",
        "Statins should be continued perioperatively",
        "Dual antiplatelet therapy should be discontinued without cardiology discussion"
      ],
      ans: [
        "TRUE. Ideally, to allow endothelialisation.",
        "TRUE. Newer generation stents may allow 3 months if surgery cannot wait.",
        "FALSE. Acute high-dose initiation on the day of surgery INCREASES stroke and mortality (POISE). Continue established beta blockers; do not start them acutely.",
        "TRUE. They have plaque-stabilising and anti-inflammatory effects, and withdrawal is associated with harm.",
        "FALSE. This decision must be made jointly with cardiology, weighing stent thrombosis against bleeding risk."
      ]
    },
    {
      cat: "Obstetrics",
      stem: "Anaesthesia for caesarean section:",
      opts: [
        "A block to T4 is required for caesarean section",
        "Left lateral tilt of at least 15 degrees reduces aortocaval compression",
        "Phenylephrine is preferred to ephedrine for spinal hypotension",
        "Antacid prophylaxis and rapid sequence induction are standard for general anaesthesia",
        "Spinal anaesthesia carries a higher maternal mortality than general anaesthesia"
      ],
      ans: [
        "TRUE. Tested to light touch or cold; a block to T5 is a common cause of intraoperative pain.",
        "TRUE. From about 20 weeks; manual uterine displacement is at least as effective.",
        "TRUE. It causes less fetal acidosis, since ephedrine crosses the placenta and increases fetal metabolic rate.",
        "TRUE. Along with preoxygenation, and a plan for a difficult airway.",
        "FALSE. Regional anaesthesia is SAFER — the major driver of the historical fall in maternal anaesthetic deaths."
      ]
    },
    {
      cat: "Obstetrics",
      stem: "Major obstetric haemorrhage:",
      opts: [
        "The commonest cause of primary postpartum haemorrhage is uterine atony",
        "Oxytocin causes vasodilatation and tachycardia when given as a rapid bolus",
        "Ergometrine is contraindicated in hypertension",
        "Carboprost is contraindicated in asthma",
        "Physiological hypervolaemia means signs of hypovolaemia appear early"
      ],
      ans: [
        "TRUE. The four Ts: tone, tissue, trauma, thrombin.",
        "TRUE. Which is why it should be given slowly, particularly in cardiac disease.",
        "TRUE. Including pre-eclampsia; it also causes marked nausea and vomiting.",
        "TRUE. Prostaglandin F2-alpha causes bronchoconstriction.",
        "FALSE. The reverse — a young woman with a 50% plasma volume increase compensates well and then decompensates abruptly. Blood loss is habitually underestimated."
      ]
    },
    {
      cat: "Obstetrics",
      stem: "Pre-eclampsia:",
      opts: [
        "It is defined by new hypertension after 20 weeks with proteinuria or other organ dysfunction",
        "Magnesium sulphate is the treatment of choice for eclamptic seizures",
        "Magnesium toxicity first causes loss of deep tendon reflexes",
        "Ergometrine is the uterotonic of choice",
        "HELLP syndrome comprises haemolysis, elevated liver enzymes and low platelets"
      ],
      ans: [
        "TRUE. Proteinuria is no longer mandatory for the diagnosis.",
        "TRUE. 4 g loading then 1 g/h; it is superior to phenytoin and diazepam.",
        "TRUE. At about 5 mmol/L, then respiratory depression at 6–7.5 and cardiac arrest above about 10. Treat with calcium gluconate.",
        "FALSE. Ergometrine is CONTRAINDICATED because of severe hypertension. Use oxytocin.",
        "TRUE. A severe variant with a high risk of hepatic rupture and DIC."
      ]
    },
    {
      cat: "Paediatrics",
      stem: "Paediatric anaesthesia:",
      opts: [
        "Maintenance fluid follows the 4-2-1 rule",
        "Blood volume in a neonate is about 80–90 ml/kg",
        "Uncuffed tubes are now preferred for all children under 8",
        "The formula for tube size in a child over 2 is age/4 + 4 for an uncuffed tube",
        "Hypoglycaemia is a particular risk in neonates and infants"
      ],
      ans: [
        "TRUE. 4 ml/kg/h for the first 10 kg, 2 for the next 10, 1 thereafter — use an isotonic glucose-containing solution.",
        "TRUE. Falling to about 70 ml/kg in older children and adults.",
        "FALSE. Modern high-volume low-pressure microcuff tubes are now widely PREFERRED — they reduce the need for tube exchange, allow accurate capnography and reduce leak.",
        "TRUE. And oral length is roughly age/2 + 12 cm.",
        "TRUE. Because of limited glycogen stores and a high metabolic rate — minimise fasting and monitor glucose."
      ]
    },
    {
      cat: "Paediatrics",
      stem: "Paediatric emergencies:",
      opts: [
        "Croup typically presents with a barking cough and improves with nebulised adrenaline and dexamethasone",
        "Epiglottitis requires immediate examination of the throat to confirm the diagnosis",
        "Pyloric stenosis causes a hypochloraemic hypokalaemic metabolic alkalosis",
        "Pyloric stenosis is a surgical emergency requiring immediate operation",
        "A child with a foreign body causing complete obstruction and no cough should receive back blows and chest thrusts"
      ],
      ans: [
        "TRUE. Viral laryngotracheobronchitis, usually 6 months to 3 years.",
        "FALSE. NEVER — instrumentation can precipitate complete obstruction. Keep the child calm, with a senior anaesthetist and ENT surgeon, and induce gaseously in theatre.",
        "TRUE. With paradoxical aciduria as the kidney conserves sodium at the expense of hydrogen ions.",
        "FALSE. It is a MEDICAL emergency requiring fluid and electrolyte correction FIRST. Operating on an alkalotic, hypovolaemic infant risks postoperative apnoea.",
        "TRUE. Five back blows then five chest thrusts in an infant; abdominal thrusts replace chest thrusts in a child over one year."
      ]
    },
    {
      cat: "Emergencies",
      stem: "Malignant hyperthermia:",
      opts: [
        "It is inherited in an autosomal dominant manner",
        "A rising end-tidal CO₂ is often the earliest sign",
        "Masseter spasm after suxamethonium is diagnostic",
        "The in vitro contracture test is the diagnostic gold standard",
        "Trigger-free anaesthesia requires a vapour-free machine and a new breathing system"
      ],
      ans: [
        "TRUE. With variable penetrance; most cases involve RYR1 mutations.",
        "TRUE. Along with unexplained tachycardia, then rigidity, hyperthermia, acidosis, hyperkalaemia and myoglobinuria.",
        "FALSE. It is a warning sign requiring investigation, but it is not diagnostic on its own — it also occurs in myotonic conditions and sometimes normally.",
        "TRUE. Halothane and caffeine contracture testing on fresh muscle biopsy, with genetic testing as an adjunct.",
        "TRUE. Flushed with high flow oxygen or fitted with activated charcoal filters, and TIVA used."
      ]
    },
    {
      cat: "Emergencies",
      stem: "Anaphylaxis under anaesthesia:",
      opts: [
        "The commonest presenting feature under anaesthesia is cardiovascular collapse",
        "Adrenaline 50 micrograms intravenously is a reasonable initial adult dose in a monitored setting",
        "Large volumes of intravenous fluid are usually required",
        "Chlorphenamine and hydrocortisone are first-line treatment",
        "The patient should be referred for specialist allergy testing"
      ],
      ans: [
        "TRUE. Rather than the rash and airway swelling that predominate in the community — the patient is covered and often already ventilated.",
        "TRUE. Titrated and repeated; an infusion may be needed. In the community 500 µg intramuscularly is the standard.",
        "TRUE. Litres, because of massive capillary leak and vasodilatation.",
        "FALSE. ADRENALINE is first line. Antihistamines and steroids are secondary and do not treat the acute reaction.",
        "TRUE. With tryptase samples, a detailed drug and timing record, and a clear letter to the patient and GP."
      ]
    },
    {
      cat: "Emergencies",
      stem: "Cardiac arrest in special circumstances:",
      opts: [
        "In hypothermic arrest, drugs are withheld below a core temperature of 30 °C",
        "In pregnancy, perimortem caesarean section should be performed within 5 minutes",
        "Local anaesthetic toxicity arrest requires lipid emulsion and prolonged resuscitation",
        "In hyperkalaemic arrest, calcium chloride is given",
        "In traumatic cardiac arrest, chest compressions take priority over treating reversible causes"
      ],
      ans: [
        "TRUE. And the interval is doubled between 30 and 35 °C. 'Not dead until warm and dead.'",
        "TRUE. Aiming to deliver by 5 minutes — it aids maternal resuscitation by relieving aortocaval compression.",
        "TRUE. Cardiopulmonary bypass has been used successfully; recovery can take over an hour.",
        "TRUE. With insulin and glucose, and consideration of dialysis.",
        "FALSE. In traumatic arrest, treating hypovolaemia, tension pneumothorax, tamponade and hypoxia takes PRIORITY — compressions on an empty heart are futile."
      ]
    },
    {
      cat: "Emergencies",
      stem: "The unanticipated difficult airway:",
      opts: [
        "Plan A is facemask ventilation and tracheal intubation, with a maximum of three plus one attempts",
        "Plan B is maintaining oxygenation with a supraglottic airway device",
        "Plan C is a final attempt at facemask ventilation and waking the patient",
        "Plan D is emergency front-of-neck access",
        "Repeated intubation attempts by successive operators improve outcome"
      ],
      ans: [
        "TRUE. With optimisation between attempts, not simply repetition.",
        "TRUE. A maximum of three attempts, preferably with a second generation device.",
        "TRUE. Declaring failed intubation and stopping to think.",
        "TRUE. Scalpel–bougie–tube at the cricothyroid membrane.",
        "FALSE. NAP4 showed repeated attempts cause trauma and convert 'cannot intubate' into 'cannot oxygenate'. Stop, oxygenate, and declare the situation."
      ]
    },
    {
      cat: "ICU",
      stem: "Sepsis and septic shock:",
      opts: [
        "Sepsis is defined as life-threatening organ dysfunction due to a dysregulated host response to infection",
        "Septic shock requires vasopressors to maintain a MAP of 65 mmHg plus a lactate above 2 mmol/L despite fluid",
        "Antibiotics should be given within one hour of recognition of septic shock",
        "Early goal-directed therapy with a protocolised bundle has been shown superior to usual care in recent trials",
        "Noradrenaline is the first-line vasopressor"
      ],
      ans: [
        "TRUE. Sepsis-3, using a SOFA score rise of 2 or more.",
        "TRUE. Identifying a subgroup with much higher mortality.",
        "TRUE. Along with cultures before antibiotics where this does not cause delay, and source control.",
        "FALSE. ProCESS, ARISE and ProMISe all found NO benefit over good usual care. The specific protocol was not the active ingredient — early recognition, antibiotics and fluid were.",
        "TRUE. With vasopressin as a second agent, and hydrocortisone in refractory shock."
      ]
    },
    {
      cat: "ICU",
      stem: "Acute respiratory distress syndrome:",
      opts: [
        "The Berlin definition requires onset within one week of a known insult",
        "Bilateral opacities not fully explained by effusion, collapse or nodules are required",
        "Respiratory failure must not be fully explained by cardiac failure or fluid overload",
        "Severe ARDS is a PaO₂/FiO₂ ratio below 100 mmHg with PEEP of at least 5",
        "Routine use of high-dose steroids improves mortality in all ARDS"
      ],
      ans: [
        "TRUE. Or of new or worsening respiratory symptoms.",
        "TRUE. On chest radiograph or CT.",
        "TRUE. Objective assessment such as echocardiography is needed if no risk factor is present.",
        "TRUE. Mild is 200–300, moderate 100–200.",
        "FALSE. The evidence is nuanced and context-dependent — steroids have a role in some phenotypes and causes, but blanket high-dose steroid therapy is not supported."
      ]
    },
    {
      cat: "ICU",
      stem: "Weaning from mechanical ventilation:",
      opts: [
        "A spontaneous breathing trial is the standard assessment of readiness",
        "The rapid shallow breathing index is respiratory rate divided by tidal volume in litres",
        "An RSBI below 105 predicts successful weaning",
        "Daily sedation interruption shortens ventilation duration",
        "Early tracheostomy consistently reduces mortality"
      ],
      ans: [
        "TRUE. Typically 30 minutes to 2 hours on low-level pressure support or a T-piece.",
        "TRUE. So a rapid, shallow pattern gives a high number.",
        "TRUE. A useful but imperfect predictor.",
        "TRUE. As do sedation protocols, early mobilisation and delirium screening.",
        "FALSE. Trials have not shown a consistent mortality benefit, though it may reduce sedation requirement and improve comfort."
      ]
    },
    {
      cat: "ICU",
      stem: "Nutrition in critical illness:",
      opts: [
        "Enteral feeding is preferred to parenteral where the gut is functional",
        "Refeeding syndrome causes hypophosphataemia, hypokalaemia and hypomagnesaemia",
        "Thiamine should be given before refeeding a malnourished patient",
        "Full caloric targets should be achieved within the first 24 hours",
        "Enteral nutrition helps maintain gut mucosal integrity"
      ],
      ans: [
        "TRUE. With fewer infective complications and lower cost.",
        "TRUE. From a shift of electrolytes into cells with the insulin surge — monitor and replace, and feed slowly.",
        "TRUE. To prevent Wernicke's encephalopathy.",
        "FALSE. Gradual escalation is recommended; aggressive early full feeding has not shown benefit and may cause harm.",
        "TRUE. Reducing bacterial translocation, though the clinical significance is debated."
      ]
    },
    {
      cat: "ICU",
      stem: "Renal replacement therapy:",
      opts: [
        "Indications include refractory hyperkalaemia, acidosis, fluid overload, uraemia and some poisonings",
        "Continuous therapies are better tolerated haemodynamically than intermittent haemodialysis",
        "Diffusion is the principal mechanism in haemofiltration",
        "Regional citrate anticoagulation reduces bleeding risk compared with heparin",
        "Lithium and salicylate are dialysable"
      ],
      ans: [
        "TRUE. The AEIOU mnemonic.",
        "TRUE. Which is why CVVH is preferred in shock.",
        "FALSE. Haemofiltration removes solute by CONVECTION (solvent drag). Diffusion across a concentration gradient is the mechanism of haemoDIALYSIS.",
        "TRUE. It is now first-line in many units; watch for citrate accumulation with a rising total to ionised calcium ratio.",
        "TRUE. Along with methanol, ethylene glycol, metformin and theophylline — small, water-soluble, poorly protein-bound molecules."
      ]
    },
    {
      cat: "ICU",
      stem: "Traumatic brain injury management:",
      opts: [
        "Cerebral perfusion pressure should generally be maintained at 60–70 mmHg",
        "Hyperventilation to a PaCO₂ below 4.0 kPa is a useful long-term strategy",
        "Hypertonic saline and mannitol are both used for raised ICP",
        "Seizure prophylaxis reduces early post-traumatic seizures",
        "Hypotension and hypoxia are the two strongest modifiable predictors of poor outcome"
      ],
      ans: [
        "TRUE. Avoiding both ischaemia and hyperaemia.",
        "FALSE. Aggressive prolonged hyperventilation causes ischaemia. It is a short-term rescue measure only, with a target of about 4.5–5.0 kPa normally.",
        "TRUE. Hypertonic saline is increasingly preferred in the hypovolaemic patient.",
        "TRUE. Levetiracetam or phenytoin for the first week; it does not reduce late epilepsy.",
        "TRUE. Which is why prehospital and early management focus so heavily on both."
      ]
    },
    {
      cat: "ICU",
      stem: "Brainstem death testing:",
      opts: [
        "The cause must be known, irreversible and structural",
        "Core temperature must be above 34 °C",
        "Sedative drugs, neuromuscular blockade and severe metabolic derangement must be excluded",
        "Two doctors perform the tests on two separate occasions",
        "The apnoea test requires the PaCO₂ to rise above 6.65 kPa with a pH below 7.4"
      ],
      ans: [
        "TRUE. This is the essential precondition before any testing.",
        "TRUE. Along with exclusion of endocrine and electrolyte causes.",
        "TRUE. Drug levels are checked where there is any doubt, and a nerve stimulator confirms absence of blockade.",
        "TRUE. Both registered more than 5 years, neither on the transplant team; legal time of death is that of the first test in the UK.",
        "TRUE. With no respiratory effort, and with oxygenation maintained throughout."
      ]
    }
    ,
    {
      cat: "ICU",
      stem: "Shock states and their haemodynamic profiles:",
      opts: [
        "Septic shock typically shows a low SVR and a high cardiac output",
        "Cardiogenic shock shows a high SVR and a low cardiac output",
        "Hypovolaemic shock shows a low CVP and a low cardiac output",
        "Obstructive shock from tamponade shows a low CVP",
        "Neurogenic shock is characterised by hypotension with bradycardia"
      ],
      ans: [
        "TRUE. Warm, vasodilated, with a raised mixed venous saturation despite tissue hypoxia.",
        "TRUE. With raised filling pressures and a low mixed venous saturation.",
        "TRUE. With compensatory vasoconstriction and tachycardia.",
        "FALSE. Tamponade raises the CVP — equalisation of diastolic pressures, with pulsus paradoxus and muffled sounds.",
        "TRUE. Because sympathetic outflow below the lesion is lost — distinguishing it from spinal shock, which is a flaccid areflexia."
      ]
    },
    {
      cat: "ICU",
      stem: "Delirium in the critically ill:",
      opts: [
        "Hypoactive delirium is more common than hyperactive delirium",
        "CAM-ICU and ICDSC are validated screening tools",
        "Benzodiazepines are associated with an increased incidence",
        "Delirium is independently associated with increased mortality and long-term cognitive impairment",
        "Haloperidol prophylaxis prevents delirium"
      ],
      ans: [
        "TRUE. And it is more often missed and carries a worse prognosis.",
        "TRUE. Screening should be performed at least once per shift.",
        "TRUE. Which is why dexmedetomidine and propofol-based strategies are often preferred.",
        "TRUE. Even after adjusting for severity of illness.",
        "FALSE. Prophylactic antipsychotics have NOT been shown to prevent delirium. Non-pharmacological measures — orientation, sleep, mobility, sensory aids — are the evidence-based approach."
      ]
    },
    {
      cat: "ICU",
      stem: "Acute liver failure:",
      opts: [
        "Paracetamol is a leading cause in the United Kingdom",
        "Hepatic encephalopathy is graded I to IV",
        "Cerebral oedema is a leading cause of death in hyperacute liver failure",
        "The King's College criteria guide transplant referral",
        "Coagulopathy should routinely be corrected with fresh frozen plasma"
      ],
      ans: [
        "TRUE. With viral hepatitis, drug reactions and Budd–Chiari as other causes.",
        "TRUE. From altered mood to coma; ammonia contributes.",
        "TRUE. Along with sepsis and multi-organ failure; ICP monitoring is controversial.",
        "TRUE. With separate criteria for paracetamol and non-paracetamol causes — arterial pH, INR, creatinine and encephalopathy grade.",
        "FALSE. Routine correction obscures the INR, which is a key prognostic marker. Correct only for bleeding or before a procedure, in discussion with the transplant centre."
      ]
    },
    {
      cat: "ICU",
      stem: "Diabetic ketoacidosis:",
      opts: [
        "Diagnosis requires hyperglycaemia or known diabetes, ketonaemia and acidosis",
        "Fluid resuscitation takes priority over insulin",
        "A fixed rate insulin infusion of 0.1 units/kg/h is standard",
        "Potassium falls as treatment progresses despite an initially normal or high level",
        "Bicarbonate should be given routinely for a pH below 7.0"
      ],
      ans: [
        "TRUE. Ketones above 3 mmol/L, pH below 7.3 or bicarbonate below 15.",
        "TRUE. The deficit is often 5–7 litres; insulin without fluid worsens hypotension.",
        "TRUE. Continuing long-acting basal insulin alongside it.",
        "TRUE. Because insulin drives potassium into cells — total body potassium is always depleted. Replace early and monitor hourly.",
        "FALSE. Bicarbonate is NOT routinely recommended even at low pH — it worsens intracellular acidosis, causes hypokalaemia and delays ketone clearance."
      ]
    },
    {
      cat: "ICU",
      stem: "Poisoning and overdose:",
      opts: [
        "Activated charcoal is most useful within one hour of ingestion",
        "Tricyclic antidepressant overdose causes a broad QRS and is treated with sodium bicarbonate",
        "Beta blocker overdose may respond to high-dose insulin euglycaemic therapy",
        "Carbon monoxide poisoning causes a falsely low pulse oximetry reading",
        "Urinary alkalinisation enhances salicylate elimination"
      ],
      ans: [
        "TRUE. It does not bind iron, lithium, alcohols or strong acids and alkalis.",
        "TRUE. Along with seizures and arrhythmias; a QRS above 100 ms predicts seizures, above 160 ms arrhythmia.",
        "TRUE. As does glucagon and, in severe cases, lipid emulsion or pacing.",
        "FALSE. It causes a falsely HIGH or normal reading, because carboxyhaemoglobin absorbs like oxyhaemoglobin at 660 nm. Use a co-oximeter.",
        "TRUE. Trapping the ionised drug in the tubule; haemodialysis for severe cases."
      ]
    },
    {
      cat: "Clinical",
      stem: "Day case anaesthesia:",
      opts: [
        "Body mass index alone is a strong exclusion criterion",
        "A responsible adult escort and overnight carer are required",
        "Obstructive sleep apnoea is an absolute contraindication",
        "Multimodal opioid-sparing analgesia reduces unplanned admission",
        "PONV is a leading cause of delayed discharge and readmission"
      ],
      ans: [
        "FALSE. Social and medical factors matter far more; well-controlled obese patients are routinely managed as day cases with appropriate planning.",
        "TRUE. Along with reasonable travel time and telephone access.",
        "FALSE. It is not absolute — well-optimised patients on CPAP undergoing suitable surgery can be day cases, using regional techniques and minimal opioid.",
        "TRUE. As does regional anaesthesia and local infiltration.",
        "TRUE. Which is why risk-scored prophylaxis matters so much in this setting."
      ]
    },
    {
      cat: "Clinical",
      stem: "Enhanced recovery after surgery:",
      opts: [
        "Preoperative carbohydrate loading reduces insulin resistance",
        "Prolonged mechanical bowel preparation is a core component",
        "Goal-directed fluid therapy avoids both under- and over-hydration",
        "Early mobilisation and early enteral intake are central elements",
        "Avoidance of drains and nasogastric tubes where possible is recommended"
      ],
      ans: [
        "TRUE. And improves patient comfort and wellbeing.",
        "FALSE. Routine bowel preparation is now largely ABANDONED in ERAS pathways — it causes dehydration and electrolyte disturbance with little benefit.",
        "TRUE. Both extremes are associated with complications; stroke volume optimisation is one approach.",
        "TRUE. Within hours of surgery in most pathways.",
        "TRUE. They delay mobilisation and add morbidity without demonstrated benefit in most elective abdominal surgery."
      ]
    },
    {
      cat: "Clinical",
      stem: "The obese patient:",
      opts: [
        "Functional residual capacity falls markedly, particularly supine",
        "The ramped position improves both preoxygenation and laryngoscopy",
        "Suxamethonium is dosed on ideal body weight",
        "Obesity is an independent risk factor for difficult mask ventilation",
        "Regional anaesthesia is technically easier in obesity"
      ],
      ans: [
        "TRUE. With reduced compliance, increased work of breathing and rapid desaturation.",
        "TRUE. Aligning the external auditory meatus with the sternal notch.",
        "FALSE. Suxamethonium is dosed on TOTAL body weight, because both plasma cholinesterase activity and extracellular volume rise.",
        "TRUE. Along with a beard, no teeth, age over 55 and snoring.",
        "FALSE. It is technically HARDER — landmarks are obscured and depth is greater — but the benefits of opioid sparing make it especially valuable, and ultrasound helps."
      ]
    },
    {
      cat: "Clinical",
      stem: "The elderly surgical patient:",
      opts: [
        "Frailty predicts outcome better than chronological age",
        "Postoperative delirium is commoner and associated with worse outcomes",
        "Drug doses should generally be reduced and given more slowly",
        "Regional anaesthesia definitively prevents postoperative cognitive dysfunction",
        "Polypharmacy increases the risk of perioperative drug interactions"
      ],
      ans: [
        "TRUE. Validated frailty scores are increasingly part of preoperative assessment.",
        "TRUE. Prevention is largely non-pharmacological, with good analgesia and avoidance of precipitants.",
        "TRUE. Reduced volume of distribution, reduced clearance, increased sensitivity and a slower circulation time.",
        "FALSE. Trials have NOT shown a clear difference between regional and general anaesthesia for long-term cognitive outcome — a common exam misconception.",
        "TRUE. Along with anticholinergic burden, a major contributor to delirium."
      ]
    },
    {
      cat: "Clinical",
      stem: "Thoracic anaesthesia and one-lung ventilation:",
      opts: [
        "A left-sided double lumen tube is preferred for most cases",
        "Hypoxia during one-lung ventilation is managed by checking tube position first",
        "CPAP to the non-ventilated lung improves oxygenation",
        "Hypoxic pulmonary vasoconstriction reduces shunt through the collapsed lung",
        "Tidal volumes of 10 ml/kg are recommended during one-lung ventilation"
      ],
      ans: [
        "TRUE. Because of the short right upper lobe take-off; fibreoptic confirmation is standard.",
        "TRUE. Malposition is the commonest cause — then increase FiO₂, apply CPAP to the up lung and PEEP to the down lung.",
        "TRUE. Though it may impede surgical access; surgical clamping of the pulmonary artery is a last resort.",
        "TRUE. Diverting flow to the ventilated lung — attenuated by volatile agents and by vasodilators.",
        "FALSE. Protective volumes of 4–6 ml/kg predicted body weight are recommended, with PEEP — large volumes cause acute lung injury."
      ]
    },
    {
      cat: "Clinical",
      stem: "Neuroanaesthesia:",
      opts: [
        "Total intravenous anaesthesia preserves cerebral autoregulation better than high-dose volatile",
        "Nitrous oxide increases cerebral blood flow and metabolic rate",
        "Venous air embolism is a particular risk of the sitting position",
        "A sudden fall in end-tidal CO₂ with hypotension suggests venous air embolism",
        "Mannitol is given to reduce brain bulk and should be repeated freely"
      ],
      ans: [
        "TRUE. Volatiles above about 1 MAC uncouple flow and metabolism and impair autoregulation.",
        "TRUE. So it is often avoided; it also expands any intracranial air.",
        "TRUE. Detected most sensitively by transoesophageal echocardiography, then precordial Doppler.",
        "TRUE. Flood the field, jugular compression, left lateral head-down, aspirate from a central line, stop nitrous oxide.",
        "FALSE. Repeated dosing risks hypovolaemia, electrolyte disturbance and rebound oedema — monitor osmolality and use judiciously."
      ]
    },
    {
      cat: "Clinical",
      stem: "Cardiac anaesthesia and bypass:",
      opts: [
        "Heparin is given to an ACT above 400–480 seconds before bypass",
        "Protamine is given at the end of bypass and can cause pulmonary hypertension",
        "Hypothermia during bypass reduces cerebral metabolic rate",
        "Alpha-stat management does not correct blood gases for temperature",
        "Aortic stenosis patients tolerate tachycardia well"
      ],
      ans: [
        "TRUE. Typically 300 units/kg, with heparin resistance suggesting antithrombin deficiency.",
        "TRUE. Along with hypotension and anaphylactoid reactions; give it slowly.",
        "TRUE. By roughly 7% per degree Celsius, providing organ protection.",
        "TRUE. Maintaining a constant ratio of hydroxyl to hydrogen ions and preserving autoregulation; pH-stat corrects and gives higher cerebral flow.",
        "FALSE. They tolerate it POORLY — a fixed stroke volume with a hypertrophied ventricle dependent on diastolic filling and coronary perfusion. Maintain sinus rhythm, slow rate and adequate afterload."
      ]
    },
    {
      cat: "Clinical",
      stem: "Vascular anaesthesia:",
      opts: [
        "Aortic cross-clamping increases afterload and myocardial oxygen demand",
        "Unclamping causes hypotension from reactive hyperaemia and washout of vasoactive metabolites",
        "Spinal cord ischaemia is a recognised complication of thoracoabdominal aortic surgery",
        "CSF drainage may reduce the risk of paraplegia",
        "Endovascular repair eliminates all perioperative cardiac risk"
      ],
      ans: [
        "TRUE. Load the ventricle carefully and consider vasodilators before the clamp.",
        "TRUE. Anticipate it with fluid loading and reduced anaesthetic depth before release.",
        "TRUE. Anterior spinal artery syndrome, from interruption of the artery of Adamkiewicz.",
        "TRUE. By improving spinal cord perfusion pressure; maintaining MAP is equally important.",
        "FALSE. It reduces but does not eliminate it — these patients have widespread vascular disease. It also brings contrast nephropathy and endoleak."
      ]
    },
    {
      cat: "Clinical",
      stem: "Perioperative hypothermia:",
      opts: [
        "It increases surgical site infection rates",
        "It increases perioperative blood loss and transfusion requirement",
        "It prolongs the action of neuromuscular blocking drugs",
        "Active warming should start at least 30 minutes before induction in at-risk patients",
        "Shivering is desirable as it restores temperature quickly"
      ],
      ans: [
        "TRUE. Through vasoconstriction and impaired neutrophil function.",
        "TRUE. Platelet function and enzymatic coagulation are both temperature-dependent.",
        "TRUE. And reduces MAC and slows drug metabolism.",
        "TRUE. Prewarming reduces the redistribution drop.",
        "FALSE. Shivering increases oxygen consumption by 200–400%, is very unpleasant, and is dangerous in cardiac disease. Prevent hypothermia rather than treat shivering."
      ]
    },
    {
      cat: "Clinical",
      stem: "Tourniquets:",
      opts: [
        "Inflation pressure is typically 100 mmHg above systolic for the upper limb",
        "Tourniquet pain typically appears after about 45–60 minutes despite adequate block",
        "Deflation causes a rise in end-tidal CO₂ and a fall in blood pressure",
        "Sickle cell disease is a relative contraindication",
        "Total inflation time should not exceed about 2 hours"
      ],
      ans: [
        "TRUE. And about twice systolic, or 100–150 mmHg above, for the lower limb; exsanguinate first.",
        "TRUE. Thought to be mediated by unmyelinated C fibres resistant to blockade.",
        "TRUE. From washout of accumulated CO₂, potassium, lactate and other metabolites.",
        "TRUE. Because stasis and acidosis promote sickling.",
        "TRUE. With reperfusion intervals if longer; prolonged use risks nerve injury, rhabdomyolysis and compartment syndrome."
      ]
    },
    {
      cat: "Clinical",
      stem: "Laparoscopic surgery:",
      opts: [
        "Pneumoperitoneum reduces functional residual capacity and compliance",
        "Carbon dioxide absorption raises PaCO₂",
        "Intra-abdominal pressure above 20 mmHg reduces venous return",
        "Steep Trendelenburg increases intraocular and intracranial pressure",
        "Gas embolism is impossible because carbon dioxide is highly soluble"
      ],
      ans: [
        "TRUE. Requiring increased airway pressures and usually controlled ventilation.",
        "TRUE. Requiring an increase in minute ventilation of about 20–30%.",
        "TRUE. Along with reduced renal and splanchnic perfusion — keep pressures as low as feasible.",
        "TRUE. With facial and airway oedema — assess before extubation.",
        "FALSE. Gas embolism DOES occur, usually from direct vessel insufflation. CO₂'s high solubility makes it more survivable, but not impossible — the management is the same as for air."
      ]
    },
    {
      cat: "ICU",
      stem: "Ventilator-associated pneumonia and ICU infection:",
      opts: [
        "Semi-recumbent positioning at 30–45 degrees reduces VAP",
        "Subglottic secretion drainage reduces VAP",
        "Routine selective decontamination of the digestive tract is universally adopted",
        "Chlorhexidine oral care has been questioned on safety grounds",
        "Central line infection is reduced by a care bundle including full barrier precautions and chlorhexidine skin preparation"
      ],
      ans: [
        "TRUE. A core element of the VAP bundle.",
        "TRUE. Using specially designed tubes.",
        "FALSE. It reduces infection in trials but is NOT universally adopted, largely because of concerns about antimicrobial resistance.",
        "TRUE. Some analyses have suggested increased mortality, and practice has become more cautious.",
        "TRUE. Along with avoiding the femoral site and removing lines as soon as they are no longer needed."
      ]
    },
    {
      cat: "Clinical",
      stem: "Consent and capacity in anaesthesia:",
      opts: [
        "Capacity is decision-specific and time-specific",
        "An unwise decision is not evidence of incapacity",
        "Montgomery requires disclosure of risks material to this particular patient",
        "A competent adult may refuse a life-saving transfusion",
        "In an emergency with an incapacitated patient, treatment may proceed under the doctrine of necessity"
      ],
      ans: [
        "TRUE. And capacity is presumed until shown otherwise.",
        "TRUE. Capacity concerns the process of decision-making, not its outcome.",
        "TRUE. Including reasonable alternatives — the standard is no longer what a reasonable doctor would disclose.",
        "TRUE. Including a Jehovah's Witness; document precisely which products are refused and discuss alternatives in advance.",
        "TRUE. Limited to what is immediately necessary, and taking account of any valid advance decision."
      ]
    },
    {
      cat: "Clinical",
      stem: "Critical incidents and human factors:",
      opts: [
        "The WHO checklist has been associated with reduced morbidity and mortality",
        "Fixation error describes persisting with one diagnosis despite contrary evidence",
        "Closed-loop communication reduces error in emergencies",
        "A duty of candour applies when a patient suffers harm",
        "Root cause analysis focuses on identifying the individual responsible"
      ],
      ans: [
        "TRUE. When performed meaningfully rather than as a tick-box exercise.",
        "TRUE. 'This and only this', 'everything but this', 'everything is fine' — the three classic forms.",
        "TRUE. As does explicit role allocation, a declared team leader and reading aloud from a cognitive aid.",
        "TRUE. Openness, apology and explanation are professional and statutory obligations.",
        "FALSE. It focuses on SYSTEM factors — a just culture asks what went wrong, not who. Blame suppresses reporting and prevents learning."
      ]
    }
    ,
    {
      cat: "Preoperative",
      stem: "The patient with respiratory disease:",
      opts: [
        "Smoking cessation for 8 weeks reduces postoperative pulmonary complications",
        "Carbon monoxide levels fall within 12–24 hours of stopping smoking",
        "An FEV1/FVC ratio below 0.7 indicates obstruction",
        "Preoperative physiotherapy and inspiratory muscle training reduce complications",
        "Regional anaesthesia offers no advantage in severe respiratory disease"
      ],
      ans: [
        "TRUE. Shorter periods still improve carboxyhaemoglobin and ciliary function, and never increase risk despite an old myth to the contrary.",
        "TRUE. With improvement in oxygen carriage almost immediately.",
        "TRUE. With reversibility testing distinguishing asthma from COPD.",
        "TRUE. Particularly before major abdominal and thoracic surgery.",
        "FALSE. It avoids airway instrumentation and positive pressure ventilation and preserves cough — a major advantage, provided the block level does not itself compromise respiration."
      ]
    },
    {
      cat: "Preoperative",
      stem: "Perioperative medication management:",
      opts: [
        "Beta blockers should be continued",
        "Diuretics are commonly omitted on the day of surgery",
        "Oral contraceptives are stopped 4 weeks before major surgery in some guidance",
        "Monoamine oxidase inhibitors should always be stopped 2 weeks before surgery",
        "Corticosteroids should be continued with perioperative supplementation for major surgery"
      ],
      ans: [
        "TRUE. Abrupt withdrawal causes rebound ischaemia.",
        "TRUE. To reduce hypovolaemia and electrolyte disturbance.",
        "TRUE. Because of venous thromboembolism risk, with alternative contraception advised.",
        "FALSE. Stopping risks severe psychiatric relapse. Modern practice often CONTINUES them with an MAOI-safe anaesthetic — avoiding pethidine, indirect sympathomimetics such as ephedrine, and tramadol.",
        "TRUE. To avoid an Addisonian crisis in patients with suppressed axes."
      ]
    },
    {
      cat: "Clinical",
      stem: "Postoperative nausea, pain and recovery:",
      opts: [
        "Multimodal analgesia reduces opioid requirement and side effects",
        "The WHO analgesic ladder was designed for cancer pain",
        "Patient-controlled analgesia should include a background infusion routinely",
        "Regular paracetamol and NSAIDs form the base of most postoperative regimens",
        "Uncontrolled acute pain is a risk factor for chronic postsurgical pain"
      ],
      ans: [
        "TRUE. Combining agents with different mechanisms.",
        "TRUE. And is applied in reverse for acute pain — starting strong and stepping down.",
        "FALSE. A routine background infusion increases respiratory depression without improving analgesia in opioid-naive patients. Reserve it for opioid-tolerant patients.",
        "TRUE. Where not contraindicated, given regularly rather than as required.",
        "TRUE. Along with nerve injury, psychosocial factors and preoperative pain — hence the emphasis on prevention."
      ]
    },
    {
      cat: "ICU",
      stem: "Transfer of the critically ill patient:",
      opts: [
        "The patient should be stabilised as far as possible before departure",
        "The airway should be secured before transfer if there is any doubt",
        "Monitoring during transfer should be at least equivalent to that in the unit",
        "Sufficient oxygen for the expected journey plus a reserve must be carried",
        "A junior doctor alone is adequate escort for an intubated patient"
      ],
      ans: [
        "TRUE. Transfer is not a substitute for resuscitation, except where the destination is definitive treatment such as neurosurgery or haemorrhage control.",
        "TRUE. Intubating in a moving ambulance is far more hazardous.",
        "TRUE. Including capnography for every intubated patient.",
        "TRUE. Usually calculated as twice the anticipated requirement.",
        "FALSE. Transfer requires appropriately trained and experienced staff — at least two competent people, with equipment, drugs and communication arranged."
      ]
    },
    {
      cat: "ICU",
      stem: "Venous thromboembolism:",
      opts: [
        "Wells score assists risk stratification for deep vein thrombosis and pulmonary embolism",
        "A negative D-dimer in a low-risk patient effectively excludes PE",
        "Massive PE with haemodynamic instability may warrant thrombolysis",
        "S1Q3T3 is the commonest ECG finding in pulmonary embolism",
        "Mechanical prophylaxis is used where pharmacological prophylaxis is contraindicated"
      ],
      ans: [
        "TRUE. Combined with imaging decisions.",
        "TRUE. Its value lies in its high negative predictive value; it is not useful when pretest probability is high.",
        "TRUE. Or embolectomy or catheter-directed therapy where thrombolysis is contraindicated.",
        "FALSE. The commonest finding is SINUS TACHYCARDIA. S1Q3T3 is classic but uncommon.",
        "TRUE. Intermittent pneumatic compression and graduated stockings — the latter avoided in peripheral arterial disease."
      ]
    },
    {
      cat: "ICU",
      stem: "Burns:",
      opts: [
        "The Parkland formula gives 4 ml/kg per percentage burn in the first 24 hours",
        "Half the calculated volume is given in the first 8 hours from the time of injury",
        "Airway burn is suggested by facial burns, soot and hoarseness and warrants early intubation",
        "Suxamethonium is safe at any time after a burn",
        "Carbon monoxide and cyanide poisoning should be considered in enclosed-space fires"
      ],
      ans: [
        "TRUE. Using Hartmann's solution and titrating to urine output.",
        "TRUE. Not from the time of presentation — a frequent error.",
        "TRUE. Because oedema develops rapidly and makes later intubation very difficult.",
        "FALSE. It is dangerous from about 24–48 hours after injury for up to a year or more, because of extrajunctional receptor proliferation and catastrophic hyperkalaemia.",
        "TRUE. Treat with high-flow oxygen, and hydroxocobalamin for suspected cyanide toxicity."
      ]
    },
    {
      cat: "ICU",
      stem: "Neuromuscular and neurological emergencies:",
      opts: [
        "Guillain–Barré syndrome typically causes an ascending flaccid paralysis with areflexia",
        "Suxamethonium is contraindicated in Guillain–Barré syndrome",
        "Myasthenic patients are sensitive to non-depolarising relaxants",
        "A cholinergic crisis is distinguished from a myasthenic crisis by improvement with edrophonium",
        "Vital capacity is a better guide to respiratory failure in neuromuscular disease than arterial blood gases"
      ],
      ans: [
        "TRUE. With autonomic instability, and a raised CSF protein with a normal cell count.",
        "TRUE. Hyperkalaemia from extrajunctional receptors.",
        "TRUE. Markedly — use a fraction of the usual dose with monitoring, or avoid them.",
        "FALSE. A cholinergic crisis WORSENS with edrophonium, whereas a myasthenic crisis improves. The Tensilon test is now rarely used because of that risk.",
        "TRUE. A vital capacity below about 15 ml/kg, or a falling trend, predicts the need for ventilation long before CO₂ rises."
      ]
    },
    {
      cat: "Clinical",
      stem: "Trauma management:",
      opts: [
        "Permissive hypotension is appropriate in penetrating torso trauma without head injury",
        "Damage control surgery prioritises haemorrhage and contamination control over definitive repair",
        "A 1:1:1 ratio of red cells, plasma and platelets is used in major haemorrhage protocols",
        "Tranexamic acid should be given within 3 hours of injury",
        "Crystalloid should be the primary resuscitation fluid in massive traumatic haemorrhage"
      ],
      ans: [
        "TRUE. Avoiding clot disruption and dilutional coagulopathy until surgical control.",
        "TRUE. With planned return once physiology is restored.",
        "TRUE. Guided by point-of-care viscoelastic testing where available.",
        "TRUE. Ideally within 1 hour; later administration may increase mortality from bleeding.",
        "FALSE. Large volume crystalloid worsens dilution, acidosis and hypothermia. BLOOD PRODUCTS are the resuscitation fluid of choice."
      ]
    },
    {
      cat: "ICU",
      stem: "Blood gas interpretation:",
      opts: [
        "A pH of 7.25 with a PaCO₂ of 9 kPa and bicarbonate of 30 suggests acute-on-chronic respiratory acidosis",
        "Winter's formula predicts the expected PaCO₂ in a metabolic acidosis",
        "A raised anion gap with a normal lactate should prompt consideration of ketones and toxic alcohols",
        "Compensation may overshoot to correct pH beyond normal",
        "A base excess of −10 indicates a metabolic acidosis"
      ],
      ans: [
        "TRUE. The raised bicarbonate reflects chronic renal compensation, with an acute rise in CO₂ on top.",
        "TRUE. Expected PaCO₂ in mmHg = 1.5 × [HCO₃⁻] + 8 ± 2 — a deviation indicates a second disorder.",
        "TRUE. Along with salicylate, uraemia and rarely pyroglutamic acidosis.",
        "FALSE. Compensation NEVER overcorrects past normal — if the pH is on the 'wrong side', there is a second primary disorder.",
        "TRUE. A significant metabolic component; the standard base excess is the more useful whole-body figure."
      ]
    },
    {
      cat: "Clinical",
      stem: "Blood conservation and transfusion triggers:",
      opts: [
        "A restrictive transfusion threshold of 70 g/L is appropriate for most stable patients",
        "A threshold of 80 g/L is often used in acute coronary syndrome",
        "Cell salvage is contraindicated in obstetric haemorrhage",
        "Tranexamic acid reduces blood loss in major joint replacement",
        "Preoperative anaemia should be investigated and treated before elective major surgery"
      ],
      ans: [
        "TRUE. Restrictive strategies are at least as safe as liberal ones in most settings.",
        "TRUE. And in some other high-risk groups.",
        "FALSE. It is now widely USED in obstetrics with a leucocyte depletion filter; anti-D is given to rhesus-negative women.",
        "TRUE. Substantially, and it is now near-routine.",
        "TRUE. Intravenous iron where indicated — part of patient blood management, which reduces transfusion and improves outcome."
      ]
    },
    {
      cat: "Preoperative",
      stem: "The patient with renal failure:",
      opts: [
        "Suxamethonium should be avoided if the potassium is significantly raised",
        "Atracurium and cisatracurium are suitable relaxants",
        "Morphine is a good choice for postoperative analgesia",
        "The arteriovenous fistula arm must be protected from cannulation and blood pressure cuffs",
        "Dialysis should ideally be performed the day before surgery"
      ],
      ans: [
        "TRUE. Though a single dose in a normokalaemic dialysis patient is generally acceptable.",
        "TRUE. Because Hofmann elimination is independent of renal and hepatic function.",
        "FALSE. Morphine-6-glucuronide accumulates and causes prolonged sedation and respiratory depression. Fentanyl or oxycodone are preferred.",
        "TRUE. Document and mark it.",
        "TRUE. Allowing fluid and electrolyte correction while avoiding acute hypovolaemia and residual heparin on the day itself."
      ]
    },
    {
      cat: "ICU",
      stem: "Sedation and analgesia in intensive care:",
      opts: [
        "An analgesia-first (analgosedation) approach is recommended",
        "Dexmedetomidine allows a rousable, cooperative state with minimal respiratory depression",
        "The RASS scale runs from −5 to +4",
        "Deep sedation in the first 48 hours is associated with worse outcomes",
        "Neuromuscular blockade should be used routinely to facilitate ventilation"
      ],
      ans: [
        "TRUE. Treating pain first often reduces the sedation required considerably.",
        "TRUE. An alpha-2 agonist; bradycardia and hypotension are the limiting effects.",
        "TRUE. With a target of 0 to −2 for most patients.",
        "TRUE. With longer ventilation and higher mortality — hence daily sedation holds and light targets.",
        "FALSE. It is reserved for specific indications such as severe ARDS or refractory ventilator dyssynchrony, and it mandates deep sedation and carries the risk of ICU-acquired weakness."
      ]
    },
    {
      cat: "Clinical",
      stem: "Awareness under anaesthesia:",
      opts: [
        "NAP5 found most reports occurred at induction or emergence",
        "Neuromuscular blockade is present in the large majority of reports",
        "End-tidal agent monitoring with alarms reduces the risk",
        "A normal blood pressure and heart rate exclude awareness",
        "Follow-up, explanation and referral should be offered to any patient reporting awareness"
      ],
      ans: [
        "TRUE. Rather than during maintenance.",
        "TRUE. Which is why depth monitoring is recommended when relaxants are combined with TIVA.",
        "TRUE. A simple and highly effective safeguard for volatile anaesthesia.",
        "FALSE. Autonomic signs are unreliable, particularly with beta blockade — their absence proves nothing.",
        "TRUE. Distress and later PTSD are common; early acknowledgement improves outcome."
      ]
    },
    {
      cat: "ICU",
      stem: "Cardiac arrest: post-resuscitation care:",
      opts: [
        "Targeted temperature management aims to avoid fever and may involve controlled cooling",
        "Oxygen should be titrated to a saturation of 94–98% after return of circulation",
        "Hyperventilation to a low PaCO₂ improves neurological outcome",
        "Neurological prognostication should be delayed for at least 72 hours off sedation",
        "Early coronary angiography is indicated where a cardiac cause is suspected"
      ],
      ans: [
        "TRUE. Recent evidence emphasises avoiding hyperthermia over deep hypothermia.",
        "TRUE. Both hyperoxia and hypoxia are harmful.",
        "FALSE. Hypocapnia causes cerebral vasoconstriction and worsens ischaemia — aim for NORMOcapnia.",
        "TRUE. Using multimodal assessment — clinical examination, biomarkers, EEG, evoked potentials and imaging.",
        "TRUE. Particularly with ST elevation, and considered in other patients with a likely cardiac cause."
      ]
    },
    {
      cat: "Clinical",
      stem: "The patient with a pacemaker or ICD for surgery:",
      opts: [
        "The device should be interrogated preoperatively where feasible",
        "Bipolar diathermy is preferred",
        "An ICD's shock therapy should be deactivated for surgery involving monopolar diathermy",
        "External defibrillation pads should be available when therapy is deactivated",
        "The device may be reactivated at the patient's convenience after discharge"
      ],
      ans: [
        "TRUE. Establishing dependency, mode, battery and lead status.",
        "TRUE. And if monopolar is unavoidable, use short bursts with the return plate sited so current does not cross the device.",
        "TRUE. To prevent inappropriate shocks from diathermy oversensing.",
        "TRUE. And continuous monitoring must be maintained until therapy is restored.",
        "FALSE. It must be reactivated and checked BEFORE the patient leaves a monitored area — leaving it off is a serious and recurring safety incident."
      ]
    },
    {
      cat: "ICU",
      stem: "Organ donation:",
      opts: [
        "Donation after brainstem death requires formal brainstem death testing",
        "Donation after circulatory death follows planned withdrawal of treatment",
        "The dead donor rule states that retrieval must not cause death",
        "The team deciding to withdraw treatment must be independent of the transplant team",
        "Where deemed consent operates, the family need not be consulted"
      ],
      ans: [
        "TRUE. And is the route giving the widest range of transplantable organs.",
        "TRUE. With a mandatory stand-off period after asystole before retrieval.",
        "TRUE. A foundational ethical principle.",
        "TRUE. To avoid any conflict of interest, real or perceived.",
        "FALSE. Even under opt-out legislation, the family is ALWAYS consulted and their knowledge of the person's wishes respected."
      ]
    },
    {
      cat: "Clinical",
      stem: "Rapid sequence induction:",
      opts: [
        "Preoxygenation to an end-tidal oxygen above 0.9 is the aim",
        "Cricoid pressure is applied at 10 N awake, increasing to 30 N after loss of consciousness",
        "Cricoid pressure should be released if it impedes laryngoscopy or ventilation",
        "Gentle facemask ventilation during RSI is now considered acceptable in many circumstances",
        "Rocuronium 1.2 mg/kg is an alternative to suxamethonium"
      ],
      ans: [
        "TRUE. With a head-up or ramped position and, increasingly, apnoeic oxygenation.",
        "TRUE. Roughly 3 kg of force.",
        "TRUE. Oxygenation takes priority; the evidence for cricoid pressure is weak and its correct application is poor.",
        "TRUE. Particularly in the critically ill and the obese, where desaturation is rapid — the traditional absolute prohibition has softened.",
        "TRUE. With comparable intubating conditions, and sugammadex available for rapid reversal."
      ]
    },
    {
      cat: "Preoperative",
      stem: "Preoperative investigations:",
      opts: [
        "Routine preoperative investigation of all patients is recommended",
        "An ECG is indicated in patients with cardiovascular disease or significant risk factors",
        "A group and save is required where significant blood loss is anticipated",
        "Sickle cell testing should be considered in patients of at-risk ancestry",
        "A pregnancy test should be offered to all women of childbearing potential"
      ],
      ans: [
        "FALSE. Investigation should be TARGETED by patient factors and surgical grade — routine testing generates false positives, delay and cost without benefit.",
        "TRUE. And in those undergoing major surgery, guided by national criteria.",
        "TRUE. With crossmatching where the surgical blood ordering schedule requires it.",
        "TRUE. Where status is unknown, because of the risks of hypoxia, acidosis, hypothermia and stasis.",
        "TRUE. With sensitivity and confidentiality; a positive result changes management substantially."
      ]
    },
    {
      cat: "ICU",
      stem: "Scoring systems in intensive care:",
      opts: [
        "APACHE II uses the worst physiological values in the first 24 hours",
        "SOFA scores six organ systems",
        "Scoring systems predict outcome for populations rather than individuals",
        "The Glasgow Coma Scale ranges from 3 to 15",
        "NEWS2 is a track-and-trigger score used on the ward"
      ],
      ans: [
        "TRUE. Combined with age and chronic health points.",
        "TRUE. Respiratory, coagulation, liver, cardiovascular, CNS and renal — each scored 0 to 4.",
        "TRUE. Which is why they must not be used to make individual treatment-limitation decisions.",
        "TRUE. Eye 1–4, verbal 1–5, motor 1–6; a score of 8 or less usually indicates the need to secure the airway.",
        "TRUE. Incorporating oxygen saturation scales and a specific alert for confusion."
      ]
    },
    {
      cat: "Clinical",
      stem: "Extubation:",
      opts: [
        "Extubation should be planned as carefully as intubation",
        "A cuff leak test may help predict post-extubation stridor",
        "Awake extubation is generally safer in patients at risk of aspiration",
        "An airway exchange catheter allows re-intubation in the at-risk patient",
        "Complications of extubation are less frequent than those of intubation"
      ],
      ans: [
        "TRUE. With low-risk and at-risk algorithms; NAP4 highlighted emergence and recovery as under-recognised danger points.",
        "TRUE. Absence of a leak suggests laryngeal oedema.",
        "TRUE. With protective reflexes restored and full reversal confirmed.",
        "TRUE. Well tolerated for a period, allowing oxygenation and a railroaded tube if needed.",
        "FALSE. Airway complications are actually MORE common at extubation and in recovery than at induction — the reverse of the intuitive assumption."
      ]
    }
  ]
});
