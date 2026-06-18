import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Workflow from './components/sections/Workflow';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import { CinematicFooter } from './components/ui/motion-footer';

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary selection:text-on-secondary overflow-x-hidden min-h-screen">
      <div className="grain-texture"></div>
      
      {/* 
        MAIN CONTENT AREA 
        We use a high z-index to allow the user 
        to scroll down and reveal the footer securely underneath.
      */}
      <main className="relative z-10 w-full min-h-screen bg-background flex flex-col border-b border-outline-variant/30 shadow-[0_30px_60px_rgba(0,0,0,0.5)] pb-10">
        <Header />
        <div className="pt-20">
          <Hero />
          <About />
          <Experience />
          <Stats />
          <Services />
          <Projects />
          <Testimonials />
          <Workflow />
          <Contact />
        </div>
      </main>

      {/* The Cinematic Footer is injected here */}
      <CinematicFooter />
    </div>
  );
}
