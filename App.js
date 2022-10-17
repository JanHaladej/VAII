import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import Stranka2 from "./pages/Stranka2"
import Stranka3 from "./pages/Stranka3"

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Str2" component={Stranka2} />
                <Route path="/Str3" component={Stranka3} />
            </Switch>
        </Router>
    )
}