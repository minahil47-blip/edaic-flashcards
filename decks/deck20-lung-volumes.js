window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "lung-volumes",
  title: "Lung Volumes",
  emoji: "🎈",
  subtitle: "Volumes & capacities · spirometry limits · helium, washout, plethysmography · gas analysers",
  colors: {
    front1: "#0E7A66", front2: "#1B5FA8",
    back1: "#FEF3C7", back2: "#E9D5FF", backText: "#0f2b23",
    chips: ["#0E7A66","#1B5FA8","#7A3B9E","#A8123E","#B4690E","#5ab0ff","#7bd88f","#ffd93d"]
  },
  cards: [
    {cat:"Definitions", q:"What is the difference between a lung volume and a capacity?", a:"A volume cannot be subdivided. A capacity is two or more volumes added together."},
    {cat:"Definitions", q:"Define tidal volume and give its normal value.", a:"Air moved in or out during quiet breathing. About 500 ml, or roughly 7 ml/kg."},
    {cat:"Definitions", q:"Define inspiratory reserve volume and give its value.", a:"The maximum extra volume that can be inspired after a normal inspiration. About 3000 ml."},
    {cat:"Definitions", q:"Define expiratory reserve volume and give its value.", a:"The maximum extra volume that can be expired after a normal expiration. About 1100 ml."},
    {cat:"Definitions", q:"Define residual volume and give its value.", a:"The air remaining in the lungs after maximal expiration. About 1200 ml."},

    {cat:"Capacities", q:"Define inspiratory capacity and its formula.", a:"IC = tidal volume + IRV = about 3500 ml."},
    {cat:"Capacities", q:"Define functional residual capacity and its formula.", a:"FRC = ERV + RV = about 2300 ml. It is the volume in the lungs at the end of a normal expiration."},
    {cat:"Capacities", q:"Define vital capacity and its formula.", a:"VC = IRV + tidal volume + ERV = about 4600 ml."},
    {cat:"Capacities", q:"Define total lung capacity and give two formulas.", a:"TLC = VC + RV = FRC + IC = about 5800 ml."},
    {cat:"Capacities", q:"State the four volumes with their values as a memory string.", a:"Tidal 500 + IRV 3000 + ERV 1100 + RV 1200 = TLC 5800 ml."},

    {cat:"Spirometry", q:"Which volumes and capacities CAN simple spirometry measure?", a:"Tidal volume, IRV, ERV, inspiratory capacity and vital capacity."},
    {cat:"Spirometry", q:"Which CANNOT be measured by simple spirometry, and why?", a:"RV, FRC and TLC — because each contains residual volume, which by definition cannot be exhaled and so cannot enter the spirometer."},
    {cat:"Spirometry", q:"State the single rule for spirometry limits.", a:"If it contains residual volume, simple spirometry cannot measure it."},
    {cat:"Spirometry", q:"Once FRC is known, how do you derive RV and TLC?", a:"RV = FRC − ERV, and TLC = FRC + IC (or VC + RV)."},

    {cat:"Measuring FRC", q:"How does helium dilution measure FRC?", a:"A closed circuit in which an inert, insoluble tracer equilibrates throughout the communicating lung. Helium is detected by thermal conductivity."},
    {cat:"Measuring FRC", q:"State the helium dilution formula.", a:"FRC = (C1 × V1) / C2 − V1, where C1 is initial helium concentration, V1 the initial spirometer volume and C2 the final equilibrated concentration."},
    {cat:"Measuring FRC", q:"What is the limitation of helium dilution?", a:"It UNDERESTIMATES FRC when gas is trapped or poorly ventilated, because the tracer never reaches those regions."},
    {cat:"Measuring FRC", q:"How does nitrogen washout measure FRC?", a:"The patient breathes 100% oxygen; all resident nitrogen is washed out and its total volume measured. It also underestimates with trapped gas."},
    {cat:"Measuring FRC", q:"On what principle does body plethysmography work?", a:"Boyle's law — P1V1 = P2V2 — in a sealed box, measuring total thoracic gas volume."},
    {cat:"Measuring FRC", q:"Why is plethysmography preferred in severe obstruction?", a:"It INCLUDES trapped and poorly communicating gas, so it is accurate where the dilution methods under-read."},
    {cat:"Measuring FRC", q:"In emphysema, what does the difference between plethysmographic and helium-dilution FRC represent?", a:"The volume of trapped gas — plethysmography reads higher, and the gap quantifies gas trapping."},

    {cat:"Gas analysis", q:"How is helium measured?", a:"By thermal conductivity, or by mass spectrometry."},
    {cat:"Gas analysis", q:"How is oxygen concentration measured?", a:"Paramagnetic analyser (oxygen has unpaired electrons and is drawn into a magnetic field), fuel cell, or polarographic (Clark) electrode."},
    {cat:"Gas analysis", q:"Which gases can infrared absorption measure, and which can it not?", a:"It works for molecules of two DIFFERENT atoms — CO2, nitrous oxide and volatile agents. It cannot measure oxygen, nitrogen, helium or argon."},
    {cat:"Gas analysis", q:"How are argon and xenon measured?", a:"By mass spectrometry — they are used as tracer gases."},
    {cat:"Gas analysis", q:"Which technique can identify essentially any anaesthetic gas?", a:"Mass spectrometry; Raman spectrometry is an alternative for volatile agents."},

    {cat:"Closing capacity", q:"Define closing capacity.", a:"Closing capacity = residual volume + closing volume."},
    {cat:"Closing capacity", q:"Define closing volume.", a:"The lung volume at which small dependent airways begin to close during expiration, because they lack cartilage and rely on radial traction to stay open."},
    {cat:"Closing capacity", q:"At what ages does closing capacity exceed FRC?", a:"About age 44 supine and about age 66 erect. Beyond that, airways close during normal tidal breathing, causing shunt."},
    {cat:"Closing capacity", q:"Which factors reduce FRC towards closing capacity?", a:"Supine position, general anaesthesia (a fall of about 20%), obesity, pregnancy, and abdominal distension. Closing capacity itself is unaffected by position."},
    {cat:"Closing capacity", q:"How is closing volume measured?", a:"By the single-breath nitrogen washout (Fowler's method), or a tracer bolus technique."},
    {cat:"Closing capacity", q:"Why does PaO2 fall with age?", a:"Closing capacity rises with age and eventually exceeds FRC, so dependent airways close during tidal breathing, producing shunt and V/Q mismatch."},

    {cat:"Applied", q:"Why does FRC matter so much during induction of anaesthesia?", a:"FRC is the oxygen store. It falls by about 20% on induction, which shortens safe apnoea time — and further still in obesity, pregnancy and the supine position."},
    {cat:"Applied", q:"How do obstructive and restrictive patterns differ on spirometry?", a:"Obstructive: FEV1/FVC ratio reduced below 0.7, with raised RV and TLC from gas trapping. Restrictive: ratio preserved or raised, with all volumes reduced."},
    {cat:"Applied", q:"What is anatomical dead space and its normal value?", a:"The conducting airways that take no part in gas exchange — about 2 ml/kg, roughly 150 ml in an adult."},
    {cat:"Applied", q:"How does physiological dead space differ from anatomical?", a:"Physiological dead space = anatomical + alveolar dead space, where alveolar dead space is alveoli ventilated but not perfused. Normal Vd/Vt is about 0.3."}
  ]
});
