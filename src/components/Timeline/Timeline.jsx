import './Timeline.scss'

// import dependencies
import {nanoid} from 'nanoid'

// import data
import timelineData from 'data/timelineData'

// import img
import bg from 'assets/text_background.png'

function Timeline() {
  const timeline = timelineData.map(timelineEvent => (
    <div key={nanoid()} className="timelineBox">
      <div className="leftInfo">
        <div className="circle"></div>
        <div className="dateBox">
          <div className="year">
            {timelineEvent.year}
          </div>
          <div className="date">
            {timelineEvent.date}
          </div>
        </div>
      </div>
      <div className="rightInfo">
        <img src={timelineEvent.img} alt="infoImg" className="infoImg" />
        <div className="text">
          <img className="textBg" src={bg} alt="textBg" />
          <div className="title">
            {timelineEvent.title}
          </div>
          <div className="description">
            {timelineEvent.description}
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="timelineContainer">
      {timeline}
    </div>
  )
}

export default Timeline