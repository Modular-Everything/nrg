export default function preview(req, res) {
  if (!req?.query?.secret) {
    return res.status(401).json({ message: "No secret token" });
  }

  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid secret token" });
  }

  if (!req.query.slug) {
    return res.status(401).json({ message: "No slug" });
  }

  res.setPreviewData({});

  const docType = req?.query?.type;

  res.writeHead(307, {
    Location:
      `/${docType === "" ? "" : `${docType}/`}${req?.query?.slug}` ?? "/",
  });

  return res.end();
}
