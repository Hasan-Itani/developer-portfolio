export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  contributions: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "Fekrat Al Youm Technologies",
    role: "Full-Stack Developer Intern",
    period: "May–July 2026",
    summary: "Connecting complex workflows across the stack.",
    contributions: [
      "Contributed responsive dashboards for customers, admins, restaurant owners, and yacht providers, with role-based access control.",
      "Worked on reservations, reviews, customer feedback, profiles, notifications, and user management.",
      "Integrated APIs and authentication, worked on Prisma schemas and migrations, improved media handling, resolved merge conflicts, and validated builds before deployment.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Supabase",
    ],
  },
  {
    company: "Techryt",
    role: "Frontend Developer Intern",
    period: "August 2025–January 2026",
    summary: "Turning interaction details into reusable interfaces.",
    contributions: [
      "Built and maintained responsive, reusable React, Next.js, and Tailwind CSS components.",
      "Implemented spin-and-win interface features, including interaction state and user feedback.",
      "Contributed to feature delivery and debugging, with usability improvements and responsive layout refinements.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
];
