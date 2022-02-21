import { bodyCopy } from "../fields";
import { brandColors } from "../fields/brandColors";

export default {
  name: "bodyCopy",
  title: "Body Copy",
  type: "object",
  fields: [
    {
      name: "columns",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1).max(2),
    },
    bodyCopy,
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      initialValue: "var(--nrg-white)",
      description: "Font colours adapt automatically",
      validation: (Rule) => Rule.required(),
      options: {
        list: brandColors,
      },
    },
  ],
};
