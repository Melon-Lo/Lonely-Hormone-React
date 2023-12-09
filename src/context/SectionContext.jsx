import { useState, createContext } from "react";

export const SectionContext = createContext()

export default function StepProvider({ children }) {
  const [currentSection, setCurrentSection] = useState(1)
  const [totalSections, setTotalSections] = useState(0)

  // slice data every certain items
  function sliceData(data, itemsPerSection) {
    // start from index[0]
    const startIndex = (currentSection - 1) * itemsPerSection
    const endIndex = startIndex + itemsPerSection
    setTotalSections(Math.ceil(data.length / itemsPerSection))
    return data.slice(startIndex, endIndex)
  }

  // to next/previous section
  function toNextSection() {
    if(currentSection >= totalSections) return
    setCurrentSection(prevSection => prevSection + 1)
  }

  function toPrevSection() {
    if(currentSection <= 1) return
    setCurrentSection(prevSection => prevSection - 1)
  }

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        totalSections,
        setTotalSections,
        sliceData,
        toNextSection,
        toPrevSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  )
}