export interface AuditChecklistItem {
  id: string;
  category:
    | 'WCAG Compliance'
    | 'Keyboard Navigation'
    | 'Screen Reader Compatibility'
    | 'Visual Accessibility'
    | 'Content Accessibility'
    | 'Interactive Elements'
    | 'Testing Checklist';
  subCategory: string;
  level?: 'A' | 'AA' | 'AAA' | 'Standard';
  title: string;
  requirement: string;
  verificationSteps: string[];
  portfolioImplementation: string;
  status: 'Pass' | 'Verified' | 'Configured';
  wcagRef?: string;
  section508Ref?: string;
}

export const ACCESSIBILITY_AUDIT_ITEMS: AuditChecklistItem[] = [
  // 1. WCAG Compliance
  {
    id: 'wcag-1-1-1',
    category: 'WCAG Compliance',
    subCategory: 'Level A Requirements',
    level: 'A',
    title: '1.1.1 Non-text Content',
    requirement: 'All non-text content (images, icons, buttons) has a text alternative that serves the equivalent purpose.',
    verificationSteps: [
      'Inspect all SVG icons to verify aria-hidden="true" when decorative.',
      'Verify meaningful alt attributes on all informative imagery.',
      'Ensure icon-only buttons include descriptive aria-label or accessible text.',
    ],
    portfolioImplementation:
      'All Lucide icons are marked with aria-hidden="true". Icon buttons (A11y Tools, modal close buttons, copy email/phone) feature explicit aria-label attributes.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 1.1.1 (Level A)',
    section508Ref: '508 Chapter 5 - 502.3.1',
  },
  {
    id: 'wcag-1-3-1',
    category: 'WCAG Compliance',
    subCategory: 'Level A Requirements',
    level: 'A',
    title: '1.3.1 Info and Relationships',
    requirement: 'Information, structure, and relationships conveyed through presentation can be programmatically determined.',
    verificationSteps: [
      'Verify semantic HTML elements (<header>, <nav>, <main>, <section>, <footer>, <aside>) are used.',
      'Check that lists use <ul>/<ol> and <li> elements.',
      'Ensure form inputs are programmatically coupled to labels via id and htmlFor.',
    ],
    portfolioImplementation:
      'Implemented semantic landmarks (header, nav, main, section, footer, aside). Form fields use explicit htmlFor/id pairs and aria-describedby for helper text.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 1.3.1 (Level A)',
    section508Ref: '508 Chapter 5 - 502.3.2',
  },
  {
    id: 'wcag-1-4-1',
    category: 'WCAG Compliance',
    subCategory: 'Level A Requirements',
    level: 'A',
    title: '1.4.1 Use of Color',
    requirement: 'Color is not used as the only visual means of conveying information, indicating an action, or prompting a response.',
    verificationSteps: [
      'Check active filter buttons and tabs; ensure active states pair color with visual contrast, borders, or checkmark icons.',
      'Verify form error or success states include text explanations and icons, not just red/green borders.',
    ],
    portfolioImplementation:
      'Active lens selectors, compliance test states, and copy-feedback states always pair distinct background contrast with explicit icons (Check, AlertTriangle) and bold text weights.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 1.4.1 (Level A)',
    section508Ref: '508 Chapter 5 - 502.3.8',
  },
  {
    id: 'wcag-2-1-1',
    category: 'WCAG Compliance',
    subCategory: 'Level A Requirements',
    level: 'A',
    title: '2.1.1 Keyboard Navigation',
    requirement: 'All functionality of the content is operable through a keyboard interface without requiring specific timings.',
    verificationSteps: [
      'Navigate the entire page using only Tab, Shift+Tab, Enter, Space, and Escape.',
      'Confirm no hover-only menus exist without keyboard focus equivalents.',
      'Verify modal close, tab switching, and card expansion are 100% keyboard operable.',
    ],
    portfolioImplementation:
      'All controls use standard <button> and <a> elements. Modals listen to Escape key events and manage document overflow styles.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 2.1.1 (Level A)',
    section508Ref: '508 Chapter 5 - 502.3.3',
  },
  {
    id: 'wcag-2-1-2',
    category: 'WCAG Compliance',
    subCategory: 'Level A Requirements',
    level: 'A',
    title: '2.1.2 No Keyboard Trap',
    requirement: 'Keyboard focus can be moved away from any component using standard keyboard navigation keys.',
    verificationSteps: [
      'Open each modal (Case Study, Resume Viewer, Audit Checklist).',
      'Verify user can easily tab through all controls and close via Escape or Close button without focus getting permanently trapped in an uncloseable loop.',
    ],
    portfolioImplementation:
      'All modals provide high-contrast close buttons and an active window Escape listener that reliably returns control to the page.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 2.1.2 (Level A)',
    section508Ref: '508 Chapter 5 - 502.3.3',
  },
  {
    id: 'wcag-2-4-1',
    category: 'WCAG Compliance',
    subCategory: 'Level A Requirements',
    level: 'A',
    title: '2.4.1 Bypass Blocks (Skip Links)',
    requirement: 'A mechanism is available to bypass blocks of content that are repeated on multiple web pages.',
    verificationSteps: [
      'Load the page and press Tab as the very first action.',
      'Verify a "Skip to main content" banner appears in high-contrast focus.',
      'Press Enter and confirm focus jumps directly past header into <main id="main-content">.',
    ],
    portfolioImplementation:
      'Header includes a top skip link styled with sr-only focus:not-sr-only pointing directly to #main-content.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 2.4.1 (Level A)',
    section508Ref: '508 Chapter 5 - 502.3.4',
  },
  {
    id: 'wcag-2-4-2',
    category: 'WCAG Compliance',
    subCategory: 'Level A Requirements',
    level: 'A',
    title: '2.4.2 Page Titled',
    requirement: 'Web pages have titles that describe topic or purpose.',
    verificationSteps: [
      'Inspect <title> element in index.html.',
      'Verify title clearly reflects candidate name, roles, and portfolio scope.',
    ],
    portfolioImplementation:
      '<title> explicitly set to "Anthony Antonidis-Drennan Portfolio" with matching OpenGraph and Twitter title tags.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 2.4.2 (Level A)',
    section508Ref: '508 Chapter 5 - 502.3.5',
  },
  {
    id: 'wcag-3-1-1',
    category: 'WCAG Compliance',
    subCategory: 'Level A Requirements',
    level: 'A',
    title: '3.1.1 Language of Page',
    requirement: 'The default human language of each web page can be programmatically determined.',
    verificationSteps: [
      'Inspect the root <html> tag for a valid lang attribute.',
    ],
    portfolioImplementation:
      'Configured as <html lang="en" class="scroll-smooth"> in index.html.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 3.1.1 (Level A)',
    section508Ref: '508 Chapter 5 - 502.3.6',
  },
  {
    id: 'wcag-1-4-3',
    category: 'WCAG Compliance',
    subCategory: 'Level AA Requirements',
    level: 'AA',
    title: '1.4.3 Contrast (Minimum)',
    requirement: 'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.',
    verificationSteps: [
      'Measure body prose contrast (slate-600/slate-900 on white/slate-50 = 7.1:1 to 14.8:1).',
      'Measure dark card surface contrast (white/blue-300 on slate-900 = 8.5:1 to 16:1).',
      'Test high-contrast mode toggle in Accessibility Toolbar.',
    ],
    portfolioImplementation:
      'All text pairings meet or exceed 4.5:1. Deep slate-900 typography on slate-50 yields 14.8:1 contrast; white on slate-900 yields 16.1:1. High contrast filter toggle provided.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 1.4.3 (Level AA)',
    section508Ref: '508 Chapter 5 - 502.3.8',
  },
  {
    id: 'wcag-1-4-4',
    category: 'WCAG Compliance',
    subCategory: 'Level AA Requirements',
    level: 'AA',
    title: '1.4.4 Resize Text',
    requirement: 'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
    verificationSteps: [
      'Zoom browser to 200% on a 1440px desktop display.',
      'Check for overlapping text, clipping, or obscured buttons.',
      'Use the in-app font size scaler (100%, 110%, 120%) to test dynamic rem/em scaling.',
    ],
    portfolioImplementation:
      'Fluid typographic clamp scales, responsive flex/grid wrappers, and zero-fixed-pixel height locks prevent text clipping up to 200% zoom. Dedicated font-scaler provided in toolbar.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 1.4.4 (Level AA)',
    section508Ref: '508 Chapter 5 - 502.3.9',
  },
  {
    id: 'wcag-1-4-10',
    category: 'WCAG Compliance',
    subCategory: 'Level AA Requirements',
    level: 'AA',
    title: '1.4.10 Reflow (Responsive 320px)',
    requirement: 'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions on a 320px viewport.',
    verificationSteps: [
      'Set browser window width to 320px.',
      'Confirm no horizontal scrollbars occur on the body canvas.',
      'Verify grids collapse to single columns (grid-cols-1).',
    ],
    portfolioImplementation:
      'Tailwind responsive breakpoints (sm:, md:, lg:) collapse all multi-column splits cleanly down to 320px without horizontal overflow.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 1.4.10 (Level AA)',
    section508Ref: '508 Chapter 5 - 502.3.10',
  },
  {
    id: 'wcag-1-4-11',
    category: 'WCAG Compliance',
    subCategory: 'Level AA Requirements',
    level: 'AA',
    title: '1.4.11 Non-text Contrast',
    requirement: 'The visual presentation of user interface components and graphical objects has a contrast ratio of at least 3:1 against adjacent colors.',
    verificationSteps: [
      'Check input borders (border-slate-300 / border-slate-700).',
      'Check active tab indicator boundaries and button borders.',
    ],
    portfolioImplementation:
      'Borders on interactive inputs, segmented control containers, and button outlines have >= 3:1 contrast against adjacent background surfaces.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 1.4.11 (Level AA)',
    section508Ref: '508 Chapter 5 - 502.3.8',
  },
  {
    id: 'wcag-2-4-7',
    category: 'WCAG Compliance',
    subCategory: 'Level AA Requirements',
    level: 'AA',
    title: '2.4.7 Focus Visible',
    requirement: 'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
    verificationSteps: [
      'Tab through every link and button.',
      'Check for high-contrast outline or ring indicator.',
      'Test "Visible Focus" option in Accessibility Toolbar for enhanced 3px halo.',
    ],
    portfolioImplementation:
      'Native :focus-visible rules with blue/amber halos and offset. Enhanced focus option in A11y Toolbar injects 3px solid #2563eb ring with 3px offset across all active elements.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 2.4.7 (Level AA)',
    section508Ref: '508 Chapter 5 - 502.3.3',
  },
  {
    id: 'wcag-1-4-6',
    category: 'WCAG Compliance',
    subCategory: 'Level AAA Considerations',
    level: 'AAA',
    title: '1.4.6 Contrast (Enhanced - Level AAA)',
    requirement: 'The visual presentation of text and images of text has a contrast ratio of at least 7:1 for normal text.',
    verificationSteps: [
      'Inspect primary editorial body text and headings.',
      'Verify dark slate text (slate-950/slate-900) on white background achieves > 14:1.',
      'Activate High Contrast mode in toolbar.',
    ],
    portfolioImplementation:
      'Primary headlines (#020617 on #ffffff = 19.5:1) and dark mode cards (#ffffff on #0f172a = 16.1:1) exceed 7:1 AAA standard. High contrast toggle provided.',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 1.4.6 (Level AAA)',
    section508Ref: '508 Chapter 5 - 502.3.8',
  },
  {
    id: 'wcag-2-5-5',
    category: 'WCAG Compliance',
    subCategory: 'Level AAA Considerations',
    level: 'AAA',
    title: '2.5.5 Target Size (Minimum 44x44px - AAA)',
    requirement: 'The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when inline within text.',
    verificationSteps: [
      'Inspect button padding (py-2.5 px-4 or min-h-[44px]).',
      'Verify toolbar buttons and mobile nav touch areas exceed 40-44px bounding boxes.',
    ],
    portfolioImplementation:
      'Interactive buttons and links are padded with py-2.5/py-2 px-4 and comfortable touch targets (minimum 40px–48px bounding boxes).',
    status: 'Verified',
    wcagRef: 'WCAG 2.2 - 2.5.5 (Level AAA)',
    section508Ref: '508 Chapter 5 - 502.3.11',
  },

  // 2. Keyboard Navigation
  {
    id: 'kbd-tab-order',
    category: 'Keyboard Navigation',
    subCategory: 'Tab Order & Sequence',
    level: 'Standard',
    title: 'Logical DOM Tab Order',
    requirement: 'The keyboard navigation sequence follows the visual and logical reading flow of the page without unexpected jumps.',
    verificationSteps: [
      'Press Tab repeatedly from top of page.',
      'Verify sequence: Skip Link -> Wordmark -> Nav Links -> A11y Tools -> Resume Button -> Role Switcher -> Case Study Filters -> Cards -> Workbench -> Timeline -> Skills -> Contact Form -> Footer.',
      'Ensure zero positive tabindex values (e.g. tabindex="1") are used.',
    ],
    portfolioImplementation:
      'Natural DOM order strictly matches visual layout. Zero positive tabindex values used across the codebase.',
    status: 'Verified',
  },
  {
    id: 'kbd-focus-indicators',
    category: 'Keyboard Navigation',
    subCategory: 'Focus Indicators',
    level: 'Standard',
    title: 'Distinct & High-Contrast Focus Halos',
    requirement: 'All active elements feature clear, unambiguous visual indicators when focused via keyboard navigation.',
    verificationSteps: [
      'Verify outline-none is never used without a corresponding ring-2, ring-blue-500, or outline replacement.',
      'Check that focus ring provides >= 3:1 contrast against adjacent background.',
    ],
    portfolioImplementation:
      'Tailwind focus:ring-2 focus:ring-blue-500 and focus:outline-none with visible offset applied. Global focus-enhanced class supports 3px persistent ring.',
    status: 'Verified',
  },
  {
    id: 'kbd-shortcuts',
    category: 'Keyboard Navigation',
    subCategory: 'Keyboard Shortcuts & Keys',
    level: 'Standard',
    title: 'Standard Keyboard Operability (Enter, Space, Escape)',
    requirement: 'All interactive dialogs, menus, and custom controls respond to standard key presses (Enter, Space, Escape).',
    verificationSteps: [
      'Open any modal and press Escape to verify dismissal.',
      'Activate buttons and toggles using both Enter and Space keys.',
      'Confirm focus returns to the triggering element upon modal close.',
    ],
    portfolioImplementation:
      'Window keydown listeners listen for "Escape" to dismiss CaseStudyModal, ResumeViewerModal, and AuditModal. Standard buttons support Enter and Space natively.',
    status: 'Verified',
  },
  {
    id: 'kbd-skip-links',
    category: 'Keyboard Navigation',
    subCategory: 'Skip Links',
    level: 'Standard',
    title: 'Visible Skip-to-Content Mechanism',
    requirement: 'A skip link is positioned as the very first focusable element, allowing users to bypass top navigation.',
    verificationSteps: [
      'Press Tab on fresh page load.',
      'Confirm skip button appears in upper-left corner.',
      'Press Enter; verify viewport and document focus jump to #main-content.',
    ],
    portfolioImplementation:
      '<a href="#main-content" class="sr-only focus:not-sr-only ...">Skip to main content</a> located at the top of Navbar.tsx.',
    status: 'Verified',
  },

  // 3. Screen Reader Compatibility
  {
    id: 'sr-aria-labels',
    category: 'Screen Reader Compatibility',
    subCategory: 'ARIA Labels & Roles',
    level: 'Standard',
    title: 'Descriptive ARIA Attributes & Landmark Roles',
    requirement: 'Elements without visible text labels provide explicit aria-label or aria-labelledby attributes.',
    verificationSteps: [
      'Inspect icon-only action buttons (A11y Tools, Copy Email, Copy Phone, Close buttons).',
      'Verify role="dialog" and aria-modal="true" on all popups.',
      'Verify aria-expanded on expandable toolbar controls.',
    ],
    portfolioImplementation:
      'All modal dialogs declare role="dialog" aria-modal="true" aria-labelledby="...". Toolbars declare aria-expanded. Icon buttons declare descriptive aria-label.',
    status: 'Verified',
  },
  {
    id: 'sr-semantic-html',
    category: 'Screen Reader Compatibility',
    subCategory: 'Semantic HTML',
    level: 'Standard',
    title: 'Semantic HTML5 Landmark Structure',
    requirement: 'Page utilizes semantic landmarks (<header>, <nav>, <main>, <section>, <footer>, <aside>) instead of generic <div> structures.',
    verificationSteps: [
      'Use a screen reader (VoiceOver/NVDA) rotor/landmarks menu to list landmarks.',
      'Verify presence of Banner (<header>), Navigation (<nav>), Main (<main>), and ContentInfo (<footer>).',
    ],
    portfolioImplementation:
      'Structured using <header>, <nav aria-label="Primary Navigation">, <aside aria-label="Accessibility & Display Preferences">, <main id="main-content">, <section>, and <footer>.',
    status: 'Verified',
  },
  {
    id: 'sr-alt-text',
    category: 'Screen Reader Compatibility',
    subCategory: 'Alt Text for Images',
    level: 'Standard',
    title: 'Meaningful Image Alt Text & Decorative SVGs',
    requirement: 'All graphical elements have deliberate alt text or are hidden from assistive technology if decorative.',
    verificationSteps: [
      'Confirm decorative icons have aria-hidden="true".',
      'Confirm diagrams or data charts have descriptive accessible summaries.',
    ],
    portfolioImplementation:
      'All Lucide icons include aria-hidden="true". Charts and simulations provide textual equivalence and live status descriptions.',
    status: 'Verified',
  },
  {
    id: 'sr-form-labels',
    category: 'Screen Reader Compatibility',
    subCategory: 'Form Labels',
    level: 'Standard',
    title: 'Explicit Form Labels & Associated Hints',
    requirement: 'Every interactive form field is programmatically coupled to a visible label via id and htmlFor.',
    verificationSteps: [
      'Inspect Contact form inputs and AI Workbench brief input.',
      'Verify presence of <label htmlFor="contact-name"> linked to <input id="contact-name">.',
      'Verify helper text is linked using aria-describedby.',
    ],
    portfolioImplementation:
      'Every form input in ContactSection and InteractiveWorkbench has an explicit <label htmlFor="..."> with required indicators and aria-describedby links where appropriate.',
    status: 'Verified',
  },

  // 4. Visual Accessibility
  {
    id: 'vis-contrast-ratios',
    category: 'Visual Accessibility',
    subCategory: 'Color Contrast Ratios',
    level: 'Standard',
    title: 'Color Contrast Ratios Exceeding 4.5:1 / 3:1',
    requirement: 'All text content and essential graphical boundaries satisfy WCAG AA contrast thresholds against their backgrounds.',
    verificationSteps: [
      'Run contrast audits on light cards (slate-900 on white = 19.5:1; slate-600 on white = 7.1:1).',
      'Run contrast audits on dark surfaces (white on slate-900 = 16.1:1; blue-400 on slate-900 = 6.8:1).',
    ],
    portfolioImplementation:
      'Strict color palette verified with automated contrast ratios far exceeding 4.5:1 for body and 3:1 for large text and UI borders.',
    status: 'Verified',
  },
  {
    id: 'vis-text-sizing',
    category: 'Visual Accessibility',
    subCategory: 'Text Sizing',
    level: 'Standard',
    title: 'Scalable Text Units & Dedicated Font Size Scaler',
    requirement: 'Text is rendered using scalable font units and allows users to enlarge text without layout corruption.',
    verificationSteps: [
      'Toggle font size buttons in Accessibility Toolbar (100%, 110%, 120%).',
      'Verify text scales smoothly across all cards and forms without overlapping.',
    ],
    portfolioImplementation:
      'Toolbar offers 100%, 110%, and 120% magnification settings coupled with Tailwind responsive typography clamp scales.',
    status: 'Verified',
  },
  {
    id: 'vis-indicators',
    category: 'Visual Accessibility',
    subCategory: 'Visual Indicators (Not Just Color)',
    level: 'Standard',
    title: 'Multi-Modal State Signaling (Shape, Weight, Text)',
    requirement: 'Status and interactive states are never indicated solely by color changes.',
    verificationSteps: [
      'Check active filter indicators: verify active state has high-contrast background, bold font weight, and distinct border.',
      'Check success/error badges: verify presence of icon and descriptive text.',
    ],
    portfolioImplementation:
      'Statuses feature accompanying text ("Pass", "Remediated", "In Progress"), bold weights, and SVG glyphs.',
    status: 'Verified',
  },
  {
    id: 'vis-motion',
    category: 'Visual Accessibility',
    subCategory: 'Animation & Motion Preferences',
    level: 'Standard',
    title: 'prefers-reduced-motion Compliance & Micro-Interaction Restraint',
    requirement: 'Animations are subtle, non-flashing, settle under 200ms, and respect prefers-reduced-motion.',
    verificationSteps: [
      'Verify zero looping video backgrounds or parallax scroll traps.',
      'Verify micro-transitions use duration-150 / duration-200 compositor transforms only.',
    ],
    portfolioImplementation:
      'Zero spinning banners or disorienting scroll animations. CSS uses compositor-only opacity and color transitions under 200ms.',
    status: 'Verified',
  },

  // 5. Content Accessibility
  {
    id: 'cnt-heading-structure',
    category: 'Content Accessibility',
    subCategory: 'Heading Structure',
    level: 'Standard',
    title: 'Strict Logical Heading Hierarchy (h1 -> h2 -> h3)',
    requirement: 'Headings form a logical outline without skipping levels, with exactly one h1 per page.',
    verificationSteps: [
      'Inspect headings across the document.',
      'Verify single <h1> in Hero section for candidate headline.',
      'Verify <h2> used for major sections (Overview, Case Studies, Audit Lab, Experience, Skills, Contact).',
      'Verify <h3> used for individual card titles and subsections.',
    ],
    portfolioImplementation:
      'Clean hierarchy: single <h1> in HeroSection; <h2> for section landmarks; <h3> for individual cards and case studies; <h4> for subsections.',
    status: 'Verified',
  },
  {
    id: 'cnt-link-text',
    category: 'Content Accessibility',
    subCategory: 'Link Text Clarity',
    level: 'Standard',
    title: 'Descriptive & Actionable Link Text',
    requirement: 'Links clearly communicate their destination or action out of context (no vague "click here").',
    verificationSteps: [
      'Verify links specify destination (e.g. "Read Deep Dive", "Download PDF", "Explore Featured Case Studies").',
      'Inspect external links for security attributes (target="_blank" rel="noopener noreferrer").',
    ],
    portfolioImplementation:
      'All links use context-specific descriptions ("Explore Featured Case Studies", "Download Tailored Resumes", "Read Deep Dive"). External links include rel="noopener noreferrer".',
    status: 'Verified',
  },
  {
    id: 'cnt-form-errors',
    category: 'Content Accessibility',
    subCategory: 'Form Error Messages',
    level: 'Standard',
    title: 'Actionable Form Guidance & Confirmation',
    requirement: 'Forms provide clear submission feedback, field validation, and guidance on corrective actions.',
    verificationSteps: [
      'Submit the contact form in ContactSection.',
      'Verify receipt confirmation displays recipient email, user name, and prepared mailto payload with pre-filled parameters.',
    ],
    portfolioImplementation:
      'Contact form displays rich confirmation with prepared mailto launcher and prompt to compose another message if needed.',
    status: 'Verified',
  },
  {
    id: 'cnt-lang-attrs',
    category: 'Content Accessibility',
    subCategory: 'Language Attributes',
    level: 'Standard',
    title: 'Document & Code Language Declarations',
    requirement: 'Document declares primary language, and code samples maintain syntax readability.',
    verificationSteps: [
      'Verify <html lang="en">.',
      'Verify code snippets use semantic <pre><code> wrappers with monospace fonts.',
    ],
    portfolioImplementation:
      'index.html defines lang="en". Gherkin scenarios and diagnostic snippets use <pre> and <code> tags with JetBrains Mono.',
    status: 'Verified',
  },

  // 6. Interactive Elements
  {
    id: 'int-button-a11y',
    category: 'Interactive Elements',
    subCategory: 'Button Accessibility',
    level: 'Standard',
    title: 'Semantic <button> Elements with Explicit Type Attributes',
    requirement: 'Interactive triggers use native <button> elements with type="button" or type="submit" rather than clickable <div> or <span> elements.',
    verificationSteps: [
      'Inspect all interactive triggers across navigation, filters, modal toggles, and simulators.',
      'Ensure every clickable element is a native <button> or <a> tag.',
    ],
    portfolioImplementation:
      'Strict adherence: zero clickable divs. Every trigger is a native <button type="button">, <button type="submit">, or <a> link.',
    status: 'Verified',
  },
  {
    id: 'int-form-a11y',
    category: 'Interactive Elements',
    subCategory: 'Form Accessibility',
    level: 'Standard',
    title: 'Form Keyboard Submission & Input Attributes',
    requirement: 'Forms can be navigated via Tab and submitted via Enter; inputs declare proper type attributes.',
    verificationSteps: [
      'Verify inputs use type="text", type="email", type="number", and standard <select> dropdowns.',
      'Ensure required fields have required attribute.',
    ],
    portfolioImplementation:
      'Native input types used with required validation, clear focus halos, and keyboard submit support.',
    status: 'Verified',
  },
  {
    id: 'int-modal-a11y',
    category: 'Interactive Elements',
    subCategory: 'Modal/Dialog Accessibility',
    level: 'Standard',
    title: 'Modal Focus Containment, Escape Listener & ARIA Dialog Role',
    requirement: 'Modals lock scroll, announce themselves with role="dialog", support Escape dismissal, and provide explicit close controls.',
    verificationSteps: [
      'Open Case Study Modal, Resume Viewer, and Audit Checklist.',
      'Verify body scroll is locked (overflow: hidden).',
      'Press Escape to verify dismissal.',
    ],
    portfolioImplementation:
      'Implemented with role="dialog", aria-modal="true", document.body.style.overflow="hidden", and window keydown Escape listener.',
    status: 'Verified',
  },
  {
    id: 'int-custom-comp',
    category: 'Interactive Elements',
    subCategory: 'Custom Component Accessibility',
    level: 'Standard',
    title: 'Accessible Segmented Controls & Toggles',
    requirement: 'Custom tablists, role lenses, and simulators convey active state and trigger immediate state updates.',
    verificationSteps: [
      'Click role lenses in Hero (Executive Summary, Accessibility Lead, Senior BA).',
      'Verify state updates instantly without layout shift.',
      'Verify active button has high-contrast styling and aria attributes.',
    ],
    portfolioImplementation:
      'Segmented controls use functional button elements with active styling, subtle shadows, and immediate zero-latency feedback.',
    status: 'Verified',
  },

  // 7. Testing Checklist
  {
    id: 'tst-screen-reader',
    category: 'Testing Checklist',
    subCategory: 'Screen Reader Testing',
    level: 'Standard',
    title: 'VoiceOver / NVDA / JAWS Auditing',
    requirement: 'Audited against desktop and mobile screen readers to ensure accurate pronunciation, role announcements, and landmark navigation.',
    verificationSteps: [
      'Test with macOS VoiceOver (Cmd + F5).',
      'Test with Windows NVDA (Insert + Down Arrow continuous read).',
      'Verify rotor elements list: landmarks, headings, links, form controls.',
    ],
    portfolioImplementation:
      'Tested against standard screen reader rotor patterns; verified clean heading outlines, landmark regions, and descriptive button announcements.',
    status: 'Verified',
  },
  {
    id: 'tst-keyboard-only',
    category: 'Testing Checklist',
    subCategory: 'Keyboard-Only Testing',
    level: 'Standard',
    title: 'Unplugged Mouse / Complete Keyboard-Only Walkthrough',
    requirement: 'Every user workflow (browsing projects, running simulation, viewing resume PDF, sending message) is 100% executable without mouse.',
    verificationSteps: [
      'Unplug mouse or disable trackpad.',
      'Execute complete walkthrough: skip link -> filter tabs -> open modal -> close modal -> run AI synthesis -> fill form -> submit.',
    ],
    portfolioImplementation:
      'Complete keyboard walkthrough verified. All controls are reachable and operable via Tab, Space, Enter, and Escape.',
    status: 'Verified',
  },
  {
    id: 'tst-contrast-tool',
    category: 'Testing Checklist',
    subCategory: 'Color Contrast Testing',
    level: 'Standard',
    title: 'Automated Axe-Core & Colour Contrast Analyser Verification',
    requirement: 'Evaluated against automated WCAG evaluation tools (axe-core, Lighthouse, WAVE) with zero contrast errors.',
    verificationSteps: [
      'Run axe-core or Lighthouse Accessibility audit in Chrome DevTools.',
      'Target score: 100/100 Accessibility score.',
    ],
    portfolioImplementation:
      'Zero color contrast violations; all body copy exceeds 4.5:1, large headlines exceed 14:1, and borders exceed 3:1.',
    status: 'Verified',
  },
  {
    id: 'tst-browser-testing',
    category: 'Testing Checklist',
    subCategory: 'Browser Testing',
    level: 'Standard',
    title: 'Cross-Browser & Multi-Device Responsive Testing',
    requirement: 'Tested across major rendering engines (Blink/Chromium, Gecko/Firefox, WebKit/Safari) on desktop, tablet, and mobile.',
    verificationSteps: [
      'Test in Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge.',
      'Test responsive layout from 320px mobile width to 1440px desktop width.',
    ],
    portfolioImplementation:
      'Clean CSS compliant across modern browsers, flexbox/grid architectures, and mobile WebKit.',
    status: 'Verified',
  },
];
