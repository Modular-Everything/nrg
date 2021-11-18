import React from "react";
import { FcNumericalSorting12 as Icon } from "react-icons/fc";

// ---

export default {
  name: "griddedList",
  title: "Gridded List",
  type: "object",
  initialValue: () => ({
    layoutType: "dark",
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "The title of the list: big, bold, with an aftertaste of currants. Maybe.",
    },
    {
      name: "layoutType",
      title: "Layout Type",
      type: "string",
      description:
        "You can set this to 'light' if you want to put it underneath a section marker or something.",
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
      description: "The items in the grid.",
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
