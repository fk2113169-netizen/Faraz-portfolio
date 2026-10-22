// Faraz Ahmed Portfolio - Interactive Features & Logic

const projectDb = {
  agentic_command: {
    category: "Agent Orchestration",
    title: "Agentic Command Center",
    subtitle: "Google Antigravity 2.0 multi-agent factory orchestration",
    desc: "An interactive operations dashboard that acts as a centralized command interface for hierarchical agent networks. It manages serverless container deployments, builds evaluation matrices, and routes execution payloads.",
    diagram: [
      { name: "Orchestrator Node Initiates Task", desc: "Spawns execution sequence from prompt constraints." },
      { name: "Research Agent Fetches Context", desc: "Performs recursive web scrapes and structures context data." },
      { name: "Coder Node Compiles Package", desc: "Writes modular backend microservices." },
      { name: "Linter Agent Runs Quality Evaluation", desc: "Automates testing framework checks; loops back if failure is detected." },
      { name: "Deployer Agent Triggers Vercel/Cloud Builds", desc: "Secures sandbox, releases bundle, and serves live app." }
    ],
    specs: {
      "Tech Stack": "Next.js, GoLang, Antigravity CLI",
      "Uptime Target": "99.9% Uptime SLA",
      "Orchestration Method": "Hierarchical Tree-of-Thought",
      "Telemetry System": "OpenTelemetry API Tracing"
    },
    link: "https://github.com/fk2113169-netizen/Agentic-Engineering-Command-Center"
  },
  whatsapp_engine: {
    category: "B2B Automation",
    title: "WhatsApp & Voice Engine",
    subtitle: "Twilio IVR & WhatsApp Message routing automation",
    desc: "A production-grade pipeline handling real-time customer customer relations via SMS and telephony. The engine intercepts webhook callbacks, routes voice transcription to AI parsing, and maps outputs onto transaction ledgers.",
    diagram: [
      { name: "Inbound Event Triggered", desc: "Twilio Webhook routes incoming voice call or WhatsApp payload." },
      { name: "Whisper Transcript compilation", desc: "Converts audio stream to structured text in real-time." },
      { name: "Gemini Engine Intent Extraction", desc: "Classifies task (e.g., invoice paid, support needed) and extracts variables." },
      { name: "Supabase DB State Updates", desc: "Queries current status and updates ledger files." },
      { name: "Accounting API Dispatch", desc: "Triggers invoice clearance event inside QuickBooks/Xero." }
    ],
    specs: {
      "Tech Stack": "FastAPI, Twilio API, Supabase DB, n8n",
      "Payload Speed": "Sub-800ms intent classification",
      "Database Listener": "PostgreSQL Real-time Triggers",
      "Security Protocol": "AES-256 Webhook Signature Validation"
    },
    link: "https://github.com/fk2113169-netizen/Automation"
  },
  ecomatch: {
    category: "Industrial Symbiosis",
    title: "EcoMatch AI Matchmaker",
    subtitle: "Waste-to-Market circular optimization platform",
    desc: "A circular economy matchmaking platform. It maps secondary materials (waste outputs from industrial companies) onto buyer purchase streams, calculating optimal distance, chemistry compatibility, and scope-3 offsets.",
    diagram: [
      { name: "Material Log Entered", desc: "Industrial producer logs waste stream parameters (volume, purity, type)." },
      { name: "Semantic Embedding Lookup", desc: "Calculates similarity indices against registered buyer input specs." },
      { name: "Linear Optimization Route Matching", desc: "Calculates transportation logs, pricing, and distance metrics." },
      { name: "Carbon offset estimation", desc: "Computes Scope 3 savings compared to raw material production." },
      { name: "Ledger Transaction Dispatched", desc: "Locks circular symbiosis contract." }
    ],
    specs: {
      "Tech Stack": "Python, Plotly Dash, PostgreSQL, OpenAI API",
      "Mapping Latency": "Instant vector matching",
      "Offset Model": "EPA WARM methodology compliance",
      "Visualization": "Plotly Circular Sankey Diagrams"
    },
    link: "https://github.com/fk2113169-netizen/Eco-MatchAi"
  },
  bootcamp_builder: {
    category: "Multi-Agent Systems",
    title: "Coding Bootcamp Builder",
    subtitle: "Sequential Multi-Agent Curriculum compiler CLI",
    desc: "A developer CLI tool designed to compile complete, production-grade pedagogical syllabus structures automatically. Employs a pipeline of specialized agents (Researcher -> Designer -> Reviewer -> Linter) to yield high-quality training plans.",
    diagram: [
      { name: "Curriculum Target Parsed", desc: "Reads parameters (Topic, duration, target audience)." },
      { name: "Research Agent Web Scan", desc: "Extracts trending industry requirements, tools, and topics." },
      { name: "Design Agent Outline Blueprint", desc: "Structures milestones, modules, and hands-on coding labs." },
      { name: "Reviewer Agent Edge Audit", desc: "Validates technical prerequisites and flow cohesion." },
      { name: "Packaging Node Exports Docs", desc: "Compiles static Markdown syllabus and outputs folder scaffolding." }
    ],
    specs: {
      "Tech Stack": "Python, Gemini API, CrewAI Framework",
      "Output Format": "Markdown Scaffolding Bundle",
      "Evaluation Cycle": "Self-correction recursive loop",
      "Context Pruning": "Gemini System Instruction Optimization"
    },
    link: "https://github.com/fk2113169-netizen/Multiple-Agent-system"
  },
  hireme: {
    category: "Job Application Assistant",
    title: "HireMe Agent",
    subtitle: "AI-driven CV parser and job matchmaker dashboard",
    desc: "A Python-based CV parser and job application agent. Automatically extracts structural skills from PDF resumes using Gemini, runs LinkedIn searches based on matching filters, and yields match scores with rationalized feedback.",
    diagram: [
      { name: "Resume PDF Uploaded", desc: "Parser scans text layers and structures candidate capabilities." },
      { name: "Job Spec Crawled", desc: "Fetches job criteria from LinkedIn/Indeed search results." },
      { name: "Semantic Gap Analysis", desc: "Gemini evaluates candidate parameters against job constraints." },
      { name: "Score & Feedback Rendered", desc: "Displays structural recommendations and outputs custom cover letters." }
    ],
    specs: {
      "Tech Stack": "Python, Streamlit, Gemini 2.5, PyPDF2",
      "Search Engine": "Serper Google API Grounding",
      "Interface Mode": "Dark Mode Responsive Streamlit",
      "Processing Uptime": "Instant execution payload"
    },
    link: "https://github.com/fk2113169-netizen/Hireme-Agentt"
  },
  ecosort: {
    category: "AI Image Classifier",
    title: "EcoSort AI Guide",
    subtitle: "Gemini Vision waste segregation chatbot",
    desc: "An interactive waste classifier powered by Gemini Vision models. Takes photo uploads of refuse, returns sorting instructions (landfill, recycling, compost rules), and records history logs inside SQLite.",
    diagram: [
      { name: "Image Logged / Captured", desc: "User uploads scrap material or waste image." },
      { name: "Vision Analysis Callback", desc: "Gemini Vision analyzes material chemistry and characteristics." },
      { name: "Sorting Directive Dispatched", desc: "Outputs environmental sorting instructions and ecological tips." },
      { name: "SQLite DB Transaction", desc: "Logs categorization data to user history tables." }
    ],
    specs: {
      "Tech Stack": "Python, Gemini Vision, SQLite, Streamlit",
      "Database Engine": "Bespoke SQLite Log Tables",
      "Visual Model": "Gemini 1.5 Flash Vision API",
      "Latency Threshold": "Sub-1.2s image processing"
    },
    link: "https://github.com/fk2113169-netizen/chatbot"
  },
  semantic_stream: {
    category: "Few-Shot Inference",
    title: "Minimal Data Learning System",
    subtitle: "Custom pattern recognition playground",
    desc: "A custom pattern recognition playground utilizing low-shot prompting. Interacts with SQLite to dynamically add input-output examples, builds RAG parameters for Gemini, and outputs system logic templates.",
    diagram: [
      { name: "Input Examples Entered", desc: "User records few-shot matching pairs inside SQLite." },
      { name: "Prompt Context Compiled", desc: "Structures examples into active context parameters." },
      { name: "Inference Query Evaluated", desc: "Executes LLM intent parsing on raw input query." },
      { name: "Confidence Ratings Compiled", desc: "Outputs prediction values and parses rule maps." }
    ],
    specs: {
      "Tech Stack": "FastAPI, React, SQLite, Gemini API",
      "Inference Type": "Few-Shot RAG Contextualization",
      "API Framework": "FastAPI Async Routes",
      "Datastore": "Local SQLite Database File"
    },
    link: "https://github.com/fk2113169-netizen/semantic-stream"
  },
  rfp_center: {
    category: "B2B SaaS",
    title: "RFP Proposal Command Center",
    subtitle: "Next.js proposal engineering system",
    desc: "A proposal engineering system parsing corporate RFP bid documents. Implements compliance scans, extracts requirements matrices, calculates win probabilities, and structures draft narratives.",
    diagram: [
      { name: "RFP Bid Document Uploaded", desc: "Parser scans PDF/DOCX guidelines." },
      { name: "Compliance Requirements Extracted", desc: "Extracts mandatory checkboxes and deliverables." },
      { name: "Win Probability Analyzed", desc: "Runs calculations against historic database records." },
      { name: "Narrative Outlines Generated", desc: "Compiles first-draft response briefs using Gemini." }
    ],
    specs: {
      "Tech Stack": "Next.js, Prisma, PostgreSQL, Gemini API",
      "File Parsing": "Modular PDF Raw Text Extractor",
      "Database Provider": "PostgreSQL (Supabase)",
      "Target Accuracy": "High-fidelity requirements tracing"
    },
    link: "#contact"
  }
};

