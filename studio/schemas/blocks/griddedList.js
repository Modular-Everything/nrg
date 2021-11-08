import React from "react";
import { FcNumericalSorting12 as Icon } from "react-icons/fc";

// ---

export default {
  name: "griddedList",
  title: "Gridded List",
  type: "object",
  initialValue: () => ({
    layoutType: "light",
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "layoutType",
      title: "Layout Type",
      type: "string",
      options: {
        list: [
          { title: "Dark", value: "dark" },
          { title: "Light", value: "light" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          name: "text",
          title: "Text",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare: ({ title }) => ({
      title: `${title.length} item(s)`,
      media: <Icon />,
      subtitle: "Gridded List",
    }),
  },
};
