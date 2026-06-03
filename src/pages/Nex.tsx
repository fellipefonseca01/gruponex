import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import CustomSoftware from "@/components/CustomSoftware";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Nex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <CustomSoftware />
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Nex;
