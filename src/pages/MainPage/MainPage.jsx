import './MainPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import Characters from 'components/Characters/Characters'
import Title from 'components/Title/Title'
import Introduction from 'components/Introduction/Introduction'
import BackToTopBox from 'components/BackToTopBox/BackToTopBox'
import Footer from 'components/Footer/Footer'

// import hook
import { useEffect, useContext } from 'react'
import { PageContext } from 'context/PageContext'
import { EffectContext } from 'context/EffectContext'

export default function MainPage() {
  const { setCurrentPage } = useContext(PageContext)
  const { scrollToTop } = useContext(EffectContext)

  useEffect(() => {
    setCurrentPage('/main')
    scrollToTop()
  }, [])

  return (
    <div className="mainPageContainer">
      <Navbar />
      <Characters />
      <Title content={'人物介紹'}/>
      <Introduction />
      <BackToTopBox />
      <Footer />
    </div>
  )
}