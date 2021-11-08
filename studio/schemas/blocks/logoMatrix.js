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
      title: `${title.length} logo(s)`,
      media: <Icon />,
      subtitle: "Logo Matrix",
    }),
  },
};
