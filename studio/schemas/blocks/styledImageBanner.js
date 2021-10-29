export default {
  name: 'styledImageBanner',
  title: 'Styled Image Banner',
  type: 'object',
  fields: [
    {
      name: 'styledCopy',
      title: 'Styled Copy',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'descriptiveCopy',
      title: 'Descriptive Copy',
      type: 'text',
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
      name: 'sitsBelowMenu',
      title: 'Sits below menu?',
      type: 'boolean',
    },
    {
      name: 'scrolLabel',
      title: 'Scroll Label',
      type: 'string',
    }
  ]
}