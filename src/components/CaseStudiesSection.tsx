import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Eye, FileCode2, Layers, Network, ShieldCheck } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { useLiveAnnouncer } from './LiveAnnouncer';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  activeFilter?: string;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
}) => {
  const { announce } = useLiveAnnouncer();
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState<'all' | 'accessibility' | 'ba'>('all');

  // The 3 primary case study IDs requested by the user
  const PRIMARY_IDS = [
    'conflict-of-interest-system',
    'government-property-app',
    'annual-operating-plan',
  ];

  // Filtered pool based on discipline
  const matchingStudies = CASE_STUDIES.filter((cs) => {
    if (filter === 'all') return true;
    if (filter === 'accessibility') return cs.track === 'accessibility' || cs.track === 'both';
    if (filter === 'ba') return cs.track === 'ba' || cs.track === 'both';
    return true;
  });

  // If not expanded:
  // - For 'all', show the 3 primary case studies in order
  // - For specific filters, show up to 3 matching studies
  // If expanded: show all matching studies
  const displayedCaseStudies = isExpanded
    ? matchingStudies
    : filter === 'all'
    ? CASE_STUDIES.filter((cs) => PRIMARY_IDS.includes(cs.id))
    : matchingStudies.slice(0, 3);

  const a11yCount = CASE_STUDIES.filter((cs) => cs.track === 'accessibility' || cs.track === 'both').length;
  const baCount = CASE_STUDIES.filter((cs) => cs.track === 'ba' || cs.track === 'both').length;

  const handleFilterChange = (newFilter: 'all' | 'accessibility' | 'ba') => {
    setFilter(newFilter);
    const label =
      newFilter === 'all'
        ? 'All initiatives'
        : newFilter === 'accessibility'
        ? 'Section 508 & Accessibility initiatives'
        : 'Enterprise BA & AI initiatives';
    announce(`Filtering case studies by: ${label}. Showing ${isExpanded ? matchingStudies.length : Math.min(3, matchingStudies.length)} case studies.`);
  };

  const handleToggleExpand = () => {
    const nextState = !isExpanded;
    setIsExpanded(nextState);
    if (nextState) {
      announce(`Expanded case studies view. Showing all ${matchingStudies.length} matching initiatives.`);
    } else {
      announce('Collapsed case studies view. Returned to 3 main featured case studies.');
    }
  };

  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
              <span>Featured Initiatives</span>
              <span aria-hidden="true">·</span>
              <span>Proven Enterprise Track Record</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Strategic Case Studies & Enterprise Leadership
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              In-depth deep dives into the custom enterprise systems, federal regulatory compliance platforms, and digital accessibility initiatives I've led.
            </p>
          </div>

          {/* Persistent Interactive Filter / Scope Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0 self-start md:self-auto">
            <div
              role="tablist"
              aria-label="Filter case studies by domain"
              className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl border border-slate-300/70"
            >
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'all'}
                onClick={() => handleFilterChange('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({CASE_STUDIES.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'accessibility'}
                onClick={() => handleFilterChange('accessibility')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'accessibility'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Accessibility & 508 ({a11yCount})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'ba'}
                onClick={() => handleFilterChange('ba')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'ba'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Enterprise BA & AI ({baCount})
              </button>
            </div>

            <div className="text-xs text-slate-500 font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
              Showing {displayedCaseStudies.length} of {matchingStudies.length}
            </div>
          </div>
        </div>

        {/* 3-Column Bento Grid with Equal Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {displayedCaseStudies.map((cs) => {
            const hasDiagrams = cs.diagrams && cs.diagrams.length > 0;
            const trackBadge =
              cs.track === 'accessibility'
                ? { label: 'Section 508 & Accessibility', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/80' }
                : cs.track === 'ba'
                ? { label: 'Enterprise BA & Architecture', badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200/80' }
                : { label: 'Accessibility + Enterprise BA', badgeClass: 'bg-teal-50 text-teal-800 border-teal-200/80' };

            const architecturalMetrics: Record<string, { highlight: string; metric: string; tag: string }> = {
              'enterprise-accessibility-scanning': {
                highlight: 'Automated Axe Core & Deque WorldSpace CI/CD Governance',
                metric: '25+ Federal Web Domains · 100% Audit Coverage',
                tag: 'Automated 508 Testing Engine',
              },
              'figma-accessibility-design-system': {
                highlight: 'Accessible Tokens, Focus Rings & WCAG 2.2 AA Primitives',
                metric: '400+ Designers & Engineers · Cross-Platform UI Kit',
                tag: 'Design System Governance',
              },
              'erg-veterans-leadership': {
                highlight: 'Strategic Executive Sponsorship & Assistive Workplace Tech',
                metric: '850+ Laboratory Members · Executive Council Advisor',
                tag: 'Workforce & Leadership',
              },
              'ai-augmented-ba-methodology': {
                highlight: 'AI Prompt Engineering & Traceability Matrix Synthesizer',
                metric: '50% Faster Epics & Stories · Rigorous Verification',
                tag: 'AI Requirements Engineering',
              },
            };

            const archMetric = architecturalMetrics[cs.id];

            return (
              <article
                key={cs.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group"
              >
                {/* Top Visual Showcase / Artifact Frame (Uniform h-48 across all cards) */}
                <div className="h-48 w-full bg-slate-100/60 border-b border-slate-200 p-3 relative overflow-hidden flex flex-col justify-center">
                  {hasDiagrams ? (
                    cs.diagrams!.length === 1 ? (
                      /* Single Artifact Edge Preview */
                      <button
                        type="button"
                        onClick={() => onSelectCaseStudy(cs)}
                        className="relative w-full h-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xs group-hover:border-blue-500 transition-colors text-left focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 focus-visible:outline-offset-2"
                        title={`Inspect artifact: ${cs.diagrams![0].title}`}
                      >
                        <img
                          src={cs.diagrams![0].imageUrl}
                          alt={cs.diagrams![0].title}
                          className="w-full h-full object-contain p-2.5"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-xs text-[10px] font-semibold text-white tracking-wide shadow-xs">
                          <Network className="w-3 h-3 text-blue-400" aria-hidden="true" />
                          <span className="truncate max-w-[210px]">{cs.diagrams![0].title}</span>
                        </div>
                        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-blue-700 text-white text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                          <Eye className="w-3 h-3" aria-hidden="true" />
                          <span>Inspect</span>
                        </div>
                      </button>
                    ) : (
                      /* Dual Artifact Comparison Grid (COI BPMN + Domain Model) */
                      <div className="grid grid-cols-2 gap-2 w-full h-full">
                        {cs.diagrams!.slice(0, 2).map((diag, dIdx) => (
                          <button
                            key={dIdx}
                            type="button"
                            onClick={() => onSelectCaseStudy(cs)}
                            className="relative w-full h-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xs group-hover:border-blue-500 transition-colors text-left focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 focus-visible:outline-offset-2"
                            title={`Inspect: ${diag.title}`}
                          >
                            <img
                              src={diag.imageUrl}
                              alt={diag.title}
                              className="w-full h-full object-contain p-2"
                              loading="lazy"
                            />
                            <div className="absolute bottom-1.5 inset-x-1.5 px-1.5 py-0.5 rounded bg-slate-900/90 backdrop-blur-xs text-[9px] font-semibold text-white truncate shadow-xs text-center">
                              {diag.title}
                            </div>
                          </button>
                        ))}
                      </div>
                    )
                  ) : (
                    /* Architectural Blueprint & Metrics Anchor for initiatives without raster attachments */
                    <button
                      type="button"
                      onClick={() => onSelectCaseStudy(cs)}
                      className="w-full h-full rounded-xl border border-slate-200 bg-slate-50/90 hover:bg-slate-100/70 p-4 flex flex-col justify-between text-left group-hover:border-blue-400 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 focus-visible:outline-offset-2"
                      title={`Read ${cs.title} details`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded border border-blue-200">
                          {archMetric?.tag || cs.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-600 font-semibold">
                          {cs.period}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-950 line-clamp-1 mb-1 group-hover:text-blue-700 transition-colors">
                          {archMetric?.highlight || cs.role}
                        </div>
                        <div className="text-[11px] text-slate-700 font-medium line-clamp-2">
                          {archMetric?.metric || cs.organization}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-600 font-medium pt-1 border-t border-slate-200">
                        <span className="flex items-center gap-1 text-slate-800 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-700 shrink-0" aria-hidden="true" />
                          <span>Enterprise SDLC & Section 508</span>
                        </span>
                        <span className="text-blue-800 font-semibold flex items-center gap-0.5">
                          View details <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                        </span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Card Interior Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Categorical & Track Pill Metadata Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-md border ${trackBadge.badgeClass}`}>
                      {trackBadge.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 truncate max-w-[200px]">
                      {cs.organization}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors mb-1.5 leading-snug line-clamp-2">
                    <button
                      type="button"
                      onClick={() => onSelectCaseStudy(cs)}
                      className="text-left hover:underline focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 focus-visible:outline-offset-2 rounded-xs"
                    >
                      {cs.title}
                    </button>
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-4 line-clamp-1">
                    {cs.subtitle}
                  </p>

                  {/* Narrative Summary */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5 line-clamp-3">
                    {cs.summary}
                  </p>

                  {/* Highlight Outcomes (Structured scannable list) */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                      Key Quantifiable Outcomes
                    </div>
                    {cs.keyOutcomes.slice(0, 3).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-snug">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Aligned Sticky Footer */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-700">
                      {cs.technologies.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-slate-800 font-medium">
                          {tech}
                        </span>
                      ))}
                      {cs.technologies.length > 2 && (
                        <span className="text-slate-500 font-medium text-[11px]">+{cs.technologies.length - 2}</span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectCaseStudy(cs)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-700 hover:text-white text-xs font-semibold transition-all group/btn shadow-2xs focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 focus-visible:outline-offset-2"
                    >
                      <span>{hasDiagrams ? 'Explore System & Maps' : 'Deep Dive & Outcomes'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View More / View Less Action Bar */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleToggleExpand}
            aria-expanded={isExpanded}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100/70 text-sm font-semibold text-slate-800 shadow-xs hover:shadow-sm transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 focus-visible:outline-offset-2"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 text-blue-700" aria-hidden="true" />
                <span>Show Fewer Initiatives (Return to 3 Main Case Studies)</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-blue-700" aria-hidden="true" />
                <span>View More Initiatives ({matchingStudies.length - displayedCaseStudies.length > 0 ? `${matchingStudies.length - displayedCaseStudies.length} Additional Initiatives` : `All ${matchingStudies.length} Initiatives`})</span>
              </>
            )}
          </button>
          {!isExpanded && (
            <p className="mt-2 text-xs text-slate-500">
              Explore additional initiatives including Enterprise Accessibility Scanning Platform, LMS Rollout, Figma Governance, ERG Leadership, and AI Requirements.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
