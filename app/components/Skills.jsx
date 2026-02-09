import { Component, FileCode, GitBranch, Palette, Sparkles, Rocket, Server, ShieldCheck, Zap } from "lucide-react"
import { Card, CardContent } from "../ui/Card"
export const Skills = () => {

  const skills = [
    {
      title: "HTML",
      description: "Building the skeleton of the web with clean, semantic HTML5 that's accessible and SEO-friendly.",
      icon: FileCode
    },
    {
      title: "CSS",
      description: "Crafting pixel-perfect, responsive designs with modern CSS techniques and smooth animations.",
      icon: Palette
    },
    {
      title: "JavaScript",
      description: "Building interactive web experiences with modern ES6+ JavaScript and best practices.",
      icon: Zap
    },
    {
      title: "React",
      description: "Creating dynamic, component-driven interfaces with React hooks and modern patterns.",
      icon: Component
    },
    {
      title: "TypeScript",
      description: "Writing safer, more predictable code with TypeScript's powerful type system.",
      icon: ShieldCheck
    },
    {
      title: "Next.js",
      description: "Building lightning-fast, production-ready applications with Next.js's powerful features.",
      icon: Rocket
    },
    {
      title: "Tailwind CSS",
      description: "Crafting modern, responsive designs quickly with Tailwind's utility-first approach.",
      icon: Sparkles
    },
    {
      title: "Git",
      description: "Version control mastery for collaborative development and clean code history.",
      icon: GitBranch
    },
    {
      title: "RESTful APIs",
      description: "Integrating and consuming RESTful APIs to connect frontends with powerful backend services",
      icon: Server
    }
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 cursor-pointer">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-600">Skills & Expertise</h2>
          <p className="text-gray-500 text-md mx-auto text-pretty">A comprehensive overview of my technical expertise and proficiency levels</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <Card key={skill.title} className="shadow-md border border-gray-200 hover:border-cyan-400">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#e9edf7]">
                    <Icon className="h-6 w-6 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-600">{skill.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}