import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import { useMemo } from 'react'
import { themeSettings } from './theme'
import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles"

function App() {
  
  const theme = useMemo(() => createTheme(themeSettings(), []));

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />

      <Navbar />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LogIn />} />
      </Routes>

    </ThemeProvider>
    </>
  )
}

export default App
