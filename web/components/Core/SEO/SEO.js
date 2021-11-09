/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { NextSeo } from "next-seo";

// ---

const SEO = ({ globalMetadata, customMetadata }) => {
  // Prevent errors if no metadata was set
  if (!globalMetadata) return null;

  const metadata = {
    siteName: globalMetadata.siteName,
    title: customMetadata?.metaTitle || globalMetadata?.metaTitle,
  };

  return (
    <NextSeo
      title={`${metadata.title ? `${metadata.title} | ` : ""}${
        metadata.siteName
      }`}
    />
  );
};

SEO.propTypes = {
  globalMetadata: PropTypes.object.isRequired,
  customMetadata: PropTypes.object.isRequired,
};

export default SEO;
