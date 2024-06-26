import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/constante.js'
import { SidebarProvider } from './contexts/sidebarContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <SidebarProvider>
    <App />
    </SidebarProvider> 
  </React.StrictMode>
)
