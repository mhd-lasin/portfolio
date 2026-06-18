import { useState, useEffect } from 'react';
import { Star, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 border-b border-outline-variant bg-background/90 backdrop-blur-sm">
        <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary tracking-tighter">
          Muhamed&nbsp; Lasin
        </div>
        <nav className="hidden md:flex items-center gap-gutter">
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors" href="#about">About</a>
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors" href="#experience">Experience</a>
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors" href="#services">Services</a>
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors" href="#work">Work</a>
          <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors" href="#contact">Contact</a>
          <a href="/Muhamed%20Lasin%20-%20Web%20Developer.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 transform rotate-1 hover:rotate-0 transition-transform cursor-pointer block">
            <div className="paper-grid border border-outline px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(183,210,87,1)]">
              <Star className="text-background w-4 h-4 fill-background" />
              <span className="font-handwriting-md text-handwriting-md text-background font-bold whitespace-nowrap">View Resume</span>
            </div>
          </a>
        </nav>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-primary p-2 focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-background/95 backdrop-blur-md border-b border-outline-variant z-40 transition-all duration-300 md:hidden flex flex-col justify-center items-center gap-8 ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          <a
            className="font-label-mono text-lg uppercase text-on-surface-variant hover:text-primary transition-colors tracking-wider"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            className="font-label-mono text-lg uppercase text-on-surface-variant hover:text-primary transition-colors tracking-wider"
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            className="font-label-mono text-lg uppercase text-on-surface-variant hover:text-primary transition-colors tracking-wider"
            href="#services"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            className="font-label-mono text-lg uppercase text-on-surface-variant hover:text-primary transition-colors tracking-wider"
            href="#work"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>
          <a
            className="font-label-mono text-lg uppercase text-on-surface-variant hover:text-primary transition-colors tracking-wider"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          
          <a 
            href="/Muhamed%20Lasin%20-%20Web%20Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 transform rotate-1 hover:rotate-0 transition-transform cursor-pointer block" 
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="paper-grid border border-outline px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(183,210,87,1)]">
              <Star className="text-background w-4 h-4 fill-background" />
              <span className="font-handwriting-md text-handwriting-md text-background font-bold whitespace-nowrap">View Resume</span>
            </div>
          </a>
        </nav>
      </div>
    </>
  );
}
