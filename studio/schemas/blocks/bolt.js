import React from "react";
import { FcFlashOn as Icon } from "react-icons/fc";

// ---

export default {
  name: "bolt",
  title: "Bolt",
  type: "object",
  initialValue: () => ({
    backgroundColor: "red",
  }),
  fields: [
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description: "The background color 😉",
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
    {
      name: "boltCopy",
      title: "Copy",
      type: "string",
      description: "The copy behind the bolt",
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
