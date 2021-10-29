export default {
  name: 'imageBlock',
  title: 'Image',
  type: 'object',
  initialValue: () => ({
    icon: 'hidden',
  }),
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
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Large', value: 'large' },
          { title: 'Small', value: 'small' },
          { title: 'Hidden', value: 'hidden' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'string',
    }
  ]
}