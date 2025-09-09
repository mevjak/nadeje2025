import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {v4} from 'uuid'
import Layout from '../components/layout'
import Sponsor from '../components/sponsor'

const SponsorsPage = () => {
    const data = useStaticQuery(graphql`
        query AllSponsorsQuery {
            allSponsorsJson {
                edges {
                    node {
                        id,
                        name,
                        web,
                        image
                    }
                }
            }
        }
   `)

    return (
        <Layout pageTitle="Sponzoři">
            <div>
                <h1><span>Partneři a sponzoři</span></h1>

                <h2 className="centered">Firmy a podnikatelé</h2>
                <div className="row">
                    {data.allSponsorsJson.edges.map(({node}) => {
                        return (
                            <Sponsor key={v4()} sponsor={node}/>
                        )
                    })}
                </div>

                <br/>

                <h2 className="centered">Dárci</h2>

                <p><i>Rodina Hübnerova, rodina Olsen, manželé Bubeníkovi, manželé Štěpánkovi, manželé Chládkovi,
                    manželé Svárovští, manželé Fouňovi, Lenka Vurmová a Jiří Chlum, Petr Štěpánek ml., Iva Tejnská,
                    Ema Dong, Laďka Štěpánková, paní Fidlerová, paní Zelenková, Simona Veverková, Alexandra Víchová,
                    Šárka Petráňová, Ema Zábrodská, Romana Lakomá, pan Bajus, pan Patrman, Roman Sucharda,
                    Jan Mysliveček, Radek Polák, Vladimír Enge, Robert Bubník, Zdeněk Vodička, Jan Tlapák,
                    Miroslav Balatka, Milan Bělohradský, Stanislav Sluka, Jiří Zeman, Ondra Málek, Radek Duda,
                    Michal Veverka, Miroslav Evják.</i></p>

                <br/>

                <h2 className="centered">Dobrovolníci</h2>

                <p>Na organizaci posledního ročníku Běhu naděje se podíleli naši obětaví kamarádi dobrovolníci:</p>

                <p><i>Zuzana Erlebachová, Honza Fikar ml., Adam Kotus, Aranka Rosíková, Radka Kittlová, Laďka
                    Štěpánková, Petr a Helena Štěpánkovi, Petra Keslová, Jana Petráňová, Šárka Petráňová, Míša a Martin
                    Bouškovi, Michal Rovenský, Zuzka Petráňová, Radek a Bára Petráňovi, Petr Jelínek.</i></p>

            </div>
        </Layout>
    )
}

export default SponsorsPage
