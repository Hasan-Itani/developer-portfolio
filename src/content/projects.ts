import { hotelMedia, gameMedia, type ProjectMedia } from "./project-media";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  role: string;
  status: "In progress" | "Pre-registration";
  summary: string;
  focus: string;
  overview: { label: string; text: string }[];
  tech: string[];
  featured: boolean;
  needsReview: boolean;
  visual: "hotel" | "zero";
  media: ProjectMedia;
  links: { label: string; href: string }[];
  caseStudy: { heading: string; body: string[] }[];
}

export const projects: Project[] = [
  {
    slug: "hotel-reservation-system",
    title: "Hotel Reservation System",
    shortTitle: "A stay, thoughtfully engineered.",
    category: "Full-stack web application",
    role: "Full-stack development",
    status: "In progress",
    summary:
      "From finding a room to managing a reservation. A full-stack application connecting the guest experience with hotel operations.",
    focus:
      "Guest booking, administrative workflows, and the reliability work behind them.",
    overview: [
      {
        label: "The challenge",
        text: "Keep guest booking and hotel operations consistent around shared inventory.",
      },
      {
        label: "My contribution",
        text: "Full-stack guest and staff workflows, availability, transactional booking, and audit views.",
      },
      {
        label: "Evidence",
        text: "A demo reservation followed from guest checkout to staff console; separate confirmation recorded in the audit trail.",
      },
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    featured: true,
    needsReview: false,
    visual: "hotel",
    media: hotelMedia,
    links: [
      {
        label: "Explore source",
        href: "https://github.com/Hasan-Itani/hotel-reservation-system",
      },
    ],
    caseStudy: [
      {
        heading: "Context",
        body: [
          "A personal full-stack application bringing guest reservations and hotel administration into one system. The project remains in progress as it develops beyond its initial booking and admin workflows.",
        ],
      },
      {
        heading: "The problem",
        body: [
          "Booking is more than a form. A guest needs to find availability, identify themselves, and understand their reservation. Staff need a consistent view of rooms, guests, payments, and reservation changes. Those workflows share data and need clear boundaries.",
        ],
      },
      {
        heading: "My role",
        body: [
          "My focus is full-stack development: the Next.js and React interface, TypeScript application logic, and PostgreSQL data modeled with Prisma. The scope includes guest accounts and booking alongside room, reservation, guest, payment, inquiry, staff, and audit-log administration.",
        ],
      },
      {
        heading: "Approach & architecture",
        body: [
          "Next.js App Router provides the web application structure. React and Tailwind CSS support the interface, with Prisma connecting application workflows to PostgreSQL. The public repository documents a functional guest booking flow and admin panel, with ongoing authentication hardening.",
          "Account flows cover registration, login, email verification, and password reset in the documented project scope. Transactional emails connect those account actions to the guest experience. These are development features, not a claim of a deployed production service.",
        ],
      },
      {
        heading: "Challenges & decisions",
        body: [
          "Reservation availability is a shared-data problem: concurrent requests can compete for the same room. The project scope addresses reservation concurrency safeguards rather than relying only on an interface availability check.",
          "Authentication also needs more than successful login. Account lockout, rate limiting, secure sessions, and audit logs are part of the security work. Authentication hardening remains ongoing; this case study makes no independent security certification claim.",
        ],
      },
      {
        heading: "Result & verification",
        body: [
          "In progress. During the supplied screenshot capture, a demo reservation was created through the guest form and found in both the guest account and staff console. A separate staff confirmation appeared in the audit trail, and the hotel project’s production build passed. These are results from the capture session; the hotel application was not independently rerun while integrating this gallery.",
          "The capture also exposed two issues: empty phone or special-request fields fail booking validation, and the success screen says ‘Reservation confirmed’ even though a new reservation is Pending. The gallery shows the review step and actual Pending status. Live online payment processing remains on the roadmap.",
        ],
      },
    ],
  },
  {
    slug: "zero-last-directive",
    title: "ZERO: LAST DIRECTIVE",
    shortTitle: "Every system serves the action.",
    category: "Android action game",
    role: "Game development & testing",
    status: "Pre-registration",
    summary:
      "A 2D action game built in Godot. Gameplay, enemy AI, progression, and testing brought together across 40 missions and five chapters.",
    focus:
      "Gameplay systems, performance profiling, and iteration from tester feedback.",
    overview: [
      {
        label: "The challenge",
        text: "Keep combat, enemy behavior, difficulty, and persistent progression working together.",
      },
      {
        label: "My contribution",
        text: "Gameplay systems, boss mechanics, progression, save logic, profiling, and regression testing.",
      },
      {
        label: "Current stage",
        text: "Pre-registration. Actual development captures show combat, mission selection, and an Armory purchase.",
      },
    ],
    tech: ["Godot 4", "GDScript", "Android", "Google Play Console"],
    featured: true,
    needsReview: false,
    visual: "zero",
    media: gameMedia,
    links: [{ label: "Game website", href: "https://itanigames.com" }],
    caseStudy: [
      {
        heading: "Context",
        body: [
          "ZERO: LAST DIRECTIVE is a 2D Android action game built with Godot 4 and GDScript. The game is currently in pre-registration, ahead of its public release.",
        ],
      },
      {
        heading: "The problem",
        body: [
          "An action game has to remain coherent across combat, enemy behavior, progression, and persistence. With 40 missions across five chapters and four difficulty levels, changes to a shared system can affect many parts of the experience.",
        ],
      },
      {
        heading: "My role",
        body: [
          "I developed the game’s gameplay systems, including enemy AI, upgrades, difficulty settings, and save systems. My work also includes gameplay regression testing, debugging, and fixes driven by testers’ feedback.",
        ],
      },
      {
        heading: "Build approach",
        body: [
          "Godot 4 provides the 2D game engine, with GDScript used for gameplay behavior. Missions, enemies, progression, and saved state form the core systems of the experience.",
          "The gallery shows actual combat, boss encounters, mission difficulty selection, and an Armory purchase captured from the running Windows Godot development build. An isolated offline save provided the demo progression and credits. These are development captures, not screenshots from an Android device.",
        ],
      },
      {
        heading: "Challenges & decisions",
        body: [
          "Changes to difficulty, upgrades, or enemy behavior require checking how they affect existing gameplay. Regression testing is part of the development process, alongside reproducing issues reported by testers.",
          "Frame-rate and CPU-time profiling help investigate runtime behavior. Performance work is described as a development practice here; no unmeasured frame-rate target or benchmark is claimed.",
        ],
      },
      {
        heading: "Result & verification",
        body: [
          "Pre-registration. The game includes 40 missions across five chapters, four difficulty levels, enemy AI, upgrades, and save systems. Gameplay regression testing, frame-rate and CPU-time profiling, and tester feedback have informed debugging and fixes ahead of release.",
        ],
      },
    ],
  },
];