const agentDatabase = {
  orchestrator: {
    name: "Orchestrator Node",
    desc: "Core coordinating agent. Reads user tasks, generates workflow graphs, delegates sub-operations, resolves errors, and aggregates output files.",
    model: "Gemini 1.5 Pro / Claude 3.5 Sonnet",
    context: "Infinite Loop Safeguard Active"
  },
  research: {
    name: "Research Agent",
    desc: "Context gathering node. Uses custom web scrapers, vector searches, and API endpoint lookups to feed high-relevance domain data into context windows.",
    model: "Gemini 1.5 Flash (Optimized Speed)",
    context: "RAG / Vector Embedding Integration"
  },
  codegen: {
    name: "Code Architect Node",
    desc: "Generation engine. Writes FastAPI routers, structures Supabase triggers, builds Next.js layouts, and maintains modular file design paradigms.",
    model: "Claude 3.5 Sonnet (High Synthesis)",
    context: "Antigravity CLI Framework Bindings"
  },
  evaluator: {
    name: "Linter & Evaluator",
    desc: "Resilience evaluator. Inspects code syntax, tests database triggers, checks styling parameters, and executes error audits before delivery.",
    model: "Gemini 1.5 Flash (Strict Structured JSON)",
    context: "Linting & Testing Harness Engine"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Header scroll spy
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Navigationspy highlighting
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let currentSec = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        currentSec = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSec}`) {
        link.classList.add("active");
      }
    });
  });

  // Mobile drawer toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      const menuIcon = menuToggle.querySelector('svg');
      if (menuIcon) {
        if (isOpen) {
          menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
        } else {
          menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
        }
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      });
    });
  }

  // Theme Switching
  const themeToggle = document.getElementById('theme-toggle');
  
  // Set initial theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeToggleIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeToggleIcon(newTheme);
    });
  }

  function updateThemeToggleIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'light') {
      themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
    } else {
      themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
    }
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Scroll Fade reveals
  const revealItems = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        if (entry.target.classList.contains("expertise-card")) {
          const progressBar = entry.target.querySelector(".progress-bar-fill");
          if (progressBar) {
            progressBar.style.width = progressBar.getAttribute("data-progress");
          }
        }
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(item => observer.observe(item));

  // Sync initial load elements
  setTimeout(() => {
    document.querySelectorAll(".hero-section .fade-in, .hero-section .parameters-wrapper").forEach(el => {
      el.classList.add("active");
    });
  }, 50);

  // Projects category sorting filter
  window.filterProjects = function(category) {
    const cards = document.querySelectorAll(".projects-grid .project-card");
    const chips = document.querySelectorAll(".projects-filter-bar .filter-chip");
    
    chips.forEach(chip => {
      const chipText = chip.textContent.toLowerCase();
      if (chipText.includes(category) || (category === 'all' && chipText.includes('all'))) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });

    cards.forEach(card => {
      const cardCat = card.getAttribute("data-project-cat");
      if (category === "all" || cardCat === category) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(10px) scale(0.95)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  };

  // Projects modal spec display
  const projectModal = document.getElementById("project-modal");
  const modalDetails = document.getElementById("modal-project-details");

  window.openProjectModal = function(projectId) {
    const proj = projectDb[projectId];
    if (!proj) return;

    let diagramHtml = "";
    proj.diagram.forEach((step, i) => {
      diagramHtml += `
        <div class="diagram-step">
          <span class="step-num">${i + 1}</span>
          <div class="step-info">
            <span class="step-name">${step.name}</span>
            <p class="step-desc">${step.desc}</p>
          </div>
        </div>
      `;
      if (i < proj.diagram.length - 1) {
        diagramHtml += `
          <div class="step-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
        `;
      }
    });

    let specsHtml = "";
    for (const [key, value] of Object.entries(proj.specs)) {
      specsHtml += `
        <div class="spec-item">
          <span class="spec-label">${key}</span>
          <p class="spec-val">${value}</p>
        </div>
      `;
    }

    modalDetails.innerHTML = `
      <div class="modal-body">
        <div class="modal-header">
          <span class="modal-category">${proj.category}</span>
          <h3 class="modal-title">${proj.title}</h3>
          <p class="modal-subtitle">${proj.subtitle}</p>
        </div>
        
        <p class="modal-desc">${proj.desc}</p>
        
        <div class="modal-section-title">System Architecture</div>
        <div class="architecture-diagram">
          ${diagramHtml}
        </div>
        
        <div class="modal-section-title">Technical Specifications</div>
        <div class="modal-specs-grid">
          ${specsHtml}
        </div>
        
        <div class="modal-actions">
          <a href="${proj.link}" target="_blank" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" style="margin-right:8px; vertical-align:middle;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Open Repository
          </a>
          <button class="btn btn-secondary" onclick="closeProjectModal()">Close Specs</button>
        </div>
      </div>
    `;

    projectModal.classList.add("open");
    document.body.style.overflow = "hidden";
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  };

  window.closeProjectModal = function() {
    projectModal.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Agent graph selector
  window.selectAgentNode = function(agentId) {
    document.querySelectorAll(".graph-node").forEach(node => node.classList.remove("active"));
    const nodeEl = document.getElementById(`node-${agentId}`);
    if (nodeEl) nodeEl.classList.add("active");

    const data = agentDatabase[agentId];
    if (data) {
      document.getElementById("selected-agent-name").textContent = data.name;
      document.getElementById("agent-details").innerHTML = `
        <p class="agent-desc">${data.desc}</p>
        <div class="agent-stats">
          <div class="stat-row"><span>Model Bind:</span><strong>${data.model}</strong></div>
          <div class="stat-row"><span>Operational Mode:</span><strong>${data.context}</strong></div>
        </div>
      `;
    }
  };

  // Orchestrator task runner
  let isTaskRunning = false;
  let orchestratorTimeouts = [];

  window.runOrchestratorTask = function() {
    if (isTaskRunning) return;
    isTaskRunning = true;

    // Clear old timeouts
    orchestratorTimeouts.forEach(clearTimeout);
    orchestratorTimeouts = [];

    const taskSelect = document.getElementById("orchestrator-task");
    const selectedTask = taskSelect.value;
    const logsBox = document.getElementById("orchestrator-logs");

    logsBox.innerHTML = `<div class="log-line system-msg">[SYSTEM] Initializing task: "${taskSelect.options[taskSelect.selectedIndex].text}"...</div>`;

    const connOrchRes = document.getElementById("path-orch-research");
    const connOrchCode = document.getElementById("path-orch-code");
    const connResEval = document.getElementById("path-research-eval");
    const connCodeEval = document.getElementById("path-code-eval");
    const connEvalOrch = document.getElementById("path-eval-orch");

    const paths = [connOrchRes, connOrchCode, connResEval, connCodeEval, connEvalOrch];
    paths.forEach(p => p && p.classList.remove("active-flow"));

    let steps = [];

    if (selectedTask === "saas_billing") {
      steps = [
        { time: 500, node: "orchestrator", path: null, log: "[Orchestrator] Task parsing: Compile Stripe billing microservices.", type: "agent" },
        { time: 1500, node: "research", path: connOrchRes, log: "[Researcher] Scanning Stripe checkout webhook schemas...", type: "agent" },
        { time: 2500, node: "research", path: null, log: "[Researcher] Context compiled. Webhook parameters verified.", type: "system" },
        { time: 3500, node: "codegen", path: connOrchCode, log: "[Code Architect] Writing FastAPI endpoint routes and SQL triggers...", type: "agent" },
        { time: 4500, node: "codegen", path: null, log: "[Code Architect] Server routers compiled: POST /webhook/stripe.", type: "system" },
        { time: 5500, node: "evaluator", path: connCodeEval, log: "[Evaluator] Executing type checking and API sandbox tests...", type: "agent" },
        { time: 6500, node: "evaluator", path: null, log: "[Evaluator] TEST SUCCESS: 8/8 test units passed.", type: "success" },
        { time: 7500, node: "orchestrator", path: connEvalOrch, log: "[Orchestrator] Package compilation successful. Launching microservice.", type: "agent" },
        { time: 8200, node: "orchestrator", path: null, log: "[SYSTEM] Task complete. SaaS Billing Pipeline successfully deployed! Uptime online.", type: "success" }
      ];
    } else if (selectedTask === "ecomatch_matching") {
      steps = [
        { time: 500, node: "orchestrator", path: null, log: "[Orchestrator] Task parsing: Find material symbiosis match for Citrus Pulps.", type: "agent" },
        { time: 1500, node: "research", path: connOrchRes, log: "[Researcher] Querying buyer material specifications from Supabase...", type: "agent" },
        { time: 2500, node: "research", path: null, log: "[Researcher] Match Candidate Found: BioFeed Organics (Organic Biofuels).", type: "system" },
        { time: 3500, node: "codegen", path: connOrchCode, log: "[Code Architect] Synthesizing matching transaction event and carbon offsets...", type: "agent" },
        { time: 4500, node: "codegen", path: null, log: "[Code Architect] Event mapped: 6.2 Tons Citrus -> BioFeed (9.3 Tons CO2 saved).", type: "system" },
        { time: 5500, node: "evaluator", path: connCodeEval, log: "[Evaluator] Validating EPA WARM methodology calculations...", type: "agent" },
        { time: 6500, node: "evaluator", path: null, log: "[Evaluator] Calculations certified. Scope-3 Carbon savings verified.", type: "success" },
        { time: 7500, node: "orchestrator", path: connEvalOrch, log: "[Orchestrator] Updating Circular Symbiosis Ledger.", type: "agent" },
        { time: 8200, node: "orchestrator", path: null, log: "[SYSTEM] Task complete. Ledger transaction written successfully!", type: "success" }
      ];
    } else if (selectedTask === "bootcamp_roadmap") {
      steps = [
        { time: 500, node: "orchestrator", path: null, log: "[Orchestrator] Task parsing: Compile AI Agent systems curriculum outline.", type: "agent" },
        { time: 1500, node: "research", path: connOrchRes, log: "[Researcher] Scraping leading university agent system syllabi...", type: "agent" },
        { time: 2500, node: "research", path: null, log: "[Researcher] Core modules extracted: Vector DBs, CrewAI, Auto-eval loops.", type: "system" },
        { time: 3500, node: "codegen", path: connOrchCode, log: "[Code Architect] Synthesizing Markdown syllabus roadmap document...", type: "agent" },
        { time: 4500, node: "codegen", path: null, log: "[Code Architect] Outline generated: 5 Milestone modules drafted.", type: "system" },
        { time: 5500, node: "evaluator", path: connCodeEval, log: "[Evaluator] Auditing curriculum dependencies and prerequisites...", type: "agent" },
        { time: 6500, node: "evaluator", path: null, log: "[Evaluator] Prerequisites coherent. Cohesion rating: 9.8/10.", type: "success" },
        { time: 7500, node: "orchestrator", path: connEvalOrch, log: "[Orchestrator] Packaging syllabus and writing to files.", type: "agent" },
        { time: 8200, node: "orchestrator", path: null, log: "[SYSTEM] Task complete. Syllabus bundle successfully compiled & outputted.", type: "success" }
      ];
    }

    steps.forEach((step, idx) => {
      const t = setTimeout(() => {
        selectAgentNode(step.node);

        paths.forEach(p => p && p.classList.remove("active-flow"));
        if (step.path) {
          step.path.classList.add("active-flow");
        }

        const lineEl = document.createElement("div");
        lineEl.className = `log-line ${step.type}-msg`;
        lineEl.textContent = step.log;
        logsBox.appendChild(lineEl);
        logsBox.scrollTop = logsBox.scrollHeight;

        if (idx === steps.length - 1) {
          isTaskRunning = false;
          paths.forEach(p => p && p.classList.remove("active-flow"));
        }
      }, step.time);
      orchestratorTimeouts.push(t);
    });
  };

  // Terminal Widget Emulator
  const terminalScreen = document.getElementById("terminal-screen");
  const terminalInput = document.getElementById("terminal-input");
  
  if (terminalInput && terminalScreen) {
    const cmdHistory = [];
    let historyIdx = -1;

    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const command = terminalInput.value.trim();
        if (command) {
          cmdHistory.push(command);
          historyIdx = cmdHistory.length;
          executeTermCommand(command.toLowerCase());
          terminalInput.value = "";
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historyIdx > 0) {
          historyIdx--;
          terminalInput.value = cmdHistory[historyIdx];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIdx < cmdHistory.length - 1) {
          historyIdx++;
          terminalInput.value = cmdHistory[historyIdx];
        } else {
          historyIdx = cmdHistory.length;
          terminalInput.value = "";
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const currentVal = terminalInput.value.trim().toLowerCase();
        const possibleCmds = ["help", "about", "projects", "skills", "clear", "diagnose", "build", "deploy", "theme"];
        const match = possibleCmds.find(c => c.startsWith(currentVal));
        if (match) {
          terminalInput.value = match;
        }
      }
    });

    window.executeTerminalChip = function(cmd) {
      terminalInput.value = cmd;
      executeTermCommand(cmd);
      terminalInput.value = "";
    };

    const termHelpText = `
Available commands:
  - <b>help</b>           : Displays system shell guidelines.
  - <b>about</b>          : Displays specs for Architect Faraz Ahmed.
  - <b>projects</b>       : Lists featured case studies. Type 'project [1-8]' to view detail specs!
  - <b>skills</b>         : Prints proficiency level matrix.
  - <b>theme</b>          : Toggles dark / light display mode.
  - <b>goto [section]</b> : Scrolls to a section (e.g. goto about, goto projects).
  - <b>clear</b>          : Clears terminal history.
  - <b>diagnose</b>       : Executes agent workflow diagnostic.
  - <b>build</b>          : Runs compiler for B2B API integrations.
  - <b>deploy</b>         : Triggers simulation deployment pipeline.
    `;

    function executeTermCommand(command) {
      const inputLine = document.createElement("div");
      inputLine.className = "terminal-line";
      inputLine.innerHTML = `<span class="terminal-prompt">faraz@architect:~$</span> ${command}`;
      terminalScreen.appendChild(inputLine);

      const responseLine = document.createElement("div");
      responseLine.className = "terminal-line";
      responseLine.style.color = "var(--fg-2)";

      if (command.startsWith("goto ")) {
        const target = command.substring(5).trim();
        const section = document.getElementById(target);
        if (section) {
          responseLine.innerHTML = `<span style='color:var(--success);'>Scrolling to #${target}...</span>`;
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else {
          responseLine.innerHTML = `Section <b>#${target}</b> not found. Try: goto home, goto about, goto expertise, goto projects, goto education, goto experience, goto contact.`;
        }
        terminalScreen.appendChild(responseLine);
        terminalScreen.scrollTop = terminalScreen.scrollHeight;
        return;
      }

      if (command.startsWith("project ")) {
        const num = parseInt(command.substring(8).trim());
        const keys = [
          "agentic_command", "whatsapp_engine", "ecomatch", "bootcamp_builder",
          "hireme", "ecosort", "semantic_stream", "rfp_center"
        ];
        if (num >= 1 && num <= 8) {
          const key = keys[num - 1];
          openProjectModal(key);
          responseLine.innerHTML = `<span style='color:var(--success);'>Opening ${projectDb[key].title} specifications...</span>`;
        } else {
          responseLine.innerHTML = `Project <b>${num}</b> not found. Select 1 to 8.`;
        }
        terminalScreen.appendChild(responseLine);
        terminalScreen.scrollTop = terminalScreen.scrollHeight;
        return;
      }

      switch (command) {
        case "help":
          responseLine.innerHTML = termHelpText;
          break;
        case "about":
          responseLine.innerHTML = `
<b>SYSTEM SPECIFICATIONS</b>
Name: Faraz Ahmed
Title: AI Systems Engineer & B2B Architect
HQ: Islamabad, Pakistan
Github: fk2113169-netizen
Status: Available for immediate codebase deployments.
          `;
          break;
        case "projects":
          responseLine.innerHTML = `
<b>DEPLOYED SYSTEMS MATRIX</b>
1. [Agentic Command Center] -> Type <b>project 1</b> to view specs
2. [WhatsApp & Voice Engine] -> Type <b>project 2</b> to view specs
3. [EcoMatch AI Matchmaker] -> Type <b>project 3</b> to view specs
4. [Coding Bootcamp Builder] -> Type <b>project 4</b> to view specs
5. [HireMe Agent]            -> Type <b>project 5</b> to view specs
6. [EcoSort AI Guide]        -> Type <b>project 6</b> to view specs
7. [Minimal Data Learning]   -> Type <b>project 7</b> to view specs
8. [RFP Proposal Center]     -> Type <b>project 8</b> to view specs
          `;
          break;
        case "skills":
          responseLine.innerHTML = `
<b>SKILLS ENGINE matrix.status: OK</b>
- Prompt Systems : 90% (Claude, Gemini APIs, context window pruning)
- Flow Automations: 95% (n8n node arrays, Pipedream event catchers)
- Server Backend : 85% (FastAPI logic, Supabase real-time listeners)
          `;
          break;
        case "theme":
          const themeToggler = document.getElementById("theme-toggle");
          if (themeToggler) themeToggler.click();
          responseLine.innerHTML = `<span style='color:var(--success);'>Theme toggled successfully.</span>`;
          break;
        case "clear":
          terminalScreen.innerHTML = "";
          return;
        case "diagnose":
          responseLine.innerHTML = "<span style='color:var(--accent);'>Starting Agent Workflow diagnostics...</span>";
          simulateProcess([
            "Connecting to Google AI Studio...",
            "Instantiating multi-agent context window...",
            "Testing evaluation unit harness: ALL TESTS PASSING (5/5)",
            "Diagnostic output: AGENTS REPORT NORMAL OPERATIONS. System uptime 99.9%"
          ]);
          break;
        case "build":
          responseLine.innerHTML = "<span style='color:var(--accent);'>Compiling pipeline schemas...</span>";
          simulateProcess([
            "Resolving FastAPI routes...",
            "Checking Twilio webhook response latency...",
            "Executing Supabase query tests...",
            "B2B SaaS integration successfully compiled (0 warnings)."
          ]);
          break;
        case "deploy":
          responseLine.innerHTML = "<span style='color:var(--accent);'>Triggering deployment pipeline...</span>";
          simulateProcess([
            "Parsing deployment package dependencies...",
            "Running remote build scripts...",
            "System online: https://github.com/fk2113169-netizen"
          ]);
          break;
        default:
          responseLine.innerHTML = `Command not recognized: <b>${command}</b>. Type 'help' to see active utilities.`;
      }

      terminalScreen.appendChild(responseLine);
      terminalScreen.scrollTop = terminalScreen.scrollHeight;
    }

    function simulateProcess(steps) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < steps.length) {
          const stepLine = document.createElement("div");
          stepLine.className = "terminal-line";
          stepLine.style.color = "var(--muted)";
          stepLine.innerHTML = `<span style='color:var(--accent);'>&bull;</span> ${steps[index]}`;
          terminalScreen.appendChild(stepLine);
          terminalScreen.scrollTop = terminalScreen.scrollHeight;
          index++;
        } else {
          clearInterval(interval);
        }
      }, 350);
    }
  }

  // Contact Form submit handler
  const contactForm = document.getElementById("contact-form");
  const formNotification = document.getElementById("form-notification");

  if (contactForm && formNotification) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nameVal = document.getElementById("form-name").value.trim();
      const emailVal = document.getElementById("form-email").value.trim();
      const messageVal = document.getElementById("form-message").value.trim();

      if (!nameVal || !emailVal || !messageVal) {
        displayNotification('Please fill in all required fields.', 'error');
        return;
      }

      displayNotification('Sending message...', 'info');

      const payload = {
        name: nameVal,
        email: emailVal,
        message: messageVal,
        time: new Date().toLocaleString()
      };

      fetch("/api/send-email", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        return response.json().then(data => {
          return { ok: response.ok, status: response.status, data };
        }).catch(() => {
          return { ok: response.ok, status: response.status, data: null };
        });
      })
      .then(res => {
        if (res.ok && res.data && res.data.success) {
          displayNotification(`Thank you, ${nameVal}! Your message has been sent successfully.`, 'success');
          contactForm.reset();
        } else {
          const errMsg = (res.data && res.data.error) ? res.data.error : 'SMTP/Resend configuration error';
          console.error('Email dispatch failed:', errMsg);
          displayNotification(`Failed to send message: ${errMsg}`, 'error');
        }
      })
      .catch(error => {
        console.error('API connection error:', error);
        displayNotification('Could not connect to email service. Please try again.', 'error');
      });
    });

    function displayNotification(msg, type) {
      formNotification.style.display = 'block';
      formNotification.className = `notification-banner ${type}`;
      
      if (type === 'success') {
        formNotification.innerHTML = `<strong>${msg}</strong>`;
      } else if (type === 'error') {
        formNotification.innerHTML = `<strong>${msg}</strong>`;
      } else {
        formNotification.innerHTML = `<strong>${msg}</strong>`;
      }
    }
  }

  // Typewriter effect for Hero dynamic role description
  const typewriterText = document.getElementById("typewriter-text");
  if (typewriterText) {
    const roles = [
      "Vibe Coder", 
      "AI Systems Architect", 
      "Full-Stack SaaS Developer", 
      "Agentic AI Specialist"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typewriterText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typewriterText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1500; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before next word
      }

      setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 800);
  }
});
