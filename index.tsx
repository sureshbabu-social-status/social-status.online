import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { updateMetaTags, addPreconnects } from './seo';

// Update meta tags and add preconnects
updateMetaTags();
addPreconnects();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
