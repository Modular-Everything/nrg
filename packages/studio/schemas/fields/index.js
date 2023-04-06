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

export const svgSnippet = {
  name: "svgSnippet",
  title: "SVG Snippet",
  type: "text",
  validation: (Rule) =>
    Rule.required().custom((snippet) => {
      if (typeof snippet === "undefined") {
        return true;
      }
      return snippet.startsWith("<svg")
        ? true
        : "Must be an actual <svg> snippet";
    }),
};

export const statement = {
  name: "statement",
  title: "Statement",
  type: "object",
  fields: [
    {
      name: "statement",
      title: "Statement",
      type: "array",
      description:
        "Use the highlight and text height buttons to create styled effects. Try combining them!",
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
                blockEditor: { icon: <>🖊</> },
              },
              {
                title: "Add small text",
                value: "em",
                blockEditor: { icon: <>🤏</> },
              },
            ],
          },
        },
      ],
    },
  ],
};

export const bodyCopy = {
  name: "bodyCopy",
  title: "Body",
  type: "object",
  fields: [
    {
      name: "copy",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
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
};

export const linkToRef = {
  name: "linkToRef",
  title: "Link",
  type: "object",
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
  fields: [
    {
      name: "alt",
      title: "Descriptive label for SEO & screen readers",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
  ],
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
    { type: "heroCarousel" },
    { type: "imageSlideGallery" },
    { type: "imageTiles" },
    { type: "largeStatements" },
    { type: "list" },
    { type: "logoGrid" },
    { type: "projectNavigation" },
    { type: "video" },
  ],
};

export const seo = {
  title: "SEO & social",
  name: "seo",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "seoTitle",
      type: "string",
      title: "Title for SEO & social sharing",
      description:
        "Optional: the settings in 'Site Settings' will be used if you left blank",
      validation: (Rule) =>
        Rule.max(70).warning(`A title shouldn't be more than 70 characters.`),
    },
    {
      name: "seoDescription",
      type: "text",
      title: "Short paragraph for SEO & social sharing (meta description)",
      description:
        "Optional: the settings in 'Site Settings' will be used if you left blank",
    },
    {
      name: "seoImage",
      title: "Image for social sharing",
      type: "image",
    },
  ],
};
