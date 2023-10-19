import './Introduction.scss'

// import data
import charactersData from 'data/charactersData'

// import icon
import background from 'assets/text_background.png'

function Introduction() {
  const characters = charactersData.map(character => (
    <div key={character.id} className='characterBox'>
      <img src={character.line} alt={character.name + 'LineBg'} className='lineBg' />
      <div className='headBox'>
        <img src={character.avatar} alt={character.name + 'Avatar'} className='head'/>
      </div>
      <div className="introductionBox">
        <div className="name">{character.name}</div>
        <div className="slogan">{character.slogan}</div>
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