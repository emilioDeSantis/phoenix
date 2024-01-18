// components/AnimatedComponent.tsx
import React, { useEffect, useRef } from "react";
import { dividerStroke, dividerWidth } from "./RowDivider";


const ColumnDivider: React.FC = ({}) => {
    return (
        <div
            style={{
                width: dividerWidth,
                borderInline: dividerStroke,
            }}
        />
    );
};

export default ColumnDivider;
