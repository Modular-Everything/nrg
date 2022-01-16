import React from "react";
import PropTypes from "prop-types";

import {
  blogQuery,
  blogSlugsQuery,
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

function Blog({ data = {}, preview }) {
  const slug = data?.blog?.slug;
  const { data: blog } = usePreviewSubscription(blogQuery, {
    params: { blog: slug },
    initialData: data.blog,
    enabled: preview && slug,
    useGroqBeta: true,
  });

  console.log(blog);

  return (
    <Layout menuItems={data?.menuItems} bgColor={blog?.backgroundColor}>
      <SEO
        pageTitle={blog?.title}
        globalMetadata={data?.globalMetaData}
        customMetadata={blog?.seo}
      />

      {preview && <PreviewBanner slug={blog?.slug?.current} />}

      <AutoLayout>
        <div className="top">
          {blog?.topBlocks && <BlockBuilder blocks={blog?.topBlocks} />}
        </div>

        <div className="blocks">
          {blog?.backgroundText && <FixedBgText text={blog?.backgroundText} />}
          <BlockBuilder blocks={blog?.blocks} preview={preview} />
        </div>

        {blog?.bottomBlocks && (
          <div className="bottom">
            <BlockBuilder blocks={blog?.bottomBlocks} />
          </div>
        )}
      </AutoLayout>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps({ params, preview = false }) {
  const blog = await getClient(preview).fetch(blogQuery, {
    blog: params?.blog,
  });

  const menuItems = await getClient(preview).fetch(menuQuery);
  const globalMetaData = await getClient(preview).fetch(globalMetaDataQuery);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      preview,
      data: {
        blog,
        menuItems: menuItems[0],
        globalMetaData: globalMetaData[0],
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(blogSlugsQuery);
  return {
    paths: paths.map((blog) => ({ params: { blog } })),
    fallback: true,
  };
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  preview: PropTypes.bool.isRequired,
};
