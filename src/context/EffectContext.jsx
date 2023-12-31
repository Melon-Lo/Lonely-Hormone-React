import { createContext } from "react";

export const EffectContext = createContext()

export default function EffectProvider({ children }) {
  // scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

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
    const name = document.getElementById(characterName).id
    const imgBox = document.getElementById(name + 'Img')
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
    const name = document.getElementById(characterName).id
    const imgBox = document.getElementById(name + 'Img')
    if(imgBox) {
      imgBox.style = `
        opacity: 0.8;
        transform: scale(1, 1);
      `
    }
  }

  // when the avatar is/isn't hovered, show/hide the character's name
  function showName(characterName) {
    const name = document.getElementById(characterName).id
    const nameBox = document.getElementById(name + 'Name')
    if(nameBox) {
      nameBox.style = 'opacity: 1';
    }
  }

  function hideName(characterName) {
    const name = document.getElementById(characterName).id
    const nameBox = document.getElementById(name + 'Name')
    if(nameBox) {
      nameBox.style = 'opacity: 0';
    }
  }

  // when scrolling to certain elements, show animation based on classNames
  function addRemoveAnimationClassName(className, animationClassName, anchor) {
    const animatedElements = document.getElementsByClassName(className)

    const handleScroll = () => {
      Array.from(animatedElements).forEach(element => {
        let elementAnchor = ''

        if(anchor === "bottom") {
          elementAnchor = element.getBoundingClientRect().bottom
        } else {
          elementAnchor = element.getBoundingClientRect().top
        }

        const windowHeight = window.innerHeight;

        if (elementAnchor < windowHeight) {
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
        scrollToTop,
        scrollToAnchor,
        zoomIn,
        zoomOut,
        showName,
        hideName,
        addRemoveAnimationClassName,
      }}
    >
      {children}
    </EffectContext.Provider>
  )
}