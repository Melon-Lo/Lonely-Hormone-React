import './SocialBox.scss'

// import dependencies
import { nanoid } from 'nanoid'

// import data
import socialMediaData from 'data/socialMediaData'

// import hook
import { useState, useContext } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function SocialBox() {
  const defaultContext = '點選圖示，與我們聯繫。'
  const [title, setTitle] = useState(defaultContext)
  const { windowWidth } = useContext(WindowWidthContext)

  const socialMediaCollection = socialMediaData.map(media => (
    <div 
      key={nanoid()}
      className="iconBox"
      onMouseEnter={() => setTitle(media.title)}
      onMouseLeave={() => setTitle(defaultContext)}
    >
      <img src={media.icon} className="icon" alt="icon" />
    </div>
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