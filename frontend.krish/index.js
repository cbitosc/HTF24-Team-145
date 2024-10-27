import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import './styles/App.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the App
const root = createRoot(rootElement); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
