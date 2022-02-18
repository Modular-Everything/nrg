import { groq } from "next-sanity";

import { Page } from "../../components/core/Page";
import { filterDataToSingleItem } from "../../helpers/filterDataToSingleItem";
import { usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";

export default function Services({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);

  return <Page data={page} />;
}

/**
 * Fetch the data from Sanity using a specific slug
 * This page differs from dynamic [slug].js page types
 * because we just pass in the exact slug we want.
 */
export async function getStaticProps({ preview = false }) {
  const specificSlug = "services";

  const query = groq`*[_type == "page" && slug.current == specificSlug]`;
  const queryParams = { slug: specificSlug };
  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return { notFound: true };
  }

  const page = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { page, query, queryParams },
    },
  };
}
