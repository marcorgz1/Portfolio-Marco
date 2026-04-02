import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal
 * Returns a ref to attach to any element and a boolean `isVisible`.
 * The element becomes visible when it enters the viewport.
 *
 * @param {Object} options
 * @param {number} options.threshold - 0–1, how much of the element must be visible (default: 0.15)
 * @param {string} options.rootMargin - IntersectionObserver rootMargin (default: '0px 0px -60px 0px')
 * @param {boolean} options.once - If true, stops observing after first reveal (default: true)
 */
export function useScrollReveal({
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true,
    } = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(element);
            } else if (!once) {
            setIsVisible(false);
            }
        },
        { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}
