import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Engineering } from "@/components/engineering";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <Engineering />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
