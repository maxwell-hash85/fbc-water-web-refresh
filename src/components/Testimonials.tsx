
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Executive Chef & Restaurant Owner",
      company: "Le Gourmet Restaurant",
      content: "FBC Table Water has elevated our dining experience to new heights. The exceptional purity and refined taste perfectly complement our culinary creations. Our discerning guests consistently praise the quality.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786"
    },
    {
      name: "Michael Chen", 
      role: "Corporate Facilities Director",
      company: "Global Tech Solutions",
      content: "Switching to FBC's premium dispenser service transformed our office environment. The impeccable quality, reliable delivery, and professional service exceed all expectations. Truly a luxury experience.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Fatima Abdul",
      role: "Luxury Event Coordinator", 
      company: "Elite Events International",
      content: "For our most exclusive events, FBC Table Water is the only choice. The sophisticated packaging and pristine quality reflect the premium standards our clients demand. Absolutely exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
      name: "David Thompson",
      role: "Premium Distribution Partner",
      company: "Thompson Luxury Goods",
      content: "Partnering with FBC has been transformative for our business. Their unwavering commitment to excellence and comprehensive support makes them the premier brand we're proud to represent.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length, isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <span className="text-blue-600 font-medium text-lg tracking-wide uppercase mb-4 block">Client Excellence</span>
            <h2 className="text-5xl md:text-7xl font-light text-slate-800 mb-8 tracking-tight">
              What Our <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              Trusted by industry leaders and discerning customers worldwide.
            </p>
          </div>

          {/* Premium Testimonial Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl p-12 md:p-16 min-h-[500px] flex items-center relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-8 left-8 text-blue-200 opacity-20">
                <Quote size={80} />
              </div>
              <div className="absolute bottom-8 right-8 text-indigo-200 opacity-20 transform rotate-180">
                <Quote size={60} />
              </div>

              <div className="w-full relative z-10">
                {/* Star Rating */}
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-3xl mx-1 animate-pulse" style={{animationDelay: `${i * 100}ms`}}>★</span>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-2xl md:text-3xl text-slate-700 mb-12 italic leading-relaxed text-center font-light">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Client Information */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="relative">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-bold text-xl text-slate-800 mb-1">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-blue-600 font-semibold mb-1">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-slate-500 font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 scale-125" 
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Premium Trust Indicators */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {[
              { metric: "10,000+", label: "Premium Clients" },
              { metric: "99.9%", label: "Satisfaction Rate" },
              { metric: "24/7", label: "Premium Support" },
              { metric: "ISO 9001", label: "Quality Certified" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
