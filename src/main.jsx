import React from 'react'
import ReactDOM from 'react-dom/client'
import Start from './App'
import { LoginPage } from './loginform'
import './index.css'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Start />
    </MantineProvider>
  </React.StrictMode>,
)
