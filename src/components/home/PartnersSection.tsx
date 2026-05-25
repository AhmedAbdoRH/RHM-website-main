'use client';

import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Handshake, ArrowUpRight, Sparkles } from 'lucide-react';

const colors = {
  primary: '#60b093',
  secondary: '#d9f2a6',
  dark: '#234338',
  white: '#ffffff',
};

const partners = [
  {
    id: 1,
    name: 'وكالة فاير فلاي التسويقية',
    logo: '/s2.png',
    description: 'Firefly-Agency.com',
    link: 'https://Firefly-Agency.com',
  },
  {
    id: 2,
    name: 'وكالة بوفا التسويقية',
    logo: '/s1.png',
    description: 'PovaAgency.com',
    link: 'https://PovaAgency.com',
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fdf9 0%, #f0faf4 50%, #f8fdf9 100%)' }}>
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${colors.primary} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#60b093]/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#d9f2a6]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#60b093]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 relative"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary}25, ${colors.primary}10)`,
                border: `1px solid ${colors.primary}25`
              }}
            >
              <div className="relative">
                <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
                <div className="absolute inset-0 animate-ping opacity-30">
                  <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
                </div>
              </div>
              <span className="font-bold text-sm tracking-wide" style={{ color: colors.primary }}>
                شراكاتنا
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: colors.dark }}>
              شراكات
              <span
                className="relative inline-block mx-3"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                استراتيجية
                {/* Underline decoration */}
                <span
                  className="absolute -bottom-2 left-0 w-full h-1.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                  }}
                />
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              نفتخر بالتعاون مع شركات رائدة في مجال التسويق والحلول الإبداعية
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#60b093]/30" />
              <Handshake className="w-5 h-5 text-[#60b093]/40" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#60b093]/30" />
            </div>
          </div>
        </FadeIn>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <FadeIn key={partner.id} delay={index * 0.15}>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-[2rem] overflow-hidden transition-all duration-700 hover:-translate-y-3 h-full"
              >
                {/* Card Outer Glow */}
                <div
                  className="absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}40, ${colors.primary}40)`
                  }}
                />

                {/* Card Body */}
                <div
                  className="relative rounded-[2rem] border transition-all duration-700 group-hover:shadow-[0_25px_80px_-12px_rgba(96,176,147,0.2)] h-full flex flex-col"
                  style={{ 
                    borderColor: `${colors.primary}08`,
                    background: 'linear-gradient(180deg, #f8fdf9 0%, #f0faf4 50%, #f8fdf9 100%)'
                  }}
                >
                  {/* Top Accent Bar */}
                  <div
                    className="h-1.5 w-full transition-all duration-700"
                    style={{
                      background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
                      opacity: 0.15,
                    }}
                  />
                  <div className="absolute top-1.5 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.primary}30, transparent)` }}
                  />

                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    {/* Logo + Name Row */}
                    <div className="flex flex-col items-center text-center flex-1">
                      {/* Logo container */}
                      <div className="relative mb-8">
                        <div
                          className="relative w-36 h-36 md:w-44 md:h-44 aspect-square rounded-2xl bg-white flex-none flex items-center justify-center p-0 overflow-hidden group-hover:scale-110 transition-all duration-700"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Partner Name */}
                      <h3
                        className="text-xl md:text-2xl font-black mb-2 transition-colors duration-500"
                        style={{ color: colors.dark }}
                      >
                        {partner.name}
                      </h3>

                      {/* URL with icon */}
                      <div className="flex items-center gap-2 mb-6">
                        <span
                          className="text-sm md:text-base font-bold tracking-wide transition-colors duration-500"
                          style={{ color: colors.primary }}
                        >
                          {partner.description}
                        </span>
                        <ArrowUpRight
                          className="w-4 h-4 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                          style={{ color: colors.primary }}
                        />
                      </div>

                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className="relative h-1 overflow-hidden">
                    <div
                      className="absolute inset-0 transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{
                        background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                      }}
                    />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Connection Line Between Cards (visible on md+) */}
        <div className="hidden md:flex items-center justify-center mt-[-1px] relative z-20 pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-[#60b093]/20 to-[#60b093]/40" />
            <div
              className="w-3 h-3 rounded-full border-2 border-[#60b093]/30 bg-white"
            />
            <Handshake className="w-6 h-6 text-[#60b093]/25" />
            <div
              className="w-3 h-3 rounded-full border-2 border-[#60b093]/30 bg-white"
            />
            <div className="h-px w-20 bg-gradient-to-l from-[#60b093]/20 to-[#60b093]/40" />
          </div>
        </div>

        {/* Bottom Message */}
        <FadeIn delay={0.4}>
          <div className="mt-16 md:mt-20 text-center">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}03, ${colors.secondary}05)`,
                borderColor: `${colors.primary}10`
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
              <span className="text-sm md:text-base font-medium text-gray-500">
                نبحث دائماً عن فرص شراكة جديدة
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
