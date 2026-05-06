import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Announcement = () => {

    const data = useStaticQuery(graphql`
        query ConstantsQuery {
            allDataJson {
                edges {
                    node {
                        nextEventYear,
                        nextEventDate,
                        moneyRaisedYear,
                        moneyRaised
                    }
                }
            }
        }
   `)

    return (
        <div>
            <div className="banner border border-1 rounded">
                <h4 className="text-center">Běh naděje {data.allDataJson.edges[0].node.nextEventYear}</h4>
                <p className="lead">{data.allDataJson.edges[0].node.nextEventDate}</p>
            </div>

            <div className="banner border border-1 rounded">
                <h4 className="text-center">Výtěžek sbírky {data.allDataJson.edges[0].node.moneyRaisedYear}</h4>
                <p className="lead">{data.allDataJson.edges[0].node.moneyRaised}</p>
            </div>
        </div>
    )
}

export default Announcement
