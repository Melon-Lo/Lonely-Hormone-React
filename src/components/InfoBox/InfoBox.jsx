import './InfoBox.scss'

export default function InfoBox({content, img}) {
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