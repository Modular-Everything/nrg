/* eslint-disable react/forbid-prop-types */
import React from "react";
// import PropTypes from "prop-types";
// import ErrorPage from "next/error";
import { useRouter } from "next/router";

import { getPageData, fetchAPI, getGlobalData } from "../utils/api";
import { getLocalizedPaths } from "../utils/localize";
import PreviewBanner from "../components/Elements/PreviewBanner";
import SEO from "../components/Core/SEO";
import Layout from "../components/Core/Layout";
import BlockBuilder from "../components/Blocks";
import AutoLayout from "../components/Core/AutoLayout";
// import AutoLayout from "../components/Core/AutoLayout";
// import BlockBuilder from "../components/Blocks";

// import Sections from "@/components/sections";
// import Seo from "@/components/elements/seo";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

// ---

const DynamicPage = ({
  top_block,
  blocks,
  bottom_block,
  metadata,
  preview,
  global,
  pageContext,
}) => {
  const router = useRouter();

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>;
  }

  return (
    <Layout global={global} pageContext={pageContext}>
      {/* Add meta tags for SEO */}
      <SEO metadata={metadata} />
      {/* Display content sections */}
      {/* <Sections sections={sections} preview={preview} /> */}

      {preview && <PreviewBanner />}

      <AutoLayout>
        <div className="top">
          {top_block && <BlockBuilder blocks={top_block} />}
        </div>

        <div className="blocks">
          <BlockBuilder blocks={blocks} preview={preview} />
        </div>

        {bottom_block && (
          <div className="bottom">
            <BlockBuilder blocks={bottom_block} />
          </div>
        )}
      </AutoLayout>
    </Layout>
  );
};

export default DynamicPage;

// ---

export async function getStaticPaths(context) {
  // Get all pages from Strapi
  const allPages = context.locales.map(async (locale) => {
    const localePages = await fetchAPI(`/pages?_locale=${locale}`);
    return localePages;
  });

  const pages = await (await Promise.all(allPages)).flat();

  const paths = pages.map((page) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !page.slug ? false : page.slug.split("/");

    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale: page.locale,
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const globalLocale = await getGlobalData(locale);
  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData(
    { slug: !params.slug ? [""] : params.slug },
    locale,
    preview
  );

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} };
  }

  // We have the required page data, pass it to the page component
  const { top_block, blocks, bottom_block, metadata, localizations, slug } =
    pageData;

  const pageContext = {
    locale: pageData.locale,
    locales,
    defaultLocale,
    slug,
    localizations,
  };

  const localizedPaths = getLocalizedPaths(pageContext);

  return {
    props: {
      preview,
      top_block,
      blocks,
      bottom_block,
      metadata,
      global: globalLocale,
      pageContext: {
        ...pageContext,
        localizedPaths,
      },
    },
  };
}
