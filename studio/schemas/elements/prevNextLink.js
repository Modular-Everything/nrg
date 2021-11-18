export default {
  name: "prevNextLink",
  title: "Page/Project Link",
  type: "object",
  fields: [
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description:
        "This appears above the name of the page, useful for writing out the client name",
    },
    {
      name: "link",
      title: "Link",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "linkLabel",
      title: "Link Label",
      type: "string",
      description: 'Defaults to "View Project"',
    },
  ],
};