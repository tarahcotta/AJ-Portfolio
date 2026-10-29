export interface CaseStudyArtifact {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Accessibility' | 'Business Analysis' | 'AI & Process' | 'Product Ownership';
  track: 'accessibility' | 'ba' | 'both';
  organization: string;
  period: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  deliverables: string[];
  technologies: string[];
  featured: boolean;
  diagrams?: CaseStudyArtifact[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  roleTitle: string;
  previousRoles?: { title: string; period: string }[];
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  competencies: string[];
  tracks: ('accessibility' | 'ba')[];
}

export interface Certification {
  name: string;
  acronym: string;
  issuer: string;
  year: string;
  status: 'Active' | 'In Progress';
  description: string;
}

export interface Education {
  institution: string;
  school?: string;
  degree: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  track: 'accessibility' | 'ba' | 'both';
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    context: string;
  }[];
}

export const PERSONAL_INFO = {
  name: 'Anthony Antonidis-Drennan',
  location: 'Colorado',
  email: 'antonidisanthony@gmail.com',
  phone: '281-202-8245',
  linkedinUrl: 'https://linkedin.com/in/aantonidis',
  linkedinHandle: 'linkedin.com/in/aantonidis',
  tagline: 'I bridge enterprise software delivery, Section 508 accessibility governance, and AI-accelerated business analysis.',
  headline: 'IT Accessibility Leader & Senior Business Analyst',
  subheadline: 'Section 508 Governance · Enterprise SDLC · AI-Enabled Requirements Engineering',
  overview:
    'I lead enterprise IT accessibility and full-lifecycle business analysis across federal laboratories and research institutions. My work pairs Section 508/WCAG compliance with rigorous systems analysis—product-managing automated scanning across dozens of public web domains, architecting custom regulatory compliance workflows, and applying generative AI to streamline discovery and solution architecture.',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'conflict-of-interest-system',
    title: 'Custom Conflict of Interest (COI) Disclosure System',
    subtitle: 'Enterprise Regulatory Compliance, BPMN Workflow Modeling & Mitigation Automation',
    category: 'Business Analysis',
    track: 'ba',
    organization: 'National Laboratory of the Rockies & Research Enterprise',
    period: '2021 – Present',
    role: 'Lead IT Business Analyst & Process Architect',
    summary:
      'I led end-to-end business analysis and BPMN workflow modeling for the Activities & Disclosures System (ADS)—an enterprise platform that manages outside activities, financial interests, and institutional mitigation plans across scientific and administrative teams.',
    challenge:
      'Our researchers and administrators needed an auditable, automated way to disclose outside activities and financial interests without creating intellectual property risks or regulatory exposure. The legacy process relied on fragmented paperwork, created multi-week delays between managers and General Counsel, and lacked systematic mitigation plan generation.',
    solution:
      'I architected the future-state process flows and concept domain model for ADS. I mapped role-based decision trees that route disclosures across Line Managers, Senior Managers, General Counsel (OGC), and Tech Transfer (LTM). Along the way, I established automated triggers for legally binding mitigation plans and defined Section 508 accessible UI specifications for all screens.',
    keyOutcomes: [
      'Modeled and operationalized future-state multi-role approval sub-processes (Line Manager, Senior Manager, OGC, LTM)',
      'Reduced disclosure review turnaround time by over 45% through automated condition-based routing',
      'Created formalized concept model linking employee activities, interests, and relationships directly to binding mitigation plans',
      'Delivered 100% UAT test coverage with full traceability to federal research compliance standards',
    ],
    deliverables: [
      'ADS Future-State Process Architecture & BPMN Swimlane Maps',
      'ADS Core Concept Domain Model & Entity Relationship Framework',
      'Multi-Tier Role-Based Approval Logic & Sub-Process Specifications',
      'Functional Requirements Document (FRD) & Mitigation Plan Rule Sets',
    ],
    technologies: ['Process Architecture (BPMN)', 'BPMN Swimlanes', 'Concept Modeling', 'Requirements Engineering', 'UAT & Compliance Routing', 'Section 508 / WCAG 2.2'],
    featured: true,
    diagrams: [
      {
        title: 'ADS Concept Model & Domain Architecture',
        subtitle: 'High-Level Information Architecture & Entity Relationships',
        description: 'My conceptual architecture framework illustrating how employee inputs—outside activities, financial interests, and institutional relationships—feed into the centralized Activities & Disclosures System (ADS) to produce tailored, legally binding Mitigation Plans.',
        imageUrl: '/assets/aistudio/Concept_Map_ADS_fc0f040d.png',
      },
      {
        title: 'ADS Future-State Process Architecture & Review Sub-Processes',
        subtitle: 'End-to-End BPMN Workflow, Decision Trees & Multi-Role Reviewers',
        description: 'My future-state process architecture for outside activities not involving licensing of NLR-owned IP. I mapped form field requirements, role determination logic, and discrete review sub-processes across Line Managers, Senior Managers, General Counsel (OGC), and Tech Transfer (LTM).',
        imageUrl: '/assets/aistudio/Process_Map_-_Future_State_ADS_eca830e1.png',
      },
    ],
  },
  {
    id: 'government-property-app',
    title: 'Government Property Application',
    subtitle: 'Federal Asset Lifecycle Tracking, Section 508 Accessibility & Accountability System',
    category: 'Business Analysis',
    track: 'both',
    organization: 'National Laboratory of the Rockies',
    period: '2022 – 2024',
    role: 'Senior IT Business Analyst & Section 508 Lead',
    summary:
      'I led business analysis, requirements elicitation, and Section 508 accessibility compliance for the enterprise Government Property Application, tracking scientific asset lifecycles and ensuring federal audit accountability across laboratory facilities.',
    challenge:
      'Managing high-value federal scientific instruments and capital assets required strict compliance with FAR and DOE regulations. Legacy handoffs were paper-based, annual inventory reconciliations took months, and the previous tool failed federal Section 508 accessibility standards for custodians and technicians using assistive technology.',
    solution:
      'I facilitated discovery workshops with property custodians, logistics managers, and engineers to map end-to-end custody workflows and barcode/RFID specifications. I authored all functional requirements and championed built-in Section 508 / WCAG 2.2 AA standards across every desktop table, search filter, and mobile scanning interface.',
    keyOutcomes: [
      'Centralized lifecycle tracking for thousands of federal scientific assets across multi-facility laboratory campuses',
      'Achieved 100% Section 508 accessibility compliance across all asset intake, audit, and transfer screens',
      'Reduced annual physical inventory reconciliation cycle time by 35% through digitized custody tracking',
      'Implemented automated audit trails and variance reporting meeting stringent federal property accountability standards',
    ],
    deliverables: [
      'Asset Lifecycle & Custody Transition Process Swimlanes',
      'Functional Requirements Document (FRD) & Field Custodian User Stories',
      'Section 508 Conformance Specification & Accessible Barcode Scanner UI Specs',
      'User Acceptance Testing (UAT) Test Plan & Custodian Training Documentation',
    ],
    technologies: ['Enterprise Asset Management', 'Section 508 / WCAG 2.2 AA', 'Process Modeling', 'Field Custody Workflows', 'Barcode/RFID Integration', 'Jira & Confluence'],
    featured: true,
    diagrams: [
      {
        title: 'NLR Enterprise Property Search & Asset Registry',
        subtitle: 'Federal Asset Query Interface & Custody Tracking System',
        description:
          'The baseline NLR Property Search interface analyzed during discovery. Custodians and logistics managers query capital equipment, scientific instrumentation, and DOE tag numbers across South Table Mountain (STM), Flatirons (FC), and offsite locations to initiate custody transfers and audit reconciliations.',
        imageUrl: '/assets/aistudio/Property_Search_b8525052.png',
      },
    ],
  },
  {
    id: 'annual-operating-plan',
    title: 'Annual Operating Plan (AOP) for Research',
    subtitle: 'Strategic Research Portfolio Allocation, Milestone Governance & Multi-Million Dollar Budget Planning',
    category: 'Business Analysis',
    track: 'ba',
    organization: 'National Laboratory of the Rockies',
    period: '2023 – Present',
    role: 'Senior IT Business Analyst',
    summary:
      'I directed business analysis and milestone governance modeling for the laboratory\'s Annual Operating Plan (AOP) system, coordinating multi-million-dollar federal research programs and DOE deliverable commitments across scientific directorates.',
    challenge:
      'Annual research planning across our clean energy, computing, and materials directorates was slowed down by disconnected spreadsheets and conflicting milestone definitions. Reconciling commitments between Principal Investigators, finance leads, and federal program sponsors took months of manual back-and-forth.',
    solution:
      'I established a unified AOP process architecture and baseline requirements catalog. I mapped inter-directorate milestone dependencies and executive approval gates, then used AI-assisted analysis to surface milestone gaps and budget anomalies early—giving leadership and federal sponsors clear visibility into deliverable health.',
    keyOutcomes: [
      'Unified annual research planning across diverse scientific directorates into a single standardized platform',
      'Compressed annual research planning cycle by 4 weeks through automated milestone validation workflows',
      'Delivered real-time executive visibility into project spend velocity, milestone burn-downs, and DOE deliverables',
      'Engineered flexible change-control workflows supporting mid-year budget reallocations and scope revisions',
    ],
    deliverables: [
      'AOP Milestone Governance & Allocation Process Maps',
      'Multi-Directorate Business Requirements Document (BRD) & User Stories',
      'Executive Portfolio Health Dashboards & Financial Allocation Wireframes',
      'PI Stakeholder Engagement & Change Management Framework',
    ],
    technologies: ['Research Portfolio Planning', 'Milestone Governance', 'Executive Reporting', 'BPMN Workflow Modeling', 'AI Requirements Optimization', 'Stakeholder Facilitation'],
    featured: true,
    diagrams: [
      {
        title: 'NLR Program Management Site — Research Project Plan & AOP Modality Matrix',
        subtitle: 'Power Apps Enterprise Research Governance, DOE Crosscuts & Milestone Tracking',
        description:
          'The comprehensive AOP Project Plan interface engineered to govern federal research initiatives. It unifies project scope, DOE crosscuts, TRL modalities (Modalities 1–9), deliverable schedules, milestone dependencies, and multi-directorate budget allocations within a standardized governance system.',
        imageUrl: '/assets/aistudio/Program_Management_473f745c.png',
      },
    ],
  },
  {
    id: 'accessibility-scanner',
    title: 'Enterprise Accessibility Scanning Platform',
    subtitle: 'Automated Web Domain Evaluation & Remediation Framework',
    category: 'Accessibility',
    track: 'accessibility',
    organization: 'National Laboratory of the Rockies (formerly NREL)',
    period: '2022 – Present',
    role: 'Product Owner & IT Accessibility Lead',
    summary:
      'I serve as Product Owner for our enterprise-wide automated accessibility scanning platform, monitoring laboratory web domains, managing vendor SLAs, and establishing actionable remediation pipelines.',
    challenge:
      'Our web teams manage dozens of departmental sites and scientific portals, but lacked a centralized way to monitor Section 508 and WCAG compliance. Raw automated scans generated thousands of unstructured errors, overwhelming engineering teams without clear prioritization or remediation guidance.',
    solution:
      'I stepped in as Product Owner for the platform, establishing recurring scan schedules and vendor evaluations. I transformed raw scan diagnostics into prioritized Jira backlogs with clear user stories and acceptance criteria, partnering directly with developers and UX designers to eliminate blocking barriers first.',
    keyOutcomes: [
      'Operationalized continuous scanning across all laboratory public web domains and digital portals',
      'Established actionable remediation prioritization matrices translating automated violations into dev tickets',
      'Integrated accessibility acceptance criteria directly into standard enterprise release reviews',
      'Authored stakeholder guidance and remediation documentation adopted across multiple engineering teams',
    ],
    deliverables: [
      'Enterprise Accessibility Scanning Governance Playbook',
      'Vendor SLA & Capability Evaluation Framework',
      'Automated Scan to Jira Backlog Remediation Pipeline',
      'Executive Compliance Dashboards & Status Reporting',
    ],
    technologies: ['Automated Scanning Platform', 'Jira', 'Confluence', 'WCAG 2.1/2.2 AA', 'Section 508', 'HTML5/ARIA'],
    featured: false,
  },
  {
    id: 'enterprise-lms-implementation',
    title: 'Enterprise Learning Management System (LMS) & Training Platforms',
    subtitle: 'Campus & Institutional Training System Digital Transformations',
    category: 'Business Analysis',
    track: 'ba',
    organization: 'National Laboratory of the Rockies & Texas A&M',
    period: '2019 – Present',
    role: 'Full-SDLC IT Business Analyst',
    summary:
      'I served as a core IT Business Analyst for enterprise Learning Management Systems (LMS) and institutional training portals, coordinating full-SDLC rollouts, systems integration, and digital accessibility compliance across federal research and academic campus environments.',
    challenge:
      'Migrating and operating institutional training systems required coordinating mandatory compliance modules, transcript records, and automated identity/HR syncs across thousands of users while ensuring all training content met federal Section 508 and WCAG accessibility standards.',
    solution:
      'I partnered with leadership, compliance directors, and vendor engineers to specify API integrations, lead discovery workshops, manage validation testing, and establish accessibility governance ensuring all training materials are accessible to all personnel.',
    keyOutcomes: [
      'Successfully transitioned campus-wide courses and institutional personnel onto modernized LMS and training platforms',
      'Ensured seamless automated enrollment, compliance certification tracking, and identity system data fidelity',
      'Standardized course and training accessibility benchmarks ensuring digital materials adhered to Section 508',
      'Facilitated change management, personnel training documentation, and cutover readiness',
    ],
    deliverables: [
      'System Integration Requirements (SIS & Identity to LMS API Specifications)',
      'Cross-Departmental Stakeholder Requirements Catalog',
      'Section 508 Accessible Training Material Conformance Playbook',
      'Knowledge Base Articles & Cutover Readiness Contingency Plan',
    ],
    technologies: ['Cornerstone OnDemand LMS', 'Enterprise LMS SaaS', 'REST APIs', 'Student Information Systems (SIS)', 'Jira', 'Section 508 / WCAG 2.2'],
    featured: false,
    diagrams: [
      {
        title: 'Institutional Training & Cornerstone LMS Portal',
        subtitle: 'Enterprise Learning Management System (LMS) & Training Transcript Platform',
        description:
          'The enterprise Cornerstone OnDemand Institutional Training portal at the National Laboratory of the Rockies. Features mandatory compliance training workflows, transcript management, accessibility notices, and training catalog search for lab personnel.',
        imageUrl: '/assets/aistudio/training_0ac977fb.png',
      },
    ],
  },
  {
    id: 'accessibility-champions-erg',
    title: 'Accessibility Champions Employee Resource Group',
    subtitle: 'Grassroots Inclusion, Neurodiversity & Digital Accessibility Culture',
    category: 'Accessibility',
    track: 'accessibility',
    organization: 'National Laboratory of the Rockies',
    period: '2023 – Present',
    role: 'Founding / Development Contributor',
    summary:
      'I co-founded and help lead the Accessibility Champions Employee Resource Group (ERG), advocating for digital accessibility, disability inclusion, neurodiversity, and inclusive design practices across our organization.',
    challenge:
      'Digital accessibility is too often treated as an afterthought or a legal compliance checkbox rather than a core principle of inclusive design and workplace equity.',
    solution:
      'I helped launch the ERG to connect scientists, software engineers, and leadership. I organize educational workshops on assistive technologies, host sessions on neurodiversity, and advocate for inclusive tooling and documentation standards throughout the enterprise.',
    keyOutcomes: [
      'Fostered a thriving community of digital accessibility champions across national laboratory divisions',
      'Elevated awareness of neurodiversity, cognitive accessibility, and assistive technologies in everyday workflows',
      'Created a peer-to-peer feedback loop for testing laboratory applications with disabled employees',
      'Built executive sponsorship for laboratory-wide digital accessibility initiatives',
    ],
    deliverables: [
      'ERG Charter & Organizational Mission Statement',
      'Inclusive Meeting & Presentation Best Practices Guide',
      'Digital Accessibility Awareness Workshop Series',
      'Laboratory-Wide Assistive Technology Resource Directory',
    ],
    technologies: ['Community Building', 'Educational Workshops', 'Assistive Tech (JAWS, NVDA, VoiceOver)', 'Inclusive Culture'],
    featured: false,
  },
  {
    id: 'figma-enterprise-governance',
    title: 'Figma Enterprise Stewardship & Accessible UX',
    subtitle: 'Design System Governance & Accessibility Handoff',
    category: 'Product Ownership',
    track: 'both',
    organization: 'National Laboratory of the Rockies',
    period: '2022 – Present',
    role: 'Product Owner / Backup Product Owner',
    summary:
      'I provide product ownership and business analysis for our Figma enterprise deployment, embedding accessibility criteria, design tokens, and usability standards directly into design-to-engineering handoffs.',
    challenge:
      'Our designers and engineers previously worked in silos, leading to prototypes with contrast violations, missing focus indicators, and ambiguous specifications that required costly rework in production.',
    solution:
      'I established workspace governance, seat licensing models, and design system guidelines. I worked with UX teams to integrate automated contrast checks, screen reader annotations, and keyboard navigation notes directly into Figma components before engineering handoff.',
    keyOutcomes: [
      'Streamlined design-to-development handoffs by embedding accessibility acceptance criteria directly in Figma components',
      'Optimized enterprise workspace organization, seat allocations, and vendor relationship management',
      'Trained UX designers and software teams on keyboard navigation specs and Section 508 design best practices',
      'Prevented downstream accessibility rework by catching design deficiencies before coding begins',
    ],
    deliverables: [
      'Figma Enterprise Governance Guidelines & Seat Allocation Model',
      'Accessible Component Annotation Checklist',
      'Design-to-Dev Handoff Specifications',
      'Vendor Coordination & Capability Roadmap Assessments',
    ],
    technologies: ['Figma Enterprise', 'Design Systems', 'WCAG 2.1 AA Tokens', 'A11y Plugins', 'Vendor Management'],
    featured: false,
  },
  {
    id: 'ai-assisted-business-analysis',
    title: 'AI-Enabled Business Analysis & Architecture Support',
    subtitle: 'Leveraging Generative AI to Accelerate Requirements & SDLC',
    category: 'AI & Process',
    track: 'ba',
    organization: 'National Laboratory of the Rockies',
    period: '2023 – Present',
    role: 'Senior IT Business Analyst',
    summary:
      'I pioneered generative AI workflows for our business analysis practice, developing structured prompt pipelines to accelerate requirements elicitation, gap analysis, and solution architecture documentation.',
    challenge:
      'Complex enterprise discovery cycles consumed weeks of manual effort synthesizing hours of stakeholder interviews, regulatory mandates, and dependency trees into technical specifications.',
    solution:
      'I engineered reusable prompt templates that turn raw interview transcripts into structured user stories, Gherkin acceptance criteria, and architecture comparison matrices—maintaining strict human-in-the-loop validation while cutting initial drafting time in half.',
    keyOutcomes: [
      'Accelerated initial requirements drafting and user story generation by ~50% without sacrificing rigor',
      'Systematically uncovered hidden edge cases and cross-system dependencies during early discovery',
      'Standardized documentation clarity across technical developers and non-technical business partners',
      'Freed up analyst bandwidth to focus on strategic stakeholder relationships and architecture negotiations',
    ],
    deliverables: [
      'AI-Assisted Requirements Engineering Prompt Library',
      'Automated Stakeholder Synthesis to User Story Workflow',
      'Architecture Alternative Trade-off Template',
      'AI Ethical & Data Privacy Usage Guidelines for BA Workflows',
    ],
    technologies: ['Generative AI', 'Prompt Engineering', 'Requirements Synthesis', 'Architecture Support', 'Workflow Optimization'],
    featured: false,
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'national-lab',
    organization: 'National Laboratory of the Rockies (formerly National Renewable Energy Lab)',
    roleTitle: 'IT Business Analyst & Section 508 Coordinator',
    previousRoles: [{ title: 'Information Analyst', period: '2022 – 2024' }],
    period: '2022 – Present',
    location: 'Colorado',
    summary:
      'I lead enterprise IT accessibility and Section 508 governance while directing business analysis across research and enterprise systems.',
    highlights: [
      'I led end-to-end business analysis for a custom Conflict of Interest (COI) disclosure platform, translating regulatory policies into functional specifications.',
      'I served as a core BA for the full-SDLC rollout and campus-wide migration to a modernized Learning Management System (LMS) serving 5,000+ users.',
      'I serve as Product Owner for our enterprise accessibility scanning platform, monitoring and benchmarking laboratory web domains for WCAG 2.2 AA and Section 508 compliance.',
      'I manage stakeholder requirements, vendor roadmaps, and continuous scanning operations for our digital accessibility tools.',
      'I help software teams interpret scan diagnostics, converting raw accessibility issues into prioritized user stories with clear remediation steps.',
      'I embed Section 508 criteria into technology procurement evaluations, design system reviews, and sprint acceptance definitions.',
      'I serve as product owner / backup product owner for our Figma enterprise platform, establishing accessible design tokens and developer handoff guidelines.',
      'I apply generative AI prompt workflows to analyze business requirements, map system dependencies, and evaluate vendor alternatives.',
      'I co-founded and actively lead our Accessibility Champions Employee Resource Group, advancing disability inclusion and assistive tech awareness.',
    ],
    competencies: [
      'Section 508 Compliance',
      'Automated Accessibility Scanning',
      'WCAG 2.1/2.2 AA',
      'Product Ownership',
      'Generative AI Business Analysis',
      'Vendor Coordination',
      'Figma Enterprise',
      'Cross-Functional Facilitation',
    ],
    tracks: ['accessibility', 'ba'],
  },
  {
    id: 'texas-am',
    organization: 'Texas A&M University',
    roleTitle: 'Information Technology Business Analyst II',
    previousRoles: [{ title: 'Information Technology Business Analyst I', period: '2018 – 2020' }],
    period: '2018 – 2022',
    location: 'College Station, Texas',
    summary:
      'I progressed through consecutive promotions to lead business analysis for enterprise software rollouts and custom application development across the university research ecosystem.',
    highlights: [
      'I transformed complex administrative processes into functional requirements, user stories, Gherkin criteria, and BPMN workflow diagrams.',
      'I planned and led user acceptance testing (UAT), stakeholder validation workshops, and defect triage across academic and administrative departments.',
      'I served as a strategic liaison connecting university faculty, executive leadership, and technology vendors to ensure on-time system cutovers.',
      'I earned promotion from IT Business Analyst I to IT Business Analyst II, taking on expanded scope for enterprise-tier integrations and architecture.',
    ],
    competencies: [
      'Requirements Elicitation & Engineering',
      'Full SDLC Management',
      'Custom Software Development',
      'Enterprise LMS Implementation',
      'Business Process Modeling (BPMN)',
      'User Acceptance Testing (UAT)',
      'Stakeholder Management',
    ],
    tracks: ['ba', 'accessibility'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Accessibility & Section 508 Governance',
    description: 'Deep specialized domain leadership ensuring digital equity, legal compliance, and inclusive UX.',
    track: 'accessibility',
    skills: [
      { name: 'Section 508 Standards', level: 'Expert', context: 'Federal compliance audits & institutional policy' },
      { name: 'WCAG 2.1 & 2.2 AA/AAA', level: 'Expert', context: 'Web, documents, interactive forms & UI widgets' },
      { name: 'Automated Scanning Platforms', level: 'Expert', context: 'Lab-wide domain auditing & monitoring' },
      { name: 'Accessibility Testing & Remediation', level: 'Expert', context: 'Translating violations into sprint tickets' },
      { name: 'Inclusive Design & Accessible UX', level: 'Advanced', context: 'Keyboard navigation, color contrast, focus order' },
      { name: 'Accessibility Program Development', level: 'Advanced', context: 'ERG founding, policy creation, awareness' },
      { name: 'Assistive Tech Testing', level: 'Advanced', context: 'Screen readers (JAWS, NVDA, VoiceOver)' },
      { name: 'VPAT & ACR Evaluation', level: 'Advanced', context: 'Vendor software accessibility procurement' },
    ],
  },
  {
    title: 'Business Analysis & Requirements Engineering',
    description: 'Transforming complex business, regulatory, and technical needs into scalable software solutions.',
    track: 'ba',
    skills: [
      { name: 'Requirements Elicitation & Discovery', level: 'Expert', context: 'Interviews, workshops, cross-functional sessions' },
      { name: 'Functional & Non-Functional Specs', level: 'Expert', context: 'BRDs, FRDs, Traceability Matrices' },
      { name: 'User Stories & Acceptance Criteria', level: 'Expert', context: 'Agile/Scrum, Gherkin Given/When/Then syntax' },
      { name: 'Business Process & Workflow Modeling', level: 'Expert', context: 'BPMN, swimlane diagrams, current/future state' },
      { name: 'Gap Analysis & Root Cause Analysis', level: 'Expert', context: 'Systems modernization, legacy system replacement' },
      { name: 'User Acceptance Testing (UAT)', level: 'Advanced', context: 'Test plan design, execution & defect management' },
      { name: 'Stakeholder & Change Management', level: 'Advanced', context: 'Executive alignment, buy-in, training resources' },
      { name: 'Full-Lifecycle SDLC Leadership', level: 'Advanced', context: 'Discovery through post-implementation reviews' },
    ],
  },
  {
    title: 'AI & Emerging Technologies in Analysis',
    description: 'Pioneering generative AI workflows to accelerate requirements engineering and documentation.',
    track: 'ba',
    skills: [
      { name: 'AI-Assisted Requirements Analysis', level: 'Advanced', context: 'Uncovering edge cases, ambiguities, and logic gaps' },
      { name: 'Generative AI Prompt Engineering', level: 'Advanced', context: 'Custom prompts for user stories & test scenarios' },
      { name: 'AI-Enabled Process Improvement', level: 'Advanced', context: 'Automating recurring administrative workflows' },
      { name: 'Solution Architecture Support', level: 'Advanced', context: 'Evaluating vendor alternatives and trade-offs' },
      { name: 'AI-Assisted Documentation Synthesis', level: 'Advanced', context: 'Synthesizing discovery notes into structured specs' },
    ],
  },
  {
    title: 'Product Leadership & Enterprise Tooling',
    description: 'Guiding enterprise SaaS tools, design systems, and cross-functional technology teams.',
    track: 'both',
    skills: [
      { name: 'Product Ownership & Management', level: 'Advanced', context: 'Roadmap, backlog grooming, MVP definition' },
      { name: 'Figma Enterprise', level: 'Advanced', context: 'Design system stewardship, accessible UI tokens' },
      { name: 'Enterprise SaaS Implementation', level: 'Advanced', context: 'LMS, compliance portals, campus-wide rollouts' },
      { name: 'Vendor Engagement & Coordination', level: 'Advanced', context: 'SOW, SLA evaluation, feature requests' },
      { name: 'Atlassian Suite (Jira & Confluence)', level: 'Expert', context: 'Backlogs, documentation, workflow automations' },
      { name: 'Cross-Functional Team Leadership', level: 'Expert', context: 'Bridging engineering, design, and business leaders' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Certified Professional in Accessibility Core Competencies',
    acronym: 'CPACC',
    issuer: 'International Association of Accessibility Professionals (IAAP)',
    year: 'Expected 2026',
    status: 'In Progress',
    description:
      'Premier international certification verifying cross-disciplinary foundational knowledge in disabilities, accessibility laws, standards, and universal design principles.',
  },
  {
    name: 'Business Relationship Management Professional',
    acronym: 'BRMP®',
    issuer: 'Business Relationship Management Institute',
    year: '2019',
    status: 'Active',
    description:
      'Advanced credentials certifying expertise in establishing strategic partnerships between IT and business units, value management, and driving organizational convergence.',
  },
  {
    name: 'ITIL® 4 Foundation in IT Service Management',
    acronym: 'ITIL 4',
    issuer: 'PeopleCert',
    year: '2022',
    status: 'Active',
    description:
      'Global framework certifying IT service management, service value systems, incident and change enablement, and continuous operational improvement.',
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'Texas A&M University',
    school: 'The Bush School of Government & Public Service',
    degree: 'Master of International Affairs (MIA)',
    year: '2017',
    details: 'Focus on strategic policy, complex institutional analysis, cross-cultural diplomacy, and institutional governance.',
  },
  {
    institution: 'Texas A&M University',
    degree: 'Bachelor of Arts in International Studies (BA)',
    year: '2015',
    details: 'Interdisciplinary analytical foundation in policy research, communications, systems thinking, and organizational dynamics.',
  },
];

export const SECTION_508_SIMULATOR_TESTS = [
  {
    id: 'contrast-ratio',
    title: 'Text Contrast & Visual Perception',
    wcagCriterion: '1.4.3 Contrast (Minimum) (Level AA)',
    section508Ref: '508 Chapter 5 - 502.3.8 Color Contrast',
    description: 'Evaluates foreground-to-background contrast for normal text (minimum 4.5:1) and large text (3:1).',
    badExample: {
      label: 'Failing Contrast Sample (2.1:1)',
      style: 'bg-slate-100 text-slate-400 p-3 rounded border border-slate-200',
      text: 'Submit Annual Disclosure Now',
      issue: 'Text contrast fails WCAG 4.5:1 threshold; nearly invisible to low-vision users and under bright sunlight.',
    },
    goodExample: {
      label: 'Passing Contrast Sample (7.4:1)',
      style: 'bg-slate-900 text-white p-3 rounded font-medium',
      text: 'Submit Annual Disclosure Now',
      issue: 'Exceeds WCAG AAA threshold; crisp readability across all screen calibrations.',
    },
    remediationAdvice: 'Update color palette tokens in design systems; use automated linting in CI/CD pipeline to reject CSS tokens with contrast < 4.5:1.',
  },
  {
    id: 'form-labels',
    title: 'Form Inputs & Accessible Name Resolution',
    wcagCriterion: '1.3.1 Info and Relationships & 3.3.2 Labels or Instructions',
    section508Ref: '508 Chapter 5 - 502.3.1 Form Elements',
    description: 'Ensures every input has an explicitly linked label via <label for="..."> or aria-labelledby.',
    badExample: {
      label: 'Failing: Visual-Only Placeholder',
      codeSnippet: '<input type="text" placeholder="Enter conflict amount" />',
      issue: 'Screen readers announce "Edit text, blank" without context. Disappears when user begins typing.',
    },
    goodExample: {
      label: 'Passing: Explicit Label + Helper Text',
      codeSnippet: '<label for="amt" class="font-medium">Conflict Amount ($)</label>\n<input id="amt" type="number" aria-describedby="amt-hint" />\n<span id="amt-hint" class="text-xs">Disclose amounts over $5,000</span>',
      issue: 'Screen readers announce name, role, expected format, and auxiliary hint text immediately upon focus.',
    },
    remediationAdvice: 'Never rely on placeholder attributes alone. Enforce ESLint jsx-a11y/label-has-associated-control rule.',
  },
  {
    id: 'keyboard-focus',
    title: 'Keyboard Focus Indicators & Navigation Order',
    wcagCriterion: '2.4.7 Focus Visible & 2.1.1 Keyboard Accessible',
    section508Ref: '508 Chapter 5 - 502.3.3 Focus and Selection',
    description: 'Interactive controls must be operable via Tab/Shift+Tab and display high-contrast visible focus rings.',
    badExample: {
      label: 'Failing: outline: none;',
      codeSnippet: 'button:focus { outline: none; } /* Focus trapped / invisible */',
      issue: 'Keyboard-only and switch-device users have no visual feedback on which button is currently selected.',
    },
    goodExample: {
      label: 'Passing: Visible Focus Ring with Offset',
      codeSnippet: 'button:focus-visible { outline: 2px solid #2563eb; outline-offset: 2px; }',
      issue: 'Clear, high-contrast visual halo indicates focused element without disturbing mouse clicks.',
    },
    remediationAdvice: 'Mandate focus-visible design tokens across the enterprise Figma UI library and run keyboard walkthrough audits.',
  },
];

export const AI_BA_WORKBENCH_TEMPLATES = [
  {
    id: 'stakeholder-coi',
    title: 'COI Fast-Track Disclosure for Academic Consulting',
    rawInput:
      'Met with Dr. Higgins from Chemical Engineering. Researchers are complaining that whenever they do paid external consulting under $5k, they still have to fill out the giant 12-page annual disclosure. It takes 3 weeks for legal review and delays contracts. They want a 2-minute fast-track form if there are no patents involved, but research compliance still needs an automated audit log and dean email notification.',
    domain: 'Higher Education Research Compliance',
    generatedStories: [
      {
        title: 'US-204: Expedited Consulting Disclosure Submission',
        userStory: 'As a university faculty researcher performing external consulting under $5,000 without IP conflicts,\nI want an expedited 3-step digital disclosure workflow,\nSo that I can obtain compliance pre-clearance within 2 business days without administrative bottleneck.',
        gherkin: `Scenario: Fast-track submission within financial threshold
  Given the faculty member is logged in via institutional SSO
  And has selected "External Consulting" as disclosure type
  When they enter a compensation amount less than $5,000
  And attest that no university-owned IP or patents are involved
  Then the system displays the "Fast-Track Eligible" indicator
  And automatically routes the submission to Department Chair notification queue
  And generates an immutable audit timestamp in the compliance database.`,
        accessibilityNotes: 'Form must support keyboard-only operation, proper ARIA fieldsets for conditional questions, and live region feedback when financial threshold unlocks fast-track.',
        architectureNotes: 'Trigger event-driven webhook to notifications microservice; store cryptographic hash of attestation in regulatory audit ledger.',
      },
    ],
  },
  {
    id: 'scanner-prioritization',
    title: 'Automated Accessibility Scan Violations to Dev Sprints',
    rawInput:
      'Our monthly automated scan completed across 48 laboratory domains. It reported 1,420 total accessibility errors. Webmasters are overwhelmed and don’t know what to fix first. Most errors are missing image alt tags in old news archives from 2017, but there are also broken keyboard focus rings on the primary login modal and color contrast issues on the main scientific dataset query button.',
    domain: 'Enterprise National Laboratory IT',
    generatedStories: [
      {
        title: 'US-508: Triaged Severity Matrix for Automated Scan Remediation',
        userStory: 'As an enterprise Section 508 coordinator and web product owner,\nI want automated scan findings grouped into Severity Tiers (Blocker: Keyboard/Auth; Critical: Primary CTAs; Minor: Archived Media),\nSo that engineering sprints fix user-blocking defects within 10 days rather than getting paralyzed by historical archive warnings.',
        gherkin: `Scenario: High-impact authentication barrier triage
  Given an automated scan detects WCAG 2.1.1 (Keyboard Trap / Focus Loss) on the user login modal
  When the finding is parsed into the remediation backlog
  Then it must be tagged with "Priority 1 - Blocker"
  And automatically assigned a 5-day SLA
  And routed directly to the Identity & Access Management engineering team.`,
        accessibilityNotes: 'Modal must implement focus trap (focus stays within modal while open) and restore focus to triggering button upon closure.',
        architectureNotes: 'Integrate scanning platform API with Jira automation rules to map scan rule IDs (axe-core) to specific Jira epics and development teams.',
      },
    ],
  },
];
