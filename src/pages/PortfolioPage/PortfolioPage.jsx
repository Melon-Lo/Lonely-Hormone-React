import './PortfolioPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import Title from 'components/Title/Title'
import Portfolio from 'components/Portfolio/Portfolio'
import Footer from 'components/Footer/Footer'

export default function PortfolioPage() {
  return (
    <div className="portfolioPageContainer">
      <Navbar />
      <Title content={'Youtube 作品集'} />
      <Portfolio />
      <Footer />
    </div>
  )
}