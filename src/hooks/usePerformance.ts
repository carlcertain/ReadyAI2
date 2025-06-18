import { useState, useEffect } from 'react';
import { performanceMonitor } from '../utils/performance';

export function usePerformance() {
  const [metrics, setMetrics] = useState(performanceMonitor.getMetrics());

  useEffect(() => {
    const unsubscribe = performanceMonitor.subscribe((metric) => {
      setMetrics(current => [...current, metric]);
    });

    return () => unsubscribe();
  }, []);

  return {
    metrics,
    trackCustomMetric: performanceMonitor.trackCustomMetric.bind(performanceMonitor),
    clearMetrics: performanceMonitor.clearMetrics.bind(performanceMonitor),
  };
}