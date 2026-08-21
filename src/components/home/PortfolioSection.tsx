'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  ExternalLink,
  Globe,
  ShoppingCart,
  Smartphone,
  Bot,
  Rocket,
  ChevronDown,
} from 'lucide-react';

const colors = {
  primary: '#60b093',
  secondary: '#d9f2a6',
  dark: '#234338',
  white: '#ffffff',
};

type CategoryId = 'website' | 'ecommerce' | 'android_app' | 'automation';

const CATEGORY_GROUPS: {
  value: CategoryId;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}[] = [
  { value: 'website', label: 'المواقع', icon: Globe },
  { value: 'ecommerce', label: 'المتاجر الإلكترونية', icon: ShoppingCart },
  { value: 'android_app', label: 'تطبيقات الأندرويد', icon: Smartphone },
  { value: 'automation', label: 'الأتمتة', icon: Bot },
];

const PROJECTS: {
  category: CategoryId;
  image: string;
  code: string;
  title: string;
  summary: string;
  stack: string;
  year: string;
  link?: string;
  cta?: string;
  hidden?: boolean;
}[] = [
  // ── E-commerce ──
  {
    category: 'ecommerce',
    image: '/website/3.webp',
    code: 'Alsamah_Store',
    title: 'متجر السماح للمفروشات (فوربيد)',
    summary: 'متجر إلكتروني متطور لعرض وبيع المفروشات المنزلية.',
    stack: 'Next.js · Tailwind · Supabase',
    year: '2024 — 2025',
    link: 'https://Alsamah-Store.com',
    cta: 'زيارة المتجر',
    hidden: true,
  },
  {
    category: 'ecommerce',
    image: '/website/9.webp',
    code: 'Designs_4U',
    title: 'متجر ديزاين فور يو للتصميمات',
    summary: 'متجر إلكتروني لبيع خدمات ومنتجات التصميم الجرافيكي.',
    stack: 'Next.js · Tailwind · Supabase',
    year: '2024 — 2025',
    link: 'https://designs-4u.com',
    cta: 'زيارة المتجر',
    hidden: true,
  },
  {
    category: 'ecommerce',
    image: '/website/12.png',
    code: 'Elroaa_Trading',
    title: 'الرؤى للتجارة والتوريدات',
    summary: 'منصة تجارية متطورة للتوريدات والتجارة الإلكترونية.',
    stack: 'Next.js · Tailwind · Supabase',
    year: '2024 — 2025',
    link: 'https://elroaa-store.com',
    cta: 'زيارة المتجر',
    hidden: true,
  },
  {
    category: 'ecommerce',
    image: '/website/10.webp',
    code: 'Tagr_Online',
    title: 'منصة تاجر أونلاين للتجارة الإلكترونية',
    summary: 'منصة متطورة للتجارة الإلكترونية وإدارة المتاجر.',
    stack: 'Next.js · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://Tagr-Online.com',
    cta: 'زيارة المتجر',
  },
  {
    category: 'ecommerce',
    image: '/website/11.png',
    code: 'Elrayan_Tech',
    title: 'الريان للحلول التكنولوجية',
    summary: 'شركة متخصصة في تقديم الحلول التكنولوجية المتكاملة.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://elrayantechnology.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'ecommerce',
    image: '/website/16.webp',
    code: 'Blabli_Store',
    title: 'متجر بليبي للملابس المخصصة',
    summary: 'منصة تجارة إلكترونية للملابس المخصصة والهوية البصرية.',
    stack: 'Next.js · Tailwind CSS',
    year: '2025',
    link: 'https://blabli-store.com',
    cta: 'زيارة المتجر',
  },
  {
    category: 'ecommerce',
    image: '/website/4.webp',
    code: 'SmartTeam_Egypt',
    title: 'موكات للمنازل الذكية',
    summary: 'موقع تعريفي لحلول المنازل الذكية وخدماتها.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://SmartTeamEg.com',
    cta: 'زيارة الموقع',
  },
  // ── Websites ──
  {
    category: 'website',
    image: '/website/15.webp',
    code: 'Infix_Sport',
    title: 'إنفكس سبورت للأنظمة الرياضية',
    summary: 'منصة لأنظمة الأرضيات الرياضية والحلول الرياضية.',
    stack: 'Next.js · Tailwind CSS',
    year: '2025',
    link: 'https://infixsport.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/1.webp',
    code: 'Kafou_Edu_Platform',
    title: 'منصة أنا كفو التعليمية',
    summary: 'منصة رقمية متكاملة لتقديم الخدمات والحلول المتنوعة.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://Ana-Kafou.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/8.webp',
    code: 'Firefly_Agency',
    title: 'موقع وكالة فاير فلاي التسويقية',
    summary: 'منصة إبداعية لعرض حلول الهوية البصرية والتسويق.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://Firefly-Agency.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/14.jpeg',
    code: 'Gardenia_EC',
    title: 'جاردينيا للاستشارات البيئية',
    summary: 'استشارات بيئية متخصصة وحلول مستدامة.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://GardeniaEC.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/7.webp',
    code: 'Pova_Agency',
    title: 'موقع وكالة بوفا التسويقية',
    summary: 'موقع يعرض خدمات التسويق الرقمي وإدارة الحملات الإعلانية.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://PovaAgency.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/5.webp',
    code: 'Almasa_Industrial',
    title: 'موقع شركة الماسة الصناعية',
    summary: 'منصة لعرض المنتجات الصناعية والحلول التقنية للمصانع.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://Almasa.com.sa',
    cta: 'زيارة الموقع',
    hidden: true,
  },
  {
    category: 'website',
    image: '/website/2.webp',
    code: 'BestBus_Transport',
    title: 'شركة بيست باص للتنقلات',
    summary: 'نظام حجز وإدارة رحلات النقل الجماعي والخاص.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://BestBusTransport.com',
    cta: 'زيارة الموقع',
    hidden: true,
  },
  {
    category: 'website',
    image: '/website/13.webp',
    code: 'Elwessam_Limo',
    title: 'شركة الوسام ليموزين',
    summary: 'خدمات نقل فاخرة وليموزين عالية الجودة.',
    stack: 'React · Tailwind CSS',
    year: '2024 — 2025',
    link: 'https://El-Wessam.com',
    cta: 'زيارة الموقع',
  },
  // ── Android Apps ──
  {
    category: 'android_app',
    image: '/androin/oc.png',
    code: 'Momtn_Social',
    title: 'تطبيق مومنت للتواصل الاجتماعي',
    summary: 'تطبيق تواصل اجتماعي منشور على متجر جوجل بلاي.',
    stack: 'React Native · Firebase',
    year: '2023 — 2024',
    link: 'https://Momtn.vercel.app/',
    cta: 'فتح التطبيق',
  },
  {
    category: 'android_app',
    image: '/androin/momtn.png',
    code: 'Tagr_App',
    title: 'تطبيق تاجر أونلاين للأندرويد',
    summary: 'تجربة التجارة الإلكترونية كتطبيق محمول على جوجل بلاي.',
    stack: 'Flutter · Google Play',
    year: '2023 — 2024',
    link: 'https://Tagr-Online.com',
    cta: 'فتح التطبيق',
  },
  // ── Automation ──
  {
    category: 'automation',
    image: '/Ai/1.png',
    code: 'AI_Chat_Agent',
    title: 'وكيل الرد على العملاء (AI Chat Agent)',
    summary: 'وكيل ذكاء اصطناعي يرد على العملاء تلقائيًا.',
    stack: 'AI · أتمتة',
    year: '2025',
  },
  {
    category: 'automation',
    image: '/Ai/2.png',
    code: 'ChatWithData',
    title: 'التحدث مع ملفات البيانات',
    summary: 'تحدث مع بياناتك — أداة محادثة بالذكاء الاصطناعي.',
    stack: 'AI · أتمتة',
    year: '2025',
  },
];

