window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "mcq3",
  title: "MCQ 3",
  emoji: "🎯",
  subtitle: "Mixed true/false · 50 stems · Part I basic sciences + Part II clinical",
  colors: {
    front1: "#0891b2", front2: "#4f46e5",
    back1: "#fde68a", back2: "#bbf7d0", backText: "#1c1917",
    chips: ["#0891b2","#4f46e5","#7bd88f","#ffd93d","#ff9a3d","#ff6b9d","#b98bff","#5ab0ff"]
  },
  cards: [
    {cat:"Physiology", q:"The oxyhaemoglobin dissociation curve is shifted left by carboxyhaemoglobin.", a:"TRUE. CO binding increases the affinity of the remaining sites. Methaemoglobin, alkalosis, hypothermia, low 2,3-DPG and fetal haemoglobin also shift it left."},
    {cat:"Physiology", q:"Stored red cells have reduced 2,3-DPG, shifting the curve to the right.", a:"FALSE. Reduced 2,3-DPG shifts the curve LEFT, impairing oxygen offloading. Levels regenerate over 24-48 hours after transfusion."},
    {cat:"Physiology", q:"P50 of adult haemoglobin is approximately 3.5 kPa (26.6 mmHg).", a:"TRUE. This is the PO2 at which haemoglobin is 50% saturated. Fetal haemoglobin has a lower P50 of about 2.5 kPa."},
    {cat:"Physiology", q:"The central chemoreceptors respond directly to arterial hydrogen ion concentration.", a:"FALSE. They respond to CSF H+. Charged hydrogen ions cross the blood-brain barrier poorly; CO2 diffuses freely and is then hydrated to generate H+."},
    {cat:"Physiology", q:"Peripheral chemoreceptors are the main sensors of arterial oxygen tension.", a:"TRUE. Carotid and aortic bodies respond principally to PaO2, becoming active below about 8 kPa, and also to H+ and PaCO2."},
    {cat:"Physiology", q:"Carotid body afferents travel in the vagus nerve.", a:"FALSE. Carotid body and sinus afferents travel in the GLOSSOPHARYNGEAL nerve (nerve of Hering). Aortic afferents travel in the vagus."},
    {cat:"Physiology", q:"The Bainbridge reflex produces tachycardia in response to atrial stretch.", a:"TRUE. Increased right atrial filling raises heart rate — the opposite direction to the baroreceptor reflex."},
    {cat:"Physiology", q:"Cardiac muscle can be tetanised in the same way as skeletal muscle.", a:"FALSE. Its long refractory period, from the calcium plateau, outlasts the contraction and prevents summation."},

    {cat:"Anatomy", q:"The internal branch of the superior laryngeal nerve supplies sensation above the vocal cords.", a:"TRUE. Below the cords, sensation is supplied by the recurrent laryngeal nerve."},
    {cat:"Anatomy", q:"Bilateral recurrent laryngeal nerve injury causes complete aphonia with a patent airway.", a:"FALSE. It causes stridor and airway obstruction as the cords lie in the midline (adducted). Unilateral injury causes hoarseness."},
    {cat:"Anatomy", q:"The brachial plexus is formed from the anterior rami of C5 to T1.", a:"TRUE. Roots, trunks, divisions, cords, branches — with the divisions lying behind the clavicle."},
    {cat:"Anatomy", q:"The artery of Adamkiewicz most commonly arises on the left between T9 and T12.", a:"TRUE. It is the dominant supply to the lower anterior spinal artery, and is at risk in thoracoabdominal aortic surgery."},

    {cat:"Pharmacology", q:"Remifentanil is metabolised by plasma cholinesterase.", a:"FALSE. It is metabolised by NON-SPECIFIC plasma and tissue esterases, so it is unaffected by plasma cholinesterase deficiency, and by hepatic or renal failure."},
    {cat:"Pharmacology", q:"Morphine-6-glucuronide is more potent than morphine and accumulates in renal failure.", a:"TRUE. Morphine-3-glucuronide, by contrast, is inactive as an analgesic and may be neuroexcitatory."},
    {cat:"Pharmacology", q:"Codeine is ineffective in patients who are poor CYP2D6 metabolisers.", a:"TRUE. It is a prodrug requiring conversion to morphine. Ultra-rapid metabolisers are at risk of toxicity."},
    {cat:"Pharmacology", q:"Naloxone reverses the respiratory depression of buprenorphine as readily as that of morphine.", a:"FALSE. Buprenorphine's very high receptor affinity makes reversal difficult; large doses or an infusion may be needed, and doxapram may be considered."},
    {cat:"Pharmacology", q:"Tramadol acts only at opioid receptors.", a:"FALSE. It is a weak mu agonist that also inhibits serotonin and noradrenaline reuptake — hence the seizure and serotonin syndrome risk."},
    {cat:"Pharmacology", q:"Pethidine should be avoided in patients taking monoamine oxidase inhibitors.", a:"TRUE. It risks serotonin syndrome — hyperthermia, rigidity, agitation and cardiovascular instability."},
    {cat:"Pharmacology", q:"Dexmedetomidine is a selective alpha-1 agonist.", a:"FALSE. It is a selective ALPHA-2 agonist, producing sedation without significant respiratory depression, plus analgesia and sympatholysis."},
    {cat:"Pharmacology", q:"Ondansetron may prolong the QT interval.", a:"TRUE. As may droperidol, haloperidol, amiodarone, methadone and many antibiotics — caution when combined."},

    {cat:"Physics & measurement", q:"The critical temperature of nitrous oxide is 36.5 degrees C.", a:"TRUE. Below this it liquefies under pressure, so cylinder pressure does not indicate contents — the cylinder must be weighed."},
    {cat:"Physics & measurement", q:"Entonox may separate into its constituent gases below about minus 6 degrees C.", a:"TRUE. This is the pseudocritical temperature. Cylinders should be stored horizontally and warmed before use to prevent hypoxic delivery."},
    {cat:"Physics & measurement", q:"A size E oxygen cylinder at 137 bar contains approximately 680 litres.", a:"TRUE. Calculated from Boyle's law, which is valid for oxygen because it is above its critical temperature."},
    {cat:"Physics & measurement", q:"Large soda lime granules provide a greater surface area for CO2 absorption.", a:"FALSE. Larger granules REDUCE surface area per unit volume, lowering efficiency, though they also reduce resistance to gas flow. 4-8 mesh is the compromise."},
    {cat:"Physics & measurement", q:"The reaction of CO2 with soda lime is exothermic.", a:"TRUE. Warmth and moisture in the canister are normal signs of function. Desiccated absorbent risks CO and compound A production."},
    {cat:"Physics & measurement", q:"An ultrasonic nebuliser can deliver enough water to cause fluid overload in a small child.", a:"TRUE. It produces very small droplets in high volume, risking water overload and airway soiling."},
    {cat:"Physics & measurement", q:"A thermistor's resistance increases as temperature rises.", a:"FALSE. In the usual negative-temperature-coefficient thermistor, resistance FALLS non-linearly as temperature rises."},

    {cat:"Statistics", q:"A type II error occurs when a false null hypothesis is not rejected.", a:"TRUE. A false negative, whose probability is beta. Power = 1 - beta."},
    {cat:"Statistics", q:"Increasing sample size increases the power of a study.", a:"TRUE. As does a larger effect size, lower variability, and a less stringent alpha."},
    {cat:"Statistics", q:"The odds ratio approximates the relative risk when the outcome is rare.", a:"TRUE. With common outcomes the odds ratio exaggerates the effect relative to the risk ratio."},

    {cat:"Clinical anaesthesia", q:"Hyperkalaemia causes tall peaked T waves and a shortened QT interval.", a:"TRUE. Followed by flattened P waves, PR prolongation, QRS widening and finally a sine wave. Hypokalaemia instead causes ST depression, flat T waves and U waves."},
    {cat:"Clinical anaesthesia", q:"Hypocalcaemia shortens the QT interval.", a:"FALSE. Hypocalcaemia PROLONGS QT; hypercalcaemia shortens it."},
    {cat:"Clinical anaesthesia", q:"Metabolic alkalosis can precipitate tetany despite a normal total plasma calcium.", a:"TRUE. Alkalosis increases calcium binding to albumin, lowering the ionised fraction."},
    {cat:"Clinical anaesthesia", q:"Nitrous oxide is contraindicated in middle ear surgery and after recent retinal gas injection.", a:"TRUE. It expands closed gas spaces — also relevant in pneumothorax, bowel obstruction and air embolism."},
    {cat:"Clinical anaesthesia", q:"Dantrolene acts by blocking the ryanodine receptor.", a:"TRUE. It reduces sarcoplasmic calcium release. Initial dose 2.5 mg/kg, repeated to about 10 mg/kg."},
    {cat:"Clinical anaesthesia", q:"Mast cell tryptase should be sampled immediately and again at 1-2 hours after suspected anaphylaxis.", a:"TRUE. With a baseline sample at 24 hours or in clinic. Tryptase peaks within about an hour and has a short half-life."},
    {cat:"Clinical anaesthesia", q:"Patients with a lithotomy and Trendelenburg position are at risk of common peroneal nerve injury.", a:"TRUE. From compression against the lithotomy pole at the fibular head, causing foot drop. Lateral femoral cutaneous and pudendal nerves are also at risk."},

    {cat:"Obstetrics", q:"Magnesium sulphate reduces the risk of recurrent eclamptic seizures more effectively than diazepam or phenytoin.", a:"TRUE. Established by the Collaborative Eclampsia Trial and MAGPIE. Loading 4 g then 1 g/h."},
    {cat:"Obstetrics", q:"Magnesium toxicity first causes loss of deep tendon reflexes before respiratory depression.", a:"TRUE. Reflexes are lost at about 4-5 mmol/L, respiratory depression at 6-7, and cardiac arrest above 12. Calcium gluconate is the antidote."},
    {cat:"Obstetrics", q:"Amniotic fluid embolism typically presents with hypotension, hypoxia and coagulopathy.", a:"TRUE. Often with seizures and cardiovascular collapse. Management is supportive; DIC is common and severe."},

    {cat:"Paediatrics", q:"The commonest cause of bradycardia in an anaesthetised child is hypoxia.", a:"TRUE. Cardiac output in neonates and infants is largely rate-dependent, so bradycardia is poorly tolerated. Always exclude hypoxia first."},
    {cat:"Paediatrics", q:"Uncuffed tracheal tubes are now mandatory in children under 8 years.", a:"FALSE. Modern high-volume low-pressure microcuff tubes are widely used and often preferred, provided cuff pressure is monitored."},

    {cat:"Regional", q:"Adrenaline added to a local anaesthetic reduces peak plasma concentration and prolongs the block.", a:"TRUE. Through vasoconstriction. It also serves as an intravascular marker in a test dose."},
    {cat:"Regional", q:"The maximum dose of plain lidocaine is 7 mg/kg.", a:"FALSE. Plain lidocaine is 3 mg/kg; 7 mg/kg applies WITH adrenaline."},
    {cat:"Regional", q:"An adductor canal block preserves quadriceps power better than a femoral nerve block.", a:"TRUE. It is predominantly sensory (saphenous nerve), allowing earlier mobilisation after knee surgery."},
    {cat:"Regional", q:"A low-frequency curvilinear probe is appropriate for a posterior approach sciatic nerve block.", a:"TRUE. Depth requires lower frequency (2-5 MHz) for penetration, at the cost of resolution."},

    {cat:"Intensive care", q:"A rise in peak airway pressure with an unchanged plateau pressure suggests increased airway resistance.", a:"TRUE. Consider bronchospasm, secretions, or a kinked or obstructed tube. If both rise, compliance has fallen."},
    {cat:"Intensive care", q:"Auto-PEEP is managed by increasing the respiratory rate.", a:"FALSE. That worsens gas trapping. REDUCE the rate and shorten inspiratory time to lengthen expiration."},
    {cat:"Intensive care", q:"Refeeding syndrome is characterised by hypophosphataemia, hypokalaemia and hypomagnesaemia.", a:"TRUE. Insulin drives these intracellularly when feeding restarts after starvation. Give thiamine and feed cautiously."},
    {cat:"Intensive care", q:"Propofol contributes approximately 1.1 kcal per millilitre and must be included in nutritional calculations.", a:"TRUE. As a 10% lipid emulsion, prolonged infusion can supply a substantial calorie and lipid load."}
  ]
});
