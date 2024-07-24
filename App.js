import React from "react"
import Head from "./components/Head"
import Main from "./components/Main"
import About from "./components/About"
import Interests from "./components/Interests"
import Social from "./components/Social"


export default function App() {
    return (
        <div className="container">
            <Head />
            <Main />
            <About />
            <Interests />
            <Social />
        </div>
    )
}


