import { slugWithType } from "../../helpers/slugWithType";
import { title, blocks, seo } from "../fields";

export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [title, slugWithType("services", "title"), blocks, seo],
};
