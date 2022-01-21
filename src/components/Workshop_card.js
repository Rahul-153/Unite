
import React from 'react'
import '../Styles/workshop_card.css'

function Card(props)
{
    const { src, topic, desc, objective, src2, name, cred } = props.obj
    return (
      <>
        <div id='temp'>
          <div className='workshop_container'>
            
            <div
              className='workshop_cover'
              style={{
                backgroundImage: `url('${src}')`,
              }}
            ></div>

            <div className='workshop_title'>
              {' '}
              <b> {topic}</b>
            </div>

            <div className='workshop_body'>
              <div>{desc}</div>

              <div className='center'>
                <b>Objectives:</b>
                <br />

                <ul>
                  {objective.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </ul>
              </div>
            </div>

            <div className='workshop_author'>
              <img src={src2}></img>

              <div>
                <div className='author_name'>
                  <b>{name}</b>
                </div>
                <div className='author_cred'>{cred}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )

}

export default Card