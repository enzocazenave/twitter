import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { UiProvider } from './context/UiContext';
import { AppRouter } from './router/AppRouter';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <UiProvider>
        <AppRouter />
      </UiProvider>
  </BrowserRouter>
)
