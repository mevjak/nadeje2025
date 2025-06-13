import * as React from "react"
import { Link } from 'gatsby'

const Links = () => {
    return (
        <ul className="nav navbar-nav">
            <li className="nav-item"> <Link to={'/'} className="nav-link">Úvod</Link></li>
            <li className="nav-item"><Link to={'/clanky/'} className="nav-link">Články</Link></li>
            <li className="nav-item"><Link to={'/akce/beh-nadeje/'} className="nav-link">Akce</Link></li>
            <li className="nav-item"><Link to={'/sponzori/'} className="nav-link">Sponzoři</Link></li>
            <li className="nav-item"><Link to={'/o-nas/'} className="nav-link">O nás</Link></li>
            <li className="nav-item"><Link to={'/kontakt/'} className="nav-link">Kontakt</Link></li>
        </ul>
    )
}

export default Links