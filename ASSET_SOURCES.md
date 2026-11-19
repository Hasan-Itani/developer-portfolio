# Project capture sources — 19 November 2026

The user supplied both capture reports and local manifest paths for portfolio integration. The twelve PNGs were copied unchanged into this repository. Source project files were read only; no hotel or game code was edited during integration.

## Hotel Reservation System

Source: the `portfolio-assets/MANIFEST.md` and six PNGs in the user's Hotel Reservation System checkout.

The manifest describes direct captures from the running Next.js app, NestJS API, and isolated seeded PostgreSQL database. All names, contact details, reservation identifiers, and staff events are fictional demo data. The application's room photography is placeholder content. Dimensions: five 1440 × 1000 desktop images and one 390 × 844 mobile image.

Gallery order and repository evidence supplied by the capture manifest:

| Original filename              | Contribution evidence           |
| ------------------------------ | ------------------------------- |
| hotel-overview-desktop.png     | `de96c4b`, `f556ef9`            |
| room-availability-desktop.png  | `43da2fc`, `77af9c3`            |
| booking-review-desktop.png     | `1b59c2e`, `f2d2c11`, `e22c935` |
| guest-reservations-mobile.png  | `1b59c2e`, `f56c15c`            |
| staff-reservations-desktop.png | `1b59c2e`, `544c1da`, `4d5765a` |
| staff-audit-desktop.png        | `06ee874`, `402cdf4`, `16ad2e1` |

The capture session reported a created booking visible to both guest and staff, a separate staff confirmation in the audit log, and a passing hotel production build. These results are attributed to that session. The gallery integration did not independently execute the hotel application or its test suite.

Known issues from the capture report remain explicit in the case study: blank phone or special-request fields fail booking validation, and the success message says confirmed while a newly created reservation remains Pending. Live online payment processing remains planned. The gallery uses the review step and actual Pending status.

## ZERO: LAST DIRECTIVE

Source: the `portfolio-assets/manifest.md` and six PNGs in the user's Godot project checkout. The manifest explicitly identifies the game as ZERO: LAST DIRECTIVE despite the checkout's earlier directory name.

All six images are unedited 1280 × 720 captures of the running Windows Godot development build. An isolated offline save supplies demo progression and credits; ordinary game input paths were used. Three gameplay captures use the game's built-in handheld camera zoom. These are not Android-device or public-release screenshots.

| Original filename                      | Source scripts identified by the manifest            |
| -------------------------------------- | ---------------------------------------------------- |
| blackout-day-civic-crossing-combat.png | enemy_spawner.gd, player.gd, game_ui.gd              |
| signal-warden-rotating-lasers.png      | signal_warden.gd, warden_transmitter.gd              |
| foundry-titan-mission-briefing.png     | main_menu.gd, mission_map_preview.gd, progression.gd |
| foundry-titan-cutter-sweep.png         | foundry_titan.gd                                     |
| breakwater-refused-berth-combat.png    | rivet_player.gd, breakwater_objective.gd             |
| ashford-armory-armor-upgrade.png       | main_menu.gd, progression.gd                         |

The Signal Warden encounter is the featured image. The manifest's gallery sequence is preserved. Descriptions and limitations are editable in `src/content/project-media.ts`.
