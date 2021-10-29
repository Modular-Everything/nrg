export default {
  name: 'griddedList',
  title: 'Gridded List',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'layoutType',
      title: 'Layout Type',
      type: 'string',
      options: {
        list: [
          { title: 'Dark', value: 'dark' },
          { title: 'Light', value: 'light' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        }
      ]
    }
  ]
}