import { groq } from "next-sanity";
import Head from "next/head";

import { Footer } from "../components/core/Footer";
import { Header } from "../components/core/Header";
import { Page } from "../components/core/Page";
import { PreviewMode } from "../components/core/PreviewMode";
import { filterDataToSingleItem } from "../helpers/filterDataToSingleItem";
import { getQueryFromSlug } from "../helpers/getQueryFromSlug";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

export default function Home({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);
  const globalSettings = data?.globalSettings;

  return (
    <>
      <Head>
        <title>{page?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {preview && <PreviewMode />}

      <Header data={globalSettings} />

      <div className="wrapper">
        <Page data={page} />
        <Footer />
      </div>
    </>
  );
}

/**
 * Makes Next.js aware of all the slugs it can expect at this route
 *
 * See how we've mapped over our found slugs to add a `/` character?
 * Idea: Add these in Sanity and enforce them with validation rules :)
 * https://www.simeongriggs.dev/nextjs-sanity-slug-patterns
 */
export async function getStaticPaths() {
  const pageQueries = await getClient().fetch(
    groq`*[_type in ["homepage", "page", "newsPost", "project", "service"] && defined(slug.current)][].slug.current`
  );

  // Split the slug strings to arrays (as required by Next.js)
  const paths = pageQueries.map((slug) => ({
    params: { slug: slug.split("/").filter((p) => p) },
  }));

  return { paths, fallback: true };
}

/**
 * Fetch the data from Sanity based on the current slug
 *
 * Important: You _could_ query for just one document, like this:
 * *[slug.current == $slug][0]
 * But that won't return a draft document!
 * And you get a better editing experience
 * fetching draft/preview content server-side
 *
 * Also: Ignore the `preview = false` param!
 * It's set by Next.js "Preview Mode"
 * It does not need to be set or changed here
 */
export async function getStaticProps({ params, preview = false }) {
  const client = getClient(preview);
  const { query, queryParams, docType } = getQueryFromSlug(params.slug);
  const pageData = await client.fetch(query, queryParams);
  const globalSettings = await client.fetch(
    groq`
      *[_type == 'globalSettings' && _id == 'globalSettings'][0] {
        ...,
        navigation[] {
          ...,
          children[] {
            ...,
            target->
          }
        }
      }
    `
  );

  if (!pageData) {
    return { notFound: true };
  }

  const page = filterDataToSingleItem(pageData, preview);

  return {
    props: {
      preview,
      data: {
        query,
        queryParams,
        docType,
        page: page ?? [],
        globalSettings: globalSettings ?? [],
      },
    },
  };
}
