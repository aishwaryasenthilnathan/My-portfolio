import { ExternalLink, Github } from "lucide-react";

import devPortfolioImg from "@/assets/projects/developed-portfolio.png";
import TouristImg from "@/assets/projects/tourist-travel-website.png";
import HrConsultanImg from "@/assets/projects/consultancy-website.png";
import P2PitImg from "@/assets/projects/p2p-it-solutions.png";

const projects = [
  {
    title: "Developer Portfolio",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS featuring glassmorphism effects, smooth animations, and a sophisticated dark theme.",
    problem: "Needed a professional portfolio that stands out from generic templates",
    solution: "Designed a handcrafted portfolio with custom animations, glass effects, and unique typography",
    outcome: "Created a recruiter-friendly showcase demonstrating full-stack design and development skills",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: window.location.origin,
    image: devPortfolioImg ,
  },
  {
    title: "Udemy Clone",
    description: "A learning platform replica with dynamic course display and smooth navigation. Built to understand component architecture and state management in React.",
    problem: "Wanted to learn how large-scale learning platforms structure their content",
    solution: "Built a fully responsive clone with course cards, categories, and navigation",
    outcome: "Deepened understanding of React patterns and component reusability",
    tech: ["React", "CSS", "JavaScript"],
    liveUrl: "https://udemy-react-mu-hazel.vercel.app/",
    image: "https://aishu-dev-portfolio.netlify.app/image/image.png",
  },
  {
    title: "Greenden",
    description: "A plant-themed responsive website showcasing modern CSS techniques and interactive JavaScript elements.",
    problem: "Needed hands-on practice with responsive design and CSS layouts",
    solution: "Designed a clean, nature-inspired UI with mobile-first approach",
    outcome: "Mastered CSS Grid, Flexbox, and responsive breakpoints",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://aishwaryasenthilnathan.github.io/Greendenwithjs/",
    image: "https://aishu-dev-portfolio.netlify.app/image/image%20copy.png",
  },
  {
    title: "Personal Finance Tracker",
    description: "A web application to log expenses, set budgets, and monitor savings with data visualization.",
    problem: "Personal finance tools felt either too complex or too basic",
    solution: "Built a simple, focused tracker with clear budget insights",
    outcome: "Learned form handling, data persistence, and basic Python backend",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    image: "https://aishu-dev-portfolio.netlify.app/image/image%20copy%202.png",
  },
  {
    title: "2Tourist - Travel Website",
    description: "A visually appealing travel and tourism website showcasing destinations, travel packages, and booking features with modern UI design.",
    problem: "Wanted to create an engaging platform that inspires travel exploration",
    solution: "Designed an immersive travel website with stunning visuals and intuitive navigation",
    outcome: "Built a complete tourism platform demonstrating UI/UX design skills",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://2tourist.netlify.app/",
    image: TouristImg,
  },
  {
    title: "P2P IT Solutions",
    description: "A professional corporate website for an IT solutions company featuring service offerings, company information, and client engagement features.",
    problem: "Needed to create a professional web presence for an IT services company",
    solution: "Developed a clean, corporate website with clear service presentation and call-to-actions",
    outcome: "Delivered a business-ready website that effectively communicates company value",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://p2pitsolutions.netlify.app/",
    image: P2PitImg,
  },
  {
    title: "HR Consultancy Website",
    description: "A professional HR consultancy website featuring recruitment services, career opportunities, and employer solutions with a modern corporate design.",
    problem: "HR consultancy needed an online presence to connect employers and job seekers",
    solution: "Created a professional platform showcasing HR services with easy navigation",
    outcome: "Built a functional consultancy website improving client outreach and engagement",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://hr-consultancy-website.netlify.app/",
    image: HrConsultanImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real problems, real solutions. Each project taught me something new.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="project-card overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-display text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Case study details */}
                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <span className="text-primary font-medium text-sm min-w-[70px]">Problem:</span>
                    <span className="text-muted-foreground text-sm">{project.problem}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-medium text-sm min-w-[70px]">Solution:</span>
                    <span className="text-muted-foreground text-sm">{project.solution}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-medium text-sm min-w-[70px]">Outcome:</span>
                    <span className="text-muted-foreground text-sm">{project.outcome}</span>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-tag text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href="https://github.com/aishwaryasenthilnathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
