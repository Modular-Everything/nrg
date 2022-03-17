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
          { title: "Hover & CTA", value: "hoverCTA" },
        ],
      },
    },
    {
      name: "standardCards",
      title: "Standard Cards",
      type: "array",
      hidden: ({ parent }) => !parent.layoutType,
      of: [
        {
          name: "cards",
          type: "object",
          fields: [subtitle, image, bodyCopy, linkToRef],
        },
      ],
    },
  ],
  preview: {
    select: {
      subtitle: "layoutType",
    },
    prepare({ subtitle }) {
      return {
        title: "Carousel",
        subtitle,
      };
    },
  },
};
