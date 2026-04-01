// hooks/use-mobile.tsx
// Responsive breakpoint detection hooks.
// Provides useIsMobile and useDeviceType for components that need to
// conditionally render or behave differently based on screen width.

import * as React from 'react';

// Breakpoint values match Tailwind's default md and lg breakpoints.
const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

/**
 * Returns true when the viewport is narrower than 768px (mobile).
 * Re-evaluates on every window resize.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
}

/**
 * Returns the current device category: 'mobile', 'tablet', or 'desktop'.
 * Used by sections that render different layouts per device type.
 * Re-evaluates on every window resize.
 */
export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop');

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

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return deviceType;
}
