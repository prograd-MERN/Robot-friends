import React from 'react'
import'tachyons'
import { robots } from './robots'
const CardComponents = (props) => {
  return (
<React.Fragment>
    <div className='tc helvetica bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ba'>
        <img src={`https://robohash.org/${props.id}?size=200x200`} alt='Image-robot'/>
        <div>
            <h3>{props.name}</h3>
            <p>{props.username}</p>
        </div>
    </div>
</React.Fragment>
  )
}

export default CardComponents