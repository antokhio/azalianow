import Head from 'next/head';
import React from 'react';

interface SEOProps {
    title?: string;
}

export const SEO: React.FC<SEOProps> = ({ title }) => {
    return (
        <Head>
            <title>{title ? 'Все для комфортной работы' : title}</title>
        </Head>
    );
};
