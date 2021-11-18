export default {
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the menu item",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link to",
      type: "reference",
      to: [{ type: "page" }],
      description: "Where does this link to?",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hoverImage",
      title: "Image",
      type: "image",
      description:
        "The image that appears when you hover the mouse over an item (hidden on mobile)",
    },
  ],
};
