window.DECKS = window.DECKS || [];
// Grouped card shape: { cat, stem, opts:[5], ans:[5] }
// app.js renders these as the EDAIC Type A layout — one stem, five
// independently marked sub-statements. Decks using {q, a} are unaffected.
window.DECKS.push({
  id: "exam-mcq1",
  title: "Exam MCQ 1",
  emoji: "📝",
  subtitle: "True/false in real exam format · 15 questions × 5 stems = 75 marks",
  colors: {
    front1: "#1e293b", front2: "#4338ca",
    back1: "#F1F5F9", back2: "#E0E7FF", backText: "#0f172a",
    chips: ["#4338ca","#1e293b","#0E7A66","#B4690E","#A8123E","#0369a1","#7A3B9E","#be123c"]
  },
  cards: [
    {
      cat: "Physiology",
      stem: "Regarding the oxyhaemoglobin dissociation curve:",
      opts: [
        "A rise in 2,3-DPG shifts the curve to the right",
        "Fetal haemoglobin has a P50 higher than adult haemoglobin",
        "Carboxyhaemoglobin shifts the curve to the left",
        "The normal P50 of adult haemoglobin is approximately 3.5 kPa",
        "Hypothermia shifts the curve to the right"
      ],
      ans: [
        "TRUE. 2,3-DPG binds deoxyhaemoglobin and reduces oxygen affinity — the same direction as acidosis, hypercapnia and pyrexia.",
        "FALSE. HbF has a LOWER P50 of about 2.5 kPa — higher affinity, curve shifted left, because it binds 2,3-DPG poorly. This favours placental oxygen transfer.",
        "TRUE. CO binding increases the affinity of the remaining haem sites, so tissue hypoxia is worse than the measured saturation suggests.",
        "TRUE. 3.5 kPa, or 26.6 mmHg.",
        "FALSE. Hypothermia shifts it LEFT. Right shift needs raised CO2, raised H+, raised temperature or raised 2,3-DPG."
      ]
    },
    {
      cat: "Pharmacology",
      stem: "Suxamethonium:",
      opts: [
        "Is metabolised by acetylcholinesterase at the neuromuscular junction",
        "Typically raises serum potassium by 0.5 mmol/L in a healthy patient",
        "May be given safely to a patient burned 6 hours previously",
        "Produces fade on train-of-four stimulation during phase I block",
        "Increases intraocular pressure"
      ],
      ans: [
        "FALSE. It is metabolised by PLASMA cholinesterase, in plasma. Its action at the junction is terminated by diffusion away from it.",
        "TRUE. Far more in burns, denervation, prolonged immobility and spinal cord injury.",
        "TRUE. Safe within the first 24 hours. Extrajunctional receptor proliferation takes 24-48 hours, after which risk persists for up to a year.",
        "FALSE. Phase I depolarising block shows NO fade. Fade indicates non-depolarising block, or phase II block after repeated dosing.",
        "TRUE. It also raises intragastric and intracranial pressure."
      ]
    },
    {
      cat: "Physics & equipment",
      stem: "Concerning a size E nitrous oxide cylinder:",
      opts: [
        "The contents can be determined from the pressure gauge",
        "It contains approximately 1590 litres",
        "The filling ratio in temperate climates is 0.75",
        "The critical temperature of nitrous oxide is 36.5 degrees C",
        "The pin index configuration is 2,5"
      ],
      ans: [
        "FALSE. It holds liquid in equilibrium with vapour, so the gauge stays at 745 psig until the last liquid evaporates. Weigh it against the tare weight.",
        "TRUE. Compared with 625-700 litres for an E-size oxygen cylinder.",
        "TRUE. Reduced to 0.67 in tropical climates. Overfilling risks a dangerous pressure rise with temperature.",
        "TRUE. Above room temperature, which is why a liquid phase exists. Oxygen's critical temperature is -118 degrees C.",
        "FALSE. Nitrous oxide is 3,5. Pin index 2,5 is OXYGEN."
      ]
    },
    {
      cat: "Physiology",
      stem: "Regarding the coronary circulation:",
      opts: [
        "Left coronary blood flow occurs predominantly during diastole",
        "Coronary perfusion pressure equals aortic systolic pressure minus LVEDP",
        "The myocardium extracts approximately 25% of delivered oxygen at rest",
        "The atrioventricular node is supplied by the right coronary artery in 80-90% of people",
        "The coronary sinus drains about 85% of myocardial venous return"
      ],
      ans: [
        "TRUE. During systole, intramyocardial pressure exceeds perfusion pressure and effectively occludes the vessels. Right coronary flow occurs in both phases.",
        "FALSE. CPP = aortic DIASTOLIC pressure minus LVEDP, normally about 60-80 mmHg.",
        "FALSE. The heart extracts about 70%, versus 25% for the body as a whole. Extraction reserve is nearly exhausted, so extra demand must be met by increased flow.",
        "TRUE. The RCA also supplies the SA node in about 60%. This is why inferior MI causes bradycardia and heart block.",
        "TRUE. The remainder drains via anterior cardiac veins and the Thebesian veins, the latter contributing to the normal anatomical shunt."
      ]
    },
    {
      cat: "Physiology",
      stem: "Cerebrospinal fluid:",
      opts: [
        "Has a total volume of approximately 150 ml",
        "Is produced at approximately 500 ml per day",
        "Has a glucose concentration equal to that of plasma",
        "Leaves the fourth ventricle through the paired foramen of Magendie",
        "Has a protein concentration higher than plasma"
      ],
      ans: [
        "TRUE. Only 150 ml exists at any moment, but it turns over three to four times daily.",
        "TRUE. About 0.35 ml/min from the choroid plexus.",
        "FALSE. CSF glucose is about 60% of plasma, 2.5-4.5 mmol/L — which is why a paired plasma sample is essential for interpretation.",
        "FALSE. Magendie is MEDIAN and single; the paired lateral foramina are those of Luschka. Luschka = Lateral, Magendie = Median.",
        "FALSE. CSF protein is roughly 200 times LOWER — 0.15-0.45 g/L versus 60-80 g/L. A raised value indicates blood-brain barrier breakdown."
      ]
    },
    {
      cat: "Pharmacology",
      stem: "Concerning local anaesthetic agents:",
      opts: [
        "Speed of onset is determined mainly by pKa",
        "Potency correlates with the degree of protein binding",
        "Ester agents are metabolised by plasma cholinesterase",
        "The maximum dose of plain lidocaine is 7 mg/kg",
        "Prilocaine can cause methaemoglobinaemia"
      ],
      ans: [
        "TRUE. The closer the pKa is to physiological pH, the greater the un-ionised fraction available to cross the membrane.",
        "FALSE. Potency correlates with LIPID SOLUBILITY. Protein binding determines DURATION.",
        "TRUE. Amides are metabolised in the liver. Esters also produce PABA, hence their higher allergy risk.",
        "FALSE. Plain lidocaine is 3 mg/kg; 7 mg/kg applies WITH adrenaline.",
        "TRUE. Via its metabolite o-toluidine. Treated with methylene blue."
      ]
    },
    {
      cat: "Physics & equipment",
      stem: "Regarding Mapleson breathing systems:",
      opts: [
        "Mapleson A is the most efficient system for spontaneous ventilation",
        "In the Mapleson D system the APL valve is situated at the patient end",
        "The Bain circuit is a coaxial version of the Mapleson D",
        "Ayre's T-piece has no reservoir bag",
        "The Lack circuit is a coaxial modification of the Mapleson D"
      ],
      ans: [
        "TRUE. It requires only 0.7-1 times minute volume spontaneously, but 3 times MV for controlled ventilation — for which it should not be used.",
        "FALSE. In Mapleson D the fresh gas enters at the PATIENT end and the APL valve sits at the MACHINE end. That arrangement is what makes it efficient for controlled ventilation.",
        "TRUE. The inner tube delivers fresh gas to the patient, the outer corrugated tube returns expired gas. Test inner tube integrity with the Pethick test.",
        "TRUE. Mapleson E has no valves and no bag — minimal resistance and negligible dead space, designed for neonates. The Jackson-Rees (F) adds an open-tailed bag.",
        "FALSE. The Lack is the coaxial modification of Mapleson A, moving the APL valve to the machine end for convenient scavenging. It remains a spontaneous-ventilation circuit."
      ]
    },
    {
      cat: "Pharmacology",
      stem: "Concerning diuretic drugs:",
      opts: [
        "Loop diuretics act on the Na-K-2Cl cotransporter in the thick ascending limb",
        "Thiazide diuretics characteristically cause hypocalcaemia",
        "Acetazolamide produces a metabolic alkalosis",
        "Spironolactone acts at the mineralocorticoid receptor",
        "Mannitol is contraindicated in established anuria"
      ],
      ans: [
        "TRUE. Blocking NKCC2 abolishes the medullary concentration gradient, making loop diuretics the most potent class — they act on the segment handling 25% of filtered sodium.",
        "FALSE. Thiazides cause HYPERcalcaemia by enhancing distal calcium reabsorption. Loop diuretics lose calcium. Mnemonic: Loops Lose, Thiazides Take.",
        "FALSE. It blocks bicarbonate reabsorption, producing a hyperchloraemic metabolic ACIDOSIS with hypokalaemia.",
        "TRUE. Amiloride and triamterene instead block ENaC directly. Both classes risk hyperkalaemia.",
        "TRUE. It also initially expands intravascular volume, so it is dangerous in cardiac failure and pulmonary oedema."
      ]
    },
    {
      cat: "Physiology",
      stem: "Regarding the cardiac cycle:",
      opts: [
        "The first heart sound coincides with closure of the aortic valve",
        "The dicrotic notch corresponds to aortic valve closure",
        "Normal left ventricular end-diastolic volume is approximately 120 ml",
        "Atrial contraction contributes about 40% of ventricular filling at rest",
        "The area enclosed by the pressure-volume loop represents stroke work"
      ],
      ans: [
        "FALSE. S1 is closure of the ATRIOVENTRICULAR valves at the start of systole. S2 is aortic and pulmonary closure.",
        "TRUE. It marks the start of isovolumetric relaxation and coincides with S2 and the end of the T wave.",
        "TRUE. With an ESV of about 50 ml, giving a stroke volume of roughly 70 ml and an ejection fraction of 55-70%.",
        "FALSE. About 10% at rest, rising to as much as 40% at high heart rates when diastole is short. This is why atrial fibrillation is poorly tolerated in aortic stenosis.",
        "TRUE. The loop is traversed anticlockwise from mitral closure."
      ]
    },
    {
      cat: "Statistics",
      stem: "In medical statistics:",
      opts: [
        "A type I error is the rejection of a true null hypothesis",
        "Statistical power equals 1 minus alpha",
        "The standard error of the mean equals the standard deviation divided by the square root of n",
        "Positive predictive value is independent of disease prevalence",
        "The Mann-Whitney U test is a non-parametric test"
      ],
      ans: [
        "TRUE. A false positive, with probability alpha. A type II error is failing to reject a false null hypothesis.",
        "FALSE. Power = 1 minus BETA, conventionally at least 80%. Alpha is the type I error rate.",
        "TRUE. SEM describes the precision of the mean; SD describes the spread of the data.",
        "FALSE. Both PPV and NPV vary with prevalence. Sensitivity and specificity are the prevalence-independent properties.",
        "TRUE. It is the non-parametric equivalent of the unpaired t-test, for ordinal or non-normally distributed data."
      ]
    },
    {
      cat: "Clinical",
      stem: "In myasthenia gravis:",
      opts: [
        "Antibodies are directed against presynaptic voltage-gated calcium channels",
        "Muscle weakness improves with repeated exercise",
        "Patients are resistant to suxamethonium",
        "Patients are sensitive to non-depolarising neuromuscular blockers",
        "Thymoma is present in 10-15% of patients"
      ],
      ans: [
        "FALSE. Antibodies target the POSTsynaptic nicotinic acetylcholine receptor. Presynaptic calcium channel antibodies define Lambert-Eaton syndrome.",
        "FALSE. Fatigability is the hallmark — weakness WORSENS with use. It is LEMS that improves, through post-tetanic facilitation.",
        "TRUE. Fewer functioning receptors means a larger dose is needed to depolarise enough of them.",
        "TRUE. Exquisitely so — reduce to 10-20% of the normal dose or avoid altogether. The combination with suxamethonium resistance is counter-intuitive and heavily examined.",
        "TRUE. Along with thymic hyperplasia and other autoimmune disease. LEMS is instead associated with small cell lung cancer in 50-60%."
      ]
    },
    {
      cat: "Pharmacology",
      stem: "Regarding minimum alveolar concentration (MAC):",
      opts: [
        "The MAC of nitrous oxide is approximately 105%",
        "MAC increases during pregnancy",
        "MAC values are additive between agents",
        "MAC falls by approximately 6% per decade after the age of 40",
        "MAC is highest in the neonate"
      ],
      ans: [
        "TRUE. Which is why nitrous oxide cannot be used as a sole anaesthetic at normal atmospheric pressure.",
        "FALSE. MAC FALLS by about 30% in pregnancy. It also falls with age, hypothermia, hypothyroidism and opioids.",
        "TRUE. 0.5 MAC of one agent plus 0.5 MAC of another gives approximately 1 MAC.",
        "TRUE. A steady, predictable decline.",
        "FALSE. MAC peaks in INFANCY, at around 6 months, and is lower in the neonate than in the infant."
      ]
    },
    {
      cat: "Physics & equipment",
      stem: "Concerning pulse oximetry:",
      opts: [
        "It uses light at wavelengths of 660 nm and 940 nm",
        "Carboxyhaemoglobinaemia causes a falsely low reading",
        "Methaemoglobinaemia drives the reading towards 85%",
        "It requires pulsatile blood flow to function",
        "Jaundice causes significant underestimation of saturation"
      ],
      ans: [
        "TRUE. Red and infrared, exploiting the differing absorption of oxy- and deoxyhaemoglobin, per the Beer-Lambert law.",
        "FALSE. Falsely HIGH — carboxyhaemoglobin absorbs at 660 nm much like oxyhaemoglobin, so the reading is reassuring while the patient is hypoxic.",
        "TRUE. It absorbs both wavelengths roughly equally, forcing the ratio towards 1 and the displayed saturation towards 85%.",
        "TRUE. The pulsatile (AC) component is isolated from the DC background — hence unreliability in shock, hypothermia and on cardiopulmonary bypass.",
        "FALSE. Bilirubin has little effect. Methylene blue, motion, poor perfusion and severe anaemia do interfere."
      ]
    },
    {
      cat: "Clinical",
      stem: "Physiological changes at term pregnancy include:",
      opts: [
        "A fall in functional residual capacity of about 20%",
        "An increase in minute ventilation of about 50%",
        "An increase in plasma cholinesterase activity",
        "A fall in MAC of approximately 30%",
        "A proportionally greater rise in plasma volume than in red cell mass"
      ],
      ans: [
        "TRUE. Combined with a rise in oxygen consumption, this is exactly why obstetric patients desaturate so rapidly.",
        "TRUE. Mainly through increased tidal volume, driven by progesterone. PaCO2 falls to about 4.1 kPa with compensatory bicarbonate loss.",
        "FALSE. It FALLS by about 25%, though this rarely prolongs suxamethonium clinically because volume of distribution also rises.",
        "TRUE. Reduce volatile requirements accordingly.",
        "TRUE. Plasma rises about 45% and red cell mass about 25%, producing the physiological dilutional anaemia of pregnancy."
      ]
    },
    {
      cat: "Pharmacology",
      stem: "Regarding reversal of neuromuscular blockade:",
      opts: [
        "Sugammadex will reverse atracurium",
        "Neostigmine can reverse a profound non-depolarising block",
        "Sugammadex 16 mg/kg permits immediate reversal after 1.2 mg/kg of rocuronium",
        "Fade on train-of-four stimulation indicates non-depolarising block",
        "Magnesium potentiates non-depolarising neuromuscular blockade"
      ],
      ans: [
        "FALSE. Sugammadex encapsulates AMINOSTEROIDS only — rocuronium, vecuronium and less effectively pancuronium. Atracurium is a benzylisoquinolinium.",
        "FALSE. It has a ceiling effect once all acetylcholinesterase is inhibited. Sugammadex can reverse deep aminosteroid block; neostigmine cannot.",
        "TRUE. 2 mg/kg is used at reappearance of T2 and 4 mg/kg at a post-tetanic count of 1-2.",
        "TRUE. Phase I depolarising block shows no fade; fade appears in non-depolarising block and in phase II block.",
        "TRUE. It inhibits presynaptic acetylcholine release and reduces postsynaptic sensitivity. Aminoglycosides act by the same mechanism."
      ]
    }
  ]
});
