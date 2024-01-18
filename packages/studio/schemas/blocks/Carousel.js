import { image, linkToRef, subtitle, bodyCopy } from "../fields";
import { brandColors } from "../fields/brandColors";

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
          { title: "Testimonial", value: "testimonial" },
        ],
      },
    },
    {
      name: "standardCards",
      title: "Cards",
      type: "array",
      hidden: ({ parent }) =>
        !parent.layoutType || parent.layoutType === "testimonial",
      of: [
        {
          name: "cards",
          type: "object",
          fields: [subtitle, image, bodyCopy, linkToRef],
        },
      ],
    },
    {
      name: "testimonialCards",
      title: "Testimonial Cards",
      type: "array",
      hidden: ({ parent }) => parent.layoutType !== "testimonial",
      of: [
        {
          name: "cards",
          type: "object",
          fields: [
            {
              name: "content",
              title: "Content",
              type: "text",
            },
            {
              name: "sourcePerson",
              title: "Person",
              type: "string",
            },
            {
              name: "sourceBusiness",
              title: "Business/company",
              type: "string",
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
              person: "sourcePerson",
              business: "sourceBusiness",
            },
            prepare({ person, business }) {
              return {
                title: `${person} - ${business}`,
                subtitle: "Testimonial",
              };
            },
          },
        },
      ],
    },
    {
      name: "autoPlayCarousel",
      title: "Autoplay Carousel",
      type: "number",
      description: "Set a value in seconds to enable carousel autoplaying",
      hidden: ({ parent }) => !parent.layoutType,
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
