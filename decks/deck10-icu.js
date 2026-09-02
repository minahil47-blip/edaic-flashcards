window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "icu",
  title: "ICU",
  emoji: "🏥",
  subtitle: "Sepsis · ARDS · Ventilation · Shock · AKI · Neuro-critical care · Nutrition",
  colors: {
    front1: "#dc2626", front2: "#7c2d12",
    back1: "#a7f3d0", back2: "#bae6fd", backText: "#0c2b23",
    chips: ["#dc2626","#f97316","#ffd93d","#7bd88f","#3dd6d6","#5ab0ff","#b98bff","#ff6b9d"]
  },
  cards: [
    {cat:"Sepsis", q:"How are sepsis and septic shock defined (Sepsis-3)?", a:"Sepsis: life-threatening organ dysfunction from a dysregulated host response to infection, marked by a SOFA rise of 2 or more. Septic shock: sepsis with vasopressors needed to keep MAP ≥65 mmHg plus lactate >2 mmol/L despite adequate fluid resuscitation."},
    {cat:"Sepsis", q:"What are the core elements of initial sepsis management?", a:"Blood cultures before antibiotics, early broad-spectrum antibiotics, lactate measurement, fluid resuscitation (about 30 ml/kg crystalloid in hypoperfusion), vasopressors for a MAP ≥65, and source control."},
    {cat:"Sepsis", q:"Which vasopressor is first line in septic shock, and what is added?", a:"Noradrenaline. Vasopressin may be added as a second agent to reduce noradrenaline requirement; adrenaline is an alternative. Add an inotrope such as dobutamine if cardiac output is inadequate."},
    {cat:"Sepsis", q:"What is the role of steroids in septic shock?", a:"Hydrocortisone (about 200 mg/day) is considered in shock refractory to fluids and vasopressors. It shortens time to shock reversal; the mortality benefit remains uncertain."},
    {cat:"Sepsis", q:"Why is lactate raised in sepsis?", a:"Not only anaerobic metabolism from hypoperfusion, but also increased aerobic glycolysis driven by catecholamines and beta-2 stimulation, plus impaired hepatic clearance."},

    {cat:"ARDS", q:"State the Berlin definition of ARDS.", a:"Onset within 1 week of a known insult; bilateral opacities not fully explained by effusion, collapse or nodules; respiratory failure not fully explained by cardiac failure or fluid overload; and PaO2/FiO2 ≤300 mmHg with PEEP ≥5 cmH2O."},
    {cat:"ARDS", q:"How is ARDS severity graded?", a:"By PaO2/FiO2 ratio (mmHg): mild 200–300, moderate 100–200, severe ≤100."},
    {cat:"ARDS", q:"What is lung-protective ventilation?", a:"Tidal volume about 6 ml/kg predicted body weight, plateau pressure <30 cmH2O, driving pressure <15 cmH2O, adequate PEEP, and permissive hypercapnia."},
    {cat:"ARDS", q:"Which interventions improve mortality in severe ARDS?", a:"Low tidal volume ventilation and prone positioning (PROSEVA, for P/F <150, at least 16 hours per session). Neuromuscular blockade and ECMO have a more limited or selective role."},
    {cat:"ARDS", q:"Describe the mechanisms of ventilator-induced lung injury.", a:"Volutrauma (overdistension), barotrauma (high pressure), atelectrauma (repeated opening and closing), and biotrauma (inflammatory mediator release)."},
    {cat:"ARDS", q:"How does prone positioning improve oxygenation?", a:"More uniform distribution of transpulmonary pressure and ventilation, recruitment of dorsal lung, better V/Q matching, and improved secretion drainage."},

    {cat:"Ventilation", q:"What is the difference between volume- and pressure-controlled ventilation?", a:"Volume control guarantees tidal volume with variable pressure; pressure control guarantees peak pressure with variable volume and a decelerating flow pattern."},
    {cat:"Ventilation", q:"What are the beneficial and harmful effects of PEEP?", a:"Beneficial: recruits alveoli, increases FRC, improves oxygenation and compliance, reduces atelectrauma. Harmful: reduced venous return and cardiac output, barotrauma, raised ICP, increased dead space."},
    {cat:"Ventilation", q:"How do you distinguish a rise in peak pressure with and without a rise in plateau pressure?", a:"Peak rises alone: increased airway resistance — bronchospasm, secretions, kinked or blocked tube. Both rise: reduced compliance — pneumothorax, oedema, consolidation, abdominal distension, intrinsic PEEP."},
    {cat:"Ventilation", q:"What is intrinsic PEEP (auto-PEEP) and how is it managed?", a:"Gas trapping from incomplete expiration, common in COPD and asthma. Managed by reducing respiratory rate, shortening inspiratory time to allow longer expiration, treating bronchospasm, and accepting permissive hypercapnia."},
    {cat:"Ventilation", q:"What are the components of a ventilator care bundle to reduce VAP?", a:"Head-up positioning 30–45°, daily sedation hold and assessment for extubation, oral chlorhexidine care, subglottic secretion drainage, stress ulcer and thromboprophylaxis."},
    {cat:"Ventilation", q:"What predicts successful weaning from ventilation?", a:"Resolution of the underlying cause, adequate oxygenation on low support, haemodynamic stability, ability to protect the airway, and a rapid shallow breathing index (f/Vt) below about 105."},
    {cat:"Ventilation", q:"What are the indications for tracheostomy in ICU?", a:"Prolonged ventilation or anticipated slow wean, airway protection, secretion clearance, and upper airway obstruction. Reduces sedation needs, dead space and work of breathing."},

    {cat:"Shock & haemodynamics", q:"Classify the types of shock with their haemodynamic patterns.", a:"Hypovolaemic: low CO, high SVR, low filling. Cardiogenic: low CO, high SVR, high filling. Distributive (septic, anaphylactic, neurogenic): high or normal CO, low SVR. Obstructive (PE, tamponade, tension pneumothorax): low CO, high SVR, high filling."},
    {cat:"Shock & haemodynamics", q:"What is the difference between fluid responsiveness and fluid tolerance?", a:"Responsiveness is whether a fluid bolus will raise stroke volume (assessed dynamically by stroke volume variation, passive leg raise or fluid challenge). Tolerance is whether the patient can accommodate that fluid without harmful congestion."},
    {cat:"Shock & haemodynamics", q:"Why are static measures such as CVP poor guides to fluid therapy?", a:"CVP reflects venous compliance, intrathoracic pressure and ventricular function as much as volume, and correlates poorly with fluid responsiveness."},
    {cat:"Shock & haemodynamics", q:"How does cardiac output monitoring by pulse contour analysis work?", a:"Stroke volume is derived from the arterial waveform, calibrated (thermodilution or lithium) or uncalibrated. Accuracy falls with arrhythmias, aortic regurgitation and high vasopressor doses."},
    {cat:"Shock & haemodynamics", q:"What are the features of cardiac tamponade?", a:"Beck's triad: hypotension, raised JVP, muffled heart sounds. Plus pulsus paradoxus, tachycardia and electrical alternans. Diastolic collapse of right-sided chambers on echo."},

    {cat:"Neuro-critical care", q:"What are the targets in severe traumatic brain injury?", a:"ICP <20–22 mmHg, CPP 60–70 mmHg, normoxia, normocapnia (4.5–5.0 kPa), normoglycaemia, normothermia or mild hypothermia, sodium 140–145 mmol/L, and head-up positioning."},
    {cat:"Neuro-critical care", q:"Outline a tiered approach to raised ICP.", a:"Tier 1: positioning, sedation, analgesia, normocapnia, CSF drainage. Tier 2: osmotherapy (mannitol or hypertonic saline), mild hyperventilation, neuromuscular blockade. Tier 3: barbiturate coma, therapeutic hypothermia, decompressive craniectomy."},
    {cat:"Neuro-critical care", q:"Compare mannitol and hypertonic saline.", a:"Mannitol: osmotic diuretic, risk of hypovolaemia, rebound and renal impairment. Hypertonic saline: expands intravascular volume, useful when hypovolaemic, risk of hypernatraemia and hyperchloraemic acidosis."},
    {cat:"Neuro-critical care", q:"What are the preconditions for brainstem death testing?", a:"Known irreversible cause of coma, apnoeic ventilated patient, with exclusion of sedatives and neuromuscular blockers, hypothermia, and severe metabolic, endocrine or circulatory disturbance."},
    {cat:"Neuro-critical care", q:"Which brainstem reflexes are tested?", a:"Pupillary light, corneal, oculovestibular (caloric), cranial nerve motor response to supraorbital pressure, gag and cough reflexes, followed by the apnoea test. Two doctors test on two occasions."},
    {cat:"Neuro-critical care", q:"How is status epilepticus managed?", a:"Benzodiazepine first line (lorazepam or midazolam), then a second-line agent (levetiracetam, phenytoin or valproate), then general anaesthesia with propofol, midazolam or thiopentone and EEG monitoring."},

    {cat:"Renal & metabolic", q:"What are the indications for renal replacement therapy in ICU?", a:"Refractory hyperkalaemia, severe metabolic acidosis, fluid overload unresponsive to diuretics, uraemic complications, and certain poisonings (lithium, salicylate, metformin, toxic alcohols)."},
    {cat:"Renal & metabolic", q:"What is refeeding syndrome and who is at risk?", a:"On reintroducing feed after starvation, insulin drives phosphate, potassium and magnesium intracellularly, causing arrhythmias, weakness and cardiac failure. Start feeding slowly and replace electrolytes with thiamine."},
    {cat:"Renal & metabolic", q:"What are the principles of ICU nutrition?", a:"Enteral is preferred where the gut works, started early. Around 25 kcal/kg/day and 1.2–2.0 g/kg/day protein. Remember propofol contributes about 1.1 kcal/ml as lipid."},
    {cat:"Renal & metabolic", q:"What glycaemic target is used in ICU?", a:"Roughly 6–10 mmol/L. Tight control (4.5–6) increases hypoglycaemia and mortality, as shown in NICE-SUGAR."},

    {cat:"Transfusion & coagulation", q:"What transfusion threshold is used in ICU?", a:"A restrictive threshold of 70 g/L for most patients (80 g/L in acute coronary syndrome or cardiac surgery), supported by TRICC and TRISS."},
    {cat:"Transfusion & coagulation", q:"What is the major haemorrhage protocol approach?", a:"Early balanced ratio blood products (approximately 1:1:1 red cells, plasma and platelets), tranexamic acid within 3 hours, calcium replacement, avoidance of hypothermia and acidosis, and definitive source control."},
    {cat:"Transfusion & coagulation", q:"What is the lethal triad of trauma?", a:"Hypothermia, acidosis and coagulopathy — each worsening the others. Some add hypocalcaemia to make a 'lethal diamond'."},
    {cat:"Transfusion & coagulation", q:"What does thromboelastography add?", a:"Point-of-care assessment of whole-blood clot formation: R time (initiation, factors), K and alpha angle (fibrinogen), MA (platelets), and LY30 (fibrinolysis) — allowing targeted product use."},

    {cat:"Sedation & delirium", q:"What are the principles of sedation in ICU?", a:"Analgesia-first, lightest effective sedation, daily sedation holds, and a validated score such as RASS. Excess sedation prolongs ventilation and increases delirium."},
    {cat:"Sedation & delirium", q:"What is propofol infusion syndrome?", a:"Metabolic acidosis, rhabdomyolysis, hyperkalaemia, arrhythmias, renal failure and cardiac collapse — associated with doses above about 4 mg/kg/h for more than 48 hours, particularly in children and head injury."},
    {cat:"Sedation & delirium", q:"Which drugs are used for ICU delirium?", a:"Treat the cause first and use non-pharmacological measures. Haloperidol or atypical antipsychotics are used for distressing agitation; dexmedetomidine reduces delirium compared with benzodiazepines, which should be avoided."},
    {cat:"Sedation & delirium", q:"What is ICU-acquired weakness?", a:"Critical illness polyneuropathy and myopathy causing symmetrical flaccid weakness with sparing of cranial nerves. Risk factors include sepsis, multi-organ failure, hyperglycaemia, steroids and immobility."},

    {cat:"Scoring & outcomes", q:"Name common ICU severity scoring systems.", a:"APACHE II and IV, SAPS, and SOFA (sequential organ failure assessment, six systems each scored 0–4). They predict population outcome, not individual prognosis."},
    {cat:"Scoring & outcomes", q:"What is the SOFA score composed of?", a:"Respiratory (P/F ratio), coagulation (platelets), liver (bilirubin), cardiovascular (MAP and vasopressors), CNS (GCS) and renal (creatinine or urine output)."}
  ]
});
