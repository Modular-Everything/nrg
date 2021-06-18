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

async function turnPostsIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/post.js');

  const { data } = await graphql(`
    {
      posts: allSanityPost {
        nodes {
          title
          slug {
            current
          }
          _id
        }
      }
    }]
  `);

  data.posts.nodes.forEach((post) => {
    console.info(`Creating post: "${post.title}"...`);

    const slug = post.slug.current;

    actions.createPage({
      path: `news/${slug}`,
      component: template,
      context: {
        id: post._id,
        slug,
      },
    });
  });
}

//

export async function createPages(params) {
  await turnPagesIntoPages(params);
  await turnPostsIntoPages(params);
}
