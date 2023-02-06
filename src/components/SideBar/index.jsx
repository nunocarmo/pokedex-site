import React from 'react'
import "./style.css"

function SideBar() {
    return (
        <nav id='sideBar'>
            <label htmlFor="pokemon-search">Search Pokemon Name</label>
            <input type="text" name='pokemon-search' />
        </nav>
    )
}

export default SideBar