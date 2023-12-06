import './Introduction.scss'

// import dependencies
import clsx from 'clsx'
import { nanoid } from 'nanoid'

// import data
import charactersData from 'data/charactersData'

// import images
import background from 'assets/text_background.png'

// import hook
import { useContext, useEffect } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'
import { EffectContext } from 'context/EffectContext'

export default function Introduction() {
  const { windowWidth } = useContext(WindowWidthContext)
  const { addRemoveAnimationClass } = useContext(EffectContext)

  useEffect(() => {
    addRemoveAnimationClass('headBox left', 'fadeInLeft')
    addRemoveAnimationClass('headBox right', 'fadeInRight')
    addRemoveAnimationClass('headBoxLeft', 'fadeInLeft')
    addRemoveAnimationClass('headBoxRight', 'fadeInRight')
  }, [])

  const characters = (
    <div className="characters">
      {charactersData.map(character => (
        <div key={nanoid()}>
          <div id={character.eng}className="anchor"></div>
          <div className={windowWidth > 768 ? "characterBox" : "smallCharacterBox"}>
            <img src={character.line} alt={character.name + 'LineBg'} className='lineBg' />

            { windowWidth > 768 ?
              // big screen
              <div className={'headBox ' + clsx({'left': character.order % 2 !== 0, 'right fadeInRight': character.order % 2 === 0})}>
                <img src={character.avatar} alt={character.name + 'Avatar'} className='head'/>
              </div> :

              // small screen
              <div className={'headBox' + clsx({'Left left': character.order % 2 !== 0, 'Right right fadeInRight': character.order % 2 === 0})}>
                <img src={character.avatar} alt={character.name + 'Avatar'} className='head'/>
              </div>
            } 
            
            <div className={'introductionBox ' + clsx({right: character.order % 2 !== 0, left: character.order % 2 === 0})}>

              { windowWidth > 768 ?
                // big screen
                <>
                  <div className="name">{character.name}</div>
                  <div className="slogan typing">{character.slogan}</div>
                  <div className="contentBox">
                    <img src={background} alt="background" className='bg' />
                    <div className="content">{character.introduction}</div>
                  </div>
                </> :

                // small screen
                <>
                  <div className={"name" + clsx({Right: character.order % 2 !== 0, Left: character.order % 2 === 0})}>{character.name}</div>
                  <div className={"typing slogan" + clsx({Right: character.order % 2 !== 0, Left: character.order % 2 === 0})}>{character.slogan}</div>
                  <div className="contentBox">
                    <img src={background} alt="background" className={'bg' + clsx({Right: character.order % 2 !== 0, Left: character.order % 2 === 0})} />
                    <div className={"content" + clsx({Right: character.order % 2 !== 0, Left: character.order % 2 === 0})}>{character.introduction}</div>
                  </div>
                </>
              }
              
            </div>
          </div>
        </div>
      ))}    
    </div>
  )

  return (
    <div className="introductionContainer">
      {characters}
    </div>
  )
}