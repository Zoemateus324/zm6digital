import ClientsSection from "@/components/ClientSection";
import  HeroSection  from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";


export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <ServicesSection/>
      <ClientsSection/>
    </main>
  );
}
