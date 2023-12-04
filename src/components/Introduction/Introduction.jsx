import './Introduction.scss'

// import dependencies
import clsx from 'clsx'
import { nanoid } from 'nanoid'

// import data
import charactersData from 'data/charactersData'

// import images
import background from 'assets/text_background.png'

// import hook
import { useContext } from 'react'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function Introduction() {
  const { windowWidth } = useContext(WindowWidthContext)

  const characters = (
    <div className="characters">
      {charactersData.map(character => (
        <div id={character.eng} key={nanoid()} className={windowWidth > 768 ? "characterBox" : "smallCharacterBox"}>
          <img src={character.line} alt={character.name + 'LineBg'} className='lineBg' />
          { windowWidth > 768 ?
            <div className={'headBox ' + clsx({'left fadeInLeft': character.order % 2 !== 0, 'right fadeInRight': character.order % 2 === 0})}>
              <img src={character.avatar} alt={character.name + 'Avatar'} className='head'/>
            </div> :
            <div className={'headBox' + clsx({'Left left fadeInLeft': character.order % 2 !== 0, 'Right right fadeInRight': character.order % 2 === 0})}>
              <img src={character.avatar} alt={character.name + 'Avatar'} className='head'/>
            </div>
          } 
          
          <div className={'introductionBox ' + clsx({right: character.order % 2 !== 0, left: character.order % 2 === 0})}>
            { windowWidth > 768 ?
              <>
                <div className="name">{character.name}</div>
                <div className="slogan typing">{character.slogan}</div>
                <div className="contentBox">
                  <img src={background} alt="background" className='bg' />
                  <div className="content">{character.introduction}</div>
                </div>
              </> :
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
      ))}    
    </div>
  )

  return (
    <div className="introductionContainer">
      {characters}
    </div>
  )
}