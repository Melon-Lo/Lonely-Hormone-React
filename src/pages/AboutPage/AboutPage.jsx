import './AboutPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import AboutBox from 'components/AboutBox/AboutBox'
import Title from 'components/Title/Title'
import Timeline from 'components/Timeline/Timeline'
import Footer from 'components/Footer/Footer'

function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <Navbar />
      <AboutBox />
      <Title content={'重大紀事'}/>
      <Timeline />
      <Footer />
    </div>
  )
}

export default AboutPage