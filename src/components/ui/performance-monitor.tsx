'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure Core Web Vitals
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        setMetrics({
          fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
          ttfb: navigation.responseStart - navigation.requestStart,
        });

        // Observe LCP
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }

        // Observe CLS
        if ('PerformanceObserver' in window) {
          let clsValue = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        }
      };

      // Delay measurement to allow page to load
      setTimeout(measurePerformance, 1000);
    }
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.log('🚀 Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null; // This component doesn't render anything
}
