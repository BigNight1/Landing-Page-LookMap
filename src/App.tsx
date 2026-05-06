import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import RealTime from './components/RealTime';
import Planes from './components/Planes';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import Verify from './components/Verify';
import TerminosCondiciones from './components/TerminosCondiciones';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#080C12', minHeight: '100vh' }}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <RealTime />
      <Planes />
      <CTAFinal />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/verify" element={<MainLayout><Verify /></MainLayout>} />
        <Route path="/terminos-condiciones" element={<MainLayout><TerminosCondiciones /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
