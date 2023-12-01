import './Introduction.scss'

// import dependencies
import clsx from 'clsx'
import {nanoid} from 'nanoid'

// import data
import charactersData from 'data/charactersData'

// import images
import background from 'assets/text_background.png'

function Introduction() {
  const characters = (
    <div className="characters">
      {charactersData.map(character => (
        <div id={character.eng} key={nanoid()} className='characterBox'>
          <img src={character.line} alt={character.name + 'LineBg'} className='lineBg' />
          <div className={'headBox ' + clsx({'left fadeInLeft': character.id % 2 !== 0, 'right fadeInRight': character.id % 2 === 0})}>
            <img src={character.avatar} alt={character.name + 'Avatar'} className='head'/>
          </div>
          <div className={'introductionBox ' + clsx({right: character.id % 2 !== 0, left: character.id % 2 === 0})}>
            <div className="name">{character.name}</div>
            <div className="slogan typing">{character.slogan}</div>
            <div className="contentBox">
              <img src={background} alt="background" className='bg' />
              <div className="content">{character.introduction}</div>
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

export default Introduction