import React from "react";

import { statement } from "../fields";
import { brandColors } from "../fields/brandColors";

export default {
  name: "largeStatements",
  title: "Large Statements",
  type: "object",
  fields: [
    statement,
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      initialValue: "var(--nrg-white)",
      description: "Font colours adapt automatically",
      validation: (Rule) => Rule.required(),
      options: {
        list: [...brandColors, { title: "Image", value: "image" }],
      },
    },
    {
      name: "image",
      title: "Background Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      hidden: ({ parent }) => parent.backgroundColor !== "image",
      description: (
        <span>
          Consider compressing your images before uploading them. We recommend{" "}
          <a
            href="https://squoosh.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Squoosh App
          </a>{" "}
          for this.
        </span>
      ),
    },
  ],
  preview: {
    select: {
      bg: "backgroundColor",
    },
    prepare({ bg }) {
      return {
        title: "Large Statements",
        subtitle: `Background: ${bg}`,
      };
    },
  },
};
