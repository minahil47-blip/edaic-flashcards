window.DECKS = window.DECKS || [];
window.DECKS.push({
  id: "autonomic",
  title: "Autonomic",
  emoji: "🔀",
  subtitle: "Sympathetic & parasympathetic outflow · transmitters · adrenoceptors · G proteins · sympathomimetics",
  colors: {
    front1: "#0891b2", front2: "#7c3aed",
    back1: "#fed7aa", back2: "#fecdd3", backText: "#1c1917",
    chips: ["#0891b2","#7c3aed","#A8123E","#B4690E","#0E7A66","#1B5FA8","#ff6b9d","#ffd93d"]
  },
  cards: [
    {cat:"Outflow", q:"Where does the sympathetic system arise?", a:"Thoracolumbar — the lateral horn of the spinal cord, T1 to L2."},
    {cat:"Outflow", q:"Where does the parasympathetic system arise?", a:"Craniosacral — cranial nerves III, VII, IX and X, plus S2–S4."},
    {cat:"Outflow", q:"Compare sympathetic pre- and postganglionic fibre lengths.", a:"Preganglionic SHORT and myelinated (type B); postganglionic LONG and unmyelinated (type C). The ganglia lie close to the cord in the paravertebral chain."},
    {cat:"Outflow", q:"Compare parasympathetic pre- and postganglionic fibre lengths.", a:"Preganglionic LONG; postganglionic SHORT. The ganglia lie close to or within the target organ."},
    {cat:"Outflow", q:"How far does vagal supply extend along the gut?", a:"To the splenic flexure. The distal colon and pelvic viscera are supplied by the sacral outflow (S2–S4) via the pelvic splanchnic nerves."},
    {cat:"Outflow", q:"What is the sympathetic outflow to the heart?", a:"T1–T5."},

    {cat:"Transmitters", q:"What transmitter and receptor operate at ALL autonomic ganglia?", a:"Acetylcholine acting on NICOTINIC receptors — for both sympathetic and parasympathetic preganglionic fibres."},
    {cat:"Transmitters", q:"What does the postganglionic parasympathetic fibre release, and onto what?", a:"Acetylcholine acting on MUSCARINIC receptors."},
    {cat:"Transmitters", q:"What does the postganglionic sympathetic fibre release?", a:"Noradrenaline acting on adrenoceptors — with two exceptions."},
    {cat:"Transmitters", q:"What are the two exceptions to sympathetic noradrenergic transmission?", a:"Sweat glands, which are sympathetic but CHOLINERGIC acting on muscarinic receptors; and the adrenal medulla, which has no postganglionic neurone at all."},
    {cat:"Transmitters", q:"Why is the adrenal medulla a special case?", a:"It is a modified sympathetic ganglion innervated directly by preganglionic fibres. It has no postganglionic neurone and secretes about 80% adrenaline directly into the bloodstream."},

    {cat:"Cholinergic receptors", q:"Contrast nicotinic and muscarinic receptors by type.", a:"Nicotinic are ligand-gated ion channels (ionotropic). Muscarinic are G-protein coupled (metabotropic)."},
    {cat:"Cholinergic receptors", q:"Where are nicotinic receptors found?", a:"All autonomic ganglia, the adrenal medulla, and the neuromuscular junction."},
    {cat:"Cholinergic receptors", q:"Which drugs block muscarinic receptors?", a:"Atropine, glycopyrrolate and hyoscine."},

    {cat:"Adrenoceptors", q:"List the effects of alpha-1 stimulation.", a:"Vasoconstriction raising SVR, bladder and gut sphincter contraction, mydriasis, thick salivary secretion, hepatic glycogenolysis and uterine contraction."},
    {cat:"Adrenoceptors", q:"List the effects of alpha-2 stimulation.", a:"Presynaptic inhibition of noradrenaline release (negative feedback). Centrally: sedation, analgesia and sympatholysis. Also platelet aggregation and reduced insulin secretion."},
    {cat:"Adrenoceptors", q:"Which adrenoceptor is predominantly presynaptic?", a:"Alpha-2. All the others sit on the postsynaptic membrane of the effector organ."},
    {cat:"Adrenoceptors", q:"List the effects of beta-1 stimulation.", a:"Increased heart rate, contractility and conduction velocity; renin release from the juxtaglomerular apparatus; lipolysis."},
    {cat:"Adrenoceptors", q:"List the effects of beta-2 stimulation.", a:"Smooth muscle relaxation — bronchodilation, vasodilation, uterine relaxation. Also glycogenolysis and gluconeogenesis, potassium shift into cells, and insulin release."},
    {cat:"Adrenoceptors", q:"What does beta-3 stimulation do?", a:"Lipolysis in brown adipose tissue (thermogenesis) and bladder detrusor relaxation."},
    {cat:"Adrenoceptors", q:"What type of receptor are all adrenoceptors?", a:"G-protein coupled receptors."},

    {cat:"G proteins", q:"What does Gs do, and which receptors couple to it?", a:"Activates adenylyl cyclase, raising cAMP and activating protein kinase A. Coupled receptors: beta-1, beta-2, beta-3, histamine H2, D1 and TSH."},
    {cat:"G proteins", q:"What does Gi do, and which receptors couple to it?", a:"Inhibits adenylyl cyclase, lowering cAMP. Coupled receptors: alpha-2, opioid, dopamine D2, serotonin and muscarinic M2."},
    {cat:"G proteins", q:"What does Gq do, and which receptors couple to it?", a:"Activates phospholipase C, producing IP3 and DAG and raising intracellular calcium. Coupled receptors: alpha-1, muscarinic M1 and M3, vasopressin V1 and angiotensin II."},
    {cat:"G proteins", q:"Which second messenger pathway does alpha-1 use?", a:"Gq — phospholipase C, IP3/DAG, and a rise in intracellular calcium."},

    {cat:"Sympathomimetics", q:"Distinguish direct from indirect sympathomimetics.", a:"Direct agents act on the receptor themselves. Indirect agents work by releasing stored noradrenaline — hence tachyphylaxis as stores deplete."},
    {cat:"Sympathomimetics", q:"Which drugs are the catecholamines?", a:"Adrenaline, noradrenaline, dopamine, dobutamine and isoprenaline."},
    {cat:"Sympathomimetics", q:"Describe adrenaline's receptor profile.", a:"Both alpha and beta. Beta effects predominate at low dose (increased CO with vasodilation); alpha effects predominate at high dose (marked vasoconstriction)."},
    {cat:"Sympathomimetics", q:"Describe noradrenaline's receptor profile and use.", a:"Alpha-1 much greater than beta-1. Raises SVR with little chronotropy and possible reflex bradycardia. First-line vasopressor in septic shock."},
    {cat:"Sympathomimetics", q:"What is phenylephrine and what does it do?", a:"A pure alpha-1 agonist. Raises SVR with reflex bradycardia; widely used in obstetrics, where it causes less fetal acidosis than ephedrine."},
    {cat:"Sympathomimetics", q:"Describe ephedrine's mechanism.", a:"Both direct and indirect action at alpha and beta receptors. Raises heart rate and blood pressure, with tachyphylaxis on repeated dosing."},
    {cat:"Sympathomimetics", q:"Describe dobutamine.", a:"Predominantly beta-1 with some beta-2 — inotropy with mild vasodilation."},
    {cat:"Sympathomimetics", q:"What is isoprenaline used for?", a:"A non-selective beta agonist producing marked chronotropy — used in bradycardia and heart block."},
    {cat:"Sympathomimetics", q:"Why has dopamine largely fallen out of use?", a:"It confers no renal protection and causes more arrhythmias than the alternatives."},
    {cat:"Sympathomimetics", q:"Which drugs are alpha-2 agonists and what do they provide?", a:"Clonidine and dexmedetomidine — sedation and analgesia without significant respiratory depression, plus sympatholysis."},

    {cat:"Applied", q:"Compare atropine and glycopyrrolate.", a:"Both are muscarinic antagonists. Atropine is a tertiary amine that crosses the blood-brain barrier (risk of central anticholinergic syndrome) with faster onset and more tachycardia. Glycopyrrolate is quaternary, does not cross, and is the better antisialogogue."},
    {cat:"Applied", q:"What is autonomic dysreflexia?", a:"Massive uninhibited sympathetic discharge below a spinal cord lesion at or above T6, triggered by noxious stimuli such as bladder distension. Causes severe hypertension with reflex bradycardia."},
    {cat:"Applied", q:"Which nerve carries carotid body and carotid sinus afferents?", a:"The glossopharyngeal nerve, via the nerve of Hering. Aortic afferents travel in the vagus."},
    {cat:"Applied", q:"What is the oculocardiac reflex?", a:"Bradycardia on traction of the extraocular muscles. Afferent via the trigeminal nerve (V1), efferent via the vagus. Treated by stopping traction and giving an antimuscarinic."},
    {cat:"Applied", q:"Which receptor does labetalol block, and why is it avoided in asthma?", a:"A mixed alpha and beta blocker. The beta-2 blockade risks bronchospasm. It is a tertiary amine and crosses the blood-brain barrier."},
    {cat:"Applied", q:"Why does salbutamol lower serum potassium?", a:"Beta-2 stimulation drives potassium into cells via the Na+/K+ ATPase — the basis of nebulised salbutamol in hyperkalaemia."}
  ]
});
