import React from "react";
import { FcVoicePresentation as Icon } from "react-icons/fc";
import {
  FaHighlighter as BoldIcon,
  FaTextHeight as EmIcon,
} from "react-icons/fa";

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
      description:
        "Use the highlight and text height buttons to create styled effects. Try combining them!",
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
              {
                title: "Add small text",
                value: "em",
                blockEditor: { icon: EmIcon },
              },
            ],
          },
        },
      ],
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
