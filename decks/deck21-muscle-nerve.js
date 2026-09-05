window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "muscle-nerve",
  title: "Muscle & Nerve",
  emoji: "💪",
  subtitle: "Sarcomere · fibre types · neuronal action potential · reflexes · spinal shock",
  colors: {
    front1: "#b45309", front2: "#be123c",
    back1: "#D9F99D", back2: "#BAE6FD", backText: "#1a2e05",
    chips: ["#be123c","#b45309","#0E7A66","#1B5FA8","#7A3B9E","#ffd93d","#7bd88f","#3dd6d6"]
  },
  cards: [
    {cat:"Sarcomere", q:"Define the sarcomere.", a:"The functional unit of skeletal muscle — the segment between two Z lines."},
    {cat:"Sarcomere", q:"What is the Z line?", a:"The junction between neighbouring actin filaments. The region between two Z lines is the sarcomere."},
    {cat:"Sarcomere", q:"What is the A band?", a:"The full length of the myosin filament, including the part overlapped by actin. It does NOT change length on contraction."},
    {cat:"Sarcomere", q:"What is the I band?", a:"Actin only — the portion free of overlap by myosin, spanning across the Z line. It shortens on contraction."},
    {cat:"Sarcomere", q:"What is the H zone?", a:"Myosin only — the portion not overlapped by actin. It shortens on contraction."},
    {cat:"Sarcomere", q:"What is the M line?", a:"The middle of the sarcomere: the junction between myosin filaments, without cross-bridges."},
    {cat:"Sarcomere", q:"Which bands shorten during contraction and which does not?", a:"The I band and H zone shorten and the Z lines converge. The A band is UNCHANGED, because myosin itself does not shorten."},
    {cat:"Sarcomere", q:"What is the memory rule for which bands shorten?", a:"The two that shorten contain only ONE filament type — I is actin only, H is myosin only. The A band contains both, so increasing overlap does not change its length."},
    {cat:"Sarcomere", q:"What makes up the thick filament?", a:"Myosin, with myosin binding protein C. It produces the dark A band."},
    {cat:"Sarcomere", q:"What makes up the thin filament?", a:"Actin, with tropomyosin coiling around it and troponin attached. It is anchored to form the Z line."},
    {cat:"Sarcomere", q:"What does myosin binding protein C do?", a:"It binds at one end to the thick filament and at the other to actin."},
    {cat:"Sarcomere", q:"How does calcium initiate contraction in skeletal muscle?", a:"Calcium binds troponin C, moving tropomyosin off the actin binding sites so myosin heads can engage and cross-bridge cycling begins."},
    {cat:"Sarcomere", q:"How does smooth muscle differ in its calcium handling?", a:"It has no troponin. Calcium binds calmodulin, activating myosin light chain kinase."},
    {cat:"Sarcomere", q:"Describe excitation-contraction coupling in skeletal muscle.", a:"Depolarisation travels down T-tubules, dihydropyridine receptors activate ryanodine receptors, calcium is released from the sarcoplasmic reticulum, binds troponin C, and cross-bridge cycling follows."},

    {cat:"Fibre types", q:"Describe type I muscle fibres.", a:"Slow oxidative. Slow contraction, low myosin ATPase activity, aerobic metabolism, fatigue resistant, low firing frequency, small fibres with a high surface-to-volume ratio, rich capillary supply, high myoglobin and mitochondria — RED muscle."},
    {cat:"Fibre types", q:"Describe type IIa muscle fibres.", a:"Fast oxidative-glycolytic. Fast contraction with high myosin ATPase, both oxidative and glycolytic metabolism, moderately fatigue resistant, progressively recruited as effort increases."},
    {cat:"Fibre types", q:"Describe type IIb muscle fibres.", a:"Fast glycolytic. Fastest contraction, high myosin ATPase, anaerobic metabolism, fatigues quickly, high-frequency impulses, large fibres with a poor surface-to-volume ratio, poor capillary supply, low myoglobin — WHITE muscle."},
    {cat:"Fibre types", q:"Give the one-line summary of fibre types.", a:"Red = slow = oxidative = fatigue-resistant. White = fast = glycolytic = fatigues quickly."},
    {cat:"Fibre types", q:"What is the size principle of motor unit recruitment?", a:"Small type I motor units are recruited first and large type II units last, as required force increases."},

    {cat:"Nerve AP", q:"State the resting membrane potential, threshold and peak of a neuronal action potential.", a:"Resting −70 mV, threshold −55 mV, peak +30 mV."},
    {cat:"Nerve AP", q:"How long does a neuronal action potential last?", a:"Only about 1–2 ms — a fraction of the 200–300 ms cardiac action potential."},
    {cat:"Nerve AP", q:"What happens at threshold in a neurone?", a:"At −55 mV the fast voltage-gated sodium channels open and sodium floods in, driving regenerative depolarisation to about +30 mV."},
    {cat:"Nerve AP", q:"What causes repolarisation of the neuronal action potential?", a:"Sodium channels inactivate while voltage-gated potassium channels open, so potassium efflux restores the negative interior."},
    {cat:"Nerve AP", q:"Why does hyperpolarisation (undershoot) occur?", a:"Potassium channels are slow to close, so efflux continues past the resting potential. This underlies the relative refractory period."},
    {cat:"Nerve AP", q:"What restores the ionic gradients after an action potential?", a:"The Na+/K+ ATPase — 3 sodium out for 2 potassium in."},
    {cat:"Nerve AP", q:"Why can neurones be tetanised but cardiac muscle cannot?", a:"The neuronal action potential has NO plateau phase, so it lasts only 1–2 ms with a very short refractory period. Cardiac muscle has a long calcium plateau and a refractory period that outlasts contraction."},
    {cat:"Nerve AP", q:"What maintains the resting membrane potential?", a:"Mainly potassium permeability, with the electrogenic Na+/K+ ATPase keeping the interior more negative."},
    {cat:"Nerve AP", q:"What is saltatory conduction?", a:"Depolarisation jumping between nodes of Ranvier in myelinated fibres, greatly increasing conduction velocity."},

    {cat:"Reflexes", q:"Compare monosynaptic and polysynaptic reflexes by number of synapses and speed.", a:"Monosynaptic has ONE synapse, no interneurone, and is very fast. Polysynaptic has TWO OR MORE synapses, an interneurone is present, and it is slower."},
    {cat:"Reflexes", q:"Compare the reflex arcs.", a:"Monosynaptic: sensory neurone directly to motor neurone. Polysynaptic: sensory to interneurone to motor."},
    {cat:"Reflexes", q:"What are the functions of each reflex type?", a:"Monosynaptic maintains muscle tone and posture. Polysynaptic is protective and co-ordinated."},
    {cat:"Reflexes", q:"Give examples of each reflex type.", a:"Monosynaptic: the stretch reflex — knee jerk and ankle jerk. Polysynaptic: the withdrawal (flexor) reflex and crossed extensor reflex, such as touching something hot."},
    {cat:"Reflexes", q:"Describe the stretch reflex step by step.", a:"Tapping the tendon stretches the muscle; the muscle spindle detects it and fires Ia afferents to the cord; the sensory neurone synapses directly on the alpha motor neurone releasing glutamate (EPSP); the muscle contracts."},
    {cat:"Reflexes", q:"What is reciprocal inhibition?", a:"An inhibitory interneurone releases glycine onto the antagonist's motor neurone, producing an IPSP that relaxes it while the agonist contracts."},
    {cat:"Reflexes", q:"Name the main excitatory and inhibitory transmitters in reflex arcs.", a:"Glutamate is excitatory (EPSP). Glycine is the main inhibitory transmitter in the spinal cord, GABA in the brain (IPSP)."},
    {cat:"Reflexes", q:"Which muscle initiates the ankle jerk, and at which level?", a:"The gastrocnemius, at S1–S2. The knee jerk is L3–L4."},
    {cat:"Reflexes", q:"Which reflexes are always polysynaptic?", a:"All autonomic reflexes, and all nociceptive (pain) withdrawal reflexes."},

    {cat:"Spinal shock", q:"What happens to reflexes immediately after spinal cord transection?", a:"ALL reflexes below the lesion are lost — flaccid areflexia with loss of tone and of autonomic reflexes."},
    {cat:"Spinal shock", q:"What happens to reflexes later in spinal cord injury?", a:"They return and become EXAGGERATED — hyper-reflexia, spasticity, clonus and an upgoing plantar — because descending inhibition has been removed. This takes days to weeks."},
    {cat:"Spinal shock", q:"What is the anaesthetic consequence of denervation in spinal cord injury?", a:"Extrajunctional acetylcholine receptors proliferate, making suxamethonium dangerous from about 24–48 hours after injury, with risk of severe hyperkalaemia for up to a year."},
    {cat:"Spinal shock", q:"What is the defect in malignant hyperthermia at the muscle level?", a:"An abnormal ryanodine receptor (RYR1) causing uncontrolled calcium release from the sarcoplasmic reticulum on exposure to volatiles or suxamethonium."}
  ]
});
