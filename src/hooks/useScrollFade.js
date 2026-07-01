import { useEffect, useRef, useState } from 'react';

export function useScrollFade(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observing once visible, so it doesn't re-trigger
            observer.unobserve(entry.target);
        }
        },
        {
        threshold: 0.20, // trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px', // trigger slightly before it's fully in view
        ...options,
        }
    );

    observer.observe(node);
    return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}
