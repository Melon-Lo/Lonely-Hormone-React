import './AboutPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import AboutBox from 'components/AboutBox/AboutBox'
import Timeline from 'components/Timeline/Timeline'

function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <Navbar />
      <AboutBox />
      <Timeline />
    </div>
  )
}

export default AboutPage