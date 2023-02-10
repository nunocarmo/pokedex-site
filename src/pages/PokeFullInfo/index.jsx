import React from 'react'
import { gql, useQuery as useQueryApollo } from '@apollo/client'
import { useParams } from 'react-router-dom'
import BlueCard from '../../components/BlueCard';
import StatCard from '../../components/StatCard';
import './style.css'

function PokeFullInfo() {
  const { id } = useParams();
  const FULL_POKEMON_INFO_QUERY = gql`query getFullInfoOfPokemon {
    pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`
  const { isLoading, data } = useQueryApollo(FULL_POKEMON_INFO_QUERY);
  if (isLoading) return <h2>Loading...</h2>
  return (
    <>
      <div className='cardPageBody'>
        <div className='pokemonCard'>
          <BlueCard data={data?.pokemon_v2_pokemon[0]} />
          <section className='sectionOne'></section>
          <p className='pokeName'>{data?.pokemon_v2_pokemon[0]?.name}</p>
          <section className='pokemonBigImg'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
          </section>
          <StatCard data={data?.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats} />
          <section className='sectionTwo'></section>
          <div className='types'>
            <p>Types</p>
            <section className='typeList'>
              {data?.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes?.map(({ pokemon_v2_type }, index) => <p key={index}>{pokemon_v2_type.name}</p>)}
            </section>
          </div>
          <section className='square'>
            <section className='diamond'>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='pokemon name' />
            </section>
          </section>
          <></>
        </div>
      </div>
    </>
  )




  /* return (
    <>
      <div className='infoGrid'>
        <section className='pokemonBigImg'>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
          <p>{data?.name}</p>
        </section>

        <div>
          <StatCard data={data} />
        </div>
        <BlueCard data={data} />
        <div className='types'>
          <p>Types</p>
          <section className='typeList'>
            {data?.types?.map(({ type }, index) => <div key={index} style={{ backgroundColor: TypesColorEnum[type.name] }}>{type.name}</div>)}
          </section>
        </div>
      </div>
    </> 
  )*/
}

export default PokeFullInfo