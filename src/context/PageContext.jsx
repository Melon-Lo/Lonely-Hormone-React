import { useState, createContext } from "react";

export const PageContext = createContext()

export default function WindowWidthProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('/main')

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}