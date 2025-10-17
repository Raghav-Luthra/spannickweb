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
              <a href="#contact">
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
            <a href="#contact">
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
                Rajasthan's finest fashion designers since 1994, serving Jaipur, Udaipur, Jodhpur, Delhi, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://spannickbyluthras.vercel.app" target="_blank" rel="noopener noreferrer">
                  <GlowingButton variant="primary" className="group">
                    Explore Collections
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform inline-block" size={20} />
                  </GlowingButton>
                </a>
                <GlowingButton variant="secondary">Schedule Consultation</GlowingButton>
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
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl">👔</span>
                    </div>
                    <p className="text-gold tracking-wider text-sm">PREMIUM</p>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">Wedding Sherwanis & Suits</h4>
              <p className="text-gray-400 mb-4">Custom wedding sherwanis, Indo-western designer suits, royal Rajasthani groom wear. Best bridal fashion designers for men's wedding attire in Jaipur, Rajasthan.</p>
              <a href="#contact" className="text-gold hover:underline inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </a>
            </div>

            <div className="collection-card group">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl">🤵</span>
                    </div>
                    <p className="text-gold tracking-wider text-sm">EXECUTIVE</p>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">Bespoke Formal Suits</h4>
              <p className="text-gray-400 mb-4">Custom-tailored business suits, designer blazers, premium formal wear. Rajasthan's top menswear tailors for corporate and executive attire.</p>
              <a href="#contact" className="text-gold hover:underline inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </a>
            </div>

            <div className="collection-card group">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl">🕉️</span>
                    </div>
                    <p className="text-gold tracking-wider text-sm">HERITAGE</p>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">Designer Ethnic Wear</h4>
              <p className="text-gray-400 mb-4">Traditional kurtas, bandhgalas, Nehru jackets. Authentic Rajasthani ethnic menswear celebrating India's textile heritage and royal craftsmanship.</p>
              <a href="#contact" className="text-gold hover:underline inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-left">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl font-serif text-gold mb-4">30+</div>
                    <p className="text-2xl tracking-wider">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in-right">
              <span className="text-gold text-sm tracking-[0.3em] uppercase">Rajasthan's Heritage Tailors Since 1994</span>
              <h3 className="text-4xl md:text-5xl font-serif mt-4 mb-6">30 Years of Bespoke Excellence from Jaipur</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Established in 1994 in Jaipur, Rajasthan, Spannick Designers by Luthra's is India's premier destination for
                custom men's wedding wear, designer formal suits, and traditional ethnic menswear. Our master tailors bring
                generations of Rajasthani textile heritage to every garment.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                From the royal palaces of Udaipur to destination weddings in Jaisalmer, from Jodhpur's business elite to
                Delhi's corporate leaders - we've dressed over 5,000 discerning clients across Rajasthan and India with
                bespoke menswear that combines traditional craftsmanship with contemporary fashion design.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="stat-card">
                  <div className="text-3xl font-serif text-gold mb-2">5000+</div>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </div>
                <div className="stat-card">
                  <div className="text-3xl font-serif text-gold mb-2">100%</div>
                  <p className="text-gray-400 text-sm">Custom Made</p>
                </div>
              </div>

              <GlowingButton onClick={() => setShowAbout(true)} variant="primary" className="group">
                Read Our Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform inline-block" size={20} />
              </GlowingButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Our Custom Tailoring Process</h3>
            <p className="text-gray-300 mb-12">Premium bespoke menswear tailoring service from Rajasthan's best fashion designers. Personalized consultation, precision measurements, expert craftsmanship.</p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="process-step">
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4 process-icon">
                  <span className="text-gold font-serif text-2xl">1</span>
                </div>
                <h4 className="text-lg font-serif mb-2">Personal Consultation</h4>
                <p className="text-gray-400 text-sm">One-on-one style consultation at our Jaipur atelier. Understand your wedding, formal, or ethnic wear vision.</p>
              </div>
              <div className="process-step">
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4 process-icon">
                  <span className="text-gold font-serif text-2xl">2</span>
                </div>
                <h4 className="text-lg font-serif mb-2">Precision Measurement</h4>
                <p className="text-gray-400 text-sm">Expert body measurements ensuring perfect fit for custom sherwanis, suits, and ethnic menswear.</p>
              </div>
              <div className="process-step">
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4 process-icon">
                  <span className="text-gold font-serif text-2xl">3</span>
                </div>
                <h4 className="text-lg font-serif mb-2">Master Craftsmanship</h4>
                <p className="text-gray-400 text-sm">Traditional Rajasthani tailoring techniques with premium fabrics. Hand-finished bespoke menswear.</p>
              </div>
              <div className="process-step">
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4 process-icon">
                  <span className="text-gold font-serif text-2xl">4</span>
                </div>
                <h4 className="text-lg font-serif mb-2">Perfect Delivery</h4>
                <p className="text-gray-400 text-sm">Final fitting session with complimentary adjustments ensuring absolute perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-subtle"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Contact Best Fashion Designers Rajasthan</span>
            <h3 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Visit Our Jaipur Atelier</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Schedule your personalized consultation with Rajasthan's premier bespoke menswear designers.
              Serving clients across Jaipur, Udaipur, Jodhpur, Delhi, Mumbai, and international destinations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="contact-card group">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Phone className="text-gold" size={24} />
              </div>
              <h4 className="text-xl font-serif mb-2">Call Us</h4>
              <p className="text-gray-400">+91 98765 43210</p>
              <p className="text-gray-400">+91 98765 43211</p>
            </div>

            <div className="contact-card group">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Mail className="text-gold" size={24} />
              </div>
              <h4 className="text-xl font-serif mb-2">Email Us</h4>
              <p className="text-gray-400">info@spannickdesigners.com</p>
              <p className="text-gray-400">appointments@spannick.com</p>
            </div>

            <div className="contact-card group">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <MapPin className="text-gold" size={24} />
              </div>
              <h4 className="text-xl font-serif mb-2">Visit Our Atelier</h4>
              <p className="text-gray-400">Jaipur, Rajasthan</p>
              <p className="text-gray-400">India's Fashion Capital</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-serif mb-2">
                <span className="text-gold">SPANNICK</span> <span className="font-light">DESIGNERS</span>
              </h4>
              <p className="text-xs text-gray-400 tracking-widest mb-4">BY LUTHRA'S SINCE 1994</p>
              <p className="text-gray-400 text-sm">
                Best fashion designers from Rajasthan. Premium bespoke menswear tailors specializing in wedding sherwanis,
                formal suits, and ethnic wear since 1994.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-serif mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-serif mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <Facebook size={20} className="text-gold" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <Instagram size={20} className="text-gold" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Spannick Designers by Luthra's. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
