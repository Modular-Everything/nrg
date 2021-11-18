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
      description:
        "Keep the text on each line nice and long. Maximum of 3 lines. Create a new line by hitting ENTER/RETURN. Use the highlight button to highlight certain words.",
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
      description:
        "Copy that sits above the 'Learn more' button but below the 'Styled Copy' above.",
    },
    {
      name: "backgroundType",
      title: "Background Media Type",
      type: "string",
      description:
        "You can use an image or a Vimeo video, but you need to set which one you want to use here first.",
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
      description:
        "Pick a good quality landscape image, which contrasts well with the white menu items.",
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
      description:
        "If on, it adds some extra padding to the top to account for the header. If off, the padding is the same above and below.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "scrollLabel",
      title: "Scroll Label",
      type: "string",
      description: "Change the text of the 'learn more' button.",
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
