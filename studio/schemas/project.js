import topBlocks from "./data/topBlocks";
import blocks from "./data/blocks";
import bottomBlocks from "./data/bottomBlocks";

// ---

export default {
  name: "projects",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the project",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Important: Generate the slug BEFORE trying to preview the project.",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seo",
      title: "Page SEO",
      description: "This will override the default SEO set in Site Settings",
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
      description:
        "Blocks that appear underneath/directly below the header/navigation with no spacing between.",
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
      description:
        "These blocks all have spacing/gaps between them, above them and below them (generated automatically).",
    },
    {
      name: "bottomBlocks",
      title: "Bottom Blocks",
      type: "array",
      of: [...bottomBlocks, { type: "prevNext" }],
      options: {
        editModal: "fullscreen",
      },
      description:
        "Blocks that sit directly above the footer with no spacing between.",
    },
    {
      name: "backgroundText",
      title: "Background Text",
      descripion: "The outlined text that sits behind the content",
      type: "string",
    },
  ],
};
