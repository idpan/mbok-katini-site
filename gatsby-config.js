module.exports = {
  siteMetadata: {
    title: "Warung Makan Mbok Katini",
    siteUrl: `https://www.yourdomain.tld`,
    noHp: "081284799737",

    // https://api.whatsapp.com/send/?phone=
    location: "jl. made no. 39 Pamulang barat kota Tangerang Selatan",
    // (kosan tingkat mama intan), South Tangerang, 15417",
    gofood_link: "https://gofood.link/a/FhwGhuY",
    grabfood_link: "#",
    instagram_link:
      "https://instagram.com/waroengmakan_mbokkatini?igshid=YmMyMTA2M2Y=",
    tiktok_link: "#",
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data_menu",
        path: `${__dirname}/data`,
      },
    },
    "gatsby-transformer-json",
  ],
};
