import React from 'react'
import './style.css'
function BlueCard({ data }) {
  return (
    <div className='blueCard'>
      <p>Height: <span>{data?.height * 10} cm</span></p>
      <p>Weight: <span>{data?.weight / 10} kg</span></p>
    </div>
  )
}

export default BlueCard