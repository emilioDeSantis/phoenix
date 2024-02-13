// components/AnimatedComponent.tsx
import React, { useEffect, useRef } from "react";
import { dividerStroke, dividerWidth } from "./RowDivider";
import Block from "./Block";
import Image from "next/image";
import AnimatedComponent from "./AnimatedComponent";

type SectionImageProps = {
    src: string;
};

const SectionImage: React.FC<SectionImageProps> = ({ src }) => {
    return (
        // <AnimatedComponent>
            <Block>
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        position: "relative",
                    }}
                >
                    <Image
                        fill
                        src={src}
                        alt={"image"}
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </Block>
        // </AnimatedComponent>
    );
};

export default SectionImage;
