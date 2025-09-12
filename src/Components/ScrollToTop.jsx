import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also reset scroll for any scrollable containers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Reset scroll for any overflow containers
    const scrollableElements = document.querySelectorAll('[style*="overflow"]');
    scrollableElements.forEach(element => {
      element.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
