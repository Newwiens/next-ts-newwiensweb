import { About } from "@/components/sections/Hero/About";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Hero/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
    </>
  );
}
