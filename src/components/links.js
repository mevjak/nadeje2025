import * as React from "react"
import { Link } from 'gatsby'

const Links = ({ dir }) => {
    const navClassName = 'nav navbar-nav navbar-' + dir;

    return (
        <ul className={navClassName}>
            <li><Link to={'/'} className="link">Úvod</Link></li>
            <li><Link to={'/clanky/'} className="link">Články</Link></li>
            <li><Link to={'/akce/beh-nadeje/'} className="link">Akce</Link></li>
            <li><Link to={'/sponzori/'} className="link">Sponzoři</Link></li>
            <li><Link to={'/o-nas/'} className="link">O nás</Link></li>
            <li><Link to={'/kontakt/'} className="link">Kontakt</Link></li>
        </ul>
    )
}

export default Links