// Popping these here for future reference on how to fetch _refs
// "slug": slug.current,
// "author": author->{name, picture},

const commonFields = `
  _id,
  title,
  "slug": slug.current,
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
*[_type == "client"] | order(date desc, _updatedAt desc) {
  ${commonFields}
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

export const projectQuery = `
{
  "project": *[_type == "project" && slug.current == $project][0] {
    ${commonFields}
    ${blockFields}
  },
}`;

export const projectSlugsQuery = `
  *[_type == "project" && defined(slug.current)][].slug.current
`;

export const clientQuery = `
{
  "client": *[_type == "client" && slug.current == $client][0] {
    ${commonFields}
  },
}`;

export const clientSlugsQuery = `
*[_type == "client" && defined(slug.current)][].slug.current
`;
