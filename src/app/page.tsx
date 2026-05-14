// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PodcastSection from "@/components/PodcastSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PodcastSection />
      <VideoSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
