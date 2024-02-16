"use client"
import React from 'react';
import AnimatedText from './AnimatedText';

interface PageSubtitleProps {
    title: string;
}

const PageSubtitle: React.FC<PageSubtitleProps> = ({ title }) => {
    return (
        <AnimatedText textStyle={{
            fontSize: 'Min(3rem, 5vw)',
            color: 'white',
            // marginTop: '2rem',
            textTransform: 'uppercase',
            marginInline: '5vw',
            // fontWeight: 300,
            fontFamily: 'Monument-Extended',
            lineHeight: 1.24,
            width: '56vw',
        }}
        stagger={0.02}
        text={title}
        />
    );
};

export default PageSubtitle;
