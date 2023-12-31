import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import pages
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from 'pages/ContactPage/ContactPage';
import PortfolioPage from 'pages/PortfolioPage/PortfolioPage';

// basic setting
const basename = process.env.PUBLIC_URL

function App() {
  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="main" element={<MainPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="portfolio" element={<PortfolioPage />}></Route>
          <Route path="*" element={<Navigate to="main" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
