window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "cardiac-cycle",
  title: "Cardiac Cycle",
  emoji: "💓",
  subtitle: "Phases · PV loop · heart sounds · CVP waveform · preload, afterload, contractility",
  colors: {
    front1: "#173A2E", front2: "#A8123E",
    back1: "#FDE68A", back2: "#BBF7D0", backText: "#152420",
    chips: ["#A8123E","#173A2E","#1B5FA8","#7A3B9E","#0E7A66","#B4690E","#ff9a3d","#ffd93d"]
  },
  cards: [
    {cat:"ECG timing", q:"What does the P wave trigger mechanically?", a:"Atrial contraction — the 'atrial kick', supplying the final portion of ventricular filling."},
    {cat:"ECG timing", q:"What does the PR interval represent?", a:"AV nodal delay, which allows ventricular filling to complete before systole begins."},
    {cat:"ECG timing", q:"Which mechanical event follows the QRS?", a:"Ventricular contraction. S1 occurs at the end of the QRS as the AV valves close."},
    {cat:"ECG timing", q:"What does the ST segment correspond to?", a:"The plateau (phase 2) with the ventricles fully depolarised — mechanically this is ejection."},
    {cat:"ECG timing", q:"Which sound coincides with the end of the T wave?", a:"S2 — aortic and pulmonary valve closure, marking the start of isovolumetric relaxation and therefore diastole."},

    {cat:"Heart sounds", q:"What causes S1 and when does it occur?", a:"Closure of the mitral and tricuspid valves when ventricular pressure exceeds atrial pressure. It coincides with the end of the QRS and marks the start of isovolumetric contraction."},
    {cat:"Heart sounds", q:"What causes S2 and what does it mark?", a:"Closure of the aortic and pulmonary valves at the end of the T wave. It marks the start of isovolumetric relaxation and the beginning of diastole."},
    {cat:"Heart sounds", q:"Link each heart sound to an isovolumetric phase.", a:"S1 → isovolumetric contraction (IVC). S2 → isovolumetric relaxation (IVR). Systole is the interval between them."},
    {cat:"Heart sounds", q:"What is S3 and when is it normal?", a:"Rapid ventricular filling in early diastole. Normal in the young, athletes and pregnancy; pathological in heart failure and volume overload."},
    {cat:"Heart sounds", q:"What is S4 and is it ever normal?", a:"Atrial contraction against a stiff, non-compliant ventricle. Generally pathological — hypertension, aortic stenosis, HCM. It cannot occur in atrial fibrillation."},

    {cat:"Phases", q:"Describe late diastole (passive filling).", a:"AV valves open, semilunar valves closed. About 80% of ventricular filling is passive. The P wave then triggers the atrial kick, completing EDV at about 120–130 ml."},
    {cat:"Phases", q:"What defines isovolumetric contraction?", a:"Triggered by the QRS. All four valves are shut so volume is constant while pressure rises steeply, from mitral closure (S1) up to about 80 mmHg when the aortic valve opens."},
    {cat:"Phases", q:"What happens during rapid ejection?", a:"Aortic and pulmonary valves are open; corresponds to the ST segment. Peak LV pressure about 120 mmHg, and roughly 70% of the stroke volume is ejected in this early phase."},
    {cat:"Phases", q:"What defines isovolumetric relaxation?", a:"All valves shut again as the ventricle relaxes and pressure falls. Begins with aortic closure (S2, dicrotic notch) and ends when LV pressure falls below atrial pressure, opening the mitral valve."},
    {cat:"Phases", q:"How much does atrial systole contribute to filling?", a:"About 10% at rest, rising to as much as 40% at high heart rates when diastole is short."},
    {cat:"Phases", q:"Why is atrial fibrillation poorly tolerated in aortic stenosis or HCM?", a:"Loss of the atrial kick removes a filling contribution that a stiff, non-compliant ventricle depends on — stroke volume falls sharply."},

    {cat:"PV loop", q:"What happens at point A of the pressure-volume loop?", a:"The mitral valve CLOSES as LV pressure exceeds LA pressure. This gives S1 and starts isovolumetric contraction; it is the end of diastole."},
    {cat:"PV loop", q:"What happens at point B?", a:"The aortic valve OPENS at about 80 mmHg, when LV pressure exceeds aortic pressure. Ejection begins."},
    {cat:"PV loop", q:"What happens at point C?", a:"The aortic valve CLOSES as LV pressure falls below aortic pressure. Gives S2 and the dicrotic notch, and marks ESV of about 50 ml."},
    {cat:"PV loop", q:"What happens at point D?", a:"The mitral valve OPENS as LA pressure exceeds LV pressure. Ventricular filling begins."},
    {cat:"PV loop", q:"In which direction is the PV loop traversed?", a:"Anticlockwise, starting from A."},
    {cat:"PV loop", q:"What does the area inside the PV loop represent?", a:"Stroke work."},
    {cat:"PV loop", q:"How does increased preload change the loop?", a:"It widens to the right — EDV rises and stroke volume rises via the Frank-Starling mechanism."},
    {cat:"PV loop", q:"How does increased afterload change the loop?", a:"The loop becomes taller and narrower: ESV rises and stroke volume falls."},
    {cat:"PV loop", q:"How does increased contractility change the loop?", a:"The end-systolic pressure-volume relationship steepens, so ESV falls and both stroke volume and ejection fraction rise."},

    {cat:"Numbers", q:"State normal EDV, ESV, SV and EF.", a:"EDV 120–130 ml · ESV about 50 ml · SV = EDV − ESV ≈ 70 ml · EF = SV/EDV ≈ 55–70%."},
    {cat:"Numbers", q:"At what pressure does the aortic valve open?", a:"At about 80 mmHg — that is, at the aortic diastolic pressure."},
    {cat:"Numbers", q:"What is peak LV systolic pressure, and what is the maximum the LV can generate?", a:"Peak working pressure is about 120 mmHg. The theoretical maximum isovolumetric pressure against a closed outflow is around 300 mmHg — a different quantity."},
    {cat:"Numbers", q:"What is peak RV systolic pressure?", a:"20–25 mmHg — the pulmonary circulation is a low-pressure system."},
    {cat:"Numbers", q:"What is normal atrial pressure during atrial contraction?", a:"0–5 mmHg, with left atrial pressure slightly higher than right."},
    {cat:"Numbers", q:"What is normal LV end-diastolic pressure?", a:"5–12 mmHg. It rises in failure and in stiff, non-compliant ventricles."},

    {cat:"CVP waveform", q:"Name the components of the CVP/JVP waveform.", a:"Three positive waves — a, c and v — and two descents, x and y."},
    {cat:"CVP waveform", q:"What causes the a wave, and when is it absent?", a:"Atrial contraction. Absent in atrial fibrillation."},
    {cat:"CVP waveform", q:"What are cannon a waves and what causes them?", a:"Giant a waves from atrial contraction against a closed tricuspid valve, occurring in AV dissociation — classically complete heart block."},
    {cat:"CVP waveform", q:"What causes the c wave?", a:"Bulging of the tricuspid valve into the atrium during isovolumetric contraction."},
    {cat:"CVP waveform", q:"What does the x descent represent?", a:"Atrial relaxation in mid-systole, with downward displacement of the valve ring."},
    {cat:"CVP waveform", q:"What causes the v wave?", a:"Rapid atrial filling against a closed tricuspid valve, ending as isovolumetric relaxation finishes."},
    {cat:"CVP waveform", q:"What does the y descent represent?", a:"Early ventricular filling once the tricuspid valve opens."},
    {cat:"CVP waveform", q:"How do a, c and v relate to the ECG?", a:"a follows P, c follows R, and v follows T."},
    {cat:"CVP waveform", q:"What happens to the x descent in tricuspid regurgitation?", a:"It is reduced or absent, replaced by a giant fused c-v wave. Hence 'x is absent in tricuspid incompetence'."},
    {cat:"CVP waveform", q:"Which waveform changes occur in constrictive pericarditis?", a:"Prominent x AND y descents — the classic M or W pattern."},
    {cat:"CVP waveform", q:"How does cardiac tamponade differ from constriction on the CVP trace?", a:"Tamponade shows a prominent x descent but a BLUNTED y, because filling is impeded throughout diastole so early filling cannot occur. Constriction has both descents prominent."},
    {cat:"CVP waveform", q:"What causes giant v waves?", a:"Tricuspid regurgitation."},

    {cat:"Loading", q:"Define preload and its effect.", a:"Ventricular fibre stretch at end-diastole, clinically related to EDV and EDP. Increasing it raises EDV and therefore stroke volume, via Frank-Starling, within physiological limits."},
    {cat:"Loading", q:"Define afterload and its effect.", a:"The load the ventricle ejects against — for the LV, aortic pressure and SVR. Increasing it raises ESV and reduces stroke volume."},
    {cat:"Loading", q:"Define contractility and its effect.", a:"Intrinsic myocardial force generation, independent of loading conditions. Increasing it lowers ESV and raises both stroke volume and ejection fraction."},
    {cat:"Loading", q:"Contrast systolic and diastolic heart failure.", a:"Systolic: reduced contractility and impaired ejection, EF reduced, LVESV raised. Diastolic: impaired relaxation and reduced compliance, EF preserved, LVESV normal or low, filling pressures markedly raised."},
    {cat:"Loading", q:"What happens to the cardiac variables during exercise?", a:"Heart rate rises markedly, contractility rises, stroke volume rises, LVESV falls, LVEDV is maintained at a higher filling level, and cardiac output can approach 20 L/min."}
  ]
});
