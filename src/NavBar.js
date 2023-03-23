import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    let navigate = useNavigate()

    function handleClick(){
      navigate(1)
    }
    function handleClickBack(){
      navigate(-1)
    }
  return (
    <div>
        <ul className='navbar'>
        <li><button onClick={handleClickBack}>Page Back</button></li>
        <li><button onClick={handleClick}>Page Forward</button></li>
        
      </ul>
    </div>
  )
}

export default NavBar