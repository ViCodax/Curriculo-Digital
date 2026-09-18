// ================== ANO ==================
const currentYear = new Date().getFullYear();

// ================== TRADUÇÕES ==================
const translations = {
  pt: {
    "nav-sobre": "Sobre",
    "nav-projetos": "Projetos",
    "nav-experiencia": "Experiência",
    "nav-skills": "Skills",
    "nav-formacao": "Formação",
    "nav-contato": "Contato",
    "nav-pdf": "⬇ PDF",
    "hero-kicker": "Olá, eu sou",
    "hero-summary": 'Transformo processos manuais de TI em soluções escaláveis de automação. Criador da <strong>Workplace Automation Platform (WAP)</strong> e da <strong>Central de Termos Workplace</strong> — unindo suporte corporativo, automação e IA para reduzir esforço operacional e elevar a experiência dos usuários.',
    "hero-btn1": "Ver Projetos",
    "hero-btn2": "Contato",
    "stat-1": "ganho de eficiência",
    "stat-2": "plataformas criadas",
    "stat-3": "projeto internacional",
    "projetos-kicker": "Destaques",
    "projetos-title": "Projetos que Lidero",
    "proj1-title": "Workplace Automation Platform",
    "proj1-text": "Plataforma corporativa de autosserviço que automatiza a resolução de incidentes, instalação de aplicações e execução de procedimentos técnicos, reduzindo a dependência de intervenção manual da equipe de suporte. Implantada em toda a empresa via SCCM, com telemetria integrada a dashboards de Power BI.",
    "proj2-title": "Central de Termos Workplace",
    "proj2-text": "Agente de IA construído com Microsoft Copilot Studio que automatiza a geração de documentos internos — como Termos de Entrega e Devolução de Equipamentos — a partir da busca automática de dados corporativos, eliminando preenchimento manual e retrabalho.",
    "proj2-tag": "Automação de Documentos",
    "proj3-title": "Automação de Deploy Internacional",
    "proj3-text": "Ponto focal no Brasil em iniciativa internacional de automação de deploy de desktops utilizando IVANTI, em conjunto com equipes dos Estados Unidos e México — automatizando o processo completo de formatação e entrega de máquinas.",
    "proj3-tag": "Automação de Deploy",
    "proj3-tag2": "Colaboração Global",
    "exp-kicker": "Trajetória",
    "exp-title": "Experiência Profissional",
    "exp1-date": "01/2026 — atual",
    "exp1-role": "Analista de Suporte N2",
    "exp1-b1": "Atendimento técnico presencial para resolução de incidentes em hardware e software.",
    "exp1-b2": "Desenvolvimento de soluções de automação para suporte corporativo (WAP e Central de Termos).",
    "exp1-b3": "Suporte a sistemas operacionais Windows e aplicações corporativas.",
    "exp1-b4": "Gerenciamento de chamados dentro de SLA e apoio em deploy/padronização de equipamentos.",
    "exp2-date": "12/2024 — 12/2025",
    "exp2-role": "Técnico de Suporte",
    "exp2-b1": "Manutenção preventiva e corretiva em impressoras Ricoh modelo 8000+.",
    "exp2-b2": "Liderança na implementação e migração tecnológica para impressoras a tinta Epson.",
    "exp2-b3": "Gestão de indicadores operacionais, custos de suprimentos e reposição.",
    "exp2-b4": "Liderança direta de equipe de operadores e controle de jornada.",
    "exp3-date": "11/2022 — 02/2024",
    "exp3-role": "Supervisor Operacional",
    "exp3-b1": "Supervisão de equipe e atribuição de atividades operacionais.",
    "exp3-b2": "Acompanhamento de metas e indicadores via Power BI.",
    "exp3-b3": "Criação de projetos em PowerPoint e Excel para otimizar o dia a dia.",
    "exp4-badge": "Início da Jornada",
    "exp4-date": "mar 2019 — nov 2019 · 9 meses",
    "exp4-role": "Assistente Técnico",
    "exp4-loc": "· São Paulo e Região, Brasil · No local",
    "exp4-b1": "Gerenciamento de desktops dos funcionários, com limpeza, manutenção preventiva, formatação, montagem e desmontagem de equipamentos.",
    "exp4-b2": "Instalação e configuração de sistemas operacionais e aplicativos essenciais ao funcionamento dos dispositivos.",
    "exp4-b3": "Cabeamento estruturado e configuração de redes, incluindo crimpagem de cabos RJ45.",
    "exp4-b4": "Preparação e manutenção de notebooks para eventos, garantindo funcionamento e dados sempre disponíveis.",
    "exp4-b5": "Atuação no helpdesk, oferecendo suporte técnico direto para continuidade das operações da empresa.",
    "timeline-final-label": "Onde tudo começou",
    "skills-kicker": "Competências",
    "skills-title": "Skills & Ferramentas",
    "skill-suporte": "Suporte Corporativo",
    "pill-automacao": "Automação de Processos",
    "pill-prompt": "Prompt Engineering",
    "pill-troubleshoot": "Troubleshooting Avançado",
    "pill-itsm": "Gestão de Serviços de TI",
    "pill-lideranca": "Liderança de Equipes",
    "pill-ingles": "Inglês Avançado",
    "edu-kicker": "Bagagem",
    "edu-title": "Formação & Idiomas",
    "edu1-title": "Tecnólogo em Gestão de Tecnologia da Informação",
    "edu1-text": "Cruzeiro do Sul Virtual — em andamento (previsão 2028)",
    "edu2-title": "Técnico em Informática",
    "edu2-text": "ETEC Albert Einstein — concluído em 2019",
    "edu3-title": "Inglês Avançado",
    "edu3-text": "Utilização prática em ambiente corporativo e em projeto internacional.",
    "edu4-title": "Cursos Complementares",
    "edu4-text": "Power BI na Prática (2025) • Python na Prática (2024) • Soft Skills (2021)",
    "contact-kicker": "Vamos conversar",
    "contact-title": "Contato",
    "contact-location": "São Domingos, São Paulo — SP",
    "footer-note": `© <span id="year">${currentYear}</span> Vinicius Correia Dantas da Silva — Currículo Digital`
  },
  en: {
    "nav-sobre": "About",
    "nav-projetos": "Projects",
    "nav-experiencia": "Experience",
    "nav-skills": "Skills",
    "nav-formacao": "Education",
    "nav-contato": "Contact",
    "nav-pdf": "⬇ PDF",
    "hero-kicker": "Hi, I'm",
    "hero-summary": 'I turn manual IT processes into scalable automation solutions. Creator of the <strong>Workplace Automation Platform (WAP)</strong> and the <strong>Workplace Terms Center</strong> — combining corporate support, automation and AI to reduce operational effort and elevate the user experience.',
    "hero-btn1": "View Projects",
    "hero-btn2": "Contact",
    "stat-1": "efficiency gain",
    "stat-2": "platforms built",
    "stat-3": "international project",
    "projetos-kicker": "Highlights",
    "projetos-title": "Projects I Lead",
    "proj1-title": "Workplace Automation Platform",
    "proj1-text": "Corporate self-service platform that automates incident resolution, application installation and execution of technical procedures, reducing reliance on manual support intervention. Deployed company-wide via SCCM, with telemetry integrated into Power BI dashboards.",
    "proj2-title": "Workplace Terms Center",
    "proj2-text": "AI agent built with Microsoft Copilot Studio that automates the generation of internal documents — such as Equipment Delivery and Return Terms — by automatically retrieving corporate data, eliminating manual filling and rework.",
    "proj2-tag": "Document Automation",
    "proj3-title": "International Deploy Automation",
    "proj3-text": "Focal point in Brazil for an international desktop deployment automation initiative using IVANTI, working alongside teams from the United States and Mexico — automating the entire machine formatting and delivery process.",
    "proj3-tag": "Deploy Automation",
    "proj3-tag2": "Global Collaboration",
    "exp-kicker": "Journey",
    "exp-title": "Professional Experience",
    "exp1-date": "01/2026 — present",
    "exp1-role": "L2 Support Analyst",
    "exp1-b1": "On-site technical support for hardware and software incident resolution.",
    "exp1-b2": "Development of automation solutions for corporate support (WAP and Terms Center).",
    "exp1-b3": "Support for Windows operating systems and corporate applications.",
    "exp1-b4": "Ticket management within SLA and support for equipment deployment/standardization.",
    "exp2-date": "12/2024 — 12/2025",
    "exp2-role": "Support Technician",
    "exp2-b1": "Preventive and corrective maintenance on Ricoh 8000+ series printers.",
    "exp2-b2": "Led the implementation and technology migration to Epson inkjet printers.",
    "exp2-b3": "Management of operational KPIs, supply costs and replenishment.",
    "exp2-b4": "Direct leadership of the operators team and working hours control.",
    "exp3-date": "11/2022 — 02/2024",
    "exp3-role": "Operations Supervisor",
    "exp3-b1": "Team supervision and assignment of operational activities.",
    "exp3-b2": "Tracking of goals and KPIs via Power BI.",
    "exp3-b3": "Creation of PowerPoint and Excel projects to streamline daily operations.",
    "exp4-badge": "Where It All Began",
    "exp4-date": "Mar 2019 — Nov 2019 · 9 months",
    "exp4-role": "Technical Assistant",
    "exp4-loc": "· São Paulo Region, Brazil · On-site",
    "exp4-b1": "Management of employees' desktops, including cleaning, preventive maintenance, formatting, assembly and disassembly of equipment.",
    "exp4-b2": "Installation and configuration of operating systems and applications essential to device operation.",
    "exp4-b3": "Structured cabling and network configuration, including RJ45 cable crimping.",
    "exp4-b4": "Preparation and maintenance of laptops for events, ensuring functionality and data were always available.",
    "exp4-b5": "Worked on the help desk, providing direct technical support for business continuity.",
    "timeline-final-label": "Where it all began",
    "skills-kicker": "Competencies",
    "skills-title": "Skills & Tools",
    "skill-suporte": "Corporate Support",
    "pill-automacao": "Process Automation",
    "pill-prompt": "Prompt Engineering",
    "pill-troubleshoot": "Advanced Troubleshooting",
    "pill-itsm": "IT Service Management",
    "pill-lideranca": "Team Leadership",
    "pill-ingles": "Advanced English",
    "edu-kicker": "Background",
    "edu-title": "Education & Languages",
    "edu1-title": "Associate Degree in IT Management",
    "edu1-text": "Cruzeiro do Sul Virtual — in progress (expected 2028)",
    "edu2-title": "Technical Degree in Computer Science",
    "edu2-text": "ETEC Albert Einstein — completed in 2019",
    "edu3-title": "Advanced English",
    "edu3-text": "Practical use in corporate environments and in an international project.",
    "edu4-title": "Additional Courses",
    "edu4-text": "Power BI in Practice (2025) • Python in Practice (2024) • Soft Skills (2021)",
    "contact-kicker": "Let's talk",
    "contact-title": "Contact",
    "contact-location": "São Domingos, São Paulo — Brazil",
    "footer-note": `© <span id="year">${currentYear}</span> Vinicius Correia Dantas da Silva — Digital Resume`
  }
};

