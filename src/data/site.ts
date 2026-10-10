export const site = {
  name: "Preetam",
  mark: "pn",
  city: "Hyderabad",
  title: "Preetam — Applied ML & AI systems builder, Hyderabad",
  email: "pritam.exe2k4@gmail.com",
  github: "https://github.com/pritamexe2k4-cmyk",
  linkedin: "https://www.linkedin.com/in/preetam-naik2k4",
  resume: "/resume.pdf",
  hero: {
    before: "I'm Preetam, an AI/ML systems builder based in Hyderabad. ",
    available: "Open",
    after: " to junior roles and thoughtful collaborations.",
  },
  incluhubLive: "https://inclu-pilot-three.vercel.app",
  aboutPhotos: ["/media/about-a.jpg", "/media/about-b.jpg"] as const,
};

export const projects = [
  {
    slug: "student-dashboard",
    n: "01",
    title: "IncluHub Dashboard",
    image: "/media/p1.jpg",
    image2: "/media/work-1.jpg",
    blurb:
      "Role-based education ops — Admin, Educator, Student. Supabase Auth and RLS, QR check-in, admin broadcast.",
    live: "https://incluhub-dashboard-rho.vercel.app",
    repo: "https://github.com/pritamexe2k4-cmyk/inclu_dashboard",
    stack: "Next.js · TypeScript · Supabase · Vercel",
    problem:
      "Founders were creating accounts by hand and monitoring students across scattered chats and sheets.",
    body: [
      "Three portals with admin-only account creation. Auth and row-level security sit in Supabase so each role only sees its slice.",
      "QR check-in and an admin broadcast cut the daily ops loop. The live app is the proof, not a mock.",
    ],
  },
  {
    slug: "customer-support-agent",
    n: "02",
    title: "Customer Support Agent",
    image: "/media/p1.jpg",
    image2: "/media/work-1.jpg",
    blurb:
      "A LangGraph support workflow that pairs local LLM tool calling with semantic policy search and human escalation.",
    live: null,
    repo: "https://github.com/pritamexe2k4-cmyk/Project-1",
    stack: "Python · LangGraph · LangChain · Ollama · LangSmith · Docker",
    problem:
      "Support questions need fast, grounded answers, while sensitive or unresolved cases need an explicit path to a human instead of an invented answer.",
    body: [
      "The agent follows a ReAct-style LangGraph loop: it decides whether to answer directly or call tools for order status, returns, inventory, tickets, and semantic knowledge-base retrieval.",
      "It runs locally with Ollama, keeps multi-turn state through LangGraph, and includes Docker configuration plus LangSmith evaluation scenarios for checking tool use, answer quality, empathy, and actionability.",
    ],
  },
  {
    slug: "major-project",
    n: "03",
    title: "NeuroFuse Research",
    image: "/media/p3.jpg",
    image2: "/media/work-3.jpg",
    blurb: "Diffusion-based MRI and CT image fusion for brain-tumour classification research.",
    live: null,
    repo: "https://github.com/pritamexe2k4-cmyk/MAJOR-PROJECT",
    stack: "Python · Streamlit · Diffusion models · ConvNeXt-B · Medical imaging",
    problem:
      "MRI and CT scans provide different clinical information. The research explores whether fusing both modalities produces a more useful input for automated tumour classification.",
    body: [
      "A Diff-IF-based diffusion workflow creates a fused MRI/CT image, preserving complementary visual information before classification.",
      "The research code pairs the fused output with a ConvNeXt-B classifier and a Streamlit interface. It is research software, not a clinical diagnostic tool.",
    ],
  },
] as const;

export const skillsTicker = [
  "Python",
  "TypeScript",
  "SQL",
  "FastAPI",
  "scikit-learn",
  "TensorFlow",
  "Keras",
  "Next.js",
  "Supabase",
  "Docker",
  "GitHub Actions",
  "LangGraph",
  "LangSmith",
];

export const aboutAccordion = [
  {
    t: "①   Applied ML",
    d: "Python-first experimentation: data preparation, feature work, classical ML, deep-learning fundamentals, and honest evaluation.",
  },
  {
    t: "②   AI systems",
    d: "I work with retrieval, agent workflows, APIs, guardrails, and structured outputs when those components serve a real workflow.",
  },
  {
    t: "③   Product systems",
    d: "Next.js, React, TypeScript, Supabase, Docker, and GitHub Actions for practical internal tools and role-based workflows.",
  },
] as const;

export const notes = [
  {
    title: "NeuroFuse research accepted at IEEE ICCCMLA 2026",
    date: "2026",
    href: "https://github.com/pritamexe2k4-cmyk",
  },
  {
    title: "Portfolio source and résumé",
    date: "2026",
    href: "https://github.com/pritamexe2k4-cmyk/portfolio",
  },
  {
    title: "Role-based ops dashboard",
    date: "2026",
    href: "https://incluhub-dashboard-rho.vercel.app",
  },
];

export const quotes = [
  {
    text: "Led recruitment, onboarding, and volunteer operations for a campus NGO chapter, growing it from a small team into a repeatable operating rhythm.",
    name: "Street Cause",
    role: "HR Head, 2024",
  },
  {
    text: "Helped replace fragmented campaign and school-operations workflows with a CRM path and a three-role student dashboard.",
    name: "IncluHub",
    role: "AI Intern → Orchestrator, 2026",
  },
];

export const inquiries = ["Internship / full-time", "Project collab", "Referral", "Other"] as const;
