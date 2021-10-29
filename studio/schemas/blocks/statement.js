export default {
  name: 'statement',
  title: 'Statement',
  type: 'object',
  fields: [
    {
      name: 'statement',
      title: 'Statement',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}

// TODO - Restrict to bold and italic only