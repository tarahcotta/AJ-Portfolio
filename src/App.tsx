import React, { useState } from 'react';
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

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

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
      className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-colors ${fontSizeClass} ${
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
      />

      {/* Top Navbar */}
      <Navbar
        onToggleA11yPanel={() => setIsA11yPanelOpen((prev) => !prev)}
        isA11yPanelOpen={isA11yPanelOpen}
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
