import './PortfolioPage.scss'

// import components
import Navbar from 'components/Navbar/Navbar'
import Title from 'components/Title/Title'
import StepBox from 'components/StepBox/StepBox'
import Portfolio from 'components/Portfolio/Portfolio'
import BackToTopBox from 'components/BackToTopBox/BackToTopBox'
import Footer from 'components/Footer/Footer'

// import hook
import { useEffect, useContext } from 'react'
import { PageContext } from 'context/PageContext'
import { EffectContext } from 'context/EffectContext'
import { SectionContext } from 'context/SectionContext'

export default function PortfolioPage() {
  const { setCurrentPage } = useContext(PageContext)
  const { scrollToTop } = useContext(EffectContext)
  const { setCurrentSection } = useContext(SectionContext)
  const titleContent = 'Youtube 作品集'

  useEffect(() => {
    setCurrentPage('/portfolio')
    setCurrentSection(1)
    scrollToTop()
  }, [])

  return (
    <div className="portfolioPageContainer">
      <Navbar />
      <Title content={titleContent} />
      <Portfolio />
      <StepBox />
      <BackToTopBox />
      <Footer />
    </div>
  )
}