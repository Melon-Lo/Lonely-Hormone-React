import './Portfolio.scss'

// import dependencies
import {nanoid} from 'nanoid'

// import data
import portfolioData from 'data/portfolioData'

function Portfolio() {
  const works = portfolioData.map(workItem => (
    <div key={nanoid()} className="workItem">
      <div className="videoBox">
        <iframe className="video" src={workItem.src} frameborder="0" title="youtubeVideoPlayer"></iframe>
      </div>
      <div className="text">
        <div className="title">{workItem.title}</div>
        <div className="description">{workItem.description}</div>
      </div>
    </div>
  ))

  return (
    <div className="portfolioContainer">
      {works}
    </div>
  )
}

export default Portfolio