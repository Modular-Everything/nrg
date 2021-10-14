/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

import { fetchAPI } from "../lib/api";
// import SiteTitle from "../components/Core/SEO/SiteTitle";
import Layout from "../components/Core/Layout";
import AutoLayout from "../components/Core/AutoLayout";
import BlockBuilder from "../components/Blocks";

// ---

const Page = ({ page }) => {
  if (!page) {
    throw Error;
  }

  const { blocks, top_block, bottom } = page;

  return (
    <Layout>
      {/* {seo.site_title_override && (
        <SiteTitle
          pageTitle={page.title}
          customTitle={seo.site_title_override}
          includeSiteTitle={seo.include_site_title}
        />
      )} */}

      <AutoLayout>
        <div className="top">
          {top_block && <BlockBuilder blocks={top_block} />}
        </div>

        <div className="blocks">
          <BlockBuilder blocks={blocks} />
        </div>

        {bottom && (
          <div className="bottom">
            <BlockBuilder blocks={bottom} />
          </div>
        )}
      </AutoLayout>
    </Layout>
  );
};

Page.propTypes = {
  page: PropTypes.shape({
    blocks: PropTypes.array,
    top_block: PropTypes.array,
    bottom: PropTypes.array,
  }),
};

Page.defaultProps = {
  page: null,
};

export default Page;

// ---

export async function getStaticPaths() {
  const pages = await fetchAPI("pages");

  return {
    paths: pages.map((page) => ({
      params: {
        page: page.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  const pages = await fetchAPI(`pages?slug=${params.page}`, true);
  console.log(pages);

  return {
    props: { page: pages[0] },
    revalidate: 1,
  };
}
