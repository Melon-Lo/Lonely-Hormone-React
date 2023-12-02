import './AboutPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import InfoBox from 'components/InfoBox/InfoBox'
import Title from 'components/Title/Title'
import Timeline from 'components/Timeline/Timeline'
import Footer from 'components/Footer/Footer'

// import data
import textData from 'data/textData'

// import img
import bg from 'assets/cover.png'

function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <Navbar />
      <InfoBox 
        content={textData.introduction}
        img={bg}
      />
      <Title content={'重大紀事'}/>
      <Timeline />
      <Footer />
    </div>
  )
}

export default AboutPage