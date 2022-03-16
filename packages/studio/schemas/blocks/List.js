import { title } from "../fields";
import { brandColors } from "../fields/brandColors";

export default {
  name: "list",
  title: "List",
  type: "object",
  fields: [
    title,
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      initialValue: "var(--nrg-black)",
      description: "Font colours adapt automatically",
      validation: (Rule) => Rule.required(),
      options: {
        list: brandColors,
      },
    },
    {
      name: "listItems",
      title: "List Items",
      type: "array",
      description: "The items in the grid.",
      of: [
        {
          name: "item",
          title: "Item",
          type: "text",
          rows: 2,
        },
      ],
    },
  ],
  preview: {
    select: {
      media: "listItems[0].image",
      subtitle: "listItems.length",
    },
    prepare({ media, subtitle }) {
      return {
        title: "List",
        subtitle: `x${subtitle || 0} items`,
        media,
      };
    },
  },
};
