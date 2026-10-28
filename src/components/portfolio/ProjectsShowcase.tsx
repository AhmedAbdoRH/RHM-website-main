'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  ArrowUpLeft,
  Globe,
  ShoppingCart,
  Smartphone,
  Bot,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';

const colors = {
  primary: '#60b093',
  secondary: '#d9f2a6',
  dark: '#234338',
  obsidian: '#0d1712',
  white: '#ffffff',
};

type CategoryId = 'website' | 'ecommerce' | 'android_app' | 'automation';

const CATEGORY_GROUPS: {
  value: CategoryId;
  label: string;
  icon: LucideIcon;
}[] = [
  { value: 'website', label: 'المواقع', icon: Globe },
  { value: 'ecommerce', label: 'المتاجر الإلكترونية', icon: ShoppingCart },
  { value: 'android_app', label: 'تطبيقات الأندرويد', icon: Smartphone },
  { value: 'automation', label: 'الأتمتة', icon: Bot },
];

interface ProjectItem {
  category: CategoryId;
  image: string;
  code: string;
  title: string;
  link?: string;
  cta?: string;
  hidden?: boolean;
}

const PROJECTS: ProjectItem[] = [
  // ── E-commerce ──
  {
    category: 'ecommerce',
    image: '/website/3.webp',
    code: 'Alsamah_Store',
    title: 'متجر السماح للمفروشات (فوربيد)',
    link: 'https://Alsamah-Store.com',
    cta: 'زيارة المتجر',
    hidden: true,
  },
  {
    category: 'ecommerce',
    image: '/website/9.webp',
    code: 'Designs_4U',
    title: 'متجر ديزاين فور يو للتصميمات',
    link: 'https://designs-4u.com',
    cta: 'زيارة المتجر',
    hidden: true,
  },
  {
    category: 'ecommerce',
    image: '/website/12.png',
    code: 'Elroaa_Trading',
    title: 'الرؤى للتجارة والتوريدات',
    link: 'https://elroaa-store.com',
    cta: 'زيارة المتجر',
    hidden: true,
  },
  {
    category: 'ecommerce',
    image: '/website/10.webp',
    code: 'Tagr_Online',
    title: 'منصة تاجر أونلاين للتجارة الإلكترونية',
    link: 'https://Tagr-Online.com',
    cta: 'زيارة المتجر',
  },
  {
    category: 'ecommerce',
    image: '/website/11.png',
    code: 'Elrayan_Tech',
    title: 'الريان للحلول التكنولوجية',
    link: 'https://elrayantechnology.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'ecommerce',
    image: '/website/16.webp',
    code: 'Blabli_Store',
    title: 'متجر بليبي للملابس المخصصة',
    link: 'https://blabli-store.com',
    cta: 'زيارة المتجر',
  },
  {
    category: 'ecommerce',
    image: '/website/4.webp',
    code: 'SmartTeam_Egypt',
    title: 'موكات للمنازل الذكية',
    link: 'https://SmartTeamEg.com',
    cta: 'زيارة الموقع',
  },
  // ── Websites ──
  {
    category: 'website',
    image: '/website/8.webp',
    code: 'Firefly_Agency',
    title: 'موقع وكالة فاير فلاي التسويقية',
    link: 'https://Firefly-Agency.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/14.jpeg',
    code: 'Gardenia_EC',
    title: 'جاردينيا للاستشارات البيئية',
    link: 'https://GardeniaEC.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/cairo-hospital-abuja.webp',
    code: 'Cairo_Hospital_Abuja',
    title: 'مستشفى القاهرة - نيجيريا',
    link: 'https://egyptian-hospital.rehlathadaf.workers.dev/',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/7.webp',
    code: 'Pova_Agency',
    title: 'موقع وكالة بوفا التسويقية',
    link: 'https://PovaAgency.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/15.webp',
    code: 'Infix_Sport',
    title: 'إنفكس سبورت للأنظمة الرياضية',
    link: 'https://infixsport.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/1.webp',
    code: 'Kafou_Edu_Platform',
    title: 'منصة أنا كفو التعليمية',
    link: 'https://Ana-Kafou.com',
    cta: 'زيارة الموقع',
  },
  {
    category: 'website',
    image: '/website/5.webp',
    code: 'Almasa_Industrial',
    title: 'موقع شركة الماسة الصناعية',
    link: 'https://Almasa.com.sa',
    cta: 'زيارة الموقع',
    hidden: true,
  },
  {
    category: 'website',
    image: '/website/2.webp',
    code: 'BestBus_Transport',
    title: 'شركة بيست باص للتنقلات',
    link: 'https://BestBusTransport.com',
    cta: 'زيارة الموقع',
    hidden: true,
  },
  {
    category: 'website',
    image: '/website/13.webp',
    code: 'Elwessam_Limo',
    title: 'شركة الوسام ليموزين',
    link: 'https://El-Wessam.com',
    cta: 'زيارة الموقع',
  },
  // ── Android Apps ──
  {
    category: 'android_app',
    image: '/androin/oc.png',
    code: 'Momtn_Social',
    title: 'تطبيق مومنت للتواصل الاجتماعي',
    link: 'https://Momtn.vercel.app/',
    cta: 'فتح التطبيق',
  },
  {
    category: 'android_app',
    image: '/androin/momtn.png',
    code: 'Tagr_App',
    title: 'تطبيق تاجر أونلاين للأندرويد',
    link: 'https://Tagr-Online.com',
    cta: 'فتح التطبيق',
  },
  // ── Automation ──
  {
    category: 'automation',
    image: '/Ai/1.png',
    code: 'AI_Chat_Agent',
    title: 'وكيل الرد على العملاء (AI Chat Agent)',
  },
  {
    category: 'automation',
    image: '/Ai/2.png',
    code: 'ChatWithData',
    title: 'التحدث مع ملفات البيانات',
  },
];

