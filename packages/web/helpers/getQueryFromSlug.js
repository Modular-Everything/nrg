import { groq } from "next-sanity";

export function getQueryFromSlug(slugArray = []) {
  const blocks = `
    ...,
    blocks[] {
      ...,
      allCards[] {
        ...,
        linkToRef {
          ...,
          "link": link->slug.current
        },
      },
      items[] {
        ...,
        linkToRef {
          ...,
          "link": link->slug.current
        },
      },
      tiles[] {
        ...,
        linkToRef {..., "link": link->slug.current},
      },
      linkToRef {
        ...,
        "link": link->slug.current
      }
    }
  `;

  const docQuery = {
    home: groq`*[_type == "homepage" && slug.current == '/'][0] { ${blocks} }`,
    news: groq`*[_type == "newsPost" && slug.current == $slug][0] { ${blocks} }`,
    page: groq`*[_type == "page" && slug.current == $slug][0] { ${blocks} }`,
    services: groq`*[_type == "service" && slug.current == $slug][0] { ${blocks} }`,
    projects: groq`*[_type == "project" && slug.current == $slug][0] { ${blocks} }`,
  };

  if (slugArray.length === 0) {
    return {
      docType: "homepage",
      queryParams: {},
      query: docQuery.home,
    };
  }

  const [slugStart] = slugArray;

  // We now have to re-combine the slug array to match our slug in Sanity.
  const queryParams = { slug: `/${slugArray.join("/")}` };

  // Keep extending this section to match the slug against the docQuery object keys
  let docType;

  // eslint-disable-next-line no-prototype-builtins
  if (docQuery.hasOwnProperty(slugStart)) {
    docType = slugStart;
  } else {
    docType = `page`;
  }

  return {
    docType,
    queryParams,
    query: docQuery[docType],
  };
}
