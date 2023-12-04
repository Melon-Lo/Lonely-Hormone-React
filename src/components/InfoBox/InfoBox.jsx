import './InfoBox.scss'

// import hook
import { useContext } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function InfoBox({content, img}) {
  const { windowWidth } = useContext(WindowWidthContext)

  return (
    <div className={windowWidth > 768 ? "infoBoxContainer" : "smallInfoBoxContainer"}>
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