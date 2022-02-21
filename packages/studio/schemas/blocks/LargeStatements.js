import { image, svgSnippet } from "../fields";

export default {
  name: "largeStatements",
  title: "Large Statements",
  type: "object",
  fields: [
    svgSnippet,
    {
      name: "images",
      type: "array",
      validation: (Rule) => Rule.length(2),
      description: "Top right and bottom left images",
      of: [image],
    },
  ],
};
