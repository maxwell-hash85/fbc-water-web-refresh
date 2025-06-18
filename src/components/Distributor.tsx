
import { Check, Star, Award, TrendingUp } from "lucide-react";

export const Distributor = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Exceptional Profit Margins",
      description: "Industry-leading profit structures designed to maximize your return on investment with premium pricing power."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Comprehensive Marketing Suite",
      description: "Premium marketing materials, digital assets, and promotional support to elevate your brand presence."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Exclusive Territory Rights",
      description: "Protected territory agreements with flexible delivery schedules tailored to your business requirements."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Elite Training Program",
      description: "Comprehensive training and ongoing mentorship to ensure your continued success and growth."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <span className="text-blue-400 font-medium text-lg tracking-wide uppercase mb-4 block">Partnership Excellence</span>
            <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Become a <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Partner</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              Join our exclusive network of premium distributors and build a luxury business 
              with unparalleled support and profitability.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-16 items-center">
            {/* Benefits Section */}
            <div className="space-y-8">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                  Exclusive <span className="font-bold text-blue-400">Benefits</span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-6"></div>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Experience the advantages of partnering with Nigeria's premier luxury water brand.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group flex items-start space-x-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium Statistics */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-blue-100 font-medium">Premium Partners</div>
                </div>
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">98%</div>
                  <div className="text-blue-100 font-medium">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Premium Application Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-slate-800 mb-3">Premium Partnership Application</h3>
                  <p className="text-slate-600">Begin your journey to luxury business success</p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Preferred Territory" 
                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <select className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm text-slate-600">
                      <option>Business Experience Level</option>
                      <option>New to Distribution</option>
                      <option>1-3 Years Experience</option>
                      <option>3-5 Years Experience</option>
                      <option>5+ Years Experience</option>
                    </select>
                  </div>
                  
                  <div>
                    <textarea 
                      placeholder="Tell us about your business vision and goals" 
                      rows={4}
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm resize-none"
                    ></textarea>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Submit Premium Application
                      <div className="w-2 h-2 bg-white rounded-full group-hover:animate-bounce"></div>
                    </span>
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500 mb-4">Or connect with us directly</p>
                  <div className="flex justify-center gap-4">
                    <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors duration-300 shadow-lg">
                      <span>📱</span> WhatsApp
                    </button>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                      <span>📞</span> Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
