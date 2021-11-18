import React from "react";
import PropTypes from "prop-types";

// ---

const InlineCode = ({ children }) => (
  <pre style={{ display: "inline", color: "green" }}>{children}</pre>
);

InlineCode.propTypes = {
  children: PropTypes.node.isRequired,
};

// ---

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      description: (
        <>
          The name of the website. In SEO, this appears after the Meta Title
          like so: <InlineCode>Meta Title | Site Name</InlineCode> where{" "}
          <InlineCode>Site Name</InlineCode> is the value of this field.
        </>
      ),
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Avoid trailing slash (don't add a / at the end)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seo",
      title: "Global SEO",
      type: "seo",
      options: {
        collapsible: false,
      },
    },
  ],
};
