/* eslint-disable react/forbid-prop-types */
import React from "react";
// import PropTypes from "prop-types";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

import { getPageData, fetchAPI, getGlobalData } from "../utils/api";
import { getLocalizedPaths } from "../utils/localize";
// import SiteTitle from "../components/Core/SEO/SiteTitle";
import Layout from "../components/Core/Layout";
// import AutoLayout from "../components/Core/AutoLayout";
// import BlockBuilder from "../components/Blocks";

// import Sections from "@/components/sections";
// import Seo from "@/components/elements/seo";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

// ---

const DynamicPage = ({ metadata, preview, global, pageContext }) => {
  const router = useRouter();

  // Check if the required data was provided
  // todo add top and main sections back in
  // if (!router.isFallback && !sections?.length) {
  // if (!router.isFallback) {
  //   return <ErrorPage statusCode={404} />;
  // }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>;
  }

  return (
    <Layout global={global} pageContext={pageContext}>
      {/* Add meta tags for SEO
      <Seo metadata={metadata} /> */}
      {/* Display content sections */}
      {/* <Sections sections={sections} preview={preview} /> */}
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

  console.log(pageData);

  // We have the required page data, pass it to the page component
  const { metadata, localizations, slug } = pageData;

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
      // sections: contentSections,
      metadata,
      global: globalLocale,
      pageContext: {
        ...pageContext,
        localizedPaths,
      },
    },
  };
}
