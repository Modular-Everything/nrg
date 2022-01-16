import React from "react";
import PropTypes from "prop-types";

import { indexQuery, menuQuery, globalMetaDataQuery } from "../lib/queries";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import Layout from "../components/Core/Layout";
import BlockBuilder from "../components/Blocks";
import AutoLayout from "../components/Core/AutoLayout";
import PreviewBanner from "../components/Core/PreviewBanner";
import FixedBgText from "../components/Blocks/FixedBgText";
import SEO from "../components/Core/SEO";

// ---

function Index({ data = {}, preview }) {
  const slug = data?.page?.slug;
  const { data: index } = usePreviewSubscription(indexQuery, {
    params: { index: slug },
    initialData: data.index,
    enabled: preview && slug,
    useGroqBeta: true,
  });

  return (
    <Layout menuItems={data?.menuItems} bgColor={index?.backgroundColor}>
      <SEO
        pageTitle={index?.title}
        globalMetadata={data?.globalMetaData}
        customMetadata={index?.seo}
      />

      {preview && <PreviewBanner slug={index?.slug?.current} />}

      <AutoLayout>
        <div className="top">
          {index?.topBlocks && <BlockBuilder blocks={index?.topBlocks} />}
        </div>

        <div className="blocks">
          {index?.backgroundText && (
            <FixedBgText text={index?.backgroundText} />
          )}
          <BlockBuilder blocks={index?.blocks} preview={preview} />
        </div>

        {index?.bottomBlocks && (
          <div className="bottom">
            <BlockBuilder blocks={index?.bottomBlocks} />
          </div>
        )}
      </AutoLayout>
    </Layout>
  );
}

export default Index;

export async function getStaticProps({ preview = false }) {
  const index = overlayDrafts(await getClient(preview).fetch(indexQuery));
  const menuItems = await getClient(preview).fetch(menuQuery);
  const globalMetaData = await getClient(preview).fetch(globalMetaDataQuery);

  return {
    props: {
      preview,
      data: {
        index: index[0],
        menuItems: menuItems[0],
        globalMetaData: globalMetaData[0],
      },
    },
  };
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  preview: PropTypes.bool.isRequired,
};
