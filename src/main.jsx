import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { TransactionsProvider } from './context/TransactionsContext.jsx'
import { RoleProvider } from './context/RoleContext.jsx'

createRoot(document.getElementById('root')).render(
  <RoleProvider>
  <TransactionsProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </TransactionsProvider>
  </RoleProvider>
  ,
)
