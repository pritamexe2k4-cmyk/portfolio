export const site = {
  name: "Preetam",
  mark: "pn",
  city: "Hyderabad",
  title: "Preetam — Applied ML & AI systems builder, Hyderabad",
  email: "pritam.exe2k4@gmail.com",
  github: "https://github.com/pritamexe2k4-cmyk",
  linkedin: "https://www.linkedin.com/in/preetam-naik2k4",
  resume: "/Preetam_Naik_Resume.pdf",
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
    title: "Harry Potter Chatbot",
    image: "/media/p1.jpg",
    image2: "/media/work-1.jpg",
    blurb:
      "A Python learning project with persistent chat threads, LangGraph memory, and repeatable answer-quality evaluations.",
    live: null,
    repo: "https://github.com/pritamexe2k4-cmyk/harry_potter_project",
    stack: "Python · LangChain · LangGraph · SQLite · LangSmith",
    problem:
      "A chatbot needs to continue separate conversations, preserve useful context, and expose unreliable answers before growing into a RAG service.",
    body: [
      "Built independent saved chats with SQLite archives and LangGraph checkpoints, restart recovery, and bounded conversation summaries using GPT-4.1 mini.",
      "Added 32 offline tests and 20 synthetic evaluation scenarios. The baseline exposed spoiler-boundary and summary-retention failures that remain documented; source-grounded RAG is the next learning direction.",
      "Prepared opt-in LangSmith tracing for synthetic evaluations. Cloud delivery still requires a locally configured key; this is a local application, not a deployed multi-user service.",
    ],
  },
  {
    slug: "major-project",
    n: "03",
    title: "NeuroFuse Research",
    image: "/media/p3.jpg",
    image2: "/media/work-3.jpg",
    blurb:
      "Diffusion-based MRI and CT image fusion for brain-tumour classification research.",
    live: null,
    repo: "https://github.com/pritamexe2k4-cmyk/MAJOR-PROJECT",
    stack:
      "Python · Streamlit · Diffusion models · ConvNeXt-B · Medical imaging",
    problem:
      "MRI and CT scans provide different clinical information. The research explores whether fusing both modalities produces a more useful input for automated tumour classification.",
    body: [
      "A Diff-IF-based diffusion workflow creates a fused MRI/CT image, preserving complementary visual information before classification.",
      "The research code pairs the fused output with a ConvNeXt-B classifier and a Streamlit interface. It is research software, not a clinical diagnostic tool.",
      "The team study reported fused-image accuracy of 98.20% with ConvNeXt-B and 98.88% with ViT. CT training data included CycleGAN-generated images; these are reported research results, not a clinical validation claim.",
    ],
  },
  {
    slug: "doctor-gemma",
    n: "04",
    title: "DoctorGemma Fine-Tuning Study",
    image: "/media/p3.jpg",
    image2: "/media/work-3.jpg",
    blurb: "Studying Gemma 3 4B adaptation with LoRA and 4-bit quantization.",
    live: null,
    repo: "https://github.com/pritamexe2k4-cmyk/doctor-gemma-finetuning",
    stack: "Gemma 3 4B · Unsloth · LoRA · 4-bit quantization · TRL",
    problem:
      "Understand parameter-efficient fine-tuning and distinguish training progress from answer-quality evaluation.",
    body: [
      "Based on Atharva Taras's DoctorGemma-3. Personal extensions are in progress; the inherited notebook is credited to its original author.",
      "The reference notebook uses HealthCareMagic-100k and updates 14.9M parameters, approximately 0.35% of the model, with LoRA.",
      "Its saved 30-step run logs training loss falling from 5.9254 to 3.0142 (49.1% lower). No held-out evaluation was reported, so this does not establish improved medical answer accuracy.",
    ],
  },
] as const;

export const skillsTicker = [
  "Python",
  "SQL",
  "FastAPI",
  "scikit-learn",
  "TensorFlow",
  "Keras",
  "Supabase",
  "LangChain",
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
    d: "Python applications with LangChain, LangGraph and LangSmith, with durable local chat threads and repeatable checks. Source-grounded retrieval is the next development step.",
  },
  {
    t: "③   Product systems",
    d: "SQL, Supabase, REST APIs, GitHub Actions, n8n and Google Apps Script for practical internal tools and role-based workflows. Project technology stacks are separate from the programming languages I know: Python and SQL.",
  },
] as const;

export const notes = [
  {
    title: "NeuroFuse research accepted at IEEE ICCCMLA 2026",
    date: "2026",
    href: "https://github.com/pritamexe2k4-cmyk",
  },
  {
    title: "Portfolio source",
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

export const inquiries = [
  "Internship / full-time",
  "Project collab",
  "Referral",
  "Other",
] as const;
