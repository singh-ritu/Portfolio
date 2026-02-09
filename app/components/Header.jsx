import react from "react"
import Link from "next/link"
import { Code, Sparkles, Code2 } from "lucide-react"
import { useRouter } from "next/navigation";
import Button from "./Button";

const Header = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b-gray-700 bg-white shadow-sm cursor-pointer">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="text-pink-500" size={28} />
          <span className="text-xl text-pink-500 font-bold">Ritu Singh</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#jobs" className="text-md font-semibold text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            About
          </Link>
          <Link href="/#companies" className="text-md font-semibold text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            Skills
          </Link>
          <Link href="/#about" className="text-md font-semibold text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            Projects
          </Link>
          <Link href="/#contact" className="text-md font-semibold  text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            Experience
          </Link>
          <Link href="/#contact" className="text-md font-semibold text-gray-500 rounded-md py-2 px-4 hover:bg-pink-100 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button>Hire Me</Button>
        </div>
      </div>
    </header>
  )
}
export default Header;