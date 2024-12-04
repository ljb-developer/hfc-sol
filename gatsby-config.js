module.exports = {
  siteMetadata: {
    title: `Hamster Fight Club | hamsterfight.club`,
    description: `The National Institute of Health spent over $3,000,000 to watch hamsters fight on steroids. `,
    author: `HFC Community`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hamster Fight Club | hamsterfight.club`,
        short_name: `HFC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/assets/img/favicon.png`,
      },
    },
  ],
}
