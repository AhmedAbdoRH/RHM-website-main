import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/chatbot/Chatbot';
import { PerformanceMonitor } from '@/components/ui/performance-monitor';

export const metadata: Metadata = {
  metadataBase: new URL('https://rhm-digital.com'),
  title: 'RHM | RHM Digital Solutions',
  description: 'نُحوّل أفكارك إلى حلول رقمية متكاملة: تطوير مواقع ومتاجر إلكترونية، تطبيقات أندرويد، أنظمة داخلية/ERP، وأتمتة وذكاء اصطناعي—لنقل عملك لمستوى احترافي.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'RHM | RHM Digital Solutions',
    description: 'حلول رقمية متكاملة لنمو أعمالك: مواقع ومتاجر إلكترونية، تطبيقات أندرويد، أنظمة داخلية/ERP، وأتمتة وذكاء اصطناعي. تواصل معنا وابدأ رحلتك الآن.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'RHM Digital Solutions',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'RHM Digital Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RHM | RHM Digital Solutions',
    description: 'شريكك الرقمي: تطوير مواقع ومتاجر، تطبيقات أندرويد، أنظمة داخلية/ERP، وأتمتة وذكاء اصطناعي. اطلب استشارة وابدأ الآن.',
    images: ['/opengraph-image'],
    creator: '@RHM',
    site: '@RHM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//picsum.photos" />
        <link rel="dns-prefetch" href="//placehold.co" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        
        {/* Viewport and theme optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#60b093" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="icon" href="/logo.png" sizes="32x32" />
        <link rel="icon" href="/logo.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance hints */}
        <link rel="modulepreload" href="/_next/static/chunks/main-app.js" />
      </head>
      <body className="font-body antialiased">
        <PerformanceMonitor />
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
