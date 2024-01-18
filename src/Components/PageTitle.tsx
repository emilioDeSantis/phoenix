"use client";
import React from 'react';
import AnimatedText from './AnimatedText';

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <AnimatedText 
        yOffset={20}
        textStyle={{
            fontSize: '1.1rem',
            color: 'white',
            marginInline: '5vw',
            // textTransform: 'uppercase',
            fontWeight: 200,
        }} text={title}/>
    );
};

export default PageTitle;
