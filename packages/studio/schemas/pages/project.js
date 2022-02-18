import { slugWithType } from "../../helpers/slugWithType";
import { title, blocks } from "../fields";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [title, slugWithType("projects", "title"), blocks],
};
