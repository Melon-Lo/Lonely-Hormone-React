import './BackToTopBox.scss'

// import icon
import upIcon from 'assets/icon/up-arrow.svg'

// import hook
import { useState, useEffect, useContext } from 'react'
import { EffectContext } from 'context/EffectContext'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function BackToTopBox() {
  const [isHover, setIsHover] = useState(false)
  const { scrollToTop, addRemoveAnimationClassName } = useContext(EffectContext)
  const { windowWidth } = useContext(WindowWidthContext)
  const content = '回到頂部'

  // make sure the box is on the right position
  function confirmPosition() {
    const box = document.querySelector('.backToTopBoxContainer')
    if(box) {
      if(windowWidth > 768) {
        box.style = 'bottom: 180px;'
      } else {
        box.style = 'bottom: 250px;'
      }
    }
  }

  useEffect(() => {
    addRemoveAnimationClassName("backToTopBoxContainer", "slideIn")
    confirmPosition()
  }, [windowWidth])

  return (
    <div 
      className="backToTopBoxContainer"
      onClick={() => {
        scrollToTop()
        setIsHover(false)
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img className="upIcon" src={upIcon} alt="upIcon" />
      { isHover && 
        <div className="content">{content}</div>
      }
    </div>
  )
}