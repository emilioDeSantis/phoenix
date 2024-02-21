// components/AnimatedComponent.tsx
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { dividerWidth } from "./RowDivider";
import AnimatedComponent from "./AnimatedComponent";

interface BlockProps {
    children: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({ children }) => {
    const componentRef = useRef<HTMLDivElement>(null);

    return (
        // width: `calc((100vw - 2 * ${dividerWidth})/3)`,
        // height: `calc((100vw - 2 * ${dividerWidth})/3)`,

        <div
            ref={componentRef}
            style={{
                position: "relative",
                width: "100%", // Takes the full width of its parent
                aspectRatio: "1/1", // 1:1 aspect ratio
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    overflow: "hidden", // Optional, depending on whether you want to hide overflow content
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Block;
