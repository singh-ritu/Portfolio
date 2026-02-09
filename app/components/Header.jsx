
import Link from "next/link"
import { Code2 } from "lucide-react"
import Button from "../ui/Button";
import { useState } from "react";

export const Header = () => {
  const [hired, setHired] = useState(false);

  const handleHireMe = async () => {
    const email = 'singhritu241101@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      setHired(true);
      setTimeout(() => setHired(false), 2000);

      window.location.href = `mailto:${email}`;
    } catch (err) {
      window.location.href = `mailto:${email}`;
    }
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b-gray-700 bg-white shadow-sm cursor-pointer">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="text-pink-500" size={28} />
          <span className="text-xl text-pink-500 font-bold">Ritu Singh</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#about" className="text-md font-semibold text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            About
          </Link>
          <Link href="/#skills" className="text-md font-semibold text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            Skills
          </Link>
          <Link href="/#projects" className="text-md font-semibold text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            Projects
          </Link>
          <Link href="/#experience" className="text-md font-semibold  text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            Experience
          </Link>
          <Link href="/#contact" className="text-md font-semibold text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button onClick={handleHireMe}>Hire Me</Button>
        </div>
      </div>
    </header>
  )
}
