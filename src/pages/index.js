import * as React from "react"
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const IndexPage = () =>  {
    // const siteTitle = this.props.data.site.siteMetadata.title
    // const posts = this.props.data.allMarkdownRemark.edges
    // const history = this.props.data.allHistoryJson.edges

    return (
        <Layout pageTitle="Úvod">
        <div>
            <blockquote className="motto">
                <p>Kdo nedělá nic pro druhé, nedělá nic pro sebe.</p>
                <footer>Johann Wolfgang von Goethe</footer>
            </blockquote>
        </div>
        </Layout>
    )
}
export default IndexPage