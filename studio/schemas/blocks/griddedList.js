export default {
  name: 'griddedList',
  title: 'Gridded List',
  type: 'object',
  initialValue: () => ({
    layoutType: 'light',
  }),
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
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: Rule => Rule.required(),
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