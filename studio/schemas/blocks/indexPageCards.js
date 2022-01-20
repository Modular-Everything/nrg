import React from "react";
import { FcStackOfPhotos as Icon } from "react-icons/fc";

export default {
  name: "indexPageCards",
  title: "Index Page Cards (2-up)",
  type: "object",
  fields: [
    {
      name: "cards",
      title: "Cards",
      type: "array",
      description: "Two cards side by side",
      of: [
        {
          name: "card",
          title: "Card",
          type: "object",
          fields: [
            {
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              description:
                "This appears above the name of the page, useful for writing out the client name",
            },
            {
              name: "link",
              title: "Link",
              type: "reference",
              description: "Where does this link to?",
              to: [{ type: "projects" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "cardType",
              title: "Card Media Type",
              type: "string",
              description:
                "You can use an image or a video, but you need to set which one you want to use here first.",
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "Video", value: "video" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "cardImage",
              title: "Card Image",
              type: "image",
              description: "An image for the card",
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
              hidden: ({ parent }) =>
                !parent?.cardType || parent?.cardType === "video",
            },
            {
              name: "cardVideo",
              title: "Card Video",
              type: "file",
              description: "A video for the card",
              options: {
                accept: "video/*",
              },
              hidden: ({ parent }) =>
                !parent?.cardType || parent?.cardType === "image",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(2).max(2),
    },
    {
      name: "orientation",
      title: "Orientation",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Landscape", value: "landscape" },
          { title: "Portrait", value: "portrait" },
        ],
      },
    },
  ],
  preview: {
    select: {
      cards: "cards.length",
    },
    prepare: ({ cards }) => ({
      title: `${cards || 0} Card(s)`,
      media: <Icon />,
      subtitle: "Index Page Cards",
    }),
  },
};
