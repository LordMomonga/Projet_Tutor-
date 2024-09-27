import { useState, useEffect, createContext } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Home from './pages/homepage/Home';
import Login from './pages/Login';
import Formations from './pages/Formations';
import Sign from './pages/signUp';
import MainDash from './pages/dashboard/mainDash';
import Part from './pages/dashboard/part';
import Car from './pages/dashboard/car';
import Scan from './pages/Scan';
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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Sign />} />
              <Route path="/scan" element={<Scan />} />
              <Route path="/Formations" element={<Formations />} />


              
            </Route>
            <Route element={<MainDash />}>
              <Route   path="/dash"  element={<Part />} />
            </Route>
            <Route   path="/map"  element={<Car />} />

          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
