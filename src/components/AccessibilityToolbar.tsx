import React from 'react';
import { Eye, Type, RotateCcw, X, Check, Sparkles } from 'lucide-react';

export interface A11ySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  dyslexicFont: boolean;
  enhancedFocus: boolean;
  underlineLinks: boolean;
  reducedMotion: boolean;
}

interface AccessibilityToolbarProps {
  settings: A11ySettings;
  onUpdateSettings: (updater: (prev: A11ySettings) => A11ySettings) => void;
  onReset: () => void;
  onClose: () => void;
  onOpenAuditChecklist: () => void;
  isOpen: boolean;
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  settings,
  onUpdateSettings,
  onReset,
  onClose,
  onOpenAuditChecklist,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <aside
      aria-label="Accessibility & Display Preferences"
      className="bg-slate-900 text-white border-b border-slate-800 px-4 py-3 sm:px-6 transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-400" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Section 508 & WCAG Accessibility Preferences
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Text Size Segmented Control */}
          <div className="flex items-center bg-slate-800 rounded-md p-0.5 border border-slate-700">
            <span className="px-2 text-slate-400 text-[11px] font-medium">Text:</span>
            <button
              type="button"
              onClick={() => onUpdateSettings((s) => ({ ...s, fontSize: 'normal' }))}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                settings.fontSize === 'normal'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              100%
            </button>
            <button
              type="button"
              onClick={() => onUpdateSettings((s) => ({ ...s, fontSize: 'large' }))}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                settings.fontSize === 'large'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              110%
            </button>
            <button
              type="button"
              onClick={() => onUpdateSettings((s) => ({ ...s, fontSize: 'xlarge' }))}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                settings.fontSize === 'xlarge'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              120%
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            type="button"
            onClick={() => onUpdateSettings((s) => ({ ...s, highContrast: !s.highContrast }))}
            className={`px-2.5 py-1.5 rounded-md border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              settings.highContrast
                ? 'bg-amber-400 text-slate-950 border-amber-300 font-semibold'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {settings.highContrast && <Check className="w-3 h-3" />}
            <span>High Contrast</span>
          </button>

          {/* Dyslexia Mode */}
          <button
            type="button"
            onClick={() => onUpdateSettings((s) => ({ ...s, dyslexicFont: !s.dyslexicFont }))}
            className={`px-2.5 py-1.5 rounded-md border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              settings.dyslexicFont
                ? 'bg-blue-500 text-white border-blue-400 font-semibold'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {settings.dyslexicFont && <Check className="w-3 h-3" />}
            <span>Dyslexia Font</span>
          </button>

          {/* Visible Focus Rings */}
          <button
            type="button"
            onClick={() => onUpdateSettings((s) => ({ ...s, enhancedFocus: !s.enhancedFocus }))}
            className={`px-2.5 py-1.5 rounded-md border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              settings.enhancedFocus
                ? 'bg-blue-500 text-white border-blue-400 font-semibold'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {settings.enhancedFocus && <Check className="w-3 h-3" />}
            <span>Visible Focus</span>
          </button>

          {/* Underline Links */}
          <button
            type="button"
            onClick={() => onUpdateSettings((s) => ({ ...s, underlineLinks: !s.underlineLinks }))}
            className={`px-2.5 py-1.5 rounded-md border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              settings.underlineLinks
                ? 'bg-blue-500 text-white border-blue-400 font-semibold'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {settings.underlineLinks && <Check className="w-3 h-3" />}
            <span>Underline Links</span>
          </button>

          {/* Reduced Motion Toggle */}
          <button
            type="button"
            onClick={() => onUpdateSettings((s) => ({ ...s, reducedMotion: !s.reducedMotion }))}
            className={`px-2.5 py-1.5 rounded-md border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              settings.reducedMotion
                ? 'bg-blue-500 text-white border-blue-400 font-semibold'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {settings.reducedMotion && <Check className="w-3 h-3" />}
            <span>Reduced Motion</span>
          </button>

          {/* Audit Checklist Launcher */}
          <button
            type="button"
            onClick={onOpenAuditChecklist}
            className="px-2.5 py-1.5 rounded-md bg-blue-600/90 hover:bg-blue-600 text-white border border-blue-500 text-xs font-semibold transition-colors flex items-center gap-1 shadow-2xs ml-1"
          >
            <span>Audit Checklist</span>
          </button>

          {/* Reset button */}
          <button
            type="button"
            onClick={onReset}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Reset to default settings"
            aria-label="Reset accessibility preferences"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Close bar */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            title="Close accessibility toolbar"
            aria-label="Close toolbar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
