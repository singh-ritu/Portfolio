"use client"
import Headers from "./components/Header";
import { Intro } from "./components/Intro";

export default function Home() {

  return (
    <div className="min-h-screen content-box">
      <Headers />
      <main>
        <div className="min-h-scre">
          <Intro />
        </div>
      </main>
    </div >
  );
}
