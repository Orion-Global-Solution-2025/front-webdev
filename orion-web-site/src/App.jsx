
import './App.css'

import Navbar from "../components/Navbar";
import VisionSection from '../components/VisaoSection';
import Features from '../components/Features';
import Beneficios from '../components/Beneficios';
import ComoFunciona from '../components/ComoFunciona';
import ComponenteAcao from '../components/ComponenteAcao';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#00142d' }}>
      <Navbar/>
      <VisionSection />
      <Features/>
      <ComoFunciona/>
      <Beneficios/>
      <ComponenteAcao/>
      <Footer/>
    
    </div>
  );
}

