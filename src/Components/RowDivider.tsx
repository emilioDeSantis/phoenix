// components/AnimatedComponent.tsx
import React, { useEffect, useRef } from "react";

export const dividerWidth = "2rem";
export const dividerStroke = "0.5px solid #333";

const RowDivider: React.FC = ({}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                height: dividerWidth,
                borderBlock: dividerStroke,
                width: "100%",
                justifyContent: 'space-evenly'
            }}
        >
        <div
            style={{
                width: dividerWidth,
                borderInline: dividerStroke,
            }}
        />
        <div
            style={{
                width: dividerWidth,
                borderInline: dividerStroke,
            }}
        />
        </div>
    );
};

export default RowDivider;
