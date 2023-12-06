import './ContactPage.scss'

// import components
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


export default function ContactPage() {
  const { setCurrentPage } = useContext(PageContext)

  useEffect(() => {
    setCurrentPage('/contact')
  }, [])

  return (
    <div className="contactPageContainer">
      <Navbar />
      <SocialBox />
      <MapBox />
      <InfoBox img={groupImg} content={contactData.contactWords}/>
      <Footer />
    </div>
  )
}