import './Introduction.scss'

// import dependencies
import clsx from 'clsx'

// import data
import charactersData from 'data/charactersData'

// import images
import background from 'assets/text_background.png'

function Introduction() {
  const characters = charactersData.map(character => (
    <div id={character.eng} key={character.id} className='characterBox'>
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
  ))

  return (
    <div className="introductionContainer">
      <div className="title">人物介紹</div>
      <div className="characters">
        {characters}
      </div>
    </div>
  )
}

export default Introduction