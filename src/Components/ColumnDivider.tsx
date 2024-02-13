// components/AnimatedComponent.tsx
import React, { Fragment, useEffect, useRef } from "react";
import { dividerStroke, dividerWidth } from "./RowDivider";

type ColumnDividerProps = {
    mobile?: boolean;
};

const ColumnDivider: React.FC<ColumnDividerProps> = ({ mobile }) => {
    return (
        <Fragment>
            {mobile &&<div
                className="mobile"
                style={{
                    minHeight: dividerWidth,
                    borderBlock: dividerStroke,
                }}
            />}
            <div
                className="desktop"
                style={{
                    minWidth: dividerWidth,
                    borderInline: dividerStroke,
                }}
            />
        </Fragment>
    );
};

export default ColumnDivider;
