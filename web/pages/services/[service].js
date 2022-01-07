import React from "react";
import PropTypes from "prop-types";

import {
  serviceQuery,
  serviceSlugsQuery,
  menuQuery,
  globalMetaDataQuery,
} from "../../lib/queries";
import { usePreviewSubscription } from "../../lib/sanity";
import { sanityClient, getClient } from "../../lib/sanity.server";
import Layout from "../../components/Core/Layout";
import BlockBuilder from "../../components/Blocks";
import AutoLayout from "../../components/Core/AutoLayout";
import PreviewBanner from "../../components/Core/PreviewBanner";
import FixedBgText from "../../components/Blocks/FixedBgText";
import SEO from "../../components/Core/SEO";

// ---

function Service({ data = {}, preview }) {
  const slug = data?.service?.slug;
  const {
    data: { service },
  } = usePreviewSubscription(serviceQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  return (
    <Layout menuItems={data?.menuItems}>
      <SEO
        pageTitle={service?.title}
        globalMetadata={data?.globalMetaData}
        customMetadata={service?.seo}
      />

      {preview && <PreviewBanner slug={service?.slug?.current} />}

      <AutoLayout>
        <div className="top">
          {service?.topBlocks && <BlockBuilder blocks={service?.topBlocks} />}
        </div>

        <div className="blocks">
          {service?.backgroundText && (
            <FixedBgText text={service?.backgroundText} />
          )}
          <BlockBuilder blocks={service?.blocks} preview={preview} />
        </div>

        {service?.bottomBlocks && (
          <div className="bottom">
            <BlockBuilder blocks={service?.bottomBlocks} />
          </div>
        )}
      </AutoLayout>
    </Layout>
  );
}

export default Service;

export async function getStaticProps({ params, preview = false }) {
  const { service } = await getClient(preview).fetch(serviceQuery, {
    service: params?.service,
  });

  if (!service) {
    return { notFound: true };
  }

  const menuItems = await getClient(preview).fetch(menuQuery);
  const globalMetaData = await getClient(preview).fetch(globalMetaDataQuery);

  return {
    props: {
      preview,
      data: {
        service,
        menuItems: menuItems[0],
        globalMetaData: globalMetaData[0],
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(serviceSlugsQuery);
  return {
    paths: paths.map((service) => ({ params: { service } })),
    fallback: true,
  };
}

Service.propTypes = {
  data: PropTypes.object.isRequired,
  preview: PropTypes.bool.isRequired,
};
