import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {v4} from 'uuid'

const History = () => {

    const data = useStaticQuery(graphql`
      query HistoryQuery {
        allHistoryJson {
          edges {
            node {
              eventYear
              participantCount
              moneyRaised
            }
          }
        }
      }
   `)

    const totalAmount = () => {
        let total = 0;

        data.allHistoryJson.edges.forEach(({node}) => {
            total += node.moneyRaised
        })

        return total
    }

    const formatMoney = (value) => {
        return new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK" }).format(value)
    }

    return (
        <div className="banner border border-1 rounded">
            <h4 className="text-center">Historie běhů v Jiřetíně p.B.</h4>
            <table className="table mb-0">
                <thead>
                <tr>
                    <th>Rok</th>
                    <th style={{ textAlign: 'right' }}>Účastníků</th>
                    <th style={{ textAlign: 'right' }}>Výtěžek</th>
                </tr>
                </thead>
                <tbody>
                { data.allHistoryJson.edges.map(({ node }) => {
                    return (
                        <tr key={v4()}>
                            <td>{node.eventYear}</td>
                            <td style={{ textAlign: 'right' }}>
                                {node.participantCount}
                            </td>
                            <td style={{ textAlign: 'right' }}>
                                {formatMoney(node.moneyRaised)}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
                <tfoot>
                <tr>
                    <th colSpan={2}>Celkem</th>
                    <th style={{textAlign: 'right'}}>
                        {formatMoney(totalAmount())}
                    </th>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default History
