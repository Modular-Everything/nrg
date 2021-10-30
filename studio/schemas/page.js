import topBlocks from './data/topBlocks';
import blocks from './data/blocks';
import bottomBlocks from './data/bottomBlocks';
import seo from './seo';

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
      validation: Rule => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'topBlocks',
      title: 'Top Blocks',
      type: 'array',
      of: [...topBlocks],
      options: {
        editModal: 'fullscreen'
      },
      validation: Rule => Rule.required(),
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
