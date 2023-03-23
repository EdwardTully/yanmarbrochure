import React from 'react'
import NavBar from './NavBar'
import imgOne from './pages/yanmar-YSB-Brochure-part-1.jpg'




function PageOne() {
  return (
    <div className='pageLayout'>
      
      <NavBar />
      <h1>YSB Series Engines</h1>
      <img src={imgOne} width='100%' alt='brochure page one'/>
    
    </div>
    
  )
}

export default PageOne