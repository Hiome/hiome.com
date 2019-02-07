module.exports = {
  siteMetadata: {
    title: `Hiome`,
    description: `Put your smart home on autopilot with a brain that learns your habits and proactively controls your home for you.`,
    author: `Hiome Inc`,
    prices: {
      core: 375,
      door: 120
    },
    stripe_key: `pk_live_GGLAckmkxax3TR04QeipRU7G`,
  },
  plugins: [
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
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-117181574-1`,
        head: false,
        anonymize: true,
      },
    }
  ],
}
