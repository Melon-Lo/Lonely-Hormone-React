import './SocialBox.scss'

// import dependencies
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

// import data
import socialMediaData from 'data/socialMediaData'

// import hook
import { useState, useContext } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function SocialBox() {
  const defaultContext = '點圖，可以更接近我們'
  const [title, setTitle] = useState(defaultContext)
  const { windowWidth } = useContext(WindowWidthContext)

  const socialMediaCollection = socialMediaData.map(media => (
    <Link
      key={nanoid()}
      to={media.href}
    >
      <div 
        key={nanoid()}
        className="iconBox"
        onMouseEnter={() => setTitle(media.title)}
        onMouseLeave={() => setTitle(defaultContext)}
      >
        <img 
          src={media.icon} 
          className="icon" 
          alt="icon" 
        />
      </div>
    </Link>
  ))

  return (
    <div className={windowWidth > 768 ? "socialBoxContainer" : "smallSocialBoxContainer"}>
      <div className="iconTitle">{title}</div>
      <div className="iconBoxes">
        {socialMediaCollection}
      </div> 
    </div>
  )
}