import { image, linkToRef, title, subtitle, bodyCopy } from "../fields";

export default {
  name: "carousel",
  title: "Carousel",
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
          { title: "Standard Cards", value: "standard" },
          { title: "Hover & Copy", value: "hoverCopy" },
          { title: "Hover & Link", value: "hoverLink" },
        ],
      },
    },
    {
      name: "standardCards",
      title: "Standard Cards",
      type: "array",
      hidden: ({ parent }) =>
        !parent.layoutType || parent.layoutType !== "standard",
      of: [
        {
          name: "cards",
          type: "object",
          fields: [subtitle, image, bodyCopy, linkToRef],
        },
      ],
    },
    {
      name: "hoverCopyCards",
      title: "Hover & Copy Cards",
      type: "array",
      hidden: ({ parent }) =>
        !parent.layoutType || parent.layoutType !== "hoverCopy",
      of: [
        {
          name: "cards",
          type: "object",
          fields: [image, bodyCopy, linkToRef],
        },
      ],
    },
    {
      name: "hoverLinkCards",
      title: "Hover & Link Cards",
      type: "array",
      hidden: ({ parent }) =>
        !parent.layoutType || parent.layoutType !== "hoverLink",
      of: [
        {
          name: "cards",
          type: "object",
          fields: [image, title, subtitle, linkToRef],
        },
      ],
    },
  ],
};
