import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import NewsAndEvents from "@/components/NewsAndEvents";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <NewsAndEvents />
      <Testimonials />
    </main>
  );
}
