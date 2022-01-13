import React from "react";
import { FcClapperboard as Icon } from "react-icons/fc";
import { FaHighlighter as BoldIcon } from "react-icons/fa";

// ---

export default {
  name: "styledBanner",
  title: "Styled Banner",
  type: "object",
  initialValue: () => ({
    backgroundColor: "black",
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
                title: "Highlight",
                value: "strong",
                blockEditor: { icon: BoldIcon },
              },
            ],
          },
        },
      ],
      description:
        "Keep the text on each line nice and long. Maximum of 3 lines. Create a new line by hitting ENTER/RETURN. Use the highlight button to highlight certain words.",
    },
    {
      name: "speedMod",
      title: "Speed Modifier",
      type: "number",
      description:
        "You can increase or decrease the speed of the animation (in percent).",
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description: "The color of the background behind the text.",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "Black", value: "black" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "sitsBelowMenu",
      title: "Sits below menu?",
      type: "boolean",
      description:
        "If on, it adds some extra padding to the top to account for the header. If off, the padding is the same above and below.",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "backgroundColor",
    },
    prepare: ({ title }) => ({
      title: `${title} banner`,
      media: <Icon />,
      subtitle: "Styled Banner",
    }),
  },
};

// TODO - Restrict to bold and italic
