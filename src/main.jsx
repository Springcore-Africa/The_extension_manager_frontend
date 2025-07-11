// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import { FarmProvider } from './context/FarmContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
      <FarmProvider>
        <App />
      </FarmProvider>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
