import React from "react";
import { FcPanorama as Icon } from "react-icons/fc";

// ---

export default {
  name: "scrollingGallery",
  title: "Scrolling Gallery",
  type: "object",
  fields: [
    {
      name: "layoutType",
      title: "Layout Type",
      type: "string",
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
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
            {
              name: "link",
              title: "Link",
              type: "reference",
              to: [{ type: "page" }],
            },
            {
              name: "layoutType",
              title: "Layout Type",
              type: "string",
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
      title: `${title.length} item(s)`,
      media: <Icon />,
      subtitle: "Scrolling Gallery",
    }),
  },
};
