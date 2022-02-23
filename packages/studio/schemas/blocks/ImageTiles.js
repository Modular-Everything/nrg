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
};
