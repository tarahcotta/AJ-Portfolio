import React from 'react';
import { Building2, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            <span>Career Progression & Proven Impact</span>
            <span aria-hidden="true">·</span>
            <span>National Labs & Higher Education</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Professional Experience & Career History
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            My career progression advancing digital accessibility governance, full-SDLC requirements engineering, and cross-functional software delivery.
          </p>
        </div>

        {/* Career Timeline Cards */}
        <div className="space-y-8 mb-16">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs"
            >
              {/* Card Header with Unboxed Metadata */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium mb-1.5">
                    <span className="flex items-center gap-1 text-slate-700 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                      {exp.location}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="font-mono text-slate-600">{exp.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {exp.roleTitle}
                  </h3>
                  <div className="text-sm font-semibold text-blue-700 mt-0.5">
                    {exp.organization}
                  </div>
                  {exp.previousRoles && exp.previousRoles.length > 0 && (
                    <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                      <span className="font-medium text-slate-600">Prior Role:</span>
                      {exp.previousRoles.map((pr, idx) => (
                        <span key={idx} className="font-mono">
                          {pr.title} ({pr.period})
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 max-w-xs md:justify-end text-xs font-mono text-slate-600">
                  {exp.competencies.slice(0, 4).map((comp, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-100 rounded border border-slate-200">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <p className="mt-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {exp.summary}
              </p>

              {/* Bulleted Achievements */}
              <div className="mt-5 space-y-2.5">
                {exp.highlights.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Block */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
              <Award className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-900">
                Industry Certifications & Credentials
              </h3>
            </div>

            <div className="space-y-5">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      {cert.name}
                    </h4>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 shrink-0">
                      {cert.acronym}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
                    <span>{cert.issuer}</span>
                    {cert.year && cert.year !== cert.status && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{cert.year}</span>
                      </>
                    )}
                    <span aria-hidden="true">·</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                        cert.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Block */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
              <GraduationCap className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-900">
                Academic Background & Degrees
              </h3>
            </div>

            <div className="space-y-5">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono font-semibold text-slate-600 shrink-0">
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-blue-700 mb-0.5">
                    {edu.institution}
                  </div>
                  {edu.school && (
                    <div className="text-xs text-slate-500 mb-2 font-medium">
                      {edu.school}
                    </div>
                  )}
                  {edu.details && (
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 text-xs text-slate-700 leading-relaxed">
                <span className="font-semibold text-blue-900 block mb-1">
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
