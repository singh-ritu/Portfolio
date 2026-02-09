import { CardDescription } from "../ui/Card"
import { Card, CardContent } from "../ui/Card"
import { Puzzle, Target, Zap, Users } from "lucide-react"

export const About = () => {
  const features = [
    {
      icon: Puzzle,
      title: "Problem Solver",
      description: "I tackle complex UI challenges with creative solutions, always seeking the most elegant approach."
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: " Every pixel matters. I obsess over performance, accessibility, and pixel-perfect implementations."
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Technologies evolve rapidly, and I stay ahead by continuously exploring new frameworks and tools."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Technologies evolve rapidly, and I stay ahead by continuously exploring new frameworks and tools."
    }
  ]
  return (
    <section className="py-16 md:py-24 bg-[#f7f9fa]">
      <div className="container mx-auto px-4 cursor-pointer">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-600">Behind the code...</h2>
          <p className="text-gray-500 text-md mx-auto text-pretty bg-pink-100 border border-pink-400 rounded-lg p-6 ">
            Hey there! I'm Ritu Singh, and my journey into frontend development began with a simple question:
            "How does the web actually work?" That curiosity sparked a passion that's now become my craft. Over the past year,
            I've honed my skills in React, Next.js, and Tailwind CSS, specializing in building web applications that are not just functional, but beautiful, performant, and accessible.
            I'm obsessed with the details—the perfect color palette, the smoothest animations, the most intuitive user flows. For me, coding is more than syntax;
            it's about creating digital experiences that delight users and exceed expectations.
            I'm always learning, always improving, and always excited to push the boundaries of what's possible on the web.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="shadow-md border border-gray-200 hover:border-pink-400">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#e9edf7]">
                    <Icon className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-600">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}