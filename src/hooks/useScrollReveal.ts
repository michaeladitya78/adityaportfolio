import { useEffect, useRef, useCallback } from 'react';

/**
 * useScrollReveal — Apple-style IntersectionObserver hook
 *
 * Adds `.is-visible` to elements with `.apple-reveal` / `.apple-reveal-left`
 * / `.apple-reveal-right` / `.apple-reveal-scale` / `.apple-stagger`
 * when they enter the viewport.
 *
 * Usage:
 *   const containerRef = useScrollReveal();
 *   <section ref={containerRef}>
 *     <h2 className="apple-reveal">...</h2>
 *     <div className="apple-stagger">
 *       <Card /> <Card /> <Card />
 *     </div>
 *   </section>
 */
export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);

  const observe = useCallback((container: HTMLElement) => {
    const targets = container.querySelectorAll<HTMLElement>(
      '.apple-reveal, .apple-reveal-left, .apple-reveal-right, .apple-reveal-scale, .apple-stagger'
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once revealed, stop watching (triggerOnce behavior)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? '0px 0px -48px 0px',
        ...options,
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options]);

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      ref.current = node;
      if (node) observe(node);
    },
    [observe]
  );

  return setRef;
}

export default useScrollReveal;
