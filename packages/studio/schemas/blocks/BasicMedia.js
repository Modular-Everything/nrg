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
      title: "Bolt Icon",
      type: "string",
      hidden: ({ parent }) => parent.layoutType !== "bolt",
      options: {
        list: [
          { title: "Small Icon", value: "small" },
          { title: "Large Icon", value: "large" },
        ],
      },
    },
  ],
};
