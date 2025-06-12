/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: "Nadeje2011",
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-less",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "data",
                "path": `${__dirname}/src/data/`
            },
            __key: "data"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "images",
                "path": `${__dirname}/src/images/`
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "pages",
                "path": `${__dirname}/src/pages/`
            },
            __key: "pages"
        }
    ]
};