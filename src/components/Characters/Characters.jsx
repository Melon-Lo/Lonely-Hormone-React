import './Characters.scss'

// import dependencies
import { nanoid } from 'nanoid'

// import data
import charactersData from 'data/charactersData'

// import img
import background from 'assets/bg without people.png'

// import hook
import { useContext } from 'react'
import { EffectContext } from 'context/EffectContext'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function Characters() {
  // this order is only for "Characters" component
  const newOrder = [charactersData[2], charactersData[1], charactersData[0], charactersData[3], charactersData[4]]

  // import context
  const { scrollToAnchor, zoomIn, zoomOut, showName, hideName } = useContext(EffectContext)
  const { windowWidth } = useContext(WindowWidthContext)

  // render characters
  const characters = newOrder.map(character => (
    <div 
      key={nanoid()}
      id={character.eng + 'Avatar'}
      className="characterBox"
      onClick={() => scrollToAnchor(character.eng)}
      onMouseEnter={() => {
        if(windowWidth > 768) {
          showName(character.eng)
          zoomIn(character.eng)
        }
      }}
      onMouseLeave={() => {
        if(windowWidth > 768) {
          hideName(character.eng)
          zoomOut(character.eng)
        }
      }}
    >
      <img 
        id={character.eng + 'Img'}
        className="characterImg" 
        src={windowWidth > 768 ? character.avatar : character.head} 
        alt={character.name + 'Img'} 
      />
      <div 
        id={character.eng + 'Name'}
        className="nameBox"
      >
        {character.name}
      </div>
    </div>
  ))

  return (
    <div className={windowWidth > 768 ? "charactersContainer" : "smallCharactersContainer"}>
      <img src={background} alt="background" className="background" />
      <div className="characters">
        {characters}
      </div>      
    </div>
  )
}