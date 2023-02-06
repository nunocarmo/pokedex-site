import React from 'react'
import './style.css'
function PokeCard({ name, url, id }) {
    return (
        <li className='pokeCard'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='pokemon name' />
            <p>{name}</p>
        </li>
    )
}

export default PokeCard