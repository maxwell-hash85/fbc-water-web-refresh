

export const Products = () => {
  const products = [
    {
      name: "Premium Sachets",
      subtitle: "Pure Hydration",
      description: "Our flagship 50cl premium sachets, perfectly portioned for individual consumption. Ideal for homes, offices, events, and on-the-go hydration.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      features: ["50cl perfect portion", "NAFDAC certified quality", "Eco-friendly packaging", "Bulk orders available"],
      gradient: "from-blue-600 to-blue-700",
      badge: "Most Popular",
      icon: "💧"
    },
    {
      name: "Family Packs",
      subtitle: "Value & Convenience", 
      description: "Convenient family-sized packs containing multiple sachets. Perfect for households, small businesses, and extended gatherings.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      features: ["Multi-sachet bundles", "Cost-effective pricing", "Extended freshness", "Easy storage design"],
      gradient: "from-indigo-600 to-indigo-700",
      badge: "Great Value",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      name: "Commercial Supply",
      subtitle: "Business Solutions",
      description: "Large-scale supply solutions for businesses, institutions, and events. Custom packaging and delivery schedules available.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb", 
      features: ["Bulk wholesale pricing", "Flexible delivery schedules", "Custom branding options", "Dedicated account management"],
      gradient: "from-purple-600 to-purple-700",
      badge: "Enterprise",
      icon: "🏢"
    }
  ];

  return (
    <section id="products" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Section Header */}
          <div className="text-center mb-24">
            <span className="text-blue-600 font-medium text-lg tracking-wide uppercase mb-4 block animate-fade-in">Pure Water Solutions</span>
            <h2 className="text-5xl md:text-7xl font-light text-slate-800 mb-8 tracking-tight">
              Our <span className="font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">Products</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Experience the perfect balance of purity, convenience, and value with our premium sachet water solutions.
            </p>
          </div>

          {/* Interactive Product Cards */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {products.map((product, index) => (
              <div key={index} className="group relative transform hover:scale-[1.02] transition-all duration-700">
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 z-30">
                  <div className={`bg-gradient-to-r ${product.gradient} text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                    {product.badge}
                  </div>
                </div>

                {/* Card Background with Premium Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-700 border border-slate-100"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Premium Image Section */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                      {product.icon}
                    </div>
                    
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-sm font-medium opacity-90 mb-1">{product.subtitle}</div>
                      <div className="text-3xl font-bold">{product.name}</div>
                    </div>
                  </div>

                  {/* Premium Content Section */}
                  <div className="p-8">
                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">{product.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-600 group/item hover:text-blue-600 transition-colors duration-300">
                          <div className={`w-3 h-3 bg-gradient-to-r ${product.gradient} rounded-full mr-4 group-hover/item:animate-pulse flex-shrink-0`}></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full bg-gradient-to-r ${product.gradient} text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-[1.02] relative overflow-hidden`}>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Quote
                        <div className="w-2 h-2 bg-white rounded-full group-hover:animate-bounce"></div>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">💧</div>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                  Ready to Experience <span className="font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Pure Excellence?</span>
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of satisfied customers who trust FBC for their hydration needs. From individual sachets to bulk commercial orders.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Request Bulk Quote
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                    Become a Distributor
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-slate-600">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <span className="font-medium">NAFDAC Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">💧</span>
                </div>
                <span className="font-medium">99.9% Pure</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">⭐</span>
                </div>
                <span className="font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

