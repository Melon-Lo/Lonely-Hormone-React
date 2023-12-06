import './BackToTopBox.scss'

// import icon
import upIcon from 'assets/icon/up-arrow.svg'

// import hook
import { useState, useEffect, useContext } from 'react'
import { EffectContext } from 'context/EffectContext'

export default function BackToTopBox() {
  const [isHover, setIsHover] = useState(false)
  const { scrollToTop, addRemoveAnimationClassName } = useContext(EffectContext)
  console.log(isHover)

  useEffect(() => {
    addRemoveAnimationClassName("backToTopBoxContainer", "slideIn")
  }, [])

  return (
    <div 
      className="backToTopBoxContainer"
      onClick={scrollToTop}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img className="upIcon" src={upIcon} alt="upIcon" />
      { isHover && 
        <div className="content">回到頂部</div>
      }
    </div>
  )
}