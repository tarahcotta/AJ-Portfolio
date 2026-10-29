import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Check, Copy, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLiveAnnouncer } from './LiveAnnouncer';
import { getAssetUrl } from '../utils/assetUrl';

export const ContactSection: React.FC = () => {
  const { announce } = useLiveAnnouncer();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    announce('Email address copied to clipboard');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    announce('Phone number copied to clipboard');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Personal Profile Photo & Availability Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={getAssetUrl('/assets/aistudio/1000089180_6ac36f10.JPG')}
                  alt="Anthony Antonidis-Drennan smiling at a Colorado Avalanche game in Denver, Colorado"
                  className="w-full h-full object-cover object-[center_28%]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallbackTried) {
                      target.dataset.fallbackTried = '1';
                      target.src = '/public/assets/aistudio/1000089180_6ac36f10.JPG';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Profile Identification Strip */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/70 shadow-lg">
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate">
                      {PERSONAL_INFO.name}
                    </div>
                    <div className="text-xs text-blue-300 font-mono flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
                      <span className="truncate">Colorado Front Range · Mountain Time</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-[11px] font-semibold text-emerald-300 shrink-0 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span>Available</span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Location & Engagement Scope
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Based in Colorado. Ready for strategic Section 508 accessibility program leadership, enterprise requirements engineering, and federal laboratory consulting engagements.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                  <span>National Laboratories & Cleared Engagements</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Section Header & Direct Outreach Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
                <span>Direct Engagement</span>
                <span aria-hidden="true">·</span>
                <span>Connect & Inquiries</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white text-balance mb-3">
                Let's Discuss Enterprise Leadership & Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Whether you are looking for Section 508 accessibility program leadership, an enterprise-grade IT Business Analyst for large-scale SDLC transformations, or strategic consultation, reach out directly.
              </p>
            </div>

            {/* 2x2 Grid of Outreach Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Email Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-4">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-slate-950 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 font-mono break-all transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 rounded-sm"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 rounded-sm"
                  >
                    <span>Send Email</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        <span className="text-emerald-700 dark:text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-4">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Telephone
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-bold text-slate-950 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 font-mono transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 rounded-sm"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 rounded-sm"
                  >
                    <span>Call Directly</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        <span className="text-emerald-700 dark:text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-4">
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    LinkedIn Profile
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-950 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 font-mono transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 rounded-sm"
                  >
                    {PERSONAL_INFO.linkedinHandle}
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 rounded-sm"
                  >
                    <span>View Full Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Geographic Base & Availability Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-4">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Geographic Base
                  </div>
                  <div className="text-sm font-bold text-slate-950 dark:text-white">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                    Open to Remote & Hybrid Engagements
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" aria-hidden="true" />
                  <span>Federal Laboratory & Cleared Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
