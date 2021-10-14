export function getStrapiURL(path = "") {
  return `${process.env.STRAPI_API_URL || "http://localhost:1337"}/${path}`;
}

// ---

export async function fetchAPI(path, preview) {
  const requestUrl = getStrapiURL(
    preview ? `${path}&_publicationState=preview&published_at_null=true` : path
  );
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
