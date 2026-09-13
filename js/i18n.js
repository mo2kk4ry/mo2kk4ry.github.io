// Note: techFallback() is defined inline in <head> (see index.html) so it exists
// before the tech-logo <img> tags start loading — earlier than this file runs.

// ===== i18n dictionary =====
const I18N = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "nav.links": "Links",

    "hero.eyebrow": "Data Analytics Student · Open to Opportunities",
    "hero.title": "Hi there! <span class=\"wave\">👋</span><br>I'M <span class=\"grad-text\">SANABA</span><br><span class=\"grad-text\">KANTÉ</span>",
    "hero.sub": "Data Analytics Student · Python · SQL · Power BI · Excel<br>Transforming raw data into clear, actionable decisions.",
    "hero.cta1": "View My Work",
    "hero.cta2": "Download CV",

    "about.eyebrow": "Introduction",
    "about.title": "Know Who I Am.",
    "about.p1": "Data Analytics student with a background in Computer and Information Technology Administration, focused on building decision-oriented analytical solutions, modernizing reporting systems, and improving data quality. Recently completed a part-time role as IT and Analytics Support Assistant at CCNB (remote), contributing to data analysis, structuring, and visualization in compliance-driven environments.",
    "about.p2": "Recognized for strong analytical rigor, autonomy, and fast learning ability, with a particular interest in interactive and automated Business Intelligence solutions. Currently based in Bathurst, New Brunswick — graduating from CCNB's Data Analysis diploma in April.",
    "about.tools": "<strong>Tools:</strong> Power BI (Power Query, DAX) · SQL · Advanced Excel · Python (Pandas, Scikit-learn) · Tableau · Microsoft 365",
    "about.card1": "BI Solution Design",
    "about.card2": "Data Cleaning &amp; ETL",
    "about.card3": "Power BI Dashboards",
    "about.card4": "Insight Communication",
    "about.card5": "Development",
    "about.card6": "Machine Learning &amp; AI",
    "about.toolkit-eyebrow": "Toolkit",
    "about.toolkit-title": "Skills &amp; Tools.",

    "exp.eyebrow": "What I Have Done So Far",
    "exp.title": "Experience.",
    "exp.job1.title": "IT &amp; Analytics Support Assistant",
    "exp.job1.meta": "Collège communautaire du Nouveau-Brunswick (CCNB) — Bathurst, NB · Remote, Part-time",
    "exp.job1.list": "<li>Extracted and analyzed academic data from multiple sources to surface actionable insights supporting operational and compliance needs.</li><li>Designed clear Power BI visualizations to facilitate understanding across academic and administrative teams.</li><li>Led and contributed to several concurrent projects, managing priorities autonomously in a fully remote environment.</li><li>Prepared monthly internal newsletters based on analytical findings.</li><li>Contributed to institutional chatbot development: data structuring, documentation, and functional testing.</li>",
    "exp.job2.title": "Data Analyst &amp; Project Lead — Award-Winning Smart Safety Bracelet",
    "exp.job2.list": "<li>Led development of a smart safety bracelet during a competitive hackathon, coordinating a multidisciplinary team under strict deadlines.</li><li>Translated user safety needs into measurable performance indicators and data-driven features.</li><li>Built dashboards and visualizations to track key metrics and support decision-making.</li><li>🏆 Delivered the final pitch — project awarded top recognition and selected for continued development.</li>",
    "exp.job3.title": "Secretary General — NGO",
    "exp.job3.meta": "Coordination &amp; Governance",
    "exp.job3.list": "<li>Coordinated day-to-day organizational operations including scheduling, correspondence, and records management.</li><li>Acted as primary liaison between internal committees and external partners.</li><li>Produced consolidated reports and official communications for leadership.</li>",
    "exp.job4.title": "Project Assistant — Air Quality Monitoring Initiative",
    "exp.job4.list": "<li>Participated in environmental data collection, monitoring, and preparation of datasets for analytical reporting.</li><li>Monitored deliverables and timelines; supported project coordination and structured internal communication.</li>",
    "exp.job5.title": "Business &amp; IT Sector Representative",
    "exp.job5.list": "<li>Represent Business &amp; IT students in academic and institutional matters.</li><li>Participate in coordination meetings and communicate student needs to administration.</li>",
    "exp.job6.title": "Data Entry Agent (EMIS)",
    "exp.job6.list": "<li>Managed and maintained critical humanitarian datasets, ensuring accuracy, integrity, and timely reporting to support emergency response operations.</li>",
    "exp.volunteer": "Volunteer",
    "exp.current": "Current",

    "edu.eyebrow": "Background",
    "edu.title": "Education.",
    "edu.d1": "2025 – Present",
    "edu.t1": "Diploma in Data Analysis",
    "edu.c1": "<strong>Coursework:</strong> Descriptive &amp; Exploratory Data Analysis · Applied Statistics · SQL &amp; Programming · Excel &amp; Python for Data Analysis · Power Query &amp; Power BI · Data Visualization",
    "edu.t2": "Computer / IT Administration &amp; Management",
    "edu.d3": "May – Sept. 2023",
    "edu.t3": "Certificate — IT &amp; Data Science",
    "edu.languages": "Languages",
    "edu.lang1": "🇫🇷 French — Native",
    "edu.lang2": "🇬🇧 English — Advanced",

    "proj.eyebrow": "My Recent Work",
    "proj.title": "Projects.",
    "proj.lead": "A few recent projects, with links to the code and live dashboards where available.",
    "proj.f.title": "Customer Complaints in US Banking",
    "proj.f.desc": "Analyzed customer complaints in the American banking sector using Excel. Focused on complaint trends, response times, and company resolution rates, presented through a fully interactive dashboard.",
    "proj.viewgh": "View on GitHub",
    "proj.c1.title": "Vehicle Theft Analysis — New Zealand",
    "proj.c1.desc": "Explored seven months of stolen vehicle data from the NZ police Vehicle of Interest database. Identified theft patterns and delivered actionable insights for law enforcement.",
    "proj.c2.title": "House Price Prediction Model",
    "proj.c2.desc": "Built a supervised machine learning model to predict housing prices based on area, number of rooms, and location, under mentor guidance.",
    "proj.c3.title": "Loan Approval Prediction Model",
    "proj.c3.desc": "Developed a classification model to predict loan approval based on applicant income, employment status, and credit history.",
    "proj.c4.title": "Restaurant Menu &amp; Order Analysis",
    "proj.c4.desc": "Analyzed a restaurant's menu and order data to uncover customer behavior, menu performance, pricing impact, and ordering patterns.",
    "proj.more": "More on GitHub",

    "cert.eyebrow": "Recognition",
    "cert.title": "Certifications &amp; Achievements.",
    "cert.h.title": "Top Award — Smart Safety Bracelet Hackathon",
    "cert.h.desc": "Cité des sciences et de l'innovation de Guinée · Project selected for continued development after winning top recognition from judges and stakeholders.",
    "cert.c3": "Cisco — Data Analytics (Excel, SQL, Tableau)",
    "cert.c4": "IBM — Python &amp; SQL for Data Science",
    "cert.c5": "IBM &amp; Cisco — Data Analytics Badges",
    "cert.c6": "Customer Service Pathways",
    "cert.pursuing": "<em>Currently pursuing: Project Management Certifications</em>",

    "contact.eyebrow": "Get In Touch",
    "contact.title": "Contact.",
    "contact.location": "Location",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.resume": "Resume",
    "contact.resumelink": "Download My CV ↓",
    "contact.elsewhere": "Elsewhere",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send",

    "footer.built": "Designed &amp; built by Sanaba Kanté",
    "footer.copy1": "&copy;",
    "footer.copy2": "Sanaba Kanté — All rights reserved",

    "links.tagline": "Data Analytics Student · Turning data into decisions",
    "links.linkedin.title": "LinkedIn",
    "links.linkedin.sub": "Let's connect professionally",
    "links.github.title": "GitHub",
    "links.github.sub": "Explore my projects &amp; code",
    "links.maven.title": "Maven Analytics",
    "links.maven.sub": "View my project showcase",
    "links.back": "← Back to portfolio"
  },

  fr: {
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "nav.links": "Liens",

    "hero.eyebrow": "Étudiante en analyse de données · Ouverte aux opportunités",
    "hero.title": "Bonjour ! <span class=\"wave\">👋</span><br>JE SUIS <span class=\"grad-text\">SANABA</span><br><span class=\"grad-text\">KANTÉ</span>",
    "hero.sub": "Étudiante en analyse de données · Python · SQL · Power BI · Excel<br>Je transforme les données brutes en décisions claires et concrètes.",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Télécharger mon CV",

    "about.eyebrow": "Introduction",
    "about.title": "Qui je suis.",
    "about.p1": "Étudiante en analyse de données avec un parcours en administration des technologies de l'information, concentrée sur la conception de solutions analytiques orientées vers la décision, la modernisation des systèmes de rapport et l'amélioration de la qualité des données. A récemment complété un poste à temps partiel d'assistante en soutien informatique et analytique au CCNB (à distance), contribuant à l'analyse, la structuration et la visualisation des données dans des environnements soumis à des exigences de conformité.",
    "about.p2": "Reconnue pour sa rigueur analytique, son autonomie et sa capacité d'apprentissage rapide, avec un intérêt particulier pour les solutions de Business Intelligence interactives et automatisées. Actuellement basée à Bathurst, au Nouveau-Brunswick — obtiendra son diplôme en analyse de données du CCNB en avril.",
    "about.tools": "<strong>Outils :</strong> Power BI (Power Query, DAX) · SQL · Excel avancé · Python (Pandas, Scikit-learn) · Tableau · Microsoft 365",
    "about.card1": "Conception de solutions BI",
    "about.card2": "Nettoyage de données &amp; ETL",
    "about.card3": "Tableaux de bord Power BI",
    "about.card4": "Communication d'insights",
    "about.card5": "Développement",
    "about.card6": "Machine Learning &amp; IA",
    "about.toolkit-eyebrow": "Boîte à outils",
    "about.toolkit-title": "Compétences &amp; outils.",

    "exp.eyebrow": "Ce que j'ai accompli jusqu'à présent",
    "exp.title": "Expérience.",
    "exp.job1.title": "Assistante en soutien informatique et analytique",
    "exp.job1.meta": "Collège communautaire du Nouveau-Brunswick (CCNB) — Bathurst, NB · À distance, temps partiel",
    "exp.job1.list": "<li>Extraction et analyse de données académiques provenant de multiples sources afin de dégager des insights concrets répondant aux besoins opérationnels et de conformité.</li><li>Conception de visualisations Power BI claires pour faciliter la compréhension au sein des équipes académiques et administratives.</li><li>Direction et contribution à plusieurs projets simultanés, en gérant les priorités de façon autonome dans un environnement entièrement à distance.</li><li>Préparation d'infolettres internes mensuelles basées sur les résultats analytiques.</li><li>Contribution au développement d'un chatbot institutionnel : structuration des données, documentation et tests fonctionnels.</li>",
    "exp.job2.title": "Analyste de données &amp; chef de projet — Bracelet de sécurité intelligent primé",
    "exp.job2.list": "<li>Direction du développement d'un bracelet de sécurité intelligent lors d'un hackathon compétitif, en coordonnant une équipe multidisciplinaire sous des délais serrés.</li><li>Traduction des besoins de sécurité des utilisateurs en indicateurs de performance mesurables et en fonctionnalités basées sur les données.</li><li>Création de tableaux de bord et de visualisations pour suivre les indicateurs clés et appuyer la prise de décision.</li><li>🏆 Présentation du pitch final — projet récompensé du plus haut niveau de reconnaissance et sélectionné pour un développement continu.</li>",
    "exp.job3.title": "Secrétaire générale — ONG",
    "exp.job3.meta": "Coordination &amp; gouvernance",
    "exp.job3.list": "<li>Coordination des opérations organisationnelles quotidiennes, incluant la planification, la correspondance et la gestion des dossiers.</li><li>Agent de liaison principal entre les comités internes et les partenaires externes.</li><li>Production de rapports consolidés et de communications officielles destinées à la direction.</li>",
    "exp.job4.title": "Assistante de projet — Initiative de surveillance de la qualité de l'air",
    "exp.job4.list": "<li>Participation à la collecte de données environnementales, au suivi et à la préparation des ensembles de données pour l'analyse.</li><li>Suivi des livrables et des échéanciers ; soutien à la coordination du projet et à la communication interne structurée.</li>",
    "exp.job5.title": "Représentante du secteur des affaires et de l'informatique",
    "exp.job5.list": "<li>Représente les étudiants du secteur des affaires et de l'informatique dans les dossiers académiques et institutionnels.</li><li>Participe aux réunions de coordination et communique les besoins des étudiants à l'administration.</li>",
    "exp.job6.title": "Agente de saisie de données (EMIS)",
    "exp.job6.list": "<li>Gestion et maintien de bases de données humanitaires critiques, en assurant l'exactitude, l'intégrité et la production de rapports en temps opportun pour appuyer les opérations d'intervention d'urgence.</li>",
    "exp.volunteer": "Bénévolat",
    "exp.current": "En cours",

    "edu.eyebrow": "Parcours",
    "edu.title": "Formation.",
    "edu.d1": "2025 – Présent",
    "edu.t1": "Diplôme en analyse de données",
    "edu.c1": "<strong>Cours suivis :</strong> Analyse de données descriptive et exploratoire · Statistiques appliquées · SQL &amp; langages de programmation · Excel &amp; Python pour l'analyse de données · Power Query &amp; Power BI · Visualisation de données",
    "edu.t2": "Administration et gestion des technologies de l'information",
    "edu.d3": "Mai – sept. 2023",
    "edu.t3": "Certificat — TI &amp; science des données",
    "edu.languages": "Langues",
    "edu.lang1": "🇫🇷 Français — Langue maternelle",
    "edu.lang2": "🇬🇧 Anglais — Avancé",

    "proj.eyebrow": "Mes réalisations récentes",
    "proj.title": "Projets.",
    "proj.lead": "Quelques projets récents, avec des liens vers le code et les tableaux de bord disponibles en ligne.",
    "proj.f.title": "Plaintes de clients dans le secteur bancaire américain",
    "proj.f.desc": "Analyse des plaintes de clients dans le secteur bancaire américain avec Excel. Étude des tendances de plaintes, des délais de réponse et des taux de résolution par entreprise, présentée dans un tableau de bord entièrement interactif.",
    "proj.viewgh": "Voir sur GitHub",
    "proj.c1.title": "Analyse des vols de véhicules — Nouvelle-Zélande",
    "proj.c1.desc": "Exploration de sept mois de données sur les véhicules volés provenant de la base de données de la police néo-zélandaise. Identification des tendances de vol et production d'insights concrets pour les forces de l'ordre.",
    "proj.c2.title": "Modèle de prédiction du prix des maisons",
    "proj.c2.desc": "Construction d'un modèle d'apprentissage automatique supervisé pour prédire les prix immobiliers selon la superficie, le nombre de pièces et l'emplacement, sous supervision d'un mentor.",
    "proj.c3.title": "Modèle de prédiction d'approbation de prêt",
    "proj.c3.desc": "Développement d'un modèle de classification pour prédire l'approbation d'un prêt selon le revenu, le statut d'emploi et l'historique de crédit du demandeur.",
    "proj.c4.title": "Analyse du menu &amp; des commandes d'un restaurant",
    "proj.c4.desc": "Analyse des données de menu et de commandes d'un restaurant afin de dégager les tendances de comportement des clients, la performance du menu, l'impact des prix et les habitudes de commande.",
    "proj.more": "Plus sur GitHub",

    "cert.eyebrow": "Reconnaissance",
    "cert.title": "Certifications &amp; réalisations.",
    "cert.h.title": "Prix d'excellence — Hackathon du bracelet de sécurité intelligent",
    "cert.h.desc": "Cité des sciences et de l'innovation de Guinée · Projet sélectionné pour un développement continu après avoir remporté la plus haute reconnaissance des juges et des parties prenantes.",
    "cert.c3": "Cisco — Analyse de données (Excel, SQL, Tableau)",
    "cert.c4": "IBM — Python &amp; SQL pour la science des données",
    "cert.c5": "IBM &amp; Cisco — Badges d'analyse de données",
    "cert.c6": "Parcours service à la clientèle",
    "cert.pursuing": "<em>Actuellement en cours : certifications en gestion de projet</em>",

    "contact.eyebrow": "Restons en contact",
    "contact.title": "Contact.",
    "contact.location": "Emplacement",
    "contact.email": "Courriel",
    "contact.phone": "Téléphone",
    "contact.resume": "CV",
    "contact.resumelink": "Télécharger mon CV ↓",
    "contact.elsewhere": "Ailleurs",
    "contact.form.name": "Votre nom",
    "contact.form.email": "Votre courriel",
    "contact.form.message": "Votre message",
    "contact.form.send": "Envoyer",

    "footer.built": "Conçu &amp; réalisé par Sanaba Kanté",
    "footer.copy1": "&copy;",
    "footer.copy2": "Sanaba Kanté — Tous droits réservés",

    "links.tagline": "Étudiante en analyse de données · Je transforme les données en décisions",
    "links.linkedin.title": "LinkedIn",
    "links.linkedin.sub": "Connectons-nous professionnellement",
    "links.github.title": "GitHub",
    "links.github.sub": "Découvrez mes projets &amp; mon code",
    "links.maven.title": "Maven Analytics",
    "links.maven.sub": "Voir la vitrine de mes projets",
    "links.back": "← Retour au portfolio"
  }
};

// ===== Apply language =====
function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.setAttribute('lang', lang);
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'en' ? 'FR' : 'EN';
  try { localStorage.setItem('sk-lang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = 'en';
  try { saved = localStorage.getItem('sk-lang') || 'en'; } catch (e) {}
  applyLanguage(saved);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      let current = 'en';
      try { current = localStorage.getItem('sk-lang') || 'en'; } catch (e) {}
      applyLanguage(current === 'en' ? 'fr' : 'en');
    });
  }
});
