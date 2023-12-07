import './SocialBox.scss'

// import icons
import { ReactComponent as FacebookIcon } from 'assets/icon/facebook.svg'
import { ReactComponent as InstagramIcon } from 'assets/icon/instagram.svg'
import { ReactComponent as YoutubeIcon } from 'assets/icon/youtube.svg'
import { ReactComponent as EmailIcon } from 'assets/icon/email.svg'

// import data
import contactData from 'data/contactData'

// import hook
import { useState, useContext } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function SocialBox() {
  const defaultContext = '點選圖示，與我們聯繫。'
  const [title, setTitle] = useState(defaultContext)
  
  const { windowWidth } = useContext(WindowWidthContext)

  return (
    <div className={windowWidth > 768 ? "socialBoxContainer" : "smallSocialBoxContainer"}>
      <div className="iconTitle">{title}</div>
      <div className="iconBoxes">
        <div 
          className="iconBox"
          onMouseEnter={() => setTitle('Facebook')}
          onMouseLeave={() => setTitle(defaultContext)}
        >
          <FacebookIcon 
            className="icon" 
          />
        </div>
        <div 
          className="iconBox"
          onMouseEnter={() => setTitle('Instagram')}
          onMouseLeave={() => setTitle(defaultContext)}
        >
          <InstagramIcon 
            className="icon" 
          />
        </div>
        <div 
          className="iconBox"
          onMouseEnter={() => setTitle('Youtube')}
          onMouseLeave={() => setTitle(defaultContext)}
        >
          <YoutubeIcon 
            className="icon" 
          />
        </div>
        <div 
          className="iconBox"
          onMouseEnter={() => setTitle('寄信給我們吧！')}
          onMouseLeave={() => setTitle(defaultContext)}
        >
          <EmailIcon 
            className="icon" 
          />
        </div>
      </div> 
    </div>
  )
}