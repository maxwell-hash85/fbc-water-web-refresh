
import { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'shadow-lg' : ''
            }`}>
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold">
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>FBC</span>
              <span className="text-blue-600 ml-2 font-light">Table Water</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Products", id: "products" },
              { label: "Process", id: "process" },
              { label: "Testimonials", id: "testimonials" },
              { label: "Partnership", id: "distributor" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-slate-700 hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-slate-200/50 rounded-b-2xl shadow-xl">
            <div className="py-4 space-y-1">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Products", id: "products" },
                { label: "Process", id: "process" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Partnership", id: "distributor" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="block w-full text-left px-6 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 py-3">
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
