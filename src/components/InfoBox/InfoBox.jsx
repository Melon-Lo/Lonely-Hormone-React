import './InfoBox.scss'

function InfoBox({content, img}) {
  return (
    <div className="infoBoxContainer">
      <img 
        className="img" 
        src={img} 
        alt="img" />
      <div className="text">
        {content}
      </div>
    </div>
  )
}

export default InfoBox