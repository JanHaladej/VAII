import React from "react"

export default function Navbar() {
    return (
        <nav>
            <div className="nav--spacing">
            <img src="../images/logo.png" className="nav--logo"/>
            <h1>Stranka na VAII</h1>
            </div>
            <ul className="nav--items">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            
        </nav>
    )
}