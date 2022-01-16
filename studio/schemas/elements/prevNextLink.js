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
      description: "Where does this link to?",
      to: [{ type: "projects" }],
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
