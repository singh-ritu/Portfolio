import Image from "next/image";
import jobPortal from "../public/job-portal.png";
import milkify from "../public/milkify.png";
import socialSurge from "../public/social-surge.png";
import { Card, CardContent } from "../ui/Card";
import { Link } from "lucide-react";
export const Projects = () => {
  const projects = [
    {
      image: jobPortal,
      title: "Job Portal",
      description: "A web application that allows users to search and apply for jobs, as well as manage their applications and resumes.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://job-portal-2rzq.vercel.app/"
    },
    {
      image: milkify,
      title: "Milkify",
      description: "A web application that allows users to order milk and other dairy products online, with features such as subscription plans and delivery tracking.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "http://milkify-one.vercel.app/"
    },
    {
      image: socialSurge,
      title: "Social Surge",
      description: "A social media platform that allows users to connect with friends, share updates, and discover new content.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://social-surge.vercel.app/"
    }
  ]
  return (
    <section className="py-16 md:py-24 bg-[#f7f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-600">Selected Projects</h2>
          <p className="text-gray-500 text-md mx-auto text-pretty">Explore a collection of web applications I've built using React, Next.js, and modern tools
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {

            return (
              <Card key={project.title} className="shadow-md border border-gray-200 hover:bg-pink-100 transition duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center w-full rounded-lg bg-[#e9edf7]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-md border border-gray-200 shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-600">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                  <div className="mt-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="inline-block bg-gray-100 border border-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.githubLink} className="inline-flex items-center justify-center text-sm font-medium text-pink-500 hover:text-pink-500 mt-4">
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}