import { image } from "../fields";

export default {
  name: "heroCarousel",
  title: "Hero Carousel",
  type: "object",
  fields: [
    {
      name: "items",
      type: "array",
      of: [
        {
          name: "item",
          title: "Image Slide",
          type: "object",
          fields: [
            {
              name: "copy",
              title: "Headline / Copy",
              type: "object",
              description:
                "Be careful to only use one H1 per page. H1 and H2 are styled the same.",
              fields: [
                {
                  name: "content",
                  title: "Content",
                  type: "array",
                  of: [
                    {
                      type: "block",
                      styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H1", value: "h1" },
                        { title: "H2", value: "h2" },
                      ],
                      lists: [],
                      marks: {
                        annotations: [],
                        decorators: [],
                      },
                    },
                  ],
                },
              ],
            },
            image,
          ],
          preview: {
            prepare() {
              return {
                title: `Image Slide`,
              };
            },
          },
        },
        {
          name: "item_video",
          title: "Video Slide",
          type: "object",
          fields: [
            {
              name: "copy",
              title: "Headline / Copy",
              type: "object",
              description:
                "Be careful to only use one H1 per page. H1 and H2 are styled the same.",
              fields: [
                {
                  name: "content",
                  title: "Content",
                  type: "array",
                  of: [
                    {
                      type: "block",
                      styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H1", value: "h1" },
                        { title: "H2", value: "h2" },
                      ],
                      lists: [],
                      marks: {
                        annotations: [],
                        decorators: [],
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "vimeo",
              title: "Vimeo URL",
              type: "url",
              description: "A link to a Vimeo video",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            prepare() {
              return {
                title: `Video Slide`,
              };
            },
          },
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
        title: "Hero Carousel",
        subtitle: `x${subtitle || 0} slides`,
        media,
      };
    },
  },
};
