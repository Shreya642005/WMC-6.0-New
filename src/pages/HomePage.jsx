import { useRef } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/sections/About';
import MissionPreview from '@/components/sections/MissionPreview';

export default function HomePage() {
  const aboutRef = useRef(null);
  const missionsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="relative">
      {/* Your Hero with scroll triggers */}
      <Hero 
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToMissions={() => scrollTo(missionsRef)}
      />

      {/* About Section */}
      <section ref={aboutRef} className="scroll-mt-20">
        <About />
      </section>

      {/* Mission Preview */}
      <section ref={missionsRef} className="scroll-mt-20">
        <MissionPreview />
      </section>

      {/* Improved Footer */}
      <footer ref={footerRef} className="bg-black/95 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-6 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12">
            
            {/* Logo Column - Centered content */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <img 
                src="/images/logo.png" 
                alt="Spider-Verse Logo" 
                className="h-14 w-auto"
              />
              <p className="text-sm text-center md:text-left text-gray-400/80">
                Documenting Peter Parker's heroic journey since 2023.
              </p>
            </div>

            {/* Quick Links - Balanced spacing */}
            <div className="flex justify-center">
              <div className="space-y-3">
                <h3 className="text-white font-medium text-lg mb-3 text-center md:text-left">
                  Quick Links
                </h3>
                <ul className="space-y-2.5">
                  <li className="text-center md:text-left">
                    <button 
                      onClick={() => scrollTo(aboutRef)}
                      className="hover:text-red-400 transition-colors duration-200 text-gray-300"
                    >
                      About
                    </button>
                  </li>
                  <li className="text-center md:text-left">
                    <button 
                      onClick={() => scrollTo(missionsRef)}
                      className="hover:text-red-400 transition-colors duration-200 text-gray-300"
                    >
                      Missions
                    </button>
                  </li>
                  <li className="text-center md:text-left">
                    <a 
                      href="/map" 
                      className="hover:text-red-400 transition-colors duration-200 text-gray-300"
                    >
                      Interactive Map
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info - Better alignment */}
            <div className="flex justify-center">
              <div className="space-y-3">
                <h3 className="text-white font-medium text-lg mb-3 text-center md:text-left">
                  Contact
                </h3>
                <address className="not-italic space-y-2.5 text-center md:text-left">
                  <p className="text-sm text-gray-300/90">Queens, New York</p>
                  <p className="text-sm text-gray-300/90">web@spiderverse.com</p>
                  <p className="text-sm text-gray-300/90">Emergency: 555-SPIDER</p>
                </address>
              </div>
            </div>
          </div>

          {/* Copyright - Better top spacing */}
          <div className="mt-14 pt-6 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Spider-Verse Archives. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Data encrypted with Stark Industries security protocols.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}