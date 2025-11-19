import { useEffect, useState } from 'react';
import './App.css'

import Navbar from "../components/NavBar";

import Footer from '../components/Footer';
import PaginaPrincipal from './pages/PaginaPrincipal'; 
import RedeSocial from './pages/RedeSocial'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    try { localStorage.setItem('theme', newTheme); } catch (e) {}
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#00142d' }}>
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <RedeSocial theme={theme} />
      </main>
      <Footer theme={theme} />
    
    </div>
  );
}