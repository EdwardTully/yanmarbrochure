import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'

function TableContents() {
  return (
    <div>
        <NavBar/>
        <ul className='index'>
            <Link to='/'>Home</Link>
            <Link to='/contents/1'>The YSB Series</Link>
            <Link to='/contents/2'>Design Features and YSB-8 Dimensions</Link>
            <Link to='/contents/3'>YSB-12 Dimensions</Link>
            <Link to='/contents/4'>Accessories and Export Information</Link>
        </ul>

    </div>
    
  )
}

export default TableContents