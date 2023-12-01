import './Characters.scss'

// import dependencies
import {nanoid} from 'nanoid'

// import data
import charactersData from 'data/charactersData'

// import images
import background from 'assets/bg without people.png'

// when the avatar is clicked, scroll to the clicked character

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

// when the avatar is/isn't hovered, zoom in/out the character

function zoomIn(characterName) {
  let name = document.getElementById(characterName).id
  let imgBox = document.getElementById(name + 'Img')
  if(imgBox) {
    imgBox.style = `
      opacity: 1;
      transform: scale(1.1, 1.1);
      transform-origin: bottom center;
      cursor: pointer;
    `
  }
}

function zoomOut(characterName) {
  let name = document.getElementById(characterName).id
  let imgBox = document.getElementById(name + 'Img')
  if(imgBox) {
    imgBox.style = `
      opacity: 0.8;
      transform: scale(1, 1);
    `
  }
}

// when the avatar is/isn't hovered, show/hide the character's name

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
  // this order is only for "Characters" component
  const newOrder = [charactersData[2], charactersData[1], charactersData[0], charactersData[3], charactersData[4]]

  const characters = newOrder.map(character => (
    <div 
      key={nanoid()}
      id={character.eng + 'Avatar'}
      className="characterBox"
      onClick={() => scrollToAnchor(character.eng)}
      onMouseEnter={() => {
        showName(character.eng)
        zoomIn(character.eng)
      }}
      onMouseLeave={() => {
        hideName(character.eng)
        zoomOut(character.eng)
      }}
    >
      <img 
        id={character.eng + 'Img'}
        className="characterImg" 
        src={character.img} 
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
    <div className="charactersContainer">
      <img src={background} alt="background" className="background" />
      <div className="characters">
        {characters}
      </div>
    </div>
  )
}

export default Characters