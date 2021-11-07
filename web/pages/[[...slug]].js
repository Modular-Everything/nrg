/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { groq } from "next-sanity";

import { getClient, usePreviewSubscription } from "../lib/sanity";
// import SEO from "../components/Core/SEO";
import Layout from "../components/Core/Layout";
import BlockBuilder from "../components/Blocks";
import AutoLayout from "../components/Core/AutoLayout";

// ---

const query = groq`
  *[_type == "page" && slug.current == $slug] {
    blocks[] {"slug": link->slug.current, ...},
    ...
  }
`;

// ---

const Page = ({ pagedata, menuItems, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !pagedata) {
    return <ErrorPage statusCode={404} />;
  }

  const { data: page } = usePreviewSubscription(query, {
    initialData: pagedata,
    enabled: preview || router.query.preview !== undefined,
  });

  const { blocks, topBlocks, bottomBlocks } = page;

  return (
    <Layout menuItems={menuItems[0]}>
      {/* <SEO metadata={metadata} /> */}

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
  pagedata: PropTypes.object,
  menuItems: PropTypes.array.isRequired,
  preview: PropTypes.bool.isRequired,
};

Page.defaultProps = {
  pagedata: null,
};

export async function getStaticProps({ params, preview = false }) {
  const page = await getClient(preview).fetch(query, {
    slug: params.slug ? params.slug[0] : null,
  });

  return {
    props: {
      pagedata: page.length > 0 ? page[0] : null,
      menuItems: await getClient(preview).fetch(
        groq`*[_type == "menu" && _id == "menuSettings"] {
          weAre[] {'slug': link->slug.current, ...},
          what[] {'slug': link->slug.current, ...},
          weDo[] {'slug': link->slug.current, ...},
        }`
      ),
      preview,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(groq`
    *[_type == "page"]
  `);
  return {
    paths:
      paths.map((path) => ({
        params: {
          slug: path.slug.current.split("/"),
        },
      })) || [],
    fallback: true,
  };
}

export default Page;
