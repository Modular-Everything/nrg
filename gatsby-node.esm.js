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
    const { title, slug, strapiId } = page;

    // eslint-disable-next-line no-console
    console.info(`⚡ Creating page: [${strapiId}] ${title} (${slug})`);

    actions.createPage({
      path: slug === "homepage" ? "/" : slug,
      component: template,
      context: {
        strapiId,
        slug,
      },
    });
  });
}

//

export async function createPages(params) {
  await turnPagesIntoGatsbyPages(params);
}
