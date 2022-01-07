/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { NextSeo } from "next-seo";
import Script from "next/script";
import { useRouter } from "next/router";

import { imageBuilder } from "../../../lib/sanity";

// ---

const SEO = ({ pageTitle, globalMetadata, customMetadata }) => {
  // Prevent errors if no metadata was set
  if (!globalMetadata) return null;

  const router = useRouter();

  const siteUrl = globalMetadata.canonicalUrl;

  const metadata = {
    siteName: globalMetadata.siteName,
    title:
      customMetadata?.metaTitle || pageTitle || globalMetadata?.seo.metaTitle,
    description: customMetadata?.metaDesc || globalMetadata?.seo.metaDesc,
    structuredData:
      customMetadata?.jsonSchema || globalMetadata?.seo.jsonSchema,
    canonicalUrl: siteUrl,
    page: siteUrl + router.asPath,
    openGraph: {
      ogTitle: customMetadata?.shareTitle || globalMetadata?.seo.shareTitle,
      ogDesc: customMetadata?.shareDesc || globalMetadata?.seo.shareDesc,
      ogImage: customMetadata?.shareGraphic || globalMetadata?.seo.shareGraphic,
    },
  };

  return (
    <>
      <NextSeo
        title={metadata.title}
        titleTemplate={`%s | ${metadata.siteName}`}
        defaultTitle={metadata.siteName}
        description={metadata.description}
        canonical={metadata.canonicalUrl}
        openGraph={{
          type: "website",
          url: metadata.page,
          title: `${
            metadata.openGraph.ogTitle && `${metadata.openGraph.ogTitle} | `
          }${metadata.siteName}`,
          description: metadata.openGraph.ogDesc,
          images: [
            {
              url: imageBuilder(metadata.openGraph.ogImage).url(),
              width: 800,
              height: 600,
              alt: metadata.openGraph.ogDesc,
            },
          ],
        }}
      />

      {metadata.structuredData && (
        <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: metadata.structuredData,
          }}
        />
      )}
    </>
  );
};

SEO.propTypes = {
  pageTitle: PropTypes.string,
  globalMetadata: PropTypes.object.isRequired,
  customMetadata: PropTypes.object.isRequired,
};

SEO.defaultProps = {
  pageTitle: null,
};

export default SEO;
