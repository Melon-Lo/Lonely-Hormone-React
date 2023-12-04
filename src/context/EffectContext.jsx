import { createContext } from "react";

export const EffectContext = createContext()

export default function EffectProvider({ children }) {

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

  return (
    <EffectContext.Provider
      value={{
        scrollToAnchor,
        zoomIn,
        zoomOut,
        showName,
        hideName,
      }}
    >
      {children}
    </EffectContext.Provider>
  )
}