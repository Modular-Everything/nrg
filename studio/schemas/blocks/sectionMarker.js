import React from "react";
import { FcBookmark as Icon } from "react-icons/fc";

// ---

export default {
  name: "sectionMarker",
  title: "Section Marker",
  type: "object",
  initialValue: () => ({
    textColor: "black",
    backgroundColor: "white",
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the section.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "textColor",
      title: "Text Color",
      type: "string",
      description: "The color of the text.",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description:
        "The color of the background (make sure to set the text color too).",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainCopy",
      title: "Main Copy",
      type: "array",
      description: "The main bit of copy. You can add lists here if you like.",
      of: [
        {
          type: "block",
          styles: [],
          marks: {
            annotations: [],
            decorators: [],
          },
        },
      ],
    },
    {
      name: "aside",
      title: "Aside",
      type: "array",
      description:
        "The copy that sits next to (or below on mobile) the main copy. You can add lists here if you like.",
      of: [
        {
          type: "block",
          styles: [],
          marks: {
            annotations: [],
            decorators: [],
          },
        },
      ],
    },
    {
      name: "linkLabel",
      title: "Link Label",
      type: "string",
      description:
        "The label of the link, or else it defaults to 'Learn more'.",
    },
    {
      name: "link",
      title: "Link",
      type: "reference",
      description: "Where does this link to? Totally optional.",
      to: [
        { type: "page" },
        { type: "services" },
        { type: "blog" },
        { type: "projects" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title,
      media: <Icon />,
      subtitle: "Section Marker",
    }),
  },
};
