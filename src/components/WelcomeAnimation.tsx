import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-800 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 welcome-gradient"></div>
      <div className="absolute inset-0 welcome-pattern"></div>

      <div className="relative z-10 text-center px-6">
        <div className="welcome-logo-container">
          <div className="welcome-sparkle welcome-sparkle-1">
            <Sparkles className="text-gold" size={24} />
          </div>
          <div className="welcome-sparkle welcome-sparkle-2">
            <Sparkles className="text-gold" size={20} />
          </div>
          <div className="welcome-sparkle welcome-sparkle-3">
            <Sparkles className="text-gold" size={18} />
          </div>
          <div className="welcome-sparkle welcome-sparkle-4">
            <Sparkles className="text-gold" size={22} />
          </div>

          <div className="welcome-circle-1"></div>
          <div className="welcome-circle-2"></div>
          <div className="welcome-circle-3"></div>

          <h1 className="text-5xl md:text-7xl font-serif tracking-wider welcome-text">
            <span className="welcome-letter text-white" style={{ animationDelay: '0.2s' }}>S</span>
            <span className="welcome-letter text-white" style={{ animationDelay: '0.3s' }}>P</span>
            <span className="welcome-letter text-white" style={{ animationDelay: '0.4s' }}>A</span>
            <span className="welcome-letter text-white" style={{ animationDelay: '0.5s' }}>N</span>
            <span className="welcome-letter text-white" style={{ animationDelay: '0.6s' }}>N</span>
            <span className="welcome-letter text-white" style={{ animationDelay: '0.7s' }}>I</span>
            <span className="welcome-letter text-white" style={{ animationDelay: '0.8s' }}>C</span>
            <span className="welcome-letter text-gold block mt-4" style={{ animationDelay: '0.9s' }}>D</span>
            <span className="welcome-letter text-gold" style={{ animationDelay: '1.0s' }}>E</span>
            <span className="welcome-letter text-gold" style={{ animationDelay: '1.1s' }}>S</span>
            <span className="welcome-letter text-gold" style={{ animationDelay: '1.2s' }}>I</span>
            <span className="welcome-letter text-gold" style={{ animationDelay: '1.3s' }}>G</span>
            <span className="welcome-letter text-gold" style={{ animationDelay: '1.4s' }}>N</span>
            <span className="welcome-letter text-gold" style={{ animationDelay: '1.5s' }}>E</span>
            <span className="welcome-letter text-gold" style={{ animationDelay: '1.6s' }}>R</span>
            <span className="welcome-letter text-gold" style={{ animationDelay: '1.7s' }}>S</span>
          </h1>

          <div className="welcome-tagline">
            <p className="text-xs text-gray-400 tracking-[0.4em] mt-6 uppercase font-light">
              By Luthra's Since 1994
            </p>
          </div>

          <div className="welcome-line"></div>
        </div>

        <div className="welcome-subtitle">
          <p className="text-gold text-sm tracking-[0.3em] uppercase">
            Rajasthan's Premier Bespoke Excellence
          </p>
        </div>
      </div>
    </div>
  );
}
