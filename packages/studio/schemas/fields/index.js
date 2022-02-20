import React from "react";

export const title = {
  name: "title",
  title: "Title",
  type: "string",
  validation: (Rule) => Rule.required(),
};

export const subtitle = {
  name: "subtitle",
  title: "Subtitle",
  type: "string",
};

export const linkToRef = {
  name: "linkToRef",
  title: "Link",
  type: "object",
  validation: (Rule) => Rule.required(),
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
};

export const image = {
  name: "image",
  title: "Image",
  type: "image",
  validation: (Rule) => Rule.required(),
  description: (
    <span>
      Consider compressing your images before uploading them. We recommend{" "}
      <a href="https://squoosh.app/" target="_blank" rel="noreferrer noopener">
        Squoosh App
      </a>{" "}
      for this.
    </span>
  ),
};

export const slug = {
  name: "slug",
  title: "Uniqiue Slug",
  type: "slug",
  validation: (Rule) => Rule.required(),
  description: "Must be unique (use the generate button).",
  options: {
    source: "title",
    maxLength: 200,
  },
};

export const blocks = {
  name: "blocks",
  title: "Content Blocks",
  type: "array",
  of: [
    { type: "basicMedia" },
    { type: "bodyCopy" },
    { type: "cards" },
    { type: "carousel" },
    { type: "divider" },
    { type: "imageSlideGallery" },
    { type: "imageTiles" },
    { type: "largeStatements" },
    { type: "list" },
    { type: "logoGrid" },
    { type: "projectNavigation" },
    { type: "spacer" },
  ],
};
