window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "drug-lists",
  title: "Drug Lists",
  emoji: "📋",
  subtitle: "MH triggers · porphyria · protein binding · volume of distribution · enzyme induction",
  colors: {
    front1: "#7c2d12", front2: "#a21caf",
    back1: "#A7F3D0", back2: "#FDE68A", backText: "#1c1917",
    chips: ["#a21caf","#7c2d12","#A8123E","#0E7A66","#1B5FA8","#B4690E","#ff9a3d","#7bd88f"]
  },
  cards: [
    {cat:"MH", q:"What is the underlying defect in malignant hyperthermia?", a:"An abnormal ryanodine receptor (RYR1), causing uncontrolled calcium release from the sarcoplasmic reticulum. Inherited autosomal dominant."},
    {cat:"MH", q:"List the triggers of malignant hyperthermia.", a:"ALL volatile anaesthetic agents — halothane, isoflurane, sevoflurane, desflurane, enflurane — and suxamethonium. That is the complete list."},
    {cat:"MH", q:"Which anaesthetic drugs are SAFE in malignant hyperthermia?", a:"Nitrous oxide, propofol, thiopentone, etomidate, ketamine, all opioids, benzodiazepines, all non-depolarising relaxants, local anaesthetics, neostigmine and atropine."},
    {cat:"MH", q:"What is the immediate management of malignant hyperthermia?", a:"Stop the trigger, call for help, hyperventilate with 100% oxygen at high flows, change to a vapour-free circuit and machine, and finish or abandon surgery quickly."},
    {cat:"MH", q:"State the dantrolene dose and mechanism.", a:"2.5 mg/kg IV, repeated as needed up to about 10 mg/kg. It acts on the ryanodine receptor to reduce sarcoplasmic calcium release."},
    {cat:"MH", q:"What complications must be treated in malignant hyperthermia?", a:"Hyperthermia (active cooling), hyperkalaemia, arrhythmias, metabolic acidosis, myoglobinuria and renal failure, and DIC. Monitor core temperature, ABGs, CK and urine output."},
    {cat:"MH", q:"What is the gold standard diagnostic test for MH susceptibility?", a:"The in-vitro contracture test on a muscle biopsy."},

    {cat:"Porphyria", q:"What is the mechanism by which drugs precipitate an acute porphyric attack?", a:"They INDUCE ALA synthase, driving the haem synthesis pathway upstream of the enzyme block and accumulating porphyrin precursors."},
    {cat:"Porphyria", q:"Which induction agents are unsafe and which are safe in porphyria?", a:"UNSAFE: barbiturates (thiopentone) — the classic trigger — and etomidate. SAFE: propofol and ketamine."},
    {cat:"Porphyria", q:"Name unsafe drugs in acute porphyria beyond the induction agents.", a:"Amiodarone, phenytoin, carbamazepine, sodium valproate, sulphonamides, erythromycin, rifampicin, diclofenac, ranitidine, prilocaine, ropivacaine, clonidine, nifedipine, pentazocine, oral contraceptives and alcohol."},
    {cat:"Porphyria", q:"Which local anaesthetic should you choose in porphyria?", a:"Bupivacaine — consistently listed as safe. Prilocaine and ropivacaine are listed as porphyrinogenic."},
    {cat:"Porphyria", q:"Which relaxants and analgesics are safe in porphyria?", a:"Suxamethonium and all non-depolarising relaxants; morphine, fentanyl and alfentanil; paracetamol and aspirin; neostigmine, atropine and glycopyrrolate."},
    {cat:"Porphyria", q:"How does an acute porphyric attack present?", a:"Abdominal pain, vomiting, neuropsychiatric features, seizures, autonomic instability and hyponatraemia."},
    {cat:"Porphyria", q:"How is an acute attack treated?", a:"Remove the trigger, carbohydrate loading, and haem arginate. Treat pain, seizures and hyponatraemia supportively."},

    {cat:"Protein binding", q:"Which plasma proteins bind acidic and basic drugs?", a:"Albumin binds acidic drugs; alpha-1 acid glycoprotein binds basic drugs."},
    {cat:"Protein binding", q:"Which drug has the highest protein binding, and what is it?", a:"Warfarin, at about 99%. A tiny change in binding produces a large change in free drug — the basis of many interactions."},
    {cat:"Protein binding", q:"Give the approximate protein binding of propofol, diazepam and bupivacaine.", a:"All are very high: propofol about 98%, diazepam about 99%, bupivacaine about 95%."},
    {cat:"Protein binding", q:"Give the approximate protein binding of fentanyl and thiopentone.", a:"Both about 80%."},
    {cat:"Protein binding", q:"Give the approximate protein binding of lidocaine and morphine.", a:"Lidocaine about 65%; morphine is the lowest of the common agents at about 30–35%."},
    {cat:"Protein binding", q:"Why does high protein binding prolong the duration of bupivacaine?", a:"Duration of local anaesthetic action correlates with the degree of protein binding — bound drug acts as a depot at the site."},
    {cat:"Protein binding", q:"In which states does the free drug fraction rise?", a:"Hypoalbuminaemia (liver disease, malnutrition, nephrotic syndrome, pregnancy, the elderly), uraemia, and displacement by another highly bound drug."},
    {cat:"Protein binding", q:"How does surgery affect alpha-1 acid glycoprotein and basic drugs?", a:"It is an acute phase protein that RISES after surgery, trauma and in malignancy — so basic drugs such as local anaesthetics become more bound and less free."},

    {cat:"Vd", q:"Define volume of distribution.", a:"Vd = amount of drug in the body divided by plasma concentration. It is an APPARENT volume, not a real anatomical one."},
    {cat:"Vd", q:"Which drug has the largest volume of distribution, and why?", a:"Digoxin, about 600 L — it is extensively bound to skeletal and cardiac muscle."},
    {cat:"Vd", q:"Give the approximate Vd of fentanyl, morphine and thiopentone.", a:"Fentanyl about 250–350 L, morphine about 200–250 L, thiopentone about 160 L — all large, reflecting high lipid solubility and tissue binding."},
    {cat:"Vd", q:"Give the approximate Vd of warfarin, atracurium, vecuronium and gentamicin.", a:"Warfarin about 8 L (nearly all albumin bound so it stays in plasma), atracurium 12 L, vecuronium 15 L, gentamicin 18 L (confined to ECF)."},
    {cat:"Vd", q:"What does Vd determine clinically?", a:"The LOADING dose: loading dose = target concentration × Vd. Clearance determines the maintenance dose."},
    {cat:"Vd", q:"How does Vd relate to half-life?", a:"t½ = 0.693 × Vd / clearance. A large Vd prolongs half-life even when clearance is normal."},
    {cat:"Vd", q:"Why should drugs with a small Vd be dosed on lean body weight?", a:"They are largely confined to extracellular fluid — aminoglycosides and non-depolarising relaxants are the examples. Their kinetics also change in oedema, ascites and pregnancy."},
    {cat:"Vd", q:"Why is a large Vd relevant in overdose?", a:"Dialysis and haemofiltration remove such drugs poorly, because most of the drug is in tissues rather than plasma."},

    {cat:"Enzymes", q:"Name the important cytochrome P450 enzyme INDUCERS.", a:"Rifampicin, phenytoin, carbamazepine, barbiturates, chronic alcohol and St John's wort."},
    {cat:"Enzymes", q:"Name the important cytochrome P450 enzyme INHIBITORS.", a:"Erythromycin, ciprofloxacin, cimetidine, omeprazole, grapefruit juice and acute alcohol."},
    {cat:"Enzymes", q:"How do the time courses of enzyme induction and inhibition differ?", a:"Induction requires new protein synthesis and takes days to weeks. Inhibition is rapid, often within hours."},
    {cat:"Enzymes", q:"Distinguish phase I and phase II metabolism.", a:"Phase I: oxidation, reduction and hydrolysis (mainly cytochrome P450), producing a reactive group. Phase II: conjugation — glucuronidation, sulphation, acetylation — giving a water-soluble excretable product."},
    {cat:"Enzymes", q:"Which genetic variations matter most in anaesthetic pharmacology?", a:"Plasma cholinesterase deficiency (suxamethonium apnoea, assessed by dibucaine number), malignant hyperthermia (RYR1), CYP2D6 polymorphism affecting codeine, and porphyria."},
    {cat:"Enzymes", q:"What does the dibucaine number measure and what are the values?", a:"The QUALITY of plasma cholinesterase, not the quantity. Normal about 80, heterozygous atypical 40–60, homozygous atypical about 20."}
  ]
});
