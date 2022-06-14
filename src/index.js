import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MaterialUIProvider } from "theme/context/themeProvider";

import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MaterialUIProvider>
      <App />
    </MaterialUIProvider>
  </BrowserRouter>
);

