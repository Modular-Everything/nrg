import { image, linkToRef, bodyCopy } from "../fields";

export default {
  name: "imageTiles",
  title: "Image Tiles",
  type: "object",
  fields: [
    {
      name: "tiles",
      type: "array",
      of: [
        {
          name: "tile",
          type: "object",
          fields: [image, bodyCopy, linkToRef],
        },
      ],
    },
  ],
  preview: {
    select: {
      media: "tiles[0].image",
      subtitle: "tiles.length",
    },
    prepare({ media, subtitle }) {
      return {
        title: "Image Tiles",
        subtitle: `x${subtitle || 0} tiles`,
        media,
      };
    },
  },
};
