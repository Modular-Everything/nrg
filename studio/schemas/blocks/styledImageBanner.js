import React from "react";
import { FcFilm as Icon } from "react-icons/fc";

// ---

export default {
  name: "styledImageBanner",
  title: "Styled Image Banner",
  type: "object",
  initialValue: () => ({
    sitsBelowMenu: true,
  }),
  fields: [
    {
      name: "styledCopy",
      title: "Styled Copy",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "descriptiveCopy",
      title: "Descriptive Copy",
      type: "text",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
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
      name: "sitsBelowMenu",
      title: "Sits below menu?",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "scrolLabel",
      title: "Scroll Label",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "descriptiveCopy",
      media: "backgroundImage",
    },
    prepare: ({ title, media }) => ({
      title,
      media: media || <Icon />,
      subtitle: "Styled Image Banner",
    }),
  },
};
