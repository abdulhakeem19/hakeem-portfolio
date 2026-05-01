export interface Project {
  id: string;
  label: string;
  year: string;
  status: "live" | "beta" | "shipping" | "active" | "paused" | "demo";
  name: string;
  kind: string;
  tagline: string;
  tech: string[];
  metrics: [string, string][];
}

export const ALL_PROJECTS: Project[] = [
  {
    id: "privachat",
    label: "01",
    year: "2025",
    status: "live",
    name: "PrivaChat",
    kind: "mobile · real-time · security",
    tagline:
      "Secure messaging & voice call platform where all communication stays within the system — enforced technically, not just by policy.",
    tech: ["react native", "expo sdk 54", "node.js", "websockets", "webrtc", "postgres"],
    metrics: [["<80ms", "p95 delivery"], ["12K+", "msgs/day"], ["100%", "gated calls"]],
  },
  {
    id: "lynkboard",
    label: "02",
    year: "2024",
    status: "beta",
    name: "Lynkboard",
    kind: "macOS · iOS · sync",
    tagline:
      "Cross-device clipboard manager with end-to-end encryption and hybrid LAN/cloud sync. Copy on Mac, paste on iPhone in under 1 second.",
    tech: ["swift 5.9", "swiftui", "supabase", "cryptokit", "grdb", "multipeer"],
    metrics: [["<1s", "lan sync"], ["e2ee", "chacha20poly"], ["curve25519", "key exchange"]],
  },
  {
    id: "maccleaner",
    label: "03",
    year: "2024",
    status: "shipping",
    name: "Mac Cleaner Pro",
    kind: "macOS · indie · pay-once",
    tagline:
      "Native macOS disk cleaner that breaks down Apple's opaque System Data bucket — 14 parallel scan rules, staged deletion, zero telemetry.",
    tech: ["swift 5.9", "swiftui", "xpc daemon", "next.js", "tailwind 4"],
    metrics: [["24.6GB", "avg reclaimed"], ["14", "scan rules"], ["$39", "pay-once"]],
  },
  {
    id: "tradeslynk",
    label: "04",
    year: "2023",
    status: "live",
    name: "TradesLynk",
    kind: "b2b · marketplace · co-founder",
    tagline:
      "International trade marketplace connecting manufacturers and exporters with buyers across 82 countries — removing traditional intermediaries.",
    tech: ["laravel 12", "php 8.2", "tailwind 4", "three.js", "mysql"],
    metrics: [["82", "countries"], ["35", "db models"], ["58", "migrations"]],
  },
  {
    id: "neurosiv",
    label: "05",
    year: "2023",
    status: "active",
    name: "Neurosiv",
    kind: "ai studio · co-founder",
    tagline:
      "AI-first innovation studio — architecting the intelligent future. 4+ clients, 2 live AI products, 8 service lines.",
    tech: ["react", "typescript", "vite", "gsap", "tailwind", "openai"],
    metrics: [["4+", "clients"], ["99%", "satisfaction"], ["2", "live products"]],
  },
  {
    id: "arvora",
    label: "06",
    year: "2024",
    status: "demo",
    name: "Arvora",
    kind: "e-commerce · full-stack",
    tagline:
      "Production-grade e-commerce platform — real Razorpay/Stripe payments, admin dashboard with Recharts analytics, and a 7-state order lifecycle.",
    tech: ["next.js 16", "supabase", "zustand", "razorpay", "stripe", "tailwind v4"],
    metrics: [["7", "order states"], ["3", "payment gateways"], ["<1.2s", "lcp"]],
  },
  {
    id: "costos",
    label: "07",
    year: "2024",
    status: "active",
    name: "Costos",
    kind: "internal tool · startup ops",
    tagline:
      "Internal finance & operations dashboard for early-stage startups — expense tracking, client pipeline, founder P&L, and role-based access.",
    tech: ["react 18", "vite", "supabase", "recharts", "tailwind"],
    metrics: [["9", "modules"], ["rbac", "auth"], ["0", "spreadsheets"]],
  },
];

