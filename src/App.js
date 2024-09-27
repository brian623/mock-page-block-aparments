// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Cambiado a HashRouter
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import NewsDetail from './pages/NewsDetail';
import ZonesDetail from './pages/ZonesDetail';
import MeetingDetail from './pages/MeetingDetail';
import NewsPage from './pages/NewsPage';
import ZonesPage from './pages/ZonesPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/zones" element={<ZonesPage />} />
        <Route path="/zones/:id" element={<ZonesDetail />} />
        <Route path="/meeting" element={<MeetingDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Componente para páginas no encontradas
const NotFound = () => (
  <div className="text-center mt-5">
    <h2>404 - Página No Encontrada</h2>
    <p>Lo sentimos, la página que buscas no existe.</p>
  </div>
);

export default App;
