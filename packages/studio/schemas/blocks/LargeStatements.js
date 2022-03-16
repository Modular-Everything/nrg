import { image, statement } from "../fields";

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
