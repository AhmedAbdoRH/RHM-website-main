'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201008116452"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] group"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
        animation: 'pulse-slow 3s ease-in-out infinite',
      }}
    >
      <div className="flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl">
        <MessageCircle className="size-6 text-white" strokeWidth={2.5} />
        <span className="text-white font-bold text-base whitespace-nowrap">
          تواصل معنا
        </span>
      </div>
    </a>
  );
}
