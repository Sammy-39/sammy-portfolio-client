import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"

import mypic from "./img/sammy-pic.jpg"

const Profile = () => {
  const animeText = "iSolve • iCode • iDevelop"
    
  const [text,setText] = useState("")
  const [index,setIndex] = useState(0)

  useEffect(()=>{
    const timerID = setInterval( () => {animateText()}, 400)

    return () => {clearInterval(timerID)}
  })
     
  const animateText = () => {
      if (index === 23) {
        setTimeout(() => {
          setIndex(0)
        },2000)
      }
      setIndex(index+1)
      setText(animeText.slice(0,index))
  }

  return (
    <div className="profile">

      <img className="mypic" src={mypic} alt="" />

      <div className="hi">
        <p>Hello </p>
        <span role="img" className="emoji" aria-label="Wave">👋🏻</span>
      </div>

      <div className="name">
        <h2>I am Madasamy Pandiarajan</h2>
      </div>

      <div className="anime-text">
        <small>{text}</small>
        <i className="fa fa-i-cursor" aria-hidden="true"></i>
      </div>

      <div className="me">
        <p data-aos='fade-up'>Fullstack (MERN) developer from Madurai, Tamil Nadu.</p>
      </div>

      <div className="learn-more" data-aos='fade-up'>
        <p>
          Learn more <Link className="a" to="/about">about me</Link> or check out <Link className="a" to="/project">my work</Link>
        </p>
      </div>
    </div>
  )
}


export default Profile
