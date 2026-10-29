import React from 'react';
import { Building2, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            <span>Career Progression & Proven Impact</span>
            <span aria-hidden="true">·</span>
            <span>National Labs & Higher Education</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white text-balance">
            Professional Experience & Career History
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            My career progression advancing digital accessibility governance, full-SDLC requirements engineering, and cross-functional software delivery.
          </p>
        </div>

        {/* Career Timeline Cards */}
        <div className="space-y-8 mb-16">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-9 shadow-xs transition-colors"
            >
              {/* Card Header with Unboxed Metadata */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium mb-1.5">
                    <span className="flex items-center gap-1 text-slate-800 dark:text-slate-200 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      {exp.location}
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="font-mono text-slate-600 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                    {exp.roleTitle}
                  </h3>
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-400 mt-0.5">
                    {exp.organization}
                  </div>
                  {exp.previousRoles && exp.previousRoles.length > 0 && (
                    <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Prior Role:</span>
                      {exp.previousRoles.map((pr, idx) => (
                        <span key={idx} className="font-mono">
                          {pr.title} ({pr.period})
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 max-w-xs md:justify-end text-xs font-mono text-slate-700 dark:text-slate-300">
                  {exp.competencies.slice(0, 4).map((comp, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 font-medium">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <p className="mt-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {exp.summary}
              </p>

              {/* Bulleted Achievements */}
              <div className="mt-5 space-y-3">
                {exp.highlights.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Certifications Block */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-9 shadow-xs transition-colors">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                <Award className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                  Industry Certifications & Credentials
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                  Verified professional credentials in enterprise IT, governance & accessibility
                </p>
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                    <h4 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-snug">
                      {cert.name}
                    </h4>
                    <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs shrink-0 self-start sm:self-auto">
                      {cert.acronym}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium mb-3">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{cert.issuer}</span>
                    {cert.year && cert.year !== cert.status && (
                      <>
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                        <span className="font-mono">{cert.year}</span>
                      </>
                    )}
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        cert.status === 'Active'
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/80'
                          : 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/80'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Block */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-9 shadow-xs transition-colors">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                  Academic Background & Degrees
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                  Graduate & undergraduate education from Texas A&M University
                </p>
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200 shrink-0 self-start sm:self-auto">
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">
                    {edu.institution}
                  </div>
                  {edu.school && (
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-3 font-medium">
                      {edu.school}
                    </div>
                  )}
                  {edu.details && (
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}

              <div className="p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed shadow-2xs">
                <span className="font-bold text-blue-900 dark:text-blue-300 block mb-1.5 text-sm">
                  Interdisciplinary Analytical Foundation:
                </span>
                The Bush School of Government & Public Service provided advanced training in public policy analysis, quantitative evaluation, governance models, and institutional strategy—directly underpinning my success leading Section 508 compliance and high-stakes enterprise IT systems.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
