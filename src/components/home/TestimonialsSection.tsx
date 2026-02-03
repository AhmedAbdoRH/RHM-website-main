'use client';

import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: '/testimonials/1.png',
  },
  {
    id: 2,
    image: '/testimonials/2.png',
  },
  {
    id: 3,
    image: '/testimonials/3.png',
  },
  {
    id: 4,
    image: '/testimonials/4.jpeg',
  },
  {
    id: 5,
    image: '/testimonials/5.png',
  },
  {
    id: 6,
    image: '/testimonials/6.png',
  },
  {
    id: 7,
    image: '/testimonials/7.jpeg',
  },
  {
    id: 8,
    image: '/testimonials/8.jpeg',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#60b093]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#d9f2a6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#234338] mb-4">
              نعتز بأراء <span className="text-[#60b093]">عملائنا</span>
            </h2>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative overflow-hidden rounded-[2rem] bg-transparent p-6 min-h-[200px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full transition-all duration-500 ease-in-out ${index === currentIndex
                    ? 'opacity-100 scale-100 block'
                    : 'opacity-0 scale-95 hidden'
                    }`}
                >
                  <img
                    src={testimonial.image}
                    alt={`رأي عميل RHM - ${testimonial.id}`}
                    className="w-full h-auto object-contain rounded-[2rem] mx-auto block"
                    onLoad={() => console.log(`Image ${testimonial.id} loaded successfully`)}
                    onError={(e) => {
                      console.error(`Failed to load image: ${testimonial.image}`);
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Hidden as requested */}
            {/* 
            <button
              onClick={goToPrevious}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-transparent border border-[#234338]/20 hover:bg-[#234338]/10 text-[#234338] transition-all duration-300 flex items-center justify-center z-10"
              aria-label="السابق"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-transparent border border-[#234338]/20 hover:bg-[#234338]/10 text-[#234338] transition-all duration-300 flex items-center justify-center z-10"
              aria-label="التالي"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            */}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-[#60b093] w-8'
                  : 'bg-[#234338]/20 hover:bg-[#234338]/40'
                  }`}
                aria-label={`الانتقال للصورة ${index + 1}`}
              />
            ))}
          </div>

          {/* Current slide indicator */}
          <p className="text-center text-sm text-gray-500 mt-4">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