function useInView(rootMargin = '0px 0px -10% 0px') {
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

function ProjectCard({ project }: { project: ProjectItem }) {
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const cleanDomain = project.link
    ? project.link.replace(/^https?:\/\//, '').replace(/\/$/, '').toLowerCase()
    : null;

  // تتبع الماوس بدون re-render
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const media =
    project.image && !imgError ? (
      <img
        src={project.image}
        alt={project.title}
        width={1200}
        height={750}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    ) : (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#234338] via-[#1a332a] to-[#0d1712] p-6 text-center">
        <div className="absolute -top-10 -right-10 size-40 rounded-full bg-[#60b093]/30 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-[#d9f2a6]/20 blur-3xl" />
        <span className="relative font-headline text-xl font-bold text-white/90">{project.title}</span>
      </div>
    );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className="group relative h-full rounded-[28px] bg-[#234338]/[0.08] p-px shadow-[0_8px_30px_rgba(13,23,18,0.06)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-15px_rgba(35,67,56,0.28)] motion-reduce:hover:translate-y-0"
      style={{ '--mx': '50%', '--my': '0%' } as React.CSSProperties}
    >
      {/* Glow Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(380px circle at var(--mx) var(--my), rgba(96,176,147,0.95), rgba(217,242,166,0.4) 25%, transparent 50%)',
        }}
      />

      <article className="relative z-10 flex h-full flex-col overflow-hidden rounded-[27px] bg-white p-3">
        {/* Inner Spotlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(500px circle at var(--mx) var(--my), rgba(217,242,166,0.22), transparent 40%)',
          }}
        />

        {/* Media Frame */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-[#f1f6f3] ring-1 ring-inset ring-[#234338]/[0.06]">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.title}
              className="block h-full w-full"
            >
              {media}
            </a>
          ) : (
            media
          )}

          {/* Shine Sweep */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-[120%] motion-reduce:hidden"
          />

          {/* Subtle Hover Depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1712]/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        {/* Footer */}
        <div className="relative z-20 mt-auto flex flex-col justify-between gap-4 px-3 pb-2 pt-5 sm:flex-row sm:items-center">
          <div className="min-w-0 flex-1 space-y-1.5">
            <h4 className="font-headline text-lg font-bold leading-snug text-[#234338] transition-colors duration-300 group-hover:text-[#1e3a30] sm:text-xl">
              {project.title}
            </h4>
            {cleanDomain ? (
              <div className="flex items-center gap-1.5 text-xs text-[#234338]/60" dir="ltr">
                <Globe className="h-3.5 w-3.5 shrink-0 text-[#60b093]" strokeWidth={2} />
                <span className="truncate font-mono">{cleanDomain}</span>
              </div>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d9f2a6]/50 px-2.5 py-0.5 text-[11px] font-bold text-[#234338]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60b093]" />
                عرض توضيحي
              </span>
            )}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.cta ?? 'زيارة الموقع'} - ${project.title}`}
              className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#234338] px-5 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(35,67,56,0.5)] transition-all duration-300 hover:bg-[#60b093] group-hover:bg-[#60b093] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60b093] focus-visible:ring-offset-2 sm:w-auto"
            >
              <span>{project.cta ?? 'زيارة الموقع'}</span>
              <ArrowUpLeft
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.25}
              />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

export function ProjectsShowcase({ showHeader = true }: { showHeader?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<'all' | CategoryId>('all');
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupValue: string) => {
    setExpandedGroups((prev) => ({ ...prev, [groupValue]: !prev[groupValue] }));
  };

  const allGroups = CATEGORY_GROUPS.map((group) => ({
    ...group,
    items: PROJECTS.filter((project) => project.category === group.value),
  })).filter((group) => group.items.length > 0);

  const visibleGroups =
    activeFilter === 'all'
      ? allGroups
      : allGroups.filter((group) => group.value === activeFilter);

  return (
    <section
      id="portfolio"
      className={
        showHeader
          ? 'relative overflow-hidden bg-[#fbfdfc] pt-16 pb-24 lg:pt-24 lg:pb-32'
          : 'relative overflow-hidden bg-[#fbfdfc] py-16 md:py-24'
      }
    >
      <div className="container mx-auto px-4 relative z-10">
        {showHeader && (
          <FadeIn>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p
                className="mb-3 text-sm font-bold tracking-wide"
                style={{ color: colors.primary }}
              >
                سابقة أعمالنا
              </p>
              <h2
                className="font-headline text-3xl font-black tracking-tight sm:text-4xl md:text-5xl"
                style={{ color: colors.dark, textWrap: 'balance' }}
              >
                مشاريع نفخر بـ
                <span className="mx-2" style={{ color: colors.primary }}>
                  إنجازها
                </span>
              </h2>
            </div>
          </FadeIn>
        )}

        {/* Interactive Category Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-[#234338]/10 bg-white p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`min-h-[38px] whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 ${
                activeFilter === 'all'
                  ? 'bg-[#234338] text-white'
                  : 'text-[#234338]/70 hover:bg-[#f1f6f3] hover:text-[#234338]'
              }`}
            >
              الكل
            </button>
            {allGroups.map((group) => {
              const Icon = group.icon;
              const isSelected = activeFilter === group.value;
              return (
                <button
                  key={group.value}
                  type="button"
                  onClick={() => setActiveFilter(group.value)}
                  className={`inline-flex min-h-[38px] shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 ${
                    isSelected
                      ? 'bg-[#234338] text-white'
                      : 'text-[#234338]/70 hover:bg-[#f1f6f3] hover:text-[#234338]'
                  }`}
                >
                  <Icon className="size-4 shrink-0" strokeWidth={1.75} />
                  <span>{group.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Groups */}
        <div className="space-y-16">
          {visibleGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            const hiddenItems = group.items.filter((item) => item.hidden);
            const visibleItems = group.items.filter((item) => !item.hidden);
            const isExpanded =
              activeFilter !== 'all' || (expandedGroups[group.value] ?? false);
            const hasHidden = activeFilter === 'all' && hiddenItems.length > 0;
            const displayedItems = isExpanded
              ? [...visibleItems, ...hiddenItems]
              : visibleItems;

            return (
              <div
                key={group.value}
                className={
                  groupIndex === 0
                    ? 'space-y-8'
                    : 'space-y-8 border-t border-[#234338]/10 pt-14'
                }
              >
                {/* Category Header */}
                <Reveal variant="clip" className="flex items-center gap-3">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#60b093]/25 bg-[#60b093]/10"
                  >
                    <Icon className="size-5 text-[#60b093]" strokeWidth={1.75} />
                  </span>
                  <h3
                    className="font-headline text-2xl font-bold tracking-tight"
                    style={{ color: colors.dark }}
                  >
                    {group.label}
                  </h3>
                  <span
                    className="h-px flex-1 bg-[#234338]/10"
                    aria-hidden="true"
                  />
                  <span
                    className="font-mono text-xs tabular-nums text-[#234338]/45"
                  >
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </Reveal>

                {/* 2-Column Showcase Cards Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                  {displayedItems.map((project, i) => (
                    <Reveal key={project.code} delay={(i % 4) * 60} className="h-full">
                      <ProjectCard project={project} />
                    </Reveal>
                  ))}
                </div>

                {/* Expand / Collapse Hidden Items */}
                {hasHidden && (
                  <div className="flex justify-center pt-2">
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.value)}
                      className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-xl border border-[#234338]/15 bg-white px-6 py-2.5 text-sm font-bold text-[#234338] shadow-sm transition-all duration-200 hover:border-[#60b093] hover:text-[#60b093]"
                    >
                      <span>
                        {isExpanded ? 'عرض أقل' : `عرض المزيد (${hiddenItems.length})`}
                      </span>
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
