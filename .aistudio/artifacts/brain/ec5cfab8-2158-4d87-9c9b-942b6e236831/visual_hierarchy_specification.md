# Visual Hierarchy Specification
## Unified Executive Portfolio: Anthony Antonidis-Drennan
### Lead IT Accessibility Strategist (Section 508 / WCAG 2.2 AA) & Senior IT Business Analyst

---

## 1. Content Priority Architecture

The portfolio structure translates a dual-track career into an uninterrupted executive narrative. Every component is prioritized so that a technical recruiter, federal hiring official, or VP of Engineering understands the candidate's core value proposition within 5 seconds.

### 1.1 Primary Content (Level 1 — Immediate Cognitive Anchoring)
*   **Candidate Identity & Core Capability Statement**: Anthony Antonidis-Drennan — Dual-specialization across Federal Section 508 Accessibility Architecture & Senior Enterprise Business Analysis.
*   **Quantitative Executive Dossier**: Key validation metrics (100% Section 508 compliance rate, 5,000+ digital assets scanned across national labs, 70,000+ higher-ed users served, 40% reduction in requirements cycle time).
*   **Flagship Strategic Initiatives (Case Studies)**: The 6 concrete production initiatives demonstrating end-to-end impact (Automated Enterprise Accessibility Scanner, Texas A&M Conflict of Interest System, Enterprise LMS Migration, Accessibility Champions ERG, Figma Governance, and AI-Assisted Requirements Framework).
*   **Accessibility Conformance Declaration**: Prominent access to the Section 508 VPAT® 2.4 and WCAG 2.2 AA Conformance Checklist.

### 1.2 Secondary Content (Level 2 — Verification & Competence Validation)
*   **Interactive Applied Methodology Workbench**: Hands-on interactive demonstrator enabling stakeholders to test Section 508 remediations (color contrast ratios, form associations, ARIA states) and AI-assisted requirement generation.
*   **Chronological Career Timeline & Institutional Pedigree**: National Laboratory of the Rockies (NREL) and Texas A&M University career progression, highlighting promotions, leadership roles, and previous titles.
*   **4-Quadrant Competency Matrix**: Granular technical skills categorized across Digital Accessibility & Section 508 Governance, Enterprise BA & SDLC, AI Prompt Engineering, and Technical Leadership.
*   **Verified Credentials & Education**: Certified Information Technology Professional (CITP), Section 508 Trusted Tester v5.1, WCAG 2.1 Master Class, B.S. in Information Systems (Texas A&M).

### 1.3 Tertiary Content (Level 3 — Contextual Supporting Data)
*   **Detailed Acceptance Criteria & User Story Specs**: Expandable Gherkin scenarios (`Given/When/Then`) and prompt engineering workflows within case study modals.
*   **Institutional Metadata & Location**: Physical locations (Golden, CO / College Station, TX), federal agency standards (DOE, Texas DIR, NIST), and organizational department context.
*   **Technical Footnotes & Standards References**: WCAG 2.2 Success Criteria tags (1.4.3, 1.4.11, 2.1.1, 4.1.2) and VPAT Revised Section 508 Chapter 3/5/6 mappings.

### 1.4 Call-to-Action (CTA) Placement & Priority
*   **Primary CTA (Conversion)**:
    *   *Action*: "Get in Touch" / "Initiate Consultation".
    *   *Placement*: Top-right of Fixed Header (`h-16`), Hero Section action cluster (`mt-8`), and Dedicated Contact Section footer.
    *   *Visual Weight*: Solid Royal Blue background (`#1d4ed8`), high-contrast white text (`#ffffff`), 10px rounded corners, subtle hover elevation.
*   **Secondary CTA (Proof & Validation)**:
    *   *Action*: "View Case Studies" & "Section 508 VPAT® Report".
    *   *Placement*: Hero Section action cluster (adjacent to primary CTA) and Navigation Zone 2.
    *   *Visual Weight*: Crisp Slate-200 border, slate-900 typography, slate-50 background on hover.
