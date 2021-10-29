export default {
  name: 'sectionMarker',
  title: 'Section Marker',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'mainCopy',
      title: 'Main Copy',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'aside',
      title: 'Aside',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'linkLabel',
      title: 'Link Label',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'page' }]
    },
  ]
}