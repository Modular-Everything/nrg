import { fetchAPI } from "../../lib/api";

// ---

export default async function handler(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.STRAPI_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const { slug } = req.query;

  // Make sure the page exists
  const pageData = await fetchAPI(slug);
  if (!pageData) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Set the cookies
  res.setPreviewData({});
  res.writeHead(307, { Location: slug });
  res.end();

  return true;
}

// //

// import { getPost } from 'lib/api';

// export default async function handler(req, res) {
// // Check if the user is requesting with valid token
//  if (req.query.secret !== (process.env.STRAPI_PREVIEW_SECRET)) {
//    return res.status(401).json({ message: "Invalid token" });
//  }

// // Make sure the blog post actiually exits
//  const {slug} = req.query;
//  const blogData = await getPost(slug)
//  if (!blogData) {
//    return res.status(401).json({ message: "Invalid slug" });
//  }
// // If all good we set preview cookies
// // And we redirect the user to the preview version of the blog post
//  res.setPreviewData({});

//  res.writeHead(307, { Location: `/blogs/${slug}` });
//  res.end();
// };
