
import React from 'react';
import AnimatedText from './AnimatedText'; // Adjust the import path as needed

interface TextSectionProps {
    title: string;
    text: string;
}

const TextSection: React.FC<TextSectionProps> = ({title, text}) => {
    return (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
            <AnimatedText
                yOffset={20}
                textStyle={{
                    fontSize: "1rem",
                    color: "white",
                    fontWeight: 300,
                    opacity: 0.8,
                    minWidth: "6rem",
                    // lineHeight: 0.8,
                }}
                text={title}
            />
            <AnimatedText
                yOffset={20}
                textStyle={{
                    fontSize: "1rem",
                    color: "white",
                    // lineHeight: 0.8,
                    fontWeight: 700,
                }}
                text={text}
            />
        </div>
    );
};

export default TextSection;
