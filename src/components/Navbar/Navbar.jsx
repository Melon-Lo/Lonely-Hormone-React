import './Navbar.scss'

// import data
import pagesData from 'data/pagesData'

// import icon
import logoIcon from 'assets/logo.png'

function Navbar() {
  const pages = pagesData.map(page => (
    <a key={page.key} href={page.href}className='page'>
      {page.title}
    </a>
  ))

  return (
    <div className="navBarContainer">
      <div className="logoBox">
        <img className="logoIcon" src={logoIcon} alt="logo_icon" />
      </div>
      <div className="pagesBox">
        {pages}
      </div>
    </div>
  )
}

export default Navbar