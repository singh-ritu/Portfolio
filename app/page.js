"use client"
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";

export default function Home() {

  return (
    <div className="min-h-screen content-box">
      <Header />
      <main>
        <div className="min-h-scre">
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </div>
      </main>
    </div >
  );
}
