const previewSecret = "kanzan-tree";
const remoteUrl = `https://madewithnrg.com/`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(document) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = "/api/preview";
  previewUrl.searchParams.append("secret", previewSecret);
  previewUrl.searchParams.append("slug", document?.slug?.current ?? "/");

  return previewUrl.toString();
}
