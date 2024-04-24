import { useState, useEffect, createContext } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Home from './pages/homepage/Home';
import Login from './pages/Login';
import Formations from './pages/Formations';

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider
        value={{
          SetTheme: setTheme,
          Theme: theme,
        }}
      >
        <BrowserRouter>
          <Toaster position="top-center" richColors />

          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Login />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
