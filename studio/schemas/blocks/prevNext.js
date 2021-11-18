import React from "react";
import { FcFlowChart as Icon } from "react-icons/fc";

// ---

export default {
  name: "prevNext",
  title: "Previous/Next Links",
  type: "object",
  description:
    "An option to add in a previous/next link, useful on project or service pages.",
  fields: [
    {
      name: "prevLink",
      type: "prevNextLink",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "nextLink",
      type: "prevNextLink",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      prev: "prevLink.link.title",
      next: "nextLink.link.title",
    },
    prepare: ({ prev, next }) => ({
      title: `Previous: ${prev} | Next: ${next}`,
      media: <Icon />,
      subtitle: "Previous/Next Links",
    }),
  },
};
