import path from "path";

//

async function turnPagesIntoGatsbyPages({ graphql, actions }) {
  const template = path.resolve("./src/templates/pages.js");

  const { data } = await graphql(`
    {
      pages: allStrapiPages {
        nodes {
          title
          slug
          strapiId
        }
      }
    }
  `);

  data.pages.nodes.forEach((page) => {
    const { title, slug, id } = page;

    // eslint-disable-next-line no-console
    console.info(`⚡ Creating page: [${id}] ${title} (${slug})`);

    actions.createPage({
      path: slug === "homepage" ? "/" : slug,
      component: template,
      context: {
        id,
        slug,
      },
    });
  });
}

//

export async function createPages(params) {
  await turnPagesIntoGatsbyPages(params);
}
