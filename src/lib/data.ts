export interface Project {
  id: string;
  label: string;
  year: string;
  status: "live" | "beta" | "shipping" | "paused" | "demo";
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
    status: "paused",
    name: "Neurosiv",
    kind: "ai studio · co-founder",
    tagline:
      "AI-first engineering studio building intelligent product systems and prototypes.",
    tech: ["react", "next.js", "node"],
    metrics: [["02", "mvps"]],
  },
  {
    id: "arvora",
    label: "06",
    year: "2023",
    status: "demo",
    name: "Arvora",
    kind: "e-commerce · demo",
    tagline: "Modern e-commerce UI with reusable component architecture.",
    tech: ["next.js", "tailwind"],
    metrics: [["<1.2s", "lcp"]],
  },
];

export const STATUS_COLOR: Record<Project["status"], string> = {
  live: "green",
  shipping: "green",
  beta: "amber",
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
      "scalable web apps · react + laravel",
      "reusable ui components + backend apis across products",
      "performance + maintainability cleanups",
      "agile workflows · sprint planning · code reviews",
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
      "responsive apps with react and angular",
      "frontend features · rendering perf",
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
    bullets: ["responsive ui with html, css, vanilla js"],
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
    repo: "lynkboard/core-rs",
    msg: "feat: framing layer + transport spike",
    sha: "7d6e5f3",
  },
  {
    d: "18 apr",
    kind: "note",
    repo: "writing/",
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
  ["22 apr", "wrote", "notes on hybrid lan/cloud sync — published to /writing"],
  ["18 apr", "read", "CRDTs: The Hard Parts (Martin Kleppmann)"],
  ["12 apr", "built", "lynkboard rust core: framing layer + transport spike"],
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
