import React from "react";
import { FcPanorama as Icon } from "react-icons/fc";

// ---

export default {
  name: "scrollingGallery",
  title: "Scrolling Gallery",
  type: "object",
  initialValue: () => ({
    layoutType: "standard",
  }),
  fields: [
    {
      name: "layoutType",
      title: "Layout Type",
      type: "string",
      description: "Standard is pretty small, and tall is pretty big.",
      options: {
        list: [
          { title: "Standard", value: "standard" },
          { title: "Tall", value: "tall" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
          type: "object",
          initialValue: {
            layoutType: "landscape",
          },
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              description: "An optional title that sits over the image.",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "The image on the gallery item.",
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "link",
              title: "Link",
              type: "reference",
              description:
                "Optionally you can click on this item to go somewhere",
              to: [{ type: "page" }],
            },
            {
              name: "layoutType",
              title: "Layout Type",
              type: "string",
              description:
                "Portrait is tall, landscape is wide. You can select some portrait and others landscape if you like.",
              options: {
                list: [
                  { title: "Portrait", value: "portrait" },
                  { title: "Landscape", value: "landscape" },
                ],
                layout: "radio",
                direction: "horizontal",
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "items",
    },
    prepare: ({ title }) => ({
      title: title.length > 0 ? `${title.length} item(s)` : "Add an item!",
      media: <Icon />,
      subtitle: "Scrolling Gallery",
    }),
  },
};
