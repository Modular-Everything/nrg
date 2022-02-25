import React from "react";

import { brandColors } from "../fields/brandColors";

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
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
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
    {
      name: "bolt",
      title: "Bolt Icon",
      type: "boolean",
      description: "Show or hide the bolt icon",
      hidden: ({ parent }) => parent.layoutType !== "list",
      initialValue: true,
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      hidden: ({ parent }) => parent.layoutType !== "list",
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
              marks: {
                annotations: [],
                decorators: [],
              },
            },
          ],
        },
      ],
    },
    {
      name: "linkToRef",
      title: "Call to Action",
      type: "object",
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
              marks: {
                annotations: [],
                decorators: [],
              },
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
};
