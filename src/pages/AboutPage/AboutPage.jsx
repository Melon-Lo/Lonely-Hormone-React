import './AboutPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import InfoBox from 'components/InfoBox/InfoBox'
import Title from 'components/Title/Title'
import Timeline from 'components/Timeline/Timeline'
import BackToTopBox from 'components/BackToTopBox/BackToTopBox'
import Footer from 'components/Footer/Footer'

// import data
import textData from 'data/textData'

// import img
import bg from 'assets/cover.png'

// import hook
import { useEffect, useContext } from 'react'
import { PageContext } from 'context/PageContext'
import { EffectContext } from 'context/EffectContext'

export default function AboutPage() {
  const { setCurrentPage } = useContext(PageContext)
  const { scrollToTop } = useContext(EffectContext)

  useEffect(() => {
    setCurrentPage('/about')
    scrollToTop()
  }, [])

  return (
    <div className="aboutPageContainer">
      <Navbar />
      <InfoBox 
        content={textData.introduction}
        img={bg}
      />
      <Title content={'重大紀事'}/>
      <Timeline />
      <BackToTopBox />
      <Footer />
    </div>
  )
}