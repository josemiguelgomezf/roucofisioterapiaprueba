import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Therapies from "@/components/landing/Therapies";
import Testimonials from "@/components/landing/Testimonials";
import WhyUs from "@/components/landing/WhyUs";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Therapies />
        <Testimonials />
        <WhyUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
