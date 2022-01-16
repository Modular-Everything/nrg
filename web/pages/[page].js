import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
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

function Service({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.page?.slug;
  console.log(slug);

  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
    useGroqBeta: true,
  });

  // if (!router.isFallback && !data.page?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  const page = filterDataToSingleItem(previewData, preview);

  console.log("DATA", data.page);
  console.log("PAGE", page);

  // console.log("slug", slug);
  // console.log("data", data);
  // console.log("page", page);

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
  // const { page } = await getClient(preview).fetch(pageQuery, {
  //   page: params?.page,
  // });

  console.log(params);

  const queryParams = { page: params.page };
  const data = await getClient(preview).fetch(pageQuery, queryParams);

  if (data.length === 0) return { notFound: true };

  const page = filterDataToSingleItem(data, preview);

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
        pageQuery,
        queryParams,
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
