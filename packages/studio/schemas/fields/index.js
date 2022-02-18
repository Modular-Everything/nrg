export const title = {
  name: "title",
  title: "Page Title",
  type: "string",
};

export const slug = {
  name: "slug",
  title: "Uniqiue Slug",
  type: "slug",
  validation: (Rule) => Rule.required(),
  description: "Must be unique (use the generate button).",
  options: {
    source: "title",
    maxLength: 200,
  },
};
