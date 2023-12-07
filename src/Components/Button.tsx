// Button.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    href: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
    return (
        <div  style={{
                backgroundColor: '#08226533',
                color: 'white',
                border: '0.5px solid #2753C5',
                padding: '0.8rem 2rem',
                fontSize: '0.9rem',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Monument-Extended',
            }}>
                {children} <span style={{ marginLeft: '1rem' }}>↘</span>
        </div>
    );
};

export default Button;
