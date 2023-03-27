import React from 'react'
import { useNavigate } from 'react-router'
import TableContents from './TableContents'


function Home() {

const navigate = useNavigate()
  return (
    
        <div className="App">
      <div>
        <h1 className='frontTitle'>Yanmar YSB-8 & YSB-12 Marine Diesel Sailboat Engine Literature</h1>
        <TableContents />
        
     </div>
     <button className='salesCall' onClick={()=>navigate('/contactsales')}>Contact Your Sales Team</button>
    </div>
  )
}

export default Home