import * as React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import {v4} from 'uuid'
import Layout from '../components/layout'
import Profile from "../components/profile";

const AboutPage = () => {

    const data = useStaticQuery(graphql`
        query ProfilesQuery {
            allProfilesJson {
                edges {
                    node {
                        id,
                        name,
                        description,
                        image
                    } 
                }
            }
        }
    `)

    return (
        <Layout pageTitle="O nás">
            <h1><span>O nás</span></h1>

            <div className="row">
                <div className="col-md-12">
                    <blockquote className="about-us">
                        <p>
                            &ldquo;Rakovina se objevila i v naší rodině stejně jako v mnoha jiných. V té době se ještě
                            pořádaly běhy <strong>Terryho Foxe</strong>. Účast na nich pro mě byla vyjádřením přirozené
                            podpory lidí, kteří onemocněli. Když Běh Terryho Foxe zanikl, nahradil ho <strong>Běh
                            naděje</strong>.
                            Postupně však v regionu ubývalo míst, kde se běhy pořádaly a to mě moc mrzelo.
                        </p>
                        <p>
                            Několik měsíců jsem si pohrávala s myšlenkou uspořádat <strong>Běh naděje</strong> a
                            zjišťovala potřebné informace. Pak jsem oslovila partu kamarádů, se kterými se
                            příležitostně scházíme, zda by do toho se mnou nešli. Velkým hnacím motorem byl Mirek Evják,
                            který sám aktivně běhá a snaží se k tomuto zdravému sportu motivovat své okolí.&rdquo;
                        </p>
                        <footer>
                            <cite title="Noviny Deník Jablonecka">Věra Engeová v Deníku Jablonecka 7. 9. 2013.</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>

            <div className="gallery">

                <h2 className="centered">Náš tým</h2>

                <div className="row">
                    {data.allProfilesJson.edges.map(({node}) => {
                        return (
                            <Profile key={v4()} profile={node}/>
                        )
                    })}
                </div>

                <h2 className="centered">Dobrovolníci</h2>

                <p>Při organizaci našich akcí se neobejdeme bez obětavé pomoci našich kamarádů dobrovolníků:</p>

                <p><i>Věrka Engeová, Vláďa Enge, Kačka, Honza, Martin a Honza ml. Fikarovi, Mireček a Míra Evjákovi,
                    Andy Kotusová, Standa Valenta, Aleš Rydval, Radka Houfková, Radka Kittlová, Aranka Rosíková,
                    Laďka Šťěpánková, Zuzana Erlebachová, Andy Engeová, Andy Rolli, Petra a Terka Keslovky, Petr a
                    Helena Šťěpánkovi,
                    Aleš Kejmar, Šárka Petráňová, Alenka Ducháčková</i></p>

                <p><span className="glyphicon glyphicon-heart" aria-hidden="true"/></p>

            </div>
        </Layout>
    )
}

export default AboutPage