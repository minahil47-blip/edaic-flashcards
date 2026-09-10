window.DECKS = window.DECKS || [];
// Grouped card shape: { cat, stem, opts:[5], ans:[5] }
window.DECKS.push({
  id: "exam-anatomy-regional",
  title: "Exam MCQ · Anatomy & Regional",
  emoji: "🦴",
  subtitle: "True/false, exam format · 60 questions × 5 stems = 300 marks",
  colors: {
    front1: "#2b1508", front2: "#B4690E",
    back1: "#FFF8EE", back2: "#FBEBD2", backText: "#2b1508",
    chips: ["#B4690E","#A8123E","#0E7A66","#4338ca","#0369a1","#7A3B9E","#2b1508","#be123c"]
  },
  cards: [
    {
      cat: "Airway",
      stem: "The larynx:",
      opts: [
        "It extends from the level of C3 to C6 in the adult",
        "The cricoid cartilage is the only complete cartilaginous ring in the airway",
        "The thyroid cartilage is a complete ring",
        "There are three paired and three unpaired cartilages",
        "The vocal cords are attached anteriorly to the arytenoid cartilages"
      ],
      ans: [
        "TRUE. Higher in the infant, at about C3–C4.",
        "TRUE. Which is what makes cricoid pressure possible and why cricoid injury causes stenosis.",
        "FALSE. It is incomplete posteriorly — a shield, not a ring.",
        "TRUE. Paired: arytenoid, corniculate, cuneiform. Unpaired: thyroid, cricoid, epiglottis.",
        "FALSE. They attach ANTERIORLY to the thyroid cartilage and POSTERIORLY to the arytenoids."
      ]
    },
    {
      cat: "Airway",
      stem: "Nerve supply of the larynx:",
      opts: [
        "The internal branch of the superior laryngeal nerve is sensory above the cords",
        "The external branch of the superior laryngeal nerve supplies cricothyroid",
        "The recurrent laryngeal nerve supplies all intrinsic muscles except cricothyroid",
        "The recurrent laryngeal nerve is sensory below the vocal cords",
        "Bilateral recurrent laryngeal nerve palsy causes complete aphonia"
      ],
      ans: [
        "TRUE. It pierces the thyrohyoid membrane — the target of a superior laryngeal nerve block for awake intubation.",
        "TRUE. The tensor of the cords; injury causes a weak, hoarse voice and loss of high notes.",
        "TRUE. Including the posterior cricoarytenoid, the only abductor.",
        "TRUE. So topicalisation below the cords requires a transtracheal injection or spray-as-you-go.",
        "FALSE. Bilateral RLN palsy leaves the cords adducted (cricothyroid unopposed), causing STRIDOR and airway obstruction — a surgical emergency. The voice may be near-normal."
      ]
    },
    {
      cat: "Airway",
      stem: "Nerve supply of the upper airway:",
      opts: [
        "The anterior two-thirds of the tongue receives general sensation from the lingual nerve",
        "Taste from the anterior two-thirds travels in the chorda tympani",
        "The posterior third of the tongue is supplied by the glossopharyngeal nerve for both taste and sensation",
        "The nasal septum is supplied by branches of the trigeminal nerve",
        "The vallecula is supplied by the glossopharyngeal nerve"
      ],
      ans: [
        "TRUE. A branch of the mandibular division of the trigeminal nerve.",
        "TRUE. A branch of the facial nerve travelling with the lingual nerve.",
        "TRUE. Which is why glossopharyngeal block abolishes the gag reflex.",
        "TRUE. Sphenopalatine and anterior ethmoidal branches — blocked for awake nasal intubation.",
        "FALSE. The vallecula is supplied by the INTERNAL LARYNGEAL branch of the vagus (via the superior laryngeal nerve) — which is why a Macintosh blade tip in the vallecula still produces a vagally mediated response."
      ]
    },
    {
      cat: "Airway",
      stem: "The trachea and bronchi:",
      opts: [
        "The adult trachea is about 10–12 cm long",
        "It begins at C6 and bifurcates at the level of T4–T5",
        "The right main bronchus is more vertical and wider than the left",
        "The right upper lobe bronchus arises about 2.5 cm from the carina",
        "The trachea has complete cartilaginous rings"
      ],
      ans: [
        "TRUE. With an internal diameter of about 1.5–2 cm.",
        "TRUE. At the sternal angle (angle of Louis), which is a useful surface marking.",
        "TRUE. About 25 degrees versus 45 — hence the destination of aspirated material and of an over-advanced tube.",
        "TRUE. Only about 1–2.5 cm, which is why a right-sided double-lumen tube risks obstructing it and why left-sided tubes are preferred.",
        "FALSE. It has 16–20 INCOMPLETE C-shaped rings, deficient posteriorly where the trachealis muscle lies."
      ]
    },
    {
      cat: "Airway",
      stem: "The paediatric airway compared with the adult:",
      opts: [
        "The larynx lies at a higher cervical level",
        "The epiglottis is longer, stiffer and U-shaped",
        "The occiput is relatively large, flexing the neck when supine",
        "The narrowest part of the airway is classically the cricoid ring",
        "Neonates are obligate nasal breathers until about 6 months"
      ],
      ans: [
        "TRUE. About C3–C4, giving the impression of an 'anterior' larynx.",
        "TRUE. Which is why a straight blade lifting the epiglottis is often used in infants.",
        "TRUE. So a shoulder roll rather than a head ring is often needed.",
        "TRUE. Though imaging suggests the glottis may be narrowest, the subglottis remains the least distensible — hence the risk of oedema.",
        "TRUE. Making nasal obstruction potentially catastrophic in this age group."
      ]
    },
    {
      cat: "Thorax",
      stem: "The intercostal space:",
      opts: [
        "The neurovascular bundle runs in the subcostal groove of the rib above",
        "The order from superior to inferior is vein, artery, nerve",
        "The internal intercostal muscle lies deep to the external",
        "Chest drains should be inserted just above the upper border of the rib below",
        "Intercostal nerves are the anterior rami of thoracic spinal nerves"
      ],
      ans: [
        "TRUE. Running between the internal and innermost intercostal layers.",
        "TRUE. VAN — which is why needles should pass close to the upper border of the lower rib.",
        "TRUE. External runs downwards and forwards; internal upwards and forwards.",
        "TRUE. Avoiding the neurovascular bundle; the safe triangle is bounded by latissimus dorsi, pectoralis major and a line at the level of the nipple.",
        "TRUE. T1–T11; T12 is subcostal. The posterior rami supply the back."
      ]
    },
    {
      cat: "Thorax",
      stem: "The mediastinum and great vessels:",
      opts: [
        "The superior mediastinum lies above a plane from the sternal angle to T4/T5",
        "The arch of the aorta gives off the brachiocephalic trunk, left common carotid and left subclavian",
        "The thoracic duct drains into the junction of the left subclavian and internal jugular veins",
        "The azygos vein drains into the superior vena cava",
        "The phrenic nerve passes posterior to the hilum of the lung"
      ],
      ans: [
        "TRUE. The plane of Louis.",
        "TRUE. In that order from right to left.",
        "TRUE. Which is why left-sided neck surgery and left subclavian cannulation risk chylothorax.",
        "TRUE. Arching over the right main bronchus.",
        "FALSE. The PHRENIC nerve passes ANTERIOR to the hilum; the VAGUS passes posterior. 'Phrenic in front' is the standard mnemonic."
      ]
    },
    {
      cat: "Vascular access",
      stem: "The internal jugular vein:",
      opts: [
        "It lies lateral to the carotid artery within the carotid sheath",
        "It begins at the jugular foramen as a continuation of the sigmoid sinus",
        "The right side is preferred because of a straighter course to the right atrium",
        "It joins the subclavian vein to form the brachiocephalic vein",
        "The apex of the triangle formed by the two heads of sternocleidomastoid is a landmark for cannulation"
      ],
      ans: [
        "TRUE. And usually slightly anterior — though the relationship varies considerably, which is why ultrasound is standard.",
        "TRUE. Draining the cranial cavity.",
        "TRUE. And it avoids the thoracic duct; the pleural dome is also lower on the right.",
        "TRUE. Behind the sternoclavicular joint.",
        "TRUE. The needle is directed towards the ipsilateral nipple at about 30–40 degrees — but landmark technique alone is no longer recommended."
      ]
    },
    {
      cat: "Vascular access",
      stem: "The subclavian vein and central access complications:",
      opts: [
        "The subclavian vein passes anterior to scalenus anterior",
        "The subclavian artery passes posterior to scalenus anterior",
        "Pneumothorax is more common with the subclavian than the internal jugular route",
        "The tip of a central venous catheter should lie in the right atrium",
        "Air embolism risk is reduced by head-down positioning during insertion"
      ],
      ans: [
        "TRUE. With the phrenic nerve on the anterior surface of that muscle.",
        "TRUE. Along with the brachial plexus — hence the muscle separates vein from artery.",
        "TRUE. Though subclavian lines have lower infection rates.",
        "FALSE. The tip should lie at the cavoatrial junction or in the lower superior vena cava. Intra-atrial placement risks perforation, tamponade and arrhythmia.",
        "TRUE. Raising venous pressure above atmospheric at the insertion site."
      ]
    },
    {
      cat: "Vascular access",
      stem: "Arterial cannulation:",
      opts: [
        "The radial artery is the terminal branch of the brachial artery",
        "Allen's test reliably predicts ischaemic complications",
        "The femoral artery lies midway between the anterior superior iliac spine and the pubic symphysis",
        "The dorsalis pedis artery gives a higher systolic reading than the aorta",
        "The femoral nerve lies lateral to the femoral artery"
      ],
      ans: [
        "FALSE. The brachial artery divides into RADIAL and ULNAR arteries — the radial is one of two terminal branches, not the terminal branch.",
        "FALSE. Its sensitivity and specificity are poor; it is no longer regarded as a reliable screening test.",
        "TRUE. The mid-inguinal point. The femoral pulse is felt below the inguinal ligament.",
        "TRUE. Distal pulse amplification — systolic rises and diastolic falls peripherally, though mean pressure falls slightly.",
        "TRUE. NAVY from medial to lateral: nerve is lateral, then artery, vein, Y-fronts. So it is 'NAVEL' read from lateral to medial in the older mnemonic."
      ]
    },
    {
      cat: "Spine",
      stem: "The vertebral column and spinal cord:",
      opts: [
        "There are 7 cervical, 12 thoracic and 5 lumbar vertebrae",
        "The spinal cord ends at L1–L2 in the adult",
        "The spinal cord ends at about L3 in the neonate",
        "The dural sac ends at S2 in the adult",
        "Tuffier's line joins the iliac crests at the level of L2–L3"
      ],
      ans: [
        "TRUE. Plus 5 fused sacral and 4 coccygeal.",
        "TRUE. As the conus medullaris, below which lies the cauda equina.",
        "TRUE. Which is why caudal and low lumbar approaches are used in infants and why higher punctures are dangerous.",
        "TRUE. And at S3 in children.",
        "FALSE. Tuffier's (the intercristal) line is at about L4 or the L4–L5 interspace — and anaesthetists systematically identify it one to two spaces too HIGH, which is a well-documented safety issue."
      ]
    },
    {
      cat: "Spine",
      stem: "Layers traversed by a midline spinal needle:",
      opts: [
        "Skin, subcutaneous fat, supraspinous ligament, interspinous ligament, ligamentum flavum, epidural space, dura, arachnoid",
        "The ligamentum flavum is the toughest structure encountered",
        "A paramedian approach avoids the supraspinous and interspinous ligaments",
        "The subdural space is a potential space between dura and arachnoid",
        "Cerebrospinal fluid lies in the subdural space"
      ],
      ans: [
        "TRUE. That is the correct sequence.",
        "TRUE. Giving the characteristic increased resistance immediately before loss of resistance in the epidural space.",
        "TRUE. Useful in calcified ligaments and in patients unable to flex.",
        "TRUE. Accidental subdural injection gives a patchy, unexpectedly extensive and slow-onset block.",
        "FALSE. CSF is in the SUBARACHNOID space, beneath the arachnoid mater."
      ]
    },
    {
      cat: "Neuraxial",
      stem: "The epidural space:",
      opts: [
        "It contains fat, lymphatics, veins and segmental arteries",
        "It extends from the foramen magnum to the sacrococcygeal membrane",
        "It is widest in the lumbar region, at about 5–6 mm",
        "Batson's venous plexus is valveless and engorged in pregnancy",
        "Negative pressure in the space is entirely artefactual"
      ],
      ans: [
        "TRUE. With the dura forming its inner boundary and the ligamentum flavum its posterior boundary.",
        "TRUE. It is closed superiorly where the dura fuses to the foramen magnum, which is why an epidural cannot ascend intracranially.",
        "TRUE. Compared with about 2–3 mm in the mid-thoracic region.",
        "TRUE. Which is why the space is smaller in pregnancy, the dose requirement lower and the risk of vascular puncture higher.",
        "FALSE. There is a genuine negative pressure in the thoracic region transmitted from the thorax, augmented by tenting of the dura by the needle."
      ]
    },
    {
      cat: "Neuraxial",
      stem: "Spinal anaesthesia:",
      opts: [
        "Hyperbaric bupivacaine 0.5% contains 8% dextrose",
        "Sympathetic block extends about two segments higher than sensory block",
        "Motor block extends about two segments below sensory block",
        "The main determinant of spread of a hyperbaric solution is patient position",
        "Pencil-point needles reduce the incidence of post-dural puncture headache"
      ],
      ans: [
        "TRUE. Making it denser than CSF so it sinks with gravity.",
        "TRUE. Which is why hypotension can occur with an apparently modest sensory level.",
        "TRUE. Giving the classic differential block.",
        "TRUE. Along with baricity and dose. Volume, speed of injection and barbotage matter far less than is often assumed.",
        "TRUE. Whitacre and Sprotte needles split rather than cut dural fibres."
      ]
    },
    {
      cat: "Neuraxial",
      stem: "Complications of neuraxial blockade:",
      opts: [
        "Post-dural puncture headache is typically postural and frontal or occipital",
        "PDPH is more common in the elderly",
        "An epidural blood patch has a success rate of about 70–90%",
        "A total spinal presents with rapid bradycardia, hypotension, apnoea and loss of consciousness",
        "Vertebral canal haematoma classically presents with back pain and progressive neurological deficit"
      ],
      ans: [
        "TRUE. Worse on sitting, relieved by lying flat, often with neck stiffness, photophobia and tinnitus.",
        "FALSE. It is commoner in the YOUNG, in women, in pregnancy and with large cutting needles.",
        "TRUE. With 15–20 ml of autologous blood; a second patch is sometimes needed.",
        "TRUE. Treat with airway control, ventilation, fluid and vasopressors until it regresses.",
        "TRUE. A surgical emergency — MRI and decompression within about 8 hours give the best chance of recovery."
      ]
    },
    {
      cat: "Upper limb",
      stem: "The brachial plexus:",
      opts: [
        "It is formed from the anterior rami of C5 to T1",
        "The roots pass between scalenus anterior and scalenus medius",
        "The divisions lie behind the clavicle",
        "The cords are named for their relationship to the axillary artery",
        "The musculocutaneous nerve arises from the medial cord"
      ],
      ans: [
        "TRUE. Roots, trunks, divisions, cords, branches — 'Real Texans Drink Cold Beer'.",
        "TRUE. The interscalene groove — the target of the interscalene block.",
        "TRUE. Which is why there is no 'division' block.",
        "TRUE. Lateral, posterior and medial.",
        "FALSE. It arises from the LATERAL cord — which is why it is frequently spared in an axillary block and must be blocked separately in coracobrachialis."
      ]
    },
    {
      cat: "Upper limb",
      stem: "The interscalene block:",
      opts: [
        "It reliably blocks the ulnar nerve",
        "Phrenic nerve palsy occurs in a high proportion of cases",
        "Horner's syndrome may result from stellate ganglion spread",
        "It is suitable for shoulder surgery",
        "Inadvertent vertebral artery injection can cause immediate seizures"
      ],
      ans: [
        "FALSE. C8 and T1 are frequently spared — the classic 'ulnar sparing' of the interscalene approach.",
        "TRUE. Approaching 100% with traditional volumes; hence it is relatively contraindicated in severe respiratory disease and absolutely so bilaterally.",
        "TRUE. Ptosis, miosis and anhidrosis — benign and self-limiting.",
        "TRUE. Covering C5–C6 well, which supplies the shoulder.",
        "TRUE. Even a tiny volume, because it goes directly to the brain — aspirate and inject incrementally."
      ]
    },
    {
      cat: "Upper limb",
      stem: "Nerve supply of the hand:",
      opts: [
        "The median nerve supplies sensation to the palmar aspect of the lateral three and a half digits",
        "The ulnar nerve supplies all the interossei",
        "The radial nerve supplies sensation to the dorsum of the first web space",
        "The median nerve supplies the thenar muscles and the lateral two lumbricals",
        "Ulnar nerve injury at the elbow causes a more marked claw hand than injury at the wrist"
      ],
      ans: [
        "TRUE. And the nail beds of those digits dorsally.",
        "TRUE. And the medial two lumbricals, adductor pollicis and hypothenar muscles.",
        "TRUE. The anatomical snuffbox area — the classic test after a radial nerve injury.",
        "TRUE. LOAF muscles: lateral two lumbricals, opponens pollicis, abductor pollicis brevis, flexor pollicis brevis.",
        "FALSE. This is the ulnar PARADOX — a HIGHER lesion also paralyses flexor digitorum profundus to the ring and little fingers, so the clawing is LESS marked."
      ]
    },
    {
      cat: "Lower limb",
      stem: "The lumbar plexus:",
      opts: [
        "It is formed from the anterior rami of L1 to L4 with a contribution from T12",
        "It lies within the psoas major muscle",
        "The femoral nerve is derived from the posterior divisions of L2, L3 and L4",
        "The obturator nerve arises from the anterior divisions of L2, L3 and L4",
        "The lateral femoral cutaneous nerve arises from L4 and L5"
      ],
      ans: [
        "TRUE.",
        "TRUE. Hence the psoas compartment block.",
        "TRUE. Supplying quadriceps and sensation to the anterior thigh and, via the saphenous nerve, the medial leg.",
        "TRUE. Supplying the adductors and a variable patch of medial thigh.",
        "FALSE. It arises from L2 and L3. L4 and L5 join to form the lumbosacral trunk, contributing to the sacral plexus."
      ]
    },
    {
      cat: "Lower limb",
      stem: "The sciatic nerve and its blocks:",
      opts: [
        "The sciatic nerve arises from L4 to S3",
        "It leaves the pelvis through the greater sciatic foramen below piriformis",
        "It divides into the tibial and common peroneal nerves usually in the lower thigh",
        "A popliteal sciatic block anaesthetises the whole foot",
        "The saphenous nerve must be blocked separately for medial ankle surgery"
      ],
      ans: [
        "TRUE. The largest nerve in the body.",
        "TRUE. Which is why the classic Labat landmark uses the greater trochanter and posterior superior iliac spine.",
        "TRUE. Though the division may be much higher — ultrasound at the bifurcation gives the most reliable block.",
        "FALSE. It misses the medial territory supplied by the SAPHENOUS nerve, a branch of the femoral.",
        "TRUE. It is the only part of the foot not supplied by the sciatic nerve."
      ]
    },
    {
      cat: "Lower limb",
      stem: "The fascia iliaca and femoral nerve blocks:",
      opts: [
        "A fascia iliaca block aims to deposit local anaesthetic beneath the fascia iliaca",
        "It reliably blocks the obturator nerve",
        "It is useful for analgesia in a fractured neck of femur",
        "The femoral nerve lies beneath the fascia iliaca and lateral to the artery",
        "Adductor canal block preserves quadriceps power better than a femoral nerve block"
      ],
      ans: [
        "TRUE. Two 'pops' with a landmark technique — fascia lata then fascia iliaca.",
        "FALSE. Obturator spread is unreliable. The block covers the femoral and lateral femoral cutaneous nerves well.",
        "TRUE. Reducing opioid requirement and delirium — a strong recommendation in hip fracture pathways.",
        "TRUE. Which is why the needle is directed lateral to the pulse.",
        "TRUE. It is predominantly sensory (saphenous and nerve to vastus medialis), aiding early mobilisation after knee surgery."
      ]
    }
    ,
    {
      cat: "Trunk blocks",
      stem: "The transversus abdominis plane (TAP) block:",
      opts: [
        "Local anaesthetic is deposited between internal oblique and transversus abdominis",
        "It provides reliable visceral analgesia",
        "The subcostal approach covers a higher dermatomal range than the lateral approach",
        "Large volumes risk local anaesthetic systemic toxicity",
        "It blocks the anterior rami of the lower thoracic and first lumbar nerves"
      ],
      ans: [
        "TRUE. The plane containing the segmental nerves; ultrasound identification is far more reliable than the landmark 'double pop'.",
        "FALSE. It is a SOMATIC block of the abdominal wall only. Visceral pain requires other techniques.",
        "TRUE. Reaching about T6–T9, whereas the lateral approach mainly covers T10–L1.",
        "TRUE. It is a highly vascular plane with rapid absorption — calculate the dose carefully, especially bilaterally.",
        "TRUE. T7 to L1, including the iliohypogastric and ilioinguinal nerves."
      ]
    },
    {
      cat: "Trunk blocks",
      stem: "Paravertebral and erector spinae plane blocks:",
      opts: [
        "The paravertebral space is bounded anteriorly by the parietal pleura",
        "A single paravertebral injection can spread over several dermatomes",
        "Paravertebral block produces less hypotension than a thoracic epidural",
        "The erector spinae plane block is performed on the transverse process",
        "Pneumothorax is a recognised complication of paravertebral block"
      ],
      ans: [
        "TRUE. With the superior costotransverse ligament posteriorly and vertebral body medially — hence its proximity to pleura.",
        "TRUE. Typically covering three to five levels, though spread is variable.",
        "TRUE. Because the sympathetic block is unilateral — an advantage in rib fractures and thoracic surgery.",
        "TRUE. Injecting deep to erector spinae onto the transverse process, with spread towards the paravertebral space.",
        "TRUE. Along with vascular puncture, epidural or intrathecal spread, and Horner's syndrome."
      ]
    },
    {
      cat: "Head & neck",
      stem: "The trigeminal nerve:",
      opts: [
        "It has three divisions: ophthalmic, maxillary and mandibular",
        "Only the mandibular division carries motor fibres",
        "The maxillary division exits the skull through the foramen rotundum",
        "The mandibular division exits through the foramen ovale",
        "The corneal reflex has a trigeminal afferent and a facial efferent"
      ],
      ans: [
        "TRUE. V1 through the superior orbital fissure, V2 rotundum, V3 ovale.",
        "TRUE. Supplying the muscles of mastication, mylohyoid, anterior belly of digastric, tensor tympani and tensor veli palatini.",
        "TRUE.",
        "TRUE. 'Standing Room Only' for the three foramina in order.",
        "TRUE. V1 in, VII out — a useful brainstem test."
      ]
    },
    {
      cat: "Head & neck",
      stem: "The cervical plexus:",
      opts: [
        "It is formed from the anterior rami of C1 to C4",
        "The superficial cervical plexus emerges at the posterior border of sternocleidomastoid",
        "The phrenic nerve arises from C3, C4 and C5",
        "A deep cervical plexus block can cause phrenic nerve palsy",
        "Carotid endarterectomy can be performed under combined superficial and deep cervical plexus block"
      ],
      ans: [
        "TRUE.",
        "TRUE. At its midpoint (Erb's point) — a simple and safe block for superficial neck surgery.",
        "TRUE. 'C3, 4, 5 keeps the diaphragm alive.'",
        "TRUE. Along with recurrent laryngeal palsy, Horner's syndrome, and vertebral artery or intrathecal injection.",
        "TRUE. Allowing awake neurological monitoring — the main argument in its favour."
      ]
    },
    {
      cat: "Head & neck",
      stem: "The eye and orbital blocks:",
      opts: [
        "The oculomotor nerve supplies all extraocular muscles except lateral rectus and superior oblique",
        "The trochlear nerve supplies superior oblique",
        "Retrobulbar block carries a higher risk of globe perforation than peribulbar",
        "Axial length greater than 26 mm increases the risk of globe perforation",
        "Sub-Tenon's block requires a sharp needle"
      ],
      ans: [
        "TRUE. LR6 SO4 — lateral rectus by VI, superior oblique by IV, the rest by III.",
        "TRUE. The only cranial nerve to emerge from the dorsal aspect of the brainstem.",
        "TRUE. Along with optic nerve damage, retrobulbar haemorrhage and brainstem anaesthesia.",
        "TRUE. The staphylomatous myopic eye — sub-Tenon's or topical technique is safer.",
        "FALSE. It uses a BLUNT cannula through a small conjunctival incision, which is why it is the safest of the orbital blocks."
      ]
    },
    {
      cat: "Abdomen",
      stem: "The abdominal wall and inguinal region:",
      opts: [
        "The inguinal canal runs from the deep to the superficial inguinal ring",
        "The ilioinguinal nerve arises from L1",
        "The rectus sheath is deficient posteriorly below the arcuate line",
        "The inferior epigastric artery is a branch of the external iliac artery",
        "Rectus sheath block is useful for midline laparotomy analgesia"
      ],
      ans: [
        "TRUE. About 4 cm long, above the inguinal ligament.",
        "TRUE. With the iliohypogastric nerve; both are blocked medial and inferior to the anterior superior iliac spine.",
        "TRUE. Which is why the arcuate line matters for rectus sheath block and for surgical access.",
        "TRUE. Arising just above the inguinal ligament — a hazard in rectus sheath and port placement.",
        "TRUE. Blocking the terminal branches of T7–T11 between rectus muscle and posterior sheath, bilaterally."
      ]
    },
    {
      cat: "Abdomen",
      stem: "The diaphragm:",
      opts: [
        "The inferior vena cava passes through at T8",
        "The oesophagus passes through at T10 with the vagi",
        "The aorta passes behind the diaphragm at T12 with the thoracic duct and azygos vein",
        "The motor supply is the phrenic nerve",
        "Sensation of the peripheral diaphragm is supplied by the lower intercostal nerves"
      ],
      ans: [
        "TRUE. In the central tendon, with the right phrenic nerve. 'I ate ten eggs at twelve.'",
        "TRUE. Through the muscular right crus, which acts as a sphincter.",
        "TRUE. Behind the median arcuate ligament — so it is not truly a 'hole' in the diaphragm.",
        "TRUE. Bilaterally; a unilateral palsy is often well tolerated, bilateral is not.",
        "TRUE. Central diaphragmatic irritation refers to the shoulder tip via C3–C5, peripheral irritation to the chest wall."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The kidney and its relations:",
      opts: [
        "The kidneys lie retroperitoneally between T12 and L3",
        "The right kidney lies slightly lower than the left",
        "The renal vein lies anterior to the renal artery at the hilum",
        "The left renal vein passes anterior to the aorta",
        "The ureter crosses the bifurcation of the common iliac artery"
      ],
      ans: [
        "TRUE. Moving with respiration.",
        "TRUE. Displaced by the liver.",
        "TRUE. Vein, artery, pelvis from anterior to posterior.",
        "TRUE. Beneath the superior mesenteric artery — the site of nutcracker syndrome; it also receives the left gonadal and adrenal veins.",
        "TRUE. One of the three sites of narrowing where stones lodge, with the pelviureteric junction and the vesicoureteric junction."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The autonomic supply of the pelvis and perineum:",
      opts: [
        "The pudendal nerve arises from S2, S3 and S4",
        "The pudendal nerve passes around the ischial spine",
        "Pain from the uterine body in the first stage of labour is referred to T10–L1",
        "Second stage labour pain involves S2–S4",
        "Parasympathetic supply to the bladder is from the sacral outflow"
      ],
      ans: [
        "TRUE. 'S2, 3, 4 keeps the pelvis off the floor.'",
        "TRUE. The landmark for a transvaginal pudendal block.",
        "TRUE. Which is why a block to T10 is adequate for the first stage.",
        "TRUE. Somatic pain from vaginal and perineal distension via the pudendal nerve.",
        "TRUE. S2–S4, causing detrusor contraction; sympathetic T11–L2 promotes storage."
      ]
    },
    {
      cat: "Regional practice",
      stem: "Anticoagulation and neuraxial blockade:",
      opts: [
        "Prophylactic low molecular weight heparin requires a 12-hour interval before neuraxial puncture",
        "Therapeutic dose LMWH requires a 24-hour interval",
        "An epidural catheter may be removed at any time after a dose of LMWH",
        "Clopidogrel should be stopped 7 days before neuraxial blockade",
        "Aspirin alone is not a contraindication to neuraxial blockade"
      ],
      ans: [
        "TRUE. And 4 hours before the next dose after the block or catheter removal.",
        "TRUE. Reflecting the higher dose and residual anti-Xa activity.",
        "FALSE. Removal must also observe the interval — the catheter is removed at the same risk window as insertion, and neurological observations continue afterwards.",
        "TRUE. Ticagrelor 5 days, prasugrel 7 days.",
        "TRUE. Nor are NSAIDs, though combined antiplatelet therapy is."
      ]
    },
    {
      cat: "Regional practice",
      stem: "Intravenous regional anaesthesia (Bier's block):",
      opts: [
        "Prilocaine is the agent of choice",
        "Bupivacaine is contraindicated",
        "A double cuff is used with the distal cuff inflated first",
        "The cuff should remain inflated for at least 20 minutes",
        "The cuff pressure should be about 100 mmHg above systolic pressure"
      ],
      ans: [
        "TRUE. Because of its low systemic toxicity and rapid metabolism; 0.5% without adrenaline.",
        "TRUE. Cardiotoxicity from accidental cuff deflation has caused deaths — it must never be used.",
        "FALSE. The PROXIMAL cuff is inflated first for the injection; the distal cuff is inflated later over anaesthetised skin, then the proximal one released.",
        "TRUE. To allow tissue fixation of the drug and limit the bolus on release.",
        "TRUE. And it must be checked and maintained; two trained people and full resuscitation facilities are required."
      ]
    },
    {
      cat: "Regional practice",
      stem: "Nerve injury after regional anaesthesia:",
      opts: [
        "Most perioperative nerve injuries are attributable to the block itself",
        "Intraneural injection is more damaging when intrafascicular",
        "Neurapraxia is a conduction block with an intact axon and usually full recovery",
        "Axonotmesis involves axonal disruption with an intact endoneurium",
        "Persistent deficit beyond 6 weeks warrants neurophysiological assessment"
      ],
      ans: [
        "FALSE. Most are positional, surgical or related to tourniquets and pre-existing neuropathy — a key point when a deficit appears after a block.",
        "TRUE. Extrafascicular (interfascicular) injection is often tolerated; intrafascicular injection under pressure is what damages nerve.",
        "TRUE. Seddon class I — recovery within days to weeks.",
        "TRUE. Allowing regeneration along the original path at about 1 mm per day. Neurotmesis is complete transection.",
        "TRUE. Nerve conduction studies and EMG, along with early specialist referral and documentation."
      ]
    },
    {
      cat: "Airway",
      stem: "Cricothyroid membrane and front-of-neck access:",
      opts: [
        "The cricothyroid membrane lies between the thyroid and cricoid cartilages",
        "It measures roughly 10 mm high and 20–30 mm wide in an adult",
        "Ultrasound improves identification, particularly in obese patients",
        "The cricothyroid arteries cross the upper part of the membrane",
        "Surgical cricothyroidotomy is the preferred technique for a child under 8"
      ],
      ans: [
        "TRUE. Identified by the laryngeal handshake.",
        "TRUE. So a transverse incision is feasible; a vertical skin incision is used when landmarks are impalpable.",
        "TRUE. Palpation fails in a substantial proportion of obese and short-necked patients.",
        "TRUE. Which is why the lower half is preferred.",
        "FALSE. In small children the membrane is tiny and the cricoid is the narrowest point — NEEDLE cricothyroidotomy with jet ventilation, or urgent tracheostomy, is preferred to a surgical approach."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The heart and coronary circulation:",
      opts: [
        "The left anterior descending artery arises from the left coronary artery",
        "The right coronary artery supplies the sinoatrial node in about 60% of people",
        "The posterior descending artery arises from the right coronary artery in a right-dominant circulation",
        "The coronary sinus drains into the right atrium",
        "The left circumflex artery supplies the anterior interventricular septum"
      ],
      ans: [
        "TRUE. With the circumflex; the LAD supplies the anterior wall and most of the septum.",
        "TRUE. And the AV node in about 80–90% — hence the conduction problems of inferior infarction.",
        "TRUE. Which is the case in about 85% of people.",
        "TRUE. Near the tricuspid valve, guarded by the Thebesian valve.",
        "FALSE. The anterior septum is LAD territory. The circumflex supplies the lateral wall via obtuse marginal branches."
      ]
    },
    {
      cat: "Anatomy",
      stem: "Surface anatomy landmarks:",
      opts: [
        "The sternal angle marks the level of the second costal cartilage",
        "The cricoid cartilage lies at the level of C6",
        "The transpyloric plane lies at L1",
        "The apex beat is normally in the fifth intercostal space in the midclavicular line",
        "The bifurcation of the abdominal aorta lies at L2"
      ],
      ans: [
        "TRUE. And of the T4/T5 disc, the carina and the arch of the aorta.",
        "TRUE. As does the beginning of the trachea and the oesophagus.",
        "TRUE. Halfway between the suprasternal notch and the pubic symphysis — pylorus, pancreatic neck, duodenojejunal flexure and hila.",
        "TRUE. Displaced laterally by cardiomegaly.",
        "FALSE. It bifurcates at L4, at the level of the iliac crests. The renal arteries arise at about L2."
      ]
    },
    {
      cat: "Anatomy",
      stem: "Nerve supply of the shoulder and elbow:",
      opts: [
        "The axillary nerve supplies deltoid and the regimental badge area",
        "The suprascapular nerve supplies a substantial part of the shoulder joint capsule",
        "The radial nerve winds around the spiral groove of the humerus",
        "The ulnar nerve passes anterior to the medial epicondyle",
        "The median nerve lies medial to the brachial artery at the elbow"
      ],
      ans: [
        "TRUE. Injured in shoulder dislocation and surgical neck fracture of the humerus.",
        "TRUE. About 70% — the basis of the suprascapular block for shoulder analgesia when phrenic sparing is needed.",
        "TRUE. Injured in mid-shaft humeral fracture, causing wrist drop.",
        "FALSE. It passes POSTERIOR to the medial epicondyle in the cubital tunnel — which is exactly why it is so vulnerable to compression there.",
        "TRUE. And medial to the biceps tendon — the landmark for median nerve block at the elbow."
      ]
    },
    {
      cat: "Neuraxial",
      stem: "Caudal anaesthesia:",
      opts: [
        "The sacral hiatus is formed by failure of fusion of the S5 laminae",
        "The sacrococcygeal membrane is pierced to enter the epidural space",
        "0.5 ml/kg of 0.25% bupivacaine gives a block to about the lumbosacral level",
        "The dural sac in an infant may extend as low as S3",
        "Caudal blockade is more difficult in adults than in children"
      ],
      ans: [
        "TRUE. Bounded by the sacral cornua, which are the key landmarks.",
        "TRUE. The needle is then flattened and advanced a short distance only.",
        "TRUE. Armitage's regimen: 0.5 ml/kg lumbosacral, 1 ml/kg to mid-thoracic, 1.25 ml/kg to mid-thoracic and above.",
        "TRUE. Which is why dural puncture is a real risk and the needle must not be advanced far.",
        "TRUE. Ossification and variable anatomy make the hiatus hard to identify; success rates are much lower."
      ]
    },
    {
      cat: "Regional practice",
      stem: "Ultrasound-guided regional anaesthesia:",
      opts: [
        "In-plane technique visualises the whole needle shaft",
        "Anisotropy describes the change in echogenicity with the angle of insonation",
        "Nerves appear hypoechoic in the interscalene region and more hyperechoic distally",
        "Hydrodissection with saline confirms the needle tip before injecting local anaesthetic",
        "Ultrasound guidance reduces the volume of local anaesthetic required"
      ],
      ans: [
        "TRUE. Preferred where safety depends on knowing exactly where the tip is.",
        "TRUE. Nerves and tendons are strongly anisotropic — tilting the probe makes them appear and disappear.",
        "TRUE. Because the proportion of connective tissue to neural tissue increases distally.",
        "TRUE. A key safety step, especially when using dextrose to preserve nerve stimulation.",
        "TRUE. Often substantially, which reduces the risk of systemic toxicity."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The circle of Willis:",
      opts: [
        "It is formed by the two internal carotid arteries and the basilar artery",
        "The anterior communicating artery joins the two anterior cerebral arteries",
        "The posterior communicating artery joins the internal carotid to the posterior cerebral artery",
        "It is complete and symmetrical in the majority of people",
        "The middle cerebral artery is the commonest site of embolic stroke"
      ],
      ans: [
        "TRUE. The basilar being formed from the two vertebral arteries.",
        "TRUE. Completing the anterior part of the circle.",
        "TRUE. A common site of berry aneurysm, causing a third nerve palsy.",
        "FALSE. A complete, well-formed circle is present in only about half or fewer — variation is the rule, which matters in carotid surgery and in watershed infarction.",
        "TRUE. Because it is the direct continuation of the internal carotid."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The spinal cord tracts:",
      opts: [
        "The corticospinal tract decussates in the medulla",
        "The dorsal columns carry vibration, proprioception and fine touch and decussate in the medulla",
        "The spinothalamic tract carries pain and temperature",
        "Anterior spinal artery syndrome spares dorsal column function",
        "Brown–Séquard syndrome causes ipsilateral loss of pain and temperature"
      ],
      ans: [
        "TRUE. At the pyramids, so a cortical lesion causes contralateral weakness.",
        "TRUE. At the nucleus gracilis and cuneatus, ascending as the medial lemniscus.",
        "TRUE. Decussating within a segment or two of entry, which is why it is lost contralaterally and almost immediately below the lesion.",
        "TRUE. Motor function and pain and temperature are lost, but proprioception and vibration are preserved — the classic pattern after aortic surgery.",
        "FALSE. Hemisection causes IPSILATERAL motor and dorsal column loss with CONTRALATERAL pain and temperature loss."
      ]
    }
    ,
    {
      cat: "Upper limb",
      stem: "Branches of the brachial plexus:",
      opts: [
        "The long thoracic nerve arises from the roots C5, C6 and C7",
        "The dorsal scapular nerve arises from C5",
        "The suprascapular nerve arises from the upper trunk",
        "The lateral pectoral nerve arises from the posterior cord",
        "The axillary and radial nerves arise from the posterior cord"
      ],
      ans: [
        "TRUE. Supplying serratus anterior; injury causes winging of the scapula.",
        "TRUE. Supplying rhomboids and levator scapulae — the other root-level branch.",
        "TRUE. The only named branch of a trunk, along with the nerve to subclavius.",
        "FALSE. It arises from the LATERAL cord. The posterior cord gives the upper and lower subscapular, thoracodorsal, axillary and radial nerves.",
        "TRUE. The two terminal branches of the posterior cord."
      ]
    },
    {
      cat: "Upper limb",
      stem: "The supraclavicular and infraclavicular blocks:",
      opts: [
        "The supraclavicular block is performed at the level of the divisions",
        "It is sometimes called the 'spinal of the arm' because of its density",
        "Pneumothorax risk is higher than with the axillary approach",
        "The infraclavicular block targets the cords around the axillary artery",
        "Phrenic palsy never occurs with a supraclavicular block"
      ],
      ans: [
        "TRUE. Where the plexus is most compact, lateral to the subclavian artery over the first rib.",
        "TRUE. Rapid, dense and reliable for the whole arm below the shoulder.",
        "TRUE. Which is why ultrasound with a clear view of the first rib and pleura is essential.",
        "TRUE. Deep to pectoralis minor, with the lateral, posterior and medial cords around the artery — good for a catheter as it is stable.",
        "FALSE. It occurs in a substantial minority, typically quoted around 30–50% — less than the interscalene block, but not zero."
      ]
    },
    {
      cat: "Upper limb",
      stem: "The axillary block:",
      opts: [
        "The musculocutaneous nerve has usually left the sheath at this level",
        "The radial nerve lies posterior to the axillary artery",
        "It is suitable for surgery on the shoulder",
        "The intercostobrachial nerve must be blocked separately for tourniquet pain",
        "The median nerve typically lies superficial and lateral to the artery"
      ],
      ans: [
        "TRUE. Lying in the body of coracobrachialis — it must be blocked separately.",
        "TRUE. Median superficial/lateral, ulnar medial, radial posterior — the classic clock face.",
        "FALSE. It covers the forearm and hand. Shoulder surgery needs an interscalene approach, since C5–C6 are not reached.",
        "TRUE. It arises from T2 and is not part of the brachial plexus — a subcutaneous injection across the medial upper arm.",
        "TRUE. Around the 12 to 9 o'clock position depending on the reference used."
      ]
    },
    {
      cat: "Upper limb",
      stem: "Brachial plexus injuries:",
      opts: [
        "Erb's palsy involves C5 and C6 and produces the 'waiter's tip' posture",
        "Klumpke's palsy involves C8 and T1 and may be associated with Horner's syndrome",
        "Excessive arm abduction under anaesthesia can stretch the plexus",
        "Sternal retraction in cardiac surgery can injure the lower plexus",
        "A postoperative plexus injury is always the result of a regional block"
      ],
      ans: [
        "TRUE. Adducted, internally rotated, pronated — from shoulder dystocia or downward traction.",
        "TRUE. Because T1 carries the sympathetic supply to the head; it causes a claw hand.",
        "TRUE. Keep abduction below 90 degrees and avoid extension and external rotation.",
        "TRUE. Along with first rib fracture — a well-recognised cause of postoperative ulnar-territory symptoms.",
        "FALSE. Positioning, retraction and surgical causes are far commoner. Document the block, the pre-existing state and the timing of onset carefully."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The cranial nerves and the skull base:",
      opts: [
        "The optic nerve passes through the optic canal",
        "The oculomotor, trochlear, abducens and V1 pass through the superior orbital fissure",
        "The facial and vestibulocochlear nerves pass through the internal acoustic meatus",
        "The glossopharyngeal, vagus and accessory nerves pass through the jugular foramen",
        "The hypoglossal nerve passes through the foramen magnum"
      ],
      ans: [
        "TRUE. With the ophthalmic artery.",
        "TRUE. A useful grouping for lesions at the cavernous sinus and orbital apex.",
        "TRUE. With the labyrinthine artery.",
        "TRUE. Along with the internal jugular vein — hence the jugular foramen syndrome.",
        "FALSE. It passes through its own HYPOGLOSSAL CANAL. The foramen magnum transmits the medulla, vertebral arteries and spinal accessory rootlets."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The lungs and pleura:",
      opts: [
        "The right lung has three lobes and two fissures",
        "The oblique fissure follows the line of the sixth rib anteriorly",
        "The pleural reflection descends to the level of the 12th rib posteriorly",
        "The lung apex extends about 2.5 cm above the medial third of the clavicle",
        "The visceral pleura has somatic sensory innervation"
      ],
      ans: [
        "TRUE. Oblique and horizontal; the left has two lobes and one fissure, with the lingula.",
        "TRUE. Running from about T3 posteriorly.",
        "TRUE. The 8-10-12 rule: pleura at rib 8 midclavicular, 10 midaxillary, 12 paravertebral — the lung edges being two ribs higher.",
        "TRUE. Which is why supraclavicular and low neck procedures risk pneumothorax.",
        "FALSE. Visceral pleura is insensitive to pain. The PARIETAL pleura is somatically innervated by intercostal and phrenic nerves — hence pleuritic pain and shoulder tip referral."
      ]
    },
    {
      cat: "Regional practice",
      stem: "Adductor canal and ankle blocks:",
      opts: [
        "The adductor canal contains the femoral artery, femoral vein and saphenous nerve",
        "The canal is bounded by sartorius, vastus medialis and adductor longus and magnus",
        "An ankle block requires blockade of five nerves",
        "The posterior tibial nerve is blocked behind the medial malleolus",
        "Adrenaline-containing solutions are recommended for ankle blocks"
      ],
      ans: [
        "TRUE. Along with the nerve to vastus medialis.",
        "TRUE. Roofed by the subsartorial fascia.",
        "TRUE. Posterior tibial, sural, superficial peroneal, deep peroneal and saphenous.",
        "TRUE. Posterior to the artery — the most important, supplying the sole.",
        "FALSE. Adrenaline should be AVOIDED in end-arterial territory such as digits and the foot in compromised circulation."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The stellate ganglion and sympathetic chain:",
      opts: [
        "The stellate ganglion is formed by fusion of the inferior cervical and first thoracic ganglia",
        "It lies at the level of C7 anterior to the transverse process",
        "Chassaignac's tubercle is the anterior tubercle of C6",
        "A successful stellate block produces Horner's syndrome",
        "The vertebral artery lies anterior to the transverse process of C6"
      ],
      ans: [
        "TRUE. Present in most people.",
        "TRUE. Close to the vertebral artery, the dome of the pleura and the recurrent laryngeal nerve.",
        "TRUE. The classic landmark for the block, one level above the ganglion to reduce pneumothorax risk.",
        "TRUE. Ptosis, miosis, anhidrosis, plus nasal congestion and conjunctival injection.",
        "FALSE. At C6 the vertebral artery lies POSTERIOR to the anterior tubercle, having entered the foramen transversarium at C6 — which is precisely why C6 is the safer level."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The liver, biliary tree and portal system:",
      opts: [
        "The portal vein is formed by the superior mesenteric and splenic veins",
        "The porta hepatis contains the portal vein, hepatic artery and bile duct",
        "The falciform ligament separates the anatomical right and left lobes",
        "Portosystemic anastomoses occur at the lower oesophagus and the umbilicus",
        "The cystic artery is usually a branch of the left hepatic artery"
      ],
      ans: [
        "TRUE. Behind the neck of the pancreas.",
        "TRUE. Within the free edge of the lesser omentum, which forms the anterior boundary of the epiploic foramen.",
        "TRUE. Though the functional division follows the plane of the middle hepatic artery and gallbladder fossa.",
        "TRUE. Along with the rectum and the retroperitoneum — hence varices, caput medusae and haemorrhoids.",
        "FALSE. It usually arises from the RIGHT hepatic artery, within Calot's triangle."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The pituitary and hypothalamus:",
      opts: [
        "The anterior pituitary is derived from Rathke's pouch",
        "The posterior pituitary is a downgrowth of neural tissue",
        "ADH and oxytocin are synthesised in the hypothalamus",
        "The hypophyseal portal system carries releasing hormones to the anterior pituitary",
        "A pituitary tumour classically causes a homonymous hemianopia"
      ],
      ans: [
        "TRUE. An ectodermal upgrowth from the roof of the primitive pharynx.",
        "TRUE. From the floor of the diencephalon, so it is a neural, not a glandular, structure.",
        "TRUE. In the supraoptic and paraventricular nuclei, then transported down axons for release.",
        "TRUE. Which is why stalk section causes anterior pituitary failure but a RISE in prolactin.",
        "FALSE. It causes a BITEMPORAL hemianopia by compressing the decussating fibres at the optic chiasm."
      ]
    },
    {
      cat: "Airway",
      stem: "Awake fibreoptic intubation:",
      opts: [
        "Effective topicalisation is more important than sedation",
        "Lidocaine doses used for topical airway anaesthesia commonly exceed 3 mg/kg",
        "A transtracheal injection anaesthetises the airway below the cords",
        "Antisialagogue premedication improves the view and the effectiveness of topical agents",
        "The nasal route requires vasoconstriction to reduce epistaxis"
      ],
      ans: [
        "TRUE. A well-topicalised airway can be managed with minimal sedation; sedation without topicalisation is unsafe.",
        "TRUE. Mucosal absorption is less complete than intravascular dosing implies, and doses up to about 9 mg/kg are commonly quoted for topical use — but toxicity is still possible, so calculate and record it.",
        "TRUE. Through the cricothyroid membrane, provoking a cough that distributes the drug.",
        "TRUE. Glycopyrrolate given in good time — secretions both obscure the view and dilute topical anaesthetic.",
        "TRUE. Phenylephrine or xylometazoline, with warmed lubricated tubes and gentle technique."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The thyroid gland and its surgical relations:",
      opts: [
        "The thyroid isthmus overlies the second to fourth tracheal rings",
        "The superior thyroid artery is closely related to the external laryngeal nerve",
        "The inferior thyroid artery is closely related to the recurrent laryngeal nerve",
        "The inferior thyroid artery is a branch of the thyrocervical trunk",
        "Retrosternal goitre poses no airway risk once the patient is anaesthetised"
      ],
      ans: [
        "TRUE. The site of an emergency tracheostomy incision consideration.",
        "TRUE. Injury causes loss of vocal pitch — ligate close to the gland.",
        "TRUE. Ligate away from the gland, or better, identify and preserve the nerve.",
        "TRUE. From the subclavian artery.",
        "FALSE. It can cause dynamic collapse and severe obstruction after induction and after extubation — assess with CT and flow–volume loops, and plan for a difficult airway."
      ]
    },
    {
      cat: "Regional practice",
      stem: "Continuous peripheral nerve catheters:",
      opts: [
        "They provide prolonged analgesia after major limb surgery",
        "Catheter migration and leakage are common practical problems",
        "Infection risk rises with duration of catheter placement",
        "Catheters should be inserted using strict aseptic technique",
        "Rebound pain on catheter removal does not occur"
      ],
      ans: [
        "TRUE. Reducing opioid requirement and improving rehabilitation.",
        "TRUE. Along with secondary block failure, which is why tunnelling and secure fixation help.",
        "TRUE. Beyond about 48–72 hours in particular; inspect the site daily.",
        "TRUE. Including a mask, gown, gloves and full skin preparation for the catheter techniques.",
        "FALSE. Rebound pain is well described when a dense block regresses — start multimodal oral analgesia before the block wears off."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The venous drainage of the head and neck:",
      opts: [
        "The superior sagittal sinus drains into the confluence of sinuses",
        "The cavernous sinus contains the internal carotid artery and the abducens nerve",
        "Cranial nerves III, IV, V1 and V2 lie in the lateral wall of the cavernous sinus",
        "The external jugular vein crosses sternocleidomastoid superficially",
        "Head-down tilt reduces cerebral venous drainage"
      ],
      ans: [
        "TRUE. Then via transverse and sigmoid sinuses to the internal jugular vein.",
        "TRUE. Both run through the sinus itself, which is why VI is often the first nerve affected.",
        "TRUE. Making cavernous sinus thrombosis a distinctive multi-nerve syndrome.",
        "TRUE. Running from the angle of the mandible to the middle of the clavicle.",
        "TRUE. Raising intracranial pressure — hence 15–30 degrees head-up and avoiding neck constriction in neuroanaesthesia."
      ]
    },
    {
      cat: "Regional practice",
      stem: "Contraindications to regional anaesthesia:",
      opts: [
        "Patient refusal is an absolute contraindication",
        "Infection at the injection site is an absolute contraindication",
        "Established coagulopathy is a contraindication to deep and neuraxial blocks",
        "Fixed cardiac output states are a caution for extensive neuraxial blockade",
        "Pre-existing neurological disease is an absolute contraindication"
      ],
      ans: [
        "TRUE. However clinically attractive the block.",
        "TRUE. Because of the risk of seeding infection into the epidural space or a deep plane.",
        "TRUE. Superficial compressible blocks may still be feasible after risk assessment.",
        "TRUE. Severe aortic stenosis and hypertrophic cardiomyopathy tolerate sudden loss of afterload badly — incremental techniques are preferred.",
        "FALSE. It is a relative contraindication requiring careful documentation of pre-existing deficit and a discussion of risk — not an absolute bar."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The pharynx:",
      opts: [
        "It extends from the base of the skull to the level of C6",
        "The nasopharynx contains the opening of the Eustachian tube",
        "The piriform fossae lie either side of the laryngeal inlet",
        "Killian's dehiscence is a weak point between the two parts of the inferior constrictor",
        "The superior constrictor is innervated by the glossopharyngeal nerve"
      ],
      ans: [
        "TRUE. Continuing as the oesophagus at the lower border of the cricoid cartilage.",
        "TRUE. And the adenoids, whose enlargement causes obstruction in children.",
        "TRUE. Where foreign bodies lodge and where internal laryngeal nerve block can be performed with pledgets.",
        "TRUE. Between thyropharyngeus and cricopharyngeus — the site of a pharyngeal pouch, and a perforation risk during oesophageal instrumentation.",
        "FALSE. The constrictors are supplied by the pharyngeal plexus, motor fibres coming from the VAGUS (via the cranial accessory). Only stylopharyngeus is supplied by the glossopharyngeal nerve."
      ]
    },
    {
      cat: "Anatomy",
      stem: "The vertebral artery:",
      opts: [
        "It arises from the first part of the subclavian artery",
        "It enters the foramen transversarium of C6",
        "It passes through the foramen magnum to join its fellow as the basilar artery",
        "It lies immediately posterior to the carotid tubercle at C6",
        "It supplies the anterior spinal artery"
      ],
      ans: [
        "TRUE. As its first branch.",
        "TRUE. Ascending through C6 to C1.",
        "TRUE. Supplying the brainstem, cerebellum and occipital lobes.",
        "TRUE. Which is why deep cervical and stellate ganglion blocks carry a risk of catastrophic intra-arterial injection.",
        "TRUE. Together with radicular arteries, of which the artery of Adamkiewicz is the largest."
      ]
    },
    {
      cat: "Anatomy",
      stem: "Bones, joints and positioning risks:",
      opts: [
        "The ulnar nerve is most at risk in the supine position with the arm pronated",
        "Supination or a neutral forearm position reduces ulnar nerve compression",
        "The common peroneal nerve is at risk at the neck of the fibula",
        "Excessive neck flexion in the sitting position can cause cord ischaemia",
        "Pressure areas need not be checked in operations under 2 hours"
      ],
      ans: [
        "TRUE. Pronation presses the cubital tunnel against the table.",
        "TRUE. A simple and effective preventive measure, along with padding.",
        "TRUE. From lithotomy poles and from lateral positioning.",
        "TRUE. Allow at least two finger-breadths between chin and sternum.",
        "FALSE. Pressure injury can occur within a couple of hours, especially in the obese, the elderly, the hypotensive and the hypothermic. Check and pad regardless of expected duration."
      ]
    },
    {
      cat: "Neuraxial",
      stem: "Physiological effects of a neuraxial block to T4:",
      opts: [
        "Cardiac accelerator fibres from T1 to T4 are blocked",
        "Bradycardia may result from the Bezold–Jarisch reflex",
        "Splanchnic vasodilatation reduces venous return",
        "The unopposed vagus increases gut motility",
        "Respiratory function is unaffected"
      ],
      ans: [
        "TRUE. Causing bradycardia and loss of the compensatory tachycardia to hypotension.",
        "TRUE. A sudden severe fall in ventricular filling triggering paradoxical bradycardia and even asystole.",
        "TRUE. T5–L1 sympathetic block pools blood in the splanchnic bed — the main mechanism of hypotension.",
        "TRUE. With a contracted gut and good operating conditions, and increased incidence of nausea.",
        "FALSE. Intercostal paralysis reduces expiratory reserve volume and the ability to cough; the diaphragm is preserved, so tidal volume is usually maintained, but a high block impairs respiratory reserve."
      ]
    }
  ]
});
