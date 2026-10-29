import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AccessibilityToolbar, A11ySettings } from './components/AccessibilityToolbar';
import { HeroSection } from './components/HeroSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InteractiveWorkbench } from './components/InteractiveWorkbench';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { AccessibilityAuditModal } from './components/AccessibilityAuditModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudy } from './data/portfolioData';

const DEFAULT_A11Y_SETTINGS: A11ySettings = {
  fontSize: 'normal',
  highContrast: false,
  dyslexicFont: false,
  enhancedFocus: false,
  underlineLinks: false,
  reducedMotion: false,
};

export default function App() {
  const [isA11yPanelOpen, setIsA11yPanelOpen] = useState(false);
  const [a11ySettings, setA11ySettings] = useState<A11ySettings>(DEFAULT_A11Y_SETTINGS);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleResetA11y = () => {
    setA11ySettings(DEFAULT_A11Y_SETTINGS);
  };

  const scrollToCaseStudies = () => {
    const el = document.getElementById('case-studies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Font size class mapping
  const fontSizeClass =
    a11ySettings.fontSize === 'large'
      ? 'text-[108%]'
      : a11ySettings.fontSize === 'xlarge'
      ? 'text-[116%]'
      : 'text-[100%]';

  return (
    <div
      className={`min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors ${fontSizeClass} ${
        a11ySettings.highContrast ? 'accessibility-high-contrast' : ''
      } ${a11ySettings.dyslexicFont ? 'accessibility-dyslexia' : ''} ${
        a11ySettings.enhancedFocus ? 'accessibility-focus-enhanced' : ''
      } ${a11ySettings.underlineLinks ? 'accessibility-underline-links' : ''} ${
        a11ySettings.reducedMotion ? 'accessibility-reduced-motion' : ''
      }`}
    >
      {/* Accessibility Toolbar */}
      <AccessibilityToolbar
        settings={a11ySettings}
        onUpdateSettings={setA11ySettings}
        onReset={handleResetA11y}
        onClose={() => setIsA11yPanelOpen(false)}
        onOpenAuditChecklist={() => setIsAuditModalOpen(true)}
        isOpen={isA11yPanelOpen}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Top Navbar */}
      <Navbar
        onToggleA11yPanel={() => setIsA11yPanelOpen((prev) => !prev)}
        isA11yPanelOpen={isA11yPanelOpen}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <HeroSection
          onViewCaseStudies={scrollToCaseStudies}
        />

        <CaseStudiesSection
          onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
        />

        <InteractiveWorkbench
          onOpenAuditChecklist={() => setIsAuditModalOpen(true)}
        />

        <ExperienceTimeline />

        <SkillsMatrix />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Comprehensive Accessibility Audit Checklist Modal */}
      <AccessibilityAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
