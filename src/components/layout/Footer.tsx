import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Unified Company & Founder Section - Enhanced & Mobile Optimized */}
        <div className="mb-12 md:mb-16">
          <div className="p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#60b093]/10 via-[#234338]/8 to-[#60b093]/10 border-2 border-[#60b093]/20 transition-all duration-500 relative overflow-hidden">
            
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#60b093]/5 via-transparent to-[#d9f2a6]/5 opacity-50 transition-opacity duration-700" />
            
            {/* Glowing Orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#60b093]/10 rounded-full blur-[80px] md:blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#d9f2a6]/10 rounded-full blur-[80px] md:blur-[100px]" />

            <div className="relative z-10 space-y-6 md:space-y-8">
              {/* Company Identity - Clickable */}
              <a 
                href="https://rehlathadaf.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-[#60b093]/10 hover:border-[#60b093]/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(96,176,147,0.15)] active:scale-[0.98] md:hover:scale-[1.01]">
                  {/* Logo */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(96,176,147,0.4)] group-hover:shadow-[0_0_50px_rgba(96,176,147,0.6)] transition-all duration-500 bg-white/5 backdrop-blur-sm border border-white/10 group-hover:scale-105 flex-shrink-0">
                    <img src="/RH.png" alt="RHM Logo" className="w-full h-full object-contain rounded-2xl md:rounded-3xl" />
                  </div>
                  
                  {/* Company Info */}
                  <div className="text-center sm:text-right flex-1">
                    <p className="text-xs sm:text-sm md:text-base text-foreground mb-1.5 md:mb-2 font-bold">جزء من</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground group-hover:text-[#60b093] transition-colors duration-300 leading-tight">
                      مؤسسة رحلة هدف
                      <span className="block text-base sm:text-lg md:text-2xl mt-0.5 md:mt-1 font-bold">لخدمات التجارة الإلكترونية</span>
                    </h3>
                    <div className="flex items-center gap-2 justify-center sm:justify-start mt-2 md:mt-3">
                      <span className="text-sm sm:text-base md:text-lg text-[#60b093] font-bold group-hover:text-[#d9f2a6] transition-colors">RehlatHadaf.com</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#60b093] group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Divider */}
              <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(96,176,147,0.3), transparent)' }} />

              {/* Founder Info - Clickable */}
              <a 
                href="https://linktr.ee/MAHaleissi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-[#60b093]/10 hover:border-[#60b093]/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(96,176,147,0.15)] active:scale-[0.98] md:hover:scale-[1.01]">
                  {/* Profile Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-white shadow-[0_8px_32px_rgba(96,176,147,0.2)] group-hover:shadow-[0_12px_40px_rgba(96,176,147,0.35)] transition-all duration-500 group-hover:scale-105 flex-shrink-0 ring-2 ring-[#60b093]/20 group-hover:ring-[#60b093]/40">
                    <img src="/Mah.png" alt="محمد العيسي" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Founder Details */}
                  <div className="text-center sm:text-right flex-1">
                    <p className="text-xs sm:text-sm text-[#60b093] font-bold mb-1 group-hover:text-[#d9f2a6] transition-colors">تأسيس وإدارة</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-2 group-hover:text-[#60b093] transition-colors">
                      محمد العيسي
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
                      خبير بالتجارة الإلكترونية والتسويق الإلكتروني والاستيراد من الصين
                    </p>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <span className="text-xs sm:text-sm text-[#60b093] font-medium group-hover:text-[#d9f2a6] transition-colors">linktr.ee/MAHaleissi</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#60b093] group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Divider Line */}
              <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(96,176,147,0.2), transparent)' }} />

              {/* Official Information */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 md:gap-6 lg:gap-8 justify-center">
                {/* Location */}
                <div className="flex items-center gap-3 md:gap-4 group/item bg-white/5 sm:bg-transparent rounded-xl sm:rounded-none p-3 sm:p-0 flex-1 sm:flex-none sm:min-w-[280px]">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#60b093]/15 group-hover/item:bg-[#60b093]/25 flex items-center justify-center transition-all duration-300 group-hover/item:scale-105 flex-shrink-0">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#60b093]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base lg:text-lg font-bold text-foreground mb-0.5 md:mb-1">المقر الرئيسي</p>
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground flex items-start gap-1.5 md:gap-2">
                      <span className="flex-shrink-0">📍</span>
                      <span className="break-words">بنها - طريق بنها / المنصورة</span>
                    </p>
                  </div>
                </div>

                {/* Tax Registry */}
                <div className="flex items-center gap-3 md:gap-4 group/item bg-white/5 sm:bg-transparent rounded-xl sm:rounded-none p-3 sm:p-0 flex-1 sm:flex-none sm:min-w-[280px]">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#60b093]/15 group-hover/item:bg-[#60b093]/25 flex items-center justify-center transition-all duration-300 group-hover/item:scale-105 flex-shrink-0">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#60b093]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base lg:text-lg font-bold text-foreground mb-0.5 md:mb-1">السجل الضريبي</p>
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground font-mono">528-737-627</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
          <div className="flex flex-col text-center sm:text-right">
            <div className="flex justify-center sm:justify-start">
              <Logo />
            </div>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xs mx-auto sm:mx-0">
              صياغة التميز الرقمي في تطوير الويب وإنتاج الوسائط والعلامات التجارية.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:col-span-1 md:col-span-2">
            <div className="text-center sm:text-right">
              <h3 className="font-headline font-semibold text-base md:text-lg mb-3 md:mb-4">التنقل</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link></li>
                <li><Link href="/portfolio" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">أعمالنا</Link></li>
                <li><Link href="/contact" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">اتصل بنا</Link></li>
              </ul>
            </div>
            
            <div className="text-center sm:text-right">
              <h3 className="font-headline font-semibold text-base md:text-lg mb-3 md:mb-4">الخدمات</h3>
              <ul className="space-y-2">
                <li><span className="text-sm md:text-base text-muted-foreground">الخدمات التقنية</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright - Mobile Optimized */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t text-center text-muted-foreground text-xs md:text-sm">
          <p className="leading-relaxed px-4">
            &copy; {new Date().getFullYear()} مؤسسة رحلة هدف لخدمات التجارة الإلكترونية. 
            <span className="block sm:inline sm:mr-1 mt-1 sm:mt-0">جميع الحقوق محفوظة.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
