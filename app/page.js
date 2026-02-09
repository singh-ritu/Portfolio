"use client"
import { About } from "./components/About";
import Headers from "./components/Header";
import { Intro } from "./components/Intro";

export default function Home() {

  return (
    <div className="min-h-screen content-box">
      <Headers />
      <main>
        <div className="min-h-scre">
          <Intro />
          <About />
        </div>
      </main>
    </div >
  );
}
