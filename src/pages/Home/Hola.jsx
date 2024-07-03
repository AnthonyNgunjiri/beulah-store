import React from 'react'
import "./home.css"
function Hola({image,title,description}) {
  return (
    <div className='hola'>
        <section>{image}</section>
        <section className='details'>
            <h3>&#9733;&#9733;&#9733;{title}&#9733;&#9733;&#9733;</h3>
            <p>{description}</p>
        </section>
    </div>
  )
}

export default Hola;
