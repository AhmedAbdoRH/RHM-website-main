"use client";

import React, { useEffect, useRef } from 'react';

const DigitalSolutionHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Neural Network Animation
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      // Brand Colors: Primary (#60b093), Accent (#d9f2a6), Secondary (#234338)
      const colors = ['#60b093', '#d9f2a6', '#234338', '#4ade80'];
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = (1 - dist / 150) * 0.2;
            // Use Brand Primary color for lines
            ctx.strokeStyle = `rgba(96, 176, 147, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off edges
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(drawNetwork);
    };

    resize();
    createParticles();
    drawNetwork();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-[#0d1712]">
      
      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1712]/50 to-[#0d1712] z-[1]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(96,176,147,0.15),transparent_50%)] z-[1]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,242,166,0.1),transparent_50%)] z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 md:py-20 mt-8 lg:mt-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
          
          {/* Right: 3D Visual Element (Now first on mobile) */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 scale-90 sm:scale-95 md:scale-100">
            {/* Hexagonal Grid */}
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
              
              {/* Static Outer Frame */}
              <div className="absolute inset-0 opacity-40 animate-spin-very-slow">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60b093" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#234338" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#d9f2a6" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="100,5 180,50 180,150 100,195 20,150 20,50" 
                    fill="none" 
                    stroke="url(#hexGrad)" 
                    strokeWidth="1"
                    strokeDasharray="10 5"
                  />
                </svg>
              </div>

              {/* Static Inner Hexagon */}
              <div className="absolute inset-8 opacity-20 animate-spin-slow">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <polygon 
                    points="100,15 170,55 170,145 100,185 30,145 30,55" 
                    fill="none" 
                    stroke="rgba(96,176,147,0.3)" 
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              {/* Center Core */}
              <div className="absolute inset-10 md:inset-16 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Glowing Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#60b093]/20 via-[#234338]/20 to-[#d9f2a6]/20 rounded-3xl blur-2xl animate-pulse" />
                  
                  {/* Glass Card */}
                  <div className="relative w-full h-full rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-8 flex flex-col items-center justify-center overflow-hidden">
                    
                    {/* Static Code Lines */}
                    <div className="absolute inset-0 opacity-10">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-px bg-gradient-to-r from-transparent via-[#60b093] to-transparent"
                          style={{
                            top: `${12 + i * 12}%`,
                            left: '10%',
                            right: '10%',
                          }}
                        />
                      ))}
                    </div>

                      {/* Static Icon with Orbiting Dots */}
                    <div className="relative mb-4 md:mb-6">
                      <div className="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#60b093] to-[#234338] flex items-center justify-center shadow-[0_0_40px_rgba(96,176,147,0.3)] md:shadow-[0_0_60px_rgba(96,176,147,0.4)]">
                        <svg className="w-7 h-7 md:w-12 md:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      {/* Slow Orbiting Dots (Decorative) */}
                      <div className="absolute inset-0 animate-spin-slow">
                        <div className="absolute -top-1.5 md:-top-2 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d9f2a6] shadow-[0_0_15px_rgba(217,242,166,0.8)]" />
                      </div>
                      <div className="absolute inset-0 animate-spin-very-slow">
                        <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#60b093] shadow-[0_0_12px_rgba(96,176,147,0.8)]" />
                      </div>
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="flex gap-1.5 md:gap-3 mb-3 md:mb-4">
                      {['🟪', '🔷', '🟢', '🔺'].map((emoji, i) => (
                        <div 
                          key={i} 
                          className={`w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/10 transition-all cursor-pointer ${i === 3 ? 'text-lg md:text-2xl' : 'text-sm md:text-lg'}`}
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>

                    {/* Status Text */}
                    <div className="text-center" dir="rtl">
                      <div className="text-white font-bold text-sm md:text-lg mb-0.5 md:mb-1">Full Stack Solutions</div>
                      <div className="text-gray-400 text-[10px] md:text-sm">أنظمة متطورة وحلول متكاملة</div>
                    </div>

                    {/* Border Overlay - Static */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 opacity-50">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60b093] to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60b093] to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges - Arabic (Slow Float, No Rotation) */}
              {[
                { icon: '🚀', label: 'سرعة في التنفيذ', pos: 'top-[-5%] left-1/4' },
                { icon: '🔒', label: 'أمان عالي', pos: 'top-1/4 right-[-5%]' },
                { icon: '📱', label: 'تصميم متجاوب', pos: 'bottom-1/4 right-[-5%]' },
                { icon: '⚡', label: 'أداء محسن', pos: 'bottom-[-5%] left-1/4' },
                { icon: '🎨', label: 'تصميم إبداعي', pos: 'top-1/4 left-[-5%]' },
                { icon: '🎧', label: 'دعم فني متواصل', pos: 'bottom-1/4 left-[-5%]' },
              ].map((badge, i) => (
                <div
                  key={i}
                  className={`absolute ${badge.pos} flex items-center gap-1.5 md:gap-2 px-1.5 py-1 md:px-3 md:py-2 rounded-lg md:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float-slow whitespace-nowrap z-20`}
                  style={{ animationDelay: `${i * 0.8}s` }}
                  dir="rtl"
                >
                  <span className="text-sm md:text-lg">{badge.icon}</span>
                  <span className="text-white text-[9px] md:text-xs font-medium">{badge.label}</span>
                </div>
              ))}

                {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60b093" stopOpacity="0" />
                    <stop offset="50%" stopColor="#60b093" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#60b093" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((angle, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 45 * Math.cos((angle * Math.PI) / 180)}
                    y2={50 + 45 * Math.sin((angle * Math.PI) / 180)}
                    stroke="url(#connGrad)"
                    strokeWidth="0.2"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Left: Text Content (Now second on mobile) */}
          <div className="space-y-6 text-right order-2 lg:order-1" dir="rtl">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
                <span className="block">نُحوّل</span>
                <span className="block mt-2">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#60b093] via-[#d9f2a6] to-[#60b093]">
                      الأفكار
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full overflow-visible" viewBox="0 0 200 12" fill="none">
                      <path 
                        d="M2 8 Q50 2, 100 8 T198 8" 
                        stroke="url(#underlineGrad)" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#60b093" />
                          <stop offset="50%" stopColor="#d9f2a6" />
                          <stop offset="100%" stopColor="#60b093" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
                <span className="block mt-2 text-gray-300">إلى واقع رقمي</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              نبني حلولاً رقمية متكاملة تجمع بين <span className="text-white font-medium">الإبداع</span> و<span className="text-white font-medium">التكنولوجيا</span> لنصنع تجارب استثنائية تُحدث فرقاً حقيقياً.
            </p>

            {/* Buttons CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mt-8 md:mt-12 justify-start">
                <button className="group relative px-8 md:px-10 py-4 md:py-5 overflow-hidden font-bold rounded-full transition-all duration-300 flex items-center gap-3 shadow-[0_10px_20px_rgba(96,176,147,0.2)] hover:shadow-[0_15px_30px_rgba(96,176,147,0.3)] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#60b093] to-[#d9f2a6] transition-all duration-500 group-hover:opacity-90" />
                  <span className="relative z-10 text-[#0d1712]">ابدأ معنا الآن</span>
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#0d1712]/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                    <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>

                <button 
                  onClick={() => {
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-8 md:px-10 py-4 md:py-5 rounded-full border-2 border-[#60b093]/30 hover:border-[#60b093] hover:bg-[#60b093]/5 transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[#60b093]/10 flex items-center justify-center group-hover:scale-110 transition-all">
                    <svg className="w-5 h-5 text-[#60b093]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold">شاهد سابقة أعمالنا</span>
                </button>
              </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1712] to-transparent z-[5]" />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scanLine {
          0%, 100% {
            opacity: 0;
            transform: scaleX(0);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }

        .animate-spin-very-slow {
          animation: spin 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DigitalSolutionHero;
