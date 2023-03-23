import React from 'react'
import NavBar from './NavBar'
import imgFour from './pages/yanmar-YSB-Brochure-part-4.jpg'

function PageFour() {
  return (
    <div className='pageLayout'>
      
      <NavBar/>
      <h1>Accessories and Contact Information</h1>
        <img src={imgFour} width='100%' height='max-height' title='brochure page four' alt='four'/>
    </div>
  )
}

export default PageFour