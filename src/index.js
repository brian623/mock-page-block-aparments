// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Crea el root usando createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
