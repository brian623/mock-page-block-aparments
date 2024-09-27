// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import NewsDetail from './pages/NewsDetail';
import ZonesDetail from './pages/ZonesDetail';
import MeetingDetail from './pages/MeetingDetail';
import NewsPage from './pages/NewsPage'; // Importa la nueva página
import ZonesPage from './pages/ZonesPage'; // Importa la nueva página
import './App.css';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} /> {/* Ruta para todas las noticias */}
        <Route path="/news/:id" element={<NewsDetail />} /> {/* Ruta para detalles de noticias */}
        <Route path="/zones" element={<ZonesPage />} /> {/* Ruta para todas las zonas */}
        <Route path="/zones/:id" element={<ZonesDetail />} /> {/* Ruta para detalles de zonas */}
        <Route path="/meeting" element={<MeetingDetail />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para páginas no encontradas */}
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
