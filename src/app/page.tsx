// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PodcastSection from "@/components/PodcastSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PodcastSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
