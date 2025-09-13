import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export const measureVitals = () => {
  getCLS(console.log);
  getFID(console.log);
  getFCP(console.log);
  getLCP(console.log);
  getTTFB(console.log);
};

// Report to analytics endpoint
export const reportVitals = (metric) => {
  // Send to your analytics service
  console.log('Web Vital:', metric);
};
