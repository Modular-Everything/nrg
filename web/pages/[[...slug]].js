/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { groq } from "next-sanity";
import ErrorPage from "next/error";

import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
// import SEO from "../components/Core/SEO";
import Layout from "../components/Core/Layout";
import BlockBuilder from "../components/Blocks";
import AutoLayout from "../components/Core/AutoLayout";
import PreviewBanner from "../components/Core/PreviewBanner";

// ---

function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

// ---

const Page = ({ data, menuItems, preview }) => {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  if (!preview && !data) return <ErrorPage />;

  const page = filterDataToSingleItem(previewData, preview);

  const { blocks, topBlocks, bottomBlocks } = page;

  return (
    <Layout menuItems={menuItems[0]}>
      {/* <SEO metadata={metadata} /> */}

      {preview && <PreviewBanner slug={page?.slug?.current} />}

      <AutoLayout>
        <div className="top">
          {topBlocks && <BlockBuilder blocks={topBlocks} />}
        </div>

        <div className="blocks">
          <BlockBuilder blocks={blocks} preview={preview} />
        </div>

        {bottomBlocks && (
          <div className="bottom">
            <BlockBuilder blocks={bottomBlocks} />
          </div>
        )}
      </AutoLayout>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
  menuItems: PropTypes.array.isRequired,
  preview: PropTypes.bool.isRequired,
};

Page.defaultProps = {
  data: null,
};

// ---

export async function getStaticPaths() {
  const allSlugsQuery = groq`*[defined(slug.current)][].slug.current`;
  const pages = await getClient().fetch(allSlugsQuery);

  return {
    paths: pages.map((slug) => `/${slug}`),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const query = `*[_type == 'page' && slug.current == $slug]`;
  const queryParams = { slug: params.slug[0] };
  const data = await getClient(preview).fetch(query, queryParams);

  if (data.length === 0) return { notFound: true };

  const page = filterDataToSingleItem(data, preview);

  console.log(page);

  return {
    props: {
      preview,
      data: { page, query, queryParams },
      menuItems: await getClient(preview).fetch(
        groq`*[_type == "menu" && _id == "menuSettings"] {
          weAre[] {'slug': link->slug.current, ...},
          what[] {'slug': link->slug.current, ...},
          weDo[] {'slug': link->slug.current, ...},
        }`
      ),
    },
  };
}

export default Page;
