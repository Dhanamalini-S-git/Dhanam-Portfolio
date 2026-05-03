import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Donify",
    description:
      "A smart donating platform that connects donors and acceptors seamlessly. Built with a full-stack approach to enable real-time donation tracking and management.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop",
    technologies: ["MongoDB", "Node.js", "JavaScript", "React"],
    github: "https://github.com/Dhanamalini-S-git",
    live: "#",
  },
  {
    title: "College Attendance Monitoring",
    description:
      "Automated attendance monitoring system using BLE Beacon Module for real-time student tracking in college premises.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop",
    technologies: ["Java", "SQL", "Springboot", "Excel"],
    github: "https://github.com/Dhanamalini-S-git",
    live: "#",
  },
  {
    title: "Web Scraping ",
    description:
      "A Python-based web scraping tool that extracts, processes, and structures data from websites for analysis and reporting.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
    technologies: ["Python", "BeautifulSoup", "Pandas", "Requests"],
    github: "https://github.com/Dhanamalini-S-git",
    live: "#",
  },
  {
    title: "Connexa",
    description:
      "A healthcare-based website that connects patients with doctors and medical services, enabling seamless appointment booking and health record management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Dhanamalini-S-git",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)] max-w-[500px] bg-secondary rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-background rounded-full text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
