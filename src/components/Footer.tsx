
import { Droplets, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold">
                  FBC <span className="text-blue-400 font-light">Table Water</span>
                </div>
              </div>
              
              <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-lg">
                Nigeria's premier luxury water brand, delivering uncompromising purity 
                and exceptional quality in every drop. Experience the difference that 
                true craftsmanship makes.
              </p>
              
              {/* Premium Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, color: "from-blue-600 to-blue-700" },
                  { icon: <Instagram className="w-5 h-5" />, color: "from-pink-600 to-purple-700" },
                  { icon: <Twitter className="w-5 h-5" />, color: "from-blue-400 to-blue-600" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Quick Access
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", id: "home" },
                  { label: "About Excellence", id: "about" },
                  { label: "Premium Products", id: "products" },
                  { label: "Our Process", id: "process" },
                  { label: "Client Stories", id: "testimonials" },
                  { label: "Partnership", id: "distributor" },
                  { label: "Contact", id: "contact" }
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToSection(item.id)} 
                      className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Connect With Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Premium Facility</div>
                    <div className="text-slate-300 text-sm">123 Industrial Excellence Ave<br />Lagos State, Nigeria</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <a 
                      href="tel:+2348123456789" 
                      className="font-medium text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      +234 812 345 6789
                    </a>
                    <div className="text-slate-300 text-sm">24/7 Premium Support</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <a 
                      href="mailto:info@fbctablewater.com" 
                      className="font-medium text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      info@fbctablewater.com
                    </a>
                    <div className="text-slate-300 text-sm">Premium Inquiries</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Certifications */}
          <div className="border-t border-slate-700 pt-12 mb-12">
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Premium Certifications & Standards</h4>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  "NAFDAC Certified", 
                  "ISO 9001:2015", 
                  "HACCP Compliant", 
                  "FDA Standards",
                  "WHO Guidelines"
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2 rounded-full border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-sm font-medium text-slate-200">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm mb-4 lg:mb-0">
                © 2024 FBC Table Water. All rights reserved. | Crafted with excellence in Nigeria.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  "Privacy Policy",
                  "Terms of Excellence", 
                  "Quality Guarantee",
                  "Partnership Terms"
                ].map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
