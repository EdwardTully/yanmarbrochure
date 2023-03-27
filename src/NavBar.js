import React from 'react'
<<<<<<< HEAD
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
=======
import { useNavigate,Link } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
   
  return (
    <div>
        <ul className='navbar'>
        <li><button onClick={()=>navigate('/pagetwo')}>Back</button></li>
        <li className='indexButton'><Link to='/contents'>Table of Contents</Link></li>
        <li><button onClick={()=>navigate('/pagefour')}>Forward</button></li>
        
>>>>>>> e4df83e9f62fd18f3ed49e57ce9db385216f9f5c
      </ul>
    </nav>
  )
}

export default NavBar