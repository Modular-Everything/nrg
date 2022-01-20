import React from "react";
import { FcTimeline as Icon } from "react-icons/fc";

export default {
  name: "tags",
  title: "Tags",
  type: "object",
  fields: [
    {
      name: "tagColor",
      title: "Tag Color",
      type: "string",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
        ],
        layout: "radio",
        initialValue: "red",
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "🏷",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      tags: "tags.length",
      color: "tagColor",
    },
    prepare: ({ tags, color }) => ({
      title: `${tags} tag(s) in ${color}`,
      media: <Icon />,
      subtitle: "Styled Banner",
    }),
  },
};
