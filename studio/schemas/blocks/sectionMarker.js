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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "textColor",
      title: "Text Color",
      type: "string",
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
      of: [{ type: "block" }],
    },
    {
      name: "aside",
      title: "Aside",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "linkLabel",
      title: "Link Label",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "reference",
      to: [{ type: "page" }],
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
