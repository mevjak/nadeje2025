import * as React from "react"
import Layout from '../components/layout'
import {Link, withPrefix, graphql} from 'gatsby'
import Article from "../components/article"

const ArticlesPage = ({data}) => {
    return (
        <Layout pageTitle="Články">
            <h1><span>Články</span></h1>

            <div className="row">
                <div className="col-md-12">
                    {
                        data.allMdx.nodes.map(node => (
                            <Article key={node.id} article={node}/>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default ArticlesPage


export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
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
        id
        fields {
            slug
        }
      }
    }
  }
`
