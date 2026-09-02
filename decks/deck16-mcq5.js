window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "mcq5",
  title: "MCQ 5",
  emoji: "🎯",
  subtitle: "Mixed true/false · 50 stems · Part I basic sciences + Part II clinical",
  colors: {
    front1: "#16a34a", front2: "#0d9488",
    back1: "#fecaca", back2: "#ddd6fe", backText: "#3b0764",
    chips: ["#16a34a","#0d9488","#5ab0ff","#b98bff","#ff6b9d","#ff9a3d","#ffd93d","#3dd6d6"]
  },
  cards: [
    {cat:"Physiology", q:"Insulin drives potassium into cells via stimulation of the Na+/K+ ATPase.", a:"TRUE. This is the basis of insulin-dextrose therapy in hyperkalaemia. Beta-2 agonists act similarly."},
    {cat:"Physiology", q:"Cortisol has no mineralocorticoid activity.", a:"FALSE. It has significant mineralocorticoid activity at high concentrations, causing sodium and water retention with potassium loss."},
    {cat:"Physiology", q:"The adrenal medulla secretes approximately 80% adrenaline.", a:"TRUE. It is effectively a modified sympathetic ganglion innervated by preganglionic fibres."},
    {cat:"Physiology", q:"Growth hormone secretion is greatest during slow-wave sleep.", a:"TRUE. Secretion is pulsatile, with the largest surge in deep sleep."},
    {cat:"Physiology", q:"In haemolytic jaundice, urinary bilirubin is markedly increased.", a:"FALSE. Unconjugated bilirubin is albumin-bound and not filtered, so urine bilirubin is absent. Urinary UROBILINOGEN is increased."},
    {cat:"Physiology", q:"Vitamin B12 is absorbed in the terminal ileum.", a:"TRUE. Bound to intrinsic factor from gastric parietal cells. Iron and calcium are absorbed in the duodenum."},
    {cat:"Physiology", q:"Plasma osmolality is the most sensitive stimulus for ADH release.", a:"TRUE. From about 280 mosmol/kg. Hypovolaemia is a more powerful but less sensitive stimulus, overriding osmolality when severe."},
    {cat:"Physiology", q:"Thyroid hormones are predominantly protein bound in plasma.", a:"TRUE. Over 99%, mainly to thyroxine-binding globulin. Only the free fraction is active."},

    {cat:"Anatomy", q:"The vagus nerve provides parasympathetic supply as far as the splenic flexure.", a:"TRUE. The distal colon and pelvic viscera are supplied by the sacral outflow (S2-S4)."},
    {cat:"Anatomy", q:"The phrenic nerve arises from C3, C4 and C5.", a:"TRUE. 'C3, 4, 5 keeps the diaphragm alive.' It is blocked in most interscalene blocks."},
    {cat:"Anatomy", q:"The right internal jugular vein offers a straighter route to the right atrium than the left.", a:"TRUE. The left side crosses the thoracic duct and has a more angled route, so the right is preferred."},
    {cat:"Anatomy", q:"The larynx in an adult lies at the level of C3-C6.", a:"TRUE. It is higher (C2-C3) in infants, contributing to the differences in paediatric airway management."},

    {cat:"Pharmacology", q:"Neostigmine cannot reverse a profound non-depolarising block.", a:"TRUE. It has a ceiling effect once all acetylcholinesterase is inhibited. Sugammadex can reverse deep aminosteroid block."},
    {cat:"Pharmacology", q:"Glycopyrrolate is preferred to atropine in the elderly because it does not cross the blood-brain barrier.", a:"TRUE. Being quaternary, it avoids central anticholinergic syndrome. It is also a better antisialogogue."},
    {cat:"Pharmacology", q:"Sugammadex 16 mg/kg permits immediate reversal after a 1.2 mg/kg dose of rocuronium.", a:"TRUE. 2 mg/kg is used at reappearance of T2, and 4 mg/kg at a post-tetanic count of 1-2."},
    {cat:"Pharmacology", q:"Rocuronium is primarily eliminated by the kidney.", a:"FALSE. It is predominantly hepatic (biliary) elimination. Vecuronium is also mainly hepatic; pancuronium is largely renal."},
    {cat:"Pharmacology", q:"A dibucaine number of about 20 indicates a homozygous atypical plasma cholinesterase.", a:"TRUE. Normal is around 80 and heterozygous 40-60. The number reflects enzyme QUALITY, not quantity."},
    {cat:"Pharmacology", q:"Amiodarone has a half-life of several weeks.", a:"TRUE. Extensive tissue distribution gives a half-life of 20-100 days, so effects and interactions persist long after stopping."},
    {cat:"Pharmacology", q:"Labetalol can be safely used in asthmatic patients.", a:"FALSE. Its beta blockade risks bronchospasm. It is also a tertiary amine that crosses the blood-brain barrier."},
    {cat:"Pharmacology", q:"Verapamil and diltiazem are rate-limiting calcium channel blockers, unlike the dihydropyridines.", a:"TRUE. Dihydropyridines such as amlodipine and nifedipine act mainly on vascular smooth muscle and may cause reflex tachycardia."},
    {cat:"Pharmacology", q:"Adenosine acts by transient blockade of the atrioventricular node.", a:"TRUE. Half-life under 10 seconds. Potentiated by dipyridamole, antagonised by theophylline, and it may precipitate bronchospasm."},
    {cat:"Pharmacology", q:"Warfarin acts by directly inhibiting thrombin.", a:"FALSE. It inhibits vitamin K epoxide reductase, reducing synthesis of factors II, VII, IX and X plus proteins C and S. Dabigatran is the direct thrombin inhibitor."},

    {cat:"Physics & measurement", q:"Boyle's law states that at constant temperature, volume is inversely proportional to pressure.", a:"TRUE. Charles' law relates volume to absolute temperature; Gay-Lussac's relates pressure to absolute temperature."},
    {cat:"Physics & measurement", q:"Henry's law states that the amount of gas dissolved in a liquid is proportional to its partial pressure.", a:"TRUE. It underlies oxygen carriage in plasma and the uptake of volatile agents into blood."},
    {cat:"Physics & measurement", q:"One mole of any gas occupies 22.4 litres at standard temperature and pressure.", a:"TRUE. From Avogadro's hypothesis, with 6.022 x 10^23 molecules per mole."},
    {cat:"Physics & measurement", q:"The Venturi principle allows a fixed performance oxygen mask to deliver a constant FiO2.", a:"TRUE. Air entrainment at a fixed ratio delivers flows exceeding peak inspiratory demand, so FiO2 is independent of the patient's breathing pattern."},
    {cat:"Physics & measurement", q:"Helium is useful in large airway obstruction because it has a low viscosity.", a:"FALSE. It has a low DENSITY, which reduces turbulent flow. Viscosity governs laminar flow and helium's is similar to air."},
    {cat:"Physics & measurement", q:"Fully saturated gas at 37 degrees C contains approximately 44 mg of water per litre.", a:"TRUE. Compared with about 17 mg/L at 20 degrees C. Anaesthetic gases are dry, hence the need for humidification."},
    {cat:"Physics & measurement", q:"Type CF equipment is safe for direct connection to the heart.", a:"TRUE. It has a floating applied part with very low leakage current. Type B and BF are not suitable for direct cardiac connection."},

    {cat:"Statistics", q:"A p value of less than 0.05 proves that a clinically important difference exists.", a:"FALSE. Statistical significance is not clinical significance. With large samples, trivial differences become statistically significant."},
    {cat:"Statistics", q:"Number needed to treat is the reciprocal of the absolute risk reduction.", a:"TRUE. NNT = 1 / ARR. A smaller NNT indicates a more effective treatment."},
    {cat:"Statistics", q:"A paired t-test is appropriate for before-and-after measurements in the same patients.", a:"TRUE. The non-parametric equivalent is the Wilcoxon signed-rank test."},

    {cat:"Clinical anaesthesia", q:"Awake fibreoptic intubation is indicated in an anticipated difficult airway with a high aspiration risk.", a:"TRUE. It maintains spontaneous ventilation and airway reflexes, though it requires cooperation and careful topicalisation."},
    {cat:"Clinical anaesthesia", q:"Laryngospasm is best treated initially with 100% oxygen and continuous positive airway pressure with a jaw thrust.", a:"TRUE. If unrelieved, deepen anaesthesia with propofol, then give suxamethonium (including the intramuscular or intraosseous route if no IV access)."},
    {cat:"Clinical anaesthesia", q:"Negative pressure pulmonary oedema can follow an episode of severe laryngospasm.", a:"TRUE. Forced inspiration against a closed glottis generates markedly negative intrathoracic pressure, causing transudation into alveoli."},
    {cat:"Clinical anaesthesia", q:"Venous air embolism is most likely when the surgical site is below the level of the heart.", a:"FALSE. Risk is greatest when the site is ABOVE the heart — as in sitting craniotomy — creating a negative pressure gradient."},
    {cat:"Clinical anaesthesia", q:"The most sensitive practical monitor for venous air embolism in theatre is a fall in end-tidal CO2.", a:"TRUE. Transoesophageal echo and precordial Doppler are more sensitive still but are less commonly available."},
    {cat:"Clinical anaesthesia", q:"Tourniquet pain is typically transmitted by unmyelinated C fibres and may occur despite an adequate block.", a:"TRUE. It usually appears after 45-60 minutes and can be resistant to otherwise adequate regional anaesthesia."},
    {cat:"Clinical anaesthesia", q:"Postoperative shivering can increase oxygen consumption several-fold.", a:"TRUE. By up to 400%, which is poorly tolerated in coronary disease. Treated with warming, and pethidine, clonidine or doxapram."},

    {cat:"Obstetrics", q:"The uterus receives approximately 10% of cardiac output at term.", a:"TRUE. About 700-900 ml/min. Uteroplacental circulation is maximally dilated and pressure-dependent, so maternal hypotension directly reduces fetal perfusion."},
    {cat:"Obstetrics", q:"Oxytocin given as a rapid intravenous bolus can cause hypotension and tachycardia.", a:"TRUE. It causes vasodilation. A slow bolus or infusion is preferred, especially in cardiac disease or hypovolaemia."},
    {cat:"Obstetrics", q:"Carboprost is contraindicated in asthma.", a:"TRUE. This prostaglandin F2-alpha analogue can cause severe bronchospasm."},

    {cat:"Paediatrics", q:"Croup typically presents with a barking cough and gradual onset in a child of 6 months to 3 years.", a:"TRUE. Unlike epiglottitis, which has rapid onset with drooling, high fever and a toxic appearance."},
    {cat:"Paediatrics", q:"Pyloric stenosis is a surgical emergency requiring immediate theatre.", a:"FALSE. It is a MEDICAL emergency first — correct the hypochloraemic, hypokalaemic metabolic alkalosis and dehydration before anaesthesia."},

    {cat:"Regional", q:"An erector spinae plane block deposits local anaesthetic deep to the erector spinae muscle onto the transverse process.", a:"TRUE. Craniocaudal spread gives multi-dermatomal analgesia, with a relatively favourable safety profile."},
    {cat:"Regional", q:"A paravertebral block produces bilateral sympathetic blockade.", a:"FALSE. It produces UNILATERAL somatic and sympathetic block, which is why it causes less hypotension than an epidural."},
    {cat:"Regional", q:"A TAP block provides visceral as well as somatic analgesia.", a:"FALSE. It provides SOMATIC abdominal wall analgesia only, so it must be combined with other analgesia for visceral pain."},

    {cat:"Intensive care", q:"A SOFA score increase of 2 or more points defines organ dysfunction in sepsis.", a:"TRUE. Under Sepsis-3. SOFA assesses respiratory, coagulation, hepatic, cardiovascular, neurological and renal systems."},
    {cat:"Intensive care", q:"Dexmedetomidine is associated with less delirium than benzodiazepine sedation in ICU.", a:"TRUE. Benzodiazepines are an independent risk factor for delirium and are generally avoided for routine ICU sedation."},
    {cat:"Intensive care", q:"Brainstem death testing may proceed while a patient remains hypothermic at 33 degrees C.", a:"FALSE. Hypothermia must be excluded — core temperature should exceed 34 degrees C, along with exclusion of drugs and metabolic disturbance."}
  ]
});
