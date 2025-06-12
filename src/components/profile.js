import * as React from 'react'
import { withPrefix } from 'gatsby'

const Profile = ({ profile }) => {
    return (
        <div className="col-lg-4" style={{minHeight: '350px'}}>
            <img className="img-circle" src={withPrefix('/images/team/' + profile.image)} style={{ width: '210px', height: '210px' }}/>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile