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
  const [isToggledBefore, setIsToggledBefore] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [className, setClassName] = useState('')
  const { windowWidth } = useContext(WindowWidthContext)
  const { currentPage, setCurrentPage } = useContext(PageContext)

  const navigate = useNavigate()

  // when closing sidebar, change the className from "slideOut" to "hidden" after 1s
  useEffect((e) => {
    const changeClassName = () => {

      // sidebar is hidden at first
      if(!isToggledBefore) {
        return setClassName('hidden')
      }

      setClassName('slideOut')
      setTimeout(() => {
        setClassName('hidden')
      }, 1000)
    }

    changeClassName()
  }, [isOpen])

  // if sidebar is open and screen width is larger than 768px, close the sidebar
  useEffect(() => {
    const closeSideBar = () => {
      if(windowWidth > 768) {
        setIsOpen(false)
      }
    }
    
    closeSideBar()
  })

  // render pages
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
            setIsToggledBefore(true)
            setIsOpen(!isOpen)
          }}
        >
          { isOpen ? 
            <CrossIcon className="cross"/> : <BurgerIcon className="burger " />
          }
        </div>
      }

      {/* when the burger is toggled, show sidebar */}
      <div className={isOpen ? "sideBarBox slideIn" : "sideBarBox " + className}>
        {pages}
      </div>
    </div>
  )
}