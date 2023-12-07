import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
    href: string;
    children?: React.ReactNode;
    delay?: number; // Add delay prop
}

const HeroLink: React.FC<Props> = ({ href, children, delay = 0 }) => {
    const linkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (linkRef.current) {
            gsap.fromTo(
                linkRef.current, 
                { x: -500, opacity: 0 },
                {
                  duration: 0.8,
                  x: 0,
                  opacity: 1,
                  delay: delay,
                }
              );
        }
    }, [delay]);

    return (
        <div
            ref={linkRef}
            style={{ display: "flex", alignItems: "center", width: "100%" }}
        >
            <div
                style={{
                    height: "0.3px",
                    flexGrow: 1,
                    backgroundColor: "white",
                }}
            />
            <Link
                href={href}
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBlock: "0.5rem",
                    gap: "0.5rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid white",
                        borderRadius: "100%",
                        height: "2.4rem",
                        width: "2.4rem",
                    }}
                >
                    <div
                        style={{
                            height: "0.42rem",
                            width: "0.42rem",
                            borderRadius: "100%",
                            backgroundColor: "white",
                        }}
                    />
                </div>
                <div style={{ fontWeight: 300 }}>{children}</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    style={{
                        width: "0.7rem",
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default HeroLink;
