import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowLeft } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="bg-[#1a2e26] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-[#60b093]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-[-50%] left-[-10%] w-[60%] h-[150%] bg-[#d9f2a6]/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex-1">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                جاهز لبدء مشروعك؟
              </h2>
              <p className="text-[#d9f2a6] text-lg md:text-xl font-medium opacity-90 mb-2">
                تواصل معنا الآن واحصل على استشارة مجانية
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <a href="https://wa.me/201008116452" className="group relative px-8 py-4 bg-gradient-to-r from-[#60b093] to-[#d9f2a6] rounded-xl text-[#1a2e26] font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,176,147,0.4)] hover:scale-105 w-full md:w-auto flex items-center justify-center gap-3">
                <span>ابدأ معنا الآن</span>
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
