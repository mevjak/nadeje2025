import * as React from "react"
import Layout from '../components/layout'
import {Link, withPrefix, graphql } from 'gatsby'
import Announcement  from "../components/announcement"
import History from "../components/history"

const IndexPage = ({data}) => {
    // const posts = this.props.data.allMarkdownRemark.edges
    // const history = this.props.data.allHistoryJson.edges

    return (
        <Layout pageTitle="Úvod">
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
            <div className="row">
                <div className="col-md-9">
                    <h3>Aktuální články</h3>
                </div>
                <div className="col-md-3">
                    <Announcement/>

                    <History/>

                </div>



            </div>
        </Layout>
    )
}
export default IndexPage

