import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">
                Home
            </NavLink>
        </header>
    )
}
