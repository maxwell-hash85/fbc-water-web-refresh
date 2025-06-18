
export const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Source Selection",
      description: "Carefully curated water from pristine underground aquifers and natural springs, selected for their exceptional mineral profile.",
      icon: "💧"
    },
    {
      step: "02", 
      title: "Advanced Purification",
      description: "State-of-the-art multi-stage filtration removes impurities while preserving beneficial minerals for optimal taste.",
      icon: "🔬"
    },
    {
      step: "03",
      title: "UV Sterilization", 
      description: "Precision UV treatment eliminates harmful microorganisms while maintaining water's natural integrity.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous laboratory testing ensures every batch exceeds international standards and our premium quality benchmarks.",
      icon: "🏆"
    },
    {
      step: "05",
      title: "Precision Packaging",
      description: "Automated packaging in sterile environments maintains product integrity from facility to your hands.",
      icon: "📦"
    },
    {
      step: "06",
      title: "Premium Delivery",
      description: "Efficient cold-chain logistics network ensures fresh, premium water reaches you at optimal quality.",
      icon: "🚚"
    }
  ];

  return (
    <section id="process" className="py-32 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Section Header */}
          <div className="text-center mb-24">
            <span className="text-blue-400 font-medium text-lg tracking-wide uppercase mb-4 block">Precision Crafted</span>
            <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Our <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              Discover the meticulous journey from source to bottle, where every step 
              is engineered for uncompromising excellence.
            </p>
          </div>

          {/* Premium Process Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Connection Lines for Desktop */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                )}

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-light text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="text-4xl group-hover:animate-bounce">{step.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Certification Section */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <span className="text-2xl">🏅</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Premium Certifications</h3>
                </div>
                
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Our facility and processes are certified by NAFDAC and meet international 
                  ISO 9001 standards, ensuring the highest quality benchmarks in the industry.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {["NAFDAC Certified", "ISO 9001", "HACCP Compliant"].map((cert, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                      <span className="text-white font-semibold">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
