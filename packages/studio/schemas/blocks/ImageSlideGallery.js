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
};
