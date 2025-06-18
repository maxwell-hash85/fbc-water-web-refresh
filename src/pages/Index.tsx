
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Distributor } from "@/components/Distributor";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Process />
      <Testimonials />
      <Distributor />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
