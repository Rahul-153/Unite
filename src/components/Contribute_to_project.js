import React from 'react'
import Card from './Contribute_card'
import '../Styles/contribute_container.css'

import {data} from './data_contri'
function App()
{
    return (
      <>
        <center>
          <h1 id="project-heading">PROJECTS </h1>
          <div className='contri_container'>
            {
            data.ar.map((item,index)=>{
              //const {id,src,title,desc}=item
              return(
              <Card key={item.id} obj={item} />
              )
            })
          }
          </div>
        </center>
      </>
    )
  
}

export default App