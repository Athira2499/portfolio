import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <h1 className='myName'>ATHIRA.C</h1>
        <div className="desktopmenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='button' onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>Contact Me</button>
    </nav>
    </>
  )
}

export default Navbar