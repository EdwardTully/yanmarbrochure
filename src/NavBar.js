import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

   
  return (
    <nav>
      
       <ul className='navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/contents/:id'>Index</NavLink>
          <NavLink to='/contents/1'>Page One</NavLink>
          <NavLink to= '/contents/2'>Page Two</NavLink>
          <NavLink to='/contents/3'>Page Three</NavLink>
          <NavLink to='/contents/4'>Page Four</NavLink>
      </ul>
    </nav>
  )
}

export default NavBar