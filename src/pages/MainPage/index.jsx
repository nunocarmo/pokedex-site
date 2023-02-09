import { gql, useQuery as useQueryApollo } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import PokeCard from '../../components/PokeCard'
import SideBar from '../../components/SideBar'
import './style.css'

function Main() {
    const navigate = useNavigate();
    const [URLSearchParams, SetURLSearchParams] = useSearchParams();
    const { page } = useParams();
    let skip = false;
    const [isSearching, setIsSearching] = useState(false);
    const itemsPerPage = 20;
    const PAGE_QUERY = gql`query samplePokeAPIquery {
        pokemon_v2_pokemon(offset: ${(page - 1) * itemsPerPage}, limit: ${itemsPerPage}) {
          id
          name
        }
      }
`
    const SEARCH_QUERY = gql`query searchPokemon {
    pokemon_v2_pokemon(where: {name: {_regex: "${URLSearchParams.get("name")}"}}) {
      name
      id
    }
  }
`
    const { isLoading, data } = useQueryApollo(handleQuerys());

    function handleQuerys() {
        if (isSearching || page.includes("search")) return SEARCH_QUERY;
        return PAGE_QUERY;
    }

    function searchHandle(input) {
        if (input === "") return;
        navigate(`/search?name=${input}`)
        setIsSearching(true)
    }
    function resetHandle() {
        setIsSearching(false);
        navigate(`/1`);
    }
    function renderPokemonList() {
        return data?.pokemon_v2_pokemon?.map(({ name, id }) => {
            if (skip) return
            if (name === "gimmighoul-roaming") skip = true;
            return <PokeCard key={id} name={name} id={id} />
        })
    }

    return (
        <>
            {page <= 0 ? <Navigate to="/1" /> : null}
            <div className='MainPage'>
                <SideBar searchHandle={searchHandle} resetHandle={resetHandle} />
                <div className='pokemonListContainer'>
                    <ul className='cardGrid'>
                        {renderPokemonList()}
                    </ul>
                    <div>
                        <button disabled={Number(page) === 1 || isSearching} className='pageButton buttonStyle' onClick={() => navigate(`/${Number(page) - 1}`)}>Previous</button>
                        <button disabled={Number(page) === 64 || isSearching} className='pageButton buttonStyle' onClick={() => navigate(`/${Number(page) + 1}`)}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Main