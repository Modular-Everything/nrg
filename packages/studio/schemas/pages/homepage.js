import { title, blocks } from "../fields";

export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    title,
    {
      name: "slug",
      type: "slug",
      readOnly: true,
      hidden: true,
    },
    blocks,
  ],
};
