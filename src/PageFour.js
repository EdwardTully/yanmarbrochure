import React from 'react'
import NavBar from './NavBar'
import imgFour from './pages/yanmar-YSB-Brochure-part-4.jpg'

function PageFour() {
 

  return (
    <div className='pageLayout'>
       <div>
       
     <NavBar/>
   </div>
    
      <h1>Accessories and Export Information</h1>
        <img src={imgFour} width='100%' height='max-height' title='brochure page four' alt='four'/>
    </div>
  )
}

export default PageFour