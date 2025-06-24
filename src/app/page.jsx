import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import WhyYourCompany from "@/components/sections/WhyYourCompany";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhyUs />
      <WhyYourCompany />
      <Services />
      <CTA />
    </main>
  );
};
export default Home;
