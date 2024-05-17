import get from "lodash/get";

// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "bW9kdWxhciBldmVyeXRoaW5nIHIwMGx6";

// Replace with your deployed studio when you go live
const remoteUrl = `https://madewithnrg.com`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc, slugField = `slug.current`) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const slug = get(doc, slugField);

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slugField`, slugField);
  previewUrl.searchParams.append(`slug`, slug);

  return previewUrl.toString();
}
