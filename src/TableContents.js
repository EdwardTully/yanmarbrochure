import React from 'react'
import {Link} from 'react-router-dom'

function TableContents() {
  return (
    <div>
        <ul className='index'>
            <Link to='/pageone'>The YSB Series</Link>
            <Link to='/pagetwo'>Design Features and YSB-8 Dimensions</Link>
            <Link to='/pagethree'>YSB-12 Dimensions</Link>
            <Link to='/pagefour'>Accessories and Contact Information</Link>
        </ul>

    </div>
    
  )
}

export default TableContents