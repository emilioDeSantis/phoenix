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
            fontSize: '1.2rem',
            color: 'white',
            marginTop: '8rem',
            textTransform: 'uppercase',
            fontWeight: 300,
        }} text={title}/>
    );
};

export default PageTitle;
