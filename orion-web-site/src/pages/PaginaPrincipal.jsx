import VisionSection from '../../components/VisaoSection';
import Features from '../../components/Features';
import Beneficios from '../../components/Beneficios';
import ComoFunciona from '../../components/ComoFunciona';
import ComponenteAcao from '../../components/ComponenteAcao';

export default function PaginaPrincipal({ theme }) {
  const isDark = theme === 'dark';

  return (
    <div className={isDark ? 'bg-background text-foreground' : 'bg-white text-gray-800'}>
      <VisionSection />
      <Features />
      <ComoFunciona />
      <Beneficios />
      <ComponenteAcao />
    </div>
  );
}