import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
  technologies,
}) => {
  return (
    <div className="project-card hover-lift h-full">
      <div className="h-48 overflow-hidden">
        <img src={`/projectimage/${image}`} alt={title} className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm h-20 overflow-hidden">{description}</p>
        
        <div className="flex flex-wrap gap-2 py-2">
          {technologies.map((tech) => (
            <span key={tech} className="text-xs bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white bg-neon-blue/20 hover:bg-neon-blue/30 py-2 px-3 rounded-md transition-colors hover-target"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white bg-gray-700/30 hover:bg-gray-700/50 py-2 px-3 rounded-md transition-colors hover-target"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Wacky UI",
      description: "Wacky UI is a modern component library offering 100+ premium UI elements built with Tailwind CSS 4.0 and shadcn/ui. Designed for React and Next.js apps, it helps developers craft sleek interfaces with ease and speed.",
      image: "WackyUI.png",
      demoLink: "https://wackyui.vercel.app/",
      githubLink: "https://github.com/MohdWaqar98/wackyui",
      technologies: ["Next.js", "React", "Framer Motion", "Shadcn/ui", "Tailwind CSS"],
    },
    {
      title: "Ganga Mitra",
      description: "GangaMitra is an AI-enabled decision support system that integrates satellite, IoT, and hydrological data to deliver real-time and forecasted water quality insights for the Ganga River.",
      image: "GangaMitra.png",
      demoLink: "https://ganga-tech-flame.vercel.app/",
      githubLink: "https://github.com/MohdWaqar98/Ganga-Tech",
      technologies: ["Java", "SpringBoot", "MySQL", "React", "Javascript", "Tailwind CSS", "Flask"],
    },
    {
      title: "Information Chaos",
      description: "Information Chaos is a desktop web platform designed to visualize and analyze real-time and historical water quality data from multiple sources.",
      image: "InformationChaos.png",
      demoLink: "https://information-chaos.vercel.app/",
      githubLink: "https://github.com/MohdWaqar98/GangaMitra",
      technologies: ["Java", "SpringBoot", "MySQL", "React", "Typescript", "Tailwind CSS", "Flask" , "Framer Motion"],
    },
    {
      title: "Smart Call",
      description: "Smart Call is a comprehensive contact management system built using Java Spring Boot with Maven as the backend, and HTML, Tailwind CSS, and JavaScript as the frontend.",
      image: "SmartCall.png",
      demoLink: "https://github.com/MohdWaqar98/SmartCall",
      githubLink: "https://github.com/MohdWaqar98/SmartCall",
      technologies: ["HTML", "Tailwind CSS", "Javascript", "Java", "Spring Boot", "Maven", "MySQL", "Thymeleaf", "OAuth2"],
    },
    {
      title: "Karna",
      description: "Karna is a Jupyter Notebook-based tool that converts speech to text in 10+ Indian languages using Python and the Google Web Speech API — all without paid APIs or complex UI.",
      image: "Karna.png",
      demoLink: "https://github.com/MohdWaqar98/Karna",
      githubLink: "https://github.com/MohdWaqar98/Karna",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Speech_recognition",
        "Ipywidgets",
        "Pyaudio",
        "Google Web Speech API"
      ]
      ,
    },
    {
      title: "Stockify",
      description: "Stockify is a sleek landing page designed for a stock simulator platform, showcasing key features and market insights. It offers a clean UI to attract users and guide them into simulated trading experiences.",
      image: "Stockify.png",
      demoLink: "https://stockify123.netlify.app/",
      githubLink: "https://github.com/MohdWaqar98/Stockify",
      technologies: ["HTML", "Tailwind CSS", "Javascript"],
    },
    {
      title: "Watches Landing Page",
      description: "Watch Website is a sleek eCommerce platform showcasing a curated collection of stylish timepieces for every occasion. Built with HTML, CSS & JavaScript, it offers a smooth and user-friendly shopping experience.",
      image: "watchweb.png",
      demoLink: "https://lovely-kleicha-d0aad6.netlify.app/",
      githubLink: "https://github.com/MohdWaqar98/Watch-Website",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Body X Gym Landing Page",
      description: "Body X Gym is a dynamic fitness-themed website crafted using HTML, CSS, and JavaScript to showcase modern design and functionality. Grateful for your visit—your support fuels my passion for web development!",
      image: "gymweb.png",
      demoLink: "https://moonlit-kashata-616df5.netlify.app/",
      githubLink: "https://github.com/MohdWaqar98/Fitness-Website",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Christmas Wishing Page",
      description: "Christmas Celebration is a joyful, festive website designed to spread holiday cheer through vibrant visuals and interactive elements. Built with HTML, CSS, and JavaScript to capture the magic of the season.",
      image: "wishweb.png",
      demoLink: "https://imaginative-haupia-38f298.netlify.app/",
      githubLink: "https://github.com/MohdWaqar98/Christmas-Website",
      technologies: ["HTML", "CSS", "Javascript"],
    },
  ];

  // Use the shadcn/ui Carousel component for smooth transitions
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-black/80 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-4">
          <Code size={24} className="text-neon-purple" />
          <h2 className="section-heading">Projects</h2>
        </div>
        
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Here are some of my recent projects showcasing my skills and experience as a Java Full Stack Developer.
        </p>
        
        <div className="relative">
          <Carousel
            opts={{ 
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="gap-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <Project {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-4">
              <CarouselPrevious className="static transform-none rounded-full bg-gray-800/60 hover:bg-gray-700/80 text-white transition-all duration-300 hover:scale-110 focus:outline-none" />
              <CarouselNext className="static transform-none rounded-full bg-gray-800/60 hover:bg-gray-700/80 text-white transition-all duration-300 hover:scale-110 focus:outline-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
