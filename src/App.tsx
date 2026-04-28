import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import RealTime from './components/RealTime';
import Planes from './components/Planes';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import Verify from './components/Verify';

export default function App() {
  const path = window.location.pathname.replace(/\/+/g, '/');

  if (path === '/verify') {
    return (
      <div style={{ background: '#080C12', minHeight: '100vh' }}>
        <Nav />
        <Verify />
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: '#080C12', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <RealTime />
      <Planes />
      <CTAFinal />
      <Footer />
    </div>
  );
}
