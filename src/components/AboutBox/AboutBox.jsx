import './AboutBox.scss'

// import img
import groupImg from 'assets/group.jpeg'

// import data
import textData from 'data/textData'

function AboutBox() {
  return (
    <div className="aboutBoxContainer">
      <img className="groupImg" src={groupImg} alt="groupImg" />
      <div className="text">
        {textData.introduction}
      </div>
    </div>
  )
}

export default AboutBox