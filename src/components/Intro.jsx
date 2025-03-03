import React from 'react'
import ProfilePic from "../profilePic.jpeg"
import './Intro.css'
import Resume from '../../src/AR.pdf'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"> I'm <span className='introName'>Athira. C</span><br/>Full Stack Developer</span>
            <p className="introPara">I'm a skilled Full Stack Developer with experience in creating <br/> visually appealing and user friendly websites</p>
            <div className="buttonContainer">
              <a href={Resume} download>
              <button className="button">Download Resume </button>
              </a>
            </div>
        </div>
        {/* <div className="image"> */}
            <img src={ProfilePic} alt="profile pic" className='profilePic'/>
        {/* </div> */}
    </section>
  )
}

export default Intro