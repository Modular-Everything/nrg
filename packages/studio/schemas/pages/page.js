import { slugWithType } from "../../helpers/slugWithType";
import { title, blocks } from "../fields";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [title, slugWithType("", "title"), blocks],
};
