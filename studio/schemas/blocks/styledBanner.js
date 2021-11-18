import React from "react";
import { FcClapperboard as Icon } from "react-icons/fc";

// ---

export default {
  name: "styledBanner",
  title: "Styled Banner",
  type: "object",
  initialValue: () => ({
    backgroundColor: "black",
    sitsBelowMenu: true,
  }),
  fields: [
    {
      name: "styledCopy",
      title: "Styled Copy",
      type: "array",
      of: [{ type: "block" }],
    },
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
    },
    {
      name: "sitsBelowMenu",
      title: "Sits below menu?",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "backgroundColor",
    },
    prepare: ({ title }) => ({
      title: `${title} banner`,
      media: <Icon />,
      subtitle: "Styled Banner",
    }),
  },
};

// TODO - Restrict to bold and italic
