import topBlocks from './data/topBlocks';
import blocks from './data/blocks';
import bottomBlocks from './data/bottomBlocks';

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
      name: 'topBlocks',
      title: 'Top Blocks',
      type: 'array',
      of: [...topBlocks],
      options: {
        editModal: 'fullscreen'
      }
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [...blocks],
      options: {
        editModal: 'fullscreen'
      }
    },
    {
      name: 'bottomBlocks',
      title: 'Bottom Blocks',
      type: 'array',
      of: [...bottomBlocks],
      options: {
        editModal: 'fullscreen'
      }
    },
  ],
};
