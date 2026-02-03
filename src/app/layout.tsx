import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/chatbot/Chatbot';

export const metadata: Metadata = {
  title: 'RHM للتميز الرقمي | رحلة هدف للحلول الرقمية',
  description: 'نُحول الأفكار إلى واقع رقمي مبهر. متخصصون في البرمجة، التسويق، والإنتاج المرئي لنصنع لك تجربة استثنائية تُحدث فرقاً حقيقياً في عالم الأعمال.',
  icons: {
    icon: '/RHM.jpg',
    apple: '/RHM.jpg',
  },
  openGraph: {
    title: 'RHM للتميز الرقمي',
    description: 'رحلتك نحو القمة تبدأ هنا. حلول رقمية متكاملة تشمل البرمجة والتسويق والإنتاج المرئي بأحدث التقنيات العالمية.',
    images: [
      {
        url: '/RHM.jpg',
        width: 1200,
        height: 1200,
        alt: 'RHM Digital Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RHM للتميز الرقمي',
    description: 'نبتكر، نصمم، وننفذ. شريكك الاستراتيجي للنجاح في الفضاء الرقمي.',
    images: ['/RHM.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Tajawal:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
