import './Title.scss'

function Title({content}) {
  return (
    <div className="titleContainer">
      <div className="titleContent">{content}</div>
    </div>
  )
}

export default Title