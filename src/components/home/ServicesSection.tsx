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
    title: 'مواقع ومتاجر إلكترونية',
    subtitle: 'Web & E-commerce',
    description: 'نصمم ونطور مواقع ومتاجر إلكترونية احترافية تحقق أهدافك التجارية',
    features: [
      { text: 'تصميم متجاوب', icon: Monitor },
      { text: 'سرعة فائقة', icon: Zap },
      { text: 'SEO محسّن', icon: Search },
      { text: 'لوحة تحكم سهلة', icon: Settings }
    ],
    stats: { projects: '150+', satisfaction: '99%' },
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'تطبيقات الأندرويد والويب',
    subtitle: 'Android & Web Applications',
    description: 'تطوير تطبيقات أندرويد متطورة ومنصات ويب تفاعلية تلبي تطلعات عملائك',
    features: [
      { text: 'أداء عالي', icon: Zap },
      { text: 'واجهة سهلة', icon: Layout },
      { text: 'تحديثات مستمرة', icon: RefreshCw },
      { text: 'دعم فني', icon: Headphones }
    ],
    stats: { projects: '80+', satisfaction: '98%' },
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 3,
    icon: Layers,
    title: 'برامج الكمبيوتر والأنظمة الداخلية',
    subtitle: 'Desktop & ERP Systems',
    description: 'نطور أنظمة داخلية متكاملة وبرامج كمبيوتر مخصصة لإدارة موارد الشركات وأتمتة العمليات الإدارية',
    features: [
      { text: 'أنظمة ERP', icon: Layout },
      { text: 'إدارة المخازن', icon: Database },
      { text: 'قواعد بيانات ضخمة', icon: Database },
      { text: 'أمن معلومات', icon: Lock }
    ],
    stats: { projects: '35+', satisfaction: '99%' },
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 4,
    icon: Bot,
    title: 'ذكاء اصطناعي وأتمتة',
    subtitle: 'AI & Automation',
    description: 'حلول ذكية لأتمتة أعمالك وزيادة الإنتاجية باستخدام أحدث التقنيات',
    features: [
      { text: 'شات بوت ذكي', icon: MessageSquare },
      { text: 'تحليل بيانات', icon: BarChart },
      { text: 'أتمتة المهام', icon: Cpu },
      { text: 'تقارير ذكية', icon: PieChart }
    ],
    stats: { projects: '45+', satisfaction: '100%' },
    gradient: 'from-cyan-500 to-blue-600',
  },
];

const achievements = [
  { icon: Rocket, value: '+25', label: 'مشروع منجز' },
  { icon: Users, value: '+100', label: 'عميل' },
  { icon: Clock, value: '5+', label: 'سنوات خبرة' },
  { icon: Shield, value: '100%', label: 'التزام بالجودة' },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section 
      id="services" 
      className="pt-24 lg:pt-32 pb-12 lg:pb-16 relative overflow-hidden"
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
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {/* Top Badge Style Heading */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-[#60b093]" />
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">خدماتنا</span>
            </div>

            {/* Main Title with Refined Typography */}
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.2]">
              مجموعة متكاملة من 
              <span className="block mt-4">
                الحلول الرقمية 
                <span className="relative mx-4 inline-block">
                  <span className="relative z-10 px-8 py-3 rounded-3xl text-[#0d1712] bg-gradient-to-r from-[#60b093] via-[#d9f2a6] to-[#60b093] animate-wave shadow-[0_0_25px_rgba(96,176,147,0.4)] text-3xl md:text-5xl">
                    المبتكرة
                  </span>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#60b093] blur-2xl opacity-20 animate-pulse -z-10" />
                </span>
              </span>
            </h2>

            {/* Added Description */}
            <p className="text-xl md:text-2xl text-white mt-6 leading-relaxed relative inline-block">
              لنقل عملك لمستوى احترافي
              <svg className="absolute -bottom-6 left-0 w-full overflow-visible" viewBox="0 0 200 12" fill="none">
                <path d="M5 10 Q 40 2, 100 8 T 195 4" stroke="url(#underlineGradServices)" strokeWidth="1" strokeLinecap="round" strokeDasharray="200" strokeDashoffset="0" />
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
                  
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {service.description}
                  </p>

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
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* === Achievements Section === */}
        <FadeIn>
          <div className="mt-12 pt-12 border-t border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#60b093]/10 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-[#60b093]" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-[#60b093] transition-colors">
                    {item.value}
                  </div>
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>


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
