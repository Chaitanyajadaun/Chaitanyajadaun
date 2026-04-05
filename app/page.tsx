import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import type { Metadata } from "next"
import { enableBlogSection, enableProjectsSection } from "@/lib/utils"
import Skills from "@/components/skills"

export const metadata: Metadata = {
  title: "Chaitanya Kumar Jadaun | Enthusiastic B.Tech Student",
  description:
    "Portfolio of Chaitanya Kumar Jadaun, a B.Tech student specializing in Electronics and Communication Engineering (VLSI) with strong web development skills.",
};

export default function Home() {
  const showProjects = enableProjectsSection();
  const showBlog = enableBlogSection();
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Skills />
      {showProjects && <Projects />}
      <Education />
      {showBlog && <Blog />}
      <Contact />
    </div>
  );
}
