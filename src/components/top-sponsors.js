import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {v4} from 'uuid'
import Sponsor from './sponsor'

const TopSponsors = () => {

    const data = useStaticQuery(graphql`
        query TopSponsorsQuery {
            allSponsorsJson(limit: 6) {
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
        <div className="container-outer container-outer-partners">
            <div className="container">

                <h3><span>Partneři a sponzoři</span></h3>

                <div className="row">
                    {data.allSponsorsJson.edges.map(({node}) => {
                        return (
                            <Sponsor key={v4()} sponsor={node}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopSponsors