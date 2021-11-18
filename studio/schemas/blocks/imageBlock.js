import React from "react";
import { FcImageFile as Icon } from "react-icons/fc";

// ---

export default {
  name: "imageBlock",
  title: "Image",
  type: "object",
  initialValue: () => ({
    icon: "hidden",
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "A title to display over the image.",
    },
    {
      name: "copy",
      title: "Copy",
      type: "string",
      description: "Some copy that sits below the title (if you want it).",
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description:
        "If you set this to anything other than 'hidden', it will hide the title and copy.",
      options: {
        list: [
          { title: "Large", value: "large" },
          { title: "Small", value: "small" },
          { title: "Hidden", value: "hidden" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "The image to show behind the text or icon.",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "backgroundImage",
    },
    prepare: ({ title, media }) => ({
      title,
      media: media || <Icon />,
      subtitle: "Image Block",
    }),
  },
};
