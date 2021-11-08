import React from "react";
import { FcVoicePresentation as Icon } from "react-icons/fc";

// ---

export default {
  name: "statement",
  title: "Statement",
  type: "object",
  fields: [
    {
      name: "statement",
      title: "Statement",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "statement",
    },
    prepare: ({ title }) => ({
      title: `${title[0].children[0].text}...`,
      media: <Icon />,
      subtitle: "Statement",
    }),
  },
};

// TODO - Restrict to bold and italic only
