import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageContainer = ({
  title = '',
  description = '',
  image = '',
  url = '',
  keywords = '',
  children,
}) => {
  return (
    <>
      <Helmet>
        {/* Meta tags para SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Meta tags para Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Meta tags para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:url" content={url} />

        {/* Meta tags adicionales */}
        <link rel="canonical" href={url} />
      </Helmet>

      {/* Renderiza los hijos del componente */}
      <main
        style={{width: '100%', height: '100%'}}
      >{children}</main>
    </>
  );
};

export default PageContainer;