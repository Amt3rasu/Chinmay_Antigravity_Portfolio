import React from 'react';
import { Helmet } from 'react-helmet-async';
import { aboutMeData } from '../data/aboutMe';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = aboutMeData.title,
    image = aboutMeData.profileImage,
    url = window.location.href,
    type = 'website'
}) => {
    const siteTitle = title ? `${title} | ${aboutMeData.name}` : `${aboutMeData.name} - ${aboutMeData.title}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": aboutMeData.name,
                    "url": window.location.origin,
                    "image": aboutMeData.profileImage,
                    "jobTitle": aboutMeData.title,
                    "sameAs": [
                        aboutMeData.linkedin,
                        aboutMeData.github,
                        aboutMeData.twitter
                    ].filter(Boolean)
                })}
            </script>
        </Helmet>
    );
};
