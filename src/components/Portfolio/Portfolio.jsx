import './Portfolio.scss'

// import dependencies
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

// import data
import portfolioData from 'data/portfolioData'

// import hook
import { useContext } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'
import { SectionContext } from 'context/SectionContext'

export default function Portfolio() {
  const navigate = useNavigate()
  const { windowWidth } = useContext(WindowWidthContext)
  const { sliceData } = useContext(SectionContext)

  // show 3 items per section
  const currentPortfolio = sliceData(portfolioData, 3)

  const works = currentPortfolio.map(workItem => (
    <div key={nanoid()} className="workItem">
      <div className="videoBox">
        <iframe 
          className="video" 
          src={workItem.src} 
          title="youtubeVideoPlayer">
        </iframe>
      </div>
      <div className="text">
        <div 
          className="title"
          onClick={() => navigate(workItem.src)}
        >
          {workItem.title}
        </div>
        <div className="description">{workItem.description}</div>
      </div>
    </div>
  ))

  return (
    <div className={ windowWidth > 768 ? "portfolioContainer" : "smallPortfolioContainer"}>
      {works}
    </div>
  )
}