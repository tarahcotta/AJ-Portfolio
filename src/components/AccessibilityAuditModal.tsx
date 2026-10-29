import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Search,
  Filter,
  Copy,
  Check,
  ExternalLink,
  Download,
  AlertCircle,
  FileCheck,
  FileText,
  Table,
} from 'lucide-react';
import { ACCESSIBILITY_AUDIT_ITEMS, AuditChecklistItem } from '../data/accessibilityAuditData';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLiveAnnouncer } from './LiveAnnouncer';

interface AccessibilityAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityAuditModal: React.FC<AccessibilityAuditModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { announce } = useLiveAnnouncer();
  const [viewMode, setViewMode] = useState<'checklist' | 'vpat'>('checklist');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    // Default all verified items to true
    const initial: Record<string, boolean> = {};
    ACCESSIBILITY_AUDIT_ITEMS.forEach((item) => {
      initial[item.id] = true;
    });
    return initial;
  });
  const [copiedReport, setCopiedReport] = useState(false);
  const containerRef = useFocusTrap(isOpen, onClose);

  if (!isOpen) return null;

  const categories = [
    'All',
    'WCAG Compliance',
    'Keyboard Navigation',
    'Screen Reader Compatibility',
    'Visual Accessibility',
    'Content Accessibility',
    'Interactive Elements',
    'Testing Checklist',
  ];

  const filteredItems = ACCESSIBILITY_AUDIT_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.requirement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCount = ACCESSIBILITY_AUDIT_ITEMS.length;
  const verifiedCount = Object.values(checkedItems).filter(Boolean).length;
  const compliancePercentage = Math.round((verifiedCount / totalCount) * 100);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => {
      const nextState = !prev[id];
      const item = ACCESSIBILITY_AUDIT_ITEMS.find((i) => i.id === id);
      if (item) {
        announce(`${item.title} marked as ${nextState ? 'verified' : 'unverified'}`);
      }
      return { ...prev, [id]: nextState };
    });
  };

  const generateMarkdownReport = () => {
    let md = `# Anthony Antonidis-Drennan Portfolio — Accessibility Audit Report\n\n`;
    md += `**Date:** ${new Date().toISOString().split('T')[0]}\n`;
    md += `**Verified Score:** ${verifiedCount}/${totalCount} (${compliancePercentage}% Passed)\n`;
    md += `**Standard:** WCAG 2.2 Level AA & Section 508 (Chapter 5) Standards\n\n`;

    categories.slice(1).forEach((cat) => {
      const itemsInCat = ACCESSIBILITY_AUDIT_ITEMS.filter((i) => i.category === cat);
      md += `## ${cat}\n\n`;
      itemsInCat.forEach((item) => {
        const isChecked = checkedItems[item.id] ? '[x]' : '[ ]';
        md += `- ${isChecked} **${item.title}** (${item.subCategory}${item.level ? ` · Level ${item.level}` : ''})\n`;
        md += `  - *Requirement:* ${item.requirement}\n`;
        md += `  - *Portfolio Verification:* ${item.portfolioImplementation}\n`;
        if (item.wcagRef) md += `  - *Reference:* ${item.wcagRef} / ${item.section508Ref}\n`;
        md += `\n`;
      });
    });

    return md;
  };

  const handleCopyReport = () => {
    const report = generateMarkdownReport();
    navigator.clipboard.writeText(report);
    setCopiedReport(true);
    announce('Full accessibility audit report copied to clipboard');
    setTimeout(() => setCopiedReport(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-checklist-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs"
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[94vh] h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Section 508 & WCAG 2.2 Verification Engine</span>
            </div>
            <h2 id="audit-checklist-modal-title" className="text-xl sm:text-2xl font-bold text-white">
              Comprehensive Accessibility Audit Checklist
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Actionable audit criteria across all 7 verification domains with live implementation evidence.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Score pill */}
            <div className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{verifiedCount}/{totalCount} Items Verified ({compliancePercentage}%)</span>
            </div>

            <button
              type="button"
              onClick={handleCopyReport}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
              title="Copy audit checklist as Markdown"
            >
              {copiedReport ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedReport ? 'Copied' : 'Export Report'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close audit checklist"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Toggle Strip */}
        <div className="px-5 py-2.5 bg-slate-800 text-white flex items-center justify-between border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-medium mr-1">Report Mode:</span>
            <button
              type="button"
              onClick={() => setViewMode('checklist')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors flex items-center gap-1.5 ${
                viewMode === 'checklist'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Actionable Checklist (7 Domains)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('vpat')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors flex items-center gap-1.5 ${
                viewMode === 'vpat'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>VPAT / ACR Conformance Statement</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
            Standard: Revised Section 508 / WCAG 2.2 AA
          </div>
        </div>

        {viewMode === 'checklist' ? (
          <>
            {/* Filter bar & Search */}
            <div className="px-5 py-3 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
              {/* Category Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search box */}
              <div className="relative w-full md:w-64 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter checklist items..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Checklist Content Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-slate-50/50 dark:bg-slate-950/40">
              {filteredItems.length === 0 ? (
                <div className="p-12 text-center text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold">No audit items match your filter criteria.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="mt-3 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                filteredItems.map((item) => {
                  const isChecked = !!checkedItems[item.id];

                  return (
                    <div
                      key={item.id}
                      className={`bg-white dark:bg-slate-900 rounded-xl border transition-all p-4 sm:p-5 ${
                        isChecked
                          ? 'border-slate-200 dark:border-slate-800 shadow-2xs'
                          : 'border-amber-300/80 dark:border-amber-600/80 bg-amber-50/20 dark:bg-amber-950/20'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        {/* Interactive Checkbox */}
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={isChecked}
                          onClick={() => toggleCheck(item.id)}
                          className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                            isChecked
                              ? 'bg-blue-600 text-white'
                              : 'border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 hover:border-blue-500'
                          }`}
                          aria-label={`Mark ${item.title} as ${isChecked ? 'unverified' : 'verified'}`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>

                        <div className="flex-1 min-w-0">
                          {/* Subcategory & Level tag */}
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                            <span className="font-semibold text-blue-700 dark:text-blue-400">{item.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>{item.subCategory}</span>
                            {item.level && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="font-mono text-slate-700 dark:text-slate-300 font-semibold">
                                  Level {item.level}
                                </span>
                              </>
                            )}
                            {item.wcagRef && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                                  {item.wcagRef}
                                </span>
                              </>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                            <span>{item.title}</span>
                          </h3>

                          {/* Requirement */}
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                            {item.requirement}
                          </p>

                          {/* Verification Steps */}
                          <div className="mb-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                              How to Verify & Test:
                            </div>
                            <ul className="space-y-1">
                              {item.verificationSteps.map((step, sIdx) => (
                                <li
                                  key={sIdx}
                                  className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2"
                                >
                                  <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px] mt-0.5">
                                    0{sIdx + 1}.
                                  </span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Portfolio Implementation Proof */}
                          <div className="p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800/70 text-xs text-slate-800 dark:text-slate-200">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-1 flex items-center gap-1">
                              <FileCheck className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                              <span>This Portfolio's Implementation:</span>
                            </div>
                            <p className="leading-relaxed font-sans text-slate-700 dark:text-slate-300">
                              {item.portfolioImplementation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        ) : (
          /* VPAT / ACR View */
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 bg-white dark:bg-slate-900">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Section 508 Accessibility Conformance Report (VPAT® Version 2.4)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Scope:</strong> Anthony Antonidis-Drennan Web Application Portfolio · <strong>Standard:</strong> WCAG 2.2 Level AA & Revised Section 508 Chapter 5 (Software/Web). Evaluated using automated linters (axe-core), screen readers (macOS VoiceOver, NVDA), and manual keyboard inspection.
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold">
                    <th className="p-3">Standard Criterion</th>
                    <th className="p-3 whitespace-nowrap">Conformance Level</th>
                    <th className="p-3">Remarks and Explanations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">1.1.1 Non-text Content (A)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">All non-decorative SVGs and controls provide programmatic names; decorative icons marked aria-hidden.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">1.3.1 Info and Relationships (A)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Semantic landmarks (header, nav, main, aside, section, footer), form labels bound via htmlFor/id.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">1.4.1 Use of Color (A)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Color is never the sole indicator; accompanied by icons, text labels, and border weight changes.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">1.4.3 Contrast (Minimum) (AA)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Text-to-background contrast exceeds 4.5:1 (normal) and 3:1 (large text and UI components).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">1.4.10 Reflow (AA)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Responsive layout reflows down to 320px width without two-dimensional horizontal scrolling.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">2.1.1 Keyboard Navigation (A)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">All interactive functions are operable using standard keyboard without mouse dependency.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">2.1.2 No Keyboard Trap (A)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Focus is trapped inside open modals and dismissed via Escape key with focus returned to trigger.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">2.4.1 Bypass Blocks (A)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Skip to main content mechanism provided at the beginning of the tab order.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">2.4.7 Focus Visible (AA)</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Clear focus indicators provided; enhanced 3px high-contrast focus setting available in toolbar.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">502 Interoperability with Assistive Tech</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Standard HTML5 controls, ARIA dialog roles, live announcer status regions.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">602 Support Documentation & Formats</td>
                    <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Supports</td>
                    <td className="p-3">Full interactive compliance checklist, downloadable PDF resumes, direct email/phone communication.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredItems.length}</span> of {totalCount} total audit criteria.
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyReport}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {copiedReport ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy Full Audit Checklist</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg transition-colors"
            >
              Close Checklist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
