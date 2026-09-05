window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "antiarrhythmic-antimicrobial",
  title: "Antiarrhythmics & Antimicrobials",
  emoji: "⚡",
  subtitle: "Vaughan Williams · drugs by rhythm · amiodarone · digoxin · static vs cidal · antibiotic classes",
  colors: {
    front1: "#1e40af", front2: "#9d174d",
    back1: "#FEF08A", back2: "#A7F3D0", backText: "#1e293b",
    chips: ["#1e40af","#9d174d","#0E7A66","#B4690E","#7A3B9E","#ff6b9d","#ffd93d","#5ab0ff"]
  },
  cards: [
    {cat:"Vaughan Williams", q:"On what basis are antiarrhythmics classified?", a:"By MECHANISM, not by clinical use — which is why several drugs sit awkwardly and four important agents fall outside the classification entirely."},
    {cat:"Vaughan Williams", q:"What do class I antiarrhythmics do?", a:"Block fast sodium channels — reducing the rate of rise of phase 0 so conduction slows, and raising the depolarisation threshold. They are the membrane stabilisers."},
    {cat:"Vaughan Williams", q:"Describe class Ia agents.", a:"Moderate sodium block with additional potassium block, so they PROLONG action potential duration and QT. Quinidine, procainamide, disopyramide."},
    {cat:"Vaughan Williams", q:"Describe class Ib agents.", a:"Weak, fast-dissociating sodium block that SHORTENS action potential duration, selective for ischaemic or depolarised tissue. Lidocaine, mexiletine, phenytoin."},
    {cat:"Vaughan Williams", q:"Describe class Ic agents.", a:"Strong, slowly dissociating sodium block with little change in action potential duration but marked conduction slowing. Flecainide, propafenone."},
    {cat:"Vaughan Williams", q:"What do class II agents do?", a:"Beta blockers — they reduce the phase 4 slope in nodal tissue, lowering automaticity and slowing AV conduction. Metoprolol, bisoprolol, esmolol."},
    {cat:"Vaughan Williams", q:"What do class III agents do?", a:"Block outward potassium current, slowing repolarisation. This prolongs action potential duration, the refractory period and the QT interval. Amiodarone, sotalol, bretylium."},
    {cat:"Vaughan Williams", q:"What do class IV agents do?", a:"Block L-type calcium channels, reducing phase 0 in nodal tissue (which is calcium-dependent) and slowing spontaneous depolarisation and AV conduction. Verapamil, diltiazem."},
    {cat:"Vaughan Williams", q:"Which four important antiarrhythmics sit OUTSIDE the classification?", a:"Adenosine, digoxin, magnesium and atropine."},

    {cat:"Drugs by rhythm", q:"Which antiarrhythmics are used mainly for supraventricular arrhythmias?", a:"Adenosine, verapamil, digoxin and beta blockers."},
    {cat:"Drugs by rhythm", q:"Which antiarrhythmics work in BOTH supraventricular and ventricular arrhythmias?", a:"Amiodarone, disopyramide, flecainide, procainamide, propafenone, quinidine and sotalol."},
    {cat:"Drugs by rhythm", q:"Which antiarrhythmics are used mainly for ventricular arrhythmias?", a:"Lidocaine, mexiletine, bretylium, moricizine, phenytoin and tocainide."},
    {cat:"Drugs by rhythm", q:"Why must verapamil be avoided in a broad-complex tachycardia of uncertain origin?", a:"If the rhythm is VT, verapamil can cause catastrophic hypotension and cardiovascular collapse."},
    {cat:"Drugs by rhythm", q:"Which drugs must be avoided in atrial fibrillation with WPW, and why?", a:"AV nodal blockers — digoxin, verapamil, adenosine. Blocking the node promotes conduction down the accessory pathway, risking very rapid ventricular rates and VF."},
    {cat:"Drugs by rhythm", q:"What is the treatment of choice for torsades de pointes?", a:"Magnesium."},

    {cat:"Adenosine", q:"Describe adenosine's mechanism and half-life.", a:"Transient AV nodal block via A1 receptors. Half-life under 10 seconds."},
    {cat:"Adenosine", q:"Which drugs interact with adenosine?", a:"Dipyridamole potentiates it; theophylline antagonises it. It may cause bronchospasm, so use caution in asthma."},
    {cat:"Adenosine", q:"Why is adenosine diagnostic as well as therapeutic?", a:"It terminates re-entrant SVT and, by transiently blocking the AV node, unmasks the underlying rhythm in atrial flutter."},

    {cat:"Amiodarone", q:"Which class is amiodarone, and why is that incomplete?", a:"Nominally class III, but it has properties of all four classes."},
    {cat:"Amiodarone", q:"What is amiodarone's half-life and why does it matter?", a:"20 to 100 days, from extensive tissue distribution — so effects and interactions persist long after stopping."},
    {cat:"Amiodarone", q:"List the toxicities of amiodarone.", a:"Pulmonary fibrosis, thyroid dysfunction (both hyper- and hypo-, as it is iodine-rich), hepatitis, corneal microdeposits, slate-grey skin discoloration, photosensitivity and peripheral neuropathy."},
    {cat:"Amiodarone", q:"What are amiodarone's key drug interactions?", a:"It potentiates warfarin and digoxin — both need dose reduction."},
    {cat:"Amiodarone", q:"Why can amiodarone cause hypotension on IV administration?", a:"Rapid injection causes vasodilation, partly from the drug and partly from the solvent. Give slowly and centrally where possible — it irritates peripheral veins."},
    {cat:"Amiodarone", q:"What is the amiodarone dose in cardiac arrest?", a:"300 mg after the third shock in a shockable rhythm."},

    {cat:"Digoxin", q:"What is digoxin's mechanism of action?", a:"Inhibits the Na+/K+ ATPase, raising intracellular sodium and hence calcium via the Na/Ca exchanger. It is also strongly vagotonic at the AV node."},
    {cat:"Digoxin", q:"What precipitates digoxin toxicity?", a:"Hypokalaemia (the main one), hypercalcaemia, hypomagnesaemia, renal impairment, old age, and amiodarone."},
    {cat:"Digoxin", q:"What are the features of digoxin toxicity?", a:"Nausea and vomiting, confusion, xanthopsia (yellow-green vision), and arrhythmias — classically bradycardia with ectopics, or atrial tachycardia with block."},
    {cat:"Digoxin", q:"Is reverse-tick ST depression a sign of digoxin toxicity?", a:"No — it is a sign of digoxin EFFECT, seen at therapeutic levels."},
    {cat:"Digoxin", q:"How is significant digoxin toxicity treated?", a:"Correct electrolytes, and give digoxin-specific antibody fragments."},

    {cat:"Static vs cidal", q:"What is the difference between bacteriostatic and bactericidal agents?", a:"Static agents stop bacteria multiplying and rely on host immunity to clear them. Cidal agents kill outright — preferred in endocarditis, meningitis, neutropenia and deep-seated infection."},
    {cat:"Static vs cidal", q:"Name the main bacteriostatic antibiotics.", a:"Macrolides (erythromycin, azithromycin, clarithromycin), tetracyclines, sulphonamides, trimethoprim, clindamycin, linezolid and chloramphenicol."},
    {cat:"Static vs cidal", q:"Name the main bactericidal antibiotics.", a:"Beta-lactams (penicillins, cephalosporins, carbapenems), aminoglycosides, glycopeptides (vancomycin), fluoroquinolones, metronidazole, co-trimoxazole, isoniazid and rifampicin."},
    {cat:"Static vs cidal", q:"Why is co-trimoxazole bactericidal when its components are not?", a:"Sulphamethoxazole and trimethoprim are each bacteriostatic alone, but sequential blockade of the same folate pathway makes the combination bactericidal."},

    {cat:"Antibiotic classes", q:"Which antibiotics inhibit cell wall synthesis?", a:"Beta-lactams — penicillins, cephalosporins, carbapenems and monobactams — which inhibit transpeptidase/penicillin-binding proteins; and glycopeptides such as vancomycin, which bind D-ala-D-ala."},
    {cat:"Antibiotic classes", q:"Which antibiotics act on the 30S ribosomal subunit?", a:"Aminoglycosides and tetracyclines."},
    {cat:"Antibiotic classes", q:"Which antibiotics act on the 50S ribosomal subunit?", a:"Macrolides, clindamycin, linezolid and chloramphenicol. Mnemonic: buy AT 30, CCELL at 50."},
    {cat:"Antibiotic classes", q:"Which antibiotics act on nucleic acid or DNA?", a:"Fluoroquinolones inhibit DNA gyrase; rifampicin inhibits RNA polymerase; metronidazole causes DNA strand breaks in anaerobes."},
    {cat:"Antibiotic classes", q:"Which antibiotics act on the folate pathway?", a:"Sulphonamides inhibit dihydropteroate synthase; trimethoprim inhibits dihydrofolate reductase."},

    {cat:"Antibiotics: applied", q:"Which antibiotics potentiate neuromuscular blockade?", a:"Aminoglycosides principally (gentamicin, kanamycin, neomycin, streptomycin), and to a lesser degree polymyxins, clindamycin and tetracyclines. Magnesium acts by the same presynaptic mechanism and is additive."},
    {cat:"Antibiotics: applied", q:"What are the toxicities of aminoglycosides?", a:"Nephrotoxicity and ototoxicity, both cochlear and vestibular and potentially irreversible. They show concentration-dependent killing with a post-antibiotic effect — hence once-daily dosing with trough monitoring."},
    {cat:"Antibiotics: applied", q:"Is red man syndrome an allergy?", a:"No — it is direct histamine release caused by rapid vancomycin infusion. Slow the infusion rather than abandoning the drug."},
    {cat:"Antibiotics: applied", q:"Which antibiotics prolong the QT interval?", a:"Macrolides and fluoroquinolones."},
    {cat:"Antibiotics: applied", q:"What are the enzyme effects of rifampicin and erythromycin?", a:"Rifampicin is a potent enzyme INDUCER (reduces warfarin, steroid and contraceptive efficacy; colours secretions orange). Erythromycin is a potent enzyme INHIBITOR."},
    {cat:"Antibiotics: applied", q:"When should surgical antibiotic prophylaxis be given?", a:"Within 60 minutes before incision, or 120 minutes for vancomycin and fluoroquinolones which need longer infusions. Redose for prolonged surgery or major blood loss."},
    {cat:"Antibiotics: applied", q:"Where do antibiotics rank as a cause of perioperative anaphylaxis?", a:"Second, after neuromuscular blocking drugs — with teicoplanin and co-amoxiclav prominent."},
    {cat:"Antibiotics: applied", q:"Which antifungal facts are commonly examined?", a:"Candida krusei is intrinsically resistant to fluconazole (and C. glabrata often is). Voriconazole is first line for invasive aspergillosis, with liposomal amphotericin B as an alternative."},
    {cat:"Antibiotics: applied", q:"What reaction does metronidazole cause with alcohol?", a:"A disulfiram-like reaction."}
  ]
});
