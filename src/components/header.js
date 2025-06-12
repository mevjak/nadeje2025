import * as React from "react"
import { Link } from 'gatsby'
import { Navbar } from 'react-bootstrap'

import Links from './links'

const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Link className="navbar-brand" to={'/'}>Naděje 2011</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Links dir={'right'}/>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header