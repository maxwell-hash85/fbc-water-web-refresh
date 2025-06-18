
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with More Blue Tinting */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-150"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/50 to-blue-200/30"></div>
      
      {/* Animated Background Elements with Enhanced Blue */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-300/30 to-transparent rounded-full animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Premium Typography with Enhanced Blue Gradient */}
          <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-slate-700 mb-8 tracking-tight leading-none">
              <span className="font-extralight bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">Clean.</span>
              <br />
              <span className="font-light bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Safe.</span>
              <br />
              <span className="font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Refreshing.
              </span>
            </h1>
          </div>

          <div className={`transform transition-all duration-1500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-xl md:text-3xl lg:text-4xl mb-12 font-light max-w-4xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                Exquisite purity meets uncompromising quality in every drop.
              </span>
              <br />
              <span className="text-blue-600 font-medium">Your premier source for luxury hydration.</span>
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transform transition-all duration-1500 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <button 
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-12 py-5 rounded-full text-lg font-medium overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center gap-3">
                Become a Distributor
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-bounce"></div>
              </span>
            </button>
            <button 
              onClick={scrollToContact}
              className="group border-2 border-blue-300 text-blue-700 px-12 py-5 rounded-full text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-500 hover:shadow-lg backdrop-blur-sm bg-white/70"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">Discover Excellence</span>
            </button>
          </div>

          {/* Premium Product Showcase */}
          <div className={`relative max-w-4xl mx-auto transform transition-all duration-1500 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                alt="Premium water collection" 
                className="relative w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Floating Quality Badges */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <span className="text-blue-600 font-semibold text-sm">NAFDAC Certified</span>
              </div>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <span className="text-emerald-600 font-semibold text-sm">ISO 9001</span>
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                <span className="text-slate-700 font-medium">Premium Quality Since 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-600 hover:text-blue-700 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
