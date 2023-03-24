import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
   
  return (
    <div>
        <ul className='navbar'>
        <li><button onClick={()=>navigate('/pagetwo')}>Back</button></li>
        <li className='indexButton'><Link to='/contents'>Table of Contents</Link></li>
        <li><button onClick={()=>navigate('/pagefour')}>Forward</button></li>
        
      </ul>
    </div>
  )
}

export default NavBar