/* ── Scroll-triggered reveal hook (mirrors personal site's useInView) ── */
function useInView(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, shown };
}

/* ── Reveal wrapper (mirrors personal site's Reveal component) ── */
function Reveal({
  children,
  delay = 0,
  className,
  variant = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: 'up' | 'clip' | 'fade';
}) {
  const { ref, shown } = useInView();

  const variantClass: Record<string, string> = {
    up: 'reveal-up',
    clip: 'reveal-clip',
    fade: 'reveal-fade',
  };

  return (
    <div
      ref={ref}
      data-shown={shown ? 'true' : 'false'}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
      className={`${shown ? variantClass[variant] : 'opacity-0'} ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

/* ── Section Label (mirrors personal site's SectionLabel) ── */
function SectionLabel({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  const { ref, shown } = useInView();
  const raw = typeof children === 'string' ? children : '';
  const [index, ...rest] = raw.split('/');
  const title = rest.length > 0 ? rest.join('/').trim() : raw;
  const number = rest.length > 0 ? index?.trim() : null;

  return (
    <h2
      ref={ref}
      data-shown={shown ? 'true' : 'false'}
      className="flex flex-wrap items-center gap-x-4 gap-y-2"
    >
      {Icon ? (
        <span
          className="grid size-10 shrink-0 place-items-center rounded-lg"
          style={{
            backgroundColor: `${colors.primary}15`,
            border: `1px solid ${colors.primary}30`,
          }}
        >
          <Icon className="size-5" strokeWidth={1.75} style={{ color: colors.primary }} />
        </span>
      ) : null}
      <span className="text-3xl sm:text-4xl leading-none font-bold tracking-tight font-headline" style={{ color: colors.dark }}>
        <span className={shown ? 'reveal-clip inline-block' : 'opacity-0'}>{title}</span>
      </span>
      {number ? (
        <span
          className={`font-mono text-xs uppercase tracking-[0.2em] ${shown ? 'reveal-fade' : 'opacity-0'}`}
          style={{ color: colors.primary, animationDelay: '140ms' }}
        >
          / {number}
        </span>
      ) : null}
    </h2>
  );
}

export function PortfolioSection() {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupValue: string) => {
    setExpandedGroups((prev) => ({ ...prev, [groupValue]: !prev[groupValue] }));
  };

  const groups = CATEGORY_GROUPS.map((group) => ({
    ...group,
    items: PROJECTS.filter((project) => project.category === group.value),
  })).filter((group) => group.items.length > 0);

  return (
    <section id="portfolio" className="pt-12 lg:pt-16 pb-24 lg:pb-32 relative overflow-hidden bg-white">
      {/* Background dot pattern */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${colors.primary} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Section Header ── */}
        <FadeIn>
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-6"
              style={{
                background: `${colors.secondary}20`,
                border: `1px solid ${colors.primary}30`,
              }}
            >
              <span className="font-bold text-sm" style={{ color: colors.primary }}>
                سابقة أعمالنا
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-headline" style={{ color: colors.dark }}>
              مشاريع نفخر بـ
              <span className="mx-2" style={{ color: colors.primary }}>إنجازها</span>
            </h2>
          </div>
        </FadeIn>

        {/* ── Category Groups ── */}
        <div className="space-y-16 mt-12">
          {groups.map((group, groupIndex) => {
            const Icon = group.icon;
            const hiddenItems = group.items.filter((item) => item.hidden);
            const visibleItems = group.items.filter((item) => !item.hidden);
            const isExpanded = expandedGroups[group.value] ?? false;
            const hasHidden = hiddenItems.length > 0;

            return (
              <div
                key={group.value}
                className={groupIndex === 0 ? 'space-y-6' : 'space-y-6 border-t pt-10'}
                style={{ borderColor: `${colors.primary}15` }}
              >
                {/* Category Header */}
                <Reveal variant="clip" className="flex items-center gap-3">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-lg"
                    style={{
                      backgroundColor: `${colors.primary}10`,
                      border: `1px solid ${colors.primary}25`,
                    }}
                  >
                    <Icon className="size-5" strokeWidth={1.75} style={{ color: colors.primary }} />
                  </span>
                  <h3
                    className="text-2xl font-bold tracking-tight font-headline"
                    style={{ color: colors.dark }}
                  >
                    {group.label}
                  </h3>
                  <span
                    className="h-px flex-1 origin-left"
                    style={{ backgroundColor: `${colors.primary}20` }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: `${colors.primary}60` }}>
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </Reveal>

                {/* Projects List */}
                <div className="space-y-12">
                  {visibleItems.map((project, i) => (
                    <Reveal key={project.title} delay={i * 70} className="group space-y-4">
                      {/* Project Image */}
                      {project.image ? (
                        <div
                          className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:-translate-y-0.5"
                          style={{
                            border: `1px solid ${colors.primary}10`,
                            backgroundColor: '#f8fafc',
                          }}
                        >
                          <img
                            src={project.image}
                            alt={`${project.title} interface preview`}
                            width={1200}
                            height={800}
                            loading="lazy"
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            style={{ maxHeight: '500px' }}
                          />
                        </div>
                      ) : null}

                      {/* Link Badge */}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold ring-1 transition-colors duration-200"
                          style={{
                            color: colors.primary,
                            borderColor: `${colors.primary}30`,
                          }}
                        >
                          {project.link.replace(/^https?:\/\//, '')}
                          <ExternalLink className="size-3 shrink-0" />
                        </a>
                      ) : null}

                      {/* Project Info */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <p
                            className="font-mono text-xs uppercase tracking-[0.2em]"
                            style={{ color: `${colors.primary}80` }}
                          >
                            {project.code}
                          </p>
                          <h4 className="text-lg font-bold font-headline" style={{ color: colors.dark }}>
                            {project.title}
                          </h4>
                          {project.summary ? (
                            <p className="text-sm" style={{ color: '#6b7280' }}>
                              {project.summary}
                            </p>
                          ) : null}
                          {project.stack ? (
                            <p className="font-mono text-xs pt-1 font-bold" style={{ color: colors.primary }}>
                              {project.stack}
                            </p>
                          ) : null}
                        </div>
                        {project.year ? (
                          <span
                            className="shrink-0 rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em]"
                            style={{
                              color: '#6b7280',
                              border: `1px solid ${colors.primary}15`,
                            }}
                          >
                            {project.year}
                          </span>
                        ) : null}
                      </div>

                      {/* CTA Button */}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
                            boxShadow: `0 4px 15px ${colors.primary}25`,
                          }}
                        >
                          {project.cta ?? 'زيارة الموقع'}
                          <ExternalLink className="size-3.5 shrink-0" />
                        </a>
                      ) : null}
                    </Reveal>
                  ))}

                  {/* Show More Button */}
                  {hasHidden && (
                    <button
                      onClick={() => toggleGroup(group.value)}
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-200"
                      style={{
                        border: `2px dashed ${colors.primary}30`,
                        color: `${colors.primary}90`,
                      }}
                    >
                      {isExpanded ? 'عرض أقل' : `عرض المزيد (${hiddenItems.length})`}
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}

                  {/* Hidden Projects (expanded) */}
                  {(isExpanded ? hiddenItems : []).map((project, i) => (
                    <Reveal key={project.title} delay={i * 70} className="group space-y-4">
                      {project.image ? (
                        <div
                          className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:-translate-y-0.5"
                          style={{
                            border: `1px solid ${colors.primary}10`,
                            backgroundColor: '#f8fafc',
                          }}
                        >
                          <img
                            src={project.image}
                            alt={`${project.title} interface preview`}
                            width={1200}
                            height={800}
                            loading="lazy"
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            style={{ maxHeight: '500px' }}
                          />
                        </div>
                      ) : null}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold ring-1 transition-colors duration-200"
                          style={{
                            color: colors.primary,
                            borderColor: `${colors.primary}30`,
                          }}
                        >
                          {project.link.replace(/^https?:\/\//, '')}
                          <ExternalLink className="size-3 shrink-0" />
                        </a>
                      ) : null}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <p
                            className="font-mono text-xs uppercase tracking-[0.2em]"
                            style={{ color: `${colors.primary}80` }}
                          >
                            {project.code}
                          </p>
                          <h4 className="text-lg font-bold font-headline" style={{ color: colors.dark }}>
                            {project.title}
                          </h4>
                          {project.summary ? (
                            <p className="text-sm" style={{ color: '#6b7280' }}>
                              {project.summary}
                            </p>
                          ) : null}
                          {project.stack ? (
                            <p className="font-mono text-xs pt-1 font-bold" style={{ color: colors.primary }}>
                              {project.stack}
                            </p>
                          ) : null}
                        </div>
                        {project.year ? (
                          <span
                            className="shrink-0 rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em]"
                            style={{
                              color: '#6b7280',
                              border: `1px solid ${colors.primary}15`,
                            }}
                          >
                            {project.year}
                          </span>
                        ) : null}
                      </div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
                            boxShadow: `0 4px 15px ${colors.primary}25`,
                          }}
                        >
                          {project.cta ?? 'زيارة الموقع'}
                          <ExternalLink className="size-3.5 shrink-0" />
                        </a>
                      ) : null}
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
