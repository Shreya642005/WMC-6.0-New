import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#151414] relative">
      {/* Spider-Man Background Elements - same as other pages */}
      <img
        src="/images/BackgroundLogo.png"
        alt="Background Logo"
        className="absolute left-1/2 top-1/2 w-[400px] opacity-20 -translate-x-1/2 -translate-y-1/2 z-0"
      />
      <img
        src="/images/web2.png"
        className="absolute top-0 left-0 w-[250px] opacity-20 z-0"
        alt="web-top-left"
      />
      <img
        src="/images/web1.png"
        className="absolute top-0 right-0 w-[180px] opacity-15 z-0 pointer-events-none"
        alt="web-top-right"
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#a62121] mb-8 font-['Anton'] tracking-wide">
            ABOUT THE DIARIES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                After Doctor Strange's spell made the world forget Peter Parker, 
                these digital records became the only proof of his heroism. 
                Every saved life, every thwarted villain - documented in secret.
              </p>
              
              <div className="flex items-start gap-4 mt-8">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Clock className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Last Updated</h3>
                  <p className="text-gray-400">3 hours ago</p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <div className="bg-black/30 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="text-red-400" /> CURRENT LOCATION
                </h3>
                <p className="text-gray-300">
                  Queens, New York <br />
                  Coordinates: 40.7282° N, 73.7949° W
                </p>
                
                <div className="mt-6">
                  <button className="text-red-400 hover:text-red-300 flex items-center gap-2 transition">
                    View Full Activity Map →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;