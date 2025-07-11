/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: "Nadeje2011",
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
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
                "path": `${__dirname}/static/images/`
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
        },
        "gatsby-plugin-less",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                headers: {
                    "/*": [
                        "Cache-Control: public, max-age=0, must-revalidate"
                    ],
                    "/static/*": [
                        "Cache-Control: public, max-age=31536000, immutable"
                    ]
                }
            }
        } // make sure to keep it last in the array
    ]
};
