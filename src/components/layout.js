import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import TopSponsors from './top-sponsors';

import '../assets/styles/main.less'

const Layout = ({ pageTitle, children }) => {

    const siteData = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
    `)

    return (
        <div>
            <Helmet>
                <title>{ siteData.site.siteMetadata.title } - { pageTitle} </title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
                <link rel="canonical" href="https://www.nadeje2011.cz" />
            </Helmet>

            <div className="container-outer container-outer-nav">
                <Header/>
            </div>
            <div className="container-outer">
                <div className="container container-content">
                    {children}
                </div>
            </div>
            <TopSponsors/>
            <div className="container-outer container-outer-footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Layout