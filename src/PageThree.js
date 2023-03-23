import React from 'react'
import NavBar from './NavBar'
import imgThree from './pages/yanmar-YSB-Brochure-part-3.jpg'

function PageThree() {
  return (
    <div className='pageLayout'>
     
      <NavBar/>
      <h1>Design Features and Specs</h1>
        <img src={imgThree} width='100%' height='max-height' title='brochure page three' alt='three'/>
    </div>
  )
}

export default PageThree