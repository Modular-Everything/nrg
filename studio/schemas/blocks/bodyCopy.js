export default {
  name: 'bodyCopy',
  title: 'Body Copy',
  type: 'object',
  fields: [
    {
      name: 'columns',
      title: 'Columns',
      type: 'number',
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    }
  ]
}