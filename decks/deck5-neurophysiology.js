window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "neurophysiology",
  title: "Neuro",
  emoji: "🧠",
  subtitle: "CBF · ICP · CSF · Action potentials · Autonomic · Spinal cord · Special senses",
  colors: {
    front1: "#7c5cff", front2: "#c93dff",
    back1: "#ffd6a5", back2: "#ffb3c6", backText: "#3d1a3d",
    chips: ["#c93dff","#7c5cff","#5ab0ff","#3dd6d6","#7bd88f","#ffd93d","#ff9a3d","#ff6b9d"]
  },
  cards: [
    {cat:"CBF", q:"What is normal cerebral blood flow?", a:"About 50 ml/100 g/min (roughly 700 ml/min, or 15% of cardiac output)."},
    {cat:"CBF", q:"Formula for cerebral perfusion pressure?", a:"CPP = MAP − ICP (or CVP, whichever is higher). Normal 70–80 mmHg."},
    {cat:"CBF", q:"Over what MAP range is CBF autoregulated?", a:"Roughly 50–150 mmHg; the curve shifts right in chronic hypertension."},
    {cat:"CBF", q:"How does PaCO2 affect CBF?", a:"Linear increase between about 3 and 10 kPa; roughly 1–2 ml/100 g/min per mmHg."},
    {cat:"CBF", q:"At what PaO2 does hypoxia start to increase CBF?", a:"Below about 6.7 kPa (50 mmHg), after which CBF rises steeply."},
    {cat:"CBF", q:"What is the critical CBF threshold for ischaemia?", a:"Below about 20 ml/100 g/min EEG slows; below 15 ml/100 g/min infarction risk rises."},
    {cat:"CBF", q:"What is normal cerebral metabolic rate for oxygen (CMRO2)?", a:"About 3–3.5 ml/100 g/min; the brain uses around 20% of total body oxygen."},
    {cat:"CBF", q:"Name four mechanisms controlling CBF.", a:"Autoregulation (myogenic), PaCO2, PaO2, and metabolic/neurogenic coupling to CMRO2."},
    {cat:"CBF", q:"Why is hyperventilation used in raised ICP, and what is its limit?", a:"Hypocapnia causes cerebral vasoconstriction, reducing CBV and ICP. Excessive hypocapnia (<4 kPa) risks ischaemia, and the effect wanes after 6–24 hours."},

    {cat:"ICP", q:"What is normal ICP in a supine adult?", a:"5–15 mmHg. Sustained values above 20–25 mmHg generally warrant treatment."},
    {cat:"ICP", q:"State the Monro–Kellie doctrine.", a:"The cranium is a fixed box containing brain, blood and CSF; a rise in one component must be offset by a fall in another or ICP rises."},
    {cat:"ICP", q:"List measures that lower ICP.", a:"Head-up 30°, neutral neck, normocapnia or mild hypocapnia, sedation, osmotherapy (mannitol/hypertonic saline), CSF drainage, avoiding hypoxia/hyperthermia/hyponatraemia, and decompressive craniectomy."},
    {cat:"ICP", q:"Which anaesthetic agents lower ICP?", a:"Propofol, thiopentone and etomidate reduce CMRO2, CBF and ICP with preserved coupling."},
    {cat:"ICP", q:"Which agents raise ICP?", a:"Volatile agents (dose-dependent vasodilation, uncoupling) and ketamine. Nitrous oxide also increases CBF."},
    {cat:"ICP", q:"What is the Cushing reflex?", a:"Hypertension, bradycardia and irregular respiration in response to critically raised ICP — a late and ominous sign."},

    {cat:"CSF", q:"What is the total CSF volume and production rate?", a:"About 150 ml total, produced at 0.35 ml/min (roughly 500 ml/day), so it turns over 3–4 times daily."},
    {cat:"CSF", q:"Where is CSF produced and absorbed?", a:"Produced by the choroid plexus in the lateral, third and fourth ventricles; absorbed by arachnoid granulations into the venous sinuses."},
    {cat:"CSF", q:"How does CSF composition differ from plasma?", a:"Lower protein, glucose, potassium and calcium; higher chloride and magnesium. It is slightly more acidic, and specific gravity is about 1.003–1.008."},
    {cat:"CSF", q:"Why does CSF specific gravity matter in spinal anaesthesia?", a:"It determines whether a local anaesthetic solution is hyperbaric, isobaric or hypobaric, and hence how it spreads with position."},

    {cat:"Action potentials", q:"What is the resting membrane potential of a neurone and why?", a:"About −70 mV, set mainly by potassium permeability and maintained by the Na+/K+ ATPase (3 Na+ out for 2 K+ in)."},
    {cat:"Action potentials", q:"What does the Nernst equation describe?", a:"The equilibrium potential for a single ion across a membrane, given its concentration gradient."},
    {cat:"Action potentials", q:"What underlies depolarisation and repolarisation in a nerve action potential?", a:"Depolarisation: fast voltage-gated sodium influx. Repolarisation: sodium channel inactivation plus delayed potassium efflux."},
    {cat:"Action potentials", q:"Difference between absolute and relative refractory periods?", a:"Absolute — no stimulus can trigger another AP (sodium channels inactivated). Relative — a larger than normal stimulus can."},
    {cat:"Action potentials", q:"What is saltatory conduction?", a:"Depolarisation jumping between nodes of Ranvier in myelinated fibres, greatly increasing conduction velocity."},
    {cat:"Action potentials", q:"Classify nerve fibres by size and function.", a:"A-alpha (motor/proprioception, fastest), A-beta (touch), A-gamma (muscle spindle), A-delta (fast pain, cold), B (preganglionic autonomic), C (slow pain, temperature, postganglionic sympathetic — unmyelinated, slowest)."},
    {cat:"Action potentials", q:"Which fibres are blocked first by local anaesthetic?", a:"Small myelinated B and A-delta fibres first (autonomic, then pain and temperature), then touch, then large A-alpha motor fibres last."},

    {cat:"Synapses & NMJ", q:"Describe the neuromuscular junction receptor.", a:"A nicotinic acetylcholine receptor: a ligand-gated ion channel of five subunits (2 alpha, beta, delta, epsilon in adults). Both alpha subunits must bind ACh to open."},
    {cat:"Synapses & NMJ", q:"What terminates the action of acetylcholine at the NMJ?", a:"Acetylcholinesterase in the synaptic cleft, hydrolysing ACh to choline and acetate."},
    {cat:"Synapses & NMJ", q:"What is the safety margin of neuromuscular transmission?", a:"About 70–80% of receptors must be blocked before any clinical weakness appears, and around 90% before twitch height falls."},
    {cat:"Synapses & NMJ", q:"Which fetal receptor change matters clinically?", a:"Extrajunctional receptors with a gamma subunit proliferate after denervation, burns or immobility — causing suxamethonium-induced hyperkalaemia and non-depolarising resistance."},
    {cat:"Synapses & NMJ", q:"Name the main excitatory and inhibitory CNS neurotransmitters.", a:"Excitatory: glutamate (NMDA, AMPA, kainate). Inhibitory: GABA in the brain, glycine in the spinal cord."},

    {cat:"Spinal cord", q:"Where does the spinal cord end in adults and neonates?", a:"L1–L2 in adults; about L3 in neonates, which is why lower interspaces are used in children."},
    {cat:"Spinal cord", q:"Which tracts carry pain and temperature?", a:"The spinothalamic tract — crossing within one or two segments of entry."},
    {cat:"Spinal cord", q:"Which tracts carry fine touch, vibration and proprioception?", a:"The dorsal columns, crossing in the medulla."},
    {cat:"Spinal cord", q:"What is the blood supply of the spinal cord?", a:"One anterior spinal artery (supplying the anterior two thirds) and two posterior spinal arteries, reinforced by radicular arteries including the artery of Adamkiewicz."},
    {cat:"Spinal cord", q:"What is anterior spinal artery syndrome?", a:"Loss of motor function and pain/temperature with preserved dorsal column function, from anterior cord ischaemia — a risk in thoracoabdominal aortic surgery."},
    {cat:"Spinal cord", q:"Describe the gate control theory of pain.", a:"Large A-beta fibre activity in the dorsal horn inhibits transmission of nociceptive signals from C and A-delta fibres — the basis of TENS and rubbing an injury."},

    {cat:"Autonomic", q:"Where do sympathetic and parasympathetic fibres originate?", a:"Sympathetic: thoracolumbar, T1–L2. Parasympathetic: craniosacral, cranial nerves III, VII, IX, X and S2–S4."},
    {cat:"Autonomic", q:"Which neurotransmitters act at autonomic ganglia and effector organs?", a:"All preganglionic fibres release ACh onto nicotinic receptors. Postganglionic sympathetic releases noradrenaline (except sweat glands, cholinergic); postganglionic parasympathetic releases ACh onto muscarinic receptors."},
    {cat:"Autonomic", q:"Effects of alpha-1, alpha-2, beta-1 and beta-2 stimulation?", a:"Alpha-1: vasoconstriction. Alpha-2: presynaptic inhibition of noradrenaline release, sedation, analgesia. Beta-1: increased heart rate and contractility. Beta-2: bronchodilation and vasodilation."},
    {cat:"Autonomic", q:"What is the baroreceptor reflex?", a:"Carotid sinus (glossopharyngeal) and aortic arch (vagus) stretch receptors signal the medulla; a rise in BP produces reflex bradycardia and vasodilation."},
    {cat:"Autonomic", q:"What is autonomic dysreflexia?", a:"Massive uninhibited sympathetic discharge below a spinal cord lesion at or above T6, triggered by noxious stimuli such as bladder distension. Causes severe hypertension with reflex bradycardia."},
    {cat:"Autonomic", q:"Which nerve carries carotid body afferents?", a:"The glossopharyngeal nerve (via the nerve of Hering). Aortic body afferents travel in the vagus."},

    {cat:"Control of breathing", q:"Where are the central chemoreceptors and what do they sense?", a:"On the ventral surface of the medulla; they respond to CSF H+ concentration, driven by CO2 diffusing across the blood–brain barrier."},
    {cat:"Control of breathing", q:"Where are the peripheral chemoreceptors and what is their main stimulus?", a:"Carotid and aortic bodies; principally PaO2 (responding below about 8 kPa), and also H+ and PaCO2."},
    {cat:"Control of breathing", q:"Which respiratory drive dominates normally, and when does that change?", a:"CO2 drive dominates normally. In chronic CO2 retention the hypoxic drive becomes relatively more important."},

    {cat:"Special senses", q:"What produces aqueous humour and where does it drain?", a:"The ciliary body produces it; it drains via the trabecular meshwork into the canal of Schlemm."},
    {cat:"Special senses", q:"What is normal intraocular pressure and what raises it?", a:"10–20 mmHg. Raised by coughing, straining, suxamethonium, ketamine, hypercapnia and hypoxia."},
    {cat:"Special senses", q:"What is the oculocardiac reflex?", a:"Bradycardia on traction of extraocular muscles — afferent via the trigeminal (V1), efferent via the vagus. Treated by stopping traction and giving an antimuscarinic."},

    {cat:"Sleep & EEG", q:"Name the EEG waveforms by frequency.", a:"Delta <4 Hz (deep sleep), theta 4–8 Hz, alpha 8–13 Hz (awake, eyes closed), beta >13 Hz (alert)."},
    {cat:"Sleep & EEG", q:"What happens to the EEG with deepening anaesthesia?", a:"Progressive slowing and increased amplitude, then burst suppression, then an isoelectric trace."},
    {cat:"Sleep & EEG", q:"What does the BIS monitor display and what are target values?", a:"A processed EEG index from 0 (isoelectric) to 100 (awake); 40–60 is the usual target for general anaesthesia."},

    {cat:"Muscle", q:"Describe excitation–contraction coupling in skeletal muscle.", a:"Depolarisation travels down T-tubules, dihydropyridine receptors activate ryanodine receptors, calcium is released from sarcoplasmic reticulum, binds troponin C, and cross-bridge cycling follows."},
    {cat:"Muscle", q:"How does smooth muscle differ?", a:"Calcium binds calmodulin rather than troponin, activating myosin light chain kinase. It has no troponin and no organised sarcomeres."},
    {cat:"Muscle", q:"Why can cardiac muscle not be tetanised?", a:"Its long refractory period, due to the calcium plateau phase, outlasts the contraction."},
    {cat:"Muscle", q:"What is the defect in malignant hyperthermia?", a:"An abnormal ryanodine receptor (RYR1) causing uncontrolled sarcoplasmic calcium release on exposure to volatiles or suxamethonium."}
  ]
});
