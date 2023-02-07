import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import BlueCard from '../../components/BlueCard';
import StatCard from '../../components/StatCard';
import './style.css'

function PokeFullInfo() {
  const { id } = useParams();
  const { isLoading, data } = useQuery('pokemon-list', async () => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return await result.json();
  });





  if (isLoading) return <h2>Loading...</h2>

  return (
    <>
      <div className='cardPageBody'>
        <div className='pokemonCard'>
          <BlueCard data={data} />
          <section className='sectionOne'></section>
          <p className='pokeName'>{data?.name}</p>
          <section className='pokemonBigImg'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
          </section>
          <StatCard data={data} />
          <section className='sectionTwo'></section>
          <div className='types'>
            <p>Types</p>
            <section className='typeList'>
              {data?.types?.map(({ type }, index) => <p key={index}>{type.name}</p>)}
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