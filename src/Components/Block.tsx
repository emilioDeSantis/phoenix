// components/AnimatedComponent.tsx
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
        <div
            ref={componentRef}
            style={{
                width: `calc((100vw - 2 * ${dividerWidth})/3)`,
                height: `calc((100vw - 2 * ${dividerWidth})/3)`,
            }}
        >
            {children}
        </div>
    );
};

export default Block;
