// Spotlight.tsx
import React from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimatedComponent from "./AnimatedComponent";

interface SpotlightProps {
    title: string;
    text: string;
    src: string;
    reverse?: boolean;
}

const Spotlight: React.FC<SpotlightProps> = ({ title, text, src, reverse }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexDirection: reverse ? "row-reverse" : "row",
                width: "100%",
            }}
        >
            <div style={{ width: "5rem" }}></div>
            <div style={{ maxWidth: "35vw", marginBottom: "8vw" }}>
                <AnimatedText
                    yOffset={20}
                    textStyle={{
                        fontSize: "1rem",
                        color: "white",
                        textTransform: "uppercase",
                        fontWeight: 300,
                    }}
                    text={title}
                />
                <AnimatedText
                    yOffset={20}
                    textStyle={{
                        color: "white",
                        fontFamily: "Monument-Extended",
                        fontSize: "1.6vw",
                        marginTop: "1.2rem",
                    }}
                    text={text}
                />
            </div>

            <div style={{ flexGrow: 1 }}></div>
            <AnimatedComponent
                style={{
                    height: "40vw",
                    width: "40vw",
                    position: "relative",
                }}
            >
                <Image
                    fill
                    src={src}
                    alt={"image"}
                    sizes="40vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </AnimatedComponent>
        </div>
    );
};

export default Spotlight;
