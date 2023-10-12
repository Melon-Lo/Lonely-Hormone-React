import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import pages
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<MainPage />}></Route>
          <Route path="*" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
