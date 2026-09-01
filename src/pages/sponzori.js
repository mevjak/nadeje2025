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
                <h1><span>Děkujeme sponzorům ročníku 2026</span></h1>

                <h2 className="centered">Firmy, podnikatelé a dárci</h2>
                {/*<div className="row">*/}
                {/*    {data.allSponsorsJson.edges.map(({node}) => {*/}
                {/*        return (*/}
                {/*            <Sponsor key={v4()} sponsor={node}/>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</div>*/}
                <p><i>
                    Obec Jiřetín pod Bukovou, Obec Josefův Důl, Pan Mysliveček, Stavební společnost TERMIL, Rodina Petráňova a rodina Havlíkova z USA,
                    MUDr. Karel Stuchlík, Tesařství Smutný, Aleš Zeman – zemní práce, Zewling s.r.o., Sportovní kroužek Albrechtík,
                    Penzion Sněženka, Restaurace Špičák, CS PRO – TEC Praha s.r.o., Michal Veverka, Petr Štěpánek ml.,
                    Laďka Štěpánková, Iva Tejnská, Manželé Štěpánkovi, Paní Charvátová, Věra Engeová, Kominictví Honza Pipek,
                    Hübnerovi – JHR s.r.o., Manželé Bubníkovi, Martin Lukavec, Hospůdka a cukrárna U Voborníků, VESPO Štěpán Vejražka,
                    Roman Sucharda, Penzion Alenka – Klauzovi, Lenka Vurmová a Jirka Chlum, Miroslav Evják, Paní Zelenková,
                    Manželé Svárovští, Miroslav Jelínek, Zdeněk Vodička, Miroslav Balatka, Petr Tichý, Ríša Lurský, Rodina Štrynclova,
                    Václav Fikar, Standa Sluka, Adam Rypl, Jiří Zeman, Kitl s.r.o.
                </i></p>

                <br/>

                <h2 className="centered">Děkujeme všem, kteří přispěli do dražby</h2>

                <p><i>
                    ISR racing, Stavební společnost TERMIL, Zemní práce Aleš Zeman, Huť Marie, Petr Ševčík, Kateřina Bubeníková,
                    Martin Fikar, Šárka Nováková, Ema Zábrodská.

                </i></p>

                <br/>

                <h2 className="centered">Děkujeme dobrovolníkům, kteří pomohli s organizací</h2>

                <p>Na organizaci posledního ročníku Běhu naděje se podíleli naši obětaví kamarádi dobrovolníci:</p>

                <p><i>
                    Josef Kucín, Zuzka Erlebachová, Petr Jelínek, Aranka Rosíková, Radka Kittelová, Petr a Helča Štěpánkovi,
                    Andy a David Januškovi, Jana Petráňová, Laďka Štěpánková, Michal Rovenský, Adam Kotus, Martin Fikar,
                    Honza Fikar ml., Míša Boušková, Šárka Nováková, Alenka Ducháčková, Míša Štrynclová.
                </i></p>

            </div>
        </Layout>
    )
}

export default SponsorsPage
