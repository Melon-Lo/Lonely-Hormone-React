import { useState, useEffect, createContext } from "react";

export const WindowWidthContext = createContext()

export default function WindowWidthProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <WindowWidthContext.Provider
      value={{
        windowWidth,
      }}
    >
      {children}
    </WindowWidthContext.Provider>
  )
}