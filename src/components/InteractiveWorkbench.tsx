import React, { useState } from 'react';
import {
  ShieldCheck,
  Brain,
  CheckCircle,
  AlertTriangle,
  Code,
  FileCheck,
  RefreshCw,
  ArrowRight,
  Info,
  Copy,
  Check,
} from 'lucide-react';
import {
  SECTION_508_SIMULATOR_TESTS,
  AI_BA_WORKBENCH_TEMPLATES,
} from '../data/portfolioData';
import { useLiveAnnouncer } from './LiveAnnouncer';

interface InteractiveWorkbenchProps {
  onOpenAuditChecklist?: () => void;
}

export const InteractiveWorkbench: React.FC<InteractiveWorkbenchProps> = ({
  onOpenAuditChecklist,
}) => {
  const { announce } = useLiveAnnouncer();
  const [activeTab, setActiveTab] = useState<'a11y-audit' | 'ai-ba'>('a11y-audit');

  // A11y Simulator State
  const [selectedAuditTest, setSelectedAuditTest] = useState(SECTION_508_SIMULATOR_TESTS[0]);
  const [auditToggleState, setAuditToggleState] = useState<'bad' | 'good'>('bad');
  const [copiedRemediation, setCopiedRemediation] = useState(false);

  // AI BA Workbench State
  const [selectedPromptTemplate, setSelectedPromptTemplate] = useState(AI_BA_WORKBENCH_TEMPLATES[0]);
  const [customBrief, setCustomBrief] = useState(AI_BA_WORKBENCH_TEMPLATES[0].rawInput);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [activeGeneratedStoryIndex, setActiveGeneratedStoryIndex] = useState(0);
  const [copiedStory, setCopiedStory] = useState(false);

  const handleRunAiSynthesis = () => {
    setIsSynthesizing(false);
    announce('Synthesis complete: Stakeholder input structured into Gherkin user stories and Section 508 acceptance criteria.');
  };

  const handleSelectTemplate = (template: typeof AI_BA_WORKBENCH_TEMPLATES[0]) => {
    setSelectedPromptTemplate(template);
    setCustomBrief(template.rawInput);
    setActiveGeneratedStoryIndex(0);
    announce(`Selected template: ${template.title}`);
  };

  const handleCopyRemediation = () => {
    const text = `Remediation Protocol for ${selectedAuditTest.title} (${selectedAuditTest.wcagCriterion} / ${selectedAuditTest.section508Ref}):\n${selectedAuditTest.remediationAdvice}\n\nCompliant Implementation Note:\n${selectedAuditTest.goodExample.issue}`;
    navigator.clipboard.writeText(text);
    setCopiedRemediation(true);
    announce('Remediation advice copied to clipboard');
    setTimeout(() => setCopiedRemediation(false), 2000);
  };

  const handleCopyStory = () => {
    const currentStory = selectedPromptTemplate.generatedStories[activeGeneratedStoryIndex];
    const text = `User Story:\n${currentStory.userStory}\n\nAcceptance Criteria (Gherkin):\n${currentStory.gherkin}\n\nSection 508 / A11y Guardrails:\n${currentStory.accessibilityNotes}\n\nArchitecture Notes:\n${currentStory.architectureNotes}`;
    navigator.clipboard.writeText(text);
    setCopiedStory(true);
    announce('Synthesized agile story and Gherkin criteria copied to clipboard');
    setTimeout(() => setCopiedStory(false), 2000);
  };

  return (
    <section id="interactive-lab" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
              <span>Applied Methodology Demonstrator</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Framework</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Enterprise Audit & AI Analysis Workbench
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Explore how I bridge digital accessibility compliance governance and AI-assisted requirements engineering in mission-critical environments.
            </p>
          </div>

          {onOpenAuditChecklist && (
            <button
              type="button"
              onClick={onOpenAuditChecklist}
              className="px-4 py-2.5 bg-blue-50 border border-blue-200 hover:bg-blue-100/80 text-blue-800 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors shrink-0 shadow-2xs"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Open 7-Domain Audit Checklist</span>
            </button>
          )}
        </div>

        {/* Workbench Mode Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
          <div className="flex items-center gap-1 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('a11y-audit')}
              className={`flex-1 sm:flex-initial px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeTab === 'a11y-audit'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" aria-hidden="true" />
              <span>Section 508 & WCAG Audit Simulator</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ai-ba')}
              className={`flex-1 sm:flex-initial px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeTab === 'ai-ba'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Brain className="w-4 h-4 text-indigo-600" aria-hidden="true" />
              <span>AI-Assisted Requirements Workbench</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium px-3 hidden md:block">
            {activeTab === 'a11y-audit'
              ? 'Evaluating enterprise web standards'
              : 'Synthesizing stakeholder input into Gherkin user stories'}
          </div>
        </div>

        {/* TAB 1: SECTION 508 AUDIT SIMULATOR */}
        {activeTab === 'a11y-audit' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Test Selector */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
                Select Compliance Criterion
              </h3>
              {SECTION_508_SIMULATOR_TESTS.map((test) => (
                <button
                  key={test.id}
                  type="button"
                  onClick={() => {
                    setSelectedAuditTest(test);
                    setAuditToggleState('bad');
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedAuditTest.id === test.id
                      ? 'bg-blue-50/70 border-blue-400 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-semibold text-slate-900 mb-1">{test.title}</div>
                  <div className="text-[11px] font-mono text-blue-700 mb-1">{test.wcagCriterion}</div>
                  <div className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                    {test.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Interactive Diagnostic Lab */}
            <div className="lg:col-span-8 bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="text-xs text-blue-400 font-mono mb-1">
                    {selectedAuditTest.section508Ref}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedAuditTest.title}
                  </h3>
                </div>

                {/* State Toggle */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-800 rounded-lg border border-slate-700 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setAuditToggleState('bad');
                      announce(`Switched to non-compliant preview: ${selectedAuditTest.badExample.issue}`);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                      auditToggleState === 'bad'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Non-Compliant</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAuditToggleState('good');
                      announce(`Switched to remediated preview: ${selectedAuditTest.goodExample.issue}`);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                      auditToggleState === 'good'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Remediated</span>
                  </button>
                </div>
              </div>

              {/* Live Preview Display Container */}
              <div className="my-6 p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-center min-h-[160px]">
                <div className="text-[11px] font-mono text-slate-400 mb-3 uppercase tracking-wider">
                  Live Rendered Component Behavior:
                </div>

                {selectedAuditTest.id === 'contrast-ratio' && (
                  <div className="space-y-4">
                    <div
                      className={
                        auditToggleState === 'bad'
                          ? selectedAuditTest.badExample.style
                          : selectedAuditTest.goodExample.style
                      }
                    >
                      {auditToggleState === 'bad'
                        ? selectedAuditTest.badExample.text
                        : selectedAuditTest.goodExample.text}
                    </div>
                  </div>
                )}

                {selectedAuditTest.id === 'form-labels' && (
                  <div className="space-y-3 max-w-md">
                    {auditToggleState === 'bad' ? (
                      <div>
                        <input
                          type="text"
                          placeholder="Enter conflict amount"
                          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 placeholder:text-slate-500"
                        />
                        <p className="text-[11px] text-rose-400 mt-1">
                          No associated &lt;label&gt; tag found. Screen readers announce "Edit text blank".
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <label htmlFor="interactive-amt-demo" className="block text-xs font-medium text-slate-200">
                          Disclose Remuneration / Conflict Amount ($)
                        </label>
                        <input
                          id="interactive-amt-demo"
                          type="number"
                          defaultValue={4500}
                          aria-describedby="amt-helper-desc"
                          className="w-full px-3 py-2 bg-slate-900 border border-blue-500/80 rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <span id="amt-helper-desc" className="text-[11px] text-slate-400 block">
                          Disclose any external consulting income exceeding $5,000 threshold.
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {selectedAuditTest.id === 'keyboard-focus' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                          auditToggleState === 'bad'
                            ? 'bg-blue-600 text-white outline-none focus:outline-none focus:ring-0'
                            : 'bg-blue-600 text-white ring-3 ring-amber-400 ring-offset-2 ring-offset-slate-900'
                        }`}
                      >
                        Action Trigger (Tab Focus)
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded text-xs"
                      >
                        Secondary Option
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      {auditToggleState === 'bad'
                        ? 'Simulating keyboard tab focus with invisible outline (fails Section 508).'
                        : 'Simulating visible high-contrast focus indicator ring with offset (WCAG 2.4.7 AA compliant).'}
                    </p>
                  </div>
                )}
              </div>

              {/* Diagnostic Finding Details */}
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed ${
                    auditToggleState === 'bad'
                      ? 'bg-rose-950/40 border-rose-800/80 text-rose-200'
                      : 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
                  }`}
                >
                  <div className="font-semibold mb-1 flex items-center gap-1.5">
                    {auditToggleState === 'bad' ? (
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    )}
                    <span>
                      {auditToggleState === 'bad'
                        ? 'Automated Scan Diagnostic Finding'
                        : 'Verified Remediated State'}
                    </span>
                  </div>
                  <p>
                    {auditToggleState === 'bad'
                      ? selectedAuditTest.badExample.issue
                      : selectedAuditTest.goodExample.issue}
                  </p>
                </div>

                {/* Anthony's Remediation Advice */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-blue-400 uppercase tracking-wider block">
                      Anthony's Remediation Protocol & Governance Advice:
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyRemediation}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      title="Copy remediation advice to clipboard"
                    >
                      {copiedRemediation ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Protocol</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedAuditTest.remediationAdvice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI-ENABLED BA WORKBENCH */}
        {activeTab === 'ai-ba' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stakeholder Input / Scenario Selection */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Sample Enterprise Stakeholder Briefs
                </h3>
                <div className="space-y-2">
                  {AI_BA_WORKBENCH_TEMPLATES.map((tmpl) => (
                    <button
                      key={tmpl.id}
                      type="button"
                      onClick={() => handleSelectTemplate(tmpl)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                        selectedPromptTemplate.id === tmpl.id
                          ? 'bg-blue-50/70 border-blue-500 shadow-2xs'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{tmpl.title}</div>
                      <div className="text-[11px] text-blue-700 font-medium">{tmpl.domain}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="stakeholder-brief-input" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Raw Stakeholder Meeting Notes / Discovery Brief:
                  </label>
                  <span className="text-[11px] text-slate-500 font-mono">Input</span>
                </div>
                <textarea
                  id="stakeholder-brief-input"
                  value={customBrief}
                  onChange={(e) => setCustomBrief(e.target.value)}
                  rows={6}
                  className="w-full p-3.5 rounded-xl border border-slate-300 text-xs text-slate-800 font-sans focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 leading-relaxed"
                />
              </div>

              <button
                type="button"
                onClick={handleRunAiSynthesis}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <FileCheck className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>Synthesize Requirements & Acceptance Criteria</span>
              </button>
            </div>

            {/* Right Column: Generated BA Artifacts */}
            <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 mb-6 gap-3">
                <div>
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                    Structured Analysis Artifact Output
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {selectedPromptTemplate.generatedStories[activeGeneratedStoryIndex].title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyStory}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    title="Copy full story, Gherkin criteria, and architectural guardrails"
                  >
                    {copiedStory ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                    <span>{copiedStory ? 'Copied Artifact!' : 'Copy Artifact'}</span>
                  </button>
                  <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-mono">
                    User Story + BDD
                  </div>
                </div>
              </div>

              {/* User Story Box */}
              <div className="mb-5 p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-1.5 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Synthesized Agile User Story</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed whitespace-pre-line">
                  {selectedPromptTemplate.generatedStories[activeGeneratedStoryIndex].userStory}
                </p>
              </div>

              {/* Gherkin Acceptance Criteria */}
              <div className="mb-5 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Gherkin Acceptance Criteria (Given / When / Then)</span>
                </div>
                <pre className="text-slate-300 overflow-x-auto text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap">
                  {selectedPromptTemplate.generatedStories[activeGeneratedStoryIndex].gherkin}
                </pre>
              </div>

              {/* Accessibility & Architecture Guardrails */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
                  <span className="font-bold text-blue-400 block mb-1">
                    Section 508 / A11y Guardrails:
                  </span>
                  <p className="text-slate-300 leading-snug">
                    {selectedPromptTemplate.generatedStories[activeGeneratedStoryIndex].accessibilityNotes}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
                  <span className="font-bold text-slate-300 block mb-1">
                    Solution Architecture Notes:
                  </span>
                  <p className="text-slate-300 leading-snug">
                    {selectedPromptTemplate.generatedStories[activeGeneratedStoryIndex].architectureNotes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
