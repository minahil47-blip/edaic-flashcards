window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "cvs-core",
  title: "CVS Core",
  emoji: "❤️",
  subtitle: "Murmurs · Cardiac cycle · CO · Drugs · Shock · Valve goals",
  colors: {
    front1: "#a63dff", front2: "#ff3d81",
    back1: "#3ddc97", back2: "#3dd6d6", backText: "#0c2b23",
    chips: ["#ff3d81","#ff9a3d","#ffd93d","#3ddc97","#3dd6d6","#3d8bff","#a63dff"]
  },
  cards: [
    {cat:"Cycle", q:"What determines LV end-diastolic volume/pressure?", a:"Preload."},
    {cat:"Cycle", q:"Afterload is clinically related to which vascular parameter?", a:"SVR (systemic vascular resistance)."},
    {cat:"Cycle", q:"Effect of ↑ preload on stroke volume?", a:"↑ SV, via the Frank–Starling mechanism."},
    {cat:"Cycle", q:"Effect of ↑ afterload on SV and ESV?", a:"↓ SV and ↑ ESV."},
    {cat:"Cycle", q:"Effect of ↑ contractility on ESV and SV?", a:"↓ ESV and ↑ SV."},
    {cat:"Cycle", q:"Formula for ejection fraction (EF)?", a:"EF = SV / EDV. Normal ≈ 55–70%."},
    {cat:"Cycle", q:"What causes S1 and S2?", a:"S1 = AV valves closing. S2 = semilunar valves closing."},
    {cat:"Cycle", q:"What is S3 and when can it be normal?", a:"Rapid ventricular filling; can be normal in young people/pregnancy."},
    {cat:"Cycle", q:"What is S4 and is it usually normal?", a:"Atrial contraction against a stiff ventricle; generally pathological."},

    {cat:"CO", q:"Formula for cardiac output?", a:"CO = HR × SV."},
    {cat:"CO", q:"Formula linking MAP, CO and SVR?", a:"MAP ≈ CO × SVR."},
    {cat:"CO", q:"Formula for stroke volume?", a:"SV = EDV − ESV."},
    {cat:"CO", q:"Why does very high HR reduce CO?", a:"Diastolic filling time and coronary perfusion both fall."},
    {cat:"CO", q:"In which two valve lesions is tachycardia especially poorly tolerated?", a:"Aortic stenosis and HCM."},

    {cat:"Coronary", q:"During which phase does left coronary flow mainly occur?", a:"Diastole."},
    {cat:"Coronary", q:"Formula for coronary perfusion pressure?", a:"Aortic diastolic pressure − LVEDP."},
    {cat:"Coronary", q:"Three things that reduce coronary perfusion?", a:"↓ Diastolic BP, ↑ LVEDP, and tachycardia."},
    {cat:"Coronary", q:"Which myocardial layer is most vulnerable to ischaemia?", a:"The subendocardium."},

    {cat:"ECG", q:"Normal PR interval range?", a:"120–200 ms."},
    {cat:"ECG", q:"Normal QRS duration limit?", a:"Less than 120 ms."},
    {cat:"ECG", q:"Sequence of ECG changes in hyperkalaemia?", a:"Tall peaked T → PR prolongation → QRS widening → sine wave."},
    {cat:"ECG", q:"ECG features of hypokalaemia?", a:"ST depression, flattened T waves, U waves."},
    {cat:"ECG", q:"Effect of hypercalcaemia and hypocalcaemia on QT?", a:"Hypercalcaemia shortens QT; hypocalcaemia prolongs QT."},

    {cat:"Murmurs", q:"Describe the aortic stenosis murmur and pulse.", a:"Ejection systolic, right 2nd ICS, radiates to carotids; slow-rising, low-volume pulse; narrow pulse pressure."},
    {cat:"Murmurs", q:"Classic triad of symptoms in severe AS?", a:"Syncope, angina, dyspnoea."},
    {cat:"Murmurs", q:"Describe the aortic regurgitation murmur and pulse.", a:"Early diastolic at left sternal edge; wide pulse pressure; bounding pulse."},
    {cat:"Murmurs", q:"Describe mitral stenosis auscultation findings.", a:"Mid-diastolic rumble at apex with opening snap; AF is common."},
    {cat:"Murmurs", q:"Describe the mitral regurgitation murmur.", a:"Pansystolic murmur at apex, radiating to the axilla."},
    {cat:"Murmurs", q:"Describe the VSD murmur.", a:"Pansystolic murmur at the left lower sternal edge."},
    {cat:"Murmurs", q:"How does the HCM murmur change with preload?", a:"Louder with ↓ preload (standing/Valsalva); quieter with ↑ preload/afterload."},

    {cat:"Receptors", q:"Effect of α1 receptor stimulation?", a:"Vasoconstriction → ↑ SVR."},
    {cat:"Receptors", q:"Effect of α2 receptor stimulation?", a:"↓ Sympathetic outflow."},
    {cat:"Receptors", q:"Effects of β1 receptor stimulation?", a:"↑ HR, ↑ contractility, ↑ conduction, ↑ renin release."},
    {cat:"Receptors", q:"Effects of β2 receptor stimulation?", a:"Bronchodilation, skeletal-muscle vasodilation, uterine relaxation."},
    {cat:"Receptors", q:"Effects of β3 receptor stimulation?", a:"Lipolysis and bladder detrusor relaxation."},

    {cat:"Drugs", q:"Phenylephrine — effect on HR, contractility, SVR?", a:"HR ↓/↔, contractility ↔, SVR ↑↑ (predominantly α agonist → reflex bradycardia)."},
    {cat:"Drugs", q:"Noradrenaline — effect on HR, contractility, SVR?", a:"HR ↑/↔, contractility ↑, SVR ↑↑."},
    {cat:"Drugs", q:"Adrenaline — effect on HR, contractility, SVR?", a:"HR ↑↑, contractility ↑↑, SVR ↑ or ↓ depending on dose."},
    {cat:"Drugs", q:"Dobutamine — effect on HR, contractility, SVR?", a:"HR ↑, contractility ↑↑, SVR ↓."},
    {cat:"Drugs", q:"Dopamine — effect on HR, contractility, SVR?", a:"HR ↑, contractility ↑; SVR ↑ at higher doses."},
    {cat:"Drugs", q:"Main haemodynamic effect of nitroglycerin?", a:"Mainly venodilation → ↓ preload; reflex HR may rise."},
    {cat:"Drugs", q:"Main haemodynamic effect of sodium nitroprusside?", a:"Marked ↓ SVR; reflex tachycardia may occur."},

    {cat:"Shock", q:"Haemodynamics of hypovolaemic shock?", a:"↓ Preload, ↓ CO, ↑ SVR."},
    {cat:"Shock", q:"Haemodynamics of cardiogenic shock?", a:"↓ CO, ↑ SVR, ↑ filling pressures."},
    {cat:"Shock", q:"Haemodynamics of distributive shock?", a:"↓ SVR; effective preload usually reduced; CO may initially be high."},
    {cat:"Shock", q:"Three classic causes of obstructive shock?", a:"PE, cardiac tamponade, tension pneumothorax."},

    {cat:"Starling", q:"Describe the Frank–Starling relationship.", a:"↑ Venous return → ↑ EDV → ↑ fibre stretch → ↑ force of contraction → ↑ SV."},
    {cat:"Starling", q:"How does a failing ventricle's curve differ?", a:"It operates on a flatter part of the curve, so excess fluid can cause pulmonary oedema."},

    {cat:"Tamponade", q:"Classic triad of cardiac tamponade?", a:"Hypotension + raised JVP + muffled heart sounds (Beck's triad)."},
    {cat:"Tamponade", q:"Other clinical features of tamponade?", a:"Tachycardia, pulsus paradoxus, electrical alternans."},
    {cat:"Tamponade", q:"Definitive treatment of tamponade?", a:"Urgent drainage (pericardiocentesis)."},
    {cat:"Tamponade", q:"Key anaesthetic principle in tamponade?", a:"Maintain preload and sympathetic tone — induction can precipitate cardiovascular collapse."},

    {cat:"PHTN/RV", q:"Which ventricle is especially sensitive to ↑ PVR?", a:"The right ventricle."},
    {cat:"PHTN/RV", q:"Factors that raise pulmonary vascular resistance?", a:"Hypoxia, hypercarbia, acidosis, high lung volumes, excessive PEEP."},

    {cat:"HF", q:"Consequence of left-sided heart failure?", a:"Pulmonary congestion/oedema."},
    {cat:"HF", q:"Consequences of right-sided heart failure?", a:"Systemic venous congestion: peripheral oedema, hepatomegaly, raised JVP."},
    {cat:"HF", q:"Difference between HFrEF and HFpEF?", a:"HFrEF = systolic dysfunction/reduced contractility. HFpEF = diastolic dysfunction/impaired relaxation & compliance."},

    {cat:"Valve goals", q:"Anaesthetic goals for aortic stenosis?", a:"Slow/normal HR, sinus rhythm, maintain preload & SVR."},
    {cat:"Valve goals", q:"Anaesthetic goals for aortic regurgitation?", a:"Avoid bradycardia; avoid excessive SVR."},
    {cat:"Valve goals", q:"Anaesthetic goals for mitral stenosis?", a:"Avoid tachycardia; maintain sinus rhythm if possible."},
    {cat:"Valve goals", q:"Anaesthetic goals for mitral regurgitation?", a:"Avoid bradycardia; reduce excessive afterload."},
    {cat:"Valve goals", q:"Anaesthetic goals for HCM?", a:"Maintain preload + afterload; avoid tachycardia and increased contractility."},

    {cat:"BP", q:"Approximation formula for MAP?", a:"MAP ≈ DBP + ⅓ pulse pressure."},
    {cat:"BP", q:"Formula for pulse pressure?", a:"Pulse pressure = SBP − DBP."},
    {cat:"BP", q:"Why does the ⅓ pulse-pressure rule become less accurate at very high HR?", a:"Because diastole shortens disproportionately at high heart rates."},

    {cat:"JVP", q:"What does the JVP reflect?", a:"Right atrial pressure."},
    {cat:"JVP", q:"What do the a, c and v waves represent?", a:"a = atrial contraction; c = tricuspid closure/ventricular contraction; v = venous filling against closed tricuspid valve."},
    {cat:"JVP", q:"What causes absent a waves?", a:"Atrial fibrillation."},
    {cat:"JVP", q:"What causes cannon a waves?", a:"AV dissociation, e.g. complete heart block."},
    {cat:"JVP", q:"What causes large v waves?", a:"Tricuspid regurgitation."},

    {cat:"Risk", q:"Name major high-risk features for perioperative cardiac risk.", a:"Unstable coronary syndrome, decompensated heart failure, significant arrhythmia, severe symptomatic valvular disease."},
    {cat:"Risk", q:"What functional capacity threshold is classically used?", a:"4 METs (≈ climbing a flight of stairs / walking uphill); >10 METs = vigorous activity."}
  ]
});
