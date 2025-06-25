import React, { useState } from 'react'
import './Works.css'
import Calculator from'../calculator.png'
import ImageSlider from '../ImageSlider.png'
import MusicPlayer from '../musicplayer.png'
import Weather from '../weather.png'
import DigitalClock from '../digitalclock.png'
import MoodTracker from '../moodtracker.png'
import FruitVoting from '../fruitvoting.png'
import HabitTracker from '../HabitTracker.png'
import BookRelease from '../BookRelease.png'
const Works = () => {
  const images = [
    {src:Calculator, alt: 'img1', link:'https://athira2499.github.io/Calculator-app/'},
    {src:ImageSlider, alt: 'img2', link: 'https://athira2499.github.io/Image-Slider-Level2/'},
    {src:MusicPlayer, alt: 'img3', link: 'https://athira2499.github.io/MusicPlayer/'},
    {src:Weather, alt: 'img4', link: 'https://athira2499.github.io/WeatherApp-React/'},
    {src:DigitalClock, alt: 'img5', link: 'https://athira2499.github.io/Digital-Clock/'},
    {src:MoodTracker, alt: 'img6', link: 'https://athira2499.github.io/Mood-Tracker/'},
    {src:FruitVoting, alt: 'img7', link: 'https://athira2499.github.io/Fruit-Voting/'},
    {src:HabitTracker, alt: 'img8', link: 'https://athirahabittracker.netlify.app/'},
    {src:BookRelease, alt: 'img9', link: 'https://aathirabookreleaseapp.netlify.app/'},
  ];

  const [visibleImages, setVisibleImages]=useState(3);

  const loadImages=()=>{
    setVisibleImages(visibleImages + 3);
  }
  return (
    <>
    <section id="works">
    <h2 className="worksTitle">My Portfolio</h2>
    <span className="worksDesc">I paid attention to even the small details and made the projects user friendly as possible</span>
    <div className="worksImgs">
    {images.slice(0, visibleImages).map((image,index)=>(
      <a key={index} href={image.link}>
        <img src={image.src} alt={image.alt} className='worksImg'/>
      </a>
    ))}
    </div>
    {visibleImages<images.length && (
      <button className="workBtn" onClick={loadImages}>See More</button>
    )}
    </section>
    </>
  )
}

export default Works