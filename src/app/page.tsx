import Hero from "@/components/landing/Hero";
import Navbar from "@/components/layout/Navbar";
import Philosophy from "@/components/landing/Philosophy";
import ProductPipeline from "@/components/landing/ProductPipeline";
import CoreModules from "@/components/landing/CoreModules";
import InteractiveDemo from "@/components/landing/InteractiveDemo";
import EnterpriseCapabilities from "@/components/landing/EnterpriseCapabilities";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Philosophy />
      <ProductPipeline />
      <CoreModules />
      <InteractiveDemo />
      <EnterpriseCapabilities />
      <Footer />
    </main>
  );
}
