import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// PUBLIC INTERFACE: lightweight router setup for adding preview route without affecting default behavior
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DesignImac112 from './pages/DesignImac112';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Default app at root path - original behavior unchanged */}
        <Route path="/" element={<App />} />
        {/* Design preview route */}
        <Route path="/design/imac-1-1-2" element={<DesignImac112 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
