export default {
  name: 'logoMatrix',
  title: 'Logo Matrix',
  type: 'object',
  fields: [
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            }
          ]
        },
      ]
    }
  ]
}