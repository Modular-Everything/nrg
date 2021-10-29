import blocks from './data/blocks';

// ---

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [...blocks],
      options: {
        editModal: 'fullscreen'
      }
    }
  ],
};
