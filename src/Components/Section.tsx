// components/AnimatedComponent.tsx
import React, { useEffect, useRef } from "react";
import { dividerStroke, dividerWidth } from "./RowDivider";
import Block from "./Block";
import AnimatedComponent from "./AnimatedComponent";

type SectionProps = {
    title: string;
    bullets: string[];
};

const Section: React.FC<SectionProps> = ({ title, bullets }) => {
    return (
        <Block>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    padding: "1.8rem",
                    paddingInline: "2.4rem",
                    gap: "0.8rem",
                }}
            >
                <AnimatedComponent>
                    <h2
                        style={{
                            fontSize: "Min(6vw, 2rem)",
                            fontFamily: "Monument-Extended",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            width: "24rem",
                            marginBottom: "1.6rem",
                        }}
                    >
                        {title}
                    </h2>
                </AnimatedComponent>
                {bullets.map((bullet, index) => (
                    <AnimatedComponent 
                    key={index}>
                        <div
                            style={{
                                fontSize: "1rem",
                                fontWeight: 200,
                                opacity: 0.8,
                                lineHeight: 1.2,
                            }}
                        >
                            + {bullet}
                        </div>
                    </AnimatedComponent>
                ))}
            </div>
        </Block>
    );
};

export default Section;
