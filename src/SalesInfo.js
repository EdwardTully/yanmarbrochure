import React from 'react'

import { Link, Outlet } from 'react-router-dom'

function SalesInfo() {
  return (
    <div>
        <h2>Select Region</h2>
        <ul>
            <Link to='americas'>The Americas</Link><br/>
            <Link to ='asianpacific'>Asia Pacific</Link>
        </ul>

   <Outlet/>
    </div>
  )
}

export default SalesInfo