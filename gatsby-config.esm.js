import dotenv from 'dotenv';

//

dotenv.config({ path: '.env' });
const isProd = process.env.NODE_ENV === 'production';

//

export default {
  siteMetadata: {
    title: 'NRG',
    siteUrl: 'http://localhost:8000',
    titleTemplate: 'NRG ° %s',
    description: 'Website Description',
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-axe`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NRG`,
        short_name: `NRG`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#ff0000`,
        display: `standalone`,
        icon: `./src/images/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ff0000`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
  ],
};
