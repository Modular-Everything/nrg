// Popping these here for future reference on how to fetch _refs
// "slug": slug.current,
// "author": author->{name, picture},

const commonFields = `
  _id,
  title,
  "slug": slug.current,
  backgroundColor,
`;

const blockFields = `
  topBlocks[] {
    ...,
    _type == 'sectionMarker' => {
      'slug': link->slug.current,
    },
  },
  blocks[] {
    ...,
    _type == 'sectionMarker' => {
      'slug': link->slug.current,
      'linkType': link->_type
    },
  },
  bottomBlocks[] {
    ...,
    _type == 'prevNext' => {
      'prevSlug': nextLink.link->slug.current,
      'prevTitle': nextLink.link->title,
      'nextSlug': prevLink.link->slug.current,
      'nextTitle': prevLink.link->title,
    }
  }
`;

export const indexQuery = `
*[_type == "page" && slug.current == "homepage" ] | order(date desc, _updatedAt desc) {
  ${commonFields}
  ${blockFields}
}`;

export const menuQuery = `
  *[_type == "menu" && _id == "menuSettings"] {
    weAre[] {'slug': link->slug.current, ...},
    what[] {'slug': link->slug.current, ...},
    weDo[] {'slug': link->slug.current, ...},
  }
`;

export const globalMetaDataQuery = `
  *[_type == 'siteSettings' && _id == 'siteSettings']
`;

export const pageQuery = `
  *[_type == "page" && slug.current == $page][0] {
    ${commonFields}
    ${blockFields}
  }`;

export const pageSlugsQuery = `
  *[_type == "page" && defined(slug.current)][].slug.current
`;

export const projectQuery = `
  *[_type == "project" && slug.current == $project][0] {
    ${commonFields}
    ${blockFields}
  },
`;

export const projectSlugsQuery = `
  *[_type == "project" && defined(slug.current)][].slug.current
`;

export const serviceQuery = `
  *[_type == "services" && slug.current == $service][0] {
    ${commonFields}
    ${blockFields}
  },
`;

export const serviceSlugsQuery = `
  *[_type == "services" && defined(slug.current)][].slug.current
`;
