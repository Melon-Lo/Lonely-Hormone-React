import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import context
import WindowWidthProvider from 'context/WindowWidthContext';
import EffectProvider from 'context/EffectContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EffectProvider>
      <WindowWidthProvider>
        <App />
      </WindowWidthProvider>
    </EffectProvider>
  </React.StrictMode>
);

