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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingOrbs />
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}> 
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

        <div className={`lg:hidden mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}> 
          <div className="flex flex-col space-y-6 p-6">
            <a href="#home" className="text-lg hover:text-gold transition-colors" onClick={() => { setIsMenuOpen(false); setShowAbout(false); }}>Home</a>
            <a href="#collections" className="text-lg hover:text-gold transition-colors" onClick={() => { setIsMenuOpen(false); setShowAbout(false); }}>Collections</a>
            <button onClick={() => { setShowAbout(!showAbout); setIsMenuOpen(false); }} className="text-lg hover:text-gold transition-colors text-left">About</button>
            <a href="#contact" className="text-lg hover:text-gold transition-colors" onClick={() => { setIsMenuOpen(false); setShowAbout(false); }}>Contact</a>
            <a href="https://calendly.com/bluthra88/30min" target="_blank" rel="noopener noreferrer">
              <GlowingButton variant="primary" className="w-full">Book Appointment</GlowingButton>
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="hero-section relative">
        <BeamsBackground className="min-h-screen flex items-center justify-center pt-20" intensity="medium">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center hero-content">
              <div className="mb-6 inline-block">
                <span className="text-gold glow-text-gold text-sm tracking-[0.3em] uppercase font-light">Rajasthan's Premier Bespoke Fashion Designers</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight glow-text-white">
                Best Men's Wedding Wear
                <span className="block text-gold glow-text-gold mt-2">Fashion Designers in Rajasthan</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Premium custom-stitched wedding sherwanis, bespoke formal suits, and designer ethnic wear for men.
                Rajasthan's finest fashion designers since 1994, serving Jaipur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://spannickbyluthras.vercel.app" target="_blank" rel="noopener noreferrer">
                  <GlowingButton variant="primary" className="group">
                    Explore Collections
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform inline-block" size={20} />
                  </GlowingButton>
                </a>
                <a href="https://calendly.com/bluthra88/30min" target="_blank" rel="noopener noreferrer">
                  <GlowingButton variant="secondary">Schedule Consultation</GlowingButton>
                </a>
              </div>
            </div>
          </div>
        </BeamsBackground>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* ...rest of the file unchanged... */}
    </div>
  );
}

export default App;
