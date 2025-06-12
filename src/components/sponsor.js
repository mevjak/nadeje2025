import * as React from 'react'
import { withPrefix } from 'gatsby'

const Sponsor = ({ sponsor }) => {
    return (
        <div className="col-md-2" style={{minHeight: '155px'}}>
            <a href={sponsor.web} className="thumbnail" target="_blank">
                <div className="sponsor"><img src={withPrefix('/images/sponsor/' + sponsor.image)} /></div>
            </a>
            <div className="caption">
                <h4>{sponsor.name}</h4>
            </div>
        </div>
    )
}

export default Sponsor