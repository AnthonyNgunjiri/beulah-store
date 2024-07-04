import React from 'react'

function Productlist({id,image,name,price}) {
  return (
    <div>
        <section className='image'>{image}</section>
       <span className='details'>
       <p>{name}</p>
       <p>price</p>
       </span>
        
      
    </div>
  )
}

export default Productlist;
