import { useScrollReveal } from '../hooks/useScrollReveal'

export function SectionReveal ({ 
    children,
    className = '',
    delay = 0,
    direction = 'up',
    distance = 32,
    duration = 700, }) {
    const { ref, isVisible } = useScrollReveal();

    const translateMap = {
        up:    `translateY(${distance}px)`,
        down:  `translateY(-${distance}px)`,
        left:  `translateX(${distance}px)`,
        right: `translateX(-${distance}px)`,
    };
    
    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : translateMap[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: 'opacity, transform',
    };
 
    return (
        <div ref={ref} style={style} className={className}>
        {children}
        </div>
    );
};
