
import './App.css'

import Navbar from "../components/Navbar";

import Footer from '../components/Footer';
import PaginaPrincipal from './pages/PaginaPrincipal'; 
import RedeSocial from './pages/RedeSocial'

export default function App() {

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#00142d' }}>
      <Navbar/>
      <RedeSocial />
      <Footer/>
    
    </div>
  );
}