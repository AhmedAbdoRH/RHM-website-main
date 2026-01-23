'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ExternalLink, Eye, Github, ArrowRight, Globe, Smartphone, Layers, Bot } from 'lucide-react';

const colors = {
  primary: '#60b093',
  secondary: '#d9f2a6',
  dark: '#234338',
  white: '#ffffff',
};

const categories = [
  { id: 'web', name: 'مواقع ومتاجر', icon: Globe },
  { id: 'apps', name: 'تطبيقات الأندرويد والويب', icon: Smartphone },
  { id: 'systems', name: 'الأنظمة والبرامج', icon: Layers },
  { id: 'ai', name: 'الذكاء الاصطناعي', icon: Bot },
];

const projects = [
  // Web & E-commerce
  {
    id: 1,
    title: 'متجر إلكتروني متكامل',
    category: 'web',
    categoryName: 'مواقع ومتاجر إلكترونية',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'منصة بيع متكاملة مع نظام إدارة مخزون ودفع إلكتروني.'
  },
  {
    id: 2,
    title: 'موقع عقاري متطور',
    category: 'web',
    categoryName: 'مواقع ومتاجر إلكترونية',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'نظام عرض العقارات مع خرائط تفاعلية ونظام حجز معاينات.'
  },
  // Apps
  {
    id: 3,
    title: 'تطبيق توصيل طلبات',
    category: 'apps',
    categoryName: 'تطبيقات الأندرويد والويب',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'تطبيق أندرويد لتتبع الطلبات وإدارة عمليات التوصيل في الوقت الفعلي.'
  },
  {
    id: 4,
    title: 'منصة تعليمية تفاعلية',
    category: 'apps',
    categoryName: 'تطبيقات الأندرويد والويب',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'تطبيق ويب للفصول الافتراضية وإدارة المحتوى التعليمي والاختبارات.'
  },
  // Systems & ERP
  {
    id: 5,
    title: 'نظام إدارة الموارد ERP',
    category: 'systems',
    categoryName: 'برامج الكمبيوتر والأنظمة الداخلية',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1626&auto=format&fit=crop',
    link: '#',
    description: 'لوحة تحكم متقدمة لإدارة العمليات اليومية والتقارير المالية والموظفين.'
  },
  {
    id: 6,
    title: 'نظام إدارة المخازن والمبيعات',
    category: 'systems',
    categoryName: 'برامج الكمبيوتر والأنظمة الداخلية',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'برنامج ديسكتوب مخصص لإدارة المخزون ونقاط البيع POS.'
  },
  // AI & Automation
  {
    id: 7,
    title: 'مساعد ذكاء اصطناعي',
    category: 'ai',
    categoryName: 'الذكاء الاصطناعي والأتمتة',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'شات بوت ذكي مخصص لخدمة العملاء وتحليل البيانات.'
  },
  {
    id: 8,
    title: 'نظام تحليل الصور الآلي',
    category: 'ai',
    categoryName: 'الذكاء الاصطناعي والأتمتة',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'حل برمجي لأتمتة فحص المنتجات باستخدام تقنيات الرؤية الحاسوبية.'
  }
];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('web');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const AUTOPLAY_DURATION = 5000; // 5 seconds
  const PROGRESS_STEP = 100 / (AUTOPLAY_DURATION / 100); // Progress update every 100ms

  const handleNextTab = useCallback(() => {
    const currentIndex = categories.findIndex(cat => cat.id === activeTab);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveTab(categories[nextIndex].id);
    setProgress(0);
  }, [activeTab]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (!isPaused) {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + PROGRESS_STEP;
        });
      }, 100);

      interval = setInterval(() => {
        handleNextTab();
      }, AUTOPLAY_DURATION);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPaused, handleNextTab, PROGRESS_STEP]);

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <section 
      id="portfolio" 
      className="pt-12 lg:pt-16 pb-24 lg:pb-32 relative overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorations */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(${colors.primary} 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-6"
              style={{ 
                background: `${colors.secondary}20`,
                border: `1px solid ${colors.primary}30`
              }}
            >
              <span className="font-bold text-sm" style={{ color: colors.primary }}>
                سابقة أعمالنا
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.dark }}>
              مشاريع نفخر بـ
              <span className="text-primary mx-2" style={{ color: colors.primary }}>إنجازها</span>
            </h2>
          </div>
        </FadeIn>

        {/* Tabs Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setProgress(0);
              }}
              className={`group relative flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                activeTab === cat.id 
                ? 'bg-[#234338] text-white shadow-lg scale-105' 
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              <cat.icon className={`w-5 h-5 transition-colors ${activeTab === cat.id ? 'text-[#d9f2a6]' : 'text-gray-400'}`} />
              <span className="relative z-10">{cat.name}</span>
              
              {/* Progress Indicator for Active Tab */}
              {activeTab === cat.id && (
                <div className="absolute bottom-0 left-0 h-1 bg-[#d9f2a6]/30 w-full rounded-b-2xl overflow-hidden">
                  <div 
                    className="h-full bg-[#d9f2a6] transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.map((project, index) => (
            <FadeIn key={`${activeTab}-${project.id}`} delay={index * 0.1}>
              <div 
                className="group relative rounded-3xl overflow-hidden bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                onMouseEnter={() => setHoveredIndex(project.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ border: `1px solid ${colors.primary}10` }}
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark hover:scale-110 transition-transform cursor-pointer"
                      style={{ color: colors.dark }}
                    >
                      <Eye className="w-6 h-6" />
                    </div>
                    <div 
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark hover:scale-110 transition-transform cursor-pointer"
                      style={{ color: colors.dark }}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 flex-grow flex flex-col">
                  <span className="text-sm font-bold mb-2 block" style={{ color: colors.primary }}>
                    {project.categoryName}
                  </span>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: colors.dark }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-500 line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Gradient Line */}
                <div 
                  className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* === CTA Section === */}
        <FadeIn>
          <div className="mt-24 text-center">
            <div 
              className="inline-flex flex-col sm:flex-row items-center gap-10 p-10 md:p-14 rounded-[3rem] border border-[#234338]/10 relative overflow-hidden"
              style={{ 
                background: `#14221b`,
              }}
            >
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#60b093]/10 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d9f2a6]/5 blur-[80px] rounded-full" />

              <div className="text-right relative z-10">
                <h4 className="text-3xl md:text-4xl font-black mb-4 text-white">
                  جاهز لبدء مشروعك؟
                </h4>
                <p className="text-gray-400 text-lg md:text-xl">
                  تواصل معنا الآن واحصل على استشارة مجانية
                </p>
              </div>
              
              <button 
                className="group flex items-center gap-4 px-10 py-5 rounded-2xl text-[#0d1712] font-black text-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-[#60b093]/20 relative z-10"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                }}
              >
                <span>ابدأ مشروعك معنا</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:-translate-x-2" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
