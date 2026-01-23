import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
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
          <p>&copy; {new Date().getFullYear()} RHM للتميز الرقمي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
