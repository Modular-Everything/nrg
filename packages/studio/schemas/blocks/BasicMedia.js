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
          { title: "Media & Text", value: "text" },
          { title: "Media & Statement", value: "statement" },
          { title: "Media & Statement & Text", value: "statementText" },
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
        parent.layoutType === "headline" || !parent.layoutType,
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
  ],
};