export const STATUS_COLOR: Record<Project["status"], string> = {
  live: "green",
  shipping: "green",
  beta: "amber",
  active: "amber",
  paused: "",
  demo: "",
};

export const ROLES = [
  {
    year: "nov 2023 — now",
    dur: "2.5 yr",
    role: "software developer",
    org: "Onexfort",
    where: "chennai",
    current: true,
    bullets: [
      "build and maintain scalable React + Laravel applications",
      "ship reusable UI components and backend APIs across products",
      "improve performance, code quality, and long-term maintainability",
      "contribute to sprint planning, reviews, and agile delivery",
    ],
    tech: ["react", "laravel", "postgres", "typescript"],
  },
  {
    year: "nov 2022 — apr 2023",
    dur: "6 mo",
    role: "associate engineer · intern",
    org: "Highrises",
    where: "remote",
    current: false,
    bullets: [
      "built responsive product interfaces with React and Angular",
      "implemented frontend features with attention to rendering performance",
    ],
    tech: ["react", "angular", "js"],
  },
  {
    year: "aug 2022 — nov 2022",
    dur: "4 mo",
    role: "ui developer · intern",
    org: "Igonsoft",
    where: "chennai",
    current: false,
    bullets: ["created responsive interfaces with HTML, CSS, and vanilla JavaScript"],
    tech: ["html", "css", "js"],
  },
];

export const HOME_ACTIVITY = [
  {
    d: "26 apr",
    kind: "shipped",
    repo: "privachat/ios",
    msg: "fix: approval race condition on background restore",
    sha: "a4f2e91",
  },
  {
    d: "22 apr",
    kind: "commit",
    repo: "lynkboard/sync",
    msg: "feat: framing layer + transport spike",
    sha: "7d6e5f3",
  },
  {
    d: "18 apr",
    kind: "note",
    repo: "notes/",
    msg: "notes on hybrid lan/cloud sync",
    sha: "e7f6a5b",
  },
  {
    d: "12 apr",
    kind: "release",
    repo: "maccleaner",
    msg: "v2.4.0 — smart scan v2 + activity log undo",
    sha: "4c3d2e1",
  },
  {
    d: "05 apr",
    kind: "talk",
    repo: "onexfort/internal",
    msg: "real-time architectures · brown bag",
    sha: "8e7f6a5",
  },
];

export const NOW_ACTIVITY = [
  ["26 apr", "shipped", "privachat 1.2.4 — fixed approval race condition on iOS background restore"],
  ["22 apr", "wrote", "notes on hybrid lan/cloud sync"],
  ["18 apr", "read", "CRDTs: The Hard Parts (Martin Kleppmann)"],
  ["12 apr", "built", "lynkboard 2.0 — sync layer: framing layer + transport spike"],
  ["05 apr", "talked", "internal onexfort tech talk on real-time architectures"],
  ["28 mar", "started", "lynkboard 2.0 planning. architecture doc drafted"],
] as const;

export const TECH_TICKER = [
  "react", "next.js", "typescript", "react native", "swiftui", "swift",
  "node.js", "laravel", "postgres", "supabase", "tailwind", "framer motion",
  "webrtc", "cryptokit", "rust", "expo",
];

export const PRINCIPLES = [
  {
    n: "00",
    t: "system design first",
    d: "architecture before pixels. every feature is a contract — auth, sync, storage, failure modes.",
    icon: "◇",
  },
  {
    n: "01",
    t: "clean architecture",
    d: "domain logic in shared packages. ui is a thin layer over well-defined behavior.",
    icon: "◈",
  },
  {
    n: "02",
    t: "real-time native",
    d: "websockets, supabase realtime, multipeer. latency budgets are non-negotiable.",
    icon: "◉",
  },
  {
    n: "03",
    t: "ship the boring parts",
    d: "onboarding, settings, error states, undo. polish is what users remember.",
    icon: "◐",
  },
];
