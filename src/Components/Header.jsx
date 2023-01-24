import React from 'react'
import img from '../Images/Troll Face.png'

const Header = () => {
  return (
    <header className="header">
    <img 
        src={img} 
        className="header--image"
    />
    <h2 className="header--title">Meme Generator</h2>
    <h4 className="header--project">React Project </h4>
</header>
  )
}

export default Header