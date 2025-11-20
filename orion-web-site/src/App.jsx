import { useEffect, useState } from 'react';

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

  const [page, setPage] = useState('landing'); 

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
    <div className="min-h-screen flex flex-col bg-[#00142d]">
      <Navbar
        onToggleTheme={toggleTheme}
        theme={theme}
        currentPage={page}
        onNavigate={(target) => {
          if (target === 'rede-social' || target === 'nova') {
            setPage('rede-social');
          } else {
            setPage('landing');
          }
        }}
      />

      <main>
        {page === 'landing' ? (
          <PaginaPrincipal
            theme={theme}
            onSeeHowWorks={() => setPage('rede-social')}
          />
        ) : (
          <RedeSocial theme={theme} />
        )}
      </main>

      <Footer theme={theme} />
    </div>
  );

}
