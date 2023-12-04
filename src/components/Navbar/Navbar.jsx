import './Navbar.scss'

// import dependencies
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

// import data
import pagesData from 'data/pagesData'

// import icon
import logoIcon from 'assets/logo.png'
import { ReactComponent as BurgerIcon} from 'assets/icon/burger.svg'

// import hook
import { useContext, useState } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'


export default function Navbar() {
  const basename = process.env.PUBLIC_URL

  const [type, setType] = useState('navbar')
  const [isToggled, setIsToggled] = useState(false)
  const { windowWidth } = useContext(WindowWidthContext)

  const navigate = useNavigate()

  const pages = pagesData.map(page => (
    <a key={nanoid()} href={basename + page.href} className='page'>
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

      { windowWidth > 768 ? 
        // pages: when window width is larger than 768px
        <div className="pagesBox">
          {pages}
        </div> :

        // burger: when window width is smaller than 768px
        <div 
          className="burgerBox"
          onClick={() => {
            setIsToggled(!isToggled)
          }}
        >
          <BurgerIcon 
            className="burger"
          />
        </div>
      }

      {/* when the burger is toggled, show sidebar */}
      { isToggled && 
        <div className="sideBarBox">
          {pages}
        </div>
       } 
    </div>
  )
}