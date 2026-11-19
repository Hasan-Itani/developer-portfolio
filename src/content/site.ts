export const site = {
  name: "Hasan Itani",
  role: "Full-Stack Software Engineer",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://dev.itanigames.com"),
  email: "itanihasan64@gmail.com",
  github: "https://github.com/Hasan-Itani",
  linkedin: "https://www.linkedin.com/in/hasan-itani-6bb203268/",
  description:
    "Full-stack software engineer in Lebanon. Thoughtful web products, interactive experiences, and the engineering behind them.",
  intro: "I build thoughtful web products and interactive experiences.",
  about:
    "I’m a full-stack software engineer and game developer based in Lebanon. My work moves between web applications and interactive systems: different mediums, with the same attention to how things work and how they feel.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Lebanese International University",
    date: "February 2025",
  },
};

export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`;

export const capabilities = [
  {
    title: "Interfaces with intent",
    category: "Frontend",
    text: "Responsive React and Next.js interfaces, reusable components, and explicit interaction states. Practiced across both internships and the hotel application.",
    tools: "React / Next.js / TypeScript / Tailwind CSS",
  },
  {
    title: "Behind the interface",
    category: "Backend & data",
    text: "APIs, authentication, role-based workflows, and relational data. Hands-on contributions to NestJS integrations and Prisma schema migrations at Fekrat Al Youm.",
    tools: "NestJS / PostgreSQL / Prisma / Supabase",
  },
  {
    title: "Systems that respond",
    category: "Interactive development",
    text: "Gameplay, enemy AI, progression, and save systems in ZERO. Interaction state and user feedback in Techryt’s spin-and-win interface.",
    tools: "Godot 4 / GDScript / State handling / Profiling",
  },
];

// Omitted from public claims until examples and source assets are supplied.
export const pendingContent = [
  {
    title: "ZERO Google Play pre-registration link",
    href: "https://play.google.com/store/apps/details?id=com.blackout.protocol",
    needsReview: true,
    reason: "User supplied the package URL, but Google Play returned Not Found during verification. Keep the confirmed pre-registration status; publish the store CTA only after the listing is accessible.",
  },
  {
    title: "Apples & Worms",
    needsReview: true,
    reason: "Repository and completed feature scope need verification.",
  },
  {
    title: "PHP/MySQL hotel prototype",
    needsReview: true,
    reason: "Source and screenshots needed before adding an archive entry.",
  },
  {
    title: "AI-assisted engineering",
    needsReview: true,
    reason:
      "Specific workflow examples need confirmation before claiming professional practice.",
  },
  {
    title: "Résumé",
    needsReview: true,
    reason: "No downloadable résumé file supplied.",
  },
];
