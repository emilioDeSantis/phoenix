"use client"
import React from 'react';
import AnimatedText from './AnimatedText';

interface PageSubtitleProps {
    title: string;
}

const PageSubtitle: React.FC<PageSubtitleProps> = ({ title }) => {
    return (
        <AnimatedText textStyle={{
            fontSize: '4.4vw',
            color: 'white',
            marginTop: '3rem',
            textTransform: 'uppercase',
            // fontWeight: 300,
            fontFamily: 'Monument-Extended',
            lineHeight: 1.24,
        }}
        stagger={0.02}
        text={title}
        />
    );
};

export default PageSubtitle;
