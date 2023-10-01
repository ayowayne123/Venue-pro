import Hero from "@/components/Hero";
import Image from "next/image";
import CitiesSection from "@/components/CitiesSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CitiesSection />
    </main>
  );
}
