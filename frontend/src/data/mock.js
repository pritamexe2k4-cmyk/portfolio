// Portfolio data for Pujari Preetam — macOS Desktop Portfolio
// This is the final data (no backend needed — 100% static)

export const personalInfo = {
  name: "Pujari Preetam",
  title: "AI/ML Engineer",
  subtitle: "RAG & Agentic Systems",
  education: "B.Tech CSE (AI/ML) @ VNR VJIET, Hyderabad",
  email: "preetam.naik3@gmail.com",
  phone: "+91-9676290504",
  github: "https://github.com/Pritam2k4",
  githubHandle: "Pritam2k4",
  linkedin: "https://linkedin.com/in/preetam-naik2k4",
  linkedinHandle: "preetam-naik2k4",
  twitter: "https://x.com/preetam03296112",
  instagram: "https://www.instagram.com/pritam_2k4/",
  strava: "https://www.strava.com/athletes/206718172",
  hevy: "https://hevy.com/profile",
  spotify: "https://open.spotify.com/user/31dkpev4zhd766zqxrcg46ztokty",
  bio: "I build intelligent systems — from Agentic RAG pipelines to AI credit decisioning engines. I turn cutting-edge AI research into real-world products that actually work.",
  interests: ["Fitness", "Meditation", "AI Tools", "Travel"],
};

export const projects = [
  {
    id: "agentic-rag",
    title: "Agentic RAG System",
    date: "Jan 2026",
    whatItDoes: "An intelligent multi-agent system that can answer questions from both uploaded PDFs and the live web — with memory, context, and reasoning.",
    howItWorks: [
      "Built a 4-node agentic graph using LangGraph:",
      "Ingestor Node → chunks & embeds PDFs into ChromaDB Cloud",
      "Router Node → decides: answer from vector DB or search the web?",
      "Rewriter Node → rewrites vague queries for better retrieval",
      "Chat Router → manages multi-turn conversation state",
    ],
    techStack: ["Python", "LangGraph", "Gemini LLM", "ChromaDB Cloud", "FastAPI", "Streamlit", "Tavily", "DuckDuckGo Search API"],
    achievements: [
      "End-to-end agentic pipeline with stateful multi-turn Q&A",
      "Hybrid retrieval: vector search + live web search",
      "Deployed as interactive Streamlit web app",
      "Full conversation lifecycle managed via REST API endpoints",
    ],
  },
  {
    id: "intelli-credit",
    title: "Intelli-Credit: AI Credit Decisioning Engine",
    date: "Nov 2025",
    whatItDoes: "Automates the credit appraisal process that banks do manually — ingesting financial documents and outputting a full Credit Appraisal Memo (CAM) with lend/no-lend verdict, credit limit, and risk premium.",
    howItWorks: [
      "Ingests: GST returns, ITR, bank statements, annual reports, litigation data",
      "AI research agent crawls MCA (Ministry of Corporate Affairs) + e-Courts",
      "Flags red flags: circular trading, revenue inflation, high litigation exposure",
      "Outputs structured CAM report with risk scoring",
    ],
    techStack: ["Python", "LLMs (GPT/Gemini)", "PDF Parsing", "Web Scraping", "India-specific regulatory data pipelines"],
    achievements: [
      "Replaced hours of manual CA work with automated AI pipeline",
      "Integrated live MCA + e-Courts data for real-time risk detection",
      "India-specific: handles GST, ITR, and RBI-compliant formats",
      "Improved credit decision transparency and auditability",
    ],
  },
  {
    id: "medical-fusion",
    title: "Multimodal Medical Image Fusion",
    date: "Sep 2025",
    whatItDoes: "Research project exploring how combining different types of medical scans (MRI + SPECT, MRI + CT) improves brain tumor detection accuracy.",
    howItWorks: [
      "Analyzed 10+ fusion techniques: wavelet, GAN-based, transformer-based",
      "Evaluated across 8 metrics: PSNR, SSIM, Dice Score, SNR, MI, and more",
      "Benchmarked on 5+ clinical datasets: BraTS, TCIA, and others",
      "Deep SVDD used for anomaly/outlier detection in fused images",
    ],
    techStack: ["Python", "PyTorch", "Deep SVDD", "Multi-Modal MRI Analysis", "BraTS Dataset", "TCIA Dataset"],
    achievements: [
      "96.8% SVM classification accuracy with fused MRI–SPECT",
      "Dice score of 0.96 achieved with GAN-based fusion",
      "99.24% accuracy using transformer-based classification",
      "Identified 6+ open challenges for future clinical deployment",
      "Target: sub-200ms inference for real-time surgical settings",
    ],
  },
];

