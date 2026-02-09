import { Card, CardContent } from "../ui/Card"

const experiences = [
  {
    title: "Frontend Intern",
    company: "Superbrain",
    duration: "Jan 2025 - June 2025",
    description: "Collaborated with senior developers to build responsive web applications using React and TypeScript.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Git"]
  },
  {
    title: "Frontend Developer",
    company: "Superbrain",
    duration: "July 2025 - Dec 2025",
    description: "Leading the development of user-friendly interfaces and optimizing performance for a SaaS platform.",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git"]
  }
]

export const Experience = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 cursor-pointer">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-600">Development Journey</h2>
          <p className="text-gray-500 text-md mx-auto text-pretty">My professional journey and work experience.</p>
        </div>

        <div className="flex gap-6">
          {experiences.map((experience) => {

            return (
              <Card key={experience.title} className="shadow-md border border-pink-200 hover:border-pink-300">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-pink-100">
                    <h3 className="text-sm font-semibold text-gray-600">{experience.company}</h3>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-600">{experience.title}</h3>
                  <span className="inline-block bg-pink-100 font-semibold border border-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full mr-2 mb-2">{experience.duration}</span>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{experience.description}</p>
                  <div className="mt-4">
                    {experience.techStack.map((tech) => (
                      <span key={tech} className="inline-block border border-gray-200 text-gray-600 hover:border-pink-200 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}