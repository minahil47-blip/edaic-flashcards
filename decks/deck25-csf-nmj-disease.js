window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "csf-nmj-disease",
  title: "CSF & NMJ Disease",
  emoji: "🧪",
  subtitle: "CSF vs plasma · meningitis analysis · LP safety · myasthenia · LEMS · cholinergic crisis",
  colors: {
    front1: "#4338ca", front2: "#0f766e",
    back1: "#FECDD3", back2: "#FEF08A", backText: "#1e1b4b",
    chips: ["#4338ca","#0f766e","#A8123E","#B4690E","#1B5FA8","#7A3B9E","#7bd88f","#ff8fb1"]
  },
  cards: [
    {cat:"CSF basics", q:"State CSF volume, production rate and turnover.", a:"About 150 ml total, produced at 0.35 ml/min (roughly 500 ml/day), so the whole volume turns over three to four times daily."},
    {cat:"CSF basics", q:"Where is CSF produced and absorbed?", a:"Produced by the choroid plexus in the lateral, third and fourth ventricles; absorbed by arachnoid granulations into the venous sinuses."},
    {cat:"CSF basics", q:"What is normal CSF pressure and specific gravity?", a:"Pressure 5–15 mmHg; specific gravity 1.003–1.008."},
    {cat:"CSF basics", q:"Why does CSF specific gravity matter in spinal anaesthesia?", a:"It is the reference against which solutions are hyperbaric, isobaric or hypobaric. Heavy bupivacaine with 8% dextrose sinks; plain bupivacaine is roughly isobaric at body temperature."},

    {cat:"CSF circulation", q:"Which cells produce CSF, and where?", a:"Ependymal cells of the choroid plexus, in the lateral, third and fourth ventricles."},
    {cat:"CSF circulation", q:"Trace the full CSF circulation pathway.", a:"Choroid plexus → lateral ventricles → foramen of Monro → third ventricle → aqueduct of Sylvius → fourth ventricle → foramina of Luschka and Magendie → subarachnoid space → arachnoid granulations → superior sagittal sinus."},
    {cat:"CSF circulation", q:"What connects the lateral ventricles to the third ventricle?", a:"The foramen of Monro (interventricular foramen) — there are two, one for each lateral ventricle."},
    {cat:"CSF circulation", q:"What connects the third and fourth ventricles?", a:"The aqueduct of Sylvius (cerebral aqueduct) — the narrowest point in the whole pathway."},
    {cat:"CSF circulation", q:"How does CSF leave the fourth ventricle?", a:"Through the two lateral foramina of Luschka and the single median foramen of Magendie, into the subarachnoid space. Luschka = Lateral, Magendie = Median."},
    {cat:"CSF circulation", q:"Where and how is CSF reabsorbed?", a:"By arachnoid granulations (villi) projecting into the superior sagittal sinus. Absorption is passive, pressure-dependent and one-way — it only occurs when CSF pressure exceeds venous sinus pressure."},
    {cat:"CSF circulation", q:"Why does CSF continue to be produced when ICP is dangerously high?", a:"Production is ACTIVE and largely pressure-independent, whereas absorption is passive and pressure-dependent. Secretion does not switch off as pressure rises."},
    {cat:"CSF circulation", q:"Distinguish communicating from non-communicating hydrocephalus.", a:"Non-communicating (obstructive): blockage within the ventricular system, commonest at the aqueduct of Sylvius. Communicating: ventricular flow is intact but absorption at the arachnoid granulations fails — classically after subarachnoid haemorrhage or meningitis."},
    {cat:"CSF circulation", q:"Why is lumbar puncture dangerous in obstructive hydrocephalus?", a:"Removing CSF below the blockage while pressure above remains high creates a pressure gradient and risks coning. Image first."},

    {cat:"CSF vs plasma", q:"How does CSF protein compare with plasma?", a:"Dramatically lower — 0.15–0.45 g/L versus 60–80 g/L, about 200 times less. A raised CSF protein means blood-brain barrier breakdown."},
    {cat:"CSF vs plasma", q:"How does CSF glucose compare with plasma?", a:"About 60% of plasma — 2.5–4.5 mmol/L. A CSF glucose is meaningless without a paired plasma sample."},
    {cat:"CSF vs plasma", q:"How do CSF potassium and chloride compare with plasma?", a:"Potassium is LOWER (2.8–3.0 vs 3.5–5.0 mmol/L) and tightly regulated. Chloride is HIGHER (115–125 vs 95–105 mmol/L), balancing the low protein for electroneutrality."},
    {cat:"CSF vs plasma", q:"How do CSF calcium and magnesium compare with plasma?", a:"Total calcium is lower (1.1–1.3 vs 2.2–2.6 mmol/L, though ionised is similar); magnesium is higher."},
    {cat:"CSF vs plasma", q:"How do CSF pH and PCO2 compare with plasma?", a:"CSF is slightly more acidic — pH 7.33 versus 7.40 — with a higher PCO2 of about 6.6 kPa versus 5.3."},
    {cat:"CSF vs plasma", q:"What is the normal CSF cell count?", a:"0–5 lymphocytes per mm3, with no polymorphs and no red cells."},
    {cat:"CSF vs plasma", q:"Why is CSF pH so important for ventilatory control?", a:"CO2 crosses the blood-brain barrier freely but H+ and bicarbonate do not, so a rise in PaCO2 rapidly acidifies CSF and stimulates the central chemoreceptors. CSF has almost no protein buffer, making it very sensitive."},
    {cat:"CSF vs plasma", q:"How does chronic CO2 retention blunt the CO2 drive?", a:"Over 24–48 hours bicarbonate is transported into CSF to normalise its pH, so the central chemoreceptors no longer sense the raised CO2."},

    {cat:"Meningitis", q:"What is the CSF appearance in bacterial, viral and TB meningitis?", a:"Bacterial: turbid and purulent. Viral: clear. TB: clear or slightly cloudy, classically forming a fibrin web on standing."},
    {cat:"Meningitis", q:"What is the predominant cell type in each meningitis?", a:"Bacterial: NEUTROPHILS. Viral: lymphocytes. TB: lymphocytes, though neutrophils may predominate early."},
    {cat:"Meningitis", q:"What happens to CSF protein in each meningitis?", a:"Bacterial: high, above 1 g/L. Viral: normal or mildly raised, below 1 g/L. TB: very high, 1–5 g/L — the highest of the three."},
    {cat:"Meningitis", q:"What happens to the CSF:plasma glucose ratio in each?", a:"Normal is above 0.6. Bacterial: below 0.4. Viral: NORMAL. TB: below 0.4."},
    {cat:"Meningitis", q:"Which single parameter best separates viral from bacterial and TB meningitis?", a:"Glucose — viral meningitis characteristically leaves it NORMAL, while bacterial, TB and fungal all consume it."},
    {cat:"Meningitis", q:"What are typical white cell counts in each meningitis?", a:"Bacterial 1000–5000+ per mm3; viral 50–1000; TB 50–500."},
    {cat:"Meningitis", q:"What microbiological tests are used in each?", a:"Bacterial: Gram stain, culture, antigen testing. Viral: PCR (enterovirus, HSV, VZV). TB: Ziehl-Neelsen (low yield), culture over 6 weeks, PCR/GeneXpert and adenosine deaminase."},
    {cat:"Meningitis", q:"How does the time course differ between the meningitides?", a:"Bacterial over hours, viral over days, TB insidiously over weeks."},
    {cat:"Meningitis", q:"Why is partially treated bacterial meningitis a diagnostic trap?", a:"Prior antibiotics shift the picture towards lymphocytes with a negative Gram stain, mimicking viral or TB meningitis. Always ask what antibiotics were given."},
    {cat:"Meningitis", q:"What is albuminocytological dissociation and where is it seen?", a:"High CSF protein with a NORMAL cell count — characteristic of Guillain-Barré syndrome, appearing after about a week."},
    {cat:"Meningitis", q:"How is subarachnoid haemorrhage confirmed on CSF?", a:"Xanthochromia from bilirubin in lysed red cells, best detected by spectrophotometry at least 12 hours after onset. A traumatic tap clears across successive bottles; SAH does not."},

    {cat:"LP safety", q:"What are the contraindications to lumbar puncture?", a:"Raised ICP with mass effect or focal signs (risk of coning), coagulopathy or therapeutic anticoagulation, platelets below about 50, local infection at the site, and cardiovascular instability."},
    {cat:"LP safety", q:"Should antibiotics ever be delayed for an LP?", a:"No. In suspected bacterial meningitis take blood cultures and give antibiotics immediately — cell counts, protein, glucose and PCR remain informative for hours afterwards."},
    {cat:"LP safety", q:"Which interspace is used for LP and why?", a:"L3–4 or L4–5, because the adult cord ends at L1–L2. Tuffier's line marks approximately L4 but is unreliable and often reads a space too high."},
    {cat:"LP safety", q:"List the layers traversed during a lumbar puncture.", a:"Skin, subcutaneous fat, supraspinous ligament, interspinous ligament, ligamentum flavum, epidural space, dura, arachnoid, then CSF."},

    {cat:"MG vs LEMS", q:"Where is the lesion in myasthenia gravis versus LEMS?", a:"Myasthenia is POSTsynaptic (muscle membrane); LEMS is PREsynaptic (nerve terminal)."},
    {cat:"MG vs LEMS", q:"Which antibodies are involved in each?", a:"Myasthenia: nicotinic acetylcholine receptor antibodies in 85%, MuSK in about 5%. LEMS: antibodies to P/Q-type voltage-gated calcium channels."},
    {cat:"MG vs LEMS", q:"How does exercise affect each condition?", a:"Myasthenia gets WORSE with use — fatigability is the hallmark. LEMS gets BETTER, through post-tetanic facilitation as calcium accumulates."},
    {cat:"MG vs LEMS", q:"Compare the distribution of weakness.", a:"Myasthenia: ocular first (ptosis, diplopia) in 50–60%, then bulbar, then limb. LEMS: proximal limbs first, legs before arms, with ocular and bulbar involvement mild or absent."},
    {cat:"MG vs LEMS", q:"Compare reflexes and autonomic features.", a:"Myasthenia: reflexes preserved, no autonomic features. LEMS: reflexes reduced or absent (may return after sustained contraction), with common autonomic features such as dry mouth and constipation."},
    {cat:"MG vs LEMS", q:"Which malignancy or pathology is associated with each?", a:"Myasthenia: thymoma in 10–15%, thymic hyperplasia, other autoimmune disease. LEMS: small cell lung cancer in 50–60%, often preceding the diagnosis."},
    {cat:"MG vs LEMS", q:"What do repetitive nerve stimulation studies show in each?", a:"Myasthenia: DECREMENT at low frequency (2–3 Hz). LEMS: INCREMENT at high frequency (20–50 Hz) or after exercise."},
    {cat:"MG vs LEMS", q:"How does each respond to anticholinesterases?", a:"Myasthenia responds well to pyridostigmine. LEMS responds poorly — 3,4-diaminopyridine is used instead."},
    {cat:"MG vs LEMS", q:"How does myasthenia respond to suxamethonium and non-depolarisers?", a:"RESISTANT to suxamethonium (a larger dose is needed) but EXQUISITELY SENSITIVE to non-depolarisers — reduce to 10–20% of the normal dose or avoid."},
    {cat:"MG vs LEMS", q:"How does LEMS respond to relaxants?", a:"Sensitive to BOTH depolarising and non-depolarising agents, with profound and unpredictable block."},

    {cat:"Crises", q:"What causes myasthenic versus cholinergic crisis?", a:"Myasthenic: undertreatment, or a trigger such as infection, surgery, pregnancy or a precipitating drug. Cholinergic: OVERtreatment with anticholinesterase, or organophosphate poisoning."},
    {cat:"Crises", q:"How do the pupils and secretions differ between the two crises?", a:"Myasthenic: pupils normal or dilated, secretions normal. Cholinergic: MIOSIS with profuse salivation, lacrimation and bronchorrhoea."},
    {cat:"Crises", q:"How do fasciculations and heart rate differ between the crises?", a:"Myasthenic: no fasciculations, tachycardia. Cholinergic: fasciculations present, BRADYCARDIA."},
    {cat:"Crises", q:"What does the edrophonium test show in each crisis?", a:"It IMPROVES myasthenic crisis and WORSENS cholinergic crisis."},
    {cat:"Crises", q:"List the muscarinic features of cholinergic excess.", a:"SLUDGE — salivation, lacrimation, urination, defecation, GI cramps, emesis — plus bradycardia, bronchorrhoea, bronchospasm and miosis. These are the features atropine reverses."},
    {cat:"Crises", q:"List the nicotinic features of cholinergic excess, and why atropine does not help.", a:"Fasciculations, cramps, then weakness and paralysis. Atropine has no effect on nicotinic receptors — hence ventilation is the priority and pralidoxime is needed in organophosphate poisoning."},
    {cat:"Crises", q:"What is the classic killer in cholinergic crisis?", a:"Bronchorrhoea with bronchospasm — patients effectively drown in secretions. Titrate atropine to drying of secretions, not to heart rate."},
    {cat:"Crises", q:"How is myasthenic crisis managed?", a:"Support ventilation, IVIG or plasma exchange, increase immunosuppression, and treat the trigger."},

    {cat:"MG anaesthesia", q:"What are the Osserman criteria used for?", a:"Predicting the need for postoperative ventilation in myasthenia: disease duration over 6 years, coexisting respiratory disease, pyridostigmine over 750 mg/day, and vital capacity under 2.9 L."},
    {cat:"MG anaesthesia", q:"What is the preferred anaesthetic approach in myasthenia?", a:"Regional or local where possible, using AMIDE local anaesthetics (esters rely on plasma cholinesterase, which anticholinesterases inhibit). If general anaesthesia is needed, favour TIVA with remifentanil and no relaxant, or volatile alone."},
    {cat:"MG anaesthesia", q:"Which drugs worsen weakness in myasthenia?", a:"Aminoglycosides, magnesium, beta blockers, quinolones and phenytoin."}
  ]
});
