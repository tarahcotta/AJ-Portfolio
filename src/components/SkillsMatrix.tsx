import React, { useState, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  Check,
  Award,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useLiveAnnouncer } from './LiveAnnouncer';

export const SkillsMatrix: React.FC = () => {
  const { announce } = useLiveAnnouncer();
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  const scrollToSlide = useCallback(
    (index: number, announceChange = true) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const slides = container.querySelectorAll<HTMLElement>('[data-slide-index]');
      if (slides[index]) {
        isProgrammaticScroll.current = true;
        slides[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
        setActiveIndex(index);
        if (announceChange) {
          announce(`Slide ${index + 1} of ${SKILL_CATEGORIES.length}: ${SKILL_CATEGORIES[index].title}`);
        }
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 500);
      }
    },
    [announce]
  );

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % SKILL_CATEGORIES.length;
    scrollToSlide(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + SKILL_CATEGORIES.length) % SKILL_CATEGORIES.length;
    scrollToSlide(prevIdx);
  };

  // Sync active indicator during manual touch/wheel scrolling
  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const slides = container.querySelectorAll<HTMLElement>('[data-slide-index]');
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
      const distance = Math.abs(slide.offsetLeft - container.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  // Keyboard navigation inside the carousel track
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (viewMode !== 'carousel') return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollToSlide(SKILL_CATEGORIES.length - 1);
    }
  };

  const handleToggleViewMode = () => {
    const next = viewMode === 'carousel' ? 'grid' : 'carousel';
    setViewMode(next);
    announce(`Switched to ${next === 'carousel' ? 'sideways scroll carousel' : 'vertical grid'} layout.`);
  };

  return (
    <section
      id="skills"
      aria-label="Specialized Skills and Capabilities"
      className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2 font-mono">
              <span>Unified Competency Framework</span>
              <span aria-hidden="true">·</span>
              <span>Technical & Strategic Capabilities</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              Specialized Skills & Applied Capabilities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              My core capabilities unite federal Section 508 accessibility compliance, rigorous full-SDLC requirements modeling, and modern generative AI analysis workflows into one cohesive practice.
            </p>
          </div>

          {/* Interactive Mode & Navigation Bar */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-auto">
            {/* View Mode Switcher (Accessible Preference) */}
            <button
              type="button"
              onClick={handleToggleViewMode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              aria-label={`Switch to ${viewMode === 'carousel' ? 'Grid View' : 'Carousel View'}`}
            >
              {viewMode === 'carousel' ? (
                <>
                  <LayoutGrid className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                  <span>View All (Grid)</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <span>Sideways Carousel</span>
                </>
              )}
            </button>

            {/* Carousel Prev/Next Buttons */}
            {viewMode === 'carousel' && (
              <div
                role="group"
                aria-label="Carousel navigation controls"
                className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                  aria-label="Previous skill category"
                  title="Previous skill category"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>

                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="px-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 select-none"
                >
                  <span className="text-slate-900 dark:text-white font-bold">{activeIndex + 1}</span>
                  <span className="text-slate-400"> / </span>
                  <span>{SKILL_CATEGORIES.length}</span>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                  aria-label="Next skill category"
                  title="Next skill category"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Carousel Pagination Indicator Tabs */}
        {viewMode === 'carousel' && (
          <div
            role="tablist"
            aria-label="Skill category selection"
            className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none"
          >
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`skill-panel-${idx}`}
                  id={`skill-tab-${idx}`}
                  onClick={() => scrollToSlide(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{cat.title.split('&')[0].trim()}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-blue-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Main Content: Sideways Scroll Snap Carousel or Grid */}
        {viewMode === 'carousel' ? (
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Specialized Skills Carousel"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="relative focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 focus-visible:outline-offset-2 rounded-2xl"
          >
            {/* Scrollable Track */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 pt-1 px-1 -mx-1"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#cbd5e1 transparent',
              }}
            >
              {SKILL_CATEGORIES.map((category, idx) => (
                <div
                  key={idx}
                  data-slide-index={idx}
                  role="group"
                  aria-roledescription="slide"
                  aria-labelledby={`skill-tab-${idx}`}
                  id={`skill-panel-${idx}`}
                  aria-label={`${idx + 1} of ${SKILL_CATEGORIES.length}: ${category.title}`}
                  className="snap-start shrink-0 w-full sm:w-[88%] lg:w-[72%] bg-slate-50/80 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-md"
                >
                  <div>
                    {/* Card Header */}
                    <div className="pb-4 mb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-mono font-semibold uppercase text-blue-700 dark:text-blue-400 mb-1">
                          <span>Domain #{idx + 1}</span>
                          <span aria-hidden="true">·</span>
                          <span>{category.skills.length} Core Competencies</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                          {category.description}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono shrink-0 self-start sm:self-auto">
                        <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                        <span>Audited Practice</span>
                      </div>
                    </div>

                    {/* Skills Grid within the Slide */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between gap-2 shadow-2xs hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
                        >
                          <div>
                            <div className="text-xs font-bold text-slate-800 dark:text-white flex items-start justify-between gap-2">
                              <span>{skill.name}</span>
                              <span
                                className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded shrink-0 ${
                                  skill.level === 'Expert'
                                    ? 'bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                                }`}
                              >
                                {skill.level}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium mt-1 leading-snug">
                              {skill.context}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Slide Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-medium">
                    <span>
                      Showing {category.skills.length} competencies in {category.title.split('&')[0].trim()}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1 font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 cursor-pointer"
                    >
                      <span>Next Category</span>
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Accessible Keyboard & Gesture Hint */}
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-medium">
              <span className="hidden sm:inline">
                Use Left / Right arrow keys, horizontal swipe, or category tabs to navigate
              </span>
              <span className="sm:hidden">Swipe sideways to browse competencies</span>
              <span className="font-mono">
                Category {activeIndex + 1} of {SKILL_CATEGORIES.length}
              </span>
            </div>
          </div>
        ) : (
          /* Fallback: 4-Domain Grid displaying all competencies vertically */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-200">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800 dark:text-white">
                            {skill.name}
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                            {skill.context}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
                          <span
                            className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                              skill.level === 'Expert'
                                ? 'bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
