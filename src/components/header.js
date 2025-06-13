import * as React from "react"
import {Link} from 'gatsby'
import Links from './links'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to={'/'}>Naděje 2011</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <Links/>
            </div>
        </nav>

    )
}

export default Header