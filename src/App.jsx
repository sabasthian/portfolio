import { MotionConfig } from 'framer-motion';
import { PreferencesProvider } from './context/PreferencesContext.jsx';
import { DetailProvider } from './context/DetailContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import DetailModal from './components/DetailModal.jsx';

export default function App() {
  return (
    // reducedMotion="user": animasi otomatis dimatikan jika pengunjung memilih "kurangi gerakan"
    <MotionConfig reducedMotion="user">
      <PreferencesProvider>
        <DetailProvider>
          <Header />
          <main id="top" className="wrap">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
          <DetailModal />
        </DetailProvider>
      </PreferencesProvider>
    </MotionConfig>
  );
}
