import HomePage from '@/components/homepage'
import About from "@/components/about";
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import TopBar from '@/components/topbar';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TopBar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
