import './Navbar.scss'

// import dependencies
import {nanoid} from 'nanoid'
import { useNavigate } from 'react-router-dom'

// import data
import pagesData from 'data/pagesData'

// import icon
import logoIcon from 'assets/logo.png'

function Navbar() {
  const navigate = useNavigate()

  const pages = pagesData.map(page => (
    <a key={nanoid()} href={page.href}className='page'>
      {page.title}
    </a>
  ))

  return (
    <div className="navBarContainer">
      <div 
        className="logoBox" 
        onClick={() => {
          navigate("/main")
        }}
      >
        <img 
          className="logoIcon" 
          src={logoIcon} alt="logo_icon" 
        />
      </div>
      <div className="pagesBox">
        {pages}
      </div>
    </div>
  )
}

export default Navbar