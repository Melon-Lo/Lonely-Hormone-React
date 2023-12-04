import './MainPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import Characters from 'components/Characters/Characters'
import Title from 'components/Title/Title'
import Introduction from 'components/Introduction/Introduction'
import Footer from 'components/Footer/Footer'

export default function MainPage() {
  return (
    <div className="mainPageContainer">
      <Navbar />
      <Characters />
      <Title content={'人物介紹'}/>
      <Introduction />
      <Footer />
    </div>
  )
}