import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Professional Company Section - Enhanced & Mobile Optimized */}
        <a 
          href="https://rehlathadaf.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mb-12 md:mb-16 group cursor-pointer"
        >
          <div className="p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#60b093]/10 via-[#234338]/8 to-[#60b093]/10 border-2 border-[#60b093]/20 hover:border-[#60b093]/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(96,176,147,0.15)] active:scale-[0.98] md:hover:scale-[1.02] relative overflow-hidden">
            
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#60b093]/5 via-transparent to-[#d9f2a6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Glowing Orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#60b093]/10 rounded-full blur-[80px] md:blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#d9f2a6]/10 rounded-full blur-[80px] md:blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 relative z-10">
              {/* Company Identity */}
              <div className="flex flex-col items-center lg:items-start gap-5 md:gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full">
                  {/* Logo - Mobile Optimized */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(96,176,147,0.4)] group-hover:shadow-[0_0_50px_rgba(96,176,147,0.6)] transition-all duration-500 bg-white/5 backdrop-blur-sm border border-white/10 group-hover:scale-105 flex-shrink-0">
                    <img src="/RH.png" alt="RHM Logo" className="w-full h-full object-contain rounded-2xl md:rounded-3xl" />
                  </div>
                  
                  {/* Company Info - Mobile Optimized */}
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
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px self-stretch mx-4" style={{ background: 'linear-gradient(to bottom, transparent, rgba(96,176,147,0.2), transparent)' }} />
              <div className="block lg:hidden w-full h-px my-4" style={{ background: 'linear-gradient(to right, transparent, rgba(96,176,147,0.2), transparent)' }} />

              {/* Official Information - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 md:gap-6 lg:gap-8 w-full lg:w-auto">
                {/* Location */}
                <div className="flex items-center gap-3 md:gap-4 group/item bg-white/5 sm:bg-transparent rounded-xl sm:rounded-none p-3 sm:p-0 flex-1 sm:flex-none">
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
                <div className="flex items-center gap-3 md:gap-4 group/item bg-white/5 sm:bg-transparent rounded-xl sm:rounded-none p-3 sm:p-0 flex-1 sm:flex-none">
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

            {/* Hover/Touch Indicator - Mobile Optimized */}
            <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-1.5 md:gap-2 text-[#60b093] text-xs md:text-sm font-medium bg-[#0d1712]/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#60b093]/30">
                <span>اضغط للزيارة</span>
                <svg className="w-3 h-3 md:w-4 md:h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </a>

        {/* Founder Card */}
        <div className="mb-12 md:mb-16">
          <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#234338]/5 to-[#60b093]/5 border border-[#60b093]/10">
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
              {/* Profile Image */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-white shadow-lg" style={{ boxShadow: '0 8px 32px rgba(96,176,147,0.15)' }}>
                  <img src="/Mah.png" alt="محمد العيسي" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center sm:text-right flex-1">
                <p className="text-xs sm:text-sm text-[#60b093] font-bold mb-1">تأسيس وإدارة</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-3">
                  محمد العيسي
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
                  خبير بالتجارة الإلكترونية والتسويق الإلكتروني والاستيراد من الصين
                </p>
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