export const experience = [
  {
    id: "street-cause",
    role: "HR Head",
    company: "Street Cause (National NGO)",
    location: "Hyderabad",
    period: "Jan 2024 – Dec 2024",
    year: "2024",
    description: "Street Cause is one of India's largest student-run NGOs. As HR Head of the VNR chapter:",
    bullets: [
      "Scaled volunteer base from 9 → 30+ members (230% growth) through structured recruitment drives and onboarding systems",
      "Secured official campus NGO recognition, elevating org visibility",
      "Built recruitment pipeline still used by the chapter today",
    ],
  },
  {
    id: "student-force",
    role: "AR Head",
    company: "Student Force",
    location: "Hyderabad",
    period: "Aug 2023 – Dec 2023",
    year: "2023",
    description: "",
    bullets: [
      "Conducted 3 alumni workshops with 30+ alumni speakers training 100+ students on fundraising & NGO operations",
      "Led 2 large-scale campus events (300+ attendees each)",
      "Managed end-to-end event operations for 20+ member team",
    ],
  },
];

export const skills = {
  "Languages & Databases": ["Python", "SQL", "ChromaDB", "FAISS"],
  "AI / ML Core": ["Machine Learning", "Deep Learning", "NLP", "RAG", "Agentic Systems", "Vector Search"],
  "Frameworks & Libraries": ["PyTorch", "LangChain", "LangGraph", "FastAPI", "Streamlit", "Sentence-Transformers"],
  "Developer Tools": ["Git", "Docker", "Google Colab", "Jupyter", "Gemini API"],
};

export const currentlyLearning = ["Reinforcement Learning", "Multi-Agent Systems", "LLM Fine-tuning"];

export const certifications = [
  { title: "AI Engineer Core Track", subtitle: "LLM Engineering & RAG", detail: "Verified Certificate" },
  { title: "Udemy — Data Science Bootcamp", subtitle: "ML · DL · NLP Complete Track", detail: "" },
  { title: "Udemy — 100 Days of Python", subtitle: "Dr. Angela Yu · Completed", detail: "" },
];

export const educationList = [
  { iconType: "grad", title: "B.Tech CSE (AI/ML)", institution: "VNR VJIET", period: "2022–Present" },
  { iconType: "book", title: "Intermediate PCM", institution: "Sri Chaitanya", period: "2020–2022" },
  { iconType: "school", title: "ICSE Class 10", institution: "Johnson Grammar", period: "2019–2020" },
];

export const stickyNoteItems = [
  { text: "Land my dream AI/ML job", done: false },
  { text: "Drink water", done: false },
  { text: "Move to the US", done: true },
  { text: "Finish B.Tech sane", done: false },
  { text: "Build something legendary", done: false },
  { text: "Master making pasta", done: true },
  { text: "Get elite at RAG & Agents", done: false },
  { text: "Travel somewhere new/year", done: false },
  { text: "World domination", done: false },
];

export const dockApps = [
  { id: "finder", name: "Finder", windowType: "about", action: "window" },
  { id: "strava", name: "Strava", windowType: "strava", action: "window" },
  { id: "hevy", name: "Hevy", windowType: "hevy", action: "window" },
  { id: "spotify", name: "Spotify", windowType: "spotify", action: "window" },
  { id: "divider1", action: "divider" },
  { id: "twitter", name: "X", action: "link", url: "https://x.com/preetam03296112" },
  { id: "instagram", name: "Instagram", action: "link", url: "https://www.instagram.com/pritam_2k4/" },
  { id: "linkedin", name: "LinkedIn", action: "link", url: "https://linkedin.com/in/preetam-naik2k4" },
  { id: "github", name: "GitHub", action: "link", url: "https://github.com/Pritam2k4" },
  { id: "divider2", action: "divider" },
  { id: "phone", name: "Phone", windowType: "contact", action: "window" },
  { id: "settings", name: "System Preferences", windowType: "systemprefs", action: "window" },
  { id: "divider3", action: "divider" },
  { id: "trash", name: "Trash", windowType: "trash", action: "window" },
];

export const desktopIconsConfig = [
  { id: "projects-icon", name: "Projects", windowType: "projects", col: "right", row: 0 },
  { id: "skills-icon", name: "Skills", windowType: "skills", col: "right", row: 1 },
  { id: "experience-icon", name: "Experience", windowType: "experience", col: "right", row: 2 },
  { id: "about-icon", name: "About Me", windowType: "about", col: "left", row: 0 },
  { id: "resume-icon", name: "Resume.pdf", windowType: "about", col: "left", row: 1, isFile: true },
  { id: "certs-icon", name: "Certifications", windowType: "certifications", col: "left", row: 2 },
  { id: "dontlook-icon", name: "Don't Look", windowType: "trash", col: "right", row: 3 },
];

export const windowConfigs = {
  about: { title: "About Me", width: 640, height: 480 },
  projects: { title: "Projects — Finder", width: 840, height: 560 },
  experience: { title: "Experience", width: 720, height: 500 },
  skills: { title: "Skills & Tools", width: 660, height: 480 },
  certifications: { title: "Certifications & Education", width: 660, height: 530 },
  strava: { title: "Strava — Training Log", width: 440, height: 470 },
  hevy: { title: "Hevy — Workout Tracker", width: 440, height: 470 },
  spotify: { title: "Spotify — Now Playing", width: 440, height: 510 },
  contact: { title: "Contact", width: 500, height: 430 },
  systemprefs: { title: "System Preferences", width: 600, height: 470 },
  trash: { title: "Trash", width: 380, height: 270 },
};
