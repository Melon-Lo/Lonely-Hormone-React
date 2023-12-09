import './Title.scss'

export default function Title({ content }) {
  return (
    <div className="titleContainer">
      <div className="titleContent">{content}</div>
    </div>
  )
}