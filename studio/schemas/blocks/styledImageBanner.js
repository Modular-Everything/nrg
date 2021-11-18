import React from "react";
import { FcFilm as Icon } from "react-icons/fc";
import { FaHighlighter as BoldIcon } from "react-icons/fa";

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
      of: [
        {
          type: "block",
          styles: [],
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: "Add background to text",
                value: "strong",
                blockEditor: { icon: BoldIcon },
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "descriptiveCopy",
      title: "Descriptive Copy",
      type: "text",
    },
    {
      name: "backgroundType",
      title: "Background Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      },
      validation: (Rule) => Rule.required(),
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
      hidden: ({ parent }) =>
        !parent?.backgroundType || parent?.backgroundType === "video",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "backgroundVideo",
      title: "Background Video",
      type: "url",
      description: "A link to a Vimeo video",
      hidden: ({ parent }) =>
        !parent?.backgroundType || parent?.backgroundType === "image",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "sitsBelowMenu",
      title: "Sits below menu?",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "scrollLabel",
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
