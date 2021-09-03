import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import SiteTitle from "../components/Core/SEO/SiteTitle";
import AutoLayout from "../components/Core/AutoLayout";
import BlockBuilder from "../components/Blocks";

// ---

export const query = graphql`
  query ($slug: String!) {
    page: strapiPages(slug: { eq: $slug }) {
      title
      content
      page_seo {
        include_site_title
        site_title_override
      }
    }
  }
`;

const Page = ({ data }) => {
  if (!data) {
    throw Error;
  }

  const { page } = data;
  const { page_seo: seo, content } = page;

  return (
    <>
      {seo.site_title_override && (
        <SiteTitle
          pageTitle={page.title}
          customTitle={seo.site_title_override}
          includeSiteTitle={seo.include_site_title}
        />
      )}

      <AutoLayout>
        <BlockBuilder blocks={content} />
      </AutoLayout>
    </>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

Page.defaultProps = {
  data: null,
};

export default Page;
