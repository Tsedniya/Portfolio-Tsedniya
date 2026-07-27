// ProjectsSection.jsx
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import photo from "../assets/projects/photo.jpg";
import project2Img from "../assets/projects/project2.jpg";
import project3Img from "../assets/projects/project3.jpg";
import project4Img from "../assets/projects/project4.jpg";
import ge from "../assets/projects/ge.jpg";
import tsehay from "../assets/projects/tsehay.jpg";
import confix from  "../assets/projects/confix.jpg";

const projects = [
  {
    id: 1,
    title: "Website of Grand Bishoftu Hospital",
    description:
      "A beautiful Grand Bishoftu Hospital website using React and Tailwind.",
    image: ge,
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/Tsedniya/Grand_Bishoftu_Hospital",
    deploy: "https://bishoftugeneralhospital.netlify.app/",
  },
  {
    id: 2,
    title: "ConfiX",
    description: "Conference management system with role-based access, conference creation, speaker proposals, session scheduling.",
    image: confix,
    tags: ["TypeScript", "Next.js", "TailwindCSS"],
    githubUrl: "https://github.com/Tsedniya/ConfiX",
    deploy: "", 
  },
  {
    id: 3,
    title: "Real Estate Marketplace",
    description:
      "MERN real estate marketplace with JWT authentication, Google OAuth, Redux Toolkit, property listings, and profile management.",
    image: tsehay,
    tags: ["MERN Stack"],
    githubUrl: "https://github.com/Tsedniya/Real-Estate-Marketplace",
    deploy: "https://real-estate-marketplace-frontend-xi.vercel.app/",
  },
  {
    id: 4,
    title: "Grocery Delivery Website",
    description: "Grocery Delivery Website built with React and Tailwind.",
    image: project4Img,
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/Tsedniya/Grocery-Delivery-Website",
    deploy: "https://grocery-delivery-website-eight.vercel.app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built with careful
          planning, attention to detail, and a focus on smooth user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl cosmic-button text-white text-sm font-medium "
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-300 text-foreground hover:cosmic-button"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Tsedniya"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
