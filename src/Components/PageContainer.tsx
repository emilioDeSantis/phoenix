// PageContainer.tsx
import React from 'react';

interface PageContainerProps {
    children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingInline: '5vw',
            width: '100%',
        }}>
            {children}
        </div>
    );
};

export default PageContainer;
