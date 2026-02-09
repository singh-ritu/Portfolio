"use client"
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen content-box">
      <Header />
      <main>
        <div className="min-h-screen">
          <Intro />
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div >
  );
}
