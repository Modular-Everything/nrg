import { slugWithType } from "../../helpers/slugWithType";
import { title, blocks } from "../fields";

export default {
  name: "newsPost",
  title: "News",
  type: "document",
  fields: [title, slugWithType("news", "title"), blocks],
};
