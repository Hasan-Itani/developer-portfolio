export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  alt: string;
  contribution: string;
  limitation: string;
}

export interface ProjectMedia {
  featured: ProjectImage;
  previews: { label: string; image: ProjectImage }[];
  gallery: ProjectImage[];
  note: string;
}

const hotelPath = "/images/projects/hotel-reservation-system/";
const gamePath = "/images/projects/zero-last-directive/";

const hotelGallery: ProjectImage[] = [
  {
    src: `${hotelPath}hotel-overview-desktop.png`,
    width: 1440,
    height: 1000,
    title: "A clear starting point",
    caption:
      "Grand Plaza Beirut’s property page brings the starting rate, room inventory, and availability entry point together.",
    alt: "Grand Plaza Beirut overview with a guest room photo, a $90 starting rate, and a Check Availability button.",
    contribution:
      "Public hotel detail experience, property navigation, and summaries derived from room types and inventory.",
    limitation:
      "Hotel details and rates are seeded demo data. The room photo is placeholder imagery within the application.",
  },
  {
    src: `${hotelPath}room-availability-desktop.png`,
    width: 1440,
    height: 1000,
    title: "Availability before commitment",
    caption:
      "A live search for two adults returns three available room types for a three-night stay.",
    alt: "Availability search for December 5–8, 2026, showing three room types and two Standard Queen rooms at $90 per night.",
    contribution:
      "Stay-date and guest-count search, room availability cards, and booking handoff through the NestJS API against PostgreSQL inventory.",
    limitation:
      "This viewport shows the first room result; further results continue below it.",
  },
  {
    src: `${hotelPath}booking-review-desktop.png`,
    width: 1440,
    height: 1000,
    title: "Review the stay",
    caption:
      "A signed-in guest reviews contact details, a room request, and the estimated cost of a three-night Deluxe King stay.",
    alt: "Guest booking form beside a Deluxe King stay summary with three nights and a $360 estimated subtotal.",
    contribution:
      "Authenticated booking with an account-linked email, server-side pricing, and an inventory recheck inside the booking transaction.",
    limitation:
      "This is the review step. Blank phone or special-request fields caused validation failures during capture; both are populated with fictional values here.",
  },
  {
    src: `${hotelPath}guest-reservations-mobile.png`,
    width: 390,
    height: 844,
    title: "The guest’s next step",
    caption:
      "The newly created reservation appears in the guest’s mobile account with its actual Pending status.",
    alt: "Mobile My Reservations page showing a pending Grand Plaza Beirut stay, $360 due, and a View Details button.",
    contribution:
      "Authenticated reservation history, account-linked bookings, status and balance summaries, and links to reservation details and the demo payment flow.",
    limitation:
      "The header tagline truncates at this width. Live online payment processing remains on the roadmap.",
  },
  {
    src: `${hotelPath}staff-reservations-desktop.png`,
    width: 1440,
    height: 1000,
    title: "The same booking, staff side",
    caption:
      "A hotel administrator filters four demo reservations and opens the booking created through the guest flow.",
    alt: "Staff reservations console with status and date filters, four reservations, and a selected pending $360 stay.",
    contribution:
      "Hotel-scoped staff access, reservation filtering, and a detail panel for stay information, pricing, and status history.",
    limitation:
      "The application’s reservation table scrolls horizontally at this viewport, so some columns are outside the capture.",
  },
  {
    src: `${hotelPath}staff-audit-desktop.png`,
    width: 1440,
    height: 1000,
    title: "Changes leave a trail",
    caption:
      "The audit trail records reservation creation and a separate confirmation performed by the demo staff account.",
    alt: "Staff audit page with activity filters, reservation creation and confirmation events, and a selected event’s actor and timestamp.",
    contribution:
      "Audit activity filters and a staff-facing event detail view, including the actor and recorded reservation changes.",
    limitation:
      "This shows the latest matching activity. Additional details for the selected event continue below the viewport.",
  },
];

