import VisionSection from '../../components/VisaoSection';
import Features from '../../components/Features';
import Beneficios from '../../components/Beneficios';
import ComoFunciona from '../../components/ComoFunciona';
import ComponenteAcao from '../../components/ComponenteAcao';

export default function PaginaPrincipal() {
  return (
    <>
      <VisionSection />
      <Features/>
      <ComoFunciona/>
      <Beneficios/>
      <ComponenteAcao/>
    </>
  );
}