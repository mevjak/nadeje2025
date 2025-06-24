import * as React from "react"
import Layout from '../components/layout'
import {Link, withPrefix, graphql} from 'gatsby'
import Article from "../components/article"
import Announcement from "../components/announcement"
import History from "../components/history"

const IndexPage = ({data}) => {

    return (
        <Layout pageTitle="Úvod">
            <div>
                <blockquote className="motto">
                    <p>Kdo nedělá nic pro druhé, nedělá nic pro sebe.</p>
                    <footer>Johann Wolfgang von Goethe</footer>
                </blockquote>

                <div className="carousel">
                    <img src={withPrefix('/images/banner-beh-nadeje.jpg')} className="img-fluid"/>
                    <div className="carousel-caption">
                        <h1>Běh naděje</h1>
                        <p className="subtitle">Sportovně humanitární akce inspirovaná <strong>Během TERRYHO
                            FOXE</strong>.</p>
                        <p><Link className="button" to={'/akce/beh-nadeje'} role="button">Pojďte s námi proti
                            rakovině!</Link></p>
                    </div>
                </div>
                <br/>

                <div className="row">
                    <div className="col-md-9">
                        <h3>Aktuální články</h3>
                        {
                            data.allMdx.nodes.map(node => (
                                <Article key={node.id} article={node}/>
                            ))
                        }
                    </div>
                    <div className="col-md-3 mt-2">
                        <Announcement/>
                        <History/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <nav className="articles-nav">
                            <ul className="pager">
                                <li className="previous">
                                    <Link to={'/clanky/'}>
                                        Všechny články <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default IndexPage

export const query = graphql`
  query {
    allMdx(limit: 5, sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
          author
          description
          featuredImage {
            childImageSharp {
                gatsbyImageData(height: 200, width: 900 transformOptions: {cropFocus: CENTER})
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