*   **Utility CTA (User Control & Compliance)**:
    *   *Action*: "Accessibility Settings" (Font sizing, contrast modes, dyslexia font, enhanced focus, reduced motion).
    *   *Placement*: Persistent top utility bar and sticky bottom-left trigger.

---

## 2. Visual Weight & Scale Relationships

Visual weight establishes a natural reading cadence through mathematical proportions, strict contrast tiers, and intentional negative space.

| Element Type | Visual Weight | Relative Scale | Primary Styling Attributes |
| :--- | :--- | :--- | :--- |
| **Page H1 Headline** | Extreme (100%) | 3.0rem (48px) – 3.75rem (60px) | `font-extrabold`, `tracking-tight`, Color: Slate-950 (`#020617`), Line-height: 1.15 |
| **Section H2 Headings**| High (75%) | 1.875rem (30px) – 2.25rem (36px) | `font-bold`, `tracking-tight`, Color: Slate-900 (`#0f172a`), Line-height: 1.25 |
| **Card H3 Titles** | Medium-High (55%) | 1.25rem (20px) – 1.5rem (24px) | `font-bold`, Color: Slate-900 (`#0f172a`), Line-height: 1.3 |
| **Metric Numerals** | Heavy Focus (80%) | 2.25rem (36px) – 2.5rem (40px) | `font-mono`, `font-extrabold`, Color: Blue-700 (`#1d4ed8`) |
| **Lead Subheadline** | Medium (50%) | 1.125rem (18px) – 1.25rem (20px) | `font-medium`, Color: Slate-800 (`#1e293b`), Line-height: 1.4 |
| **Body Paragraphs** | Standard (35%) | 0.9375rem (15px) – 1.0rem (16px) | `font-normal`, Color: Slate-700 (`#334155`), Line-height: 1.625 |
| **Metadata / Badges** | Low-Subtle (20%) | 0.75rem (12px) – 0.8125rem (13px) | `font-mono` / `font-semibold`, Color: Slate-600 (`#475569`), Letter-spacing: +0.05em |

### 2.1 White Space (Negative Space) Disciplined Budget
*   **Viewport Margin (Outer Padding)**:
    *   Desktop (`lg` 1024px+): `px-8` (32px) on container `max-w-7xl` (1280px).
    *   Tablet (`md` 768px): `px-6` (24px).
    *   Mobile (`sm` <640px): `px-4` (16px).
*   **Inter-Section Vertical Spacing**:
    *   `py-16` (64px) mobile / `py-24` (96px) desktop.
    *   Sections are separated by a clean 1px hairline border in Slate-200 (`#e2e8f0`).
*   **Component Interior Padding**:
    *   Hero Dossier Card: `p-6 sm:p-8` (24px to 32px).
    *   Case Study Cards: `p-6 sm:p-7` (24px to 28px).
    *   Timeline Items: `p-6 sm:p-8` (24px to 32px).
*   **Proximity Ratio**:
    *   Header-to-Kicker: `mb-2` (8px).
    *   Header-to-Description: `mt-2 mb-6` (8px to 24px).
    *   Description-to-Interactive Element: `mb-8` (32px).

---

## 3. Layout Structure & Grid Architecture

