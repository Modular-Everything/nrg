import React from "react";
import { FcFlashOn as Icon } from "react-icons/fc";

// ---

export default {
  name: "bolt",
  title: "Bolt",
  type: "object",
  fields: [
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "Black", value: "black" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "backgroundColor",
    },
    prepare: ({ title }) => ({
      title: `${title} bolt`,
      media: <Icon />,
      subtitle: "Bolt",
    }),
  },
};
