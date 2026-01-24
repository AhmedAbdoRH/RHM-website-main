'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ExternalLink, Eye, Github, ArrowRight, Globe, Smartphone, Layers, Bot, Rocket, Users, Clock, Shield } from 'lucide-react';

const colors = {
  primary: '#60b093',
  secondary: '#d9f2a6',
  dark: '#234338',
  white: '#ffffff',
};

const categories = [
  { id: 'web', name: 'تطوير الويب', icon: Globe },
  { id: 'apps', name: 'تطبيقات الأندرويد', icon: Smartphone },
  { id: 'systems', name: 'الأنظمة الداخلية', icon: Layers },
  { id: 'ai', name: 'أتمته وAI', icon: Bot },
];

const projects = [
  // Web & E-commerce
  {
    id: 1,
    title: 'منصة أنا كفو التعليمية',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/1.webp',
    link: 'https://Ana-Kafou.com',
    description: 'منصة رقمية متكاملة لتقديم الخدمات والحلول المتنوعة.'
  },
  {
    id: 10,
    title: 'منصة أونلاين كاتلوج للتجارة الإلكترونية',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/10.webp',
    link: 'https://online-catalog.net/go',
    displayUrl: 'online-catalog.net',
    description: 'منصة متطورة لعرض المنتجات وإدارة الكتالوجات الإلكترونية.'
  },
  {
    id: 8,
    title: 'موقع وكالة فاير فلاي التسويقية',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/8.webp',
    link: 'https://Firefly-Agency.com',
    description: 'منصة إبداعية لعرض حلول الهوية البصرية والتسويق.'
  },
  {
    id: 3,
    title: 'متجر السماح للمفروشات (فوربيد)',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/3.webp',
    link: 'https://Alsamah-Store.com',
    description: 'متجر إلكتروني متطور لعرض وبيع المفروشات المنزلية.'
  },
  {
    id: 5,
    title: 'موقع شركة الماسة الصناعية',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/5.webp',
    link: 'https://Almasa.com.sa',
    description: 'منصة لعرض المنتجات الصناعية والحلول التقنية للمصانع.'
  },
  {
    id: 4,
    title: 'موقع شركة سمارت هوم للإنشاءات',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/4.webp',
    link: 'https://SmartTeamEg.com',
    description: 'موقع تعريفي لخدمات الإنشاءات والتصميم المعماري.'
  },
  {
    id: 7,
    title: 'موقع وكالة بوفا التسويقية',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/7.webp',
    link: 'https://PovaAgency.com',
    description: 'موقع يعرض خدمات التسويق الرقمي وإدارة الحملات الإعلانية.'
  },
  {
    id: 6,
    title: 'متجر سفير العطور',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/6.webp',
    link: 'https://perfume-ambassador.com',
    description: 'تجربة تسوق فاخرة للعطور والمنتجات العطرية.'
  },
  {
    id: 9,
    title: 'متجر ديزاين فور يو للتصميمات',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/9.webp',
    link: 'https://designs-4u.com',
    description: 'متجر إلكتروني لبيع خدمات ومنتجات التصميم الجرافيكي.'
  },
  {
    id: 2,
    title: 'موقع شركة بيست باص للتنقلات',
    category: 'web',
    categoryName: 'تطوير الويب',
    image: '/website/2.webp',
    link: 'https://BestBusTransport.com',
    description: 'نظام حجز وإدارة رحلات النقل الجماعي والخاص.'
  },
  // Apps
  {
    id: 3,
    title: 'تطبيق توصيل طلبات',
    category: 'apps',
    categoryName: 'تطبيقات الأندرويد',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'تطبيق أندرويد لتتبع الطلبات وإدارة عمليات التوصيل في الوقت الفعلي.'
  },
  {
    id: 4,
    title: 'منصة تعليمية تفاعلية',
    category: 'apps',
    categoryName: 'تطوير تطبيقات الأندرويد',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'تطبيق ويب للفصول الافتراضية وإدارة المحتوى التعليمي والاختبارات.'
  },
  // Systems & ERP
  {
    id: 5,
    title: 'نظام إدارة الموارد ERP',
    category: 'systems',
    categoryName: 'الأنظمة الداخلية',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1626&auto=format&fit=crop',
    link: '#',
    description: 'لوحة تحكم متقدمة لإدارة العمليات اليومية والتقارير المالية والموظفين.'
  },
  {
    id: 6,
    title: 'نظام إدارة المخازن والمبيعات',
    category: 'systems',
    categoryName: 'تطوير الأنظمة الداخلية',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'برنامج ديسكتوب مخصص لإدارة المخزون ونقاط البيع POS.'
  },
  // AI & Automation
  {
    id: 7,
    title: 'مساعد ذكاء اصطناعي',
    category: 'ai',
    categoryName: 'أتمته وAI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'شات بوت ذكي مخصص لخدمة العملاء وتحليل البيانات.'
  },
  {
    id: 8,
    title: 'نظام تحليل الصور الآلي',
    category: 'ai',
    categoryName: 'أتمته وAI',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1632&auto=format&fit=crop',
    link: '#',
    description: 'حل برمجي لأتمتة فحص المنتجات باستخدام تقنيات الرؤية الحاسوبية.'
  }
];