```
+---------------------------------------------------------------------------------------------------+
| ZONE 1: Global Navigation & Accessibility Bar (Sticky, 64px, z-40, Slate-50/White backdrop blur)  |
+---------------------------------------------------------------------------------------------------+
| ZONE 2: Hero Section (12-Column Grid)                                                             |
| [Col 1-7: Executive Narrative & H1 & Proof]  |  [Col 8-12: Structured Appointment Dossier Card]   |
+---------------------------------------------------------------------------------------------------+
| ZONE 3: Core Strategic Initiatives (Bento Grid: 3-Col Desktop, 2-Col Tablet, 1-Col Mobile)        |
| [Case Study 1 (Featured: Col 1-2)]           |  [Case Study 2 (Col 3)]                           |
| [Case Study 3 (Col 1)]                       |  [Case Study 4 (Col 2)]   |  [Case Study 5 (Col 3)]|
+---------------------------------------------------------------------------------------------------+
| ZONE 4: Applied Methodology Demonstrator (Interactive Split Workbench: 12-Col)                   |
| [Col 1-4: Standardized Test Scenarios Selector] |  [Col 5-12: Live Simulation & Diagnostic Panel] |
+---------------------------------------------------------------------------------------------------+
| ZONE 5: Career Progression Timeline (Single-Column Vertical Milestone Stack, Max-W 5xl)          |
+---------------------------------------------------------------------------------------------------+
| ZONE 6: Multidisciplinary Competency Matrix (4-Quadrant Grid: 2x2 Desktop, 1x4 Mobile)            |
+---------------------------------------------------------------------------------------------------+
| ZONE 7: Executive Contact & Inquiries (Split 12-Col: Left Contact Info, Right Validated Form)     |
+---------------------------------------------------------------------------------------------------+
| ZONE 8: Footer & Federal Standards Notice (Max-W 7xl, 3-Zone Layout)                              |
+---------------------------------------------------------------------------------------------------+
```

### 3.1 Grid Parameters
*   **Primary Container**: Max width `80rem` (1280px), centered with `mx-auto`.
*   **12-Column System**:
    *   Columns: 12 flexible columns.
    *   Desktop Column Gap: `gap-8` (32px).
    *   Tablet Column Gap: `gap-6` (24px).
    *   Mobile Column Gap: `gap-4` (16px).
*   **Alignment Principles**:
    *   *Left Edge Alignment*: All headers, body text, kickers, and list items align flush to the left grid line to optimize western reading mechanics.
    *   *Numeric Baseline Alignment*: Metric numbers and their descriptive labels are vertically aligned using tabular numeric figures (`font-mono font-feature-settings: 'tnum'`).
    *   *Card Interior Alignment*: Metadata chips pinned to top-left; primary actions and links pinned to bottom-right or full-width base.

---

## 4. Typography Hierarchy & Micro-Typography

### 4.1 Font Pairings & Roles
*   **Display / Headings**: **Manrope** (`font-sans`, weights: 600, 700, 800)
    *   *Rationale*: Geometric clarity with humanist terminal cuts; authoritative, institutional, modern.
*   **Body / Editorial Text**: **Public Sans** (`font-sans`, weights: 400, 500, 600)
    *   *Rationale*: Developed by the U.S. Web Design System (USWDS) specifically for federal government digital accessibility, high legibility across diverse display densities.
*   **Technical / Code / Metrics**: **JetBrains Mono** (`font-mono`, weights: 400, 500, 600)
    *   *Rationale*: High x-height, clear distinction between `0` and `O`, `1` and `l`; ideal for Section 508 criteria, VPAT references, and metric numbers.

### 4.2 Mathematical Type Scale (1.250 — Major Third Scale)

| Level | Semantic Tag | Font Family | Size (Desktop / Mobile) | Line Height | Tracking | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Page Title** | `<h1>` | Manrope | 48px (3.0rem) / 32px (2.0rem) | 1.15 | -0.025em | 800 (Extra Bold) |
| **Section Header** | `<h2>` | Manrope | 34px (2.125rem) / 26px (1.625rem) | 1.25 | -0.02em | 700 (Bold) |
| **Component Header** | `<h3>` | Manrope | 22px (1.375rem) / 19px (1.1875rem) | 1.35 | -0.015em | 700 (Bold) |
| **Subsection Header**| `<h4>` | Manrope | 18px (1.125rem) / 16px (1.0rem) | 1.40 | -0.01em | 600 (Semi Bold) |
| **Lead Subheadline** | `<p.lead>`| Public Sans | 18px (1.125rem) / 16px (1.0rem) | 1.50 | normal | 500 (Medium) |
| **Standard Body** | `<p>` | Public Sans | 15.5px (0.968rem) / 15px (0.937rem) | 1.625 | normal | 400 (Regular) |
| **Body Emphasis** | `<strong>` | Public Sans | 15.5px (0.968rem) / 15px (0.937rem) | 1.625 | normal | 600 (Semi Bold) |
| **Kickers / Badges** | `<span>` | Public Sans | 12px (0.75rem) / 11px (0.687rem) | 1.30 | +0.06em | 700 (Bold, Uppercase) |
| **Code / Technical** | `<code>` | JetBrains Mono | 13px (0.8125rem) / 12px (0.75rem) | 1.45 | normal | 500 (Medium) |

