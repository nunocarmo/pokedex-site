import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
function PokeCard({ name, id }) {
    const navigate = useNavigate();
    return (
        <li onClick={() => navigate(`/pokeinfo/${id}`)} className='pokeCard'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='pokemon name' />
            <p>{name}</p>
        </li>
    )
}

export default PokeCard