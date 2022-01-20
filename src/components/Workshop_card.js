
import React from 'react'
import '../Styles/workshop_card.css'

function Card()
{
    //const { src, title, desc } = props.obj;
    return (
      <>
        <div className='enclose'>
          <div className='workshop_container'>
            <div
              className='workshop_cover'
              style={{
                backgroundImage:
                  'url(https://www.sessionlab.com/wp-content/uploads/WARP-remote-retrospective-cover.png)',
              }}
            ></div>

            <div className='workshop_title'> WARP Remote Retrospective</div>
            <div className='workshop_body'>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                qui iure eaque reiciendis laudantium hic ratione magnam
                blanditiis alias quasi.
              </div>

              <div className='center'>
                <b>Objectives:</b>

                <ul>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, laboriosam?</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, laboriosam?</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, laboriosam?</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, laboriosam?</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, laboriosam?</li>
                </ul>
              </div>
            </div>
            <div className='workshop_author'>
              <div className='author_img'>
                
              </div>

              <div className='author_name'></div>
              <div className='author_cred'></div>
            </div>
          </div>
        </div>
      </>
    )

}

export default Card