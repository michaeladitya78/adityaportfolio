
import * as React from "react";

const MOBILE_BREAKPOINT = 768; // Default mobile breakpoint
const TABLET_BREAKPOINT = 1024; // Tablet breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Check on initial render
    checkIfMobile();
    
    // Add event listener to check when window resizes
    window.addEventListener("resize", checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState(false);

  React.useEffect(() => {
    const checkIfTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
    };

    // Check on initial render
    checkIfTablet();
    
    // Add event listener to check when window resizes
    window.addEventListener("resize", checkIfTablet);
    
    // Clean up
    return () => window.removeEventListener("resize", checkIfTablet);
  }, []);

  return isTablet;
}

export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<'mobile'|'tablet'|'desktop'>('desktop');

  React.useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType('mobile');
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Check on initial render
    checkDeviceType();
    
    // Add event listener to check when window resizes
    window.addEventListener("resize", checkDeviceType);
    
    // Clean up
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return deviceType;
}
