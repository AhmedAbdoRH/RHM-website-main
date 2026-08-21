'use client';

import { MessageCircle } from 'lucide-react';

const colors = {
  primary: '#60b093',
  dark: '#234338',
};

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201008116452"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 group"
      style={{
        background: `linear-gradient(135deg, #25D366, #128C7E)`,
        boxShadow: `0 4px 20px rgba(37, 211, 102, 0.4)`,
      }}
    >
      <div className="flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <MessageCircle className="size-5 text-white" strokeWidth={2} />
        <span className="text-white font-bold text-sm whitespace-nowrap">
          تواصل معنا
        </span>
      </div>
    </a>
  );
}
