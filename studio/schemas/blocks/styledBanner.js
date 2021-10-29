export default {
  name: 'styledBanner',
  title: 'Styled Banner',
  type: 'object',
  fields: [
    {
      name: 'styledCopy',
      title: 'Styled Copy',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Red', value: 'red' },
          { title: 'Black', value: 'black' }
        ],
        layout: 'radio',
        direction: 'horizontal',
      }
    }
  ]
}

// TODO - Restrict to bold and italic