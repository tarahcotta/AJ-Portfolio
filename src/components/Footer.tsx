import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-base font-bold text-white mb-1">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-slate-400 max-w-md">
              IT Accessibility Coordinator & Lead Business Analyst · Section 508 Governance
            </p>
          </div>

          <nav aria-label="Footer Sitemap" className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#overview" className="hover:text-white transition-colors">
              Overview
            </a>
            <a href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#interactive-lab" className="hover:text-white transition-colors">
              Audit & AI Lab
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed with WCAG 2.2 AA & Section 508 principles.</span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <span>
              Made by{' '}
              <a
                href="https://www.tarahcotta.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white underline decoration-slate-600 hover:decoration-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                Tarah Cotta
              </a>
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
