"use client"
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Intro } from "./components/Intro";

export default function Home() {

  return (
    <div className="min-h-screen content-box">
      <Header />
      <main>
        <div className="min-h-scre">
          <Intro />
          <About />
          <Skills />
        </div>
      </main>
    </div >
  );
}
