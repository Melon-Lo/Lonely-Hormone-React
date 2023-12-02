import './InfoBox.scss'

// import img
import groupImg from 'assets/group.jpeg'



function InfoBox({content}) {
  return (
    <div className="infoBoxContainer">
      <img className="groupImg" src={groupImg} alt="groupImg" />
      <div className="text">
        {content}
      </div>
    </div>
  )
}

export default InfoBox