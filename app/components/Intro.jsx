
import Button from "../Button";
export const Intro = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 text-gray-600">
            Hi, I'm <span className="text-pink-400">Ritu Singh</span>
          </h1>
          <p className="text-md md:text-xl text-gray-500 text-pretty max-w-xl mx-auto mb-8">
            Frontend Developer with 1 year of hands-on experience building responsive, accessible web apps. I focus on clean code, performance, and delightful user experiences.
          </p>
          <div className="flex gap-5 items-center justify-center mt-30">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline">Contact</Button>
          </div>
          <div className="flex gap-3 items-center justify-center mt-10 text-sm text-gray-500 cursor-pointer">
            <span className="border border-gray-200 shadow-md px-6 py-2 rounded-full hover:text-pink-400 hover:border-pink-400">React</span>
            <span className="border border-gray-200 shadow-md px-6 py-2 rounded-full hover:text-pink-400 hover:border-pink-400">Next.js</span>
            <span className="border border-gray-200 shadow-md px-6 py-2 rounded-full hover:text-pink-400 hover:border-pink-400">JavaScript</span>
            <span className="border border-gray-200 shadow-md px-6 py-2 rounded-full hover:text-pink-400 hover:border-pink-400">TypeScript</span>
            <span className="border border-gray-200 shadow-md px-6 py-2 rounded-full hover:text-pink-400 hover:border-pink-400">HTML/CSS</span>
            <span className="border border-gray-200 shadow-md px-6 py-2 rounded-full hover:text-pink-400 hover:border-pink-400">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  )
}