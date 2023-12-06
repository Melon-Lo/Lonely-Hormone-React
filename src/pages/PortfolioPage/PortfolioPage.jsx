import './PortfolioPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import Title from 'components/Title/Title'
import Portfolio from 'components/Portfolio/Portfolio'
import Footer from 'components/Footer/Footer'

// import hook
import { useEffect, useContext } from 'react'
import { PageContext } from 'context/PageContext'

export default function PortfolioPage() {
  const { setCurrentPage } = useContext(PageContext)

  useEffect(() => {
    setCurrentPage('/portfolio')
  }, [])

  return (
    <div className="portfolioPageContainer">
      <Navbar />
      <Title content={'Youtube 作品集'} />
      <Portfolio />
      <Footer />
    </div>
  )
}