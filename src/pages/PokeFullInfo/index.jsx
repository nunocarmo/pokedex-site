import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import BlueCard from '../../components/BlueCard';
import StatCard from '../../components/StatCard';
import './style.css'

const TypesColorEnum = {
  fire: "#fd7d24",
  psychic: "#f366b9",
  grass: "#9bcc50",
  poison: "#b97fc9",
  flying: "#86a6af",
  ice: "#51c4e7",
  water: "#4592c4",
  eletric: "#eed535",
  rock: "#a38c21",
  bug: "#729f3f",
  normal: "#a4acaf",
  fighting: "#d56723",
}

function PokeFullInfo() {
  const { id } = useParams();
  const { isLoading, data } = useQuery('pokemon-list', async () => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return await result.json();
  });





  if (isLoading) return <h2>Loading...</h2>

  return (
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
  )
}

export default PokeFullInfo