module.exports = {
  siteMetadata: {
    title: `Andrew Sosa`,
    description: `Software & DataOps Engineer @ L3Harris Technologies | Full stack web dev enthusiast.`,
    author: `andrewsosa`,
  },
  plugins: [
    `gatsby-plugin-flow`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `main`,
        path: `${__dirname}/src/content/main`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-source-github-api`,
    //   options: {
    //     token: process.env.GITHUB_BEARER,
    //     variables: {},
    //     graphQLQuery: fs.readFileSync('./github.gql').toString(),
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-plugin-sass`,
    // `gatsby-plugin-mdx`,
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `GitHub`,
    //     fieldName: `github`,
    //     // Url to query from
    //     url: `https://api.github.com/graphql`,
    //     // HTTP headers
    //     headers: {
    //       // Learn about environment variables: https://gatsby.dev/env-vars
    //       Authorization: `bearer ${process.env.GITHUB_GRAPHQL_TOKEN}`,
    //     },
    //     // Additional options to pass to node-fetch
    //     fetchOptions: {},
    //   },
    // },
    // {
    //   resolve: `gatsby-source-dev`,
    //   options: {
    //     // This is your username on Dev.to
    //     username: `andrewsosa`,
    //   },
    // },
  ],
};
