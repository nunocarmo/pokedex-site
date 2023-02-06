import React from 'react'
import './style.css'
function StatCard({ data }) {
  const arr = new Array(16).fill(null);
  return (
    <>
      <div className='statCard'>
        {data?.stats?.map(({ base_stat, stat }, index) => {
          return (
            <section key={index}>
              <div className='stat' style={{ height: `${base_stat}px` }}></div>
              <p>{stat.name}</p>
            </section>
          )
        })}
      </div>
      <div className='hiddenCard'>
        {arr.map((a, index) => { return <div key={index * 10} className='line'></div> })}
      </div>
    </>
  )
}

export default StatCard