const rolesByLang = {
  pt: [
    "Analista de Suporte N2",
    "Especialista em Automação Workplace",
    "Criador do Workplace Automation Platform (WAP)",
    "Automação com PowerShell & SCCM",
    "Copilot Studio | Power BI"
  ],
  en: [
    "L2 Support Analyst",
    "Workplace Automation Specialist",
    "Creator of the Workplace Automation Platform (WAP)",
    "Automation with PowerShell & SCCM",
    "Copilot Studio | Power BI"
  ]
};

let currentLang = localStorage.getItem('vc-lang') || 'pt';

// ================== APLICAR TRADUÇÃO ==================
function applyTranslations(lang){
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  restartTypewriter();
}

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('vc-lang', currentLang);
  applyTranslations(currentLang);
});

// ================== TYPEWRITER EFFECT ==================
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, deleting = false;
let typeTimeoutId = null;

function typeLoop(){
  const roles = rolesByLang[currentLang];
  const current = roles[roleIndex % roles.length];
  if(!deleting){
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
      deleting = true;
      typeTimeoutId = setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  typeTimeoutId = setTimeout(typeLoop, deleting ? 35 : 65);
}

function restartTypewriter(){
  clearTimeout(typeTimeoutId);
  roleIndex = 0; charIndex = 0; deleting = false;
  typedEl.textContent = '';
  typeLoop();
}

// ================== THEME TOGGLE ==================
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('vc-theme') || 'dark';
if(savedTheme === 'light'){
  root.setAttribute('data-theme', 'light');
  themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if(isLight){
    root.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('vc-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
    localStorage.setItem('vc-theme', 'light');
  }
});

// ================== BURGER MENU ==================
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ================== NAV SCROLL STATE + ACTIVE LINK ==================
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section, header.hero');
const navItems = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  backToTop.classList.toggle('show', window.scrollY > 500);

  let currentId = '';
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 120 && rect.bottom >= 120){
      currentId = sec.getAttribute('id');
    }
  });
  navItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === `#${currentId}`);
  });
});

// ================== BACK TO TOP ==================
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ================== REVEAL ON SCROLL ==================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ================== SKILL BARS ANIMATION ==================
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const el = entry.target;
      el.style.width = el.dataset.width + '%';
      skillObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
skillFills.forEach(el => skillObserver.observe(el));

// ================== INIT ==================
applyTranslations(currentLang);
