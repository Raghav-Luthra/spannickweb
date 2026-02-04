import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import AboutUs from './components/AboutUs';
import WelcomeAnimation from './components/WelcomeAnimation';
import FloatingOrbs from './components/FloatingOrbs';
import { BeamsBackground } from './components/ui/beams-background';
import { GlowingButton } from './components/ui/glowing-button';

function CollectionCard({ img, tag, title, desc }: { img: string; tag: string; title: string; desc: string }) {
  return (
    <div className="collection-card group">
      <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 relative bg-gray-900">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 group-hover:from-black/20 group-hover:to-black/70 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-end justify-center p-6 text-center">
          <div className="w-full">
            <p className="text-gold tracking-wider text-sm mb-2">{tag}</p>
            <h4 className="text-2xl font-serif mb-2 group-hover:text-gold transition-colors">{title}</h4>
            <p className="text-gray-300 text-sm max-w-md mx-auto">{desc}</p>
          </div>
        </div>
      </div>
      <a href="#contact" className="text-gold hover:underline inline-flex items-center">Learn More <ArrowRight size={16} className="ml-2" /></a>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (showWelcome) return <WelcomeAnimation onComplete={() => setShowWelcome(false)} />;
  if (showAbout) return <AboutUs />;

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`;

  const cards = [
    {
      img: 'https://raw.githubusercontent.com/Raghav-Luthra/spannickweb/main/src/formal%20wears.jpeg',
      tag: 'EXECUTIVE',
      title: "Bespoke Formal Suits",
      desc: 'Custom-tailored business suits, designer blazers, and premium formal wear for corporate and executive attire.'
    },
    {
      img: 'https://raw.githubusercontent.com/Raghav-Luthra/spannickweb/main/src/weading%20wear.jpeg',
      tag: 'PREMIUM',
      title: "Wedding Sherwanis & Suits",
      desc: "Custom wedding sherwanis, Indo-western designer suits, and royal Rajasthani groom wear."
    },
    {
      img: 'https://raw.githubusercontent.com/Raghav-Luthra/spannickweb/main/src/ethenic%20wears.jpg.webp',
      tag: 'HERITAGE',
      title: "Designer Ethnic Wear",
      desc: "Traditional kurtas, bandhgalas, and Nehru jackets celebrating India's textile heritage."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingOrbs />
      <header className={headerClass}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif tracking-wider"><span className="text-gold">SPANNICK</span> <span className="text-white font-light">DESIGNERS</span></h1>
              <p className="text-xs text-gray-400 tracking-widest mt-1">BY LUTHRA'S SINCE 1994</p>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="nav-link" onClick={() => setShowAbout(false)}>Home</a>
              <a href="#collections" className="nav-link" onClick={() => setShowAbout(false)}>Collections</a>
              <button onClick={() => setShowAbout(s => !s)} className="nav-link">About</button>
              <a href="#contact" className="nav-link" onClick={() => setShowAbout(false)}>Contact</a>
              <a href="https://calendly.com/bluthra88/30min" target="_blank" rel="noopener noreferrer"><GlowingButton variant="primary" className="text-sm">Book Appointment</GlowingButton></a>
            </div>

            <button className="lg:hidden text-white hover:text-gold" onClick={() => setIsMenuOpen(s => !s)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>  
          <div className="flex flex-col space-y-6 p-6">
            <a href="#home" className="text-lg hover:text-gold" onClick={() => { setIsMenuOpen(false); setShowAbout(false); }}>Home</a>
            <a href="#collections" className="text-lg hover:text-gold" onClick={() => { setIsMenuOpen(false); setShowAbout(false); }}>Collections</a>
            <button onClick={() => { setShowAbout(s => !s); setIsMenuOpen(false); }} className="text-lg hover:text-gold text-left">About</button>
            <a href="#contact" className="text-lg hover:text-gold" onClick={() => { setIsMenuOpen(false); setShowAbout(false); }}>Contact</a>
            <a href="https://calendly.com/bluthra88/30min" target="_blank" rel="noopener noreferrer" className="w-full"><GlowingButton variant="primary" className="w-full">Book Appointment</GlowingButton></a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section relative">
          <BeamsBackground className="min-h-screen flex items-center justify-center pt-20" intensity="medium">
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Best Men's Wedding Wear <span className="block text-gold mt-2">Fashion Designers in Rajasthan</span></h2>
              <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">Premium custom-stitched wedding sherwanis, bespoke formal suits, and designer ethnic wear for men. Rajasthan's finest since 1994.</p>
              <div className="flex gap-4 justify-center">
                <a href="https://spannickbyluthras.vercel.app" target="_blank" rel="noopener noreferrer"><GlowingButton variant="primary">Explore Collections</GlowingButton></a>
                <a href="https://calendly.com/bluthra88/30min" target="_blank" rel="noopener noreferrer"><GlowingButton variant="secondary">Schedule Consultation</GlowingButton></a>
              </div>
            </div>
          </BeamsBackground>
        </section>

        <section id="collections" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif mb-4">Premium Men's Wear Collections</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">Handcrafted bespoke menswear combining traditional Rajasthani craftsmanship with contemporary design.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cards.map((c) => <CollectionCard key={c.title} img={c.img} tag={c.tag} title={c.title} desc={c.desc} />)}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-serif">Visit Our Jaipur Atelier</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">Schedule your personalized consultation with Rajasthan's premier bespoke menswear designers.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Phone size={24} className="text-gold mx-auto" />
                <h4 className="text-xl font-serif mt-4">Call Us</h4>
                <p className="text-gray-400">+91 99295 73000</p>
              </div>

              <div className="text-center">
                <Mail size={24} className="text-gold mx-auto" />
                <h4 className="text-xl font-serif mt-4">Email Us</h4>
                <p className="text-gray-400">spannickdesigners@gmail.com</p>
              </div>

              <div className="text-center">
                <MapPin size={24} className="text-gold mx-auto" />
                <h4 className="text-xl font-serif mt-4">Visit Our Atelier</h4>
                <p className="text-gray-400">Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-800 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-6">© 2024 Spannick Designers by Luthra's. All rights reserved.</div>
      </footer>
    </div>
  );
}