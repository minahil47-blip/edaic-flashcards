window.DECKS = window.DECKS || [];
// Grouped card shape: { cat, stem, opts:[5], ans:[5] }
window.DECKS.push({
  id: "exam-physics",
  title: "Exam MCQ · Physics & Equipment",
  emoji: "⚙️",
  subtitle: "True/false, exam format · 60 questions × 5 stems = 300 marks",
  colors: {
    front1: "#12212e", front2: "#0369a1",
    back1: "#F0F7FC", back2: "#DDEEF8", backText: "#0b2233",
    chips: ["#0369a1","#12212e","#0E7A66","#B4690E","#A8123E","#4338ca","#7A3B9E","#be123c"]
  },
  cards: [
    {
      cat: "Gas laws",
      stem: "The gas laws:",
      opts: [
        "Boyle's law states that at constant temperature, pressure is inversely proportional to volume",
        "Charles's law relates volume to absolute temperature at constant pressure",
        "The third gas law states that pressure is proportional to absolute temperature at constant volume",
        "Dalton's law states the total pressure equals the sum of partial pressures",
        "Avogadro's number is 6.022 × 10²³ and one mole of gas occupies 22.4 L at STP"
      ],
      ans: [
        "TRUE. The basis of estimating cylinder contents for a gas such as oxygen.",
        "TRUE. V ∝ T.",
        "TRUE. Gay-Lussac's law, P ∝ T — the reason a cylinder in a fire is dangerous.",
        "TRUE. Each gas exerts the pressure it would exert alone.",
        "TRUE. Standard temperature and pressure being 0 °C and 101.325 kPa."
      ]
    },
    {
      cat: "Gas laws",
      stem: "Critical temperature and cylinders:",
      opts: [
        "Critical temperature is the temperature above which a gas cannot be liquefied by pressure alone",
        "The critical temperature of nitrous oxide is 36.5 °C",
        "The contents of a nitrous oxide cylinder can be estimated from its pressure",
        "The filling ratio of a nitrous oxide cylinder in temperate climates is 0.75",
        "Pseudocritical temperature is relevant to Entonox"
      ],
      ans: [
        "TRUE. Above it the substance is a gas; below it and compressed, it is a vapour.",
        "TRUE. So at room temperature it exists as a liquid under pressure in the cylinder.",
        "FALSE. Pressure stays constant at about 44 bar while any liquid remains — the cylinder must be WEIGHED. Only oxygen, a true gas at room temperature, can be judged by pressure.",
        "TRUE. Mass of nitrous oxide divided by mass of water the cylinder could hold; 0.67 in hotter climates.",
        "TRUE. About −6 °C at 137 bar — below this, Entonox separates into a liquid nitrous oxide layer, risking delivery of a hypoxic then a high-N₂O mixture. Store horizontally and warm before use."
      ]
    },
    {
      cat: "Gas laws",
      stem: "Solubility and diffusion:",
      opts: [
        "Henry's law states that the amount of gas dissolved is proportional to its partial pressure",
        "Graham's law states that diffusion rate is inversely proportional to the square root of molecular weight",
        "Fick's law of diffusion includes membrane thickness in the denominator",
        "The Bunsen solubility coefficient is temperature dependent",
        "Oxygen diffuses across the alveolar membrane faster than carbon dioxide"
      ],
      ans: [
        "TRUE. At constant temperature — the basis of gas carriage in blood and of decompression illness.",
        "TRUE. So light gases diffuse faster — relevant to helium in upper airway obstruction.",
        "TRUE. Flux ∝ area × ΔP × solubility / (thickness × √MW).",
        "TRUE. Solubility falls as temperature rises — which is why blood gas values are temperature corrected.",
        "FALSE. CO₂ diffuses about 20 times faster, because it is far more soluble — solubility dominates over the molecular weight term."
      ]
    },
    {
      cat: "Flow",
      stem: "Flow through tubes:",
      opts: [
        "Laminar flow is described by the Hagen–Poiseuille equation",
        "In laminar flow, resistance is proportional to viscosity",
        "In turbulent flow, resistance depends on density rather than viscosity",
        "Doubling the radius of a cannula increases laminar flow sixteen-fold",
        "Reynolds number is dimensionless"
      ],
      ans: [
        "TRUE. Q = πΔPr⁴ / 8ηl.",
        "TRUE. Whereas turbulent flow depends on density — hence heliox in upper airway obstruction, where flow is turbulent.",
        "TRUE. Helium's low density reduces the work of breathing through a narrowed airway.",
        "TRUE. And halving the length doubles it — the design principle of a large-bore short cannula for resuscitation.",
        "TRUE. Re = ρvd/η; above about 2000 flow becomes turbulent."
      ]
    },
    {
      cat: "Flow",
      stem: "Flowmeters and measurement of flow:",
      opts: [
        "A rotameter is a variable orifice, constant pressure device",
        "At low flows in a rotameter, flow is governed by viscosity",
        "At high flows in a rotameter, flow is governed by density",
        "Rotameters are calibrated for a specific gas and are not interchangeable",
        "The oxygen rotameter is placed downstream so that a leak in another flowmeter cannot cause hypoxia"
      ],
      ans: [
        "TRUE. The bobbin rises until the annular gap allows the set flow at a constant pressure drop.",
        "TRUE. The annulus behaves as a tube, so flow is laminar.",
        "TRUE. The annulus behaves as an orifice, so flow is turbulent.",
        "TRUE. Because both viscosity and density differ between gases; they are also affected by static electricity and by tilting.",
        "TRUE. The oxygen flowmeter is positioned nearest the common gas outlet (downstream of nitrous oxide) for exactly this reason."
      ]
    },
    {
      cat: "Vaporisers",
      stem: "Vaporisers:",
      opts: [
        "A plenum vaporiser is a variable bypass device",
        "Saturated vapour pressure is independent of ambient pressure",
        "Vaporisers are temperature compensated by a bimetallic strip",
        "The desflurane vaporiser is heated to 39 °C and pressurised",
        "At altitude, a variable bypass vaporiser delivers a lower partial pressure of agent than at sea level"
      ],
      ans: [
        "TRUE. Splitting fresh gas between a bypass channel and the vaporising chamber.",
        "TRUE. SVP depends only on temperature and the nature of the liquid.",
        "TRUE. Compensating for cooling as latent heat of vaporisation is lost; wicks and a high thermal capacity housing help too.",
        "TRUE. To about 2 atmospheres, injecting pure vapour into the fresh gas — because desflurane's SVP is close to atmospheric pressure at room temperature.",
        "FALSE. The delivered PARTIAL PRESSURE is approximately preserved, even though the volumes percent reading rises. Since clinical effect depends on partial pressure, the vaporiser can be used unchanged."
      ]
    },
    {
      cat: "Breathing systems",
      stem: "Mapleson breathing systems:",
      opts: [
        "The Mapleson A (Magill) is the most efficient for spontaneous ventilation",
        "The Mapleson A requires a fresh gas flow of about 70 ml/kg/min for spontaneous ventilation",
        "The Mapleson D and its Bain modification are efficient for controlled ventilation",
        "The Mapleson E has no reservoir bag",
        "The Mapleson F (Jackson–Rees) is used in children under 20 kg"
      ],
      ans: [
        "TRUE. Fresh gas flow equal to alveolar minute ventilation is sufficient, because dead space gas is exhaled first and is preserved.",
        "TRUE. Roughly equal to alveolar minute ventilation — about 70–80 ml/kg/min.",
        "TRUE. Requiring about 70 ml/kg/min for controlled ventilation, but 2–3 times minute ventilation when spontaneous — the reverse of the A.",
        "TRUE. Ayre's T-piece — hence no ability to assist ventilation and no scavenging.",
        "TRUE. An E with an open-tailed bag added, giving low resistance and the ability to ventilate; it needs 2–3 times minute ventilation."
      ]
    },
    {
      cat: "Breathing systems",
      stem: "The circle system:",
      opts: [
        "Soda lime contains about 94% calcium hydroxide",
        "The reaction of carbon dioxide with soda lime is exothermic and produces water",
        "Unidirectional valves and correct placement of the reservoir bag and APL valve are essential",
        "Low flow anaesthesia risks accumulation of carbon monoxide with desiccated absorbent",
        "Compound A is produced from isoflurane with soda lime"
      ],
      ans: [
        "TRUE. With sodium and potassium hydroxide as activators and an indicator dye; Baralyme is no longer used.",
        "TRUE. Which is why the canister warms and why humidity in a circle rises — both useful clinical signs of function.",
        "TRUE. A stuck valve causes rebreathing; the classic layout keeps the absorber between expiratory and inspiratory limbs.",
        "TRUE. Particularly with desflurane and dry absorbent left over a weekend — change the absorbent on Monday.",
        "FALSE. Compound A comes from SEVOFLURANE. Carbon monoxide is generated chiefly from desflurane, enflurane and isoflurane with dry absorbent."
      ]
    },
    {
      cat: "Anaesthetic machine",
      stem: "Safety features of the anaesthetic machine:",
      opts: [
        "The pin index system prevents connection of the wrong cylinder",
        "The oxygen failure alarm is powered by the oxygen supply itself",
        "The emergency oxygen flush delivers about 35–75 L/min at pipeline pressure",
        "The pipeline pressure is about 4 bar and cylinder pressure for oxygen about 137 bar",
        "The oxygen flush bypasses the vaporiser and can cause awareness"
      ],
      ans: [
        "TRUE. A gas-specific pin configuration on the yoke; NIST or Schrader connections do the same for pipelines.",
        "TRUE. The Ritchie whistle is driven by the residual oxygen in the machine as the supply fails — deliberately requiring no battery or mains power. It must sound for at least 7 seconds.",
        "TRUE. Which is why it can generate barotrauma if used with a small patient and no pressure relief.",
        "TRUE. And a full nitrous oxide cylinder is at about 44 bar.",
        "TRUE. It delivers pure oxygen with no agent, diluting the delivered anaesthetic."
      ]
    },
    {
      cat: "Anaesthetic machine",
      stem: "Scavenging and pollution:",
      opts: [
        "An active scavenging system uses a vacuum with a receiving system and a reservoir",
        "The scavenging transfer tubing is 30 mm to prevent misconnection",
        "Nitrous oxide has a long atmospheric lifetime and depletes ozone",
        "Desflurane has the highest global warming potential of the volatile agents in common use",
        "Charcoal canisters absorb nitrous oxide"
      ],
      ans: [
        "TRUE. With positive and negative pressure relief valves to protect the patient.",
        "TRUE. A deliberately non-standard size.",
        "TRUE. About 114 years, and it is a potent greenhouse gas — which is why piped N₂O manifolds are being decommissioned.",
        "TRUE. By a wide margin — roughly 20 times that of sevoflurane per MAC-hour, and worse at high fresh gas flows.",
        "FALSE. Activated charcoal adsorbs VOLATILE agents but NOT nitrous oxide."
      ]
    },
    {
      cat: "Ventilators",
      stem: "Modes of mechanical ventilation:",
      opts: [
        "Volume controlled ventilation guarantees tidal volume but not airway pressure",
        "Pressure controlled ventilation gives a decelerating inspiratory flow pattern",
        "Pressure support is a spontaneous mode requiring patient trigger",
        "In SIMV, mandatory breaths are synchronised with patient effort",
        "PEEP always improves oxygenation and never affects cardiac output"
      ],
      ans: [
        "TRUE. So pressures rise if compliance falls — hence the need for a pressure limit.",
        "TRUE. Which improves gas distribution but means tidal volume varies with compliance and resistance.",
        "TRUE. Every breath is patient-initiated and pressure-assisted; apnoea backup is essential.",
        "TRUE. Avoiding breath stacking.",
        "FALSE. PEEP recruits alveoli and raises FRC, but excessive PEEP overdistends, increases dead space and REDUCES venous return and cardiac output."
      ]
    },
    {
      cat: "Ventilators",
      stem: "Lung protective ventilation:",
      opts: [
        "Tidal volume of 6 ml/kg predicted body weight is recommended in ARDS",
        "Plateau pressure should be kept below 30 cmH₂O",
        "Driving pressure is plateau pressure minus PEEP",
        "Permissive hypercapnia is contraindicated in raised intracranial pressure",
        "Prone positioning improves mortality in severe ARDS"
      ],
      ans: [
        "TRUE. Based on height and sex, not on actual weight.",
        "TRUE. To limit volutrauma and barotrauma.",
        "TRUE. It correlates strongly with outcome — a value above about 15 cmH₂O is associated with harm.",
        "TRUE. Because hypercapnia raises cerebral blood flow and ICP.",
        "TRUE. When applied early for at least 16 hours a day in patients with PaO₂/FiO₂ below 150."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Pulse oximetry:",
      opts: [
        "It uses two wavelengths, about 660 nm and 940 nm",
        "It applies the Beer–Lambert law to the pulsatile component of absorption",
        "Carboxyhaemoglobin causes a falsely high reading",
        "Methaemoglobinaemia drives the reading towards 85%",
        "Methylene blue causes a transient falsely low reading"
      ],
      ans: [
        "TRUE. Red and infrared; deoxyhaemoglobin absorbs more red, oxyhaemoglobin more infrared.",
        "TRUE. Isolating the arterial signal from the constant tissue and venous background.",
        "TRUE. COHb absorbs similarly to oxyhaemoglobin at 660 nm, so it reads near-normal despite severe hypoxia — use a co-oximeter.",
        "TRUE. MetHb absorbs equally at both wavelengths, so the ratio tends to 1, which the algorithm reports as about 85% regardless of true saturation.",
        "TRUE. As does indocyanine green and indigo carmine — dyes absorbing in the measured range."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Capnometry and gas analysis:",
      opts: [
        "Infrared absorption is used to measure carbon dioxide and volatile agents",
        "Oxygen cannot be measured by infrared absorption",
        "A paramagnetic analyser measures oxygen",
        "Mainstream capnography has a faster response time than sidestream",
        "Nitrous oxide causes collision broadening that overestimates carbon dioxide"
      ],
      ans: [
        "TRUE. Molecules with two or more DIFFERENT atoms absorb infrared.",
        "TRUE. O₂, N₂ and argon are symmetrical diatomic molecules and do not absorb infrared.",
        "TRUE. Oxygen has unpaired electrons and is attracted into a magnetic field — fast and accurate.",
        "TRUE. No sampling delay, but the sensor is bulky, heated and adds dead space.",
        "TRUE. Pressure broadening of the absorption band; modern analysers correct for it."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Invasive arterial pressure monitoring:",
      opts: [
        "The transducer should be zeroed at the level of the right atrium",
        "An optimally damped system has a damping coefficient of about 0.64",
        "An underdamped trace overestimates systolic pressure",
        "The natural frequency of the system should be well above the highest harmonic of interest",
        "Mean arterial pressure is the measurement least affected by damping"
      ],
      ans: [
        "TRUE. The phlebostatic axis; a 10 cm error changes the reading by about 7.5 mmHg.",
        "TRUE. Giving the fastest response with minimal overshoot; tested with the square wave (fast flush) test.",
        "TRUE. And underestimates diastolic — caused by long stiff tubing with a resonant frequency close to the pulse harmonics.",
        "TRUE. Ideally above about 30 Hz, achieved with short, wide, stiff tubing free of bubbles and clots.",
        "TRUE. Which is why MAP remains reliable when the waveform is clearly damped or resonant."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Non-invasive blood pressure measurement:",
      opts: [
        "Oscillometric devices measure mean pressure most accurately",
        "A cuff that is too small overestimates blood pressure",
        "Cuff width should be about 40% of the arm circumference",
        "Korotkoff sound phase V corresponds to diastolic pressure",
        "Atrial fibrillation improves the accuracy of oscillometry"
      ],
      ans: [
        "TRUE. Maximum oscillation amplitude corresponds to MAP; systolic and diastolic are derived by algorithm.",
        "TRUE. And a cuff that is too large underestimates it.",
        "TRUE. And the bladder should encircle at least 80% of the arm.",
        "TRUE. Disappearance of sounds; phase IV (muffling) is used in pregnancy in some guidance.",
        "FALSE. Irregular rhythm degrades accuracy considerably, as does shivering, movement and severe vasoconstriction."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Temperature measurement:",
      opts: [
        "A thermistor's resistance falls non-linearly as temperature rises",
        "A thermocouple depends on the Seebeck effect",
        "Nasopharyngeal temperature approximates brain temperature",
        "Infrared tympanic thermometers measure core temperature reliably in theatre",
        "Oesophageal temperature should be measured in the lower third"
      ],
      ans: [
        "TRUE. A semiconductor bead — small, cheap, fast, but needing calibration.",
        "TRUE. A voltage generated at the junction of two dissimilar metals, proportional to the temperature difference.",
        "TRUE. When correctly positioned; risk of epistaxis limits use in coagulopathy.",
        "FALSE. They are convenient but poorly correlated with core temperature — operator technique, cerumen and probe angle all interfere.",
        "TRUE. To reflect aortic and cardiac temperature and to avoid the cooling effect of tracheal gas higher up."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Depth of anaesthesia monitoring:",
      opts: [
        "The bispectral index gives a dimensionless number from 0 to 100",
        "A BIS of 40–60 is the usual target for general anaesthesia",
        "BIS is unreliable with ketamine and nitrous oxide",
        "Entropy monitoring uses the irregularity of the EEG signal",
        "Isolated forearm technique detects connected consciousness"
      ],
      ans: [
        "TRUE. Derived from a proprietary processed EEG algorithm.",
        "TRUE. Below 40 suggests unnecessarily deep anaesthesia.",
        "TRUE. Both may raise the index despite adequate anaesthesia; EMG and diathermy also interfere.",
        "TRUE. State entropy and response entropy, the latter incorporating frontal EMG.",
        "TRUE. A tourniquet applied before relaxant allows the patient to move a hand to command — the research standard for awareness."
      ]
    },
    {
      cat: "Electrical safety",
      stem: "Electrical safety in theatre:",
      opts: [
        "Microshock can cause ventricular fibrillation at currents as low as 50–100 µA",
        "Mains frequency of 50 Hz is particularly dangerous for inducing VF",
        "Class I equipment relies on an earthed conductive casing",
        "Type CF equipment is suitable for direct cardiac connection",
        "An isolated (floating) circuit reduces the risk of a shock from a single fault"
      ],
      ans: [
        "TRUE. Where current is delivered directly to the myocardium via a pacing wire or fluid-filled catheter.",
        "TRUE. Low frequencies are more arrhythmogenic; diathermy uses high frequency (above 100 kHz) precisely to avoid this.",
        "TRUE. Class II is double insulated; Class III uses safety extra-low voltage.",
        "TRUE. Cardiac Floating — maximum leakage current of 10 µA. Type B and BF are for body and floating body connection only.",
        "TRUE. An isolating transformer means a single earth fault does not complete a circuit; a line isolation monitor warns of it."
      ]
    },
    {
      cat: "Electrical safety",
      stem: "Diathermy:",
      opts: [
        "Monopolar diathermy requires a large return plate to reduce current density",
        "Cutting uses a continuous sine wave and coagulation an interrupted waveform",
        "Bipolar diathermy is preferred in patients with an implanted pacemaker",
        "Diathermy operates at mains frequency",
        "Burns occur where current density is highest"
      ],
      ans: [
        "TRUE. Heat is proportional to current density squared, so a wide plate in good contact avoids burns.",
        "TRUE. Cutting produces continuous heat and vaporisation; coagulation causes intermittent heating and protein denaturation.",
        "TRUE. Current passes only between the forceps tips, so it does not traverse the patient or the device.",
        "FALSE. It uses HIGH frequency, typically 0.5–1 MHz, which passes through tissue with heating but without exciting nerve or muscle.",
        "TRUE. At the active electrode tip by design, and at any inadvertent small contact point by accident — such as an ECG electrode or a metal contact."
      ]
    },
    {
      cat: "Statistics",
      stem: "Types of data:",
      opts: [
        "Nominal data are categorical and unordered",
        "Ordinal data have a meaningful order but unequal intervals",
        "Interval data have a true zero point",
        "The Glasgow Coma Scale is ordinal data",
        "Temperature in kelvin is ratio data"
      ],
      ans: [
        "TRUE. Blood group, eye colour — analysed by chi-squared.",
        "TRUE. ASA grade and pain scores — hence non-parametric analysis and median reporting.",
        "FALSE. Interval data have equal intervals but NO true zero — degrees Celsius. RATIO data have a true zero.",
        "TRUE. A GCS of 12 is not twice as good as 6.",
        "TRUE. Zero kelvin is absolute zero, so ratios are meaningful."
      ]
    }
    ,
    {
      cat: "Statistics",
      stem: "Descriptive statistics:",
      opts: [
        "The mean is the most appropriate measure of central tendency for skewed data",
        "The standard deviation describes the spread of the sample",
        "The standard error of the mean is the standard deviation divided by the square root of n",
        "In a normal distribution, 95% of values lie within about 2 standard deviations of the mean",
        "The median is unaffected by outliers"
      ],
      ans: [
        "FALSE. The MEDIAN should be used for skewed data, with the interquartile range. The mean is dragged by the tail.",
        "TRUE. Whereas the standard error describes the precision of the estimate of the population mean.",
        "TRUE. So it falls as the sample grows, which is why large studies give tighter confidence intervals.",
        "TRUE. 1 SD covers 68%, 2 SD 95%, 3 SD 99.7%.",
        "TRUE. One of its main advantages over the mean."
      ]
    },
    {
      cat: "Statistics",
      stem: "Hypothesis testing:",
      opts: [
        "The null hypothesis states that there is no difference between groups",
        "A p value of 0.05 means there is a 5% chance the null hypothesis is true",
        "A type I error is rejecting a true null hypothesis",
        "A type II error is failing to reject a false null hypothesis",
        "Power is 1 minus the probability of a type II error"
      ],
      ans: [
        "TRUE. Statistical testing seeks evidence to reject it.",
        "FALSE. It is the probability of obtaining a result at least as extreme AS OBSERVED IF the null hypothesis were true. It says nothing directly about the probability that the null is true.",
        "TRUE. A false positive, with probability alpha — conventionally 0.05.",
        "TRUE. A false negative, with probability beta — usually accepted at 0.2.",
        "TRUE. Conventionally 80% or 90%; power rises with sample size, effect size and lower variance."
      ]
    },
    {
      cat: "Statistics",
      stem: "Choosing a statistical test:",
      opts: [
        "The unpaired t-test compares means of two independent normally distributed groups",
        "The Mann–Whitney U test is the non-parametric equivalent of the unpaired t-test",
        "The Wilcoxon signed rank test is used for paired non-parametric data",
        "ANOVA compares means across three or more groups",
        "Chi-squared is used for continuous data"
      ],
      ans: [
        "TRUE. Requiring normality and similar variance.",
        "TRUE. Comparing ranks rather than means.",
        "TRUE. Whereas the paired t-test is its parametric equivalent.",
        "TRUE. Avoiding the inflated type I error of multiple t-tests; post-hoc testing follows a significant result.",
        "FALSE. Chi-squared is for CATEGORICAL (nominal) data in a contingency table. Fisher's exact test is used when expected counts are small."
      ]
    },
    {
      cat: "Statistics",
      stem: "Diagnostic test performance:",
      opts: [
        "Sensitivity is the proportion of those with disease correctly identified",
        "Specificity is the proportion of those without disease correctly identified",
        "Positive predictive value is independent of disease prevalence",
        "A highly sensitive test with a negative result helps rule out disease",
        "The area under a receiver operating characteristic curve of 0.5 indicates a useless test"
      ],
      ans: [
        "TRUE. True positives / (true positives + false negatives).",
        "TRUE. True negatives / (true negatives + false positives).",
        "FALSE. Predictive values depend heavily on PREVALENCE — the same test performs quite differently in screening and in a high-risk clinic.",
        "TRUE. SnNOUT — sensitive test, negative result, rules out. SpPIN is the converse.",
        "TRUE. Equivalent to a coin toss; 1.0 is perfect discrimination."
      ]
    },
    {
      cat: "Statistics",
      stem: "Clinical trials and evidence:",
      opts: [
        "Randomisation reduces selection bias and balances unknown confounders",
        "Intention-to-treat analysis preserves the benefit of randomisation",
        "Number needed to treat is the reciprocal of the absolute risk reduction",
        "Relative risk reduction conveys the clinical importance of a benefit better than absolute risk reduction",
        "Meta-analysis sits above the randomised controlled trial in the evidence hierarchy"
      ],
      ans: [
        "TRUE. It is the defining strength of the randomised controlled trial.",
        "TRUE. Analysing participants in the group to which they were allocated, regardless of what they received.",
        "TRUE. An ARR of 5% gives an NNT of 20.",
        "FALSE. Relative measures can look impressive while the absolute benefit is tiny. ABSOLUTE risk reduction and NNT are the clinically meaningful figures.",
        "TRUE. Provided the constituent trials are homogeneous and well conducted; heterogeneity is quantified by I²."
      ]
    },
    {
      cat: "Measurement",
      stem: "Principles of measurement:",
      opts: [
        "Accuracy describes closeness to the true value",
        "Precision describes reproducibility",
        "Drift is a change in the reading over time with no change in the measured variable",
        "Hysteresis means the output differs depending on whether the input is rising or falling",
        "A device can be precise without being accurate"
      ],
      ans: [
        "TRUE.",
        "TRUE. A device may be reproducibly wrong.",
        "TRUE. Requiring recalibration or re-zeroing — as with pressure transducers.",
        "TRUE. Seen in some pressure gauges and in the pressure–volume curve of the lung.",
        "TRUE. Which is exactly why both must be specified."
      ]
    },
    {
      cat: "Airway equipment",
      stem: "Tracheal tubes:",
      opts: [
        "Murphy's eye provides an alternative gas path if the bevel is obstructed",
        "High-volume low-pressure cuffs reduce the risk of tracheal mucosal ischaemia",
        "Cuff pressure should be kept below about 25–30 cmH₂O",
        "Nitrous oxide diffuses into the cuff and raises its pressure",
        "A reinforced tube can be safely used with a laser"
      ],
      ans: [
        "TRUE. A side hole near the tip.",
        "TRUE. Sealing at a pressure below capillary perfusion pressure of about 30 cmH₂O.",
        "TRUE. Measure it, particularly for prolonged cases, and remember it rises with altitude and with N₂O.",
        "TRUE. Requiring periodic checking, or the use of saline or the anaesthetic gas mixture to fill it.",
        "FALSE. A reinforced tube is NOT laser-safe. Laser-resistant tubes are specifically constructed — metal-wrapped or metal-bodied — with saline-filled, methylene-blue-tinted cuffs, and the FiO₂ is kept low with no nitrous oxide."
      ]
    },
    {
      cat: "Airway equipment",
      stem: "Supraglottic airway devices:",
      opts: [
        "A classic laryngeal mask forms a seal around the laryngeal inlet",
        "Second generation devices incorporate a gastric drainage channel",
        "The classic LMA reliably protects against aspiration",
        "Cuff pressure should not exceed 60 cmH₂O",
        "Sore throat and nerve injury are recognised complications"
      ],
      ans: [
        "TRUE. Sitting in the hypopharynx with the tip in the upper oesophageal sphincter.",
        "TRUE. Such as the ProSeal and i-gel — allowing gastric decompression and a higher seal pressure.",
        "FALSE. It does not. It reduces but does not eliminate the risk, which is why second generation devices and correct patient selection matter.",
        "TRUE. Overinflation raises pharyngeal mucosal pressure and worsens sore throat and nerve injury.",
        "TRUE. Including lingual, hypoglossal and recurrent laryngeal nerve palsy — usually from overinflation or malposition."
      ]
    },
    {
      cat: "Airway equipment",
      stem: "Humidification:",
      opts: [
        "Absolute humidity is the mass of water vapour in a given volume of gas",
        "Fully saturated gas at 37 °C contains about 44 g/m³ of water",
        "The isothermic saturation boundary lies just below the carina in a normal airway",
        "A heat and moisture exchanger is a passive device",
        "Dry gases impair mucociliary clearance"
      ],
      ans: [
        "TRUE. Relative humidity is the ratio of actual to maximum at that temperature.",
        "TRUE. Whereas at 20 °C it is about 17 g/m³ — the shortfall a humidifier must supply.",
        "FALSE. It normally lies about 5 cm BELOW the carina only when the upper airway is bypassed; in a normal airway it is at about the level of the carina and moves distally with intubation, exposing more mucosa to dry gas.",
        "TRUE. Recovering the patient's own heat and moisture; it adds dead space and resistance and can become obstructed.",
        "TRUE. With mucus plugging, atelectasis and heat loss — the reason for humidification in prolonged ventilation."
      ]
    },
    {
      cat: "Equipment",
      stem: "Defibrillators:",
      opts: [
        "Biphasic waveforms achieve defibrillation at lower energies than monophasic",
        "Energy delivered is stored in a capacitor and released through an inductor",
        "Transthoracic impedance is reduced by gel pads and by firm paddle pressure",
        "Synchronised cardioversion delivers the shock on the T wave",
        "The unit of capacitance is the farad"
      ],
      ans: [
        "TRUE. Typically 120–200 J with impedance compensation.",
        "TRUE. The inductor shapes the pulse and prolongs its duration to a few milliseconds.",
        "TRUE. Along with correct pad placement and shocking at end-expiration.",
        "FALSE. It is timed to the R WAVE precisely to AVOID the T wave, since a shock on the T wave can induce VF (R-on-T).",
        "TRUE. Charge Q = CV, and stored energy = ½CV²."
      ]
    },
    {
      cat: "Equipment",
      stem: "Ultrasound in anaesthesia:",
      opts: [
        "Higher frequency probes give better resolution but less penetration",
        "The piezoelectric effect underlies both generation and detection of ultrasound",
        "Doppler shift is used to measure velocity of blood flow",
        "Acoustic impedance mismatch causes reflection at tissue interfaces",
        "Bone and air are good transmitters of ultrasound"
      ],
      ans: [
        "TRUE. So a 10–13 MHz linear probe for superficial blocks and a 2–5 MHz curvilinear probe for deep or abdominal imaging.",
        "TRUE. A crystal deforms with voltage and generates voltage when deformed.",
        "TRUE. With the shift proportional to the cosine of the angle of insonation — hence the need to align with flow.",
        "TRUE. This is what generates the image; coupling gel eliminates the air interface at the skin.",
        "FALSE. Both are very POOR — bone reflects almost everything (acoustic shadow) and air scatters it, which is why lung and bowel are difficult."
      ]
    },
    {
      cat: "Equipment",
      stem: "Infusion devices and syringe pumps:",
      opts: [
        "Siphoning can occur if a syringe pump is placed well above the patient",
        "An anti-siphon valve reduces this risk",
        "Occlusion alarms may be delayed with a compliant giving set",
        "A large bolus can be delivered when an occlusion is released",
        "Gravity giving sets deliver 20 drops per ml for crystalloid"
      ],
      ans: [
        "TRUE. Particularly with a cracked or poorly seated syringe — hence keeping the pump at patient level.",
        "TRUE. As does a non-return valve on any co-infused line.",
        "TRUE. Because pressure builds slowly in the compliant tubing — a real hazard with low-rate vasoactive infusions.",
        "TRUE. Release the pressure before reconnecting.",
        "TRUE. And 15 drops per ml for a blood giving set."
      ]
    },
    {
      cat: "Physics",
      stem: "Pressure and its measurement:",
      opts: [
        "One atmosphere is approximately 101 kPa or 760 mmHg",
        "1 kPa is approximately 7.5 mmHg",
        "1 cmH₂O is approximately 0.74 mmHg",
        "The pascal is one newton per square metre",
        "Gauge pressure includes atmospheric pressure"
      ],
      ans: [
        "TRUE. Or about 1 bar, or 1033 cmH₂O.",
        "TRUE. A useful bedside conversion for blood gases.",
        "TRUE. So a CVP of 10 cmH₂O is about 7.4 mmHg.",
        "TRUE. The SI unit.",
        "FALSE. GAUGE pressure is measured RELATIVE to atmospheric — a cylinder gauge reads zero when empty. ABSOLUTE pressure includes it."
      ]
    },
    {
      cat: "Physics",
      stem: "Heat and its transfer:",
      opts: [
        "Radiation is the largest route of heat loss in an anaesthetised patient",
        "Latent heat of vaporisation is the energy needed to change state without a temperature change",
        "Specific heat capacity is the energy needed to raise 1 kg by 1 kelvin",
        "Forced air warming works chiefly by convection",
        "Evaporation from an open abdomen contributes little to heat loss"
      ],
      ans: [
        "TRUE. About 40%, followed by convection, then evaporation and conduction.",
        "TRUE. It falls to zero at the critical temperature — the principle behind vaporiser cooling and cryotherapy.",
        "TRUE. Water's high value is why warming a patient takes considerable energy.",
        "TRUE. And it is the most effective practical intraoperative warming method.",
        "FALSE. Evaporation from exposed viscera and from the respiratory tract is a substantial contributor, which is why warmed humidified gas and cavity irrigation matter."
      ]
    },
    {
      cat: "Physics",
      stem: "Surface tension and the Laplace relationship:",
      opts: [
        "Laplace's law for a sphere is P = 2T/r",
        "For a cylinder the relationship is P = T/r",
        "Small alveoli would empty into large ones without surfactant",
        "Surfactant is produced by type II pneumocytes",
        "Surface tension is measured in newtons per metre"
      ],
      ans: [
        "TRUE. So for a given surface tension, a smaller bubble has a higher pressure.",
        "TRUE. Relevant to blood vessel wall tension and to aneurysm rupture.",
        "TRUE. Surfactant's concentration-dependent effect lowers tension more in small alveoli, stabilising them.",
        "TRUE. Dipalmitoylphosphatidylcholine; deficiency causes neonatal respiratory distress syndrome.",
        "TRUE. Or dynes per centimetre."
      ]
    },
    {
      cat: "Physics",
      stem: "The Venturi principle and its applications:",
      opts: [
        "The Bernoulli effect describes a pressure drop where fluid velocity increases",
        "Venturi masks entrain air in a fixed ratio to deliver a fixed inspired oxygen concentration",
        "A nebuliser can use the Venturi principle",
        "The Coandă effect describes fluid tending to follow a curved surface",
        "A fixed performance oxygen mask's FiO₂ varies with the patient's peak inspiratory flow"
      ],
      ans: [
        "TRUE. Conservation of energy in a constriction.",
        "TRUE. The entrainment ratio is set by the port size — 24%, 28%, 35%, 40%, 60%.",
        "TRUE. Entraining and shearing liquid into droplets.",
        "TRUE. Explaining maldistribution of gas at airway bifurcations and the operation of some fluidic ventilators.",
        "FALSE. That is the point of a FIXED performance device — total gas flow exceeds peak inspiratory flow, so FiO₂ is constant. Variable performance devices such as the Hudson mask do vary."
      ]
    },
    {
      cat: "Monitoring",
      stem: "The electrocardiogram:",
      opts: [
        "Lead II is best for detecting P waves and arrhythmia",
        "The CM5 configuration is sensitive for anterolateral ischaemia",
        "A monitoring filter mode gives better ST segment fidelity than diagnostic mode",
        "The standard calibration is 10 mm per mV at 25 mm/s",
        "Skin preparation reduces impedance and artefact"
      ],
      ans: [
        "TRUE. Its axis lies close to that of atrial depolarisation.",
        "TRUE. Right arm electrode on the manubrium, left arm at V5 — detecting a high proportion of ischaemic events.",
        "FALSE. Monitoring mode filters aggressively to reduce baseline wander and so DISTORTS the ST segment. DIAGNOSTIC mode has the wider bandwidth needed for ST analysis.",
        "TRUE. So one large square is 0.2 seconds.",
        "TRUE. Along with correct electrode placement away from the surgical field and the diathermy return path."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Blood gas analysis:",
      opts: [
        "The pH electrode is a glass electrode measuring potential difference",
        "The Severinghaus electrode measures carbon dioxide",
        "The Clark electrode measures oxygen polarographically",
        "Samples are analysed at 37 °C regardless of patient temperature",
        "Air bubbles in the sample lower the measured PaO₂ in a hyperoxic sample"
      ],
      ans: [
        "TRUE. Against a reference electrode, calibrated with buffers.",
        "TRUE. A pH electrode behind a CO₂-permeable membrane in bicarbonate solution.",
        "TRUE. A platinum cathode and silver anode with a polarising voltage; the current is proportional to oxygen tension.",
        "TRUE. Which is why alpha-stat and pH-stat management differ in hypothermic bypass.",
        "TRUE. Because the bubble equilibrates towards atmospheric PO₂ (about 21 kPa) — so a high sample falls towards it and a low sample rises. Expel bubbles immediately."
      ]
    },
    {
      cat: "Equipment",
      stem: "Cardiac pacemakers and implanted devices:",
      opts: [
        "In the pacing code, the first letter denotes the chamber paced",
        "VVI means ventricular paced, ventricular sensed, inhibited response",
        "A magnet placed over a pacemaker generally causes asynchronous pacing",
        "A magnet over an implantable defibrillator disables pacing",
        "Bipolar diathermy is preferred, and the return plate should be placed so current does not cross the device"
      ],
      ans: [
        "TRUE. Second the chamber sensed, third the response, fourth rate modulation.",
        "TRUE. The pacemaker withholds output when an intrinsic beat is sensed.",
        "TRUE. VOO or DOO — protecting against diathermy oversensing and inhibition.",
        "FALSE. A magnet over an ICD suspends TACHYARRHYTHMIA THERAPY (shocks) but does NOT alter the bradycardia pacing mode. The two behave quite differently.",
        "TRUE. Along with short bursts, and having external pacing and defibrillation available."
      ]
    },
    {
      cat: "Physics",
      stem: "Lasers and radiation safety:",
      opts: [
        "Laser light is monochromatic, coherent and collimated",
        "CO₂ lasers are absorbed by water and used for superficial airway work",
        "Eye protection must be specific to the laser wavelength",
        "Airway fire risk is reduced by keeping FiO₂ low and avoiding nitrous oxide",
        "Scattered radiation from image intensifiers is greatest at the patient"
      ],
      ans: [
        "TRUE. Which is what allows such high energy density at a focal point.",
        "TRUE. Whereas Nd:YAG penetrates deeper.",
        "TRUE. Generic goggles are not sufficient; signage and a laser safety officer are required.",
        "TRUE. If fire occurs: stop gas flow, remove the tube, flood with saline, then reintubate and assess by bronchoscopy.",
        "TRUE. So distance, lead aprons and thyroid shields matter; dose falls with the inverse square of distance."
      ]
    }
    ,
    {
      cat: "Physics",
      stem: "SI units and derived quantities:",
      opts: [
        "The seven base SI units include the mole and the candela",
        "The newton is the force accelerating 1 kg at 1 m/s²",
        "The joule is one newton metre",
        "The watt is one joule per second",
        "The coulomb is the SI base unit of current"
      ],
      ans: [
        "TRUE. Metre, kilogram, second, ampere, kelvin, mole, candela.",
        "TRUE. kg·m·s⁻².",
        "TRUE. The unit of work and energy.",
        "TRUE. The unit of power.",
        "FALSE. The AMPERE is the base unit of current. The coulomb is the derived unit of charge — one ampere-second."
      ]
    },
    {
      cat: "Physics",
      stem: "Osmometry and colligative properties:",
      opts: [
        "Osmolality is expressed per kilogram of solvent and osmolarity per litre of solution",
        "Osmometers work by measuring depression of freezing point",
        "Colligative properties depend on the number of particles, not their nature",
        "Adding solute raises the vapour pressure of a solution",
        "Oncotic pressure is the osmotic pressure exerted by plasma proteins"
      ],
      ans: [
        "TRUE. Osmolality is preferred clinically as it is temperature independent.",
        "TRUE. Or elevation of boiling point, or reduction of vapour pressure.",
        "TRUE. Which is why 1 mmol of glucose and 1 mmol of urea have equal osmotic effect in vitro.",
        "FALSE. Solute LOWERS vapour pressure — that is precisely why boiling point rises and freezing point falls.",
        "TRUE. About 25 mmHg, dominated by albumin, and augmented by the Gibbs–Donnan effect."
      ]
    },
    {
      cat: "Equipment",
      stem: "Suction apparatus and theatre services:",
      opts: [
        "Anaesthetic suction should generate at least −500 mmHg within 10 seconds",
        "A wide-bore rigid sucker is preferable for vomit",
        "Piped medical air is supplied at 4 bar and surgical air at 7 bar",
        "Oxygen concentrators work by nitrogen adsorption onto a zeolite molecular sieve",
        "Vacuum insulated evaporators store liquid oxygen at about −180 °C"
      ],
      ans: [
        "TRUE. With a high displacement rate and a large reservoir.",
        "TRUE. A Yankauer; narrow flexible catheters block immediately.",
        "TRUE. Which is why the two have different outlet connections.",
        "TRUE. Delivering about 95% oxygen with argon as the main contaminant.",
        "TRUE. Contents are measured by weight on a weighing scale, with a pressure-raising vaporiser and safety valves."
      ]
    },
    {
      cat: "Statistics",
      stem: "Regression, correlation and agreement:",
      opts: [
        "The Pearson correlation coefficient ranges from −1 to +1",
        "A high correlation between two measurement methods proves they agree",
        "Bland–Altman analysis plots difference against mean",
        "Spearman's rank correlation is the non-parametric equivalent",
        "Correlation implies causation"
      ],
      ans: [
        "TRUE. With 0 indicating no linear relationship.",
        "FALSE. Correlation measures ASSOCIATION, not agreement — two methods differing by a constant offset correlate perfectly yet never agree.",
        "TRUE. Giving bias and limits of agreement — the correct method for comparing measurement techniques.",
        "TRUE. Used for ordinal or non-normally distributed data.",
        "FALSE. Confounding and reverse causation must be excluded; only a well-designed intervention study supports causal inference."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Neuromuscular monitoring equipment:",
      opts: [
        "Supramaximal stimulation is about 20–25% above that producing a maximal response",
        "The stimulus is a monophasic square wave of about 0.2 ms",
        "Acceleromyography measures acceleration of the thumb",
        "Stimulation of the facial nerve gives a more accurate estimate of recovery than the ulnar nerve",
        "Kinemyography and electromyography are alternative quantitative methods"
      ],
      ans: [
        "TRUE. Ensuring all fibres are recruited so the response reflects blockade alone.",
        "TRUE. Longer pulses risk direct muscle stimulation and are painful.",
        "TRUE. Using a piezoelectric sensor and Newton's second law; it needs free thumb movement and a preload.",
        "FALSE. The face is more RESISTANT and recovers earlier — it can mislead into premature extubation. The ulnar nerve at the adductor pollicis is the reference site.",
        "TRUE. Quantitative monitoring of any kind is preferred to visual or tactile assessment."
      ]
    },
    {
      cat: "Physics",
      stem: "Resonance, damping and biological signals:",
      opts: [
        "The natural frequency of a system is where resonance occurs",
        "Critical damping gives the fastest response with no overshoot",
        "Optimal damping deliberately accepts a small overshoot",
        "The EEG contains frequencies of roughly 0.5 to 30 Hz",
        "Amplification of biological signals requires a high common mode rejection ratio"
      ],
      ans: [
        "TRUE. Where the amplitude of the output is greatest for a given input.",
        "TRUE. Damping coefficient of 1 — but it is slower to reach the value than optimal damping.",
        "TRUE. A coefficient of about 0.64, giving the best compromise between speed and fidelity.",
        "TRUE. Delta, theta, alpha and beta bands, with amplitudes of tens of microvolts.",
        "TRUE. To reject mains interference common to both inputs — differential amplification."
      ]
    },
    {
      cat: "Equipment",
      stem: "Cardiac output and haemodynamic monitors:",
      opts: [
        "The pulmonary artery catheter balloon is inflated with 1.5 ml of air",
        "Pulmonary artery occlusion pressure estimates left atrial pressure",
        "The catheter should be wedged for prolonged periods to obtain a stable reading",
        "Lithium dilution provides a calibration for pulse contour analysis",
        "Transoesophageal echocardiography can assess filling and regional wall motion"
      ],
      ans: [
        "TRUE. Never more, and never with fluid — pulmonary artery rupture is the feared complication.",
        "TRUE. Provided the tip lies in West zone 3, where the vascular column is continuous.",
        "FALSE. Never — prolonged wedging risks pulmonary infarction and rupture. Record briefly at end-expiration and deflate.",
        "TRUE. As does transpulmonary thermodilution, which also gives extravascular lung water.",
        "TRUE. It is the most sensitive early monitor of myocardial ischaemia, though it requires training and is semi-invasive."
      ]
    },
    {
      cat: "Physics",
      stem: "Absorption spectrophotometry and co-oximetry:",
      opts: [
        "The Beer–Lambert law relates absorption to concentration and path length",
        "A co-oximeter uses at least four wavelengths",
        "Co-oximetry can distinguish carboxyhaemoglobin from oxyhaemoglobin",
        "Fetal haemoglobin significantly interferes with modern pulse oximetry",
        "Nail varnish and dark skin pigmentation can affect pulse oximeter readings"
      ],
      ans: [
        "TRUE. Beer relates it to concentration, Lambert to path length.",
        "TRUE. Allowing measurement of oxy-, deoxy-, carboxy- and methaemoglobin.",
        "TRUE. Which is why it is essential in suspected carbon monoxide poisoning.",
        "FALSE. HbF has similar absorption characteristics to HbA at the wavelengths used, so it does NOT significantly interfere — a common misconception.",
        "TRUE. Blue and black varnish particularly; pigmentation is associated with a bias towards overestimating saturation, which matters at low saturations."
      ]
    },
    {
      cat: "Equipment",
      stem: "Regional anaesthesia equipment:",
      opts: [
        "A short bevel needle gives better feel of fascial planes and reduces nerve injury risk",
        "A nerve stimulator current of 0.2–0.5 mA producing a motor response suggests very close needle proximity",
        "A response persisting below 0.2 mA suggests intraneural placement",
        "Injection pressure above 15 psi suggests intrafascicular injection",
        "Ultrasound guidance abolishes the risk of local anaesthetic systemic toxicity"
      ],
      ans: [
        "TRUE. Typically 30–45 degrees, as opposed to a long cutting bevel.",
        "TRUE. Starting at 1–1.5 mA and reducing; the response should disappear below about 0.3 mA.",
        "TRUE. Stop, withdraw and do not inject.",
        "TRUE. Injection should be low-pressure and painless; pain on injection is a warning sign.",
        "FALSE. It reduces both the volume required and the incidence, but injection into or near a vessel remains possible. Aspirate, inject incrementally, and have lipid emulsion available."
      ]
    },
    {
      cat: "Physics",
      stem: "Cleaning, disinfection and sterilisation:",
      opts: [
        "Autoclaving at 134 °C for 3 minutes is a standard cycle",
        "Ethylene oxide is used for heat-sensitive equipment",
        "Glutaraldehyde is a high-level disinfectant, not a steriliser in routine use",
        "Prions are destroyed by standard autoclaving",
        "Single-use equipment must not be reprocessed"
      ],
      ans: [
        "TRUE. Or 121 °C for 15 minutes; steam under pressure denatures protein.",
        "TRUE. But it is toxic, mutagenic and requires prolonged aeration.",
        "TRUE. Used for endoscopes; it is an irritant and sensitiser, so peracetic acid and automated systems have largely displaced it.",
        "FALSE. Prions are remarkably resistant — standard autoclaving does NOT reliably destroy them, which is why single-use equipment and specific decontamination pathways exist for at-risk patients.",
        "TRUE. Manufacturer's designation is legally binding, and reprocessing transfers liability."
      ]
    },
    {
      cat: "Equipment",
      stem: "Checking the anaesthetic machine:",
      opts: [
        "A self-inflating bag must be immediately available whether or not a machine check is completed",
        "The two-bag test checks the breathing system, ventilator and vaporiser together",
        "A leak test of the vaporiser should be performed with the vaporiser switched on",
        "The oxygen analyser should be calibrated in air and in 100% oxygen",
        "The machine check is the responsibility of the anaesthetic assistant"
      ],
      ans: [
        "TRUE. The first item on the checklist, precisely because the machine may fail.",
        "TRUE. Performed after the breathing system, vaporisers and monitoring have been checked individually.",
        "TRUE. Because internal leaks may only appear when the vaporiser is open.",
        "TRUE. A two-point calibration.",
        "FALSE. It is the ANAESTHETIST'S responsibility, and must be repeated by each anaesthetist taking over and recorded."
      ]
    },
    {
      cat: "Statistics",
      stem: "Confidence intervals and effect estimates:",
      opts: [
        "A 95% confidence interval for a difference that includes zero indicates no statistically significant difference",
        "A 95% confidence interval for a relative risk that includes 1 indicates no significant difference",
        "Wider confidence intervals indicate greater precision",
        "Confidence intervals convey more information than a p value alone",
        "Increasing sample size narrows the confidence interval"
      ],
      ans: [
        "TRUE. At the conventional 5% level.",
        "TRUE. Because a ratio of 1 means equal risk.",
        "FALSE. Wider intervals mean LESS precision and more uncertainty.",
        "TRUE. They show the magnitude and plausible range of effect, not just whether a threshold was crossed.",
        "TRUE. Because the standard error falls with the square root of n."
      ]
    },
    {
      cat: "Physics",
      stem: "Fluid warming and blood administration:",
      opts: [
        "Rapid infusion of cold fluid is a major cause of perioperative hypothermia",
        "A counter-current fluid warmer can deliver fluid at near body temperature at high flow",
        "Blood should be warmed to no more than about 43 °C",
        "Blood giving sets contain a 170–200 µm filter",
        "Microwave warming of blood is acceptable"
      ],
      ans: [
        "TRUE. One litre of fluid at room temperature drops core temperature by roughly 0.25 °C.",
        "TRUE. Modern devices manage flows of hundreds of ml per minute.",
        "TRUE. Above this, haemolysis occurs.",
        "TRUE. To remove clots and debris; microaggregate filters are finer.",
        "FALSE. Microwaving causes uneven heating and haemolysis and is prohibited. Use a purpose-designed warmer."
      ]
    },
    {
      cat: "Monitoring",
      stem: "Alarms and human factors in monitoring:",
      opts: [
        "Alarm fatigue results from a high proportion of false positive alarms",
        "Minimum monitoring standards include pulse oximetry, capnography, ECG and blood pressure",
        "Capnography is mandatory during transfer of an intubated patient",
        "Checklists reduce perioperative morbidity and mortality",
        "An anaesthetist may leave a patient briefly if monitors are alarming appropriately"
      ],
      ans: [
        "TRUE. Leading to alarms being silenced or ignored — set limits appropriate to the patient.",
        "TRUE. With agent monitoring, airway pressure, temperature and neuromuscular monitoring where relevant.",
        "TRUE. Along with continued oximetry and ECG — a recurring theme of critical incident reporting.",
        "TRUE. The WHO surgical safety checklist, when meaningfully performed rather than merely ticked.",
        "FALSE. A patient under anaesthesia must never be left without a suitably trained anaesthetist present. Monitors supplement but never replace direct observation."
      ]
    },
    {
      cat: "Physics",
      stem: "Nitric oxide and specialist gases:",
      opts: [
        "Inhaled nitric oxide is a selective pulmonary vasodilator",
        "Nitric oxide is inactivated by binding to haemoglobin",
        "Methaemoglobinaemia and nitrogen dioxide formation are hazards of inhaled nitric oxide",
        "Heliox reduces the work of breathing in large airway obstruction",
        "Heliox increases the FiO₂ that can be delivered"
      ],
      ans: [
        "TRUE. Because it is inactivated before reaching the systemic circulation, so systemic pressure is unaffected.",
        "TRUE. Forming methaemoglobin and nitrate — the basis of its selectivity.",
        "TRUE. Requiring monitoring of both; rebound pulmonary hypertension follows abrupt withdrawal.",
        "TRUE. Its low density reduces turbulent resistance — a bridge, not a treatment.",
        "FALSE. The opposite — the higher the helium fraction, the lower the oxygen fraction. Its benefit is lost above about 40% oxygen, which limits its use in severe hypoxia."
      ]
    },
    {
      cat: "Equipment",
      stem: "Difficult airway equipment:",
      opts: [
        "A bougie should be inserted no more than about 25 cm at the teeth",
        "Tracheal clicks and hold-up are signs of correct bougie placement",
        "Videolaryngoscopes improve the view but may not always make tube delivery easier",
        "A front-of-neck airway in the 'cannot intubate, cannot oxygenate' situation is performed at the cricothyroid membrane",
        "The scalpel–bougie–tube technique uses a size 6.0 cuffed tube"
      ],
      ans: [
        "TRUE. Deeper insertion risks airway trauma and pneumothorax.",
        "TRUE. Though both can be misleading — confirm with capnography.",
        "TRUE. A well-recognised paradox with hyperangulated blades — a rigid stylet or a bougie helps.",
        "TRUE. Between the thyroid and cricoid cartilages, identified by palpation or ultrasound.",
        "TRUE. Laryngeal handshake, transverse stab, turn the blade, bougie, then tube — a drilled sequence."
      ]
    },
    {
      cat: "Physics",
      stem: "Filtration and cross-infection prevention:",
      opts: [
        "Breathing system filters remove particles by direct interception, inertial impaction and diffusion",
        "Electrostatic filters rely on charged fibres",
        "A filter's efficiency is unaffected by moisture",
        "Filters add resistance and dead space to the breathing system",
        "Theatre ventilation typically provides at least 20 air changes per hour"
      ],
      ans: [
        "TRUE. Diffusion (Brownian motion) traps the smallest particles, impaction the largest.",
        "TRUE. Pleated hydrophobic mechanical filters are the alternative and are generally more efficient.",
        "FALSE. Wetting can markedly reduce efficiency and greatly increase resistance — a soaked filter must be changed.",
        "TRUE. Which matters most in children and in patients with limited respiratory reserve.",
        "TRUE. With laminar flow theatres achieving far more, and positive pressure relative to adjacent areas."
      ]
    },
    {
      cat: "Statistics",
      stem: "Study design:",
      opts: [
        "A case–control study is retrospective and yields an odds ratio",
        "A cohort study follows exposed and unexposed groups forwards",
        "Blinding reduces observer and performance bias",
        "Cross-over trials are suited to chronic stable conditions",
        "A p value below 0.05 confirms clinical importance"
      ],
      ans: [
        "TRUE. Efficient for rare outcomes but vulnerable to recall and selection bias.",
        "TRUE. Yielding relative risk; prospective cohorts are stronger but slower and costlier.",
        "TRUE. Double blinding covers both participant and assessor; allocation concealment is a separate and equally important safeguard.",
        "TRUE. Each patient acts as their own control, but a washout period is needed to avoid carry-over.",
        "FALSE. Statistical significance is not clinical significance — a trivial difference can be significant in a very large trial."
      ]
    },
    {
      cat: "Physics",
      stem: "Cylinder and pipeline hazards:",
      opts: [
        "A Bodok seal is used between the cylinder and the yoke",
        "Oil or grease on an oxygen fitting can cause fire",
        "Cylinders are colour coded, but the shoulder colour is the definitive marker in the ISO standard",
        "A pipeline hose test involves disconnecting each hose and confirming loss of pressure at the correct flowmeter",
        "Cylinders should be turned on slowly to avoid adiabatic heating"
      ],
      ans: [
        "TRUE. A non-combustible washer; a missing or damaged one causes a leak.",
        "TRUE. Rapid oxidation with the heat of compression — never lubricate oxygen fittings.",
        "TRUE. White shoulders for oxygen, black and white quarters for air, blue for nitrous oxide.",
        "TRUE. The 'tug test' plus confirming each gas appears at its own flowmeter — the safeguard against crossed pipelines.",
        "TRUE. Rapid opening compresses gas in the regulator, generating enough heat to ignite any contaminant."
      ]
    }
  ]
});
