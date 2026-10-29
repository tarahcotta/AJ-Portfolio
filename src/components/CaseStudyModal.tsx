import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  CheckCircle,
  FileText,
  Layers,
  ShieldCheck,
  ArrowRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Network,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { CaseStudy, CaseStudyArtifact } from '../data/portfolioData';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLiveAnnouncer } from './LiveAnnouncer';
import { getAssetUrl } from '../utils/assetUrl';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  const { announce } = useLiveAnnouncer();
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(100);

  const activeZoomArtifact =
    zoomIndex !== null && caseStudy?.diagrams && caseStudy.diagrams[zoomIndex]
      ? caseStudy.diagrams[zoomIndex]
      : null;

  // Focus trap for main modal
  const containerRef = useFocusTrap(!!caseStudy && !activeZoomArtifact, onClose);

  // Focus trap for zoom lightbox
  const zoomRef = useFocusTrap(!!activeZoomArtifact, () => {
    setZoomIndex(null);
    setZoomScale(100);
  });

  const handleOpenZoom = (index: number) => {
    setZoomIndex(index);
    setZoomScale(100);
    if (caseStudy?.diagrams && caseStudy.diagrams[index]) {
      announce(`Opened full resolution view of ${caseStudy.diagrams[index].title}. Use plus or minus buttons to zoom.`);
    }
  };

  const handleNextDiagram = useCallback(() => {
    if (!caseStudy?.diagrams || zoomIndex === null) return;
    const nextIdx = (zoomIndex + 1) % caseStudy.diagrams.length;
    setZoomIndex(nextIdx);
    setZoomScale(100);
    announce(`Switched to diagram ${nextIdx + 1} of ${caseStudy.diagrams.length}: ${caseStudy.diagrams[nextIdx].title}`);
  }, [caseStudy?.diagrams, zoomIndex, announce]);

  const handlePrevDiagram = useCallback(() => {
    if (!caseStudy?.diagrams || zoomIndex === null) return;
    const prevIdx = (zoomIndex - 1 + caseStudy.diagrams.length) % caseStudy.diagrams.length;
    setZoomIndex(prevIdx);
    setZoomScale(100);
    announce(`Switched to diagram ${prevIdx + 1} of ${caseStudy.diagrams.length}: ${caseStudy.diagrams[prevIdx].title}`);
  }, [caseStudy?.diagrams, zoomIndex, announce]);

  const handleZoomIn = () => {
    setZoomScale((prev) => {
      const next = Math.min(prev + 25, 200);
      announce(`Zoom level: ${next} percent`);
      return next;
    });
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(prev - 25, 75);
      announce(`Zoom level: ${next} percent`);
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomScale(100);
    announce('Reset zoom to 100 percent');
  };

  // Keyboard navigation inside lightbox
  useEffect(() => {
    if (!activeZoomArtifact) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNextDiagram();
      } else if (e.key === 'ArrowLeft') {
        handlePrevDiagram();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeZoomArtifact, handleNextDiagram, handlePrevDiagram]);

  if (!caseStudy) return null;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-case-study-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
      >
        <div
          ref={containerRef}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 pr-14 sm:pr-16 bg-slate-900 text-white relative">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study details"
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 z-10"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Clean Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-blue-300 mb-3">
              <span>{caseStudy.category}</span>
              <span aria-hidden="true">·</span>
              <span>{caseStudy.organization}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{caseStudy.period}</span>
            </div>

            <h2 id="modal-case-study-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {caseStudy.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              {caseStudy.subtitle}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">My Role:</span>
                <span>{caseStudy.role}</span>
              </div>
              {caseStudy.diagrams && caseStudy.diagrams.length > 0 && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-900/60 border border-blue-700/80 text-blue-200 font-medium text-[11px]">
                  <Network className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                  <span>
                    {caseStudy.diagrams.length} {caseStudy.diagrams.length === 1 ? 'System Artifact' : 'Architectural Diagrams & Artifacts'} Attached
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Modal Body Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700 dark:text-slate-300">
            {/* Executive Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Executive Summary
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200">
                {caseStudy.summary}
              </p>
            </div>

            {/* Architectural Artifacts & Process Diagrams Section (if available) */}
            {caseStudy.diagrams && caseStudy.diagrams.length > 0 && (
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Network className="w-4 h-4 text-blue-700 dark:text-blue-400" aria-hidden="true" />
                      <span>
                        {caseStudy.id === 'conflict-of-interest-system'
                          ? 'Architectural Artifacts & BPMN Process Modeling'
                          : 'System Interface Architecture & Operational Artifacts'}
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {caseStudy.id === 'conflict-of-interest-system'
                        ? 'Architecture and future-state process maps I authored for this initiative. Click any diagram to inspect it at full resolution.'
                        : 'System interface artifacts and operational workflows I evaluated and led for this initiative. Click any artifact to inspect it at full resolution.'}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800 shrink-0 self-start sm:self-auto">
                    NLR / Enterprise Architecture
                  </span>
                </div>

                <div className={`grid gap-6 ${caseStudy.diagrams.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto w-full' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {caseStudy.diagrams.map((diag, dIdx) => (
                    <div
                      key={dIdx}
                      className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[11px] font-mono font-semibold uppercase text-blue-700 dark:text-blue-400">
                            Artifact #{dIdx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleOpenZoom(dIdx)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none cursor-pointer"
                            aria-label={`Enlarge ${diag.title}`}
                          >
                            <Maximize2 className="w-3 h-3" aria-hidden="true" />
                            <span>Enlarge</span>
                          </button>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {diag.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {diag.subtitle}
                        </p>
                      </div>

                      {/* Clickable Image Preview */}
                      <button
                        type="button"
                        onClick={() => handleOpenZoom(dIdx)}
                        className="relative group block w-full bg-slate-100 dark:bg-slate-950 overflow-hidden text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-blue-600"
                        title="Click to view full-resolution diagram"
                      >
                        <img
                          src={getAssetUrl(diag.imageUrl)}
                          alt={diag.title}
                          className={`w-full ${caseStudy.diagrams?.length === 1 ? 'h-64 sm:h-72' : 'h-48'} object-contain object-center bg-white dark:bg-slate-950 p-2 transition-transform duration-200 group-hover:scale-[1.02]`}
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            const original = diag.imageUrl;
                            if (!target.dataset.fallbackTried) {
                              target.dataset.fallbackTried = '1';
                              target.src = original.startsWith('/') ? original : `/${original}`;
                            } else if (target.dataset.fallbackTried === '1') {
                              target.dataset.fallbackTried = '2';
                              target.src = `/public/${original.replace(/^\/+/, '')}`;
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-semibold shadow-lg">
                            <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Click to Inspect Full Artifact</span>
                          </span>
                        </div>
                      </button>

                      <div className="p-4 bg-slate-50/70 dark:bg-slate-950/50 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                        {diag.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem / Challenge */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-400 mb-2 flex items-center gap-1.5">
                <span>The Enterprise Challenge & Compliance Gaps</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Strategy & Solution */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                <span>My Strategic Approach & Solution Architecture</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                {caseStudy.solution}
              </p>
            </div>

            {/* Key Measurable Outcomes */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Measurable Business & Compliance Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.keyOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/60 flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-snug">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables & Artifacts */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Core Documentation & Artifacts Produced
              </h3>
              <ul className="space-y-2">
                {caseStudy.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 p-2.5 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700"
                  >
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                    <span className="font-medium text-slate-900 dark:text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies & Standards */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Applied Technologies & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                {caseStudy.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Full SDLC Requirements & Compliance Artifact
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Close Initiative
            </button>
          </div>
        </div>
      </div>

      {/* High-Resolution Diagram Zoom / Lightbox Modal */}
      {activeZoomArtifact && caseStudy.diagrams && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="zoom-artifact-title"
          className="fixed inset-0 z-60 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/95 backdrop-blur-md"
          onClick={() => {
            setZoomIndex(null);
            setZoomScale(100);
          }}
        >
          <div
            ref={zoomRef}
            className="relative w-full max-w-6xl max-h-[96vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header with Navigation & Zoom Controls */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                {caseStudy.diagrams.length > 1 && (
                  <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-1 border border-slate-700">
                    <button
                      type="button"
                      onClick={handlePrevDiagram}
                      className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      title="Previous diagram (or left arrow)"
                      aria-label="Previous diagram"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-mono px-2 text-blue-300">
                      {(zoomIndex ?? 0) + 1} / {caseStudy.diagrams.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextDiagram}
                      className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      title="Next diagram (or right arrow)"
                      aria-label="Next diagram"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <div>
                  <h3 id="zoom-artifact-title" className="text-base sm:text-lg font-bold text-white line-clamp-1">
                    {activeZoomArtifact.title}
                  </h3>
                  <p className="text-xs text-blue-300 line-clamp-1">
                    {activeZoomArtifact.subtitle}
                  </p>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2 self-end md:self-auto">
                {/* Zoom Controls */}
                <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={zoomScale <= 75}
                    className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
                    title="Zoom out (-)"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-semibold px-2 text-slate-200 min-w-[50px] text-center">
                    {zoomScale}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={zoomScale >= 200}
                    className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
                    title="Zoom in (+)"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  {zoomScale !== 100 && (
                    <button
                      type="button"
                      onClick={handleResetZoom}
                      className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border-l border-slate-700 ml-1 pl-1.5"
                      title="Reset zoom to 100% (0)"
                      aria-label="Reset zoom to 100%"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Open in New Window Link */}
                <a
                  href={getAssetUrl(activeZoomArtifact.imageUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  title="Open full image in new tab"
                  aria-label="Open full resolution image in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => {
                    setZoomIndex(null);
                    setZoomScale(100);
                  }}
                  aria-label="Close diagram zoom view (Esc)"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ml-1"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Scrollable / Zoomable High-Resolution Image Container */}
            <div className="p-4 sm:p-6 overflow-auto flex-1 bg-slate-100 flex items-center justify-center min-h-[380px] max-h-[68vh]">
              <div
                className="transition-transform duration-200 ease-out origin-center"
                style={{ transform: `scale(${zoomScale / 100})` }}
              >
                <img
                  src={getAssetUrl(activeZoomArtifact.imageUrl)}
                  alt={activeZoomArtifact.title}
                  className="max-w-full max-h-[64vh] object-contain shadow-md rounded-lg bg-white"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const original = activeZoomArtifact.imageUrl;
                    if (!target.dataset.fallbackTried) {
                      target.dataset.fallbackTried = '1';
                      target.src = original.startsWith('/') ? original : `/${original}`;
                    } else if (target.dataset.fallbackTried === '1') {
                      target.dataset.fallbackTried = '2';
                      target.src = `/public/${original.replace(/^\/+/, '')}`;
                    }
                  }}
                />
              </div>
            </div>

            {/* Lightbox Caption & Keyboard Shortcuts Guide */}
            <div className="p-4 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="max-w-3xl">
                <p className="text-slate-800 font-medium">
                  {activeZoomArtifact.description}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono mt-1.5">
                  <span>Hotkeys:</span>
                  <span>[Esc] Close</span>
                  {caseStudy.diagrams.length > 1 && <span>[←/→] Prev/Next Map</span>}
                  <span>[+/-] Zoom</span>
                  <span>[0] Reset</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setZoomIndex(null);
                  setZoomScale(100);
                }}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shrink-0 self-end sm:self-auto transition-colors"
              >
                Done Viewing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
