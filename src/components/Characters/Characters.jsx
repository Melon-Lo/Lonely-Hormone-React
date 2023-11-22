import './Characters.scss'

// import dependencies
import { useState } from 'react'

// import data
import charactersData from 'data/charactersData'

// import images
import background from 'assets/bg without people.png'

function scrollToAnchor(anchorName) {
  if(anchorName) {
    let anchorElement = document.getElementById(anchorName)
    if(anchorElement) {
      anchorElement.scrollIntoView({ 
        behavior: "smooth" 
      })
      console.log(anchorName)
    }
  }
}

function showName(characterName) {
  let name = document.getElementById(characterName).id
  let nameBox = document.getElementById(name + 'Name')
  if(nameBox) {
    nameBox.style = 'opacity: 1';
  }
}

function hideName(characterName) {
  let name = document.getElementById(characterName).id
  let nameBox = document.getElementById(name + 'Name')
  if(nameBox) {
    nameBox.style = 'opacity: 0';
  }
}

function Characters() {
  const characters = charactersData.map(character => (
    <div 
      key={character.id}
      id={character.eng + 'Avatar'}
      className="characterBox"
      onClick={() => scrollToAnchor(character.eng)}
    >
      <img 
        className="characterImg" 
        src={character.img} 
        alt={character.name + 'Img'} 
        onMouseEnter={() => showName(character.eng)}
        onMouseLeave={() => hideName(character.eng)}
      />
      <div 
        id={character.eng + 'Name'}
        className="nameBox">
        {character.name}
      </div>
    </div>
  ))

  return (
    <div className="charactersContainer">
      <img src={background} alt="background" className="background" />
      <div className="characters">
        {characters}
      </div>
    </div>
  )
}

export default Characters