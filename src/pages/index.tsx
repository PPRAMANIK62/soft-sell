import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
