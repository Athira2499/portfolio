import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <>
    <section className="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I'm a skilled Full Stack Developer with experience in creating visually appealing and user friendly websites</span>
        <div className="skillBars">
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Creates websites and web applications including simple abd complex pages</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Front-End Programming</h2>
                    <p>Focuses on the visual aspect of the application, including the UI</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Back-End Programming</h2>
                    <p>Focuses on the server-side functionality, including databases and security</p>
                </div>
            </div>
        </div>
    </section>
    </>  )
}

export default Skills