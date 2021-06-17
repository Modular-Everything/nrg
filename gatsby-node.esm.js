import path from 'path';

//

async function turnPagesIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/page.js');

  const { data } = await graphql(`
    {
      pages: allSanityPage {
        nodes {
          title
          slug {
            current
          }
          _id
        }
      }
    }
  `);

  data.pages.nodes.forEach((page) => {
    console.info(`Creating page: "${page.title}"...`);

    const slug = page.slug.current;

    actions.createPage({
      path: slug === 'homepage' ? '/' : slug,
      component: template,
      context: {
        id: page._id,
        slug,
      },
    });
  });
}

//

export async function createPages(params) {
  await turnPagesIntoPages(params);
}
