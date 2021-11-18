import React from "react";
import { FcSignature as Icon } from "react-icons/fc";

// ---

export default {
  name: "bodyCopy",
  title: "Body Copy",
  type: "object",
  initialValue: () => ({
    columns: 1,
  }),
  fields: [
    {
      name: "columns",
      title: "Columns",
      type: "number",
      validation: (Rule) => Rule.min(1).max(2),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "copy",
      title: "Copy",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare: ({ title, media }) => ({
      title,
      media: media || <Icon />,
      subtitle: "Body Copy",
    }),
  },
};
