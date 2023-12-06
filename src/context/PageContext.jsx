import { useState, createContext } from "react";

export const PageContext = createContext()

export default function WindowWidthProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('/main')
  const pathname = window.location.pathname

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        pathname,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}