import Button from "../Button"
import { Card, CardContent } from "../ui/Card"

export const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f7f9fa]">
      <div className="container mx-auto px-4 cursor-pointer">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-600">Get In Touch</h2>
          <p className="text-gray-500 text-md mx-auto text-pretty">Open to new opportunities and collaborations.</p>
        </div>

        <div className="flex items-center justify-center">
          <Card className="shadow-md border border-pink-200  px-20">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex items-center justify-center px-4 py-2 rounded-lg">
                <h3 className="text-md font-md text-gray-600">I'm open to collaborating on interesting projects. Feel free to reach out!</h3>
              </div>
              <div className="flex items-center justify-center gap-4 my-6">
                <Button variant="primary">Email</Button>
                <Button variant="primary">LinkedIn</Button>
                <Button variant="primary">Download Resume</Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}