import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="full--navbar">
            <div className="logo">
            <img src="../images/logo.png" className="nav--logo"/>
                Logo
            </div>
            <nav className="list-items">
                <ul className="ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/str2">Stranka2</Link>
                    </li>
                    <li>
                        <Link to="/str3">Stranka3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
    
}

export default Navbar