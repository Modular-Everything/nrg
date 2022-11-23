import sanityClient from "@sanity/client";
import algoliasearch from "algoliasearch";
import indexer from "sanity-algolia";

import { config } from "../../lib/config";

// eslint-disable-next-line require-await
exports.handler = async function algolia(event, context) {
  const algolia = algoliasearch(
    "AWPGWNOC94",
    process.env.ALGOLIA_ADMIN_API_KEY
  );

  const sanity = sanityClient({ ...config, useCdn: false });
  const algoliaIndex = algolia.initIndex("nrg");

  const sanityAlgolia = indexer(
    {
      page: {
        index: algoliaIndex,
        projection: `{
          title,
          "path": slug.current
        }`,
      },
    },
    (document) => {
      switch (document._type) {
        case "page":
          return { ...document, something: "example" };
        default:
          return document;
      }
    }
  );

  return sanityAlgolia
    .webhookSync(sanity, event.body)
    .then((res) => res.status(200).send("ok"));
};
