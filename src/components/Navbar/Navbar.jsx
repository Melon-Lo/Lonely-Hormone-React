import './Navbar.scss'

// import dependencies
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

// import data
import pagesData from 'data/pagesData'

// import icon
import logoIcon from 'assets/logo.png'

// import hook
import { useContext, useState } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'


function Navbar() {
  const [type, setType] = useState('navbar')
  const [isToggled, setIsToggled] = useState(false)
  const { windowWidth } = useContext(WindowWidthContext)

  const navigate = useNavigate()

  const pages = pagesData.map(page => (
    <a key={nanoid()} href={page.href}className='page'>
      {page.title}
    </a>
  ))

  console.log(windowWidth)

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