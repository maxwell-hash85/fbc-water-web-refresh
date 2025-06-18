
export const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block">
              <span className="text-blue-600 font-medium text-lg tracking-wide uppercase mb-4 block">Excellence Defined</span>
              <h2 className="text-5xl md:text-7xl font-light text-slate-800 mb-8 tracking-tight">
                About <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">FBC</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Where purity meets perfection through advanced purification technology 
              and uncompromising quality standards.
            </p>
          </div>

          {/* Premium Story Section */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                alt="Premium water source" 
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">Our Legacy</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mb-8"></div>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Born from an unwavering commitment to excellence, FBC Table Water represents 
                the pinnacle of hydration luxury. Our journey began with a singular vision: 
                to transform the very essence of purity into an experience that transcends ordinary expectations.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Through state-of-the-art purification technology and meticulous quality assurance, 
                we've cultivated a reputation that speaks to discerning customers who accept nothing less than perfection.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-slate-600 font-medium">Purity Level</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">100K+</div>
                  <div className="text-slate-600 font-medium">Satisfied Customers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M",
                title: "Mission",
                description: "To redefine hydration through unparalleled purity, transforming every drop into a testament of our commitment to excellence and well-being.",
                gradient: "from-blue-600 to-blue-700"
              },
              {
                icon: "V", 
                title: "Vision",
                description: "To be the world's most revered water brand, synonymous with luxury, purity, and the highest standards of customer satisfaction.",
                gradient: "from-indigo-600 to-indigo-700"
              },
              {
                icon: "Q",
                title: "Quality",
                description: "NAFDAC certified excellence with rigorous multi-stage quality control, ensuring every product surpasses international standards.",
                gradient: "from-purple-600 to-purple-700"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500"></div>
                <div className="relative p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-white text-2xl font-bold">{item.icon}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
