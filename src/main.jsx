import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TweetsProvider } from './context/TweetsContext';
import { UiProvider } from './context/UiContext';
import { AppRouter } from './router/AppRouter';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <TweetsProvider>
        <UiProvider>
          <AppRouter />
        </UiProvider>
      </TweetsProvider>
    </AuthProvider>
  </BrowserRouter>
)