const achievements = [
  { icon: Rocket, value: '+25', label: 'مشروع منجز' },
  { icon: Users, value: '+100', label: 'عميل' },
  { icon: Clock, value: '5+', label: 'سنوات خبرة' },
  { icon: Shield, value: '100%', label: 'التزام بالجودة' },
];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('web');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const AUTOPLAY_DURATION = 8000; // 8 seconds
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
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setProgress(0);
              }}
              className={`group relative flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl font-bold text-[13px] md:text-base transition-all duration-300 ${
                activeTab === cat.id 
                ? 'bg-[#234338] text-white shadow-lg scale-105' 
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              <cat.icon className={`w-3.5 h-3.5 md:w-5 md:h-5 transition-colors ${activeTab === cat.id ? 'text-[#d9f2a6]' : 'text-gray-400'}`} />
              <span className="relative z-10">{cat.name}</span>
              
              {/* Progress Indicator for Active Tab */}
              {activeTab === cat.id && (
                <div className="absolute bottom-0 left-0 h-1 bg-[#d9f2a6]/30 w-full rounded-b-xl md:rounded-b-2xl overflow-hidden">
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 min-h-[400px]">
          {filteredProjects.map((project, index) => (
            <FadeIn key={`${activeTab}-${project.id}`} delay={index * 0.1}>
              <div 
                className="group relative rounded-xl md:rounded-3xl overflow-hidden bg-white shadow-lg md:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                onMouseEnter={() => setHoveredIndex(project.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ border: `1px solid ${colors.primary}10` }}
              >
                {/* Project Image */}
                <div className="relative aspect-[1720/1080] overflow-hidden group/img">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay - Hidden on mobile for better UX */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-center gap-4">
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

                {/* Website URL Bar - Adjusted for mobile grid */}
                <div className="relative group/url">
                  <div className="absolute inset-0 bg-[#f8fafc] transition-colors duration-500 group-hover:bg-[#60b093]/5" />
                  
                  <div className="relative py-1.5 md:py-2.5 px-3 md:px-6 flex items-center border-y border-gray-100 transition-all duration-500 group-hover:border-[#60b093]/20">
                    <div className="flex items-center gap-2 md:gap-4 w-full">
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-[#60b093] blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="relative p-1 md:p-1.5 rounded-md md:rounded-lg bg-white shadow-sm border border-gray-100 transition-all duration-500 group-hover:border-[#60b093]/30 group-hover:scale-110">
                          <Globe className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#60b093]" />
                        </div>
                      </div>
                      
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-[#234338] text-[10px] md:text-base font-black tracking-wide truncate group-hover:text-[#60b093] transition-colors duration-300">
                          {project.displayUrl || project.link.replace('https://', '').replace('www.', '').replace('/go', '')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#60b093] to-[#d9f2a6] transition-all duration-700 group-hover:w-full shadow-[0_0_10px_rgba(96,176,147,0.5)]" />
                </div>

                {/* Project Info - Optimized for mobile grid */}
                <div className="p-3 md:p-5 flex-grow flex flex-col">
                  <h3 className="text-[10px] md:text-xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors line-clamp-1" style={{ color: colors.dark }}>
                    {project.title}
                  </h3>
                  
                  <div className="mt-auto">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center w-full px-3 md:px-8 py-2 md:py-4 font-bold text-white transition-all duration-500 rounded-lg md:rounded-2xl overflow-hidden shadow-md md:shadow-[0_10px_30px_rgba(96,176,147,0.25)] hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#60b093] to-[#234338]" />
                      
                      <div className="relative z-10 flex items-center gap-1.5 md:gap-3">
                        <span className="tracking-wide text-[10px] md:text-lg">عرض الموقع</span>
                        <ExternalLink className="w-3 h-3 md:w-5 md:h-5" />
                      </div>
                    </a>
                  </div>
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

        {/* === Achievements Grid - Positioned Below Projects === */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div 
                className="group p-6 md:p-8 rounded-[2rem] bg-white border border-[#234338]/5 shadow-sm hover:shadow-xl hover:shadow-[#60b093]/10 hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#60b093]/5 rounded-full blur-2xl group-hover:bg-[#60b093]/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 md:p-4 rounded-2xl bg-[#234338]/5 text-[#60b093] mb-4 group-hover:scale-110 group-hover:bg-[#234338] group-hover:text-white transition-all duration-500">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-[#234338] mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-500">
                    {item.value}
                  </div>
                  <div className="text-gray-500 font-bold text-sm md:text-base group-hover:text-[#60b093] transition-colors">
                    {item.label}
                  </div>
                </div>
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
                <span>ابدأ معنا الآن</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:-translate-x-2" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
