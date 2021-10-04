import dotenv from "dotenv";

//

dotenv.config({ path: ".env" });

//

export default {
  siteMetadata: {
    title: "NRG",
    siteUrl: "http://localhost:8000",
    titleTemplate: "NRG ° %s",
    description: "Website Description",
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-axe`,
    `gatsby-plugin-sitemap`,
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
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        collectionTypes: ["pages"],
        queryLimit: 1000,
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
      resolve: "gatsby-plugin-svgr-svgo",
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
  ],
};
