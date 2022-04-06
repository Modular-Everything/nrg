import { image, statement } from "../fields";
import { brandColors } from "../fields/brandColors";

export default {
  name: "largeStatements",
  title: "Large Statements",
  type: "object",
  fields: [
    statement,
    {
      name: "images",
      type: "array",
      validation: (Rule) => Rule.length(2),
      description: "Top right and bottom left images",
      of: [image],
    },
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
  preview: {
    select: {
      media: "images[0].image",
      subtitle: "images.length",
    },
    prepare({ media, subtitle }) {
      return {
        title: "Large Statements",
        subtitle: `x${subtitle || 0} images`,
        media,
      };
    },
  },
};
