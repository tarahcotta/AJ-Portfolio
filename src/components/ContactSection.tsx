import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Check, Copy, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLiveAnnouncer } from './LiveAnnouncer';

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
    <section id="contact" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 mb-2">
            <span>Direct Engagement</span>
            <span aria-hidden="true">·</span>
            <span>Connect & Inquiries</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 text-balance mb-4">
            Let's Discuss Enterprise Leadership & Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Whether you are looking for Section 508 accessibility program leadership, an enterprise-grade IT Business Analyst for large-scale SDLC transformations, or strategic consultation, reach out directly.
          </p>
        </div>

        {/* Direct Outreach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-2xs hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Email Address
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-bold text-slate-950 hover:text-blue-700 font-mono break-all transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 rounded-sm"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 rounded-sm"
              >
                <span>Send Email</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-100 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    <span className="text-emerald-700">Copied</span>
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
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-2xs hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Telephone
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-sm font-bold text-slate-950 hover:text-blue-700 font-mono transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 rounded-sm"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 rounded-sm"
              >
                <span>Call Directly</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-100 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700"
                aria-label="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    <span className="text-emerald-700">Copied</span>
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
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-2xs hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1">
                LinkedIn Profile
              </div>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-950 hover:text-blue-700 font-mono transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 rounded-sm"
              >
                {PERSONAL_INFO.linkedinHandle}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-700 rounded-sm"
              >
                <span>View Full Profile</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Geographic Base & Availability Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-2xs hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Geographic Base
              </div>
              <div className="text-sm font-bold text-slate-950">
                {PERSONAL_INFO.location}
              </div>
              <div className="text-xs text-slate-600 font-medium mt-1">
                Open to Remote & Hybrid Engagements
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
              <span>Federal Laboratory & Cleared Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
