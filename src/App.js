import './App.module.css';
import './utils/theme.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Head/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import ParticlesBG from './components/ParticlesBG.js';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <>
      <ParticlesBG />
      <Header />
      <Hero />
      <main>
        <AboutMe />
        <Skills />
        <Portfolio />
        <Testimonial />
        <Features />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
