'use client';

import { useState } from 'react';
import {
  BrainCircuit,
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  QrCode,
  ChevronLeft,
  CheckCircle2,
  Monitor,
  ShoppingCart,
  Search,
  Settings,
  Zap,
  Layout,
  Layers,
  RefreshCw,
  Headphones,
  Database,
  Lock,
  MessageSquare,
  BarChart,
  Cpu,
  PieChart,
  ArrowRight,
  Code2,
  Rocket,
  Shield,
  Clock,
  Users
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

// ألوان RHM
const colors = {
  primary: '#60b093',
  secondary: '#d9f2a6',
  dark: '#234338',
  white: '#ffffff',
};

const services = [
  {
    id: 1,
    icon: Globe,
    title: 'تطوير الويب',
    subtitle: 'Web Development',
    description: 'نصمم ونطور مواقع ومتاجر إلكترونية احترافية باستخدام أحدث التقنيات العالمية لضمان تجربة مستخدم مثالية.',
    features: [
      { text: 'المواقع الإلكترونية', icon: Globe },
      { text: 'المتاجر الإلكترونية', icon: ShoppingCart },
      { text: 'تطبيقات الويب', icon: Layout },
      { text: 'المنصات الإلكترونية', icon: Layers }
    ],
    stats: { projects: '150+', satisfaction: '99%' },
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'تطوير تطبيقات الأندرويد',
    subtitle: 'Android App Development',
    description: 'تطوير تطبيقات أندرويد متطورة وسريعة تلبي تطلعات عملائك وتوفر لهم تجربة سلسة وفريدة.',
    features: [],
    stats: { projects: '80+', satisfaction: '98%' },
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 3,
    icon: Layers,
    title: 'تطوير الأنظمة الداخلية',
    subtitle: 'Internal Systems Development',
    description: 'نطور أنظمة داخلية متكاملة وبرامج ERP مخصصة لإدارة موارد الشركات وأتمتة العمليات الإدارية المعقدة.',
    features: [],
    stats: { projects: '35+', satisfaction: '99%' },
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 4,
    icon: Bot,
    title: 'أتمته وAI',
    subtitle: 'Automation & AI',
    description: 'حلول ذكية لأتمتة أعمالك الروتينية وزيادة الإنتاجية باستخدام تقنيات الذكاء الاصطناعي الحديثة.',
    features: [],
    stats: { projects: '45+', satisfaction: '100%' },
    gradient: 'from-cyan-500 to-blue-600',
  },
];


export function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="pt-12 md:pt-24 lg:pt-32 pb-12 lg:pb-16 relative overflow-hidden"
      style={{ backgroundColor: '#14221b' }}
    >
      {/* === خلفية متقدمة === */}

      {/* Gradient Orbs */}
      <div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary}40)` }}
      />
      <div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
        style={{ background: colors.secondary }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* === Section Header === */}
        <FadeIn>
          <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
            {/* Top Badge Style Heading */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#60b093]" />
              <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">خدماتنا</span>
            </div>

            {/* Main Title with Refined Typography */}
            <h2 className="text-3xl md:text-6xl font-black text-white leading-[1.3] md:leading-[1.2]">
              مجموعة متكاملة من
              <span className="block mt-2 md:mt-4">
                الحلول الرقمية
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60b093] via-[#d9f2a6] to-[#60b093] mx-2">
                  المبتكرة
                </span>
              </span>
            </h2>

            {/* Added Description */}
            <p className="text-lg md:text-2xl text-white mt-8 md:mt-6 leading-relaxed relative inline-block">
              لنقل عملك لمستوى احترافي
              <svg className="absolute -bottom-6 left-0 w-full overflow-visible" viewBox="0 0 200 12" fill="none">
                <path
                  d="M5 10 Q 40 2, 100 8 T 195 4"
                  stroke="url(#underlineGradServices)"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="d"
                    values="M5 10 Q 40 2, 100 8 T 195 4;
                            M5 8 Q 45 12, 105 4 T 195 10;
                            M5 12 Q 35 4, 95 10 T 195 2;
                            M5 10 Q 40 2, 100 8 T 195 4"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </path>
                <defs>
                  <linearGradient id="underlineGradServices" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60b093" />
                    <stop offset="50%" stopColor="#d9f2a6" />
                    <stop offset="100%" stopColor="#60b093" />
                  </linearGradient>
                </defs>
              </svg>
            </p>
          </div>
        </FadeIn>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#60b093]/50 transition-all duration-500 overflow-hidden h-full"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#60b093]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className="w-8 h-8 text-[#60b093]" />
                    </div>
                    <div className="text-white/20 font-black text-4xl group-hover:text-[#60b093]/20 transition-colors">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#60b093] transition-colors">
                    {service.title}
                  </h3>

                  <p className={`text-gray-400 leading-relaxed ${service.features.length > 0 ? 'mb-8' : 'mb-0'}`}>
                    {service.description}
                  </p>

                  {service.features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm text-white group-hover:bg-[#60b093]/10 group-hover:border-[#60b093]/40 transition-all duration-300"
                        >
                          <div className="w-5 h-5 rounded-md bg-[#60b093]/20 flex items-center justify-center">
                            <feature.icon className="w-3.5 h-3.5 text-[#60b093]" />
                          </div>
                          <span className="font-medium tracking-wide">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>


      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes wave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-wave {
          background-size: 200% auto;
          animation: wave 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
