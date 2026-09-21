/* =====================================================================
   VINICIUS CORREIA — CURRÍCULO DIGITAL
   Vanilla JS · zero dependências
   ---------------------------------------------------------------------
   👉 PARA ATUALIZAR OS NÚMEROS: edite apenas o bloco CONFIG abaixo.
   ===================================================================== */
(function () {
  "use strict";

  /* ===================================================================
     ⚙️  CONFIG — TROQUE PELOS SEUS NÚMEROS REAIS DA TELEMETRIA
     =================================================================== */
  const CONFIG = {
    terminal: [
      "if (task.happensTwice) → automate()",
      "deploy --target=organização --via=SCCM",
      "telemetry.collect() → PowerBI.refresh()",
    ],

    panel: {
      pt: {
        title: "automation engine // online",
        rows: [
          ["função",   "Analista de Workplace N2"],
          ["projeto",  "Workplace Automation Platform"],
          ["stack",    "PowerShell · SCCM · Power BI"],
          ["alcance",  "Organização inteira"],
          ["formação", "Gestão de TI — cursando"],
        ],
      },
      en: {
        title: "automation engine // online",
        rows: [
          ["role",      "L2 Workplace Analyst"],
          ["project",   "Workplace Automation Platform"],
          ["stack",     "PowerShell · SCCM · Power BI"],
          ["reach",     "Company-wide"],
          ["education", "IT Management — in progress"],
        ],
      },
    },

    /* KPIs — benchmark: 100 execuções de cada uma das 9 ferramentas */
    kpis: {
      pt: [
        { label: "Execuções de referência",   value: 900,    suffix: "",    foot: "100 por ferramenta mapeada",    color: "blue"   },
        { label: "Horas economizadas",        value: 283.33, suffix: "h",   foot: "benchmark de tempo devolvido",   color: "green"  },
        { label: "Ferramentas mapeadas",      value: 9,      suffix: "",    foot: "reparos + instaladores",          color: "orange" },
        { label: "Minutos poupados",          value: 170,    suffix: "min", foot: "1 execução de cada ferramenta",   color: "blue"   },
      ],
      en: [
        { label: "Reference executions",  value: 900,    suffix: "",    foot: "100 per mapped tool",              color: "blue"   },
        { label: "Hours saved",            value: 283.33, suffix: "h",   foot: "time returned in the benchmark",  color: "green"  },
        { label: "Mapped tools",           value: 9,      suffix: "",    foot: "repairs + installers",              color: "orange" },
        { label: "Minutes saved",          value: 170,    suffix: "min", foot: "1 execution of each tool",         color: "blue"   },
      ],
    },

    /* Ranking por ferramenta — value = nº de execuções */
    tools: {
      pt: [
        { name: "Reparo Teams",              value: 8.33,  color: "blue"   },
        { name: "Reparo Rápido (Windows)",   value: 33.33, color: "blue"   },
        { name: "Reparo SAP",                value: 8.33,  color: "blue"   },
        { name: "Reparo de Impressoras",     value: 16.67, color: "blue"   },
        { name: "Reparo Avançado (Windows)", value: 66.67, color: "orange" },
        { name: "Instalador DBeaver",        value: 41.67, color: "green"  },
        { name: "Instalador Docker",         value: 83.33, color: "green"  },
        { name: "Instalador Git Bash",       value: 8.33,  color: "green"  },
        { name: "Instalador Claude CLI",     value: 16.67, color: "green"  },
      ],
      en: [
        { name: "Teams Repair",             value: 8.33,  color: "blue"   },
        { name: "Windows QuickFix",         value: 33.33, color: "blue"   },
        { name: "SAP Repair",               value: 8.33,  color: "blue"   },
        { name: "Printer Repair",           value: 16.67, color: "blue"   },
        { name: "Windows Advanced Repair",  value: 66.67, color: "orange" },
        { name: "DBeaver Installer",        value: 41.67, color: "green"  },
        { name: "Docker Installer",         value: 83.33, color: "green"  },
        { name: "Git Bash Installer",       value: 8.33,  color: "green"  },
        { name: "Claude CLI Installer",     value: 16.67, color: "green"  },
      ],
    },

    feedSpeed: 2200,
  };

  /* ===================================================================
     TRADUÇÕES
     =================================================================== */
  const year = new Date().getFullYear();

  const I18N = {
    pt: {
      "nav-sobre": "Sobre", "nav-telemetria": "Telemetria", "nav-projetos": "Projetos",
      "nav-experiencia": "Experiência", "nav-skills": "Skills", "nav-formacao": "Formação",
      "nav-contato": "Contato", "nav-pdf": "PDF",

      "hero-build": "building profile",
      "automation-panel-title": "automation engine // online",
      "automation-step1": "definir objetivos",
      "automation-step2": "mapear o processo",
      "automation-step3": "integrar ferramentas",
      "automation-step4": "testar e otimizar",
      "automation-step5": "documentar e melhorar",
      "automation-live": "processo ao vivo",
      "automation-panel-note": "esforço manual convertido em lógica escalável",
      "chip-1": "Analista de Workplace N2",
      "chip-2": "Automação de Processos",
      "chip-6": "Melhoria Contínua",
      "hero-tagline": "Meu objetivo é simples: eliminar trabalho manual que não precisa existir.",
      "hero-btn1": "Ver a telemetria",
      "hero-btn2": "Baixar CV",

      "tele-eyebrow": "telemetria · workplace automation platform",
      "tele-title": "Automação que se mede.",
      "tele-sub": "Cada execução das ferramentas gera log e telemetria estruturada. Esses dados alimentam um dashboard em Power BI e permitem priorizar as próximas entregas com dado, não com achismo.",
      "tele-card1": "horas economizadas por 100 execuções",
      "tele-card2": "stream de execuções",
      "legend-b": "reparo", "legend-o": "avançado", "legend-g": "instalador",
      "tele-note": "// benchmark fixo · 100 execuções por ferramenta · valores derivados do CSV de ROI",

      "projetos-kicker": "Destaques",
      "projetos-title": "Projetos",
      "proj1-title": "Workplace Automation Platform",
      "proj1-text": "Plataforma corporativa de autosserviço que automatiza a resolução de incidentes, instalação de aplicações e execução de procedimentos técnicos, reduzindo a dependência de intervenção manual da equipe de suporte. Implantada em toda a empresa via SCCM, com telemetria integrada a dashboards de Power BI.",
      "proj2-title": "Central de Termos Workplace",
      "proj2-text": "Agente de IA construído com Microsoft Copilot Studio que automatiza a geração de documentos internos — como Termos de Entrega e Devolução de Equipamentos — a partir da busca automática de dados corporativos, eliminando preenchimento manual e retrabalho.",
      "proj2-tag": "Automação de Documentos",
      "proj3-title": "Automação de Deploy Internacional",
      "proj3-text": "Ponto focal no Brasil em iniciativa internacional de automação de deploy de desktops utilizando IVANTI, em conjunto com equipes dos Estados Unidos e México — automatizando o processo completo de formatação e entrega de máquinas.",
      "proj3-tag": "Automação de Deploy", "proj3-tag2": "Colaboração Global",

      "exp-kicker": "Trajetória", "exp-title": "Experiência Profissional",
      "exp1-date": "01/2026 — atual", "exp1-now": "em curso", "exp1-role": "Analista de Suporte N2",
      "exp1-b1": "Atendimento técnico presencial para resolução de incidentes em hardware e software.",
      "exp1-b2": "Desenvolvimento de soluções de automação para suporte corporativo (WAP e Central de Termos).",
      "exp1-b3": "Suporte a sistemas operacionais Windows e aplicações corporativas.",
      "exp1-b4": "Gerenciamento de chamados dentro de SLA e apoio em deploy/padronização de equipamentos.",
      "exp2-date": "12/2024 — 12/2025", "exp2-role": "Técnico de Suporte",
      "exp2-b1": "Manutenção preventiva e corretiva em impressoras Ricoh modelo 8000+.",
      "exp2-b2": "Liderança na implementação e migração tecnológica para impressoras a tinta Epson.",
      "exp2-b3": "Gestão de indicadores operacionais, custos de suprimentos e reposição.",
      "exp2-b4": "Liderança direta de equipe de operadores e controle de jornada.",
      "exp3-date": "11/2022 — 02/2024", "exp3-role": "Supervisor Operacional",
      "exp3-b1": "Supervisão de equipe e atribuição de atividades operacionais.",
      "exp3-b2": "Acompanhamento de metas e indicadores via Power BI.",
      "exp3-b3": "Criação de projetos em PowerPoint e Excel para otimizar o dia a dia.",
      "exp4-badge": "Início da Jornada", "exp4-date": "03/2019 — 11/2019", "exp4-role": "Assistente Técnico",
      "exp4-b1": "Gerenciamento de desktops dos funcionários, com limpeza, manutenção preventiva, formatação, montagem e desmontagem de equipamentos.",
      "exp4-b2": "Instalação e configuração de sistemas operacionais e aplicativos essenciais ao funcionamento dos dispositivos.",
      "exp4-b3": "Cabeamento estruturado e configuração de redes, incluindo crimpagem de cabos RJ45.",
      "exp4-b4": "Preparação e manutenção de notebooks para eventos, garantindo funcionamento e dados sempre disponíveis.",
      "exp4-b5": "Atuação no helpdesk, oferecendo suporte técnico direto para continuidade das operações da empresa.",
      "timeline-final-label": "Onde tudo começou",

      "skills-kicker": "Competências", "skills-title": "Skills & Ferramentas",
      "skills-radar-label": "perfil técnico",
      "skills-radar-aria": "Gráfico radar de competências",
      "skill-suporte": "Suporte Corporativo",
      "pill-automacao": "Automação de Processos", "pill-prompt": "Prompt Engineering",
      "pill-troubleshoot": "Troubleshooting Avançado", "pill-itsm": "Gestão de Serviços de TI",
      "pill-lideranca": "Liderança de Equipes", "pill-ingles": "Inglês Avançado",

      "edu-kicker": "Bagagem", "edu-title": "Formação & Idiomas",
      "edu1-tag": "em andamento", "edu2-tag": "concluído", "edu3-tag": "idioma", "edu4-tag": "cursos",
      "edu1-title": "Tecnólogo em Gestão de Tecnologia da Informação",
      "edu1-text": "Cruzeiro do Sul Virtual — em andamento (previsão 2028)",
      "edu2-title": "Técnico em Informática",
      "edu2-text": "ETEC Albert Einstein — concluído em 2019",
      "edu3-title": "Inglês Avançado",
      "edu3-text": "Utilização prática em ambiente corporativo e em projeto internacional.",
      "edu4-title": "Cursos Complementares",
      "edu4-text": "Power BI na Prática (2025) • Python na Prática (2024) • Soft Skills (2021)",

      "contact-kicker": "Vamos conversar", "contact-title": "Contato",
      "contact-sub": "Aberto a trocar ideia sobre automação, workplace e IA aplicada ao suporte. Respondo rápido.",
      "crow-loc": "localização",
      "contact-location": "São Domingos, São Paulo — SP",
      "footer-note": `© <span id="year">${year}</span> Vinicius Correia Dantas da Silva — Currículo Digital`,
      "footer-built": "feito à mão · HTML · CSS · JS",
    },

    en: {
      "nav-sobre": "About", "nav-telemetria": "Telemetry", "nav-projetos": "Projects",
      "nav-experiencia": "Experience", "nav-skills": "Skills", "nav-formacao": "Education",
      "nav-contato": "Contact", "nav-pdf": "PDF",

      "hero-build": "building profile",
      "automation-panel-title": "automation engine // online",
      "automation-step1": "define objectives",
      "automation-step2": "map the process",
      "automation-step3": "integrate tools",
      "automation-step4": "test and optimize",
      "automation-step5": "document and improve",
      "automation-live": "live process",
      "automation-panel-note": "manual effort converted into scalable logic",
      "chip-1": "L2 Workplace Analyst",
      "chip-2": "Process Automation",
      "chip-6": "Continuous Improvement",
      "hero-tagline": "My goal is simple: eliminate manual work that shouldn't exist.",
      "hero-btn1": "See the telemetry",
      "hero-btn2": "Download CV",

      "tele-eyebrow": "telemetry · workplace automation platform",
      "tele-title": "Automation you can measure.",
      "tele-sub": "Every tool execution generates structured logs and telemetry. That data feeds a Power BI dashboard and makes it possible to prioritise the next deliveries with evidence, not guesswork.",
      "tele-card1": "hours saved per 100 executions",
      "tele-card2": "execution stream",
      "legend-b": "repair", "legend-o": "advanced", "legend-g": "installer",
      "tele-note": "// fixed benchmark · 100 executions per tool · values derived from the ROI CSV",

      "projetos-kicker": "Highlights",
      "projetos-title": "Projects",
      "proj1-title": "Workplace Automation Platform",
      "proj1-text": "Corporate self-service platform that automates incident resolution, application installation and execution of technical procedures, reducing reliance on manual support intervention. Deployed company-wide via SCCM, with telemetry integrated into Power BI dashboards.",
      "proj2-title": "Workplace Terms Center",
      "proj2-text": "AI agent built with Microsoft Copilot Studio that automates the generation of internal documents — such as Equipment Delivery and Return Terms — by automatically retrieving corporate data, eliminating manual filling and rework.",
      "proj2-tag": "Document Automation",
      "proj3-title": "International Deploy Automation",
      "proj3-text": "Focal point in Brazil for an international desktop deployment automation initiative using IVANTI, working alongside teams from the United States and Mexico — automating the entire machine formatting and delivery process.",
      "proj3-tag": "Deploy Automation", "proj3-tag2": "Global Collaboration",

      "exp-kicker": "Journey", "exp-title": "Professional Experience",
      "exp1-date": "01/2026 — present", "exp1-now": "ongoing", "exp1-role": "L2 Support Analyst",
      "exp1-b1": "On-site technical support for hardware and software incident resolution.",
      "exp1-b2": "Development of automation solutions for corporate support (WAP and Terms Center).",
      "exp1-b3": "Support for Windows operating systems and corporate applications.",
      "exp1-b4": "Ticket management within SLA and support for equipment deployment/standardization.",
      "exp2-date": "12/2024 — 12/2025", "exp2-role": "Support Technician",
      "exp2-b1": "Preventive and corrective maintenance on Ricoh 8000+ series printers.",
      "exp2-b2": "Led the implementation and technology migration to Epson inkjet printers.",
      "exp2-b3": "Management of operational KPIs, supply costs and replenishment.",
      "exp2-b4": "Direct leadership of the operators team and working hours control.",
      "exp3-date": "11/2022 — 02/2024", "exp3-role": "Operations Supervisor",
      "exp3-b1": "Team supervision and assignment of operational activities.",
      "exp3-b2": "Tracking of goals and KPIs via Power BI.",
      "exp3-b3": "Creation of PowerPoint and Excel projects to streamline daily operations.",
      "exp4-badge": "Where It All Began", "exp4-date": "03/2019 — 11/2019", "exp4-role": "Technical Assistant",
      "exp4-b1": "Management of employees' desktops, including cleaning, preventive maintenance, formatting, assembly and disassembly of equipment.",
      "exp4-b2": "Installation and configuration of operating systems and applications essential to device operation.",
      "exp4-b3": "Structured cabling and network configuration, including RJ45 cable crimping.",
      "exp4-b4": "Preparation and maintenance of laptops for events, ensuring functionality and data were always available.",
      "exp4-b5": "Worked on the help desk, providing direct technical support for business continuity.",
      "timeline-final-label": "Where it all began",

      "skills-kicker": "Competencies", "skills-title": "Skills & Tools",
      "skills-radar-label": "technical profile",
      "skills-radar-aria": "Skills radar chart",
      "skill-suporte": "Corporate Support",
      "pill-automacao": "Process Automation", "pill-prompt": "Prompt Engineering",
      "pill-troubleshoot": "Advanced Troubleshooting", "pill-itsm": "IT Service Management",
      "pill-lideranca": "Team Leadership", "pill-ingles": "Advanced English",

      "edu-kicker": "Background", "edu-title": "Education & Languages",
      "edu1-tag": "in progress", "edu2-tag": "completed", "edu3-tag": "language", "edu4-tag": "courses",
      "edu1-title": "Associate Degree in IT Management",
      "edu1-text": "Cruzeiro do Sul Virtual — in progress (expected 2028)",
      "edu2-title": "Technical Degree in Computer Science",
      "edu2-text": "ETEC Albert Einstein — completed in 2019",
      "edu3-title": "Advanced English",
      "edu3-text": "Practical use in corporate environments and in an international project.",
      "edu4-title": "Additional Courses",
      "edu4-text": "Power BI in Practice (2025) • Python in Practice (2024) • Soft Skills (2021)",

      "contact-kicker": "Let's talk", "contact-title": "Contact",
      "contact-sub": "Happy to talk about automation, workplace engineering and AI applied to IT support. I reply fast.",
      "crow-loc": "location",
      "contact-location": "São Domingos, São Paulo — Brazil",
      "footer-note": `© <span id="year">${year}</span> Vinicius Correia Dantas da Silva — Digital Resume`,
      "footer-built": "handcrafted · HTML · CSS · JS",
    },
  };

  /* =================================================================== */
  const COLORS = { blue: "var(--vc-tele-blue)", orange: "var(--vc-orange)", green: "var(--vc-green)" };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  let lang = localStorage.getItem("vc-lang") || "pt";
  let feedTimer = null;
  let automationTimer = null;

  /* ===================================================================
     1. BOOT
     =================================================================== */
  function runBoot(done) {
    const boot = $("#boot");
    if (!boot) return done();
    if (reduced) { boot.classList.add("done"); return done(); }

    const bar = $(".boot__bar i", boot);
    const pct = $(".boot__pct", boot);
    let p = 0;
    const t = setInterval(() => {
      p = Math.min(100, p + 8 + Math.random() * 16);
      bar.style.width = p + "%";
      pct.textContent = Math.round(p) + "%";
      if (p >= 100) {
        clearInterval(t);
        setTimeout(() => { boot.classList.add("done"); done(); }, 260);
      }
    }, 90);
  }

  /* ===================================================================
     2. i18n
     =================================================================== */
  function applyLang(l) {
    const d = I18N[l];
    $$("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (d[k] !== undefined) el.textContent = d[k];
    });
    $$("[data-i18n-html]").forEach((el) => {
      const k = el.getAttribute("data-i18n-html");
      if (d[k] !== undefined) el.innerHTML = d[k];
    });
    $$('[data-i18n-aria]').forEach((el) => {
      const k = el.getAttribute("data-i18n-aria");
      if (d[k] !== undefined) el.setAttribute("aria-label", d[k]);
    });
    document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
    $$(".lang-option").forEach((o) => o.classList.toggle("active", o.dataset.lang === l));
    document.title = l === "pt"
      ? "Vinicius Correia | Currículo Digital"
      : "Vinicius Correia | Digital Resume";

    rebuildPanel();
    initAutomationPanel();
    rebuildTelemetry();
    renderSkillsRadar();
  }

  /* ===================================================================
     3. HERO
     =================================================================== */
  function buildCircuit(svg) {
    if (!svg) return;
    const W = 1440, H = 900, NS = "http://www.w3.org/2000/svg";
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    const rand = (a, b) => a + Math.random() * (b - a);
    const snap = (v, g) => Math.round(v / g) * g;

    for (let i = 0; i < 11; i++) {
      let x = snap(rand(0, W), 40);
      let y = i % 2 === 0 ? 0 : H;
      const dir = i % 2 === 0 ? 1 : -1;
      let d = `M ${x} ${y}`;
      const steps = Math.floor(rand(3, 6));
      for (let s = 0; s < steps; s++) {
        y += dir * snap(rand(90, 200), 40); d += ` L ${x} ${y}`;
        x += snap(rand(-220, 220), 40);     d += ` L ${x} ${y}`;
      }

      const p = document.createElementNS(NS, "path");
      p.setAttribute("d", d); p.style.setProperty("--i", i); svg.appendChild(p);
      try { p.style.setProperty("--len", Math.ceil(p.getTotalLength())); }
      catch (e) { p.style.setProperty("--len", 1600); }

      if (i % 3 === 0 && !reduced) {
        const pulse = document.createElementNS(NS, "path");
        pulse.setAttribute("d", d);
        pulse.setAttribute("class", "vc-hero__pulse");
        pulse.style.setProperty("--i", i / 3);
        svg.appendChild(pulse);
      }

      const c = document.createElementNS(NS, "circle");
      const m = d.match(/M ([\d.-]+) ([\d.-]+)/);
      c.setAttribute("cx", m[1]); c.setAttribute("cy", m[2]); c.setAttribute("r", 3.5);
      c.setAttribute("class", "vc-hero__node"); c.style.setProperty("--i", i);
      svg.appendChild(c);
    }
  }

  function splitName(el) {
    if (!el) return;
    const targets = $$("[data-split]", el);
    let idx = 0;
    (targets.length ? targets : [el]).forEach((node) => {
      const text = node.textContent; node.textContent = "";
      Array.from(text).forEach((ch) => {
        const s = document.createElement("span");
        s.className = "ch";
        s.textContent = ch === " " ? "\u00A0" : ch;
        s.style.setProperty("--i", idx++);
        s.style.setProperty("--dx", (Math.random() * 40 - 20).toFixed(1) + "px");
        s.style.setProperty("--dy", (Math.random() * -50 - 10).toFixed(1) + "px");
        node.appendChild(s);
      });
    });
  }

  function typeLoop(el, lines) {
    if (!el || !lines.length) return;
    el.innerHTML = "";
    const txt = document.createElement("span");
    const caret = document.createElement("span");
    caret.className = "vc-hero__caret";
    el.append(txt, caret);
    if (reduced) { txt.textContent = lines[0]; return; }

    let li = 0, ci = 0, del = false;
    (function tick() {
      const full = lines[li];
      txt.textContent = full.slice(0, ci);
      let wait = del ? 28 : 45 + Math.random() * 45;
      if (!del && ci === full.length) { wait = 2100; del = true; }
      else if (del && ci === 0) { del = false; li = (li + 1) % lines.length; wait = 400; }
      else { ci += del ? -1 : 1; }
      setTimeout(tick, wait);
    })();
  }

  function rebuildPanel() {
    const card = $(".vc-hero__panel");
    if (!card) return;
    const cfg = CONFIG.panel[lang];
    const head = $(".vc-hero__panelhead", card);
    if (head) head.querySelector("span:last-child").textContent = cfg.title;
  }

  function initAutomationPanel() {
    const steps = $$("[data-flow-step]"), event = $("#automationEvent"), timer = $("#automationTime"), line = $(".vc-hero__workflow-line i");
    if (!steps.length) return;
    clearInterval(automationTimer);
    const events = lang === "pt"
      ? ["objetivo definido", "processo mapeado", "ferramentas conectadas", "teste em execucao", "melhoria registrada"]
      : ["objective defined", "process mapped", "tools connected", "test in progress", "improvement logged"];
    let current = 0, started = performance.now();
    const update = () => {
      const isReset = current === 0 && steps.some((step) => step.classList.contains("is-done"));
      if (isReset && line) line.classList.add("is-resetting");
      steps.forEach((step, index) => {
        step.classList.toggle("is-active", index === current);
        step.classList.toggle("is-done", index < current);
      });
      if (line) {
        line.style.left = (current / (steps.length - 1)) * 100 + "%";
        if (isReset) requestAnimationFrame(() => line.classList.remove("is-resetting"));
      }
      if (event) event.textContent = events[current];
      if (timer) timer.textContent = ((performance.now() - started) / 1000).toFixed(1) + "s";
      current = (current + 1) % steps.length;
      if (current === 0) started = performance.now();
    };
    update();
    automationTimer = setInterval(update, 1800);
  }

  function parallax(hero) {
    if (!hero || reduced || matchMedia("(pointer: coarse)").matches) return;
    const svg = $(".vc-hero__circuit", hero), halo = $(".vc-hero__halo", hero);
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.width / 2) / r.width;
      ty = (e.clientY - r.height / 2) / r.height;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    function loop() {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      if (svg) svg.style.transform = `translate3d(${cx * 22}px, ${cy * 22}px, 0)`;
      if (halo) halo.style.transform = `translate(-50%,-50%) translate3d(${cx * -38}px, ${cy * -38}px, 0)`;
      raf = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(loop) : null;
    }
  }

  /* ===================================================================
     4. TELEMETRIA
     =================================================================== */
  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const fmt = (n, digits = 0) => n.toLocaleString(lang === "pt" ? "pt-BR" : "en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

  function countUp(el, target, dur, suffix) {
    suffix = suffix || "";
    const digits = Number.isInteger(target) ? 0 : 2;
    if (reduced || target === 0) { el.textContent = fmt(target, digits) + suffix; return; }
    const start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = fmt(target * easeOutExpo(p), digits) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  function renderKpis(wrap) {
    if (!wrap) return;
    wrap.innerHTML = CONFIG.kpis[lang].map((k, i) => `
      <article class="vc-kpi" style="--i:${i};--c:${COLORS[k.color] || COLORS.blue}">
        <div class="vc-kpi__label">${k.label}</div>
        <div class="vc-kpi__value"><span data-count="${k.value}">0</span>${
          k.suffix ? `<span class="vc-kpi__suffix">${k.suffix}</span>` : ""
        }</div>
        <div class="vc-kpi__foot">${k.foot}</div>
      </article>`).join("");
  }

  function renderBars(wrap) {
    if (!wrap) return;
    const tools = CONFIG.tools[lang];
    const max = Math.max(...tools.map((t) => t.value), 1);
    wrap.innerHTML = tools.map((t, i) => `
      <div class="vc-bar" style="--i:${i};--c:${COLORS[t.color] || COLORS.blue}">
        <div class="vc-bar__top">
          <span class="vc-bar__name"><i class="vc-bar__tag"></i>${t.name}</span>
          <span class="vc-bar__num" data-count="${t.value}">0</span>
        </div>
        <div class="vc-bar__track"><div class="vc-bar__fill" data-w="${Math.round((t.value / max) * 100)}"></div></div>
      </div>`).join("");
  }

  function startFeed(el) {
    if (!el || reduced) return;
    clearInterval(feedTimer);
    el.innerHTML = "";
    const names = CONFIG.tools[lang].map((t) => t.name);
    const depts = lang === "pt"
      ? ["Financeiro", "Dados", "Produtos", "Engenharia", "Operações", "Jurídico", "RH"]
      : ["Finance", "Data", "Products", "Engineering", "Operations", "Legal", "HR"];
    const pick = (a) => a[Math.floor(Math.random() * a.length)];
    function push() {
      const ts = new Date().toTimeString().slice(0, 8);
      const line = document.createElement("div");
      line.className = "vc-feed__line";
      line.innerHTML = `<span class="vc-feed__ts">${ts}</span><span class="vc-feed__ok">[OK]</span><span class="vc-feed__tool">${pick(names)} · ${pick(depts)}</span>`;
      el.prepend(line);
      while (el.children.length > 14) el.lastElementChild.remove();
    }
    for (let i = 0; i < 8; i++) push();
    feedTimer = setInterval(push, CONFIG.feedSpeed);
  }

  function fireTelemetry() {
    const tele = $(".vc-tele");
    if (!tele) return;
    tele.classList.add("is-live");
    $$("[data-count]", tele).forEach((el, i) =>
      setTimeout(() => countUp(el, +el.dataset.count, 1600), i * 80)
    );
    $$(".vc-bar__fill", tele).forEach((el) =>
      requestAnimationFrame(() => (el.style.width = el.dataset.w + "%"))
    );
    startFeed($(".vc-feed", tele));
  }

  function rebuildTelemetry() {
    const tele = $(".vc-tele");
    if (!tele) return;
    renderKpis($(".vc-kpis", tele));
    renderBars($(".vc-bars", tele));
    if (tele.classList.contains("is-live")) fireTelemetry();
  }

  /* ===================================================================
     5. SCROLL · REVEAL · NAV
     =================================================================== */
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    $$("[data-reveal]").forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  }

  function initSkills() {
    renderSkillsRadar();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const card = e.target;
        const fill = $(".skill__bar i", card);
        const pct = $(".skill__pct", card);
        if (fill) fill.style.width = fill.dataset.width + "%";
        if (pct) countUp(pct, +pct.dataset.count, 1300, pct.dataset.suffix);
        io.unobserve(card);
      });
    }, { threshold: 0.4 });
    $$(".skill").forEach((el) => io.observe(el));
  }

  function renderSkillsRadar() {
    const chart = $(".skills-radar__chart");
    const skills = $$(".skill");
    if (!chart || !skills.length) return;

    const NS = "http://www.w3.org/2000/svg";
    const cx = 210, cy = 210, radius = 142;
    const angle = (index) => -Math.PI / 2 + (index * Math.PI * 2) / skills.length;
    const point = (index, value) => {
      const a = angle(index);
      const distance = radius * (value / 100);
      return `${(cx + Math.cos(a) * distance).toFixed(1)},${(cy + Math.sin(a) * distance).toFixed(1)}`;
    };
    const ringPoints = (value) => skills.map((_, index) => point(index, value)).join(" ");
    const make = (name, attrs) => {
      const node = document.createElementNS(NS, name);
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
      return node;
    };

    chart.innerHTML = "";
    [20, 40, 60, 80, 100].forEach((value) => {
      chart.appendChild(make("polygon", { points: ringPoints(value), class: "radar__ring" }));
    });

    skills.forEach((skill, index) => {
      const label = $(".skill__top span:first-child", skill).textContent.trim();
      const a = angle(index);
      const endX = cx + Math.cos(a) * radius;
      const endY = cy + Math.sin(a) * radius;
      const labelDistance = radius + 28;
      const labelX = cx + Math.cos(a) * labelDistance;
      const labelY = cy + Math.sin(a) * labelDistance;
      chart.appendChild(make("line", { x1: cx, y1: cy, x2: endX, y2: endY, class: "radar__axis" }));
      const text = make("text", { x: labelX, y: labelY, class: "radar__label", "text-anchor": Math.cos(a) > 0.25 ? "start" : Math.cos(a) < -0.25 ? "end" : "middle" });
      text.textContent = label;
      chart.appendChild(text);
    });

    const values = skills.map((skill) => $(".skill__bar i", skill).dataset.width);
    const shape = make("polygon", { points: values.map((value, index) => point(index, value)).join(" "), class: "radar__shape" });
    chart.appendChild(shape);
    values.forEach((value, index) => {
      const [x, y] = point(index, value).split(",");
      chart.appendChild(make("circle", { cx: x, cy: y, r: 4, class: "radar__point" }));
    });
  }

  function initTelemetryTrigger() {
    const tele = $(".vc-tele");
    if (!tele) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { fireTelemetry(); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(tele);
  }

  function initTimelineRail() {
    const rail = $("#tlFill"), tl = $(".tl");
    if (!rail || !tl) return;
    const upd = () => {
      const r = tl.getBoundingClientRect();
      const p = (window.innerHeight * 0.75 - r.top) / r.height;
      rail.style.height = Math.max(0, Math.min(1, p)) * 100 + "%";
    };
    window.addEventListener("scroll", upd, { passive: true });
    upd();
  }

  function initNav() {
    const nav = $("#navbar"), prog = $("#navProgress"), top = $("#backToTop");
    const links = $$(".nav-link");
    const secs = $$("section[id], header[id]");

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 40);
      top.classList.toggle("show", y > 600);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

      let id = "";
      secs.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= 140 && r.bottom >= 140) id = s.id;
      });
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    const burger = $("#burger"), menu = $("#navLinks");
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.classList.toggle("active", open);
      burger.setAttribute("aria-expanded", open);
    });
    links.forEach((l) => l.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    }));
  }

  function initTheme() {
    const btn = $("#themeToggle");
    if (localStorage.getItem("vc-theme") === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
    btn.addEventListener("click", () => {
      const light = document.documentElement.getAttribute("data-theme") === "light";
      if (light) { document.documentElement.removeAttribute("data-theme"); localStorage.setItem("vc-theme", "dark"); }
      else { document.documentElement.setAttribute("data-theme", "light"); localStorage.setItem("vc-theme", "light"); }
    });
  }

  function initLang() {
    $("#langToggle").addEventListener("click", () => {
      lang = lang === "pt" ? "en" : "pt";
      localStorage.setItem("vc-lang", lang);
      applyLang(lang);
      typeLoop($(".vc-hero__terminal"), CONFIG.terminal);
    });
  }

  /* ===================================================================
     6. MICRO-INTERAÇÕES
     =================================================================== */
  function initCursor() {
    if (reduced || !matchMedia("(pointer: fine)").matches) return;
    const cur = $(".cursor"), dot = $(".cursor__dot"), ring = $(".cursor__ring");
    let x = 0, y = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%,-50%)`;
    });
    (function loop() {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hot = "a";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hot)) cur.classList.add("is-hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hot)) cur.classList.remove("is-hover");
    });
  }

  function initMagnetic() {
    if (reduced || matchMedia("(pointer: coarse)").matches) return;
    $$("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.25;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  function initTilt() {
    if (reduced || matchMedia("(pointer: coarse)").matches) return;
    $$("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
        card.style.transform =
          `perspective(900px) rotateY(${(px - 0.5) * 6}deg) rotateX(${(0.5 - py) * 6}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
  }

  /* ===================================================================
     7. BOOT SEQUENCE
     =================================================================== */
  function init() {
    applyLang(lang);
    initTheme(); initLang(); initNav();
    initReveal(); initSkills(); initTelemetryTrigger(); initTimelineRail();
    initCursor(); initMagnetic(); initTilt();

    const hero = $(".vc-hero");
    if (hero) {
      buildCircuit($(".vc-hero__circuit", hero));
      splitName($(".vc-hero__name", hero));
      $$(".vc-hero__chip", hero).forEach((c, i) => c.style.setProperty("--i", i));
      parallax(hero);
    }

    initAutomationPanel();

    runBoot(() => {
      document.body.classList.add("is-built");
      setTimeout(() => typeLoop($(".vc-hero__terminal"), CONFIG.terminal), 500);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
