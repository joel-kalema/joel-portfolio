import Image from "next/image";
import HomePage from '@/components/homepage'
import About from "@/components/about";
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
