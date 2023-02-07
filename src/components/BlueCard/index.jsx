import React from 'react'
import './style.css'
function BlueCard({ data }) {
  return (
    <div className='blueCard'>
      <span>Height: <span>{data?.height * 10} cm</span></span>
      <span>Weight: <span>{data?.weight / 10} kg</span></span>
    </div>
  )
}

export default BlueCard