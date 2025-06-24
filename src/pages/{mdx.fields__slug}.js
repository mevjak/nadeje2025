import * as React from 'react'
import Layout from '../components/layout'
import {Link, withPrefix, graphql} from 'gatsby'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import ArticleMeta from "../components/article-meta";
const BlogPost = ({ data, children }) => {

    const image = getImage(data.mdx.frontmatter.featuredImage)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <h1><span>Články</span></h1>

            <article>
                <div className="row">
                    <div className="col-md-12">
                        <p className="featured-image">
                            <GatsbyImage image={image} alt="Featured image" />
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="page-content">
                            <h2>{data.mdx.frontmatter.title}</h2>

                            <ArticleMeta article={data.mdx}/>

                            {children}

                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}


export default BlogPost


export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
          author
          description
          featuredImage {
            childImageSharp {
                gatsbyImageData(height: 500, width: 1200 transformOptions: {cropFocus: CENTER})
            }
          }
        }
    }
  }
`
