import React from 'react';
import { Sliders, Mail, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onToggleA11yPanel: () => void;
  isA11yPanelOpen: boolean;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onToggleA11yPanel,
  isA11yPanelOpen,
  theme,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Skip to main content link for Section 508 / WCAG compliance */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-slate-950 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-2xl focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-slate-950 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 rounded-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
          >
            {PERSONAL_INFO.name}
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <a
              href="#overview"
              className="hover:text-slate-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 rounded-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
            >
              Overview
            </a>
            <a
              href="#case-studies"
              className="hover:text-slate-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 rounded-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
            >
              Case Studies
            </a>
            <a
              href="#interactive-lab"
              className="hover:text-slate-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 rounded-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
            >
              Audit & AI Lab
            </a>
            <a
              href="#experience"
              className="hover:text-slate-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 rounded-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
            >
              Experience
            </a>
          </nav>

          {/* Zone 3: Primary Action, Theme & Accessibility Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2 flex items-center justify-center cursor-pointer shadow-2xs"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
              )}
            </button>

            {/* Accessibility Panel Toggle */}
            <button
              type="button"
              onClick={onToggleA11yPanel}
              aria-label="Toggle Accessibility Controls"
              aria-expanded={isA11yPanelOpen}
              className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2 cursor-pointer ${
                isA11yPanelOpen
                  ? 'bg-blue-50 dark:bg-blue-950 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="Accessibility & Display Settings"
            >
              <Sliders className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span className="hidden sm:inline">A11y Tools</span>
            </button>

            {/* Direct Connect Action */}
            <a
              href="#contact"
              className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 rounded-lg hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
