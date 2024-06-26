import React from "react";

import { allRefs } from "../fields/allRefs";
import { brandColors } from "../fields/brandColors";

function Pre({ children }) {
  return (
    <pre
      style={{
        display: "inline",
        border: "1px solid green",
        background: "rgb(0 255 0 / 10%)",
        borderRadius: "8px",
        padding: "2px",
      }}
    >
      {children}
    </pre>
  );
}

const marks = {
  annotations: [
    {
      name: "internalLink",
      type: "object",
      title: "Internal link",
      icon: <>📍</>,
      fields: [
        {
          name: "reference",
          type: "reference",
          title: "Reference",
          to: allRefs,
        },
      ],
    },
    {
      name: "link",
      type: "object",
      title: "External link",
      icon: <>🌐</>,
      fields: [
        {
          name: "href",
          type: "url",
          title: "URL/email",
          description: (
            <p>
              Use <Pre>mailto:</Pre> to for emails, <Pre>https://</Pre> etc for
              web. For example <Pre>mailto:gavin@madewithnrg.com</Pre> or{" "}
              <Pre>https://madewithnrg.com</Pre>
            </p>
          ),
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        },
        {
          title: "Open in new tab",
          name: "blank",
          type: "boolean",
        },
      ],
    },
  ],
  decorators: [],
};

export default {
  name: "bodyCopy",
  title: "Body Copy",
  type: "object",
  fields: [
    {
      name: "layoutType",
      title: "Layout Type",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "This block offers a few configurations. Select the base layout here and customise it from there.",
      options: {
        list: [
          { title: "Body Copy & Columns", value: "body" },
          { title: "Body Copy & List", value: "list" },
          { title: "Body Copy & Media", value: "media" },
        ],
      },
    },
    {
      name: "columns",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1).max(2),
      hidden: ({ parent }) => parent.layoutType !== "body",
    },
    {
      name: "bolt",
      title: "Bolt Icon",
      type: "boolean",
      description: "Show or hide the bolt icon",
      hidden: ({ parent }) => parent.layoutType === "media",
      initialValue: true,
    },
    {
      name: "copyPosition",
      title: "Copy Position",
      type: "string",
      description: "Optionally choose copy position",
      hidden: ({ parent }) => parent.layoutType !== "body",
      initialValue: "center",
      options: {
        list: ["left", "center", "right"],
      },
    },
    {
      name: "copy",
      title: "Body Copy",
      type: "object",
      hidden: ({ parent }) =>
        parent.layoutType === "list" || !parent.layoutType,
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
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
              ],
              lists: [],
              marks,
            },
          ],
        },
      ],
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      hidden: ({ parent }) => parent.layoutType !== "list",
    },
    {
      name: "headlineHeading",
      title: "Headline Heading",
      type: "string",
      initialValue: "h2",
      description:
        "Which heading (h1, h2, etc) to use for this title. Always styled the same. H2 is used if left blank.",
      hidden: ({ parent }) => parent.layoutType !== "list",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
        ],
      },
    },
    {
      name: "copyNoHeadlines",
      title: "Body Copy",
      type: "object",
      hidden: ({ parent }) => parent.layoutType !== "list",
      fields: [
        {
          name: "content",
          type: "array",
          of: [
            {
              type: "block",
              styles: [],
              lists: [],
              marks,
            },
          ],
        },
      ],
    },
    {
      name: "linkToRef",
      title: "Call to Action",
      type: "object",
      description: "Link to either an internal document or external website.",
      hidden: ({ parent }) => parent.layoutType === "body",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
          initialValue: "Call to Action",
        },
        {
          name: "link",
          title: "Internal Link",
          type: "reference",
          to: [
            { type: "newsPost" },
            { type: "homepage" },
            { type: "page" },
            { type: "project" },
            { type: "service" },
          ],
        },
        {
          name: "externalLink",
          title: "External Link",
          description:
            "Setting an internal link will take priority. To use an external link, be sure to clear the internal link first.",
          type: "url",
        },
      ],
    },
    {
      name: "aside",
      title: "List Items",
      type: "object",
      hidden: ({ parent }) => parent.layoutType !== "list",
      description: "Only tags and ordered lists will render",
      fields: [
        {
          name: "content",
          type: "array",
          of: [
            {
              type: "block",
              styles: [],
              lists: [
                { title: "Tag List", value: "bullet" },
                { title: "Ordered List", value: "number" },
              ],
              marks,
            },
          ],
        },
      ],
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
      hidden: ({ parent }) => parent.layoutType !== "media",
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
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      initialValue: "var(--nrg-white)",
      description: "Font colours adapt automatically",
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => !parent.layoutType,
      options: {
        list: brandColors,
      },
    },
  ],
  preview: {
    select: {
      media: "image",
      subtitle: "layoutType",
    },
    prepare({ media, subtitle }) {
      return {
        title: "Body Copy",
        subtitle,
        media,
      };
    },
  },
};
