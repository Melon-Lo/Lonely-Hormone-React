import './StepBox.scss'

// import icon
import rightArrow from 'assets/icon/right-arrow.svg'
import leftArrow from 'assets/icon/left-arrow.svg'

// import hook
import { useContext } from 'react'
import { SectionContext } from 'context/SectionContext'
import { EffectContext } from 'context/EffectContext'

export default function StepBox() {
  const { currentSection, totalSections, toNextSection, toPrevSection } = useContext(SectionContext)
  const { scrollToTop } = useContext(EffectContext)

  return (
    <div className="stepBoxContainer">
      <div className="box iconBox">
        { currentSection !== 1 &&
            <img 
            className="icon" 
            src={leftArrow} 
            alt="leftArrow" 
            onClick={() => {
              toPrevSection()
              scrollToTop()
            }}
          />
        }
      </div>
      <div className="box numberBox">
        {currentSection} / {totalSections}
      </div>
      <div className="box iconBox">
        { currentSection !== totalSections &&
          <img 
            className="icon" 
            src={rightArrow} 
            alt="leftArrow" 
            onClick={() => {
              toNextSection()
              scrollToTop()
            }}
          />
        }
      </div>
    </div>
  )
}