import { image, bodyCopy } from "../fields";

export default {
  name: "imageSlideGallery",
  title: "Image Slide Gallery",
  type: "object",
  fields: [
    {
      name: "items",
      type: "array",
      of: [
        {
          name: "item",
          type: "object",
          fields: [image, bodyCopy],
        },
      ],
    },
  ],
  preview: {
    select: {
      media: "items[0].image",
      subtitle: "items.length",
    },
    prepare({ media, subtitle }) {
      return {
        title: "Image Slide Gallery",
        subtitle: `x${subtitle || 0} slides`,
        media,
      };
    },
  },
};
