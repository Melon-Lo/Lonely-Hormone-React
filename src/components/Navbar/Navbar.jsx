import './Navbar.scss'

// import dependencies
import { nanoid } from 'nanoid'
import { useNavigate, Link } from 'react-router-dom'

// import data
import pagesData from 'data/pagesData'

// import icon
import logoIcon from 'assets/logo.png'
import { ReactComponent as BurgerIcon} from 'assets/icon/burger.svg'
import { ReactComponent as CrossIcon} from 'assets/icon/cross.svg'

// import hook
import { useContext, useState, useEffect } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { windowWidth } = useContext(WindowWidthContext)

  const navigate = useNavigate()

  const pages = pagesData.map(page => (
    <Link key={nanoid()} to={page.href} className='page'>
      {page.title}
    </Link>
  ))

  useEffect(() => {
    if(windowWidth > 768) {
      setIsOpen(false)
    }
  })

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

      { windowWidth > 768 ? 
        // pages: when window width is larger than 768px
        <div className="pagesBox">
          {pages}
        </div> :

        // burger/cross: when window width is smaller than 768px
        <div 
          className="iconBox"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          { isOpen ? 
            <CrossIcon className="icon"/> : <BurgerIcon className="icon" />
          }
        </div>
      }

      {/* when the burger is toggled, show sidebar */}
      <div className={isOpen ? "sideBarBox" : "sideBarBox hidden"}>
        {pages}
      </div>
    </div>
  )
}