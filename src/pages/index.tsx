import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Index;
