import { slugWithType } from "../../helpers/slugWithType";
import { title, blocks } from "../fields";

export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [title, slugWithType("blog", "title"), blocks],
};
