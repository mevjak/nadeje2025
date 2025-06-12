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

                <br/><br/>

                {/*<h2 className="centered">Dobří lidé</h2>*/}
                {/*<p className="text-center">*/}
                {/*    <i>*/}
                {/*        Iva Tejnská, Miroslav Balatka, Jakub a Daniela Charvátovi,*/}
                {/*        Ladislava Štěpánková, manželé Bubníkovi, Milena Zelenková,*/}
                {/*        Vladimír Enge, manželé Svárovští, manželé Hrunkovi, manželé Hudíkovi,*/}
                {/*        Veronika Bělonožníková, Simona Veverková, Hynek Šebek, Šotek, Pedro.*/}
                {/*    </i>*/}
                {/*</p>*/}

            </div>
        </Layout>
    )
}

export default SponsorsPage