import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

type MetricType = 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'Custom';

interface PerformanceMetric {
  name: string;
  value: number;
  type: MetricType;
  timestamp: number;
}

const PERFORMANCE_THRESHOLDS = {
  CLS: 0.1,    // Cumulative Layout Shift
  FID: 100,    // First Input Delay (ms)
  FCP: 1800,   // First Contentful Paint (ms)
  LCP: 2500,   // Largest Contentful Paint (ms)
  TTFB: 600,   // Time to First Byte (ms)
};

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: ((metric: PerformanceMetric) => void)[] = [];

  constructor() {
    this.initWebVitals();
    this.initPerformanceObserver();
  }

  private initWebVitals() {
    onCLS(metric => this.handleMetric('CLS', metric.value));
    onFID(metric => this.handleMetric('FID', metric.value));
    onFCP(metric => this.handleMetric('FCP', metric.value));
    onLCP(metric => this.handleMetric('LCP', metric.value));
    onTTFB(metric => this.handleMetric('TTFB', metric.value));
  }

  private initPerformanceObserver() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Resource timing
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            this.trackResourceTiming(entry as PerformanceResourceTiming);
          }
        });
      });

      resourceObserver.observe({ entryTypes: ['resource'] });

      // Long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            this.trackCustomMetric('LongTask', entry.duration);
          }
        });
      });

      longTaskObserver.observe({ entryTypes: ['longtask'] });
    }
  }

  private handleMetric(type: MetricType, value: number) {
    const metric: PerformanceMetric = {
      name: type,
      value,
      type,
      timestamp: Date.now(),
    };

    this.metrics.push(metric);
    this.notifyObservers(metric);
    this.checkThreshold(metric);
  }

  private trackResourceTiming(entry: PerformanceResourceTiming) {
    const metric: PerformanceMetric = {
      name: `Resource-${entry.name.split('/').pop()}`,
      value: entry.duration,
      type: 'Custom',
      timestamp: Date.now(),
    };

    this.metrics.push(metric);
    this.notifyObservers(metric);

    if (entry.duration > 1000) {
      console.warn(`Slow resource load: ${entry.name} (${entry.duration}ms)`);
    }
  }

  public trackCustomMetric(name: string, value: number) {
    const metric: PerformanceMetric = {
      name,
      value,
      type: 'Custom',
      timestamp: Date.now(),
    };

    this.metrics.push(metric);
    this.notifyObservers(metric);
  }

  private checkThreshold(metric: PerformanceMetric) {
    const threshold = PERFORMANCE_THRESHOLDS[metric.type as keyof typeof PERFORMANCE_THRESHOLDS];
    if (threshold && metric.value > threshold) {
      console.warn(`Performance threshold exceeded for ${metric.type}: ${metric.value}`);
      this.reportToAnalytics(metric);
    }
  }

  private reportToAnalytics(metric: PerformanceMetric) {
    // Send to your analytics service
    if (process.env.NODE_ENV === 'production') {
      fetch('/.netlify/functions/track-performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metric),
      }).catch(console.error);
    }
  }

  public subscribe(callback: (metric: PerformanceMetric) => void) {
    this.observers.push(callback);
    return () => {
      this.observers = this.observers.filter(cb => cb !== callback);
    };
  }

  private notifyObservers(metric: PerformanceMetric) {
    this.observers.forEach(callback => callback(metric));
  }

  public getMetrics() {
    return this.metrics;
  }

  public clearMetrics() {
    this.metrics = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();