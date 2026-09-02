window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "respiratory",
  title: "Respiratory",
  emoji: "🫁",
  subtitle: "Volumes · Gas exchange · Diffusion · Ventilators · Traps",
  colors: {
    front1: "#5ab0ff", front2: "#b98bff",
    back1: "#3dffc4", back2: "#3de8ff", backText: "#032032",
    chips: ["#3de8ff","#3dffc4","#ff6b6b","#ffcd3d","#b98bff","#5ab0ff","#ff8fb1","#c6ff3d"]
  },
  cards: [
    {cat:"Volumes", q:"Typical tidal volume (VT)?", a:"≈ 500 mL, or ≈ 7 mL/kg."},
    {cat:"Volumes", q:"Approximate IRV, ERV and RV?", a:"IRV ≈ 3.0 L, ERV ≈ 1.1 L, RV ≈ 1.2 L."},
    {cat:"Volumes", q:"What makes up inspiratory capacity (IC)?", a:"IC = VT + IRV ≈ 3.5 L."},
    {cat:"Volumes", q:"What makes up functional residual capacity (FRC)?", a:"FRC = ERV + RV ≈ 2.3 L."},
    {cat:"Volumes", q:"What makes up vital capacity (VC)?", a:"VC = IRV + VT + ERV ≈ 4.6 L."},
    {cat:"Volumes", q:"What makes up total lung capacity (TLC)?", a:"TLC = VC + RV ≈ 6 L."},
    {cat:"Volumes", q:"Which volumes/capacities cannot be measured by simple spirometry?", a:"RV, FRC and TLC — they require dilution, plethysmography or washout techniques (since they include RV)."},
    {cat:"Volumes", q:"What is FRC physiologically, and what reduces it?", a:"The resting end-expiratory lung volume; reduced by anaesthesia, obesity, pregnancy and the supine position."},

    {cat:"Ventilation", q:"Formula for minute ventilation (VE)?", a:"VE = VT × RR (e.g. 500 mL × 12 = 6 L/min)."},
    {cat:"Ventilation", q:"Formula for alveolar ventilation (VA)?", a:"VA = (VT − VD) × RR (e.g. (500−150) × 12 ≈ 4.2 L/min)."},
    {cat:"Ventilation", q:"How does VA relate to PaCO2?", a:"PaCO2 ≈ 0.863 × VCO2 / VA — if CO2 production is constant, ↓VA causes ↑PaCO2."},
    {cat:"Ventilation", q:"Why can rapid shallow breathing be dangerous despite normal VE?", a:"A larger fraction of each small breath is dead space, so VA (and CO2 clearance) falls even though VE looks adequate."},

    {cat:"Dead space", q:"What is anatomical dead space and its typical volume?", a:"Volume of the conducting airways that doesn't participate in gas exchange; ≈2 mL/kg (≈150 mL)."},
    {cat:"Dead space", q:"What is alveolar dead space?", a:"Ventilated alveoli that are poorly or not perfused."},
    {cat:"Dead space", q:"What is physiological dead space?", a:"Anatomical dead space + alveolar dead space."},
    {cat:"Dead space", q:"Name causes of increased dead space.", a:"Pulmonary embolism, emphysema, low cardiac output, excessive alveolar distension (e.g. high PEEP/VT)."},
    {cat:"Dead space", q:"State the Bohr equation for dead space fraction.", a:"VD/VT ≈ (PaCO2 − PECO2) / PaCO2."},
    {cat:"Dead space", q:"What does a widened PaCO2–ETCO2 gradient suggest?", a:"Increased dead space (e.g. PE, low cardiac output)."},

    {cat:"V/Q & shunt", q:"Normal overall V/Q ratio?", a:"≈ 0.8."},
    {cat:"V/Q & shunt", q:"How does V/Q vary from lung apex to base?", a:"V/Q is high at the apices and low at the bases (both ventilation and perfusion increase down the lung, but perfusion increases more)."},
    {cat:"V/Q & shunt", q:"What does V/Q = 0 represent, and give examples.", a:"Shunt — perfusion without ventilation. E.g. atelectasis, pneumonia, pulmonary oedema, right-to-left cardiac shunt."},
    {cat:"V/Q & shunt", q:"What does V/Q → ∞ represent, and give the classic example.", a:"Dead space — ventilation without perfusion. Classic example: pulmonary embolism."},
    {cat:"V/Q & shunt", q:"How do V/Q mismatch and true shunt differ in their response to oxygen?", a:"V/Q mismatch usually improves with supplemental O2; a true shunt responds poorly even to high FiO2."},

    {cat:"West zones", q:"Describe West Zone 1 and what increases it.", a:"PA > Pa > Pv → little/no blood flow; increased by hypovolaemia and high PEEP."},
    {cat:"West zones", q:"Describe West Zone 2.", a:"Pa > PA > Pv → flow depends on the Pa−PA gradient ('vascular waterfall')."},
    {cat:"West zones", q:"Describe West Zone 3.", a:"Pa > Pv > PA → flow depends on the Pa−Pv gradient (normal continuous flow)."},
    {cat:"West zones", q:"What is Zone 4?", a:"At low lung volumes, interstitial pressure can compress extra-alveolar vessels, especially with oedema or low lung volume."},

    {cat:"Compliance", q:"Define compliance.", a:"Compliance = ΔV/ΔP."},
    {cat:"Compliance", q:"How does emphysema affect compliance and elastic recoil?", a:"↑ Compliance and ↓ elastic recoil (alveolar destruction)."},
    {cat:"Compliance", q:"How does fibrosis affect compliance?", a:"↓ Compliance (stiffer lungs)."},
    {cat:"Compliance", q:"Formula for the respiratory time constant, and its significance?", a:"Time constant = resistance × compliance; a high value means slow lung emptying (risk of air trapping)."},
    {cat:"Compliance", q:"Name causes of increased airway resistance.", a:"Bronchoconstriction, secretions, mucosal oedema."},
    {cat:"Compliance", q:"Why can heliox help in high-resistance airway obstruction?", a:"Its low density reduces resistance to turbulent gas flow."},

    {cat:"Surfactant", q:"Which cells produce surfactant, and what is its major component?", a:"Type II pneumocytes; major phospholipid is DPPC (dipalmitoylphosphatidylcholine)."},
    {cat:"Surfactant", q:"What are the main physiological effects of surfactant?", a:"↓ Surface tension → ↑ compliance, ↓ work of breathing, prevents alveolar collapse/atelectasis."},
    {cat:"Surfactant", q:"State Laplace's law for an alveolus and its relevance to surfactant.", a:"P = 2T/r. Surfactant lowers surface tension (T), especially at low lung volumes, stabilising small alveoli against collapse."},
    {cat:"Surfactant", q:"Consequence of surfactant deficiency?", a:"↓ Compliance, ↑ work of breathing, alveolar collapse (e.g. neonatal RDS)."},
    {cat:"Surfactant", q:"How can fetal lung maturity be pharmacologically accelerated?", a:"Antenatal corticosteroids."},

    {cat:"Hypoxaemia", q:"List the five major causes of hypoxaemia.", a:"Low inspired O2, hypoventilation, V/Q mismatch, shunt, diffusion limitation."},
    {cat:"Hypoxaemia", q:"Which causes of hypoxaemia give a normal A–a gradient?", a:"Low inspired O2 and hypoventilation."},
    {cat:"Hypoxaemia", q:"Which causes of hypoxaemia give a raised A–a gradient?", a:"V/Q mismatch, shunt, diffusion limitation."},
    {cat:"Hypoxaemia", q:"Is PaO2 the same as oxygen content?", a:"No — anaemia can have a normal PaO2 but low CaO2 (oxygen content) because Hb is low."},

    {cat:"Hb–O2 curve", q:"Why is the Hb–O2 dissociation curve sigmoidal?", a:"Cooperative binding of O2 to the four haem subunits (binding of one O2 increases affinity for the next)."},
    {cat:"Hb–O2 curve", q:"What is P50 and its normal value?", a:"The PO2 at which Hb is 50% saturated; ≈ 26–27 mmHg."},
    {cat:"Hb–O2 curve", q:"What causes a right shift of the curve, and what's the effect?", a:"↑ CO2, ↑ H+/↓ pH, ↑ temperature, ↑ 2,3-DPG → ↓ Hb affinity for O2, ↑ tissue O2 unloading."},
    {cat:"Hb–O2 curve", q:"What causes a left shift of the curve, and what's the effect?", a:"↓ CO2, ↑ pH, ↓ temperature, ↓ 2,3-DPG, fetal Hb, carbon monoxide → ↑ Hb affinity for O2 (less unloading to tissues)."},
    {cat:"Hb–O2 curve", q:"Define the Bohr effect.", a:"↑ CO2/H+ in tissues reduces Hb's affinity for O2, promoting O2 unloading where it's needed."},
    {cat:"Hb–O2 curve", q:"Define the Haldane effect.", a:"Oxygenation of Hb in the lungs promotes CO2 unloading (deoxygenated Hb carries more CO2)."},

    {cat:"O2 transport", q:"State the oxygen content (CaO2) equation.", a:"CaO2 = (1.34 × Hb × SaO2) + (0.003 × PaO2)."},
    {cat:"O2 transport", q:"Which term dominates oxygen content — Hb/SaO2 or dissolved O2?", a:"The Hb-bound term (1.34 × Hb × SaO2); dissolved O2 contributes very little."},
    {cat:"O2 transport", q:"How does carbon monoxide poisoning affect O2 transport?", a:"CO occupies Hb-binding sites (reducing available sites) and left-shifts the remaining Hb–O2 curve, impairing unloading — while PaO2 itself can remain normal."},

    {cat:"CO2 transport", q:"What are the three forms in which CO2 is carried in blood, and approximate %?", a:"≈70% as bicarbonate, ≈20–25% as carbamino compounds, ≈5–10% dissolved."},
    {cat:"CO2 transport", q:"Which enzyme catalyses CO2 hydration in red cells, and the reaction?", a:"Carbonic anhydrase: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3−."},
    {cat:"CO2 transport", q:"What is the chloride shift?", a:"HCO3− exits the RBC in exchange for Cl− entering, maintaining electroneutrality."},
    {cat:"CO2 transport", q:"What happens to the carbonic anhydrase reaction in the lungs?", a:"It reverses, releasing CO2 for exhalation — facilitated by the Haldane effect."},

    {cat:"Control", q:"Where is the respiratory rhythm generated, and modified?", a:"Medullary centres generate the basic rhythm; pontine centres modify the breathing pattern."},
    {cat:"Control", q:"What do central chemoreceptors respond to?", a:"CSF H+ generated from CO2 diffusing across the blood-brain barrier — the major driver of acute ventilatory response to PaCO2."},
    {cat:"Control", q:"Where are peripheral chemoreceptors located and which nerves carry their signals?", a:"Carotid bodies (CN IX) and aortic bodies (CN X)."},
    {cat:"Control", q:"What do peripheral chemoreceptors respond to?", a:"↓ PaO2, ↑ PaCO2, ↓ pH."},
    {cat:"Control", q:"At what PaO2 does hypoxic ventilatory drive become prominent?", a:"Below ≈60 mmHg."},
    {cat:"Control", q:"What can blunt central CO2 responsiveness?", a:"Chronic hypercapnia (e.g. in longstanding COPD)."},

    {cat:"Asthma", q:"Define the pathophysiology of asthma.", a:"Variable/reversible airflow obstruction with airway hyperresponsiveness and inflammation."},
    {cat:"Asthma", q:"What are warning signs of impending respiratory failure in severe asthma?", a:"Silent chest, exhaustion, altered consciousness, and a rising or 'normalising' PaCO2."},
    {cat:"Asthma", q:"First-line pharmacological management of an acute asthma attack?", a:"Inhaled β2 agonist plus corticosteroid; add ipratropium or systemic steroid when indicated."},
    {cat:"Asthma", q:"Key anaesthetic principles in asthma?", a:"Avoid triggers, ensure adequate depth of anaesthesia, allow a long expiratory time, and avoid dynamic hyperinflation/auto-PEEP."},

    {cat:"COPD", q:"What spirometric pattern defines COPD?", a:"Reduced FEV1/FVC ratio with airflow obstruction that is not fully reversible."},
    {cat:"COPD", q:"How does emphysema change lung mechanics?", a:"Alveolar destruction → ↓ surface area, ↓ elastic recoil, ↑ compliance, and air trapping."},
    {cat:"COPD", q:"Key ventilatory strategy in COPD?", a:"Allow a long expiratory time; avoid excessive RR and dynamic hyperinflation. NIV is important in selected acute hypercapnic exacerbations."},
    {cat:"COPD", q:"Why can excessive O2 worsen hypercapnia in COPD?", a:"Via V/Q effects (reduced HPV redirecting blood to poorly ventilated areas), the Haldane effect, and reduced hypoxic respiratory drive."},

    {cat:"OLV", q:"What is the major risk during one-lung ventilation?", a:"Hypoxaemia from shunt/V-Q mismatch as the operative lung is collapsed."},
    {cat:"OLV", q:"How does HPV help during OLV?", a:"It diverts blood flow away from the hypoxic, non-ventilated lung toward the ventilated lung, improving oxygenation."},
    {cat:"OLV", q:"Lung-protective ventilation principles during OLV?", a:"Low tidal volume, appropriate PEEP/recruitment, avoid excessive airway pressures."},
    {cat:"OLV", q:"If hypoxaemia occurs during OLV, what should you check/optimise?", a:"Tube position/secretions, FiO2 and airway pressures; optimise dependent-lung PEEP; consider CPAP/O2 to the operative lung if surgical conditions allow."},

    {cat:"ARDS", q:"Berlin definition — key diagnostic criteria for ARDS?", a:"Onset within 1 week of a known insult; bilateral opacities on imaging; not fully explained by cardiac failure or fluid overload."},
    {cat:"ARDS", q:"P/F ratio thresholds for mild, moderate and severe ARDS?", a:"Mild 201–300; moderate 101–200; severe ≤100 (with PEEP/CPAP ≥5 cmH2O)."},
    {cat:"ARDS", q:"Lung-protective ventilation targets in ARDS?", a:"Tidal volume ≈6 mL/kg predicted body weight; plateau pressure <30 cmH2O."},
    {cat:"ARDS", q:"Which positioning strategy benefits selected ARDS patients?", a:"Prone positioning, in selected moderate/severe ARDS."},

    {cat:"A–a gradient", q:"Define the A–a gradient.", a:"A–a = PAO2 − PaO2 (alveolar minus arterial oxygen tension)."},
    {cat:"A–a gradient", q:"State the alveolar gas equation at sea level.", a:"PAO2 = FiO2 × (Patm − 47) − PaCO2/0.8 (using PH2O ≈ 47 mmHg, R ≈ 0.8)."},
    {cat:"A–a gradient", q:"Approximate PAO2 on room air with a normal PaCO2 of 40?", a:"≈100 mmHg (PAO2 ≈150 − 40/0.8 = 100)."},
    {cat:"A–a gradient", q:"Typical normal A–a gradient in a healthy young adult?", a:"≈5–15 mmHg."},
    {cat:"A–a gradient", q:"How does the expected upper-normal A–a gradient change with age?", a:"Roughly age/4 + 4 mmHg."},
    {cat:"A–a gradient", q:"Normal A–a gradient + hypoxaemia suggests what mechanism?", a:"Hypoventilation or low inspired O2 (not V/Q mismatch/shunt/diffusion problems)."},

    {cat:"Altitude", q:"Why does altitude cause hypoxaemia?", a:"↑ Altitude → ↓ barometric pressure → ↓ inspired PO2 (FiO2 unchanged at 21%)."},
    {cat:"Altitude", q:"What is the acute ventilatory/acid-base response to altitude?", a:"Hypoxaemia → hyperventilation → respiratory alkalosis."},
    {cat:"Altitude", q:"How does the body acclimatise to altitude over days?", a:"Renal bicarbonate excretion permits continued hyperventilation; ↑2,3-DPG improves tissue O2 unloading; ↑erythropoiesis increases O2 carrying capacity."},
    {cat:"Altitude", q:"What causes high-altitude pulmonary oedema (HAPE)?", a:"Excessive hypoxic pulmonary vasoconstriction → pulmonary hypertension and capillary leak."},
    {cat:"Altitude", q:"Key treatments for HAPE?", a:"Descent and supplemental oxygen."},

    {cat:"Pulm circulation", q:"Characterise the pulmonary circulation.", a:"A low-pressure, low-resistance circuit."},
    {cat:"Pulm circulation", q:"Contrast local vs global hypoxic pulmonary vasoconstriction (HPV).", a:"Local alveolar hypoxia causes local vasoconstriction (diverts blood to better-ventilated areas); global hypoxia causes generalised ↑PVR and pulmonary hypertension."},
    {cat:"Pulm circulation", q:"At what lung volume is PVR lowest, and why does it rise at extremes?", a:"PVR is lowest around FRC; it rises at high lung volumes (stretched alveolar vessels compressed) and low lung volumes (extra-alveolar vessels compressed/collapse)."},

    {cat:"Resp failure", q:"Define type 1 (hypoxaemic) respiratory failure.", a:"Low PaO2 with normal or low PaCO2; causes include V/Q mismatch, shunt, pneumonia, pulmonary oedema."},
    {cat:"Resp failure", q:"Define type 2 (hypercapnic) respiratory failure.", a:"Raised PaCO2 due to inadequate alveolar ventilation; hypoxaemia may coexist."},

    {cat:"Anaesthetic traps", q:"What does preoxygenation achieve physiologically?", a:"Replaces alveolar N2 with O2, increasing the oxygen reservoir (mainly in FRC) and extending safe apnoea time."},
    {cat:"Anaesthetic traps", q:"What are the risks of excessive PEEP?", a:"Reduced venous return and cardiac output, and risk of lung overdistension."},
    {cat:"Anaesthetic traps", q:"What is auto-PEEP and how is it managed?", a:"Incomplete expiration trapping air (common in severe asthma/COPD); managed by reducing RR/VT and increasing expiratory time."},
    {cat:"Anaesthetic traps", q:"Why should N2O be avoided in certain situations?", a:"It diffuses into and expands closed gas spaces (e.g. pneumothorax, bowel gas), which can be dangerous."},
    {cat:"Anaesthetic traps", q:"Cardiovascular effect of volatile anaesthetic agents on the airway?", a:"They are bronchodilators, but can depress cardiovascular function (myocardial depression, vasodilation)."},

    {cat:"Diffusion", q:"State Fick's law of diffusion (conceptually).", a:"Diffusion rate ∝ (surface area × diffusion coefficient × partial pressure gradient) / membrane thickness."},
    {cat:"Diffusion", q:"Why does CO2 diffuse across the alveolar membrane ~20x faster than O2?", a:"CO2 is far more soluble in tissue/plasma than O2; diffusion capacity depends on solubility, not just molecular size, so higher solubility outweighs its slightly larger molecular weight."},
    {cat:"Diffusion", q:"What does DLCO measure and why is CO used?", a:"Diffusing capacity of the lung; CO is used because it binds Hb so avidly that its uptake is almost entirely diffusion-limited, making it a good surrogate for membrane diffusing capacity."},
    {cat:"Diffusion", q:"Name conditions that reduce DLCO.", a:"Pulmonary fibrosis, emphysema, anaemia, pulmonary oedema, pulmonary vascular disease (e.g. PE, pulmonary hypertension)."},
    {cat:"Diffusion", q:"Is oxygen uptake normally diffusion-limited or perfusion-limited?", a:"Perfusion-limited at rest in health; it can become diffusion-limited during heavy exercise, at altitude, or with a thickened/damaged alveolar membrane."},

    {cat:"Spirometry", q:"Spirometric hallmark of obstructive lung disease?", a:"Reduced FEV1/FVC ratio (<0.7); FVC may be normal or reduced, FEV1 reduced more than FVC."},
    {cat:"Spirometry", q:"How do TLC, RV and FRC change in obstructive disease?", a:"All tend to increase (air trapping, hyperinflation)."},
    {cat:"Spirometry", q:"Spirometric hallmark of restrictive lung disease?", a:"Normal or increased FEV1/FVC ratio with a reduced FVC."},
    {cat:"Spirometry", q:"How do TLC, RV and FRC change in restrictive disease?", a:"All tend to decrease (small, stiff lungs or reduced chest wall/muscle capacity)."},
    {cat:"Spirometry", q:"Give examples of obstructive vs restrictive conditions.", a:"Obstructive: asthma, COPD, bronchiectasis. Restrictive: pulmonary fibrosis, chest wall disease, neuromuscular disease, severe obesity."},

    {cat:"Closing capacity", q:"Define closing capacity (CC).", a:"CC = closing volume + RV — the lung volume at which small dependent airways begin to close during expiration."},
    {cat:"Closing capacity", q:"What happens when CC exceeds FRC?", a:"Airway closure occurs during normal tidal breathing, causing V/Q mismatch and atelectasis in dependent lung regions."},
    {cat:"Closing capacity", q:"Which factors increase CC or reduce FRC enough that CC may exceed FRC?", a:"Increasing age, obesity, supine position, smoking, and general anaesthesia."},
    {cat:"Closing capacity", q:"At roughly what age does CC exceed FRC in the supine vs upright position?", a:"≈44 years supine; ≈65 years upright (approximate teaching figures)."},

    {cat:"O2 cascade", q:"Describe the oxygen cascade from air to mitochondria.", a:"Atmospheric PO2 (≈160 mmHg) → tracheal PO2 (≈150 mmHg after humidification) → alveolar PO2 (≈100 mmHg) → arterial PO2 (≈95 mmHg, after A–a gradient) → mitochondrial PO2 (≈5–10 mmHg)."},
    {cat:"O2 cascade", q:"Why does PO2 fall between inspired air and the trachea?", a:"Humidification of inspired gas adds water vapour pressure (≈47 mmHg), diluting the partial pressure of O2."},

    {cat:"Anatomical shunt", q:"What is the normal physiological (anatomical) shunt and its approximate size?", a:"≈2–5% of cardiac output, from blood that bypasses ventilated alveoli."},
    {cat:"Anatomical shunt", q:"Name the two classic sources of normal anatomical shunt.", a:"Bronchial veins (draining into pulmonary veins) and Thebesian veins (draining directly into the left ventricle)."},
    {cat:"Anatomical shunt", q:"Why does normal anatomical shunt contribute to the A–a gradient?", a:"This blood bypasses gas exchange entirely and mixes with fully oxygenated blood, slightly lowering arterial PO2 even in healthy lungs."},

    {cat:"Pulse ox pitfalls", q:"How does carboxyhaemoglobin (COHb) affect pulse oximetry?", a:"Pulse oximeters cannot distinguish COHb from oxyhaemoglobin, giving a falsely high SpO2 reading despite low true oxygen content."},
    {cat:"Pulse ox pitfalls", q:"How does methaemoglobinaemia (MetHb) affect pulse oximetry?", a:"High MetHb levels drive the SpO2 reading toward ≈85%, regardless of the true saturation."},
    {cat:"Pulse ox pitfalls", q:"Name other common causes of inaccurate pulse oximetry readings.", a:"Motion artefact, poor peripheral perfusion/low signal, nail polish (especially blue, green, black), and intravenous dyes like methylene blue (falsely lowers SpO2)."},

    {cat:"Capnography", q:"Describe the four phases of a normal capnograph waveform.", a:"Phase I: dead space gas (no CO2); Phase II: rapid upstroke as alveolar gas mixes in; Phase III: alveolar plateau; then a sharp downstroke on inspiration."},
    {cat:"Capnography", q:"How does ETCO2 normally compare to PaCO2?", a:"ETCO2 is normally slightly lower than PaCO2, by roughly 2–5 mmHg, due to dead space."},
    {cat:"Capnography", q:"Causes of sudden loss of the capnograph waveform?", a:"Circuit disconnection, oesophageal intubation, or cardiac arrest."},
    {cat:"Capnography", q:"Causes of a gradual rise in ETCO2?", a:"Hypoventilation, rebreathing, or increased CO2 production (fever, sepsis, laparoscopic CO2 insufflation)."},
    {cat:"Capnography", q:"Causes of a sudden fall in ETCO2?", a:"Pulmonary embolism/air embolism, sudden hypotension or cardiac arrest, or circuit disconnection."},
    {cat:"Capnography", q:"What does a rising, sloped ('shark-fin') plateau indicate?", a:"Bronchospasm or airway obstruction (delayed, uneven alveolar emptying)."},
    {cat:"Capnography", q:"What does a 'curare cleft' notch in the plateau suggest?", a:"A spontaneous breathing effort during the plateau — inadequate neuromuscular blockade."},

    {cat:"Work of breathing", q:"What are the two main components of the work of breathing?", a:"Elastic work (overcoming lung/chest wall compliance) and resistive work (overcoming airway/tissue resistance)."},
    {cat:"Work of breathing", q:"In which disease pattern does elastic work of breathing dominate?", a:"Restrictive disease (stiff, low-compliance lungs)."},
    {cat:"Work of breathing", q:"In which disease pattern does resistive work of breathing dominate?", a:"Obstructive disease (increased airway resistance)."},

    {cat:"Bronchial circulation", q:"What does the bronchial circulation supply, and where does it arise from?", a:"It supplies the conducting airways and is part of the systemic circulation, arising from the aorta/intercostal arteries."},
    {cat:"Bronchial circulation", q:"Where does bronchial venous blood drain?", a:"Partly into the pulmonary veins (contributing to anatomical shunt) and partly into the azygos/systemic venous system."},

    {cat:"Pregnancy", q:"How does minute ventilation change in pregnancy, and why?", a:"It increases, driven mainly by progesterone-stimulated central respiratory drive."},
    {cat:"Pregnancy", q:"How does FRC change in pregnancy?", a:"FRC falls by ≈20%, due to diaphragmatic elevation by the gravid uterus."},
    {cat:"Pregnancy", q:"Why do pregnant patients desaturate faster during apnoea?", a:"Increased O2 consumption combined with reduced FRC (smaller O2 reservoir) leads to more rapid desaturation."},
    {cat:"Pregnancy", q:"What is the acid-base status in normal pregnancy?", a:"A compensated respiratory alkalosis (mild hyperventilation lowers PaCO2, with renal bicarbonate compensation)."},

    {cat:"Obesity", q:"How does obesity affect FRC and ERV?", a:"Both are reduced, due to the mass loading effect of adipose tissue on the chest wall and diaphragm."},
    {cat:"Obesity", q:"Why can closing capacity exceed FRC even when an obese patient is upright?", a:"The reduction in FRC is large enough that airway closure can occur during normal tidal breathing even in the upright position."},
    {cat:"Obesity", q:"What ventilatory pattern does obesity typically produce on spirometry?", a:"A restrictive pattern, with increased work of breathing."},
    {cat:"Obesity", q:"What is obesity hypoventilation syndrome?", a:"Chronic hypercapnia and hypoxaemia in obese patients not explained by another cause, often with sleep-disordered breathing."},

    {cat:"Anaesthesia & FRC", q:"By how much does general anaesthesia typically reduce FRC?", a:"≈20%."},
    {cat:"Anaesthesia & FRC", q:"Why does anaesthesia promote atelectasis?", a:"Reduced FRC, loss of diaphragmatic tone, and the supine position all favour collapse of dependent lung regions."},
    {cat:"Anaesthesia & FRC", q:"How does anaesthesia affect V/Q matching?", a:"It worsens V/Q matching — dependent lung regions become under-ventilated but remain well perfused, increasing shunt-like effect."},

    {cat:"Ventilator modes", q:"Describe volume-controlled ventilation and its main risk.", a:"Delivers a fixed tidal volume with variable pressure; risk of high peak airway pressures if compliance suddenly falls."},
    {cat:"Ventilator modes", q:"Describe pressure-controlled ventilation and its main risk.", a:"Delivers a fixed inspiratory pressure with variable tidal volume (decelerating flow pattern, often more even gas distribution); risk of hypoventilation if compliance/resistance changes."},
    {cat:"Ventilator modes", q:"What is meant by 'best PEEP'?", a:"The PEEP level that optimises alveolar recruitment/compliance and oxygenation without significantly impairing venous return or cardiac output — often found via a decremental PEEP trial or compliance curve."},

    {cat:"Numbers", q:"Rapid recall: VT, anatomical VD, VE and VA?", a:"VT ≈500 mL; anatomical VD ≈150 mL; VE ≈6 L/min; VA ≈4.2 L/min."},
    {cat:"Numbers", q:"Rapid recall: FRC, RV and TLC?", a:"FRC ≈2.3 L; RV ≈1.2 L; TLC ≈6 L."},
    {cat:"Numbers", q:"Rapid recall: P50 and normal V/Q ratio?", a:"P50 ≈26–27 mmHg; normal V/Q ≈0.8."},
    {cat:"Numbers", q:"Rapid recall: ARDS ventilation targets?", a:"VT ≈6 mL/kg predicted body weight; plateau pressure <30 cmH2O."}
  ]
});
