import './Footer.scss'

// import img
import logo from 'assets/logo_TC+EN.png'

// import data
import linksData from 'data/linksData'
import contactData from 'data/contactData'

function Footer() {
  const linkSection = (
    <div className="linkSection">
      {linksData.map(linkItem => (
        <>
          <div key={linkItem.id} className="linkTitle">{linkItem.title}</div>
          <div className="links">
            {linkItem.links.map(link => (
              <a key={link.id} href={link.href} className="link">{link.title}</a>
            ))}
          </div>
        </>
      ))}
    </div>
  )

  const contactSection = (
    <div className="contactSection">
      <div className="contactTitle">{contactData.title}</div>
      <div className="tel">{'電話：' + contactData.tel}</div>
      {contactData.socialMedia.map(socialMedia => (
        <a href={socialMedia.href} className="socialMedia">{socialMedia.title}</a>
      ))}
    </div>
  )

  return (
    <div className="footerContainer">
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

export default Footer