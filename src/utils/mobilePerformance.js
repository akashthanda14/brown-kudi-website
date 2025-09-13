// Mobile Performance Monitor for Hero Component
export const MobilePerformanceMonitor = {
  // Track loading times
  startTime: null,
  
  // Initialize monitoring
  init() {
    if (typeof window === 'undefined') return;
    
    this.startTime = performance.now();
    this.checkDevice();
    this.monitorVitals();
  },
  
  // Device capability detection
  checkDevice() {
    const info = {
      isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      deviceMemory: navigator.deviceMemory || 'unknown',
      connection: navigator.connection?.effectiveType || 'unknown',
      hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
      viewport: `${window.innerWidth}x${window.innerHeight}`
    };
    
    console.log('📱 Device Info:', info);
    return info;
  },
  
  // Monitor performance vitals
  monitorVitals() {
    // Track hero load time
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes('hero') || entry.element?.id === 'hero') {
          console.log(`⚡ Hero ${entry.entryType}:`, entry.duration?.toFixed(2) + 'ms');
        }
      }
    });
    
    observer.observe({ entryTypes: ['measure', 'paint'] });
    
    // Track when hero becomes visible
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const loadTime = performance.now() - this.startTime;
            console.log(`🎯 Hero visible in: ${loadTime.toFixed(2)}ms`);
            intersectionObserver.disconnect();
          }
        });
      });
      intersectionObserver.observe(heroElement);
    }
  },
  
  // Report performance metrics
  report() {
    const metrics = {
      totalLoadTime: performance.now() - this.startTime,
      memoryUsage: performance.memory ? {
        used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)
      } : 'unavailable'
    };
    
    console.log('📊 Performance Report:', metrics);
    return metrics;
  }
};

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
  MobilePerformanceMonitor.init();
}
