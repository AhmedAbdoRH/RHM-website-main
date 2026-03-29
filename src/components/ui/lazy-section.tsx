'use client';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export function LazySection({
  children,
  className,
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />,
  threshold = 0.1,
  rootMargin = '50px',
}: LazySectionProps) {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={targetRef} className={cn(className)}>
      {hasIntersected ? children : fallback}
    </div>
  );
}
