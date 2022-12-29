import React from "react"
import Header from "../Header/header";
import './_layout.scss'

export default function Layout({children, location}) {
    console.log(location)
    return (
        <div className="layout-container">
            <div className='layout-container__top'>
                <Header/>
                <main style={{margin: `0 auto`, maxWidth: 1100, padding: `0 1rem`}}>
                    {children}
                </main>
            </div>
            <div className="layout-container__bottom"></div>
        </div>
    )
}