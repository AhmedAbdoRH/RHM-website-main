'use client';

import { useEffect, useState } from 'react';

const PHONE = '201008116452';
const MESSAGE = 'مرحباً، حابب أستفسر عن خدماتكم';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 400);
    const t2 = setTimeout(() => setShowBubble(true), 3500);
    const t3 = setTimeout(() => setShowBubble(false), 9000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[9999] flex justify-center pb-6">
      <div className={`wa-enter group pointer-events-auto relative isolate ${mounted ? 'wa-in' : ''}`}>
        {/* Welcome Bubble */}
        <div
          className={`pointer-events-none absolute bottom-full left-1/2 mb-3.5 -translate-x-1/2 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 ${
            showBubble ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <div className="relative whitespace-nowrap rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-[#0d1712] shadow-[0_12px_32px_-8px_rgba(13,23,18,0.35)] ring-1 ring-black/5">
            <span className="relative z-10">أهلاً بيك 👋 محتاج مساعدة؟</span>
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 rounded-[2px] border-b border-r border-black/5 bg-white"
            />
          </div>
        </div>

        {/* Pulse Rings */}
        <span aria-hidden="true" className="wa-ring pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/40" />
        <span
          aria-hidden="true"
          className="wa-ring pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/30 [animation-delay:1.2s]"
        />

        {/* Button */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل معنا عبر واتساب"
          className="relative isolate flex items-center gap-3 rounded-full bg-gradient-to-br from-[#2ee06f] via-[#25D366] to-[#128C7E] p-1.5 pe-6 text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.65),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-white/25 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_-8px_rgba(37,211,102,0.8),inset_0_1px_0_rgba(255,255,255,0.4)] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
          {/* Shine (isolated overflow-hidden so status badge is never clipped) */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="wa-shine absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </span>

          {/* Icon */}
          <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
            <WhatsAppIcon className="wa-wiggle size-6 drop-shadow-sm" />
            <span className="absolute right-0.5 top-0.5 flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d9f2a6] opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-3 rounded-full bg-[#d9f2a6] ring-2 ring-[#22c55e]" />
            </span>
          </span>

          {/* Text */}
          <span className="relative flex flex-col leading-tight">
            <span className="text-[11px] font-medium text-white/90">متاحين الآن</span>
            <span className="whitespace-nowrap text-base font-extrabold tracking-tight">تواصل معنا</span>
          </span>
        </a>
      </div>
    </div>
  );
}

