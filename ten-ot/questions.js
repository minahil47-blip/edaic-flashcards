/* Ten OT Curriculum — assessment banks.
   Correct answers are not stored beside the questions; they live in the
   encoded strings at the end of each bank. */

window.ROSTER = [
  { name: "Imtesal", pool: "junior" },
  { name: "Rabia",   pool: "junior" },
  { name: "Noor",    pool: "senior" },
  { name: "Arshad",  pool: "senior" }
];

window.BANKS = {
  senior: {
    label: "Senior paper",
    blurb: "ENT · Neurosurgery · Thoracic",
    q: [
      { t: "ENT", q: "A 6-year-old returns to theatre five hours after tonsillectomy with continuous swallowing and one episode of haematemesis. Heart rate 140, capillary refill 3 seconds. What is the most appropriate plan?", o: [
        "Volume resuscitate first, then rapid sequence induction with a reduced dose of induction agent, two working suctions and a tube half a size smaller",
        "Immediate inhalational induction sitting upright to protect the airway",
        "Awake fibreoptic intubation under topical anaesthesia",
        "Standard intravenous induction with a supraglottic airway to avoid further airway trauma"
      ]},
      { t: "ENT", q: "For laser surgery on the larynx, which combination is correct?", o: [
        "FiO2 0.5 in nitrous oxide with a standard PVC tube",
        "FiO2 1.0 with jet ventilation and no tracheal tube",
        "FiO2 no higher than 0.3 in air, no nitrous oxide, and a laser-resistant tube with the cuff filled with saline and methylene blue",
        "FiO2 0.3 in nitrous oxide with an uncuffed PVC tube"
      ]},
      { t: "ENT", q: "An airway fire occurs during laser laryngeal surgery. What is the immediate first action?", o: [
        "Stop ventilation, disconnect the circuit, remove the tracheal tube and flood the field with saline",
        "Increase the fresh gas flow and keep ventilating while the surgeon extinguishes the flame",
        "Give intravenous dexamethasone and continue the operation",
        "Extubate and apply a face mask with 100% oxygen"
      ]},
      { t: "ENT", q: "Which measure most reduces the risk of posterior tracheal wall injury during percutaneous tracheostomy?", o: [
        "Routine preoperative CT of the neck",
        "Full reversal of neuromuscular blockade before dilatation",
        "Head-down positioning",
        "Continuous bronchoscopic guidance through the tracheal tube"
      ]},
      { t: "ENT", q: "Which technique best improves the surgical field during functional endoscopic sinus surgery?", o: [
        "Deep volatile anaesthesia with permissive hypercapnia",
        "Head-down tilt to lower pressure at the surgical site",
        "Spontaneous ventilation via a supraglottic airway with deliberate hypercapnia",
        "Total intravenous anaesthesia with remifentanil, 15 degrees head-up tilt and normocapnia"
      ]},
      { t: "ENT", q: "During total laryngectomy, how is ventilation maintained at the moment the trachea is divided?", o: [
        "The original oral tube is advanced into the distal trachea",
        "Apnoeic oxygenation is used until the stoma is sutured",
        "The surgeon inserts a sterile armoured tube into the distal trachea and the circuit is transferred to it",
        "The patient breathes spontaneously through the open stoma"
      ]},
      { t: "ENT", q: "A 15-year-old boy presents for excision of a juvenile nasopharyngeal angiofibroma. What dominates the anaesthetic plan?", o: [
        "Catastrophic haemorrhage — preoperative embolisation, large-bore access and cross-matched blood",
        "Venous air embolism from the head-up position",
        "Postoperative facial nerve palsy",
        "A high risk of malignant hyperthermia"
      ]},
      { t: "ENT", q: "An adult with acute supraglottitis has stridor and cannot lie flat. Which approach is safest?", o: [
        "Rapid sequence induction with suxamethonium in the emergency department",
        "Blind nasal intubation after intravenous sedation",
        "Deep sedation and CT of the neck before any airway intervention",
        "Inhalational induction in theatre with spontaneous ventilation maintained and the surgeon scrubbed for a surgical airway"
      ]},
      { t: "Neuro", q: "Which monitor is the most sensitive for detecting venous air embolism during sitting craniotomy?", o: [
        "Transoesophageal echocardiography",
        "Precordial Doppler",
        "A fall in end-tidal carbon dioxide",
        "Right atrial pressure"
      ]},
      { t: "Neuro", q: "Air embolism is suspected during a sitting craniotomy. What is the first action?", o: [
        "Tell the surgeon to flood the field, stop nitrous oxide and give 100% oxygen",
        "Begin chest compressions",
        "Place the patient in reverse Trendelenburg",
        "Give mannitol 1 g/kg"
      ]},
      { t: "Neuro", q: "Which regimen best preserves motor evoked potentials during spinal deformity surgery?", o: [
        "Sevoflurane 1.5 MAC with a rocuronium infusion",
        "Propofol and remifentanil total intravenous anaesthesia with no neuromuscular blockade after intubation",
        "Isoflurane 1 MAC with intermittent atracurium",
        "70% nitrous oxide with a propofol infusion"
      ]},
      { t: "Neuro", q: "In severe traumatic brain injury, which haemodynamic targets are recommended?", o: [
        "Cerebral perfusion pressure above 90 mmHg with induced hypertension",
        "Routine hyperventilation to a PaCO2 of 3.5 kPa",
        "Permissive hypotension until the haematoma is evacuated",
        "Cerebral perfusion pressure 60–70 mmHg with systolic pressure kept at or above 100 mmHg"
      ]},
      { t: "Neuro", q: "What is the commonest cause of perioperative visual loss after prolonged prone spinal surgery?", o: [
        "Central retinal artery occlusion from direct globe pressure",
        "Corneal abrasion",
        "Ischaemic optic neuropathy",
        "Cortical blindness from embolism"
      ]},
      { t: "Neuro", q: "Which nerves must be blocked for a complete scalp block before awake craniotomy?", o: [
        "Supraorbital, supratrochlear, zygomaticotemporal, auriculotemporal, greater and lesser occipital, and greater auricular",
        "Supraorbital and supratrochlear only",
        "The trigeminal ganglion and the superficial cervical plexus",
        "The maxillary and mandibular divisions bilaterally"
      ]},
      { t: "Neuro", q: "Which early postoperative complication most threatens the airway after anterior cervical discectomy and fusion?", o: [
        "Pneumothorax",
        "Vertebral artery spasm",
        "Prevertebral soft-tissue swelling or haematoma",
        "Chyle leak"
      ]},
      { t: "Neuro", q: "Why is sedation minimised during microelectrode recording for deep brain stimulation?", o: [
        "Dexmedetomidine abolishes recordings at any dose",
        "Propofol and benzodiazepines suppress tremor and degrade the recordings",
        "Neuromuscular blockade is required instead",
        "Recordings are unaffected by anaesthetics, but sedation prolongs recovery"
      ]},
      { t: "Neuro", q: "Motor evoked potentials are lost immediately after rod distraction in scoliosis surgery. What is the most appropriate response?", o: [
        "Deepen anaesthesia and repeat the reading",
        "Raise the mean arterial pressure and ask the surgeon to reduce the correction",
        "Give a bolus of muscle relaxant to reduce artefact",
        "Continue and reassess after wound closure"
      ]},
      { t: "Thoracic", q: "A left-sided double-lumen tube in an adult of average height sits correctly at approximately what depth, and how is this confirmed?", o: [
        "29 cm at the teeth, confirmed by fibreoptic bronchoscopy",
        "21 cm at the teeth, confirmed by auscultation alone",
        "35 cm at the teeth, confirmed by chest radiograph",
        "Depth does not matter if breath sounds are equal"
      ]},
      { t: "Thoracic", q: "Oxygen saturation falls to 88% ten minutes after starting one-lung ventilation. What should you do first?", o: [
        "Abandon one-lung ventilation immediately",
        "Apply CPAP of 15 cmH2O to the non-dependent lung",
        "Increase the tidal volume to 12 ml/kg",
        "Increase FiO2 to 1.0 and re-check tube position with the fibrescope"
      ]},
      { t: "Thoracic", q: "Which statement about hypoxic pulmonary vasoconstriction is correct?", o: [
        "It is enhanced by inhalational anaesthetic agents",
        "High-dose volatile agents and vasodilators such as glyceryl trinitrate attenuate it",
        "It is unaffected by cardiac output",
        "It is abolished by hypercapnia"
      ]},
      { t: "Thoracic", q: "Which fluid strategy is recommended for pneumonectomy?", o: [
        "Restrictive — keep total perioperative fluid below about 2 litres in the first 24 hours",
        "Crystalloid at 10 ml/kg/h throughout",
        "Liberal fluid aiming for a urine output above 1.5 ml/kg/h",
        "Replace third-space losses at 8 ml/kg/h"
      ]},
      { t: "Thoracic", q: "Compared with thoracic epidural analgesia, paravertebral block after thoracotomy offers:", o: [
        "Comparable analgesia with less hypotension, urinary retention and nausea",
        "Superior analgesia but more hypotension",
        "Inferior analgesia with a higher failure rate in all patients",
        "No analgesic benefit; it is contraindicated after thoracotomy"
      ]},
      { t: "Thoracic", q: "A patient with a large bronchopleural fistula and empyema needs surgery. What is the key principle at induction?", o: [
        "Mask-ventilate gently until the tube is placed",
        "Place a single-lumen tube and use high PEEP",
        "Isolate the lung with a double-lumen tube before positive pressure ventilation is started",
        "Use a supraglottic airway with spontaneous ventilation throughout"
      ]},
      { t: "Thoracic", q: "What is the main haemodynamic consequence of carbon dioxide insufflation above 10 mmHg during VATS?", o: [
        "Hypothermia from cold gas",
        "Reduced venous return with hypotension and mediastinal shift",
        "Inevitable subcutaneous emphysema",
        "Systemic gas embolism at any pressure"
      ]},
      { t: "Thoracic", q: "A patient with myasthenia gravis presents for thymectomy. What is the expected response to muscle relaxants?", o: [
        "Resistance to non-depolarising agents and sensitivity to suxamethonium",
        "Normal responses to both",
        "Marked sensitivity to non-depolarising agents and relative resistance to suxamethonium",
        "Sensitivity to both classes"
      ]}
    ],
    k: "MDIwMzMyMDMwMDEzMjAyMTEwMzEwMDIxMg=="
  },

  junior: {
    label: "Junior paper",
    blurb: "ENT · Basic neuroanaesthesia",
    q: [
      { t: "ENT", q: "Apart from pain, what is the commonest complication after tonsillectomy?", o: [
        "Malignant hyperthermia",
        "Postoperative nausea and vomiting",
        "Anaphylaxis",
        "Pneumothorax"
      ]},
      { t: "ENT", q: "How should opioids be used in a child having adenotonsillectomy for severe obstructive sleep apnoea?", o: [
        "Larger doses are needed because the airway is obstructed",
        "Normal doses are entirely safe",
        "Reduced doses — these children are more sensitive to opioids",
        "Opioids and NSAIDs are both contraindicated"
      ]},
      { t: "ENT", q: "Which airway is standard for routine tonsillectomy?", o: [
        "A face mask with an oral airway",
        "A nasal tube",
        "A south-facing (oral RAE) cuffed tracheal tube",
        "An uncuffed tube one size small"
      ]},
      { t: "ENT", q: "What is the essential safety rule for a throat pack?", o: [
        "It must be recorded on the swab count and removed before extubation",
        "It should be left in place overnight",
        "It must be soaked in adrenaline",
        "It removes the need for a cuffed tube"
      ]},
      { t: "ENT", q: "A child returns with a bleeding tonsil. What are the two dominant anaesthetic problems?", o: [
        "Hypothermia and hypoglycaemia",
        "Laryngospasm and bronchospasm only",
        "Venous air embolism and arrhythmia",
        "Hypovolaemia and a stomach full of swallowed blood"
      ]},
      { t: "ENT", q: "Why is blood loss from a bleeding tonsil usually underestimated?", o: [
        "Children bleed slowly",
        "Suction is not used during the procedure",
        "Most of the blood is swallowed",
        "Haemoglobin falls immediately and masks the loss"
      ]},
      { t: "ENT", q: "Which agent should be avoided during tympanoplasty?", o: [
        "Propofol",
        "Sevoflurane",
        "Nitrous oxide, because it expands the middle-ear space and can displace the graft",
        "Dexamethasone"
      ]},
      { t: "ENT", q: "Facial nerve monitoring is planned for mastoid surgery. What does this require from the anaesthetist?", o: [
        "A rocuronium infusion to prevent movement",
        "Avoiding neuromuscular blocking drugs after intubation",
        "Repeated boluses of suxamethonium",
        "Nothing — monitoring is unaffected by relaxants"
      ]},
      { t: "ENT", q: "What is the usual anaesthetic for insertion of grommets in a healthy child?", o: [
        "A brief general anaesthetic with a supraglottic airway, spontaneous ventilation, and paracetamol with ibuprofen",
        "Tracheal intubation with muscle relaxation",
        "Local anaesthetic infiltration only",
        "Sedation with morphine and an awake procedure"
      ]},
      { t: "ENT", q: "A 2-year-old needs rigid bronchoscopy for an inhaled peanut. Which technique is preferred?", o: [
        "Rapid sequence induction with suxamethonium",
        "Vigorous positive pressure mask ventilation before scoping",
        "Inhalational induction with spontaneous ventilation maintained",
        "Awake bronchoscopy with topical anaesthesia only"
      ]},
      { t: "ENT", q: "A 4-year-old needs oesophagoscopy for a coin swallowed two hours ago. Which plan is correct?", o: [
        "Supraglottic airway with spontaneous ventilation",
        "Sedation alone",
        "Inhalational induction with no airway device",
        "Rapid sequence induction with a cuffed tracheal tube — the child has a full stomach"
      ]},
      { t: "ENT", q: "A 4-year-old has drooling, a muffled voice and stridor, and is sitting forward. What is the correct management?", o: [
        "Cannulate and take blood on the ward first",
        "Keep the child calm and undisturbed, and induce inhalationally in theatre with an ENT surgeon present",
        "Inspect the throat with a tongue depressor to confirm the diagnosis",
        "Lie the child flat for a lateral neck radiograph"
      ]},
      { t: "ENT", q: "What is the main airway consideration when waking a patient after manipulation of a fractured nasal bone?", o: [
        "Blood may collect in the pharynx, so suction it before removing the airway device",
        "Nitrous oxide must be avoided",
        "Full muscle relaxation is required",
        "A postoperative opioid infusion is routine"
      ]},
      { t: "ENT", q: "Which principle applies to airway laser surgery?", o: [
        "Use 100% oxygen to maximise the safety margin",
        "Nitrous oxide is safe because it does not burn",
        "Keep the inspired oxygen concentration low and avoid nitrous oxide",
        "A standard PVC tube is laser-safe"
      ]},
      { t: "ENT", q: "A tracheostomy tube falls out 48 hours after an open tracheostomy. What should you do?", o: [
        "Force a new tube blindly into the stoma at once",
        "Occlude the stoma and wait for the surgeon",
        "Do not force a tube blindly; oxygenate by face mask over the mouth, cover the stoma, and call for senior help",
        "Perform a needle cricothyroidotomy immediately"
      ]},
      { t: "ENT", q: "Why are nausea and airway obstruction more likely after rhinoplasty with nasal packing?", o: [
        "Packing forces mouth breathing, and swallowed blood irritates the stomach",
        "Packing protects the airway from blood",
        "Vomiting is rare because the stomach is empty",
        "The nasal mucosa absorbs the anaesthetic agent"
      ]},
      { t: "Neuro", q: "What is the normal intracranial pressure in a supine adult?", o: [
        "0–2 mmHg",
        "20–30 mmHg",
        "5–15 mmHg",
        "30–40 mmHg"
      ]},
      { t: "Neuro", q: "Cerebral perfusion pressure is calculated as:", o: [
        "Mean arterial pressure minus intracranial pressure",
        "Mean arterial pressure plus intracranial pressure",
        "Systolic pressure minus intracranial pressure",
        "Mean arterial pressure minus central venous pressure"
      ]},
      { t: "Neuro", q: "Which is used to lower intracranial pressure acutely in theatre?", o: [
        "Normal saline 20 ml/kg",
        "Mannitol 0.25–1 g/kg intravenously",
        "10% glucose infusion",
        "Dexamethasone for traumatic brain injury"
      ]},
      { t: "Neuro", q: "Which of the following raises intracranial pressure?", o: [
        "Hypocapnia",
        "A 30 degree head-up tilt",
        "Hypercapnia",
        "Propofol"
      ]},
      { t: "Neuro", q: "How should a patient be positioned to help cerebral venous drainage?", o: [
        "Head-down with the neck flexed",
        "Flat with the head turned fully to one side",
        "Head-up with tube ties tied firmly around the neck",
        "15–30 degrees head-up with the neck neutral and no tight tube ties"
      ]},
      { t: "Neuro", q: "What are the main anaesthetic concerns for an infant having a ventriculoperitoneal shunt?", o: [
        "Massive blood loss",
        "Air embolism from the peritoneal end",
        "Raised intracranial pressure and heat loss during the long subcutaneous tunnelling",
        "Postoperative ventilation is always required"
      ]},
      { t: "Neuro", q: "What is the goal at induction in a patient with raised intracranial pressure?", o: [
        "Deliberate hypertension to maintain perfusion",
        "A smooth induction avoiding coughing, straining and swings in blood pressure",
        "Rapid emergence using ketamine",
        "Spontaneous ventilation throughout"
      ]},
      { t: "Neuro", q: "Why must the abdomen hang free in the prone position for lumbar discectomy?", o: [
        "To reduce airway pressures only",
        "Abdominal compression engorges the epidural veins and increases surgical bleeding",
        "To improve venous return to the legs",
        "To allow the surgeon to sit"
      ]},
      { t: "Neuro", q: "A young man has a lucid interval after head injury and a lens-shaped haematoma on CT. What is the priority?", o: [
        "Urgent surgical evacuation, avoiding hypoxia and hypotension in the meantime",
        "Conservative management with steroids",
        "Delay surgery until the lucid interval ends",
        "Hyperventilate to a PaCO2 of 3.0 kPa for the whole case"
      ]}
    ],
    k: "MTIyMDMyMjEwMjMxMDIyMDIwMTIzMjExMA=="
  }
};
