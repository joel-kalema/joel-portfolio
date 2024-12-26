import HomePage from '@/components/homepage'
import About from "@/components/about";
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