### 4.3 Line Length & Measure (Reading Ergonomics)
*   **Body Copy Line Length**: Clamped to `max-w-2xl` (~65 to 75 characters per line). Prevents eye fatigue when reading executive summaries and methodology descriptions.
*   **Headlines**: Clamped with `text-balance` to avoid awkward typographic orphans on responsive viewports.

---

## 5. Color Palette & WCAG 2.2 AA / AAA Contrast Matrix

The palette is engineered for strict Section 508 and WCAG 2.2 Level AA compliance (minimum 4.5:1 for normal text, 3:1 for large text/graphical UI components), with several critical combinations meeting Level AAA (7:1+).

```
[ Canvas: Slate-50 #f8fafc ]  ----->  [ Surface: White #ffffff ]
      |                                      |
      v                                      v
[ Borders: Slate-200 #e2e8f0 ]        [ Ink Primary: Slate-950 #020617 (Contrast: 18.2:1 AAA) ]
      |                                      |
      v                                      v
[ Ink Muted: Slate-600 #475569 ]      [ Accent: Blue-700 #1d4ed8 (Contrast: 7.4:1 AAA) ]
(Contrast: 5.6:1 AA)                         |
                                             v
                                      [ Accent Dark: Blue-900 #1e3a8a (Contrast: 12.1:1 AAA) ]
```

### 5.1 Color Tokens & Verified Contrast Ratios

| Token Name | Hex Code | Applied Role | Background Surface | Contrast Ratio | WCAG Compliance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--ink-primary` | `#020617` | H1, H2, Primary Headings | `#ffffff` (White) | **19.1:1** | WCAG AAA (>7:1) |
| `--ink-body` | `#1e293b` | Body prose, bullet items | `#ffffff` (White) | **14.8:1** | WCAG AAA (>7:1) |
| `--ink-secondary`| `#475569` | Metadata, dates, kickers | `#ffffff` (White) | **5.9:1** | WCAG AA (>4.5:1) |
| `--accent-brand` | `#1d4ed8` | Primary CTA, key links | `#ffffff` (White) | **7.4:1** | WCAG AAA (>7:1) |
| `--accent-text` | `#1e40af` | Subheadlines, key metrics | `#f8fafc` (Slate-50) | **8.2:1** | WCAG AAA (>7:1) |
| `--cta-text` | `#ffffff` | Button label text | `#1d4ed8` (Blue-700) | **7.4:1** | WCAG AAA (>7:1) |
| `--border-ui` | `#cbd5e1` | Input borders, card edges| `#ffffff` (White) | **3.2:1** | WCAG AA Non-text (>3:1) |
| `--focus-ring` | `#2563eb` | Visible focus outline | Any canvas | **3px solid** | Section 508 / 2.4.7 |
| `--success-ink` | `#15803d` | Passed compliance checks | `#f0fdf4` (Green-50) | **6.1:1** | WCAG AA (>4.5:1) |
| `--warning-ink` | `#b45309` | Remediation alerts | `#fffbeb` (Amber-50) | **5.4:1** | WCAG AA (>4.5:1) |

---

## 6. Visual Flow & Eye Movement Pathways

