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
  ]
});
