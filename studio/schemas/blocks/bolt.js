export default {
  name: 'bolt',
  title: 'Bolt',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Red', value: 'red' },
          { title: 'Black', value: 'black' }
        ],
        layout: 'radio'
      }
    }
  ]
}