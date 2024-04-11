import React from 'react'
import './Header.css'

const Header = () => {
  const Pages = ["Home", "About", "Blog", "Contact", "Help"]
  return (

    <header>
      <div className="container">
        <div className="header_box">
          <h2>грузовик</h2>
          <ul className='ulHeader'>
            {
              Pages.map((value, index) => {
                return <li className='headerItem'>{value}</li>
              })
            }
            
          </ul>
        </div>
      </div>
      
    </header>
  )
}

export default Header
