import React from 'react'
import imgTwo from './pages/yanmar-YSB-Brochure-part-2.jpg'
import NavBar from './NavBar'

function PageTwo() {
  return (
    <div className='pageLayout'>
      
      <NavBar /> 
      <h1>Design Features and Specs</h1>
    <img src={imgTwo} alt='img 2'/>
      
    

    </div>
  )
}

export default PageTwo