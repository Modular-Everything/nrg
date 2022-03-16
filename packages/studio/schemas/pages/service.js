import { slugWithType } from "../../helpers/slugWithType";
import { title, blocks } from "../fields";

export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [title, slugWithType("services", "title"), blocks],
};
