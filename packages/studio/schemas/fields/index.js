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

export const blocks = {
  name: "blocks",
  title: "Content Blocks",
  type: "array",
  of: [
    { type: "basicMedia" },
    { type: "bodyCopy" },
    { type: "carousel" },
    { type: "divider" },
    { type: "imageSlideGallery" },
    { type: "imageTiles" },
    { type: "landscapeCards" },
    { type: "largeStatements" },
    { type: "list" },
    { type: "logoGrid" },
    { type: "projectNavigation" },
    { type: "spacer" },
  ],
};
