import React from 'react';
import { Helmet } from 'react-helmet-async';
import { aboutMeData } from '../data/aboutMe';
import { getPersonSchema, getWebSiteSchema, getCaseStudySchema, GLOBAL_SEO_KEYWORDS } from '../data/seoData';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    caseStudy?: any; // If provided, injects the massive CreativeWork schema
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = aboutMeData.title,
    image = "/og-image.png",
    url = window.location.href,
    type = 'website',
    caseStudy
}) => {
    const siteTitle = title ? `${title} | ${aboutMeData.name}` : `${aboutMeData.name} - ${aboutMeData.title}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={GLOBAL_SEO_KEYWORDS} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content={aboutMeData.name} />
            <meta property="article:published_time" content="2025-11-27T00:00:00Z" />
            <link rel="canonical" href={url.split('#')[0]} />

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
                {JSON.stringify(getPersonSchema())}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(getWebSiteSchema())}
            </script>

            {/* Massive Keyword Injection via CreativeWork Schema (Only for Case Studies) */}
            {caseStudy && (
                <script type="application/ld+json">
                    {JSON.stringify(getCaseStudySchema(caseStudy))}
                </script>
            )}
        </Helmet>
    );
};
