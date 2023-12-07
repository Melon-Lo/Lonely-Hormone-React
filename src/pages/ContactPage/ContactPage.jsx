import './ContactPage.scss'

// import components
import Title from 'components/Title/Title'
import Navbar from 'components/Navbar/Navbar'
import SocialBox from 'components/SocialBox/SocialBox'
import MapBox from 'components/MapBox/MapBox'
import InfoBox from 'components/InfoBox/InfoBox'
import Footer from 'components/Footer/Footer'

// import data
import contactData from 'data/contactData'

// import img
import groupImg from 'assets/group.jpeg'

// import hook
import { useEffect, useContext } from 'react'
import { PageContext } from 'context/PageContext'
import { EffectContext } from 'context/EffectContext'
import BackToTopBox from 'components/BackToTopBox/BackToTopBox'


export default function ContactPage() {
  const { setCurrentPage } = useContext(PageContext)
  const { scrollToTop } = useContext(EffectContext)

  useEffect(() => {
    setCurrentPage('/contact')
    scrollToTop()
  }, [])

  return (
    <div className="contactPageContainer">
      <Navbar />
      <Title content={'社群媒體'} />
      <SocialBox />
      <Title content={'我們的所在處'} />
      <MapBox />
      <Title content={'最後，別忘了'} />
      <InfoBox img={groupImg} content={contactData.contactWords}/>
      <BackToTopBox />
      <Footer />
    </div>
  )
}