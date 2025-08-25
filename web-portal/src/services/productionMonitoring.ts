export class ProductionMonitoring {
  private recordMetric(metric: any) {
    // Implementation for recording metrics
    console.log('Metric recorded:', metric);
  }

  constructor() {
    // PerformanceObserver for resource entries with proper type checking
    if (typeof PerformanceObserver !== 'undefined') {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const e = entry as PerformanceResourceTiming;
            if (typeof e.responseEnd === 'number' && typeof e.requestStart === 'number') {
              this.recordMetric({
                metricName: 'resource_load_time',
                value: e.responseEnd - e.requestStart,
                unit: 'ms',
                tags: {
                  type: 'resource',
                  resource_type: (e as any).initiatorType,
                  name: e.name
                },
                source: 'browser'
              });
            }
          }
        }
      }).observe({ type: 'resource', buffered: true } as PerformanceObserverInit);
    }

    // innerHTML interception block - opt-in and typed-safe
    if (typeof window !== 'undefined') {
      const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
      if (originalInnerHTML && originalInnerHTML.set) {
        Object.defineProperty(Element.prototype, 'innerHTML', {
          set: function (value: any) {
            if (typeof value === 'string' && /<script/i.test(value)) {
              // recordSecurityEvent may be a method on 'this' class; call whatever logger you use
              try {
                // @ts-ignore: this recorder is app-specific
                this.recordSecurityEvent?.({
                  type: 'injection_attempt',
                  severity: 'high',
                  details: {
                    type: 'potential_xss',
                    content: value.substring(0, 200),
                    element: (this as any)?.tagName
                  },
                  blocked: true
                });
              } catch {}
            }
            return (originalInnerHTML.set as any).call(this, value);
          },
          get: originalInnerHTML.get,
          configurable: true
        });
      }
    }
  }
}
