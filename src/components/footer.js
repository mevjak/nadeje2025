import * as React from "react"
import { Navbar } from 'react-bootstrap'
import Links from './links'

const Footer = () => {

    const thisYear = new Date().getFullYear();

    return (
        <footer className="footer d-flex justify-content-between">
            <a href="https://www.facebook.com/nadeje2011" className="social social-fb" target="_blank">Facebook</a>
            <span className="copyright">© 2011 - { thisYear } Spolek Naděje 2011</span>
        </footer>
    )
}

export default Footer