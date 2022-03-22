import React from 'react'
import  './Item.css'
function Item({id,albumId,title,thumbnailUrl}) {
  return (
    <div className='card '>
           <p>{"Album ID : " +albumId}</p>
           <p>{"Id: "+id}</p>
           <h3>{title}</h3>
           <img src={thumbnailUrl} alt='video'/>
    </div>
  )
}

export default Item