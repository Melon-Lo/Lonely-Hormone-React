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
import { PageContext } from 'context/PageContext'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { windowWidth } = useContext(WindowWidthContext)
  const { currentPage, setCurrentPage, pathname } = useContext(PageContext)

  const navigate = useNavigate()

  const pages = pagesData.map(page => (
    <Link 
      key={nanoid()} 
      to={page.href} 
      className={currentPage === page.href ? 'activePage' : 'page'}
      onClick={() => {
        setCurrentPage(page.href)
        console.log(currentPage)
      }}
    >
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
        // big screen
        <div className="pagesBox">
          {pages}
        </div> :

        // small screen
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