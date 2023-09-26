
import React from 'react'
import Header from './Header'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="App">
            <Header title="Dealer Pro" />
            <Nav />
            <Outlet />
        </div>
    )
}

export default Layout
