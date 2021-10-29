export default {
  name: 'imageBlock',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
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
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Large', value: 'large' },
          { title: 'Small', value: 'small' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'string',
    }
  ]
}