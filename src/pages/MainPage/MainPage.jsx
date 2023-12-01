import './MainPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import Characters from 'components/Characters/Characters'
import Introduction from 'components/Introduction/Introduction'
import Footer from 'components/Footer/Footer'

function MainPage() {
  return (
    <>
      <Navbar />
      <Characters />
      <Introduction />
      <Footer />
    </>
  )
}

export default MainPage