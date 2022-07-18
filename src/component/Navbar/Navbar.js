import React from 'react'


const Navbar = () => {
  return (
    <>
      <div className="wwe">
        <div id="navbar">
          <div id="logo">
            <span>Shoes-World</span>
          </div> 
          <div id="right">
          <button className='btnn'>Log In</button>
          <button className='btnn'>Sign Up</button>
          <button className='btnn'>Shop Now</button>

          </div>

          <div id="center">
         
            <input className="searchbar" type="search" placeholder="Please do search here" aria-label="Search" />
          </div>
         
        </div>
      </div>

    </>
  )
}

export default Navbar