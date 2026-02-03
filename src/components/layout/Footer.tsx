import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Professional Company Section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-[#60b093]/5 via-[#234338]/5 to-[#60b093]/5 border border-[#60b093]/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Company Identity */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(96,176,147,0.4)]">
                  <img src="/RH.png" alt="RHM Logo" className="w-full h-full object-contain rounded-2xl" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">جزء من</p>
                  <h3 className="text-xl font-bold text-foreground mb-1">مؤسسة رحلة هدف لخدمات التجارة الإلكترونية</h3>
                  <p className="text-muted-foreground font-medium">RehlatHadaf.com</p>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
              </div>
            </div>

            {/* Official Information */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#60b093]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#60b093]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">المقر الرئيسي</p>
                  <p className="text-xs text-muted-foreground">📍 بنها - طريق بنها / المنصورة</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#60b093]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#60b093]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">السجل الضريبي</p>
                  <p className="text-xs text-muted-foreground">528-737-627</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-xs">
              صياغة التميز الرقمي في تطوير الويب وإنتاج الوسائط والعلامات التجارية.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            <div>
              <h3 className="font-headline font-semibold">التنقل</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-primary">الرئيسية</Link></li>
                <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">أعمالنا</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">الخدمات</h3>
              <ul className="mt-4 space-y-2">
                <li><span className="text-muted-foreground">الخدمات التقنية</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">تواصل</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">لينكد إن</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">تويتر</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">انستغرام</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} مؤسسة رحلة هدف لخدمات التجارة الإلكترونية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
