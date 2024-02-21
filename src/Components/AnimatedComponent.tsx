// components/AnimatedComponent.tsx
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedComponentProps {
    delay?: number;
    yOffset?: number; // Y offset for the animation
    duration?: number; // Overall animation duration
    style?: React.CSSProperties;
    triggerMargin?: string;
    children: React.ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
    children,
    delay = 0,
    yOffset = 50,
    duration = 0.8,
    style,
    triggerMargin = "200px",
}) => {
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && componentRef.current) {
                    gsap.fromTo(
                        componentRef.current,
                        { y: yOffset, opacity: 0 },
                        {
                            duration: duration,
                            y: 0,
                            opacity: 1,
                            delay: delay,
                        }
                    );
                    observer.disconnect();
                }
            },
            {
                threshold: 0,
                rootMargin: `0px 0px -${triggerMargin} 0px`, // Adjust the bottom margin
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => observer.disconnect();
    }, [delay, yOffset, duration, triggerMargin]);

    return (
        <div ref={componentRef} style={{ ...style, opacity: 0, }}>
            {children}
        </div>
    );
};

export default AnimatedComponent;
