import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";

const NotFoundPage = () => {
    return (
        <Layout pageTitle="Stránka neexistuje">
        <div>
            <h1><span>404 - Stránka neexistuje</span></h1>
            <p>Zkontrolujte, zda jste zadali požadovanou adresu správně.</p>
            <p><Link to={'/'}>Zpět na úvodní stránku</Link></p>
        </div>
        </Layout>
    )
}

export default NotFoundPage