import React from "react";

export default {
  name: "basicMedia",
  title: "Basic Media",
  type: "object",
  fields: [
    // Layout and media type selections
    {
      name: "layoutType",
      title: "Layout Type",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "This block offers a few configurations. Select the base layout here and customise it from there.",
      options: {
        list: [
          { title: "Standalone Media", value: "basic" },
          { title: "Media & Bolt", value: "bolt" },
          { title: "Media & Read More", value: "read" },
          { title: "Media & Statement", value: "statement" },
          { title: "Media & Statement & Read More", value: "statementread" },
          { title: "Media & Headline & Text", value: "headline" },
          { title: "Media & Headline & Text (Alt.)", value: "headlineAlt" },
        ],
      },
    },
    {
      name: "mediaType",
      title: "Media Type",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent.layoutType,
      description: "Now decide whether to use an image or a Vimeo video",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Vimeo", value: "vimeo" },
        ],
      },
    },

    // Media Types
    {
      name: "vimeo",
      title: "Vimeo URL",
      type: "url",
      description: "A link to a Vimeo video",
      hidden: ({ parent }) =>
        !parent.layoutType || !parent.mediaType || parent.mediaType === "image",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      hidden: ({ parent }) =>
        !parent.layoutType || !parent.mediaType || parent.mediaType === "vimeo",
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

    // Bolt Settings
    {
      name: "bolt",
      title: "Bolt Overlay",
      type: "string",
      hidden: ({ parent }) => parent.layoutType !== "bolt",
      options: {
        list: [
          { title: "Small Bolt", value: "small" },
          { title: "Large Bolt", value: "large" },
        ],
      },
    },

    // Headline / Copy Settings
    {
      name: "copy",
      title: "Headline / Copy",
      type: "object",
      hidden: ({ parent }) =>
        !parent.layoutType || !parent.layoutType.includes("headline"),
      description:
        "Be careful to only use one H1 per page. H1 and H2 are styled the same.",
      fields: [
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
              ],
              lists: [],
              marks: {
                annotations: [],
                decorators: [],
              },
            },
          ],
        },
      ],
    },

    // Basic Copy
    {
      name: "basicCopy",
      title: "Footer Copy",
      type: "object",
      hidden: ({ parent }) =>
        !parent.layoutType || !parent.layoutType.includes("read"),
      fields: [
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "block",
              styles: [],
              lists: [],
              marks: {
                annotations: [],
                decorators: [],
              },
            },
          ],
        },
      ],
    },

    // Read more label
    {
      name: "readMore",
      title: "'Learn More' Label",
      type: "string",
      initialValue: "Learn more",
      hidden: ({ parent }) =>
        !parent.layoutType || !parent.layoutType.includes("read"),
    },

    // Call to action link
    {
      name: "linkToRef",
      title: "Link",
      type: "object",
      hidden: ({ parent }) => parent.layoutType !== "headlineAlt",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
          initialValue: "View Project",
        },
        {
          name: "link",
          title: "Link",
          type: "reference",
          to: [
            { type: "newsPost" },
            { type: "homepage" },
            { type: "page" },
            { type: "project" },
            { type: "service" },
          ],
        },
      ],
    },

    // Statement block
    {
      name: "statement",
      title: "Statement",
      type: "object",
      hidden: ({ parent }) =>
        !parent.layoutType || !parent.layoutType.includes("statement"),
      fields: [
        {
          name: "statement",
          title: "Statement",
          type: "array",
          description:
            "Write the same copy across 3 lines, and add backgrounds to different parts of the text on each line.",
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
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
