window.DECKS = window.DECKS || [];
// Grouped card shape: { cat, stem, opts:[5], ans:[5] }
window.DECKS.push({
  id: "exam-pharmacology",
  title: "Exam MCQ · Pharmacology",
  emoji: "💊",
  subtitle: "True/false, exam format · 60 questions × 5 stems = 300 marks",
  colors: {
    front1: "#1b1233", front2: "#7A3B9E",
    back1: "#F7F3FF", back2: "#EDE4FB", backText: "#221338",
    chips: ["#7A3B9E","#4338ca","#0E7A66","#B4690E","#A8123E","#0369a1","#1b1233","#be123c"]
  },
  cards: [
    {
      cat: "Principles",
      stem: "Regarding pharmacokinetic principles:",
      opts: [
        "Volume of distribution is the dose divided by the plasma concentration at time zero",
        "A drug with a large volume of distribution is highly lipid soluble",
        "Clearance is the volume of plasma cleared of drug per unit time",
        "Elimination half-life equals 0.693 × Vd / clearance",
        "First-order kinetics means a constant amount is eliminated per unit time"
      ],
      ans: [
        "TRUE. It is an apparent volume — it need not correspond to any real body compartment.",
        "TRUE. Or extensively tissue bound. Amiodarone, with a Vd of about 5000 L, is the classic example.",
        "TRUE. Units of volume per time; the sum of hepatic, renal and other routes.",
        "TRUE. Which is why half-life alone is not a measure of elimination capacity — it depends on both terms.",
        "FALSE. First order eliminates a constant FRACTION per unit time. A constant AMOUNT per unit time is ZERO order — ethanol, phenytoin at high dose, and salicylate in overdose."
      ]
    },
    {
      cat: "Principles",
      stem: "Concerning drug absorption and bioavailability:",
      opts: [
        "Bioavailability of an intravenous drug is by definition 1",
        "First-pass metabolism reduces oral bioavailability",
        "Sublingual administration avoids the portal circulation",
        "Weak acids are better absorbed from the stomach than the small intestine",
        "Bioavailability is calculated from the ratio of areas under the concentration–time curves"
      ],
      ans: [
        "TRUE. All of the dose reaches the systemic circulation.",
        "TRUE. Gut wall and hepatic metabolism — extensive for propranolol, morphine, GTN, lidocaine and midazolam.",
        "TRUE. Draining to the superior vena cava, as does the lower rectum in part.",
        "FALSE. Although weak acids are un-ionised in the stomach, the small intestine's enormous surface area means most absorption occurs there regardless.",
        "TRUE. F = AUC(oral) / AUC(IV) for the same dose."
      ]
    },
    {
      cat: "Principles",
      stem: "Drug metabolism:",
      opts: [
        "Phase I reactions include oxidation, reduction and hydrolysis",
        "Phase II reactions are conjugation reactions increasing water solubility",
        "Cytochrome P450 3A4 is the most abundant hepatic isoform",
        "All metabolites are pharmacologically inactive",
        "Hofmann elimination is temperature and pH dependent"
      ],
      ans: [
        "TRUE. Usually cytochrome P450 mediated, exposing or adding a functional group.",
        "TRUE. Glucuronidation, sulphation, acetylation, methylation and glutathione conjugation.",
        "TRUE. Responsible for the metabolism of a large share of clinical drugs — hence the many interactions.",
        "FALSE. Many are active — morphine-6-glucuronide, desmethyldiazepam, norpethidine — and some are toxic, such as NAPQI from paracetamol.",
        "TRUE. Spontaneous non-enzymatic degradation, faster with alkalosis and warmth — the route for atracurium and cisatracurium."
      ]
    },
    {
      cat: "Principles",
      stem: "Pharmacodynamics:",
      opts: [
        "An agonist has both affinity and intrinsic efficacy",
        "A competitive antagonist shifts the dose–response curve to the right without reducing the maximum",
        "A partial agonist can act as an antagonist in the presence of a full agonist",
        "EC50 is the concentration producing 50% of the maximal response",
        "The therapeutic index is the ratio LD50 / ED50"
      ],
      ans: [
        "TRUE. Affinity is binding; efficacy is the ability to produce a response.",
        "TRUE. And the shift is surmountable by increasing agonist concentration.",
        "TRUE. Buprenorphine at the mu receptor is the standard example.",
        "TRUE. A measure of potency; the maximal response is a measure of efficacy.",
        "TRUE. A larger index means a safer drug; digoxin, lithium and theophylline have narrow indices."
      ]
    },
    {
      cat: "Principles",
      stem: "Drug binding and ionisation:",
      opts: [
        "Acidic drugs bind mainly to albumin",
        "Basic drugs bind mainly to alpha-1 acid glycoprotein",
        "The Henderson–Hasselbalch equation predicts that a weak base is more ionised at low pH",
        "Only unbound drug is pharmacologically active",
        "Hypoalbuminaemia increases the free fraction of phenytoin"
      ],
      ans: [
        "TRUE. Warfarin, phenytoin, aspirin and thiopentone.",
        "TRUE. Local anaesthetics, opioids and beta blockers — and AAG rises as an acute phase protein, which alters free fraction in illness.",
        "TRUE. A base accepts a proton, so acidity ionises it — the basis of ion trapping of local anaesthetic in infected or acidic tissue and in the fetus.",
        "TRUE. Which is why total plasma concentrations mislead in hypoalbuminaemia.",
        "TRUE. So a total level may look therapeutic while the free level is toxic — measure free phenytoin or correct for albumin."
      ]
    },
    {
      cat: "IV induction",
      stem: "Propofol:",
      opts: [
        "It acts principally by potentiating GABA-A receptor chloride conductance",
        "It is presented as a 1% emulsion in soya bean oil and egg phosphatide",
        "It reduces cerebral metabolic rate, cerebral blood flow and intracranial pressure",
        "It reliably causes a rise in heart rate on induction",
        "Context-sensitive half-time rises steeply after a 4-hour infusion"
      ],
      ans: [
        "TRUE. At a site distinct from the benzodiazepine site.",
        "TRUE. Egg allergy to the yolk protein is generally not a contraindication, since the lecithin is from the egg white fraction — but check the history.",
        "TRUE. Which makes it attractive in neuroanaesthesia; it also reduces cerebral perfusion pressure if hypotension is allowed.",
        "FALSE. Propofol blunts the baroreflex, so hypotension is typically NOT accompanied by a compensatory tachycardia — bradycardia can occur.",
        "FALSE. Propofol's context-sensitive half-time rises only modestly and plateaus at around 40 minutes even after prolonged infusion — the reason TIVA is practicable."
      ]
    },
    {
      cat: "IV induction",
      stem: "Thiopentone:",
      opts: [
        "It is a thiobarbiturate presented as a sodium salt at pH about 10.5",
        "Recovery from a single dose is due to redistribution",
        "It is contraindicated in acute intermittent porphyria",
        "Intra-arterial injection causes crystallisation and severe vasospasm",
        "It exhibits first-order kinetics at all clinical doses"
      ],
      ans: [
        "TRUE. With 6% sodium carbonate; the high pH accounts for its incompatibility with acidic drugs.",
        "TRUE. Not metabolism — the elimination half-life is 6–12 hours, so repeat doses accumulate.",
        "TRUE. It induces ALA synthase and can precipitate a crisis. Propofol is safe; so are the volatiles.",
        "TRUE. Treat with dilution, an intra-arterial vasodilator such as papaverine, a sympathetic block and heparinisation.",
        "FALSE. It shows zero-order kinetics at high doses — relevant in barbiturate coma."
      ]
    },
    {
      cat: "IV induction",
      stem: "Ketamine:",
      opts: [
        "It is a non-competitive NMDA receptor antagonist",
        "The S(+) enantiomer is more potent than the R(−) form",
        "It reliably preserves airway reflexes so aspiration cannot occur",
        "It increases cerebral metabolic rate and blood flow",
        "It causes bronchodilatation"
      ],
      ans: [
        "TRUE. It also has actions at opioid, monoaminergic and muscarinic receptors.",
        "TRUE. About twice as potent, with less emergence phenomena — hence esketamine.",
        "FALSE. Reflexes are relatively preserved, not reliably so. Aspiration remains possible and airway protection is not guaranteed.",
        "TRUE. Traditionally a caution in raised ICP, though the picture is more nuanced when ventilation is controlled.",
        "TRUE. Useful in severe asthma; it also produces sympathetically mediated tachycardia and hypertension, and increased secretions."
      ]
    },
    {
      cat: "IV induction",
      stem: "Etomidate:",
      opts: [
        "It causes marked cardiovascular depression at induction dose",
        "It inhibits 11-beta-hydroxylase",
        "It has a high incidence of pain on injection and myoclonus",
        "It is metabolised by plasma esterases and hepatic enzymes",
        "It reduces the seizure threshold"
      ],
      ans: [
        "FALSE. Its selling point is cardiovascular STABILITY — minimal change in heart rate, blood pressure or output.",
        "TRUE. Adrenocortical suppression for 24 hours or more after a single dose; infusions are prohibited.",
        "TRUE. Reduced by a large vein, lipid formulation, and prior opioid or benzodiazepine.",
        "TRUE. With a short elimination half-life.",
        "TRUE. It can provoke epileptiform activity and is used deliberately to map foci, but is a caution in epilepsy."
      ]
    },
    {
      cat: "IV induction",
      stem: "Benzodiazepines:",
      opts: [
        "They bind to a site on the GABA-A receptor and increase the frequency of channel opening",
        "Midazolam is water soluble at low pH and becomes lipid soluble at body pH",
        "Flumazenil is a competitive antagonist with a longer half-life than midazolam",
        "They cause anterograde amnesia",
        "Diazepam has active metabolites"
      ],
      ans: [
        "TRUE. Barbiturates by contrast increase the DURATION of opening.",
        "TRUE. The imidazole ring closes above pH 4 — which is why it does not sting yet crosses the blood–brain barrier rapidly.",
        "FALSE. Flumazenil has a SHORTER half-life (about 1 hour), so resedation is a real risk and repeat dosing or an infusion may be needed.",
        "TRUE. Retrograde amnesia is not produced.",
        "TRUE. Desmethyldiazepam and oxazepam, giving a prolonged effect especially in the elderly."
      ]
    },
    {
      cat: "Volatiles",
      stem: "Minimum alveolar concentration (MAC):",
      opts: [
        "MAC is the alveolar concentration preventing movement in 50% of subjects to a standard stimulus",
        "MAC is reduced by hypothermia",
        "MAC is increased in pregnancy",
        "MAC values of different agents are additive",
        "MAC awake is approximately one-third of MAC"
      ],
      ans: [
        "TRUE. At one atmosphere and at steady state.",
        "TRUE. By roughly 5% per degree Celsius. Also reduced by age, opioids, alpha-2 agonists, hypotension, hyponatraemia and acute alcohol.",
        "FALSE. MAC FALLS by about 30–40% in pregnancy. It rises with chronic alcohol use, hyperthermia, hypernatraemia and sympathomimetics.",
        "TRUE. 0.5 MAC nitrous oxide plus 0.5 MAC sevoflurane approximates 1 MAC.",
        "TRUE. About 0.3–0.4 MAC — the concentration at which half of subjects respond to command."
      ]
    },
    {
      cat: "Volatiles",
      stem: "Physical properties of volatile agents:",
      opts: [
        "A low blood:gas partition coefficient gives faster onset",
        "Desflurane has a blood:gas coefficient of about 0.42",
        "Sevoflurane has a boiling point close to room temperature and needs a heated vaporiser",
        "The oil:gas partition coefficient correlates with potency",
        "Nitrous oxide has a MAC of 105%"
      ],
      ans: [
        "TRUE. Less agent is taken up by blood, so alveolar partial pressure rises quickly.",
        "TRUE. The lowest of the potent agents, giving the fastest onset and offset. Sevoflurane is about 0.69, isoflurane 1.4.",
        "FALSE. That is DESFLURANE, boiling at 22.8 °C, needing a heated pressurised vaporiser. Sevoflurane boils at about 58 °C.",
        "TRUE. The Meyer–Overton correlation — high oil solubility means low MAC.",
        "TRUE. Which is why it cannot be a sole anaesthetic at atmospheric pressure."
      ]
    },
    {
      cat: "Volatiles",
      stem: "Adverse effects of inhalational agents:",
      opts: [
        "Sevoflurane degrades to compound A in the presence of soda lime",
        "Desflurane causes airway irritation and is unsuitable for inhalational induction",
        "Halothane hepatitis is an immune reaction to trifluoroacetylated hepatic proteins",
        "All volatile agents are triggers for malignant hyperthermia",
        "Isoflurane produces dose-dependent uterine relaxation"
      ],
      ans: [
        "TRUE. Nephrotoxic in rats; clinical significance in humans is not established, but low-flow limits persist in some jurisdictions.",
        "TRUE. Coughing, breath-holding and laryngospasm; it also causes sympathetic stimulation with rapid concentration increases.",
        "TRUE. Repeat exposure within a short interval is the major risk factor.",
        "TRUE. Along with suxamethonium. Safe agents are propofol, nitrous oxide, opioids, benzodiazepines, non-depolarising blockers and local anaesthetics.",
        "TRUE. As do all volatiles — a consideration at caesarean section and in retained placenta, where it is used deliberately."
      ]
    },
    {
      cat: "Opioids",
      stem: "Morphine:",
      opts: [
        "It is metabolised to morphine-6-glucuronide, which is an active analgesic",
        "Morphine-3-glucuronide is a potent analgesic",
        "Its metabolites accumulate in renal failure",
        "It causes histamine release",
        "Its pKa means only a small fraction is un-ionised at physiological pH"
      ],
      ans: [
        "TRUE. More potent than morphine itself at the mu receptor.",
        "FALSE. M3G is NOT analgesic — it is associated with neuroexcitation, hyperalgesia and myoclonus.",
        "TRUE. Which is why morphine is a poor choice in renal impairment; oxycodone or fentanyl are preferred.",
        "TRUE. Direct, non-immunological mast cell degranulation, causing itch, flushing and hypotension. Fentanyl does not.",
        "TRUE. pKa about 8.0, and it is relatively hydrophilic — hence its slow onset and its prolonged rostral spread when given intrathecally."
      ]
    },
    {
      cat: "Opioids",
      stem: "Remifentanil:",
      opts: [
        "It is metabolised by non-specific plasma and tissue esterases",
        "Its context-sensitive half-time is about 3–4 minutes regardless of infusion duration",
        "It is safe to use in plasma cholinesterase deficiency",
        "It causes bradycardia and hypotension",
        "The commercial preparation contains glycine and may be given intrathecally"
      ],
      ans: [
        "TRUE. Not by plasma cholinesterase — an important distinction.",
        "TRUE. The defining property; but it means there is no residual analgesia, so a longer-acting agent must be given before emergence.",
        "TRUE. Because it is not a substrate for that enzyme. Mivacurium and suxamethonium are.",
        "TRUE. Dose-related, and marked with bolus administration; muscle rigidity is also seen.",
        "FALSE. It contains glycine, which is an inhibitory neurotransmitter in the cord — so neuraxial administration is CONTRAINDICATED."
      ]
    },
    {
      cat: "Opioids",
      stem: "Opioid receptors and effects:",
      opts: [
        "Mu receptors are G-protein coupled and reduce cAMP",
        "Opioid analgesia involves closing of potassium channels",
        "Respiratory depression is mediated principally at mu receptors",
        "Miosis results from stimulation of the Edinger–Westphal nucleus",
        "Tolerance to constipation develops readily"
      ],
      ans: [
        "TRUE. Gi/Go coupling, with reduced adenylyl cyclase activity.",
        "FALSE. Opioids OPEN potassium channels (hyperpolarising postsynaptically) and CLOSE voltage-gated calcium channels (reducing presynaptic transmitter release).",
        "TRUE. A reduced ventilatory response to CO₂ with a rightward-shifted, flattened response curve.",
        "TRUE. A useful clinical sign; it does not show tolerance.",
        "FALSE. Tolerance to constipation and to miosis develops poorly or not at all, unlike tolerance to analgesia, euphoria and respiratory depression."
      ]
    },
    {
      cat: "Opioids",
      stem: "Comparing opioids:",
      opts: [
        "Fentanyl is about 100 times as potent as morphine",
        "Pethidine has an active metabolite that is proconvulsant",
        "Alfentanil has a lower pKa than fentanyl and therefore a faster onset",
        "Codeine is a prodrug requiring CYP2D6 for conversion to morphine",
        "Tramadol acts only at opioid receptors"
      ],
      ans: [
        "TRUE. And more lipid soluble, with a rapid onset and offset after a single dose.",
        "TRUE. Norpethidine, which accumulates in renal failure. Pethidine also has anticholinergic and local anaesthetic actions and interacts dangerously with MAOIs.",
        "TRUE. pKa 6.5, so about 90% un-ionised at pH 7.4 versus about 9% for fentanyl — onset in about 1 minute despite lower lipid solubility.",
        "TRUE. Poor metabolisers get no analgesia; ultrarapid metabolisers risk toxicity — the reason it is avoided in children and in breastfeeding.",
        "FALSE. It is a weak mu agonist that also inhibits noradrenaline and serotonin reuptake — hence seizure risk and serotonin syndrome."
      ]
    },
    {
      cat: "Muscle relaxants",
      stem: "Suxamethonium:",
      opts: [
        "It is two acetylcholine molecules joined by their acetyl groups",
        "It produces fasciculations followed by a phase I depolarising block",
        "It typically raises serum potassium by 0.5 mmol/L in a healthy patient",
        "Its block shows fade on train-of-four stimulation at normal doses",
        "It is metabolised at the neuromuscular junction by acetylcholinesterase"
      ],
      ans: [
        "TRUE. Which explains its agonist action at the nicotinic receptor and its muscarinic side effects.",
        "TRUE. Sustained depolarisation preventing repolarisation — onset in 30–60 seconds, duration 3–5 minutes.",
        "TRUE. Far greater in burns after about 24 hours, denervation, prolonged immobility, crush injury and pre-existing myopathy.",
        "FALSE. Phase I block shows NO fade and no post-tetanic facilitation. Fade appears only with a phase II block after repeated or large doses.",
        "FALSE. It is hydrolysed in PLASMA by butyrylcholinesterase, and never reaches the junction in large amounts. Its offset is by diffusion away from the junction."
      ]
    },
    {
      cat: "Muscle relaxants",
      stem: "Suxamethonium apnoea and plasma cholinesterase:",
      opts: [
        "The dibucaine number reflects the quality of the enzyme, not its quantity",
        "A normal homozygote has a dibucaine number of about 80",
        "Homozygous atypical patients may be apnoeic for several hours",
        "Pregnancy, liver disease and cardiopulmonary bypass reduce enzyme activity",
        "Management is with neostigmine to reverse the block"
      ],
      ans: [
        "TRUE. Dibucaine inhibits normal enzyme far more than atypical enzyme.",
        "TRUE. Heterozygotes about 40–60, homozygous atypical about 20.",
        "TRUE. Typically 2–4 hours or longer, versus a few extra minutes for heterozygotes.",
        "TRUE. As do renal failure, malnutrition, and drugs such as metoclopramide, esmolol and ecothiopate.",
        "FALSE. Never — the treatment is continued sedation and ventilation until the block resolves, then family testing and a warning card."
      ]
    },
    {
      cat: "Muscle relaxants",
      stem: "Non-depolarising neuromuscular blockers:",
      opts: [
        "They are competitive antagonists at the postjunctional nicotinic receptor",
        "Rocuronium at 1.2 mg/kg gives intubating conditions in about 60 seconds",
        "Atracurium is a mixture of ten stereoisomers and undergoes Hofmann elimination",
        "Laudanosine accumulation is a major clinical problem with cisatracurium",
        "Aminosteroid relaxants are prolonged by hypothermia, acidosis and hypokalaemia"
      ],
      ans: [
        "TRUE. Producing fade on train-of-four and tetany, and post-tetanic facilitation.",
        "TRUE. Comparable with suxamethonium for rapid sequence induction, with sugammadex available for rescue.",
        "TRUE. About 45% Hofmann and the rest ester hydrolysis; it causes histamine release at speed.",
        "FALSE. Cisatracurium is about four times as potent, so far less laudanosine is produced. Even with atracurium, clinical seizures are essentially theoretical.",
        "TRUE. Also by magnesium, aminoglycosides, lithium, volatiles and local anaesthetics."
      ]
    }
    ,
    {
      cat: "Muscle relaxants",
      stem: "Reversal of neuromuscular blockade:",
      opts: [
        "Neostigmine inhibits acetylcholinesterase and has a quaternary structure",
        "Neostigmine can reverse a deep block reliably",
        "Sugammadex encapsulates rocuronium in a 1:1 complex",
        "Sugammadex is effective against benzylisoquinolinium relaxants",
        "Glycopyrrolate is preferred to atropine with neostigmine because it does not cross the blood–brain barrier"
      ],
      ans: [
        "TRUE. So it does not cross the blood–brain barrier, unlike physostigmine.",
        "FALSE. It has a ceiling effect — at least some spontaneous recovery (ideally TOF count of 2–4) is needed, or reversal will be inadequate.",
        "TRUE. A modified gamma-cyclodextrin; 16 mg/kg reverses a profound block within about 3 minutes.",
        "FALSE. It works on AMINOSTEROIDS — rocuronium best, then vecuronium, poorly for pancuronium. It has no effect on atracurium or cisatracurium.",
        "TRUE. And its slower onset and longer duration match neostigmine better than atropine does."
      ]
    },
    {
      cat: "Local anaesthetics",
      stem: "Mechanism and structure of local anaesthetics:",
      opts: [
        "They block voltage-gated sodium channels from the intracellular side",
        "The un-ionised form crosses the nerve membrane",
        "Amide local anaesthetics contain two 'i's in their name",
        "Onset of action is determined chiefly by pKa",
        "Potency correlates with lipid solubility"
      ],
      ans: [
        "TRUE. Binding preferentially to the open and inactivated states — use-dependent block.",
        "TRUE. Then it re-ionises inside to act — which is why acidic infected tissue blocks poorly.",
        "TRUE. Lidocaine, bupivacaine, prilocaine, ropivacaine. Esters have one — cocaine, procaine, amethocaine, chloroprocaine.",
        "TRUE. The closer the pKa is to 7.4, the greater the un-ionised fraction and the faster the onset.",
        "TRUE. And duration correlates with protein binding."
      ]
    },
    {
      cat: "Local anaesthetics",
      stem: "Local anaesthetic systemic toxicity:",
      opts: [
        "Maximum safe dose of lidocaine with adrenaline is 7 mg/kg",
        "Early features include perioral tingling, tinnitus and light-headedness",
        "Bupivacaine cardiotoxicity is more refractory than that of lidocaine",
        "Levobupivacaine and ropivacaine are less cardiotoxic than racemic bupivacaine",
        "Intralipid 20% is given at an initial bolus of 1.5 ml/kg"
      ],
      ans: [
        "TRUE. 3 mg/kg plain. Bupivacaine 2 mg/kg (adrenaline makes little difference to the accepted figure); prilocaine 6 mg/kg, or 8–9 with adrenaline.",
        "TRUE. Then confusion, twitching and seizures, followed by CNS depression and cardiovascular collapse.",
        "TRUE. It binds fast and dissociates slowly from cardiac sodium channels — fast in, slow out — causing refractory re-entrant arrhythmia.",
        "TRUE. The S-enantiomers have less affinity for cardiac sodium channels.",
        "TRUE. Then an infusion, with repeat boluses; maximum about 12 ml/kg. Stop injecting, secure the airway, treat seizures and start ALS with prolonged resuscitation."
      ]
    },
    {
      cat: "Local anaesthetics",
      stem: "Individual local anaesthetics:",
      opts: [
        "Prilocaine can cause methaemoglobinaemia",
        "Cocaine is a vasoconstrictor",
        "Ester local anaesthetics are metabolised by plasma cholinesterase to para-aminobenzoic acid",
        "Adrenaline added to a local anaesthetic prolongs its action by vasoconstriction",
        "Chloroprocaine has a long duration of action"
      ],
      ans: [
        "TRUE. Via its metabolite o-toluidine — treat with methylene blue 1–2 mg/kg. It is the agent of choice for intravenous regional anaesthesia.",
        "TRUE. Uniquely — by blocking noradrenaline reuptake. Hence its use in nasal surgery, and its arrhythmogenic and hypertensive risk.",
        "TRUE. Which explains the higher allergy rate of esters. True amide allergy is rare and often due to the preservative.",
        "TRUE. And reduces peak plasma concentration and bleeding. Avoid in end-arterial territory and with severe cardiovascular disease.",
        "FALSE. Chloroprocaine is very rapidly hydrolysed, giving a SHORT duration — which is why it suits short day-case spinals."
      ]
    },
    {
      cat: "Cardiovascular",
      stem: "Inotropes and vasopressors:",
      opts: [
        "Noradrenaline acts predominantly at alpha-1 receptors",
        "Dobutamine is a beta-1 agonist with some beta-2 activity",
        "Adrenaline at low dose has predominantly beta effects",
        "Vasopressin acts on V1 receptors to cause vasoconstriction",
        "Milrinone increases contractility by inhibiting phosphodiesterase III"
      ],
      ans: [
        "TRUE. With modest beta-1 activity; it raises SVR and blood pressure, often with a reflex bradycardia.",
        "TRUE. Increasing contractility and causing mild vasodilatation — so pressure may fall.",
        "TRUE. Tachycardia and vasodilatation predominate; alpha effects dominate at higher doses.",
        "TRUE. Useful in catecholamine-resistant vasoplegia and in septic shock as an adjunct.",
        "TRUE. Raising cAMP — an 'inodilator' independent of the beta receptor, useful with chronic beta blockade, but with a long half-life and vasodilatation."
      ]
    },
    {
      cat: "Cardiovascular",
      stem: "Antiarrhythmic drugs (Vaughan Williams classification):",
      opts: [
        "Class I drugs are sodium channel blockers",
        "Amiodarone is a pure class III agent",
        "Adenosine acts at A1 receptors to block the AV node",
        "Digoxin inhibits the Na⁺/K⁺-ATPase",
        "Verapamil is a class IV agent and is safe in ventricular tachycardia"
      ],
      ans: [
        "TRUE. Ia lengthens the action potential (quinidine, disopyramide), Ib shortens it (lidocaine), Ic has little effect on it (flecainide).",
        "FALSE. It has activity in all four classes — sodium and calcium channel blockade, beta blockade and potassium channel blockade.",
        "TRUE. Half-life of a few seconds; contraindicated in asthma and potentiated by dipyridamole, antagonised by theophylline.",
        "TRUE. Raising intracellular sodium and so calcium via the Na⁺/Ca²⁺ exchanger; it also increases vagal tone, which is its main rate-controlling action.",
        "FALSE. Verapamil in VT can cause catastrophic hypotension and arrest. It must not be given to a broad complex tachycardia of uncertain origin."
      ]
    },
    {
      cat: "Cardiovascular",
      stem: "Amiodarone toxicity:",
      opts: [
        "It causes pulmonary fibrosis",
        "It contains iodine and can cause thyroid dysfunction",
        "It has a half-life of about 8 hours",
        "It causes corneal microdeposits and photosensitivity",
        "It increases plasma digoxin concentration"
      ],
      ans: [
        "TRUE. The most feared long-term effect; also hepatitis, peripheral neuropathy and skin discolouration.",
        "TRUE. About 37% iodine by weight — both hypo- and hyperthyroidism occur.",
        "FALSE. Its half-life is enormous — of the order of 25–100 days, with a huge volume of distribution.",
        "TRUE. Corneal deposits are near-universal and usually benign.",
        "TRUE. Roughly doubling it — halve the digoxin dose. It also potentiates warfarin."
      ]
    },
    {
      cat: "Cardiovascular",
      stem: "Beta blockers:",
      opts: [
        "Esmolol has an elimination half-life of about 9 minutes",
        "Atenolol is predominantly renally excreted",
        "Labetalol has combined alpha and beta blocking activity",
        "Beta blockade masks the adrenergic warning signs of hypoglycaemia",
        "Sudden withdrawal of a beta blocker is harmless"
      ],
      ans: [
        "TRUE. Metabolised by red cell esterases — ideal for a short, titratable effect.",
        "TRUE. So it accumulates in renal impairment. Propranolol and metoprolol are hepatically cleared.",
        "TRUE. About a 1:7 ratio orally and 1:3 intravenously, in favour of beta.",
        "TRUE. Except sweating. A caution in insulin-treated diabetes.",
        "FALSE. Abrupt withdrawal causes rebound tachycardia, hypertension and myocardial ischaemia from receptor upregulation — continue them perioperatively."
      ]
    },
    {
      cat: "Cardiovascular",
      stem: "Antihypertensives in the perioperative period:",
      opts: [
        "ACE inhibitors are commonly withheld on the morning of surgery",
        "ACE inhibitor cough is due to accumulation of bradykinin",
        "Calcium channel blockers of the dihydropyridine class are predominantly vasodilators",
        "Clonidine is an alpha-2 agonist that reduces anaesthetic requirement",
        "Hydralazine causes reflex tachycardia"
      ],
      ans: [
        "TRUE. To reduce refractory intraoperative hypotension, particularly with neuraxial blockade.",
        "TRUE. And angio-oedema by the same mechanism; angiotensin receptor blockers avoid it.",
        "TRUE. Amlodipine and nifedipine — minimal effect on conduction, unlike verapamil and diltiazem.",
        "TRUE. It is sedative, analgesic and MAC-sparing; rebound hypertension follows abrupt withdrawal.",
        "TRUE. An arteriolar dilator; give with a beta blocker. It can cause a lupus-like syndrome with prolonged use."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Drugs acting on the airway:",
      opts: [
        "Salbutamol is a selective beta-2 agonist and can cause hypokalaemia",
        "Ipratropium is a non-selective muscarinic antagonist given by inhalation",
        "Aminophylline is a phosphodiesterase inhibitor with a narrow therapeutic index",
        "Montelukast is a leukotriene receptor antagonist",
        "Inhaled corticosteroids act within minutes in acute severe asthma"
      ],
      ans: [
        "TRUE. Along with tremor, tachycardia and lactic acidosis at high dose.",
        "TRUE. Poorly absorbed systemically, so few anticholinergic side effects.",
        "TRUE. Aim for 10–20 mg/L; toxicity gives arrhythmia, seizures and vomiting. Interactions are numerous.",
        "TRUE. Useful in exercise-induced and aspirin-sensitive asthma.",
        "FALSE. Steroids take hours to act — intravenous hydrocortisone is given early precisely because of that delay, not for immediate effect."
      ]
    },
    {
      cat: "Antiemetics",
      stem: "Antiemetic drugs:",
      opts: [
        "Ondansetron is a 5-HT₃ antagonist acting centrally and at vagal afferents",
        "Metoclopramide is a prokinetic dopamine antagonist that can cause an oculogyric crisis",
        "Cyclizine is an H₁ antagonist and can cause tachycardia when given rapidly",
        "Dexamethasone should be given at the end of surgery for best effect",
        "Droperidol prolongs the QT interval"
      ],
      ans: [
        "TRUE. At the chemoreceptor trigger zone and in the gut; QT prolongation and constipation are its main issues.",
        "TRUE. Extrapyramidal reactions are commoner in the young — treat with procyclidine.",
        "TRUE. It has anticholinergic activity; it also causes sedation and dry mouth.",
        "FALSE. Dexamethasone is best given at INDUCTION, since its onset takes a couple of hours. Warn about perineal tingling on rapid injection.",
        "TRUE. Which is why it was withdrawn in some countries; low doses remain effective and are used with ECG awareness."
      ]
    },
    {
      cat: "Analgesics",
      stem: "Paracetamol:",
      opts: [
        "Its mechanism includes central COX inhibition and effects on the endocannabinoid system",
        "The toxic metabolite is NAPQI, normally conjugated by glutathione",
        "N-acetylcysteine works by replenishing glutathione",
        "Intravenous dosing should be reduced in adults under 50 kg",
        "It causes gastric ulceration and inhibits platelet function"
      ],
      ans: [
        "TRUE. Its precise mechanism remains incompletely defined; it is a weak peripheral COX inhibitor.",
        "TRUE. Produced by CYP2E1; overdose or induction saturates glutathione stores, causing centrilobular necrosis.",
        "TRUE. Most effective within 8 hours; it also has antioxidant effects later.",
        "TRUE. 15 mg/kg rather than 1 g — a common source of iatrogenic overdose.",
        "FALSE. Paracetamol has negligible peripheral anti-inflammatory or antiplatelet effect — this is precisely its advantage over NSAIDs."
      ]
    },
    {
      cat: "Analgesics",
      stem: "Non-steroidal anti-inflammatory drugs:",
      opts: [
        "They inhibit cyclo-oxygenase and reduce prostaglandin synthesis",
        "COX-2 selective agents avoid all cardiovascular risk",
        "They may precipitate renal impairment in hypovolaemia",
        "Aspirin irreversibly acetylates COX-1 in platelets",
        "They are contraindicated in a patient taking lithium"
      ],
      ans: [
        "TRUE. Reducing peripheral and central sensitisation; opioid-sparing by roughly 30%.",
        "FALSE. COX-2 selectivity reduces gastrointestinal and platelet effects but INCREASES thrombotic risk — rofecoxib was withdrawn for this reason.",
        "TRUE. Prostaglandins maintain afferent arteriolar dilatation when renal perfusion falls — the 'triple whammy' with an ACE inhibitor and a diuretic.",
        "TRUE. For the platelet's 7–10 day lifespan, since platelets cannot resynthesise enzyme.",
        "TRUE. They reduce lithium clearance and precipitate toxicity; the same applies to methotrexate."
      ]
    },
    {
      cat: "Anticoagulants",
      stem: "Warfarin:",
      opts: [
        "It inhibits vitamin K epoxide reductase",
        "Its anticoagulant effect is immediate",
        "It is highly protein bound and metabolised by cytochrome P450",
        "Prothrombin complex concentrate reverses it faster than fresh frozen plasma",
        "It is safe throughout pregnancy"
      ],
      ans: [
        "TRUE. Preventing gamma-carboxylation of factors II, VII, IX and X, and proteins C and S.",
        "FALSE. It takes 48–72 hours, since existing factors must decay. Bridge with heparin where immediate anticoagulation is needed.",
        "TRUE. Hence the very long list of interactions — CYP2C9 in particular.",
        "TRUE. Four-factor PCC restores factors within minutes in a small volume; add vitamin K for sustained reversal.",
        "FALSE. It is teratogenic in the first trimester (warfarin embryopathy) and causes fetal haemorrhage later. LMWH is used instead."
      ]
    },
    {
      cat: "Anticoagulants",
      stem: "Heparins and newer anticoagulants:",
      opts: [
        "Unfractionated heparin potentiates antithrombin III",
        "Low molecular weight heparin acts mainly on factor Xa",
        "Protamine fully reverses low molecular weight heparin",
        "Heparin-induced thrombocytopenia is a prothrombotic immune phenomenon",
        "Idarucizumab reverses dabigatran"
      ],
      ans: [
        "TRUE. By a factor of about 1000, inhibiting thrombin and factor Xa; monitored by APTT or ACT.",
        "TRUE. With a more predictable response, no routine monitoring, and renal clearance — accumulating in renal failure.",
        "FALSE. Protamine reverses only about 50–60% of LMWH activity. It fully reverses unfractionated heparin.",
        "TRUE. Type II, antibody to the platelet factor 4–heparin complex, at days 5–10 — stop all heparin and use an alternative such as argatroban.",
        "TRUE. A monoclonal antibody fragment. Andexanet alfa reverses rivaroxaban and apixaban."
      ]
    },
    {
      cat: "Endocrine drugs",
      stem: "Drugs in diabetes:",
      opts: [
        "Metformin is a biguanide that may cause lactic acidosis",
        "Sulphonylureas act by closing ATP-sensitive potassium channels in the beta cell",
        "SGLT2 inhibitors can cause euglycaemic ketoacidosis",
        "Insulin glargine has a peaked profile suitable for bolus dosing",
        "GLP-1 agonists delay gastric emptying"
      ],
      ans: [
        "TRUE. Rare but serious; withhold in renal impairment, sepsis and around contrast administration.",
        "TRUE. Depolarising the cell and triggering insulin release — hence hypoglycaemia risk.",
        "TRUE. Which is why they are stopped several days before surgery.",
        "FALSE. Glargine is a LONG-acting, essentially peakless basal insulin. Aspart and lispro are the rapid bolus insulins.",
        "TRUE. A relevant aspiration consideration; guidance on preoperative omission is evolving."
      ]
    },
    {
      cat: "Endocrine drugs",
      stem: "Corticosteroids:",
      opts: [
        "Hydrocortisone 20 mg is roughly equivalent to prednisolone 5 mg",
        "Dexamethasone has negligible mineralocorticoid activity",
        "Long-term steroid therapy suppresses the hypothalamic–pituitary–adrenal axis",
        "Fludrocortisone is used mainly for its glucocorticoid effect",
        "Steroids impair wound healing and increase infection risk"
      ],
      ans: [
        "TRUE. And to dexamethasone 0.75 mg and methylprednisolone 4 mg.",
        "TRUE. Which is why it is preferred for cerebral oedema and as an antiemetic.",
        "TRUE. So perioperative supplementation is given for major surgery in patients on significant doses.",
        "FALSE. Fludrocortisone is chosen for its potent MINERALOCORTICOID effect — Addison's disease and autonomic failure.",
        "TRUE. Along with hyperglycaemia, myopathy, osteoporosis, adrenal suppression and gastric ulceration with NSAIDs."
      ]
    },
    {
      cat: "Antimicrobials",
      stem: "Antibiotic mechanisms:",
      opts: [
        "Beta-lactams inhibit bacterial cell wall peptidoglycan cross-linking",
        "Aminoglycosides are bactericidal and act on the 30S ribosomal subunit",
        "Vancomycin acts on the 50S ribosome",
        "Fluoroquinolones inhibit DNA gyrase",
        "Metronidazole is active against anaerobes"
      ],
      ans: [
        "TRUE. Binding penicillin-binding proteins; they are time-dependent killers, so dosing interval matters.",
        "TRUE. Concentration-dependent with a post-antibiotic effect — hence once-daily dosing; nephrotoxic and ototoxic.",
        "FALSE. Vancomycin is a GLYCOPEPTIDE inhibiting cell wall synthesis at the D-ala-D-ala terminus. Macrolides and clindamycin act at the 50S subunit.",
        "TRUE. Risks include tendon rupture, QT prolongation and Clostridioides difficile.",
        "TRUE. Reduced to a toxic intermediate in anaerobic conditions; warn about the disulfiram-like reaction with alcohol."
      ]
    },
    {
      cat: "Antimicrobials",
      stem: "Antimicrobials in anaesthesia:",
      opts: [
        "Aminoglycosides potentiate non-depolarising neuromuscular blockade",
        "Vancomycin given rapidly causes histamine-mediated flushing",
        "Surgical prophylaxis should be given within 60 minutes of incision",
        "Cross-reactivity between penicillins and cephalosporins is around 10%",
        "Gentamicin is monitored by trough concentration"
      ],
      ans: [
        "TRUE. By reducing prejunctional acetylcholine release — a relevant interaction in theatre.",
        "TRUE. 'Red man' syndrome — infuse over at least 60 minutes; it is not an allergy.",
        "TRUE. Redose for prolonged surgery or major blood loss.",
        "FALSE. The older 10% figure is now regarded as a considerable overestimate; with modern cephalosporins that differ in side chain, cross-reactivity is around 1% or less.",
        "TRUE. Trough reflects accumulation and toxicity risk; peak reflects efficacy in traditional multiple-daily dosing."
      ]
    }
    ,
    {
      cat: "Principles",
      stem: "Target-controlled infusion and compartment models:",
      opts: [
        "The Marsh model for propofol uses weight but not age",
        "The Schnider model incorporates lean body mass",
        "Effect-site targeting produces a higher initial plasma concentration than plasma targeting",
        "Context-sensitive half-time is the time for plasma concentration to fall by 50% after stopping an infusion",
        "keo describes the rate of equilibration between plasma and effect site"
      ],
      ans: [
        "TRUE. Which is one reason it tends to overshoot in the elderly.",
        "TRUE. Age, height, weight and sex, with a fixed small central compartment.",
        "TRUE. It deliberately overshoots the plasma to drive the effect site rapidly — faster onset at the cost of transient hypotension.",
        "TRUE. It depends on the duration of infusion, which is exactly why it differs from elimination half-life.",
        "TRUE. A large keo means fast equilibration — hence t½keo of about 1–2 minutes for propofol and remifentanil."
      ]
    },
    {
      cat: "Principles",
      stem: "Drug interactions and enzyme effects:",
      opts: [
        "Rifampicin, phenytoin and carbamazepine are enzyme inducers",
        "Erythromycin, ketoconazole and grapefruit juice are enzyme inhibitors",
        "Enzyme induction takes effect within minutes",
        "MAOIs interact dangerously with pethidine",
        "Selective serotonin reuptake inhibitors increase perioperative bleeding risk"
      ],
      ans: [
        "TRUE. Along with chronic alcohol, barbiturates and St John's wort.",
        "TRUE. Along with cimetidine, sodium valproate, omeprazole, metronidazole and acute alcohol.",
        "FALSE. Induction requires new protein synthesis and takes days to weeks. INHIBITION is rapid, often immediate.",
        "TRUE. An excitatory reaction — hyperpyrexia, rigidity, seizures. Morphine and fentanyl are safer, in reduced dose.",
        "TRUE. Through impaired platelet serotonin uptake; the effect is modest but real."
      ]
    },
    {
      cat: "IV induction",
      stem: "Total intravenous anaesthesia:",
      opts: [
        "Depth of anaesthesia monitoring is recommended when TIVA is combined with neuromuscular blockade",
        "Propofol TIVA reduces postoperative nausea and vomiting compared with volatile anaesthesia",
        "A dedicated cannula with an anti-reflux valve reduces the risk of a failed infusion going unnoticed",
        "Propofol infusion syndrome is associated with high dose prolonged infusion in critical illness",
        "TIVA increases the risk of malignant hyperthermia"
      ],
      ans: [
        "TRUE. Because clinical signs of light anaesthesia are masked — a key NAP5 and guideline recommendation.",
        "TRUE. A substantial and reproducible advantage.",
        "TRUE. Along with keeping the cannula visible throughout.",
        "TRUE. Above about 4 mg/kg/h beyond 48 hours — metabolic acidosis, rhabdomyolysis, arrhythmia, renal and cardiac failure.",
        "FALSE. Propofol is entirely SAFE in malignant hyperthermia — TIVA is the technique of choice for susceptible patients."
      ]
    },
    {
      cat: "Volatiles",
      stem: "Uptake and distribution of inhalational agents:",
      opts: [
        "The alveolar to inspired concentration ratio rises faster with a high fresh gas flow",
        "A high cardiac output slows the rise in alveolar concentration",
        "The concentration effect is most marked with nitrous oxide",
        "Vessel-rich group tissues equilibrate first",
        "A right-to-left cardiac shunt slows inhalational induction"
      ],
      ans: [
        "TRUE. As it does with high minute ventilation and a low blood:gas coefficient.",
        "TRUE. More agent is removed from the alveoli — hence rapid induction in shock and slow induction in a hyperdynamic state.",
        "TRUE. Because only it is given in high enough concentration for its own uptake to concentrate the remaining gas.",
        "TRUE. Brain, heart, liver, kidney — about 75% of cardiac output to about 10% of body mass.",
        "TRUE. Blood bypasses the lung, diluting the arterial concentration. It speeds INTRAVENOUS induction."
      ]
    },
    {
      cat: "Muscle relaxants",
      stem: "Monitoring neuromuscular blockade:",
      opts: [
        "Train-of-four uses four supramaximal stimuli at 2 Hz",
        "A train-of-four ratio above 0.9 is the accepted threshold for adequate recovery",
        "Post-tetanic count is used to assess deep block",
        "Double burst stimulation makes fade easier to detect by eye",
        "The diaphragm is more sensitive to relaxants than the adductor pollicis"
      ],
      ans: [
        "TRUE. Over 2 seconds, with the ratio of the fourth to the first twitch giving the degree of block.",
        "TRUE. Below this, pharyngeal function and the hypoxic ventilatory response remain impaired.",
        "TRUE. When the train-of-four count is zero; it predicts time to reappearance of the first twitch.",
        "TRUE. Two short bursts of three stimuli — tactile detection of fade is far better than with train-of-four.",
        "FALSE. The diaphragm is RESISTANT — it is blocked later and recovers earlier than the adductor pollicis, which is why the hand is the site monitored for recovery."
      ]
    },
    {
      cat: "Local anaesthetics",
      stem: "Additives and adjuncts to local anaesthetics:",
      opts: [
        "Sodium bicarbonate speeds onset by increasing the un-ionised fraction",
        "Clonidine prolongs peripheral nerve blocks",
        "Dexamethasone prolongs the duration of a brachial plexus block",
        "Adrenaline 1:200 000 is 5 micrograms per ml",
        "Hyaluronidase is used to speed spread in ophthalmic blocks"
      ],
      ans: [
        "TRUE. Though excessive alkalinisation causes precipitation, especially with bupivacaine.",
        "TRUE. By 2–3 hours typically; sedation, hypotension and bradycardia limit the dose.",
        "TRUE. Both perineural and intravenous routes prolong it; the mechanism is debated.",
        "TRUE. 1:1000 is 1 mg/ml, so 1:200 000 is 5 µg/ml.",
        "TRUE. It breaks down interstitial hyaluronic acid, improving spread in peribulbar block."
      ]
    },
    {
      cat: "Neuro drugs",
      stem: "Antiepileptic drugs:",
      opts: [
        "Phenytoin shows saturation kinetics within the therapeutic range",
        "Phenytoin causes gingival hyperplasia and is an enzyme inducer",
        "Sodium valproate is an enzyme inhibitor and is teratogenic",
        "Levetiracetam has extensive drug interactions",
        "Rapid intravenous phenytoin can cause hypotension and arrhythmia"
      ],
      ans: [
        "TRUE. So a small dose increase can produce a large concentration rise and toxicity — nystagmus, ataxia, confusion.",
        "TRUE. Along with hirsutism, coarse facies, folate deficiency and megaloblastic anaemia.",
        "TRUE. Neural tube defects and neurodevelopmental harm — contraindicated in pregnancy without stringent safeguards.",
        "FALSE. Levetiracetam is notable for having very FEW interactions and is largely renally excreted — one reason it is popular perioperatively.",
        "TRUE. Partly the propylene glycol diluent; give no faster than 50 mg/min with ECG monitoring. Fosphenytoin is the alternative."
      ]
    },
    {
      cat: "Neuro drugs",
      stem: "Drugs in Parkinson's disease and psychiatry:",
      opts: [
        "Levodopa is combined with a peripheral dopa decarboxylase inhibitor",
        "Metoclopramide is a safe antiemetic in Parkinson's disease",
        "Lithium has a narrow therapeutic index and is renally excreted",
        "Antipsychotics can cause neuroleptic malignant syndrome",
        "Abrupt cessation of Parkinson's medication perioperatively can precipitate severe rigidity"
      ],
      ans: [
        "TRUE. Carbidopa or benserazide — reducing peripheral side effects and increasing central delivery.",
        "FALSE. Metoclopramide is a dopamine antagonist and will WORSEN Parkinson's disease. Use ondansetron or domperidone.",
        "TRUE. Toxicity is precipitated by dehydration, NSAIDs, diuretics and ACE inhibitors; it also prolongs neuromuscular blockade.",
        "TRUE. Hyperthermia, rigidity, autonomic instability and a raised creatine kinase — treated with dantrolene and bromocriptine.",
        "TRUE. Including an akinetic crisis and swallowing failure — continue medication as close to theatre as possible, and plan a route for the postoperative period."
      ]
    },
    {
      cat: "Emergency drugs",
      stem: "Dantrolene:",
      opts: [
        "It acts on the ryanodine receptor to reduce calcium release from the sarcoplasmic reticulum",
        "The initial dose in malignant hyperthermia is 2.5 mg/kg",
        "Each vial contains 20 mg and requires 60 ml of water to reconstitute",
        "It is contraindicated with calcium channel blockers because of hyperkalaemia and cardiovascular collapse",
        "It causes muscle weakness and phlebitis"
      ],
      ans: [
        "TRUE. RYR1 — the mutated receptor in most susceptible individuals.",
        "TRUE. Repeated as needed up to about 10 mg/kg or more, alongside cooling, hyperventilation with 100% oxygen and treatment of hyperkalaemia and acidosis.",
        "TRUE. Which is why reconstitution is so labour-intensive and needs many hands — the newer nanocrystalline formulation is far quicker.",
        "TRUE. Specifically verapamil — avoid the combination.",
        "TRUE. It should be given into a large vein; hepatotoxicity limits chronic use."
      ]
    },
    {
      cat: "Emergency drugs",
      stem: "Drugs in cardiac arrest:",
      opts: [
        "Adrenaline 1 mg is given every 3–5 minutes in a shockable rhythm after the third shock",
        "Amiodarone 300 mg is given after the third shock in VF or pulseless VT",
        "Calcium is indicated routinely in all arrests",
        "Sodium bicarbonate is indicated in hyperkalaemia and tricyclic overdose",
        "Adrenaline is given immediately in a non-shockable rhythm"
      ],
      ans: [
        "TRUE. And immediately in non-shockable rhythms.",
        "TRUE. With a further 150 mg after the fifth shock; lidocaine is an alternative if amiodarone is unavailable.",
        "FALSE. Calcium is only for hyperkalaemia, hypocalcaemia and calcium channel blocker overdose. Routine use is harmful.",
        "TRUE. Not routinely otherwise — it worsens intracellular acidosis by generating CO₂.",
        "TRUE. As soon as vascular access is achieved, then every 3–5 minutes."
      ]
    },
    {
      cat: "Emergency drugs",
      stem: "Antidotes and specific treatments:",
      opts: [
        "Naloxone is a competitive opioid antagonist with a shorter half-life than morphine",
        "Atropine treats organophosphate muscarinic effects, and pralidoxime reactivates cholinesterase",
        "Fomepizole or ethanol is used in methanol and ethylene glycol poisoning",
        "Desferrioxamine chelates iron",
        "Digoxin toxicity is treated with digoxin-specific antibody fragments"
      ],
      ans: [
        "TRUE. Which is why renarcotisation occurs and an infusion is often needed. Titrate to respiration, not consciousness.",
        "TRUE. Pralidoxime must be given before the enzyme 'ages'; benzodiazepines control seizures.",
        "TRUE. Both compete for alcohol dehydrogenase, preventing formation of the toxic metabolites.",
        "TRUE. Given for severe iron overdose.",
        "TRUE. Along with correction of potassium — but avoid calcium, which was traditionally thought to precipitate 'stone heart'."
      ]
    },
    {
      cat: "Fluids",
      stem: "Intravenous fluids:",
      opts: [
        "Hartmann's solution contains lactate as a bicarbonate precursor",
        "Hartmann's solution contains potassium 5 mmol/L",
        "0.9% saline in large volume causes a hyperchloraemic metabolic acidosis",
        "Human albumin solution 4.5% is iso-oncotic with plasma",
        "Starch solutions are recommended for resuscitation in sepsis"
      ],
      ans: [
        "TRUE. Metabolised in the liver; it is slightly hypotonic with a sodium of 131 mmol/L.",
        "TRUE. And calcium 2 mmol/L — the reason for classical caution with co-administered blood, although the clinical risk is small.",
        "TRUE. Through a fall in the strong ion difference; associated with worse renal outcomes in large volumes.",
        "TRUE. Whereas 20% is hyperoncotic and is used to draw fluid intravascularly.",
        "FALSE. Hydroxyethyl starches are CONTRAINDICATED in sepsis and critical illness — they increase renal failure and mortality."
      ]
    },
    {
      cat: "Principles",
      stem: "Isomerism and drug chirality:",
      opts: [
        "Enantiomers are non-superimposable mirror images",
        "Bupivacaine is a racemic mixture and levobupivacaine is the S-enantiomer",
        "Ketamine's S(+) enantiomer is more potent than the R(−)",
        "Isoflurane and enflurane are structural isomers",
        "All enantiomers of a drug have identical pharmacological activity"
      ],
      ans: [
        "TRUE. Optical isomers, differing at a chiral centre.",
        "TRUE. With less cardiotoxicity than the R-enantiomer-containing racemate.",
        "TRUE. Roughly twice as potent, with fewer psychomimetic effects.",
        "TRUE. Same molecular formula, different arrangement.",
        "FALSE. They frequently differ markedly — in potency, kinetics and toxicity. That difference is the whole point of single-enantiomer formulations."
      ]
    },
    {
      cat: "Cardiovascular",
      stem: "Nitrates and vasodilators:",
      opts: [
        "Glyceryl trinitrate acts by release of nitric oxide and increased cyclic GMP",
        "Tolerance develops with continuous GTN infusion",
        "Sodium nitroprusside can cause cyanide toxicity",
        "Sodium nitroprusside solutions must be protected from light",
        "Sildenafil inhibits phosphodiesterase type 5 and is safe with nitrates"
      ],
      ans: [
        "TRUE. Causing venodilatation predominantly, with reduced preload and myocardial wall tension.",
        "TRUE. Requiring a nitrate-free interval; it is thought to reflect depletion of sulphydryl groups.",
        "TRUE. Presenting as metabolic acidosis with a high mixed venous oxygen saturation and tachyphylaxis — treat with sodium thiosulphate or hydroxocobalamin.",
        "TRUE. They degrade on light exposure, releasing cyanide.",
        "FALSE. The combination causes profound, potentially fatal hypotension and is CONTRAINDICATED."
      ]
    },
    {
      cat: "Antimicrobials",
      stem: "Antifungals and antivirals:",
      opts: [
        "Amphotericin B is nephrotoxic and causes hypokalaemia",
        "Fluconazole is a potent inhibitor of cytochrome P450",
        "Aciclovir requires viral thymidine kinase for activation",
        "Liposomal amphotericin has reduced nephrotoxicity",
        "Caspofungin acts on the fungal cell wall"
      ],
      ans: [
        "TRUE. Along with hypomagnesaemia and infusion reactions with rigors.",
        "TRUE. Prolonging the effect of many drugs including warfarin and midazolam.",
        "TRUE. Which gives it selectivity for infected cells; it can cause crystalline nephropathy if given rapidly without hydration.",
        "TRUE. At considerably greater cost.",
        "TRUE. Inhibiting beta-glucan synthesis — a different target from the azoles, which act on ergosterol synthesis."
      ]
    },
    {
      cat: "Analgesics",
      stem: "Adjuvant analgesics:",
      opts: [
        "Gabapentin and pregabalin bind the alpha-2-delta subunit of voltage-gated calcium channels",
        "Amitriptyline is effective in neuropathic pain at lower doses than those used for depression",
        "Ketamine at subanaesthetic dose reduces opioid consumption",
        "Clonidine has analgesic effects at the spinal cord",
        "Lidocaine infusion has no role in perioperative analgesia"
      ],
      ans: [
        "TRUE. Reducing excitatory neurotransmitter release; they cause sedation and dizziness and accumulate in renal failure.",
        "TRUE. Typically 10–25 mg at night; anticholinergic effects and cardiac conduction delay limit dose escalation.",
        "TRUE. And attenuates wind-up and opioid-induced hyperalgesia.",
        "TRUE. Alpha-2 receptors in the dorsal horn — hence its use as a neuraxial and perineural adjunct.",
        "FALSE. Intravenous lidocaine reduces pain and opioid use particularly in abdominal surgery, and hastens return of bowel function — with careful dosing protocols."
      ]
    },
    {
      cat: "Principles",
      stem: "Drug handling in special populations:",
      opts: [
        "Neonates have reduced plasma protein binding, increasing free drug fraction",
        "Neonates have a proportionately larger extracellular fluid volume, increasing the dose per kilogram of water-soluble drugs",
        "Elderly patients require a larger induction dose of propofol",
        "Obesity increases the volume of distribution of lipophilic drugs",
        "Suxamethonium is dosed on total body weight in obesity"
      ],
      ans: [
        "TRUE. With lower albumin and alpha-1 acid glycoprotein, and immature hepatic conjugation.",
        "TRUE. Which is why neonatal doses per kilogram often look high.",
        "FALSE. The elderly need a REDUCED dose, given slowly — reduced volume of central compartment, reduced clearance and greater sensitivity.",
        "TRUE. Loading doses of lipophilic drugs are based closer to total body weight, maintenance on lean body weight.",
        "TRUE. Because plasma cholinesterase activity and extracellular volume both rise — one of the few drugs dosed on total body weight."
      ]
    },
    {
      cat: "Anticoagulants",
      stem: "Antiplatelet drugs:",
      opts: [
        "Clopidogrel irreversibly blocks the P2Y12 ADP receptor",
        "Clopidogrel is a prodrug requiring CYP2C19 activation",
        "Ticagrelor binds the P2Y12 receptor reversibly",
        "Aspirin should routinely be stopped before all surgery",
        "Glycoprotein IIb/IIIa inhibitors block the final common pathway of platelet aggregation"
      ],
      ans: [
        "TRUE. For the life of the platelet — hence about 7 days for full recovery.",
        "TRUE. Poor metabolisers have reduced efficacy.",
        "TRUE. With a shorter offset of about 3–5 days; it also causes dyspnoea.",
        "FALSE. Aspirin is usually CONTINUED — particularly after coronary stenting, where stopping carries a substantial thrombosis risk. Decisions are made jointly with cardiology.",
        "TRUE. Fibrinogen cross-linking; abciximab, tirofiban and eptifibatide."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Oxygen as a drug:",
      opts: [
        "Prolonged high inspired oxygen causes pulmonary toxicity",
        "Retinopathy of prematurity is associated with hyperoxia in neonates",
        "Target saturations in a patient at risk of hypercapnic respiratory failure are 88–92%",
        "Hyperbaric oxygen is indicated for carbon monoxide poisoning and decompression illness",
        "Oxygen is contraindicated in paraquat poisoning"
      ],
      ans: [
        "TRUE. Free radical injury with tracheobronchitis, then diffuse alveolar damage; try to keep FiO₂ below about 0.6 where possible.",
        "TRUE. Hence careful saturation targeting in preterm infants.",
        "TRUE. Rather than the 94–98% used for most acutely unwell adults.",
        "TRUE. Along with gas gangrene and some problem wounds.",
        "TRUE. Oxygen dramatically potentiates paraquat's free-radical lung injury — a rare instance where hypoxia is tolerated deliberately."
      ]
    }
    ,
    {
      cat: "Principles",
      stem: "Routes of administration:",
      opts: [
        "Transdermal fentanyl reaches steady state within 30 minutes",
        "Intranasal administration avoids first-pass metabolism",
        "Intramuscular absorption is unreliable in shock",
        "Nebulised drug delivery to the alveoli is optimal at a particle size of 1–5 µm",
        "Rectal administration wholly avoids the portal circulation"
      ],
      ans: [
        "FALSE. A transdermal patch takes 12–24 hours to reach steady state, and a depot persists for many hours after removal — a common source of error in acute pain.",
        "TRUE. With rapid absorption across a vascular mucosa — used for diamorphine, fentanyl and midazolam, particularly in children.",
        "TRUE. Poor perfusion means erratic uptake and a risk of a large delayed dose when perfusion is restored.",
        "TRUE. Larger particles impact in the upper airway; much smaller ones are exhaled.",
        "FALSE. Only the LOWER rectum drains systemically. The upper rectum drains to the portal vein, so first-pass metabolism is partial and variable."
      ]
    },
    {
      cat: "Cardiovascular",
      stem: "Diuretics:",
      opts: [
        "Furosemide causes hypokalaemia and metabolic alkalosis",
        "Thiazides act at the distal convoluted tubule sodium–chloride cotransporter",
        "Spironolactone is a competitive aldosterone antagonist and causes hyperkalaemia",
        "Acetazolamide causes a hyperchloraemic metabolic acidosis",
        "Mannitol is contraindicated in established anuria"
      ],
      ans: [
        "TRUE. Along with hypomagnesaemia, hypocalcaemia, hypovolaemia and ototoxicity at high dose or rapid injection.",
        "TRUE. They cause hypercalcaemia and hyponatraemia, and can precipitate gout.",
        "TRUE. Also gynaecomastia; eplerenone is more selective.",
        "TRUE. Carbonic anhydrase inhibition with bicarbonate loss — also used for glaucoma, altitude sickness and to correct a metabolic alkalosis.",
        "TRUE. It will simply expand the intravascular volume and precipitate pulmonary oedema without being excreted."
      ]
    }
  ]
});
