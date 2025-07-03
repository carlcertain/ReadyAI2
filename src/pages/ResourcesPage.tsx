import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileDown, BookOpenCheck, Github, Globe, LucideIcon, LucidePercentDiamond } from "lucide-react";

const resources = [
  {
    title: "Agent Diagram",
    description: "Visualize how agents interact with LLMs, data sources, and tools.",
    icon: BookOpenCheck,
    link: "/resources/agent-diagram",
  },
  {
    title: "AI Stack Explained",
    description: "Explore Ready.ai’s full AI stack from secure infra to LLMs and tools.",
    icon: FileDown,
    link: "/resources/ai-stack",
  },
  {
    title: "Developer Docs",
    description: "Step-by-step guides for integrating agents, workflows, and APIs.",
    icon: Github,
    link: "https://github.com/your-org/dev-docs",
  },
  {
    title: "Embed Your Data",
    description: "Upload files, crawl websites, or connect data sources like Google Drive.",
    icon: Globe,
    link: "/resources/embed-data",
  },
  {
    title: "Live Playground",
    description: "Try building workflows with agents, RAG, and API calls in real time.",
    icon: LucidePercentDiamond, // You can replace with a better-fitting icon
    link: "/playground",
  },
];


const ResourcesPage: React.FC = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-10 md:pt-24 md:pb-14">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Resources</span>
            </h1>
          </div>
        </div>
      </div>
      </div>

      
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map(({ title, description, icon: Icon, link }) => (
            <p
              key={title}
              className="group bg-accent2-lighter rounded-2xl p-6 flex flex-col items-start space-y-4 hover:bg-accent2-light transition-all shadow-md"
            >
              <div className="bg-accent2 text-white p-3 rounded-xl">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-accent2 font-semibold group-hover:text-accent2">{title}</h3>
              <p className="text-sm text-accent2 group-hover:text-accent2">
                {description}
              </p>
            </p>
          ))}
        </div>
</div>
    </div>    
  );
};

export default ResourcesPage;