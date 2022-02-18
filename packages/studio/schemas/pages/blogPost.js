import { title, slug, blocks } from "../fields";

export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [title, slug, blocks],
};
