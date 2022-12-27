import React from 'react';
import { SEO } from './SEO';

interface LayoutProps {
    title?: string;
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    return (
        <>
            <SEO title={title} />
            {children}
        </>
    );
};
