export function linkBuilder(pageSlug, type) {
  const slugLink = pageSlug === "homepage" ? "" : pageSlug;
  const pageType = type === "page" ? "/" : `/${type}/`;
  return pageType + slugLink;
}
