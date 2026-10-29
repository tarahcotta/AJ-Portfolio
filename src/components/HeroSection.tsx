import React from 'react';
import { ShieldCheck, Brain, ArrowRight, MapPin, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onViewCaseStudies: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewCaseStudies }) => {
  return (
    <section id="overview" className="pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: Typographic Hierarchy on Left, Architectural Visual Anchor on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch mb-14">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 mb-4">
              <span className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Federal Laboratories & Higher Education</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Enterprise IT Systems</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 dark:text-white mb-4 text-balance">
              {PERSONAL_INFO.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg font-medium text-blue-900/90 dark:text-blue-300 mb-6 leading-snug">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Prose Overview */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {PERSONAL_INFO.overview}
            </p>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onViewCaseStudies}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 rounded-lg hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
              >
                <span>Explore Featured Case Studies</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#contact"
                className="px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 whitespace-nowrap focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
              >
                <span>Connect & Inquiries</span>
                <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Visual Anchor & Executive Profile Surface */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-700 shadow-xs transition-colors">
              <div>
                {/* Header of Anchor Card */}
                <div className="pb-5 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
                    <span className="text-xs font-semibold text-blue-800 dark:text-blue-300 uppercase tracking-wider block font-mono">
                      Active Enterprise Appointment
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                    National Laboratory of the Rockies
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                    Formerly National Renewable Energy Laboratory (NREL) · Colorado
                  </p>
                </div>

                {/* Primary Responsibilities - Clean Editorial List */}
                <div className="mt-6 space-y-6">
                  <div>
                    <div className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" aria-hidden="true" />
                      <span>Section 508 & IT Accessibility Leadership</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed ps-5.5">
                      I own the lab-wide automated scanning platform—evaluating public domains, managing vendor roadmaps, and translating scan diagnostics into prioritized dev backlogs.
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" aria-hidden="true" />
                      <span>Enterprise Requirements & Architecture</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed ps-5.5">
                      I translate complex research and operational processes into structured requirements, user stories, and architecture trade-offs—accelerated by custom AI workflows.
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" aria-hidden="true" />
                      <span>Figma Enterprise & Inclusive Culture</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed ps-5.5">
                      I steward enterprise Figma workspaces with accessible tokens and keyboard guidelines, and co-founded our laboratory-wide Accessibility Champions ERG.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Credentials Strip */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700 dark:text-slate-300 font-mono">
                <div>
                  <span className="text-slate-950 dark:text-white font-bold">BRMP®</span> (2019) · <span className="text-slate-950 dark:text-white font-bold">ITIL® 4</span> (2022)
                </div>
                <div className="text-blue-800 dark:text-blue-300 font-sans font-semibold">
                  CPACC Candidate (IAAP)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Impact Strip */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white font-mono tabular-nums">
                100%
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Domain Scanning Governance
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Lab-wide automated web accessibility evaluation & remediation triage
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white font-mono tabular-nums">
                45%
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Cycle Time Reduction
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Custom conflict-of-interest approval routing at National Laboratory of the Rockies
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white font-mono tabular-nums">
                5,000
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Campus LMS Users Served
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Full-SDLC procurement, API integration, and academic migration
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white font-mono tabular-nums">
                ~50%
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                Discovery & Spec Acceleration
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Generative AI prompt engineering for user stories & test cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
