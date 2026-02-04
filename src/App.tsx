import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import AboutUs from './components/AboutUs';
import WelcomeAnimation from './components/WelcomeAnimation';
import FloatingOrbs from './components/FloatingOrbs';
import { BeamsBackground } from './components/ui/beams-background';
import { GlowingButton } from './components/ui/glowing-button';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showWelcome) {
    return <WelcomeAnimation onComplete={() => setShowWelcome(false)} />;
  }

  if (showAbout) {
    return <AboutUs />;
  }

  // compute header class string here to avoid embedding complex template expressions directly in JSX
  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingOrbs />
      <header className={headerClass}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="logo-fade-in">
              <h1 className="text-2xl md:text-3xl font-serif tracking-wider">
                <span className="text-gold">SPANNICK</span>
                <span className="text-white font-light"> DESIGNERS</span>
              </h1>
              <p className="text-xs text-gray-400 tracking-widest mt-1">BY LUTHRA'S SINCE 1994</p>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="nav-link" onClick={() => setShowAbout(false)}>Home</a>
              <a href="#collections" className="nav-link" onClick={() => setShowAbout(false)}>Collections</a>
              <button onClick={() => setShowAbout(!showAbout)} className="nav-link cursor-pointer">About</button>
              <a href="#contact" className="nav-link" onClick={() => setShowAbout(false)}>Contact</a>
              <a href="https://calendly.com/bluthra88/30min" target="_blank" rel="noopener noreferrer">
                <GlowingButton variant="primary" className="text-sm">Book Appointment</GlowingButton>
              </a>
            </div>

            <button
              className="lg:hidden text-white hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        <div className={`lg:hidden mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>...
// rest of the content from the App component
    </div>
  );
}

export default App;