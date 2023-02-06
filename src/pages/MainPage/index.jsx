import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import PokeCard from '../../components/PokeCard'
import SideBar from '../../components/SideBar'
import './style.css'
function Main() {
    const { isLoading, data } = useQuery('pokemon-list', async () => {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
        return await result.json()
    });
    if (isLoading) return <h2>Loading...</h2>

    return (
        <>
            <div className='MainPage'>
                <SideBar />
                <ul className='cardGrid'>
                    {data?.results?.map(({ name, url }) => {
                        const arr = url.split("/");
                        const id = arr[arr.length - 2];
                        return <PokeCard key={id} name={name} id={id} />
                    })}
                </ul>
            </div>
        </>
    )
}

export default Main