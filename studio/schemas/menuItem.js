export default {
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link to",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hoverImage",
      title: "Image",
      type: "image",
      description:
        "The image that appears when you hover the mouse over an item",
    },
  ],
};
