module.exports = {
  siteMetadata: {
    title: `Hiome`,
    description: `Rethink what your smart home can do with true occupancy sensing that just works.`,
    keywords: [`occupancy sensor`, `presence detection`, `smart home`, `home automation`],
    author: `Hiome Inc`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#6F3CD1"
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hiome`,
        short_name: `Hiome`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true
      }
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `hiome.com`
      },
    }
  ],
}
