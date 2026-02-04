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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>...
        </div>
      </header>

      <section id="home" className="hero-section relative">
        <BeamsBackground className="min-h-screen flex items-center justify-center pt-20" intensity="medium">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center hero-content">
              <div className="mb-6 inline-block">
                <span className="text-gold glow-text-gold text-sm tracking-[0.3em] uppercase font-light">Rajasthan's Premier Bespoke Fashion Designers</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight glow-text-white">Best Men's Wedding Wear
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

      <section id="collections" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-subtle"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Best Fashion Designers Rajasthan</span>
            <h3 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Premium Men's Wear Collections</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Handcrafted bespoke menswear combining traditional Rajasthani craftsmanship with contemporary design.
              Expert tailoring for weddings, formal events, and ethnic celebrations across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="collection-card group">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 via-amber-950 to-gray-800 rounded-lg overflow-hidden mb-6 relative">...
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">...
      </section>

      <section id="contact" className="py-24 relative">...
      </section>

      <footer className="py-12 border-t border-gray-800">...
      </footer>
    </div>
  );
}

export default App;