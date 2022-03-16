import { brandColors } from "../fields/brandColors";

export default {
  name: "divider",
  title: "Divider / Spacer",
  type: "object",
  fields: [
    {
      name: "divider",
      title: "Include dividing line?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "spacing",
      title: "Spacing",
      type: "number",
      description: "How much space either side?",
      initialValue: 0,
      validation: (Rule) =>
        Rule.required().custom((val) => {
          return val % 4
            ? "Spacing should be multiple of 4, for consistency."
            : true;
        }),
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      initialValue: "var(--nrg-white)",
      validation: (Rule) => Rule.required(),
      options: {
        list: brandColors,
      },
    },
  ],
  preview: {
    select: {
      spacing: "spacing",
      backgroundColor: "backgroundColor",
    },
    prepare({ spacing, backgroundColor }) {
      return {
        title: "Divider",
        subtitle: `Spacing: ${spacing}px / color: ${backgroundColor}`,
      };
    },
  },
};
