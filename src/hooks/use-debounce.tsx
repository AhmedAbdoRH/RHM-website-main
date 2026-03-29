'use client';

import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useThrottle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T {
  const [lastCall, setLastCall] = useState(0);

  const throttledFunction = (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      setLastCall(now);
      return func(...args);
    }
  };

  return throttledFunction as T;
}
