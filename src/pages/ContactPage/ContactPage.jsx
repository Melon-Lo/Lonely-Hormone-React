import './ContactPage.scss'

// import components
import Title from 'components/Title/Title'
import Navbar from 'components/Navbar/Navbar'
import SocialBox from 'components/SocialBox/SocialBox'
import MapBox from 'components/MapBox/MapBox'
import InfoBox from 'components/InfoBox/InfoBox'
import Footer from 'components/Footer/Footer'

// import data
import textData from 'data/textData'

// import img
import happyTogetherImg from 'assets/timeline/happy together.png'

// import hook
import { useEffect, useContext } from 'react'
import { PageContext } from 'context/PageContext'
import { EffectContext } from 'context/EffectContext'
import BackToTopBox from 'components/BackToTopBox/BackToTopBox'

export default function ContactPage() {
  const { setCurrentPage } = useContext(PageContext)
  const { scrollToTop } = useContext(EffectContext)
  const topTitleContent = '社群媒體'
  const midTitleContent = '大本營'
  const btnTitleContent = '最後，別忘了'

  useEffect(() => {
    setCurrentPage('/contact')
    scrollToTop()
  }, [])

  return (
    <div className="contactPageContainer">
      <Navbar />
      <Title content={topTitleContent} />
      <SocialBox />
      <Title content={midTitleContent} />
      <MapBox />
      <Title content={btnTitleContent} />
      <InfoBox img={happyTogetherImg} content={textData.contactWords}/>
      <BackToTopBox />
      <Footer />
    </div>
  )
}