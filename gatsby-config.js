module.exports = {
  siteMetadata: {
    title: `Anthony Nguyen's blog`,
    name: `Anthony Nguyen's Blog`,
    siteUrl: `https://blog.anthonynguyen.io`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `👋 Hi, I'm Anthony. This is where I'll be sharing ideas.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/anthonyn60`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/anthonyguyen94/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
