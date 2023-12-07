import './Footer.scss'

// import dependencies
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

// import img
import logo from 'assets/logo_TC+EN.png'

// import data
import linksData from 'data/linksData'
import socialMediaData from 'data/socialMediaData'

// import hook
import { useContext } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function Footer() {
  const { windowWidth } = useContext(WindowWidthContext)
  const contactTitle = '社群媒體'

  const linkSection = (
    <div className="linkSection">
      {linksData.map(linkItem => (
        <div key={nanoid()}>
          <div className="linkTitle">{linkItem.title}</div>
          <div className="links">
            {linkItem.links.map(link => (
              <Link 
                key={nanoid()} 
                to={link.href} 
                className="link"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const contactSection = (
    <div className="contactSection">
      <div className="contactTitle">{contactTitle}</div>
      <div className="socialMediaCollection">
        {socialMediaData.map(socialMedia => 
          <Link
            key={nanoid()}
            to={socialMedia.href}
            className="socialMedia"
          >
            {socialMedia.title}
          </Link>
        )}
      </div>
    </div>
  )

  return (
    <div className={ windowWidth > 768 ? "footerContainer" : "smallFooterContainer"}>
      <div className="leftFooter">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="rightFooter">
        {linkSection}
        {contactSection}
      </div>
    </div>
  )
}