const gameGallery: ProjectImage[] = [
  {
    src: `${gamePath}blackout-day-civic-crossing-combat.png`,
    width: 1280,
    height: 720,
    title: "Combat at Civic Crossing",
    caption:
      "Agent Zero fires on a patrol robot during the first wave at Ashford’s Civic Crossing.",
    alt: "A top-down soldier fires across a ruined intersection toward a red robot. The HUD shows wave one of three.",
    contribution:
      "Wave scheduling, remaining-enemy counts, automatic target selection, directional fire, and the health HUD.",
    limitation:
      "The HUD reports two remaining enemies; one is visible in the camera view.",
  },
  {
    src: `${gamePath}signal-warden-rotating-lasers.png`,
    width: 1280,
    height: 720,
    title: "The Signal Warden",
    caption:
      "Three rotating lasers sweep the transmission deck while the Signal Warden draws power from two shield feeds.",
    alt: "A triangular machine emits three blue beams. A cyan shield ring surrounds it, and an orange-marked transmitter sits at lower right.",
    contribution:
      "Phase-based boss shielding linked to destructible transmitter pairs, rotating beam attacks, and HUD prompts tied to the active attack.",
    limitation:
      "This is the first shield phase. One targetable transmitter is visible; the other is outside the camera view.",
  },
  {
    src: `${gamePath}foundry-titan-mission-briefing.png`,
    width: 1280,
    height: 720,
    title: "Progression shapes deployment",
    caption:
      "The Foundry Titan briefing previews the casting floor, with Medium ready to deploy after the Easy clear.",
    alt: "Mission 24 briefing with an arena preview, Medium selected, and requirements for locked Hard and Impossible options.",
    contribution:
      "Mission-driven briefing metadata and arena previews, with deployment difficulty gated by saved clears.",
    limitation:
      "Recommended upgrades continue below the scroll area; the Deploy button remains visible.",
  },
  {
    src: `${gamePath}foundry-titan-cutter-sweep.png`,
    width: 1280,
    height: 720,
    title: "Telegraph the threat",
    caption:
      "The Foundry Titan signals a cutter sweep while molten residue burns across the casting floor.",
    alt: "An industrial robot with a circular saw towers over the player inside an amber warning fan and above a bright molten trail.",
    contribution:
      "Boss attack sequencing, a fan-shaped attack warning, persistent molten hazards, and phase and health readouts.",
    limitation:
      "The warning fan extends beyond the camera. This frame shows phase one.",
  },
  {
    src: `${gamePath}breakwater-refused-berth-combat.png`,
    width: 1280,
    height: 720,
    title: "An approach to clear",
    caption:
      "Agent Zero fights the approach guards with the Rivet Lance on the quay below the customs kiosk.",
    alt: "A top-down soldier aims at a red robot on a concrete quay. An amber ring marks the customs kiosk beside the harbor.",
    contribution:
      "A charge-and-release weapon, patrol arrivals, and staged objectives requiring the approach to be cleared before authorization.",
    limitation:
      "Authorization remains pending in this local development capture.",
  },
  {
    src: `${gamePath}ashford-armory-armor-upgrade.png`,
    width: 1280,
    height: 720,
    title: "Progress that persists",
    caption:
      "The Ashford Armory confirms an armor purchase, raising plating to rank 22 and armor to 166.",
    alt: "The Armory shows armor at rank 22, 1,780 credits remaining, and a purchase confirmation below the upgrade cards.",
    contribution:
      "Mission-based rank unlocks, credit spending, and immediate updates to rank, stats, and available credits.",
    limitation:
      "Lower upgrade cards continue below the fold. The demo save has not unlocked the Breakwater Armory.",
  },
];

export const hotelMedia: ProjectMedia = {
  featured: hotelGallery[0],
  previews: [
    { label: "Hotel overview", image: hotelGallery[0] },
    { label: "Availability", image: hotelGallery[1] },
    { label: "Staff console", image: hotelGallery[4] },
  ],
  gallery: hotelGallery,
  note: "Captured from the running application with fictional hotel, guest, and staff data in an isolated demo database. Property photography is placeholder content inside the application.",
};

export const gameMedia: ProjectMedia = {
  featured: gameGallery[1],
  previews: [
    { label: "Signal Warden", image: gameGallery[1] },
    { label: "Foundry Titan", image: gameGallery[3] },
    { label: "Progression", image: gameGallery[5] },
  ],
  gallery: gameGallery,
  note: "Unedited captures of the running Windows Godot development build at 1280 × 720. An isolated offline demo save supplies progression and credits. These are development captures, not Android device screenshots.",
};