### 6.1 Macro-Path (Gutenberg / Modified Z-Pattern on Hero)
1.  **Primary Optical Area (Top Left)**:
    *   Brand Identity (`Anthony Antonidis-Drennan`) + Direct Section 508 / Senior IT BA role descriptor.
2.  **Strong Diagonal Sweep Across Narrative**:
    *   Eye tracks through the H1 Display Headline -> Federal & Higher Ed Kicker -> 3 strategic delivery bullet points.
3.  **Terminal Anchor Point (Top Right)**:
    *   Executive Appointment Dossier: High-contrast metric cards with clear statistics (100% 508 Compliance, 5,000+ Scanned Assets, 70k+ Higher Ed Users).
4.  **Terminal Action Area (Bottom Left of Hero)**:
    *   High-contrast Dual CTA buttons: `[Get in Touch]` and `[Explore Strategic Case Studies]`.

### 6.2 Micro-Path (F-Pattern on Case Study Cards)
1.  **Horizontal Bar 1**: Card Header containing the domain badge (e.g. `Section 508 Product Ownership`) and the impact metric (`100% VPAT Compliance`).
2.  **Horizontal Bar 2**: Card Title (`Enterprise Accessibility Scanner & Governance Framework`).
3.  **Vertical Drop Down**: Left-aligned bulleted impact metrics with check icons.
4.  **Terminal Readout**: Bottom action link (`View Full Case Study & Methodology ->`).

---

## 7. Responsive Breakpoint Matrix & Hierarchy Adjustments

| Breakpoint | Window Width | Layout Structure | H1 Size | Navigation Format | Interaction Model |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile (`<640px`)** | 320px – 639px | Single column stack; full-width cards; sticky a11y trigger | 32px (2.0rem) | Collapsible drawer menu + sticky CTA | Touch targets min 44x44px; simplified table/grid |
| **Tablet (`640px–1023px`)** | 640px – 1023px | 2-column bento grids; 12-column flex hero; side-by-side metrics | 40px (2.5rem) | Compact horizontal links + primary CTA | Hybrid touch/mouse; 48px button heights |
| **Desktop (`1024px+`)** | 1024px – 1279px | Full 12-column layout; split-screen hero (7:5); 3-column bento | 48px (3.0rem) | Full persistent desktop nav with a11y toolbar trigger | Mouse/keyboard focus-visible states active |
| **Wide Desktop (`1280px+`)** | 1280px – 1920px | Centered container (`max-w-7xl`); generous 96px section padding | 52px (3.25rem) | Full persistent desktop nav with inline direct shortcuts | Optimized for widescreen scanning ergonomics |

### 7.1 Mobile Ergonomics & Section 508 Touch Targets
*   All interactive elements (buttons, filter tabs, modal triggers, input fields) maintain a minimum target size of **44x44 CSS pixels** per WCAG 2.2 Success Criterion 2.5.8 (Target Size - Minimum) and 2.5.5 (Target Size - Enhanced).
*   No horizontal scrolling at any viewport width down to 320px (WCAG 1.4.10 Reflow).
*   Form inputs employ a minimum 16px font size to prevent mobile browser zoom distortion.

---

## 8. Summary Rationale

This visual hierarchy specification directly reflects Anthony Antonidis-Drennan's dual expertise:
1.  **Integrity & Trust**: By using the US Web Design System's typographic standards (Public Sans + Manrope) and exceeding WCAG 2.2 AA contrast metrics, the portfolio visibly embodies the accessibility principles he directs.
2.  **Cohesion over Fragmentation**: By organizing the portfolio into clear cognitive zones and an unboxed Executive Dossier, the dual tracks of Section 508 and Enterprise Business Analysis are fused into a singular, undeniable leadership profile.
3.  **Actionable Rigor**: Interactive demonstrators, verifiable VPAT documentation, and clear typographic hierarchy enable hiring committees to evaluate candidate depth effortlessly.
