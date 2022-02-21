import { title, subtitle, image, linkToRef } from "../fields";

export default {
  name: "projectNavigation",
  title: "Project Navigation",
  type: "object",
  fields: [
    {
      name: "items",
      type: "array",
      validation: (Rule) => Rule.length(2),
      of: [
        {
          name: "item",
          type: "object",
          fields: [title, subtitle, image, linkToRef],
        },
      ],
    },
  ],
};
