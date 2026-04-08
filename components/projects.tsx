import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Metro Station Alert App",
      description:
        "Developed a GPS-based mobile application that alerts users when they are nearing their selected destination, preventing missed stops during travel. It uses real-time location tracking to trigger notifications.",
      tags: ["Kotlin", "Android SDK", "Google Location Services"],
      liveLink: null,
    },
    {
      title: "AI Virtual Try-On Web App",
      description:
        "Developed a Claude-integrated web application that generates customizable human avatars based on user-defined physical attributes and simulates clothing try-ons using uploaded images. Leveraged NanoBanana API along with computer vision and diffusion models for realistic results, with a React frontend and FastAPI backend, enabling applications in fashion, e-commerce, and virtual styling.",
      tags: ["React", "FastAPI", "PyTorch", "OpenCV", "Stable Diffusion"],
      liveLink: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.liveLink && (
                      <div className="project-links mt-4">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Removed Open Source section for Chaitanya */}
        </div>
      </div>
    </section>
  )
}
