import './SocialBox.scss'

// import icons
import { ReactComponent as FacebookIcon } from 'assets/icon/facebook.svg'
import { ReactComponent as InstagramIcon } from 'assets/icon/instagram.svg'
import { ReactComponent as YoutubeIcon } from 'assets/icon/youtube.svg'
import { ReactComponent as EmailIcon } from 'assets/icon/email.svg'

// import data
import contactData from 'data/contactData'

export default function SocialBox() {
  return (
    <div className="socialBoxContainer">
      <div className="iconBox">
        <FacebookIcon 
          className="icon" 
        />
      </div>
      <div className="iconBox">
        <InstagramIcon 
          className="icon" 
        />
      </div>
      <div className="iconBox">
        <YoutubeIcon 
          className="icon" 
        />
      </div>
      <div className="iconBox">
        <EmailIcon 
          className="icon" 
        />
      </div>
    </div>
  )
}