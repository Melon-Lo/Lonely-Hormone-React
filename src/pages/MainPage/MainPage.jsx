import './MainPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import Characters from 'components/Characters/Characters'
import Introduction from 'components/Introduction/Introduction'

function MainPage() {
  return (
    <>
      <Navbar />
      <Characters />
      <Introduction />
    </>
  )
}

export default MainPage