import React from 'react'
import '../Styles/contribute_card.css'

function Card(props) {
  const { src, title, desc } = props.obj
  return (
    <>
      <div className='contribute_container'>
        <div id='contribute_img_container'>
          <img src={src} alt='SOS' />
        </div>
        <div className='contribute_title'>{title}</div>
        <div className='contribute_desc'>{desc}</div>
      </div>
    </>
  )
}
export default Card
