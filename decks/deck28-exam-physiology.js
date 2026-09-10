window.DECKS = window.DECKS || [];
// Grouped card shape: { cat, stem, opts:[5], ans:[5] }
// Written from the site's own notes and flashcard decks — no third-party wording.
window.DECKS.push({
  id: "exam-physiology",
  title: "Exam MCQ · Physiology",
  emoji: "🫀",
  subtitle: "True/false, exam format · 60 questions × 5 stems = 300 marks",
  colors: {
    front1: "#0f172a", front2: "#0E7A66",
    back1: "#F1F5F9", back2: "#DDF3EC", backText: "#0f172a",
    chips: ["#0E7A66","#0f172a","#4338ca","#B4690E","#A8123E","#0369a1","#7A3B9E","#be123c"]
  },
  cards: [
    {
      cat: "Cardiac",
      stem: "Regarding the ventricular action potential:",
      opts: [
        "Phase 0 is caused by opening of fast voltage-gated sodium channels",
        "Phase 2 reflects a balance between calcium influx and potassium efflux",
        "The resting membrane potential is approximately −90 mV",
        "Phase 3 repolarisation is due to inward chloride current",
        "The plateau phase makes tetany of cardiac muscle impossible"
      ],
      ans: [
        "TRUE. Rapid Na⁺ influx gives an upstroke of about 1000 V/s in working myocardium.",
        "TRUE. Slow L-type Ca²⁺ influx is offset by delayed rectifier K⁺ efflux, holding the membrane near 0 mV.",
        "TRUE. Close to the potassium equilibrium potential, set by high resting K⁺ permeability.",
        "FALSE. Phase 3 is outward potassium current (I_Kr, I_Ks) as calcium channels close.",
        "TRUE. The long plateau gives an absolute refractory period lasting almost the whole contraction, so summation cannot occur."
      ]
    },
    {
      cat: "Cardiac",
      stem: "The sinoatrial node:",
      opts: [
        "Has no true resting membrane potential",
        "Depolarises in phase 0 predominantly via calcium influx",
        "Has a pacemaker current I_f carried mainly by sodium",
        "Is slowed by vagal acetylcholine acting on M2 receptors",
        "Has an intrinsic rate lower than that of Purkinje fibres"
      ],
      ans: [
        "TRUE. Phase 4 is a slow spontaneous depolarisation from about −60 mV — the pacemaker potential.",
        "TRUE. Nodal tissue lacks functional fast sodium channels; the upstroke is L-type Ca²⁺ and therefore slow.",
        "TRUE. The funny current is a mixed inward cation current, predominantly Na⁺, activated on hyperpolarisation — the target of ivabradine.",
        "TRUE. M2 opens K⁺ channels and reduces I_f and I_Ca, hyperpolarising and flattening phase 4.",
        "FALSE. SA node 60–100/min, AV node 40–60, Purkinje 20–40. The SA node is fastest and therefore dominant."
      ]
    },
    {
      cat: "Cardiac",
      stem: "In the cardiac cycle:",
      opts: [
        "The first heart sound coincides with closure of the mitral and tricuspid valves",
        "Isovolumetric contraction occurs between mitral closure and aortic opening",
        "The dicrotic notch represents aortic valve closure",
        "Atrial systole normally contributes about 50% of ventricular filling",
        "Left ventricular coronary perfusion occurs mainly in systole"
      ],
      ans: [
        "TRUE. S1 marks the start of systole as the AV valves shut.",
        "TRUE. Both valve sets are closed, pressure rises, volume is unchanged.",
        "TRUE. The incisura on the aortic pressure trace, from brief backflow and valve recoil.",
        "FALSE. About 20–30% in a normal heart at rest — the rest is passive. It matters far more with a stiff ventricle or with tachycardia.",
        "FALSE. Mainly diastole — intramyocardial pressure occludes LV vessels in systole. The right ventricle is perfused throughout the cycle."
      ]
    },
    {
      cat: "Cardiac",
      stem: "The central venous pressure waveform:",
      opts: [
        "The a wave is caused by atrial contraction",
        "Cannon a waves occur in complete heart block",
        "The c wave is due to bulging of the tricuspid valve into the atrium",
        "The x descent occurs during ventricular systole",
        "Giant v waves are characteristic of tricuspid stenosis"
      ],
      ans: [
        "TRUE. It is absent in atrial fibrillation.",
        "TRUE. When the atrium contracts against a closed tricuspid valve — also in junctional rhythm and ventricular pacing.",
        "TRUE. It occurs at the onset of ventricular systole, just after the carotid pulse.",
        "TRUE. Atrial relaxation plus downward displacement of the tricuspid annulus.",
        "FALSE. Giant v waves are typical of tricuspid REGURGITATION. Tricuspid stenosis gives a large a wave and a slow y descent."
      ]
    },
    {
      cat: "Cardiac",
      stem: "Concerning cardiac output and its determinants:",
      opts: [
        "The Frank–Starling relationship describes force of contraction increasing with end-diastolic fibre length",
        "Afterload is fully represented by systemic vascular resistance",
        "Ejection fraction is normally greater than 55%",
        "Laplace's law predicts that wall tension rises as ventricular radius increases at constant pressure",
        "The Fick principle can measure cardiac output from oxygen consumption"
      ],
      ans: [
        "TRUE. Increased sarcomere length improves troponin C calcium sensitivity and myofilament overlap.",
        "FALSE. Afterload is total wall stress opposing ejection — ventricular radius and wall thickness, aortic impedance and blood viscosity all contribute, not SVR alone.",
        "TRUE. Normal LVEF is roughly 55–70%.",
        "TRUE. T = P·r / 2h — dilated ventricles have higher wall tension and oxygen demand.",
        "TRUE. CO = VO₂ / (CaO₂ − CvO₂)."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Regarding lung volumes:",
      opts: [
        "Functional residual capacity is the sum of expiratory reserve volume and residual volume",
        "FRC can be measured by simple spirometry",
        "FRC falls by approximately 20% on lying supine",
        "Closing capacity increases with age",
        "Vital capacity is the sum of tidal volume, IRV and ERV"
      ],
      ans: [
        "TRUE. Typically about 2.5 L in an adult, roughly 30 ml/kg.",
        "FALSE. Any volume containing residual volume needs helium dilution, nitrogen washout or body plethysmography.",
        "TRUE. About 20–25%, and further under anaesthesia — a major reason for rapid desaturation.",
        "TRUE. Closing capacity exceeds FRC supine at about 44 years and erect at about 66 years.",
        "TRUE. VC = IRV + TV + ERV; it excludes residual volume."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Ventilation–perfusion relationships in the upright lung:",
      opts: [
        "Both ventilation and perfusion are greater at the base than the apex",
        "The V/Q ratio is higher at the apex than the base",
        "West zone 1 is present in the normal upright lung at rest",
        "Physiological dead space is derived from the Bohr equation",
        "Hypoxic pulmonary vasoconstriction is abolished by volatile agents at 1 MAC"
      ],
      ans: [
        "TRUE. Gravity increases both, but perfusion increases more steeply.",
        "TRUE. Around 3 at the apex and 0.6 at the base — the apex is relatively over-ventilated.",
        "FALSE. Zone 1 (P_A > P_a > P_v, alveolar dead space) appears only with hypovolaemia or positive pressure ventilation.",
        "TRUE. V_D/V_T = (P_ACO₂ − P_ECO₂)/P_ACO₂, with PaCO₂ substituted in the Enghoff modification.",
        "FALSE. Volatiles attenuate HPV, but inhibition is modest at clinical concentrations. It is not abolished."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Carbon dioxide carriage in blood:",
      opts: [
        "The majority is carried as bicarbonate",
        "Carbamino compounds account for approximately 5%",
        "The chloride shift moves chloride into the red cell in the tissues",
        "The Haldane effect describes increased CO₂ carriage by deoxygenated blood",
        "The CO₂ dissociation curve is more linear than the oxygen curve over the physiological range"
      ],
      ans: [
        "TRUE. About 70%, formed by carbonic anhydrase within the red cell.",
        "FALSE. Carbamino carriage is about 23%; dissolved CO₂ is about 7%.",
        "TRUE. Bicarbonate leaves the cell down its gradient and chloride enters via band 3 to preserve electroneutrality.",
        "TRUE. Deoxyhaemoglobin is a better proton buffer and forms carbamino compounds more readily — this is why venous blood carries more CO₂.",
        "TRUE. Near-linear and without a plateau, which is why CO₂ elimination is so ventilation-dependent."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Control of ventilation:",
      opts: [
        "Central chemoreceptors respond directly to arterial PaCO₂",
        "Peripheral chemoreceptors are located in the carotid and aortic bodies",
        "Hypoxic ventilatory drive becomes significant below a PaO₂ of about 8 kPa",
        "The carotid bodies are innervated by the vagus nerve",
        "Opioids shift the CO₂ response curve to the right and reduce its slope"
      ],
      ans: [
        "FALSE. They respond to H⁺ in CSF. CO₂ crosses the blood–brain barrier and is hydrated to generate that H⁺ — the stimulus is indirect.",
        "TRUE. Carotid bodies at the bifurcation of the common carotid; aortic bodies on the arch.",
        "TRUE. Little effect until PaO₂ falls below roughly 8 kPa (60 mmHg), then a steep rise.",
        "FALSE. Carotid bodies — glossopharyngeal (nerve of Hering). Aortic bodies — vagus.",
        "TRUE. Both a rightward shift and a reduced slope; volatiles do the same."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Oxygen transport:",
      opts: [
        "Each gram of haemoglobin carries 1.34 ml of oxygen when fully saturated",
        "Dissolved oxygen contributes about 0.3 ml per 100 ml at normal PaO₂",
        "Normal oxygen delivery is approximately 1000 ml/min",
        "The normal mixed venous saturation is 55%",
        "The oxygen extraction ratio at rest is approximately 25%"
      ],
      ans: [
        "TRUE. Hüfner's constant, 1.31–1.39 in practice.",
        "TRUE. 0.023 ml per 100 ml per kPa — small, but the sole carriage route in severe CO poisoning treated hyperbarically.",
        "TRUE. DO₂ = CO × CaO₂ ≈ 5 × 200 ml/min.",
        "FALSE. Normal SvO₂ is about 75%. Below 65% suggests inadequate delivery or excess demand.",
        "TRUE. Roughly 250 of 1000 ml/min consumed."
      ]
    },
    {
      cat: "Respiratory",
      stem: "The oxyhaemoglobin dissociation curve is shifted to the right by:",
      opts: [
        "Increased 2,3-diphosphoglycerate",
        "Hypothermia",
        "Acidosis",
        "Fetal haemoglobin",
        "Pyrexia"
      ],
      ans: [
        "TRUE. 2,3-DPG stabilises the deoxy (T) form and reduces affinity — it rises in chronic hypoxia, anaemia and at altitude.",
        "FALSE. Hypothermia shifts LEFT, increasing affinity and impairing tissue unloading.",
        "TRUE. The Bohr effect — raised H⁺ reduces affinity.",
        "FALSE. HbF has a P50 of about 2.5 kPa versus 3.5 kPa for HbA — a LEFT shift, favouring placental uptake.",
        "TRUE. Right shift, aiding unloading in exercising or septic tissue."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Compliance and work of breathing:",
      opts: [
        "Static compliance of the normal adult lung is about 200 ml/cmH₂O",
        "Chest wall and lung compliance add directly to give total compliance",
        "Surfactant increases alveolar surface tension",
        "Laminar flow work is minimised at a respiratory rate of about 12–15 breaths per minute in health",
        "Dynamic compliance falls with increasing respiratory rate in obstructive disease"
      ],
      ans: [
        "TRUE. Lung alone about 200 ml/cmH₂O; lung plus chest wall about 100.",
        "FALSE. They add as reciprocals — 1/C_total = 1/C_lung + 1/C_chestwall — which is why the combined value is roughly halved.",
        "FALSE. Surfactant REDUCES surface tension, increases compliance, prevents small alveoli emptying into large ones and reduces transudation.",
        "TRUE. The rate that minimises total work is the point where elastic and resistive work curves cross — higher in restrictive, lower in obstructive disease.",
        "TRUE. Frequency dependence of compliance — slow-filling units drop out as rate rises."
      ]
    },
    {
      cat: "Renal",
      stem: "The glomerulus and filtration:",
      opts: [
        "Normal GFR is approximately 125 ml/min",
        "The filtration barrier is negatively charged and so restricts albumin",
        "Afferent arteriolar constriction increases GFR",
        "Angiotensin II preferentially constricts the efferent arteriole",
        "Autoregulation of renal blood flow operates between about 80 and 180 mmHg"
      ],
      ans: [
        "TRUE. About 180 L/day filtered, of which about 1% appears as urine.",
        "TRUE. Heparan sulphate in the basement membrane repels anionic proteins; loss of this charge causes minimal change disease proteinuria.",
        "FALSE. Afferent constriction reduces glomerular capillary pressure and therefore GFR.",
        "TRUE. Which preserves filtration pressure when renal perfusion falls — and why ACE inhibitors can drop GFR in renal artery stenosis.",
        "TRUE. Via the myogenic response and tubuloglomerular feedback at the macula densa."
      ]
    },
    {
      cat: "Renal",
      stem: "Tubular transport:",
      opts: [
        "About 65% of filtered sodium is reabsorbed in the proximal tubule",
        "The loop of Henle's thick ascending limb is impermeable to water",
        "Furosemide acts on the Na⁺/K⁺/2Cl⁻ cotransporter",
        "Aldosterone acts principally on the proximal convoluted tubule",
        "Glucose reabsorption has a transport maximum reached at a plasma glucose of about 10 mmol/L"
      ],
      ans: [
        "TRUE. Isosmotic reabsorption, coupled to glucose, amino acids, phosphate and bicarbonate.",
        "TRUE. This is what generates the medullary interstitial gradient — the diluting segment.",
        "TRUE. NKCC2, in the thick ascending limb.",
        "FALSE. Aldosterone acts on the principal cells of the late distal tubule and collecting duct — Na⁺ reabsorption in exchange for K⁺ and H⁺.",
        "TRUE. Threshold about 10 mmol/L, Tm about 375 mg/min — the basis of glycosuria and of SGLT2 inhibitor action."
      ]
    },
    {
      cat: "Renal",
      stem: "Concerning renal handling of water and sodium:",
      opts: [
        "ADH increases aquaporin-2 insertion in the collecting duct",
        "ADH is released in response to a fall in plasma osmolality",
        "Atrial natriuretic peptide increases GFR and sodium excretion",
        "The countercurrent multiplier depends on the vasa recta",
        "Maximum urine concentrating ability is about 1200 mOsm/kg"
      ],
      ans: [
        "TRUE. Via V2 receptors and cAMP — the target of vaptans.",
        "FALSE. Release follows a RISE in osmolality (osmoreceptors, threshold about 280 mOsm/kg) or a fall in volume/pressure.",
        "TRUE. Afferent dilatation with efferent constriction, plus inhibition of sodium reabsorption and of renin and aldosterone.",
        "FALSE. The MULTIPLIER is the loop of Henle. The vasa recta act as a countercurrent EXCHANGER, preserving the gradient.",
        "TRUE. Compared with a minimum of about 50 mOsm/kg."
      ]
    },
    {
      cat: "Acid–base",
      stem: "Acid–base physiology:",
      opts: [
        "The Henderson–Hasselbalch equation uses a pKa of 6.1 for the bicarbonate system",
        "Haemoglobin is the most important non-bicarbonate buffer in blood",
        "Renal compensation for a respiratory acidosis is complete within 24 hours",
        "Base excess is the amount of acid or base needed to restore pH to 7.4 at PaCO₂ 5.3 kPa and 37 °C",
        "A raised anion gap acidosis occurs with large volume 0.9% saline infusion"
      ],
      ans: [
        "TRUE. pH = 6.1 + log([HCO₃⁻]/0.03·PaCO₂ in mmHg).",
        "TRUE. Its imidazole histidine groups; the bicarbonate system is more important overall because it is open-ended via the lung.",
        "FALSE. Renal compensation takes 2–5 days to become maximal — it begins within hours but is slow.",
        "TRUE. Normal range −2 to +2 mmol/L.",
        "FALSE. Saline causes a NORMAL anion gap (hyperchloraemic) acidosis. Raised gap comes from lactate, ketones, urate, toxins."
      ]
    },
    {
      cat: "Neuro",
      stem: "Cerebral blood flow:",
      opts: [
        "Normal cerebral blood flow is approximately 50 ml/100 g/min",
        "CBF varies linearly with PaCO₂ between about 3 and 10 kPa",
        "Cerebral autoregulation operates between mean pressures of about 50 and 150 mmHg",
        "Hypoxia increases CBF only when PaO₂ falls below about 6.7 kPa",
        "The brain receives about 25% of cardiac output"
      ],
      ans: [
        "TRUE. About 750 ml/min total, roughly 15% of cardiac output.",
        "TRUE. Roughly 1–2 ml/100 g/min change per mmHg — the basis of hyperventilation for raised ICP, at the cost of ischaemia if overdone.",
        "TRUE. Shifted right in chronic hypertension.",
        "TRUE. Below about 50 mmHg / 6.7 kPa, then a steep rise.",
        "FALSE. About 15% of cardiac output, though 20% of oxygen consumption. The kidneys take about 20–25%."
      ]
    },
    {
      cat: "Neuro",
      stem: "Cerebrospinal fluid:",
      opts: [
        "Total CSF volume in an adult is approximately 150 ml",
        "CSF is produced at about 0.35 ml/min",
        "CSF glucose is typically about two-thirds of plasma glucose",
        "CSF protein concentration is higher than that of plasma",
        "CSF is absorbed principally through the arachnoid granulations"
      ],
      ans: [
        "TRUE. With about 500 ml produced daily, so it turns over three to four times a day.",
        "TRUE. About 500 ml/day, mostly by the choroid plexus.",
        "TRUE. Low glucose is a hallmark of bacterial and tuberculous meningitis; it is normal in viral meningitis.",
        "FALSE. CSF protein is much lower, about 0.2–0.4 g/L versus about 70 g/L in plasma.",
        "TRUE. Into the superior sagittal sinus, driven by the pressure gradient."
      ]
    },
    {
      cat: "Neuro",
      stem: "The neuromuscular junction:",
      opts: [
        "The nicotinic acetylcholine receptor at the adult endplate has two alpha subunits",
        "Acetylcholine is hydrolysed by butyrylcholinesterase at the junction",
        "Calcium entry into the prejunctional terminal triggers vesicle release",
        "A safety margin exists such that fade appears before loss of twitch height",
        "Extrajunctional receptors proliferate after prolonged immobility or burns"
      ],
      ans: [
        "TRUE. Pentameric — 2α, β, δ, ε in adults (γ replaces ε in the fetal/extrajunctional form). Both alpha sites must bind ACh to open the channel.",
        "FALSE. ACETYLcholinesterase acts at the junction. Butyrylcholinesterase (plasma cholinesterase) is the plasma enzyme metabolising suxamethonium and mivacurium.",
        "TRUE. Via voltage-gated (P/Q-type) calcium channels — the antibody target in Lambert–Eaton syndrome.",
        "TRUE. About 70–75% of receptors must be blocked before twitch height falls, so tetanic and train-of-four fade are earlier signs.",
        "TRUE. Which is why suxamethonium can cause dangerous hyperkalaemia from about 24–48 hours after burns, denervation or critical illness."
      ]
    },
    {
      cat: "Neuro",
      stem: "Skeletal muscle:",
      opts: [
        "The sarcomere spans one Z line to the next",
        "The A band shortens during contraction",
        "Calcium binds troponin C to expose the myosin binding site on actin",
        "Type I fibres are fatigue-resistant and rich in mitochondria",
        "Rigor occurs because ATP is required to detach myosin from actin"
      ],
      ans: [
        "TRUE. Containing the A band and half of two I bands.",
        "FALSE. The A band is the length of the myosin filament and does not change. The I band and H zone shorten.",
        "TRUE. Troponin C binding moves tropomyosin off the binding site — the steric blocking model.",
        "TRUE. Slow oxidative, red, high myoglobin — postural muscle. Type IIb are fast glycolytic and fatigue quickly.",
        "TRUE. ATP binding to the myosin head is what releases it; without ATP the cross-bridges stay attached."
      ]
    }
    ,
    {
      cat: "Autonomic",
      stem: "Adrenoceptors:",
      opts: [
        "Alpha-1 receptors act through Gq and phospholipase C",
        "Beta-1 receptors are coupled to Gs and increase cyclic AMP",
        "Alpha-2 receptor stimulation reduces noradrenaline release",
        "Beta-2 stimulation causes bronchodilatation and hypokalaemia",
        "Dopamine at low dose acts predominantly on beta-1 receptors"
      ],
      ans: [
        "TRUE. IP₃ and DAG, raising intracellular calcium — vasoconstriction.",
        "TRUE. Increased heart rate, contractility and conduction velocity; also renin release.",
        "TRUE. A presynaptic negative feedback loop — the basis of clonidine and dexmedetomidine.",
        "TRUE. Beta-2 drives K⁺ into cells via Na⁺/K⁺-ATPase, which is why salbutamol treats hyperkalaemia.",
        "FALSE. Low dose is dopaminergic (DA1, renal and mesenteric dilatation); intermediate dose beta-1; high dose alpha."
      ]
    },
    {
      cat: "Autonomic",
      stem: "The autonomic nervous system:",
      opts: [
        "Sympathetic preganglionic fibres arise from T1 to L2",
        "All preganglionic fibres are cholinergic and act on nicotinic receptors",
        "The adrenal medulla is innervated by postganglionic sympathetic fibres",
        "Parasympathetic outflow is craniosacral, from cranial nerves III, VII, IX and X and S2–S4",
        "Sweat glands receive sympathetic cholinergic innervation"
      ],
      ans: [
        "TRUE. Thoracolumbar outflow, from the intermediolateral cell column.",
        "TRUE. Both sympathetic and parasympathetic — the ganglion synapse is nicotinic.",
        "FALSE. It is innervated by PREganglionic fibres — the chromaffin cells are modified postganglionic neurones, releasing about 80% adrenaline.",
        "TRUE. The vagus supplies about 75% of all parasympathetic fibres.",
        "TRUE. A sympathetic exception — postganglionic fibres releasing acetylcholine onto muscarinic receptors."
      ]
    },
    {
      cat: "Endocrine",
      stem: "The thyroid and its hormones:",
      opts: [
        "T4 is more potent than T3",
        "Most circulating thyroid hormone is protein bound",
        "Thyroid hormone increases the basal metabolic rate and oxygen consumption",
        "Thyroid storm may present with hyperpyrexia, tachyarrhythmia and confusion",
        "Amiodarone can cause both hypo- and hyperthyroidism"
      ],
      ans: [
        "FALSE. T3 is the active hormone, roughly four times more potent; T4 is a prohormone deiodinated peripherally.",
        "TRUE. Over 99%, mainly to thyroxine-binding globulin — only free hormone is active.",
        "TRUE. Along with increased beta-adrenoceptor sensitivity — hence the value of beta blockade in thyrotoxicosis.",
        "TRUE. A perioperative emergency: cooling, beta blockade, propylthiouracil, iodine (given after the thionamide), steroids and fluid.",
        "TRUE. It is about 37% iodine by weight; type 1 is iodine-induced excess synthesis, type 2 a destructive thyroiditis."
      ]
    },
    {
      cat: "Endocrine",
      stem: "The adrenal cortex:",
      opts: [
        "The zona glomerulosa secretes aldosterone",
        "Cortisol secretion follows a circadian rhythm peaking in the early morning",
        "Cortisol has no mineralocorticoid activity",
        "Etomidate inhibits 11-beta-hydroxylase",
        "Addisonian crisis typically causes hyperkalaemia and hyponatraemia"
      ],
      ans: [
        "TRUE. Outer layer — glomerulosa (salt), fasciculata (sugar), reticularis (sex).",
        "TRUE. Peak around 0800, trough around midnight. Normal output about 20–30 mg/day, rising several-fold with major surgery.",
        "FALSE. Cortisol does have mineralocorticoid activity; renal 11-beta-HSD2 converts it to inactive cortisone to protect the receptor.",
        "TRUE. Which is why even a single induction dose suppresses cortisol synthesis for hours and infusions are not used.",
        "TRUE. With hypotension, hypoglycaemia and hypovolaemia — treat with hydrocortisone and fluid."
      ]
    },
    {
      cat: "Endocrine",
      stem: "Glucose homeostasis:",
      opts: [
        "Insulin promotes GLUT4 translocation in muscle and adipose tissue",
        "Insulin is secreted as a proinsulin cleaved to insulin and C-peptide",
        "Glucagon stimulates glycogenolysis and gluconeogenesis",
        "Brain glucose uptake is insulin dependent",
        "The stress response to surgery causes insulin resistance"
      ],
      ans: [
        "TRUE. The insulin-sensitive transporter; GLUT1 and GLUT3 in brain are constitutive.",
        "TRUE. C-peptide measurement distinguishes endogenous from exogenous insulin.",
        "TRUE. Via Gs and cAMP in the liver; it also promotes lipolysis and ketogenesis.",
        "FALSE. Brain uptake is insulin INDEPENDENT — which is why hypoglycaemia is so damaging.",
        "TRUE. Cortisol, catecholamines, growth hormone and glucagon all oppose insulin — hence perioperative hyperglycaemia."
      ]
    },
    {
      cat: "GI / Liver",
      stem: "The liver:",
      opts: [
        "The portal vein supplies about 70% of hepatic blood flow",
        "The portal vein supplies about 50% of hepatic oxygen delivery",
        "The hepatic arterial buffer response increases arterial flow when portal flow falls",
        "Albumin has a half-life of about 20 days",
        "Zone 3 hepatocytes are the most vulnerable to hypoxic injury"
      ],
      ans: [
        "TRUE. Total flow about 1500 ml/min, roughly 25% of cardiac output.",
        "TRUE. It carries a large volume at lower saturation, so oxygen delivery is split roughly equally with the artery.",
        "TRUE. Mediated by adenosine washout — it partially preserves total hepatic oxygen delivery.",
        "TRUE. Which is why albumin is a poor marker of acute hepatic synthetic failure; prothrombin time and factor VII (half-life about 5 hours) are far quicker.",
        "TRUE. Centrilobular, furthest from the portal triad — the site of both ischaemic and paracetamol necrosis."
      ]
    },
    {
      cat: "GI / Liver",
      stem: "Gastrointestinal physiology:",
      opts: [
        "Gastric parietal cells secrete acid via an H⁺/K⁺-ATPase",
        "Gastrin is released from G cells in the gastric antrum",
        "Intrinsic factor is secreted by chief cells",
        "The lower oesophageal sphincter tone is reduced by suxamethonium",
        "Barrier pressure is the difference between lower oesophageal sphincter pressure and intragastric pressure"
      ],
      ans: [
        "TRUE. The proton pump — irreversibly inhibited by omeprazole.",
        "TRUE. Stimulated by peptides, gastric distension and vagal activity; inhibited by low pH and somatostatin.",
        "FALSE. Intrinsic factor comes from PARIETAL cells. Chief cells secrete pepsinogen.",
        "FALSE. Suxamethonium raises LOS tone, and raises intragastric pressure — barrier pressure is largely preserved. Tone is reduced by opioids, atropine, propofol, volatiles and pregnancy.",
        "TRUE. It is barrier pressure, not LOS pressure alone, that determines reflux risk."
      ]
    },
    {
      cat: "Haematology",
      stem: "Haemostasis:",
      opts: [
        "The intrinsic pathway is assessed by the prothrombin time",
        "Factor VII has the shortest half-life of the clotting factors",
        "Vitamin K is required for factors II, VII, IX and X",
        "Protein C and protein S are vitamin K dependent",
        "Tissue factor initiates coagulation in the cell-based model"
      ],
      ans: [
        "FALSE. PT/INR assesses the EXTRINSIC and common pathways. APTT assesses the intrinsic pathway.",
        "TRUE. About 4–6 hours, which is why the INR rises first in liver failure and warfarinisation.",
        "TRUE. Gamma-carboxylation of glutamate residues.",
        "TRUE. Which is why warfarin is transiently procoagulant at initiation — protein C falls before factor II.",
        "TRUE. Tissue factor–VIIa initiation, amplification on platelets, then a thrombin burst on the activated platelet surface."
      ]
    },
    {
      cat: "Haematology",
      stem: "Thromboelastography (TEG):",
      opts: [
        "A prolonged R time indicates deficiency of clotting factors",
        "The maximum amplitude reflects platelet number and function",
        "The alpha angle mainly reflects fibrinogen and the rate of clot build-up",
        "LY30 above 7.5% suggests hyperfibrinolysis",
        "A hypercoagulable trace shows a long R time and a narrow maximum amplitude"
      ],
      ans: [
        "TRUE. Time to initial fibrin formation — treat with FFP or prothrombin complex concentrate.",
        "TRUE. MA is the widest point — low MA points to platelets (and to fibrinogen in part).",
        "TRUE. Low alpha angle points to cryoprecipitate or fibrinogen concentrate.",
        "TRUE. Percentage lysis 30 minutes after MA — the indication for tranexamic acid.",
        "FALSE. That is the picture of factor deficiency plus thrombocytopenia. A hypercoagulable trace has a SHORT R time and a WIDE MA."
      ]
    },
    {
      cat: "Body fluids",
      stem: "Body fluid compartments in a 70 kg adult:",
      opts: [
        "Total body water is about 42 L",
        "Intracellular volume is about 28 L",
        "Plasma volume is about 3 L",
        "Interstitial fluid is measured directly by inulin",
        "Blood volume in an adult male is about 70 ml/kg"
      ],
      ans: [
        "TRUE. Roughly 60% of body weight; less in women, obesity and the elderly, more in neonates (about 75%).",
        "TRUE. Two-thirds of total body water. Extracellular is 14 L, split into 11 L interstitial and 3 L plasma.",
        "TRUE. Measured with radiolabelled albumin or Evans blue.",
        "FALSE. Inulin measures the extracellular volume. Interstitial volume is derived by SUBTRACTING plasma volume from it — it cannot be measured directly.",
        "TRUE. About 70 ml/kg in men, 65 in women, 80–90 in neonates."
      ]
    },
    {
      cat: "Metabolism",
      stem: "Temperature regulation:",
      opts: [
        "The anterior hypothalamus is the principal thermoregulatory centre",
        "General anaesthesia widens the interthreshold range",
        "The largest fall in core temperature under anaesthesia occurs in the first hour, by redistribution",
        "Shivering can increase oxygen consumption several-fold",
        "Neonates generate heat mainly by shivering"
      ],
      ans: [
        "TRUE. Integrating skin, spinal cord and core inputs.",
        "TRUE. From about 0.2 °C to about 4 °C, so thermoregulatory defences are not triggered until the patient is already cold.",
        "TRUE. A fall of about 0.5–1.5 °C from core-to-peripheral redistribution after vasodilatation — pre-warming is the countermeasure.",
        "TRUE. By 200–400%, which is dangerous in coronary disease.",
        "FALSE. Neonates cannot shiver effectively; they use NON-SHIVERING thermogenesis in brown fat, uncoupled by UCP-1."
      ]
    },
    {
      cat: "Physiology of pregnancy",
      stem: "Maternal physiology at term:",
      opts: [
        "Cardiac output rises by about 40%",
        "Functional residual capacity falls by about 20%",
        "Minute ventilation rises, giving a PaCO₂ of about 4.1 kPa",
        "Plasma volume rises more than red cell mass",
        "MAC of volatile agents is increased"
      ],
      ans: [
        "TRUE. From increases in both stroke volume and heart rate; a further 15–25% rise during labour and an autotransfusion immediately after delivery.",
        "TRUE. From diaphragmatic splinting — combined with a 20% rise in oxygen consumption, this is why desaturation is so rapid.",
        "TRUE. Progesterone-driven hyperventilation, with renal bicarbonate compensation to about 20 mmol/L.",
        "TRUE. Plasma up about 50%, red cells about 25% — the physiological anaemia of pregnancy.",
        "FALSE. MAC is REDUCED, by about 30–40%. Local anaesthetic requirement is also reduced."
      ]
    },
    {
      cat: "Physiology of ageing",
      stem: "Physiological changes with ageing:",
      opts: [
        "Closing capacity rises and may exceed FRC even when erect",
        "Glomerular filtration rate falls by about 1 ml/min per year after the age of 40",
        "Maximum heart rate increases",
        "Arterial stiffening raises systolic pressure and pulse pressure",
        "Total body water increases as a proportion of body weight"
      ],
      ans: [
        "TRUE. Causing shunt and a falling PaO₂ with age.",
        "TRUE. With reduced concentrating ability and a blunted response to sodium and water loading.",
        "FALSE. Maximum heart rate FALLS (roughly 220 − age), and beta-receptor responsiveness is reduced, so cardiac output becomes more preload-dependent.",
        "TRUE. Isolated systolic hypertension with a widened pulse pressure and LV hypertrophy.",
        "FALSE. Total body water FALLS with lean mass, while body fat rises — altering the volume of distribution of both water- and lipid-soluble drugs."
      ]
    },
    {
      cat: "Physiology of the child",
      stem: "The neonate compared with the adult:",
      opts: [
        "Oxygen consumption is about 6 ml/kg/min",
        "The larynx is relatively higher and more anterior",
        "Cardiac output is largely rate dependent",
        "Fetal haemoglobin predominates and shifts the dissociation curve to the right",
        "The alveolar minute volume to FRC ratio is higher than in an adult"
      ],
      ans: [
        "TRUE. Roughly double the adult figure of about 3 ml/kg/min.",
        "TRUE. At about C3–C4 with a large tongue, floppy epiglottis and narrowest point classically at the cricoid.",
        "TRUE. A poorly compliant ventricle with limited contractile reserve — bradycardia is dangerous.",
        "FALSE. HbF shifts the curve LEFT (P50 about 2.5 kPa), because it binds 2,3-DPG poorly.",
        "TRUE. About 5:1 versus 1.5:1 — which is why inhalational induction is fast and desaturation is faster."
      ]
    },
    {
      cat: "Immunology",
      stem: "Anaphylaxis:",
      opts: [
        "Classical anaphylaxis is a type I IgE-mediated hypersensitivity reaction",
        "Mast cell tryptase peaks within about 1 hour and should be sampled serially",
        "Adrenaline is the first-line drug and acts partly by stabilising mast cells",
        "Neuromuscular blocking agents are among the commonest perioperative triggers",
        "A normal tryptase excludes anaphylaxis"
      ],
      ans: [
        "TRUE. Prior sensitisation, then cross-linking of IgE on mast cells and basophils.",
        "TRUE. Samples as soon as feasible, at 1–2 hours, and a baseline at 24 hours or later.",
        "TRUE. Alpha-1 vasoconstriction, beta-1 inotropy, beta-2 bronchodilatation and inhibition of further mediator release.",
        "TRUE. With antibiotics and chlorhexidine; latex now less frequent. Suxamethonium and rocuronium lead the NMBA group.",
        "FALSE. Tryptase can be normal in a genuine reaction — the diagnosis is clinical, confirmed later by specialist testing."
      ]
    },
    {
      cat: "Exercise",
      stem: "The physiological response to exercise:",
      opts: [
        "Cardiac output can rise five-fold in a trained adult",
        "Oxygen extraction ratio rises from about 25% to about 75%",
        "Muscle blood flow increases mainly through metabolic vasodilatation",
        "The anaerobic threshold typically occurs at about 20% of VO₂max",
        "Coronary blood flow increases mainly by increased extraction"
      ],
      ans: [
        "TRUE. From about 5 to 25 L/min or more, mostly through stroke volume early and heart rate later.",
        "TRUE. With a corresponding fall in mixed venous saturation.",
        "TRUE. Adenosine, K⁺, H⁺, CO₂ and local hypoxia override sympathetic tone — functional sympatholysis.",
        "FALSE. The anaerobic threshold is around 50–70% of VO₂max; below 11 ml/kg/min on CPET predicts poor surgical outcome.",
        "FALSE. Coronary extraction is already near-maximal at rest (about 70%), so extra demand must be met by increased FLOW."
      ]
    },
    {
      cat: "Cardiac",
      stem: "The baroreceptor reflex:",
      opts: [
        "Carotid sinus baroreceptors are innervated by the glossopharyngeal nerve",
        "Increased arterial pressure increases baroreceptor firing",
        "The reflex is reset in chronic hypertension",
        "It is preserved under general anaesthesia",
        "The Valsalva manoeuvre tests baroreflex integrity"
      ],
      ans: [
        "TRUE. Via the nerve of Hering to the nucleus tractus solitarius; aortic arch receptors travel in the vagus.",
        "TRUE. Which increases vagal tone and inhibits sympathetic outflow, lowering pressure and rate.",
        "TRUE. Reset to defend a higher pressure — one reason for haemodynamic lability under anaesthesia.",
        "FALSE. It is BLUNTED by volatiles, propofol and opioids, which is why hypovolaemia may be unmasked at induction.",
        "TRUE. The four phases; an absent phase IV overshoot with no bradycardia indicates autonomic dysfunction."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Oxygen therapy and apnoeic oxygenation:",
      opts: [
        "Preoxygenation aims to replace alveolar nitrogen with oxygen",
        "The time to desaturation after preoxygenation depends chiefly on FRC and oxygen consumption",
        "PaCO₂ rises by about 0.4–0.8 kPa per minute during apnoea",
        "High-flow nasal oxygen provides a small positive airway pressure",
        "Absorption atelectasis is reduced by using 100% oxygen"
      ],
      ans: [
        "TRUE. End-tidal oxygen above 0.9 (or three minutes of tidal breathing, or eight vital capacity breaths) is the target.",
        "TRUE. Which is why obesity, pregnancy and childhood shorten it so markedly.",
        "TRUE. With an initial faster rise of about 1.5 kPa in the first minute as body stores equilibrate.",
        "TRUE. Roughly 3–7 cmH₂O with the mouth closed, plus dead space washout and warmed humidified gas.",
        "FALSE. 100% oxygen INCREASES absorption atelectasis, because oxygen is rapidly taken up leaving no splinting nitrogen."
      ]
    },
    {
      cat: "Neuro",
      stem: "Intracranial pressure:",
      opts: [
        "Normal ICP in a supine adult is 5–13 mmHg",
        "The Monro–Kellie doctrine states that the sum of brain, blood and CSF volume is constant",
        "Cerebral perfusion pressure is mean arterial pressure minus ICP or CVP, whichever is higher",
        "Cushing's triad comprises hypertension, bradycardia and irregular respiration",
        "Mannitol reduces ICP purely by osmotic diuresis"
      ],
      ans: [
        "TRUE. Sustained values above 20–25 mmHg require treatment.",
        "TRUE. So a rise in one compartment must be offset by a fall in another before pressure rises steeply.",
        "TRUE. Target CPP is usually 60–70 mmHg in traumatic brain injury.",
        "TRUE. A late and ominous sign of raised ICP and impending herniation.",
        "FALSE. It also reduces blood viscosity and improves rheology, giving a rapid early effect; rebound and hypovolaemia are the risks."
      ]
    },
    {
      cat: "Renal",
      stem: "Potassium homeostasis:",
      opts: [
        "About 98% of body potassium is intracellular",
        "Alkalosis shifts potassium into cells",
        "Insulin and beta-2 agonists lower plasma potassium",
        "ECG changes of hyperkalaemia begin with flattened T waves",
        "Calcium chloride lowers plasma potassium"
      ],
      ans: [
        "TRUE. Which is why plasma potassium is a poor guide to total body stores.",
        "TRUE. Roughly 0.6 mmol/L fall per 0.1 rise in pH — hyperventilation is an adjunct in hyperkalaemia.",
        "TRUE. Both stimulate Na⁺/K⁺-ATPase; insulin with glucose is the mainstay.",
        "FALSE. Hyperkalaemia gives PEAKED T waves, then a widened QRS, lost P waves, a sine wave and arrest. FLATTENED T waves with U waves indicate HYPOkalaemia.",
        "FALSE. Calcium does not change the potassium concentration at all — it stabilises the myocardial membrane. It buys time; it is not a treatment of the potassium itself."
      ]
    }
    ,
    {
      cat: "Cardiac",
      stem: "Systemic vascular resistance and blood flow:",
      opts: [
        "The Hagen–Poiseuille equation shows flow is proportional to the fourth power of radius",
        "Blood is a Newtonian fluid",
        "Reynolds number above about 2000 predicts turbulent flow",
        "Viscosity of blood falls in small vessels",
        "Anaemia reduces viscosity and increases flow"
      ],
      ans: [
        "TRUE. Q = πΔPr⁴ / 8ηl — halving the radius reduces flow sixteen-fold. It applies only to laminar flow of a Newtonian fluid.",
        "FALSE. Blood is NON-Newtonian — viscosity varies with shear rate and haematocrit.",
        "TRUE. Re = ρvd/η. Turbulence raises resistance and generates noise (murmurs, bruits).",
        "TRUE. The Fåhraeus–Lindqvist effect — axial streaming of red cells in vessels below about 300 µm.",
        "TRUE. Which partly compensates for reduced oxygen carrying capacity; optimal haematocrit for delivery is around 30%."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Shunt and dead space:",
      opts: [
        "Anatomical shunt in a normal adult is about 2–3% of cardiac output",
        "A true shunt does not respond to increased inspired oxygen",
        "Anatomical dead space is about 2 ml/kg",
        "Alveolar dead space is increased by pulmonary embolism",
        "The A–a gradient breathing air is normally less than 2 kPa in a young adult"
      ],
      ans: [
        "TRUE. Thebesian and bronchial venous drainage.",
        "TRUE. Because shunted blood never contacts alveolar gas — the distinguishing test from V/Q mismatch.",
        "TRUE. Roughly 150 ml in a 70 kg adult; increased by an extended neck and by apparatus, reduced by a tracheostomy or a supraglottic airway.",
        "TRUE. Ventilated but unperfused alveoli — hence the fall in end-tidal CO₂ with a preserved or rising PaCO₂.",
        "TRUE. Rising with age, roughly (age/4 + 4) mmHg."
      ]
    },
    {
      cat: "Neuro",
      stem: "Nerve conduction:",
      opts: [
        "Conduction velocity in myelinated fibres is proportional to fibre diameter",
        "Saltatory conduction occurs at the nodes of Ranvier",
        "A-delta fibres carry fast, sharp, well-localised pain",
        "C fibres are myelinated",
        "The absolute refractory period is due to inactivation of sodium channels"
      ],
      ans: [
        "TRUE. Roughly 6 × diameter in µm for myelinated fibres.",
        "TRUE. Where sodium channels are concentrated — the impulse jumps between nodes.",
        "TRUE. Thinly myelinated, 5–30 m/s. C fibres carry slow, dull, poorly localised second pain.",
        "FALSE. C fibres are UNmyelinated, 0.5–2 m/s — and the most sensitive to local anaesthetic blockade along with B fibres.",
        "TRUE. Channels are in the inactivated state and cannot reopen until the membrane repolarises."
      ]
    },
    {
      cat: "Neuro",
      stem: "Pain physiology:",
      opts: [
        "The gate control theory proposes that large fibre input inhibits transmission from nociceptors",
        "Substantia gelatinosa is Rexed lamina II of the dorsal horn",
        "The spinothalamic tract decussates within a few segments of entry",
        "Wind-up is mediated by NMDA receptor activation",
        "Descending inhibition involves noradrenaline and serotonin from the periaqueductal grey and raphe nuclei"
      ],
      ans: [
        "TRUE. The rationale for TENS and for rubbing an injury.",
        "TRUE. The key site of modulation, rich in opioid receptors.",
        "TRUE. Decussating in the anterior white commissure, then ascending contralaterally.",
        "TRUE. Repeated C fibre input removes the magnesium block — the target of ketamine.",
        "TRUE. Which is why tricyclics and SNRIs work in neuropathic pain."
      ]
    },
    {
      cat: "Immunology",
      stem: "Blood groups and transfusion:",
      opts: [
        "Group O is the universal red cell donor",
        "Group AB plasma is the universal donor plasma",
        "Anti-A and anti-B antibodies are IgM",
        "Acute haemolytic transfusion reaction is usually due to ABO incompatibility",
        "TRALI presents with non-cardiogenic pulmonary oedema within 6 hours"
      ],
      ans: [
        "TRUE. No A or B antigen. O negative is the emergency choice.",
        "TRUE. AB plasma has neither anti-A nor anti-B antibody — the reverse of the red cell rule.",
        "TRUE. Naturally occurring, complement-fixing, causing intravascular haemolysis. Rhesus antibodies are IgG and cross the placenta.",
        "TRUE. Almost always a clerical or identification error — fever, loin pain, hypotension, haemoglobinuria and DIC.",
        "TRUE. Donor anti-leucocyte antibodies; the leading cause of transfusion-related death. Distinguish from TACO, which is volume overload."
      ]
    },
    {
      cat: "Body fluids",
      stem: "Osmolality and tonicity:",
      opts: [
        "Plasma osmolality is normally 275–295 mOsm/kg",
        "Calculated osmolarity is approximately 2[Na⁺] + urea + glucose",
        "An osmolar gap suggests the presence of an unmeasured solute such as ethanol or methanol",
        "0.9% sodium chloride is isotonic with plasma and has an osmolarity of 154 mOsm/L",
        "5% dextrose distributes throughout total body water"
      ],
      ans: [
        "TRUE. Measured by depression of freezing point.",
        "TRUE. All in mmol/L.",
        "TRUE. A gap above about 10 mOsm/kg — important in unexplained metabolic acidosis.",
        "FALSE. Its osmolarity is about 308 mOsm/L (154 Na⁺ plus 154 Cl⁻). It is roughly isotonic in effect, but 154 is the concentration of each ion, not the total.",
        "TRUE. The glucose is metabolised leaving free water — which is why it is useless as a resuscitation fluid and dangerous in hyponatraemia."
      ]
    },
    {
      cat: "Cardiac",
      stem: "Pulmonary circulation:",
      opts: [
        "Pulmonary vascular resistance is about one-tenth of systemic vascular resistance",
        "Normal mean pulmonary artery pressure is about 15 mmHg",
        "PVR is lowest at FRC",
        "Hypoxia causes pulmonary vasodilatation",
        "Recruitment and distension lower PVR when cardiac output rises"
      ],
      ans: [
        "TRUE. A high-flow, low-pressure, highly compliant circuit.",
        "TRUE. Roughly 25/10 mmHg; pulmonary hypertension is a mean above 20–25 mmHg.",
        "TRUE. A U-shaped curve — alveolar vessels are compressed at high volume, extra-alveolar vessels kinked at low volume.",
        "FALSE. Hypoxia causes pulmonary VASOCONSTRICTION — the opposite of the systemic response — diverting flow to ventilated lung.",
        "TRUE. Which is why PVR falls with exercise despite a large rise in flow."
      ]
    },
    {
      cat: "Renal",
      stem: "Acute kidney injury:",
      opts: [
        "Oliguria is defined as urine output below 0.5 ml/kg/h for 6 hours",
        "Prerenal AKI typically shows a urinary sodium below 20 mmol/L",
        "The fractional excretion of sodium is above 1% in prerenal failure",
        "Rhabdomyolysis causes AKI partly through tubular obstruction by myoglobin casts",
        "Contrast nephropathy usually peaks at 2–3 days"
      ],
      ans: [
        "TRUE. The KDIGO urine output criterion; a creatinine rise of 26.5 µmol/L in 48 hours is the other.",
        "TRUE. Avid sodium reabsorption with concentrated urine (osmolality above 500 mOsm/kg).",
        "FALSE. FENa is BELOW 1% in prerenal states and above 2% in established tubular necrosis. It is unreliable after diuretics.",
        "TRUE. With direct tubular toxicity and renal vasoconstriction; treat with early aggressive fluid.",
        "TRUE. With recovery over about a week; the main preventive measure is hydration."
      ]
    },
    {
      cat: "GI / Liver",
      stem: "Bilirubin and jaundice:",
      opts: [
        "Unconjugated bilirubin is water soluble",
        "Conjugation occurs by glucuronyl transferase in the hepatocyte",
        "Unconjugated hyperbilirubinaemia occurs in haemolysis and Gilbert's syndrome",
        "Kernicterus results from unconjugated bilirubin crossing the blood–brain barrier",
        "Obstructive jaundice causes pale stools and dark urine"
      ],
      ans: [
        "FALSE. Unconjugated bilirubin is lipid soluble and albumin bound — which is exactly why it can enter the brain and why it does not appear in urine.",
        "TRUE. UDP-glucuronyl transferase — deficient or immature in Gilbert's, Crigler–Najjar and the neonate.",
        "TRUE. Both are prehepatic or conjugation defects.",
        "TRUE. Risk is increased by drugs that displace bilirubin from albumin, such as sulphonamides.",
        "TRUE. Conjugated bilirubin is water soluble and appears in urine, while none reaches the gut."
      ]
    },
    {
      cat: "Endocrine",
      stem: "Calcium homeostasis:",
      opts: [
        "About 50% of plasma calcium is ionised",
        "Alkalosis increases the ionised calcium concentration",
        "Parathyroid hormone increases renal calcium reabsorption and phosphate excretion",
        "Vitamin D is hydroxylated at position 1 in the kidney",
        "Calcitonin lowers plasma calcium"
      ],
      ans: [
        "TRUE. Roughly 50% ionised, 40% protein bound (mostly albumin) and 10% complexed.",
        "FALSE. Alkalosis increases albumin binding and LOWERS ionised calcium — hence perioral tinging and tetany with hyperventilation.",
        "TRUE. Plus bone resorption and activation of 1-alpha-hydroxylase.",
        "TRUE. 25-hydroxylation in the liver, 1-alpha-hydroxylation in the kidney to calcitriol.",
        "TRUE. From thyroid parafollicular C cells, though its physiological role in adults is minor."
      ]
    },
    {
      cat: "Cardiac",
      stem: "Measurement of cardiac output:",
      opts: [
        "Thermodilution using a pulmonary artery catheter overestimates output in tricuspid regurgitation",
        "The area under the thermodilution curve is inversely proportional to cardiac output",
        "Oesophageal Doppler measures descending aortic blood flow velocity",
        "Pulse contour analysis requires calibration in states of rapidly changing vascular tone",
        "Pulse pressure variation predicts fluid responsiveness in a spontaneously breathing patient"
      ],
      ans: [
        "FALSE. Tricuspid regurgitation causes recirculation of the indicator, UNDERestimating cardiac output.",
        "TRUE. The Stewart–Hamilton principle — a small area means a high output.",
        "TRUE. Assuming a fixed proportion of output to the upper body, with a nomogram for aortic area.",
        "TRUE. Uncalibrated devices drift when SVR changes abruptly, as in sepsis.",
        "FALSE. PPV requires controlled ventilation with a tidal volume of about 8 ml/kg, sinus rhythm and a closed chest. Spontaneous effort invalidates it."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Capnography:",
      opts: [
        "The normal end-tidal to arterial CO₂ gradient is about 0.5 kPa",
        "Phase III is the alveolar plateau",
        "An upsloping phase III occurs in bronchospasm",
        "A sudden fall in end-tidal CO₂ to zero suggests disconnection or oesophageal intubation",
        "A raised baseline indicates rebreathing"
      ],
      ans: [
        "TRUE. Widened by alveolar dead space — embolism, low output, high airway pressure.",
        "TRUE. Phase I dead space gas, II mixed, III alveolar, then the inspiratory downstroke.",
        "TRUE. From heterogeneous emptying — also seen in COPD.",
        "TRUE. Along with complete obstruction, cardiac arrest or a total loss of output.",
        "TRUE. Exhausted soda lime, an incompetent valve, or an inadequate fresh gas flow in a Mapleson system."
      ]
    },
    {
      cat: "Neuro",
      stem: "Special senses and reflexes:",
      opts: [
        "The oculocardiac reflex has an afferent limb in the ophthalmic division of the trigeminal nerve",
        "The efferent limb of the oculocardiac reflex is the vagus",
        "The gag reflex has a glossopharyngeal afferent and a vagal efferent",
        "The carotid sinus reflex causes tachycardia in response to a rise in pressure",
        "The cough reflex afferent is carried in the vagus"
      ],
      ans: [
        "TRUE. Long and short ciliary nerves to the ciliary ganglion, then the trigeminal ganglion.",
        "TRUE. Traction on extraocular muscles causing bradycardia — treat by stopping the stimulus, then atropine.",
        "TRUE. IX in, X out.",
        "FALSE. It causes BRADYCARDIA and vasodilatation — the basis of carotid sinus massage.",
        "TRUE. Via the recurrent laryngeal and internal laryngeal branches; the efferent is also vagal plus spinal motor nerves."
      ]
    },
    {
      cat: "Haematology",
      stem: "Massive haemorrhage:",
      opts: [
        "Massive transfusion is often defined as replacement of one blood volume in 24 hours",
        "Stored red cells have a low 2,3-DPG and a left-shifted dissociation curve",
        "Citrate toxicity causes hypercalcaemia",
        "The lethal triad is hypothermia, acidosis and coagulopathy",
        "Tranexamic acid within 3 hours of trauma reduces mortality"
      ],
      ans: [
        "TRUE. Or 50% within 4 hours, or 4 units within 1 hour.",
        "TRUE. Restored over about 24 hours after transfusion.",
        "FALSE. Citrate CHELATES calcium, causing HYPOcalcaemia with hypotension and prolonged QT — monitor ionised calcium and replace.",
        "TRUE. Each worsens the others — hence warming, early ratio-based product delivery and calcium.",
        "TRUE. Given later it may be harmful; the effect is on death from bleeding."
      ]
    },
    {
      cat: "Metabolism",
      stem: "The metabolic response to surgery:",
      opts: [
        "The ebb phase is characterised by hypometabolism and lasts hours",
        "The flow phase is catabolic with negative nitrogen balance",
        "Cortisol, catecholamines, growth hormone and glucagon all rise",
        "Insulin secretion rises early and drives anabolism",
        "Regional anaesthesia can attenuate the stress response"
      ],
      ans: [
        "TRUE. Cuthbertson's description — reduced metabolic rate, hypovolaemia and hypothermia in the first 24–48 hours.",
        "TRUE. Muscle proteolysis, lipolysis, hyperglycaemia and sodium and water retention.",
        "TRUE. Along with ADH, ACTH, aldosterone and the cytokines IL-1, IL-6 and TNF-alpha.",
        "FALSE. Insulin is suppressed early and there is peripheral resistance later — the diabetogenic response of surgery.",
        "TRUE. Neuraxial blockade in particular blunts the afferent limb, most effectively for lower body surgery."
      ]
    },
    {
      cat: "Cardiac",
      stem: "Myocardial oxygen supply and demand:",
      opts: [
        "Determinants of demand include heart rate, contractility and wall tension",
        "Tachycardia reduces supply mainly by shortening diastole",
        "Subendocardial tissue is more vulnerable to ischaemia than subepicardial",
        "Coronary sinus blood is about 75% saturated",
        "Nitrates reduce demand principally by reducing preload"
      ],
      ans: [
        "TRUE. Wall tension incorporates both preload and afterload.",
        "TRUE. Diastole shortens disproportionately, so it is doubly harmful — demand up, supply down.",
        "TRUE. It is compressed most in systole and is furthest along the perfusion path.",
        "FALSE. About 30–40% — the myocardium extracts about 70% of delivered oxygen at rest, far more than any other organ.",
        "TRUE. Venodilatation lowers wall tension; coronary dilatation is a lesser contribution at usual doses."
      ]
    },
    {
      cat: "Respiratory",
      stem: "Nitrous oxide and gas spaces:",
      opts: [
        "Nitrous oxide is about 34 times more soluble in blood than nitrogen",
        "It expands closed air-containing spaces",
        "Diffusion hypoxia occurs at the end of anaesthesia if air is breathed",
        "The second gas effect speeds the uptake of a volatile agent given with it",
        "It is contraindicated in pneumothorax and after recent intraocular gas"
      ],
      ans: [
        "TRUE. Which is why it enters a gas space faster than nitrogen leaves.",
        "TRUE. Volume doubles in about 10 minutes in a pneumothorax at 75% N₂O; non-compliant spaces such as the middle ear rise in pressure instead.",
        "TRUE. A large volume of nitrous oxide floods into the alveoli, diluting alveolar oxygen — give 100% oxygen for a few minutes.",
        "TRUE. Rapid uptake of a large volume of N₂O concentrates the remaining alveolar gas and augments inspired flow.",
        "TRUE. Also bowel obstruction, air embolism and intracranial air. Intraocular SF₆ contraindicates it for weeks."
      ]
    },
    {
      cat: "Renal",
      stem: "Sodium disturbance:",
      opts: [
        "Correcting chronic hyponatraemia faster than 8–10 mmol/L per day risks osmotic demyelination",
        "SIADH is characterised by a low plasma osmolality with an inappropriately concentrated urine",
        "TURP syndrome causes a dilutional hyponatraemia",
        "Hypertonic saline is contraindicated in symptomatic hyponatraemia with seizures",
        "Hypernatraemia in a ventilated ICU patient is usually a water deficit"
      ],
      ans: [
        "TRUE. Central pontine myelinolysis — the reason for slow, monitored correction.",
        "TRUE. With urinary sodium above 20–30 mmol/L, euvolaemia and normal adrenal, thyroid and renal function.",
        "TRUE. From absorption of hypo-osmolar irrigation fluid — confusion, visual disturbance, bradycardia and seizures. Glycine adds its own toxicity.",
        "FALSE. Hypertonic saline is exactly the treatment for symptomatic hyponatraemia — a small bolus to raise sodium by about 4–6 mmol/L and stop the seizure.",
        "TRUE. Usually inadequate free water rather than sodium excess; correct slowly to avoid cerebral oedema."
      ]
    },
    {
      cat: "Physiology of the child",
      stem: "Fetal and transitional circulation:",
      opts: [
        "The ductus venosus shunts blood from the umbilical vein to the inferior vena cava",
        "The foramen ovale directs oxygenated blood preferentially to the left atrium",
        "The ductus arteriosus closes in response to a rise in PaO₂ and a fall in prostaglandins",
        "Fetal pulmonary vascular resistance is low",
        "Persistent fetal circulation can be precipitated by hypoxia, acidosis and hypothermia"
      ],
      ans: [
        "TRUE. Bypassing the hepatic sinusoids.",
        "TRUE. Streaming from the IVC across to the left atrium and so to the brain and coronary arteries.",
        "TRUE. Functional closure within 24–48 hours; prostaglandin E1 keeps it open in duct-dependent lesions.",
        "FALSE. Fetal PVR is HIGH, so most right ventricular output crosses the duct to the aorta. It falls dramatically with the first breaths.",
        "TRUE. Right-to-left shunt returns — hence the emphasis on warmth, oxygenation and avoiding acidosis in neonates."
      ]
    },
    {
      cat: "Cardiac",
      stem: "Starling forces and oedema:",
      opts: [
        "Net filtration depends on the balance of hydrostatic and oncotic pressure gradients",
        "Plasma oncotic pressure is about 25 mmHg, mostly due to albumin",
        "The glycocalyx is now regarded as the principal semipermeable barrier",
        "Lymphatic drainage returns about 8 L of fluid per day to the circulation",
        "The revised Starling model predicts that colloid infusion in sepsis stays intravascular"
      ],
      ans: [
        "TRUE. J = K[(Pc − Pi) − σ(πc − πi)].",
        "TRUE. Albumin contributes about 65–70%, augmented by the Gibbs–Donnan effect.",
        "TRUE. The endothelial glycocalyx and the subglycocalyx space, not the whole endothelium — which is why classical reabsorption at the venular end is now doubted.",
        "FALSE. Lymph flow is about 2–4 L/day. It rises considerably in oedematous states but not to 8 L.",
        "FALSE. Glycocalyx damage in sepsis increases permeability, so colloid leaks — one reason colloids have not shown benefit in septic resuscitation."
      ]
    }
  ]
});
