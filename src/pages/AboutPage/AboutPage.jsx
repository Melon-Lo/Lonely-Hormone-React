import './AboutPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import AboutBox from 'components/AboutBox/AboutBox'
import Timeline from 'components/Timeline/Timeline'
import Footer from 'components/Footer/Footer'

function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <Navbar />
      <AboutBox />
      <Timeline />
      <Footer />
    </div>
  )
}

export default AboutPage