
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

// Expanded project data with new projects targeting specific roles
const projects = [
  {
    id: 1,
    title: "Verlet Integration Visualizer",
    description: "Developed a user-friendly Physics Simulator using C++ and SDL2, applying Verlet integration algorithms for accurate visualization and simulation of physical principles. Designed interactive features to allow real-time interaction with simulated physical systems.",
    image: "/placeholder.svg",
    tags: ["C++", "SDL2", "Physics", "Simulation"],
    liveUrl: "#",
    repoUrl: "https://github.com/michaeladitya78/verlet-integration-sdl",
    category: "technical"
  },
  {
    id: 2,
    title: "Reddit x Discord Bot",
    description: "Developed a dynamic Discord bot using Node.js and discord.js, capable of fetching and displaying random top Reddit posts based on user commands by integrating Reddit's API. Designed an intuitive command system for user interaction.",
    image: "/placeholder.svg",
    tags: ["NodeJS", "DiscordJS", "Reddit API", "Javascript"],
    liveUrl: "#",
    repoUrl: "https://github.com/michaeladitya78/reddit_discord",
    category: "technical"
  },
  {
    id: 3,
    title: "Dubai Tour Ticket",
    description: "Explore the best of Dubai's landmarks and experiences, an unforgettable adventure in the city of tourists. Plan your dream trip to Dubai with this comprehensive guide, featuring must-visit attractions like the Burj Khalifa and Desert Safari.",
    image: "/placeholder.svg",
    tags: ["Web Development", "Tourism", "Travel"],
    liveUrl: "https://tickets-dubai.co",
    repoUrl: "#",
    category: "content"
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description: "Interactive financial dashboard for tracking investments, analyzing market trends, and visualizing portfolio performance with real-time data integration and customizable alerts.",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "Financial API", "Data Visualization"],
    liveUrl: "#",
    repoUrl: "#",
    category: "financial"
  },
  {
    id: 5,
    title: "AI Chatbot Framework",
    description: "Developed a customizable chatbot framework using natural language processing that can be integrated into various business applications. Features include sentiment analysis, custom knowledge base integration, and adaptive learning.",
    image: "/placeholder.svg",
    tags: ["Python", "NLP", "Machine Learning", "API Integration"],
    liveUrl: "#",
    repoUrl: "#",
    category: "ai"
  },
  {
    id: 6,
    title: "Content Analytics Platform",
    description: "Built an analytics platform that helps content creators track engagement metrics, optimize posting schedules, and identify high-performing topics across multiple social media platforms.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Data Analytics", "Content Strategy"],
    liveUrl: "#",
    repoUrl: "#",
    category: "content"
  },
  {
    id: 7,
    title: "No-Code Workflow Builder",
    description: "Created a drag-and-drop interface for building automated workflows between popular tools and services, enabling non-technical users to create powerful integrations without writing code.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "API Integration", "Automation", "No-Code"],
    liveUrl: "#",
    repoUrl: "#",
    category: "technical"
  },
  {
    id: 8,
    title: "Predictive Market Analysis Tool",
    description: "Developed a financial analytics tool that uses machine learning to identify market patterns and provide investment recommendations based on historical data and current market conditions.",
    image: "/placeholder.svg",
    tags: ["Machine Learning", "Financial Analysis", "Predictive Modeling", "Data Visualization"],
    liveUrl: "#",
    repoUrl: "#",
    category: "financial"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      ref={ref}
      className="section-container py-24 bg-cursor-gradient relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-10"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-cursor-light-gray/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Showcasing my work across technical, content, and financial domains"
        />
        
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setFilter("all")}
          >
            All Projects
          </Button>
          <Button 
            variant={filter === "technical" ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setFilter("technical")}
          >
            Technical
          </Button>
          <Button 
            variant={filter === "content" ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setFilter("content")}
          >
            Content
          </Button>
          <Button 
            variant={filter === "financial" ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setFilter("financial")}
          >
            Financial
          </Button>
          <Button 
            variant={filter === "ai" ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setFilter("ai")}
          >
            AI & Automation
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-card group overflow-hidden border border-cursor-light-gray/30 hover:border-accent/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cursor-gradient opacity-50 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-cursor-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.liveUrl !== "#" && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-cursor-dark p-2 rounded-full hover:bg-accent/80 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                    {project.repoUrl !== "#" && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-cursor-dark p-2 rounded-full hover:bg-accent/80 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-['SF_Pro_Display']">{project.title}</h3>
                <p className="text-muted-foreground mb-4 font-['SF_Pro_Text']">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      className="bg-cursor-darker text-accent hover:bg-cursor-gray font-['SF_Pro_Text']"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Call to action */}
                <Button 
                  variant="ghost" 
                  className="group/btn px-0 text-accent hover:bg-transparent font-['SF_Pro_Text']"
                  asChild
                >
                  <a href={project.liveUrl !== "#" ? project.liveUrl : project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <span className="cursor-underline">View Project</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
