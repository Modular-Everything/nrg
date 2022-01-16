const previewSecret = "kanzan-tree";
const remoteUrl = `https://nrg-v2.netlify.app/`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(document) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);
  const docType = document?._type;

  previewUrl.pathname = "/api/preview";
  previewUrl.searchParams.append("secret", previewSecret);
  previewUrl.searchParams.append("slug", document?.slug?.current ?? "/");
  previewUrl.searchParams.append("type", docType === "page" ? "" : docType);

  return previewUrl.toString();
}
