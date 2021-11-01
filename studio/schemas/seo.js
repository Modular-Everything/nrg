import React from 'react';

// ---

export default {
  title: 'SEO / Share Settings',
  name: 'seo',
  type: 'object',
  options: {
    collapsible: true
  },
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title used for search engines and browsers',
      validation: Rule =>
        Rule.max(50).warning('Longer titles may be truncated by search engines')
    },
    {
      name: 'metaDesc',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines',
      validation: Rule =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by search engines'
        )
    },
    {
      name: 'shareTitle',
      title: 'Share Title',
      type: 'string',
      description: 'Title used for social sharing cards',
      validation: Rule =>
        Rule.max(50).warning('Longer titles may be truncated by social sites')
    },
    {
      name: 'shareDesc',
      title: 'Share Description',
      type: 'text',
      rows: 3,
      description: 'Description used for social sharing cards',
      validation: Rule =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by social sites'
        )
    },
    {
      name: 'shareGraphic',
      title: 'Share Graphic',
      type: 'image',
      description: 'Recommended size: 1200x630 (PNG or JPG)'
    },
    {
      name: 'jsonSchema',
      title: 'Structured Data',
      type: 'text',
      description: <>Accepts raw JSON (<a href="https://technicalseo.com/tools/schema-markup-generator/" target="_blank" rel="noreferrer">check out this tool</a> but omit the script tags)</>
    }
  ]
}
