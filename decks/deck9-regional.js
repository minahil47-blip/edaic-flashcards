window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "regional",
  title: "Regional",
  emoji: "💉",
  subtitle: "LA pharmacology · Neuraxial · Upper & lower limb blocks · Trunk blocks · LAST",
  colors: {
    front1: "#059669", front2: "#0891b2",
    back1: "#fecdd3", back2: "#e9d5ff", backText: "#3b0764",
    chips: ["#059669","#0891b2","#5ab0ff","#b98bff","#ff6b9d","#ff9a3d","#ffd93d","#7bd88f"]
  },
  cards: [
    {cat:"LA pharmacology", q:"What is the mechanism of action of local anaesthetics?", a:"Reversible blockade of voltage-gated sodium channels from the intracellular side, preventing depolarisation. They bind preferentially in the open and inactivated states (use-dependent block)."},
    {cat:"LA pharmacology", q:"Which physicochemical property determines onset?", a:"pKa — the closer to physiological pH, the greater the un-ionised fraction available to cross the membrane, and the faster the onset. Lidocaine pKa 7.9 is faster than bupivacaine pKa 8.1."},
    {cat:"LA pharmacology", q:"Which property determines potency, and which determines duration?", a:"Potency correlates with lipid solubility; duration correlates with protein binding (mainly to alpha-1 acid glycoprotein)."},
    {cat:"LA pharmacology", q:"Why do local anaesthetics fail in infected tissue?", a:"Acidic tissue pH increases the ionised fraction, so less drug crosses the nerve membrane. Local hyperaemia also increases systemic absorption."},
    {cat:"LA pharmacology", q:"How are esters and amides metabolised?", a:"Esters (cocaine, procaine, amethocaine, chloroprocaine) by plasma cholinesterase, producing PABA and a higher allergy risk. Amides (lidocaine, bupivacaine, ropivacaine, prilocaine) in the liver. Amides have an 'i' before the '-caine'."},
    {cat:"LA pharmacology", q:"State the maximum safe doses of the common agents.", a:"Lidocaine 3 mg/kg plain, 7 mg/kg with adrenaline. Bupivacaine and levobupivacaine 2 mg/kg. Ropivacaine 3 mg/kg. Prilocaine 6 mg/kg, 8–9 mg/kg with adrenaline."},
    {cat:"LA pharmacology", q:"Why is bupivacaine more cardiotoxic than lidocaine?", a:"It binds cardiac sodium channels with much slower dissociation ('fast in, slow out'), causing refractory re-entrant arrhythmias. Cardiovascular collapse may precede CNS signs, and the CC:CNS ratio is low."},
    {cat:"LA pharmacology", q:"Why are levobupivacaine and ropivacaine preferred?", a:"They are single S-enantiomers with less cardiotoxicity than racemic bupivacaine. Ropivacaine also shows greater sensory-motor separation."},
    {cat:"LA pharmacology", q:"Why does prilocaine cause methaemoglobinaemia?", a:"Its metabolite o-toluidine oxidises haemoglobin. Treated with methylene blue 1–2 mg/kg. Suspect it with cyanosis and an SpO2 stuck near 85%."},
    {cat:"LA pharmacology", q:"What does adrenaline add to a local anaesthetic, and where must it be avoided?", a:"Vasoconstriction prolongs duration, reduces peak plasma level and reduces bleeding. Classically avoided in end-arterial territories, though this is now debated."},
    {cat:"LA pharmacology", q:"Rank the sites of local anaesthetic absorption from fastest to slowest.", a:"Intercostal > caudal > epidural > brachial plexus > sciatic/femoral > subcutaneous. Mnemonic: ICE BSS."},
    {cat:"LA pharmacology", q:"In what order are nerve fibres blocked?", a:"Autonomic (B) first, then pain and temperature (A-delta and C), then touch and pressure, then motor (A-alpha) last. Recovery is in reverse."},

    {cat:"LAST", q:"What are the features of local anaesthetic systemic toxicity?", a:"Early CNS: perioral tingling, tinnitus, metallic taste, confusion, agitation. Then seizures and coma. Cardiovascular: hypotension, bradycardia, broad complex arrhythmias, asystole."},
    {cat:"LAST", q:"How is LAST managed?", a:"Stop injecting, call for help, secure airway with 100% oxygen, control seizures (benzodiazepine), and give 20% lipid emulsion 1.5 ml/kg bolus then 15 ml/kg/h. Resuscitation may need to be prolonged; cardiopulmonary bypass may be required."},
    {cat:"LAST", q:"Which drugs should be avoided in LAST-related cardiac arrest?", a:"Lidocaine (further sodium channel block), and vasopressin. Use reduced adrenaline doses (≤1 microgram/kg boluses)."},
    {cat:"LAST", q:"How is LAST best prevented?", a:"Use the lowest effective dose, calculate maximum dose by weight, aspirate before injection, inject incrementally, use ultrasound guidance, and consider a test dose."},

    {cat:"Neuraxial anatomy", q:"Which layers does a needle traverse in a midline lumbar epidural approach?", a:"Skin, subcutaneous fat, supraspinous ligament, interspinous ligament, ligamentum flavum, then the epidural space. A further dural and arachnoid puncture reaches CSF."},
    {cat:"Neuraxial anatomy", q:"What are the boundaries and contents of the epidural space?", a:"Bounded by ligamentum flavum posteriorly, posterior longitudinal ligament anteriorly, and pedicles laterally. Contains fat, the internal vertebral venous plexus, lymphatics and nerve roots."},
    {cat:"Neuraxial anatomy", q:"At what depth is the epidural space in an adult, and where does the cord end?", a:"Typically 4–6 cm from the skin in the lumbar region. The cord ends at L1–L2 in adults, so L3-4 or below is used."},
    {cat:"Neuraxial anatomy", q:"What is Tuffier's line?", a:"The line joining the iliac crests, crossing at about the L4 body or the L4–L5 interspace. It is an unreliable landmark and often overestimates the level."},
    {cat:"Neuraxial anatomy", q:"Which dermatomes mark useful landmarks?", a:"C6 thumb, T4 nipple, T6 xiphisternum, T10 umbilicus, L1 inguinal ligament, S2–S4 perineum."},
    {cat:"Neuraxial anatomy", q:"What block height is needed for caesarean section?", a:"A block to T4 (light touch), tested to cold and touch. Sympathetic block extends about two segments higher, motor about two lower."},

    {cat:"Spinal & epidural", q:"Which factors determine the spread of a spinal anaesthetic?", a:"Baricity and patient position are dominant, then dose (mass of drug), site of injection, and patient factors such as pregnancy, height and intra-abdominal pressure. Barbotage and speed of injection matter little."},
    {cat:"Spinal & epidural", q:"Why does hypotension occur after a spinal, and how is it managed?", a:"Sympathetic blockade causes vasodilation and reduced venous return; a block above T4 also blocks cardiac accelerator fibres. Managed with vasopressors (phenylephrine or noradrenaline), fluid co-loading, and left uterine displacement in obstetrics."},
    {cat:"Spinal & epidural", q:"What is post-dural puncture headache and how is it treated?", a:"A postural headache, worse on sitting, from CSF leak. Risk relates to needle size and type — pencil-point needles reduce it. Treated conservatively with analgesia and fluids, and definitively with an epidural blood patch."},
    {cat:"Spinal & epidural", q:"What is a test dose and what does it detect?", a:"Typically 3 ml of 2% lidocaine with 1:200,000 adrenaline. A rapid dense block suggests intrathecal placement; tachycardia and hypertension suggest intravascular placement."},
    {cat:"Spinal & epidural", q:"What are the absolute contraindications to neuraxial blockade?", a:"Patient refusal, local infection at the site, raised ICP, uncorrected coagulopathy and untreated hypovolaemia. Relative: systemic sepsis, fixed cardiac output states, some neurological disease."},
    {cat:"Spinal & epidural", q:"What are the features of an epidural haematoma or abscess?", a:"Increasing back pain, unexpectedly dense or prolonged block, new neurological deficit, bladder dysfunction. Abscess adds fever and raised inflammatory markers. Both need urgent MRI and decompression within hours."},
    {cat:"Spinal & epidural", q:"What is the difference between a total spinal and a high block?", a:"A total spinal is intracranial spread causing apnoea, unconsciousness, profound hypotension and bradycardia, requiring intubation and full cardiovascular support."},
    {cat:"Spinal & epidural", q:"How does caudal anaesthesia differ, and what dose is used in children?", a:"Injection through the sacrococcygeal membrane into the sacral canal. Armitage regimen: 0.5 ml/kg for lumbosacral, 1 ml/kg to mid-thoracic, 1.25 ml/kg for upper abdominal, using 0.25% levobupivacaine."},

    {cat:"Upper limb", q:"Describe the structure of the brachial plexus.", a:"Roots C5–T1, forming upper, middle and lower trunks, each dividing into anterior and posterior divisions, then lateral, posterior and medial cords, then terminal branches. Mnemonic: Real Texans Drink Cold Beer."},
    {cat:"Upper limb", q:"What does an interscalene block cover, and what are its complications?", a:"Shoulder and upper arm (C5–C6); it spares the ulnar border (C8–T1). Complications: near-universal phrenic nerve palsy, recurrent laryngeal nerve block, Horner's syndrome, vertebral artery injection and pneumothorax."},
    {cat:"Upper limb", q:"What are the indications for supraclavicular, infraclavicular and axillary blocks?", a:"Supraclavicular: 'spinal of the arm', elbow and below, with pneumothorax risk. Infraclavicular: elbow and below, good for catheters. Axillary: forearm and hand, but often spares the musculocutaneous nerve."},
    {cat:"Upper limb", q:"Which nerves supply the hand and where are they blocked at the wrist?", a:"Median (between palmaris longus and flexor carpi radialis), ulnar (radial to flexor carpi ulnaris), and radial (subcutaneous infiltration over the anatomical snuffbox)."},
    {cat:"Upper limb", q:"What is a Bier's block and what are its safety rules?", a:"Intravenous regional anaesthesia with prilocaine and a double cuff. Never use bupivacaine. The cuff must stay inflated at least 20 minutes, and resuscitation equipment must be available."},

    {cat:"Lower limb", q:"Which nerves supply the lower limb and from which plexus?", a:"Lumbar plexus (L1–L4): femoral, obturator, lateral femoral cutaneous. Sacral plexus (L4–S3): sciatic, dividing into tibial and common peroneal."},
    {cat:"Lower limb", q:"What does a femoral nerve block cover?", a:"Anterior thigh, femur and knee, plus the medial lower leg via the saphenous nerve. Combined with sciatic block it covers most of the leg below the knee."},
    {cat:"Lower limb", q:"What is the advantage of an adductor canal block over a femoral block?", a:"It provides similar analgesia after knee surgery while largely preserving quadriceps strength, allowing earlier mobilisation."},
    {cat:"Lower limb", q:"Which nerves must be blocked for foot and ankle surgery?", a:"The five nerves at the ankle: posterior tibial, sural, superficial peroneal, deep peroneal and saphenous."},
    {cat:"Lower limb", q:"Where is the lateral femoral cutaneous nerve blocked?", a:"Just medial and inferior to the anterior superior iliac spine, deep to the fascia lata. Purely sensory, supplying the lateral thigh."},

    {cat:"Trunk blocks", q:"What does a transversus abdominis plane (TAP) block cover?", a:"The anterior abdominal wall, roughly T10–L1 with a posterior approach — somatic analgesia only, no visceral cover."},
    {cat:"Trunk blocks", q:"What is a rectus sheath block used for?", a:"Midline incisions — it blocks the terminal branches of T9–T11 between the rectus muscle and the posterior rectus sheath."},
    {cat:"Trunk blocks", q:"Why do intercostal blocks carry the highest LAST risk?", a:"The intercostal space is highly vascular, giving the fastest systemic absorption of any regional technique. Pneumothorax is the other main risk."},
    {cat:"Trunk blocks", q:"What is a paravertebral block and what are its advantages?", a:"Injection alongside the vertebral body where spinal nerves emerge, producing unilateral somatic and sympathetic block. Useful for thoracotomy and breast surgery, with less hypotension than an epidural."},
    {cat:"Trunk blocks", q:"What is an erector spinae plane block?", a:"Injection deep to erector spinae onto the transverse process, with craniocaudal spread giving multi-dermatomal analgesia. Technically simple and relatively far from pleura and neuraxis."},

    {cat:"Safety", q:"What are the AAGBI/ESRA recommendations for regional anaesthesia and anticoagulants?", a:"Timings vary by drug — for example LMWH prophylactic dose 12 hours before block and 4 hours after catheter removal; treatment dose 24 hours. Always check the current national guideline for the specific agent."},
    {cat:"Safety", q:"Why perform blocks awake or lightly sedated in adults?", a:"To preserve the ability to report paraesthesia and pain on injection — warning signs of intraneural placement. Children are the accepted exception."},
    {cat:"Safety", q:"What is the 'Stop Before You Block' initiative?", a:"A final pause immediately before needle insertion to confirm the correct side and site, reducing wrong-sided blocks."},
    {cat:"Safety", q:"What are the mechanisms of nerve injury in regional anaesthesia?", a:"Mechanical (needle trauma, intraneural injection), ischaemic (pressure, adrenaline), and chemical (neurotoxicity). Most perioperative neuropathies are actually positional or surgical rather than block-related."}
  ]
});
