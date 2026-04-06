"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/portfolio', label: 'أعمالنا' },
  { href: '/contact', label: 'اتصل بنا' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0d1712]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 flex h-20 items-center justify-between" dir="rtl">
        <div className="flex items-center gap-12">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'text-sm font-bold transition-all duration-300 hover:text-[#60b093]',
                    isActive ? 'text-[#60b093]' : 'text-gray-400'
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden md:block">
          <Button asChild className="rounded-full px-8 py-5 bg-gradient-to-r from-[#60b093] to-[#d9f2a6] text-[#0d1712] font-bold border-none hover:scale-105 transition-all shadow-[0_0_20px_rgba(96,176,147,0.2)]">
            <a href="https://wa.me/201008116452">ابدأ مشروعك معنا</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
