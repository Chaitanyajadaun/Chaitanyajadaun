import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Programming Foundation",
      description:
        "Strong fundamental skills in Python and C for problem-solving.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description:
        "Developing web applications using React, HTML5, CSS3, JavaScript, and REST APIs.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description:
        "Building location-based mobile applications and services with Kotlin and Android SDK.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Hardware Engineering",
      description:
        "Specializing in Electronics and Communication Engineering (VLSI) utilizing Verilog.",
    },
  ];

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enthusiastic B.Tech student specializing in Electronics and Communication Engineering (VLSI).
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I have a strong foundation in programming and web development with hands-on experience in HTML, CSS, Python, and MySQL. Actively involved in technical societies and collaborative projects, I am passionate about building scalable applications, learning modern technologies, and tackling complex engineering challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
