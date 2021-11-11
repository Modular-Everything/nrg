import topBlocks from "./data/topBlocks";
import blocks from "./data/blocks";
import bottomBlocks from "./data/bottomBlocks";

// ---

export default {
  name: "page",
  title: "Page",
  type: "document",
  initialValue: () => ({
    section: "default",
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "section",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Services", value: "services" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seo",
      title: "Page SEO",
      description: "This will overwrite the default SEO set in Site Settings",
      type: "seo",
    },
    {
      name: "topBlocks",
      title: "Top Blocks",
      type: "array",
      of: [...topBlocks],
      options: {
        editModal: "fullscreen",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [...blocks],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "bottomBlocks",
      title: "Bottom Blocks",
      type: "array",
      of: [...bottomBlocks],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "backgroundText",
      title: "Background Text",
      descripion: "The outlined text that sits behind the content",
      type: "string",
    },
  ],
};
