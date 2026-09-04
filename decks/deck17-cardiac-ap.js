window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "cardiac-ap",
  title: "Cardiac AP",
  emoji: "📈",
  subtitle: "Fast vs slow action potentials · phases · ions · refractoriness · ECG · drilled from the notes sheet",
  colors: {
    front1: "#14213D", front2: "#A8123E",
    back1: "#FDF2EE", back2: "#F2CCBF", backText: "#16202E",
    chips: ["#A8123E","#14213D","#1B5FA8","#7A3B9E","#0E7A66","#ff9a3d","#ffd93d","#7bd88f"]
  },
  cards: [
    {cat:"Fast AP phases", q:"What happens in phase 0 of the ventricular myocyte action potential?", a:"Rapid depolarisation. The stimulus drags the membrane to threshold −70 mV, fast Na+ channels open and Na+ rushes in, peaking at about +20 mV where they inactivate. Corresponds to the QRS."},
    {cat:"Fast AP phases", q:"What happens in phase 1?", a:"Early rapid repolarisation — a small notch back to about 0 mV, from transient outward K+ efflux with some Cl− entry. Ca2+ channels are only just beginning to open."},
    {cat:"Fast AP phases", q:"What happens in phase 2, and how long does it last?", a:"The plateau, about 200 ms. Inward L-type Ca2+ current is balanced by outward K+, holding voltage flat. This Ca2+ triggers calcium-induced calcium release from the SR. Corresponds to the ST segment."},
    {cat:"Fast AP phases", q:"What happens in phase 3?", a:"Rapid repolarisation. Ca2+ channels close while delayed-rectifier K+ channels open, so K+ efflux dominates and the membrane falls back to −90 mV. Corresponds to the T wave."},
    {cat:"Fast AP phases", q:"What happens in phase 4 of the myocyte?", a:"The resting membrane potential, held at −90 mV by IK1. Gradients are restored by the Na+/K+ ATPase (3 Na+ out, 2 K+ in) and the Na+–Ca2+ exchanger (3 Na+ in, 1 Ca2+ out). There is NO spontaneous drift."},
    {cat:"Fast AP phases", q:"Which ECG components correspond to phases 0, 2 and 3?", a:"Phase 0 → QRS. Phase 2 (plateau) → ST segment. Phase 3 → T wave."},

    {cat:"Slow AP phases", q:"Why does the SA node have no true resting membrane potential?", a:"Phase 4 is a slow diastolic depolarisation (the pre-potential): from a maximum diastolic potential of −60 mV the membrane drifts steadily up to threshold −40 mV, so it never sits still."},
    {cat:"Slow AP phases", q:"Which currents drive phase 4 in the SA node?", a:"The funny current If (Na+ entry through HCN channels), fading K+ efflux, and near −50 mV T-type Ca2+ channels giving the final push."},
    {cat:"Slow AP phases", q:"What carries phase 0 in the SA node, and why is the upstroke slow?", a:"L-type Ca2+ channels, opening at threshold −40 mV. Ca2+ channels are slow to open and slow to conduct, so the slope is shallow — hence slow conduction and the AV delay."},
    {cat:"Slow AP phases", q:"Why do fast Na+ channels play no role in the nodal action potential?", a:"At a maximum diastolic potential of −60 mV they are permanently inactivated."},
    {cat:"Slow AP phases", q:"Which phases are absent in the nodal action potential?", a:"Phases 1 and 2 — there is no overshoot notch and no plateau. Only phases 0, 3 and 4 are present."},
    {cat:"Slow AP phases", q:"What is the peak voltage reached by a nodal action potential?", a:"Only about 0 to +10 mV — the Ca2+ current is too small to drive it higher. (+20 mV is the VENTRICULAR figure.)"},

    {cat:"Fast vs slow", q:"Compare the baseline potential of a myocyte and a nodal cell.", a:"Myocyte: true stable RMP at −90 mV. Node: no RMP, maximum diastolic potential −60 mV with continuous drift."},
    {cat:"Fast vs slow", q:"Compare the thresholds.", a:"Myocyte −70 mV; node −40 mV."},
    {cat:"Fast vs slow", q:"Compare the upstroke slopes.", a:"Myocyte very steep, about 200–500 V/s (Na+). Node shallow, about 1–10 V/s (Ca2+)."},
    {cat:"Fast vs slow", q:"Compare conduction velocities.", a:"Fast tissue 0.3–1 m/s (Purkinje about 4 m/s). Nodal tissue 0.02–0.1 m/s, which produces the AV delay."},
    {cat:"Fast vs slow", q:"How does refractoriness differ between fast and slow tissue?", a:"Fast tissue: voltage-dependent, ARP about 250 ms. Nodal tissue: time-dependent, with recovery outlasting repolarisation."},
    {cat:"Fast vs slow", q:"Which drugs act preferentially on fast versus slow tissue?", a:"Fast: class I antiarrhythmics (Na+ channel blockers). Slow: class IV (verapamil, diltiazem), beta blockers, and ivabradine acting on If."},
    {cat:"Fast vs slow", q:"Why does nodal tissue not appear on the surface ECG?", a:"It is far too small a mass of tissue to generate a detectable surface signal — so there is no ECG correlate of the nodal action potential."},

    {cat:"Refractoriness", q:"Define the absolute refractory period and its duration in ventricular muscle.", a:"About 250 ms, covering phases 0, 1, 2 and most of 3. No stimulus of any strength can trigger a second action potential, because Na+ channels are inactivated."},
    {cat:"Refractoriness", q:"Define the relative refractory period.", a:"About 50 ms, from late phase 3 into early phase 4. A stronger-than-normal stimulus can produce an action potential."},
    {cat:"Refractoriness", q:"Why can cardiac muscle not be tetanised?", a:"The absolute refractory period lasts almost as long as the contraction itself, so the muscle has relaxed before it can be re-excited. No summation, no tetany — exactly what a pump requires."},

    {cat:"Automaticity", q:"What is the intrinsic rate of the SA node, and why is the resting rate lower?", a:"About 100/min intrinsically, reduced to roughly 70/min by resting vagal tone."},
    {cat:"Automaticity", q:"How does sympathetic stimulation increase heart rate?", a:"Noradrenaline → beta-1 → cAMP rises → increased If and Ca2+ current → STEEPER phase 4 slope → threshold reached sooner."},
    {cat:"Automaticity", q:"How does parasympathetic stimulation slow the heart?", a:"ACh → M2 → opens K(ACh) channels and lowers cAMP → more negative maximum diastolic potential and a FLATTER phase 4 → longer climb to threshold."},
    {cat:"Automaticity", q:"What single feature does all autonomic control of heart rate act upon?", a:"The slope of phase 4 (plus the level of the maximum diastolic potential). Everything that changes heart rate changes that slope."},
    {cat:"Automaticity", q:"Which tissue can act as a latent pacemaker and at what rate?", a:"Purkinje fibres, at about 15–40/min, because they have a slow phase 4 drift. AV nodal escape is roughly 40–60/min."},

    {cat:"Other tissues", q:"How does the atrial action potential differ from the ventricular one?", a:"Shorter (about 150 ms) and triangular, with a poorly developed plateau, because a larger transient outward K+ current cuts it short."},
    {cat:"Other tissues", q:"What is distinctive about the Purkinje action potential?", a:"The longest action potential and the steepest phase 0, giving the fastest conduction at about 4 m/s. It also has a slow phase 4 drift allowing latent pacemaker activity."},

    {cat:"Ion channels & pumps", q:"State the stoichiometry of the Na+/K+ ATPase and the Na+–Ca2+ exchanger.", a:"Na+/K+ ATPase: 3 Na+ out, 2 K+ in (electrogenic, ATP-dependent). Na+–Ca2+ exchanger: 3 Na+ in, 1 Ca2+ out."},
    {cat:"Ion channels & pumps", q:"Which current maintains the resting membrane potential in the myocyte?", a:"IK1, the inward-rectifier potassium current, holding it at −90 mV."},
    {cat:"Ion channels & pumps", q:"What is the funny current If, and why is it called 'funny'?", a:"A mixed Na+/K+ inward current through HCN channels driving nodal phase 4. It is odd because it is ACTIVATED BY hyperpolarisation, unlike most voltage-gated currents. It is the target of ivabradine."},
    {cat:"Ion channels & pumps", q:"Distinguish T-type and L-type calcium channels in the node.", a:"T-type (transient) open around −50 mV in LATE PHASE 4, giving the final push to threshold. L-type (long-lasting) open at −40 mV and carry PHASE 0."},
    {cat:"Ion channels & pumps", q:"How does digoxin exploit the Na+–Ca2+ exchanger?", a:"By inhibiting the Na+/K+ ATPase, intracellular Na+ rises, reducing the gradient driving the exchanger, so less Ca2+ is extruded and intracellular Ca2+ rises — increasing contractility."},

    {cat:"Common traps", q:"Trap: which calcium channel carries nodal phase 0?", a:"L-type, NOT T-type. T-type belongs to late phase 4. This is a very commonly reversed pair."},
    {cat:"Common traps", q:"Trap: is nodal phase 4 hyperpolarising?", a:"No — it is DEPOLARISING. What is true is that the funny current If is ACTIVATED BY hyperpolarisation, which is where the confusion arises."},
    {cat:"Common traps", q:"Trap: does calcium entry define phase 1?", a:"No. Phase 1 is essentially the transient outward K+ current with some Cl− entry. Ca2+ entry defines PHASE 2."},
    {cat:"Common traps", q:"Trap: what is the peak voltage of a nodal action potential?", a:"About 0 to +10 mV. The +20 mV figure belongs to the ventricular myocyte."},
    {cat:"Common traps", q:"Quick hook: what does the ion carrying phase 0 tell you?", a:"Na+ is fast, Ca2+ is slow — whichever ion carries phase 0 tells you that tissue's conduction velocity."},
    {cat:"Common traps", q:"Quick hook linking the plateau to the ECG and to mechanics?", a:"Plateau = ST segment = no tetany. One structure explains both the ECG segment and why the heart cannot summate."}
  ]
});
