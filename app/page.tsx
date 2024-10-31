import Image from "next/image";
import HomePage from '@/components/homepage'
import About from "@/components/about";
import Projects from '@/components/projects';

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Projects />
    </>
  );
}
