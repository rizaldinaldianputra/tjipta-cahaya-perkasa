import { Navbar } from "@/components/ui/navbar";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Owner } from "@/components/sections/owner";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-white dark:bg-gray-950">
        <HeroCarousel />
        <About />
        <Services />
        <Stats />
        <Owner />
      </main>
      <Footer />
    </>
  );
}
