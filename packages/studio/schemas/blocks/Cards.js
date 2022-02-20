import { title, subtitle, linkToRef, image } from "../fields";

export default {
  name: "cards",
  type: "object",
  fields: [
    {
      name: "allCards",
      title: "Cards",
      type: "array",
      of: [
        {
          name: "card",
          type: "object",
          fields: [title, subtitle, linkToRef, image],
        },
      ],
      validation: (Rule) => Rule.length(2),
    },
  ],
};
