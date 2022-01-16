import React from "react";
import PropTypes from "prop-types";

import {
  pageQuery,
  pageSlugsQuery,
  menuQuery,
  globalMetaDataQuery,
} from "../lib/queries";
import { usePreviewSubscription } from "../lib/sanity";
import { sanityClient, getClient } from "../lib/sanity.server";
import Layout from "../components/Core/Layout";
import BlockBuilder from "../components/Blocks";
import AutoLayout from "../components/Core/AutoLayout";
import PreviewBanner from "../components/Core/PreviewBanner";
import FixedBgText from "../components/Blocks/FixedBgText";
import SEO from "../components/Core/SEO";

// ---

function Service({ data = {}, preview }) {
  const slug = data?.page?.slug;
  const {
    data: { page },
  } = usePreviewSubscription(pageQuery, {
    params: { slug },
    initialData: data,
    enabled: false,
    useGroqBeta: true,
  });

  return (
    <Layout menuItems={data?.menuItems} bgColor={page?.backgroundColor}>
      <SEO
        pageTitle={page?.title}
        globalMetadata={data?.globalMetaData}
        customMetadata={page?.seo}
      />

      {preview && <PreviewBanner slug={page?.slug?.current} />}

      <AutoLayout>
        <div className="top">
          {page?.topBlocks && <BlockBuilder blocks={page?.topBlocks} />}
        </div>

        <div className="blocks">
          {page?.backgroundText && <FixedBgText text={page?.backgroundText} />}
          <BlockBuilder blocks={page?.blocks} preview={preview} />
        </div>

        {page?.bottomBlocks && (
          <div className="bottom">
            <BlockBuilder blocks={page?.bottomBlocks} />
          </div>
        )}
      </AutoLayout>
    </Layout>
  );
}

export default Service;

export async function getStaticProps({ params, preview = false }) {
  const { page } = await getClient(preview).fetch(pageQuery, {
    page: params?.page,
  });

  const menuItems = await getClient(preview).fetch(menuQuery);
  const globalMetaData = await getClient(preview).fetch(globalMetaDataQuery);

  if (!page) {
    return { notFound: true };
  }

  return {
    props: {
      preview,
      data: {
        page,
        menuItems: menuItems[0],
        globalMetaData: globalMetaData[0],
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(pageSlugsQuery);
  return {
    paths: paths.map((page) => ({ params: { page } })),
    fallback: true,
  };
}

Service.propTypes = {
  data: PropTypes.object.isRequired,
  preview: PropTypes.bool.isRequired,
};
