// components/AnimatedComponent.tsx
import React, { useEffect, useRef } from "react";
import { dividerStroke, dividerWidth } from "./RowDivider";
import Block from "./Block";
import AnimatedComponent from "./AnimatedComponent";

//make the numebr 01

type IndexProps = {
    index: number;
};

const Index: React.FC<IndexProps> = ({ index }) => {
    return (
        <Block>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    fontSize: "15rem",
                    fontWeight: 900,
                    padding: "2rem",
                    paddingInline: "2rem",
                    lineHeight: 0.8,
                    opacity: 0.18,
                }}
            >
                <AnimatedComponent>
                    {index < 10 ? `0${index}` : index}
                </AnimatedComponent>
            </div>
        </Block>
    );
};

export default Index;
