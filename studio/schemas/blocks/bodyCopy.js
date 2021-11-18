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
      description:
        "At least 1, but no more than 2. This gets completely ignored if you add an image.",
      validation: (Rule) => Rule.min(1).max(2),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the copy.",
    },
    {
      name: "copy",
      title: "Copy",
      type: "array",
      description: "The body copy.",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description:
        "An optional image, always sits to the right of the copy and splits the layout to two columns (ignoring the setting above).",
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
