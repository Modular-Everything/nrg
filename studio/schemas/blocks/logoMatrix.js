import React from "react";
import { FcGrid as Icon } from "react-icons/fc";

// ---

export default {
  name: "logoMatrix",
  title: "Logo Matrix",
  type: "object",
  fields: [
    {
      name: "logos",
      title: "Logos",
      type: "array",
      description:
        "A list of logos to display in a grid (no links or anything, just images... and I recommend uploading SVG's here or at the very least a PNG)",
      of: [
        {
          name: "logo",
          title: "Logo",
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
    },
  ],
  preview: {
    select: {
      title: "logos",
    },
    prepare: ({ title }) => ({
      title: title?.length > 0 ? `${title.length} logo(s)` : "Add some logos!",
      media: <Icon />,
      subtitle: "Logo Matrix",
    }),
  },
};
