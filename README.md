# Sportik — Frontend Architecture & Backend Developer Handoff Guide

## 1. Project Overview
**Sportik** is a clean, modern, high-performance web frontend for sports tournament management in India. It enables organizers to configure single/double knockout brackets, round-robin group stages with Cricket NRR / Goal Difference tables, automated conflict-free fixture scheduling, live team draws, and real-time public tournament sharing via URLs and QR codes.

All legacy scraping residue (Next.js server-component chunks, HTTrack mirrors, redundant error pages) has been purged. The codebase is now standard **HTML5, Tailwind CSS, Google Fonts, and Vanilla JavaScript** with zero heavy runtime framework lock-in.

---

## 2. Directory Structure

```
webdevcp/
├── assets/
│   ├── css/
│   │   └── main.css                 # Global design tokens, animations & scrollbar utilities
│   ├── js/
│   │   └── main.js                  # Mobile nav toggle, toast notifications & clipboard helpers
│   └── images/
│       ├── logo.png                 # Sportik primary logo
│       ├── logo-small.png           # Compact logo icon
│       ├── apple-touch-icon.png     # iOS touch icon
│       ├── favicon-32x32.png        # Standard browser favicon
│       ├── favicon-16x16.png        # Small favicon
│       └── og-image.png             # OpenGraph social preview banner
├── features/
│   ├── fixture-scheduler.html       # Auto/manual match scheduling documentation & UI
│   ├── group-stage.html             # Round-robin & points table documentation & UI
│   ├── knockout-brackets.html       # Single & double elimination bracket generator documentation & UI
│   ├── live-draw.html               # Live team draw documentation & UI
│   └── share-tournament.html        # QR code & instant public sharing documentation & UI
├── tools/
│   ├── coin-toss.html               # Cryptographic virtual 3D coin toss tool
│   ├── picker-wheel.html            # Physics-based canvas spin-the-wheel decision picker
│   ├── random-team-generator.html   # Player list shuffling & balanced team generator
│   └── tournament-budget-calculator.html # Income vs expense calculator with break-even entry fee model
├── volleyball/
│   └── index.html                   # Dedicated Event Microsite: St. Xavier's Youth Fr. Barco Memorial Cup (Throwball 6-a-side)
├── index.html                       # Sportik main landing page & platform showcase
├── about.html                       # Company mission, story & statistics
├── contact.html                     # Contact inquiry form & organizer support
├── features.html                    # Feature overview hub
├── tools.html                       # Organizer tools hub
├── privacy.html                     # Privacy policy documentation
├── terms.html                       # Terms of service documentation
├── 404.html                         # Custom 404 error page
└── README.md                        # Backend handoff & API integration specifications
```

---

## 3. Dedicated Event Microsite (`/volleyball`)

Per requirements, the route `volleyball/index.html` hosts a dedicated, self-contained tournament microsite:
- **Event**: *Rt. Rev. Fr. Thomas Barco, SJ Memorial Throwball Tournament for Girls (6-A-Side)*
- **Presented by**: St. Xavier's Youth
- **Date**: October 4, 2026
- **Venue**: Barco Hall Ground, St. Vincent's High School Campus, Camp, Pune - 411001
- **Tournament Format**: 16 Teams • 4 Groups (A, B, C, D) • League + Knockout
- **Total Matches**: 27 Matches (24 group matches, 2 semi-finals, 1 grand final)
- **Scoring System**: Win = 1 point, Draw = 0, Loss = 0 (Throwball format)
- **Total Cash Prizes**: ₹20,000 (Winner: ₹12,000 + Trophy, Runner-Up: ₹6,000, 3rd: ₹2,000, Best Smasher & Best Defender)
- **Helplines**: 9011010654 / 8237405659
- **Interactive Components**: Real-time countdown timer, dynamic group switcher, interactive 8-team knockout bracket, and modal team registration form.

---

## 4. Backend Integration Points & API Contracts

### A. Contact Form (`contact.html`)
- **Form Element**: `<form id="contact-form" action="/api/contact" method="POST">`
- **Payload Fields**:
  ```json
  {
    "name": "string (required)",
    "email": "string (email, required)",
    "organization": "string (optional)",
    "message": "string (required)"
  }
  ```
- **Response**: `200 OK` `{ "success": true, "message": "Message received" }`

### B. Throwball Tournament Team Registration (`volleyball/index.html`)
- **Trigger**: "Register Team" buttons open the client modal (`#regModal`).
- **Form Element**: Form in modal ready for `POST /api/tournaments/barco-cup/register`.
- **Payload Fields**:
  ```json
  {
    "teamName": "string (required)",
    "captainName": "string (required)",
    "captainPhone": "string (10-digit phone, required)",
    "captainEmail": "string (optional)",
    "playerCount": "number (default: 6, max: 9)",
    "churchOrCollege": "string (parish/institution name)"
  }
  ```

### C. Live Tournament Engine APIs
Backend developers can easily feed data into the template views using these suggested endpoints:
- `GET /api/tournaments/:id/groups` — Returns group standings (Played, Won, Lost, Drawn, Points).
- `GET /api/tournaments/:id/fixtures` — Returns match schedule, ground allocations, and live score states.
- `POST /api/matches/:id/score` — Organizer score updates that broadcast via WebSocket / Server-Sent Events.

---

## 5. Free Tools Specifications (Client-Side Logic)
All tools in `tools/` run self-contained vanilla JavaScript with zero server dependencies, but can optionally persist state:
1. **Virtual Coin Toss (`tools/coin-toss.html`)**:
   - Uses `window.crypto.getRandomValues()` for unbiased 50/50 probability.
   - Includes 3D CSS transform flip physics and flip counters.
2. **Picker Wheel (`tools/picker-wheel.html`)**:
   - High-DPI HTML5 Canvas renderer with physics deceleration algorithm.
   - Textarea input for dynamic custom lists and winner-elimination option.
3. **Random Team Generator (`tools/random-team-generator.html`)**:
   - Implements Fisher-Yates shuffle algorithm.
   - Splits rosters evenly across 2 to 8 teams with custom naming schemes.
4. **Tournament Budget Calculator (`tools/tournament-budget-calculator.html`)**:
   - Live reactive income/expense model with contingency reserve and break-even team fee calculations.

---

## 6. How to Run Locally

### Using Any Local Web Server
```bash
# Python 3
python -m http.server 8000

# Node.js (npx serve)
npx serve .

# PHP
php -S localhost:8000
```
Open your browser to `http://localhost:8000/`.
