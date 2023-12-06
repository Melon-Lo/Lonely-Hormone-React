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

  // when scrollingt to certain elements, show animation based on classNames
  function addRemoveAnimationClass(className, animationClassName) {
    const animatedElements = document.getElementsByClassName(className);

    const handleScroll = () => {
      Array.from(animatedElements).forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add(animationClassName);
        } else {
          element.classList.remove(animationClassName);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  return (
    <EffectContext.Provider
      value={{
        scrollToAnchor,
        zoomIn,
        zoomOut,
        showName,
        hideName,
        addRemoveAnimationClass,
      }}
    >
      {children}
    </EffectContext.Provider>
  )
}