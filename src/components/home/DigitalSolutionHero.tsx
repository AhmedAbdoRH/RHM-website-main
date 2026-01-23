"use client";

import React, { useEffect, useRef } from 'react';

const DigitalSolutionHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Neural Network Animation
  useEffect(() => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1712]">
      
      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1712]/50 to-[#0d1712] z-[1]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(96,176,147,0.15),transparent_50%)] z-[1]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,242,166,0.1),transparent_50%)] z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8 text-right" dir="rtl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex -space-x-1 flex-row-reverse">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-[#60b093] to-[#d9f2a6] border-2 border-[#0d1712]" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">+25 مشروع ناجح</span>
              <div className="w-2 h-2 rounded-full bg-[#60b093] animate-pulse" />
            </div>

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

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-start">
              <button className="group px-8 py-5 rounded-2xl border-2 border-[#60b093]/30 hover:border-[#60b093] hover:bg-[#60b093]/5 transition-all duration-300 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#60b093]/10 flex items-center justify-center group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6 text-[#60b093]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <span className="text-white font-bold">شاهد سابقة أعمالنا</span>
              </button>

              <button className="group relative px-10 py-5 rounded-full overflow-hidden font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(96,176,147,0.3)] hover:shadow-[0_0_30px_rgba(96,176,147,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#60b093] to-[#d9f2a6] transition-all duration-500 group-hover:opacity-90" />
                <span className="relative z-10 text-[#0d1712] flex items-center gap-3">
                  ابدأ مشروعك معنا
                  <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right: 3D Visual Element */}
          <div className="relative flex items-center justify-center">
            {/* Hexagonal Grid */}
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              
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
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Glowing Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#60b093]/20 via-[#234338]/20 to-[#d9f2a6]/20 rounded-3xl blur-2xl animate-pulse" />
                  
                  {/* Glass Card */}
                  <div className="relative w-full h-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 flex flex-col items-center justify-center overflow-hidden">
                    
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
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#60b093] to-[#234338] flex items-center justify-center shadow-[0_0_60px_rgba(96,176,147,0.4)]">
                        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      {/* Slow Orbiting Dots (Decorative) */}
                      <div className="absolute inset-0 animate-spin-slow">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#d9f2a6] shadow-[0_0_15px_rgba(217,242,166,0.8)]" />
                      </div>
                      <div className="absolute inset-0 animate-spin-very-slow">
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#60b093] shadow-[0_0_12px_rgba(96,176,147,0.8)]" />
                      </div>
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="flex gap-3 mb-4">
                      {['🟪', '🔷', '🟢', '🔺'].map((emoji, i) => (
                        <div 
                          key={i} 
                          className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/10 transition-all cursor-pointer ${i === 3 ? 'text-2xl' : 'text-lg'}`}
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>

                    {/* Status Text */}
                    <div className="text-center" dir="rtl">
                      <div className="text-white font-bold text-lg mb-1">Full Stack Solutions</div>
                      <div className="text-gray-400 text-sm">أنظمة متطورة وحلول متكاملة</div>
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
                { icon: '🚀', label: 'سرعة في التنفيذ', pos: 'top-0 left-1/4' },
                { icon: '🔒', label: 'أمان عالي', pos: 'top-1/4 right-0' },
                { icon: '📱', label: 'تصميم متجاوب', pos: 'bottom-1/4 right-0' },
                { icon: '⚡', label: 'أداء محسن', pos: 'bottom-0 left-1/4' },
                { icon: '🎨', label: 'تصميم إبداعي', pos: 'top-1/4 left-0' },
                { icon: '🎧', label: 'دعم فني متواصل', pos: 'bottom-1/4 left-0' },
              ].map((badge, i) => (
                <div
                  key={i}
                  className={`absolute ${badge.pos} flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float-slow`}
                  style={{ animationDelay: `${i * 0.8}s` }}
                  dir="rtl"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-white text-xs font-medium">{badge.label}</span>
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
