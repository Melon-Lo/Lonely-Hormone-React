import './Footer.scss'

// import dependencies
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

// import img
import logo from 'assets/logo_TC+EN.png'

// import data
import pagesData from 'data/pagesData'
import socialMediaData from 'data/socialMediaData'

// import hook
import { useContext } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function Footer() {
  const { windowWidth } = useContext(WindowWidthContext)
  const pageTitle = '頁面快轉'
  const contactTitle = '社群媒體'

  // render pageSection
  const linkSection = (
    <div className="section">
      <div className="sectionTitle">{pageTitle}</div>
      <div className="linkCollection">
        {pagesData.map(page => (
          <Link 
            key={nanoid()} 
            to={page.href} 
            className="link"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  )

  // render contactSection
  const contactSection = (
    <div className="section">
      <div className="sectionTitle">{contactTitle}</div>
      <div className="linkCollection">
        {socialMediaData.map(socialMedia => 
          <Link
            key={nanoid()}
            to={socialMedia.href}
            className="link"
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