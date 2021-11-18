import React from "react";
import { FcClapperboard as Icon } from "react-icons/fc";

// ---

export default {
  name: "styledBanner",
  title: "Styled Banner",
  type: "object",
  initialValue: () => ({
    backgroundColor: "black",
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
  ],
  preview: {
    select: {
      title: "backgroundColor",
    },
    prepare: ({ title }) => ({
      title: `${title ? `${title} Banner` : "Banner"}`,
      media: <Icon />,
      subtitle: "Styled Banner",
    }),
  },
};

// TODO - Restrict to bold and italic
