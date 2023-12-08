import './Introduction.scss'

// import dependencies
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import TypeIt from "typeit-react"

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
  const { addRemoveAnimationClassName } = useContext(EffectContext)
  const sloganSpeed = 100
  const introSpeed = 30

  useEffect(() => {
    addRemoveAnimationClassName('headBox left', 'fadeInLeft')
    addRemoveAnimationClassName('headBox right', 'fadeInRight')
    addRemoveAnimationClassName('headBoxLeft', 'fadeInLeft')
    addRemoveAnimationClassName('headBoxRight', 'fadeInRight')
    addRemoveAnimationClassName('nameRight', 'fadeInRight')
    addRemoveAnimationClassName('nameLeft', 'fadeInLeft')
  }, [])

  const characters = (
    <div className="characters">
      {charactersData.map(character => (
        <div key={nanoid()}>
          {/* this anchor is for scrolling to the certain position*/}
          <div id={character.eng}className="anchor"></div>

          {/* characterBox */}
          <div className={windowWidth > 768 ? "characterBox" : "smallCharacterBox"}>
            <img src={character.line} alt={character.name + 'LineBg'} className='lineBg' />

            {/* headBox */}
            { windowWidth > 768 ?
              ////////// screen > 768px
              <div className={'headBox ' + clsx({'left': character.order % 2 !== 0, 'right fadeInRight': character.order % 2 === 0})}>
                <img src={character.head} alt={character.name + 'Avatar'} className='head'/>
              </div> :

              ////////// screen <= 768px
              <div className={'headBox' + clsx({'Left left': character.order % 2 !== 0, 'Right right fadeInRight': character.order % 2 === 0})}>
                <img src={character.head} alt={character.name + 'Avatar'} className='head'/>
              </div>
            } 
            
            {/* introductionBox */}
            <div className={'introductionBox ' + clsx({right: character.order % 2 !== 0, left: character.order % 2 === 0})}>
              { windowWidth > 768 ?
                ////////// screen > 768px
                <>
                  <div className="name">{character.name}</div>
                  <div className="slogan">
                    <TypeIt
                      options={{
                        speed: sloganSpeed,
                        waitUntilVisible: true,
                      }}
                    >
                      {character.slogan}
                    </TypeIt>
                  </div>
                  <div className="contentBox">
                    <img src={background} alt="background" className='bg' />
                    <TypeIt
                      options={{
                        speed: introSpeed,
                        waitUntilVisible: true,
                      }}
                    >
                      <div className="content">{character.introduction}</div>
                    </TypeIt>
                    
                  </div>
                </> :

                ////////// screen <=  768px
                <>
                  <div className={"name" + clsx({Right: character.order % 2 !== 0, Left: character.order % 2 === 0})}>{character.name}</div>
                  <div className={"slogan" + clsx({Right: character.order % 2 !== 0, Left: character.order % 2 === 0})}>
                    <TypeIt
                      options={{
                        speed: sloganSpeed,
                        waitUntilVisible: true,
                      }}
                    >
                      {character.slogan}
                    </TypeIt>
                  </div>
                  <div className="contentBox">
                    <img src={background} alt="background" className={'bg' + clsx({Right: character.order % 2 !== 0, Left: character.order % 2 === 0})} />
                    <div className={"content" + clsx({Right: character.order % 2 !== 0, Left: character.order % 2 === 0})}>
                      <TypeIt
                        options={{
                          speed: introSpeed,
                          waitUntilVisible: true,
                        }}
                      >
                        {character.introduction}
                      </TypeIt>
                    </div>
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