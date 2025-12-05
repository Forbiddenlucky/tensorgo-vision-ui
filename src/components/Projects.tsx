import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Figma, ArrowRight, Layers, Users, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const projects = [
  {
    id: 'travelgo',
    title: 'TravelGo',
    category: 'UI/UX Design',
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    description: 'A comprehensive travel booking platform with intuitive user experience',
    tools: ['Figma', 'Adobe XD', 'Photoshop'],
    caseStudy: {
      problem: 'Travelers struggle with fragmented booking experiences across multiple platforms, leading to frustration and time waste.',
      solution: 'Created a unified travel platform that combines flights, hotels, and activities in a seamless, user-friendly interface.',
      process: ['User Research', 'Competitive Analysis', 'Wireframing', 'High-fidelity Design', 'Prototyping', 'User Testing'],
      impact: 'Reduced booking time by 40% and improved user satisfaction scores by 35%',
      figmaLink: '#',
    },
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Redesign',
    category: 'Product Design',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    description: 'Complete redesign of an e-commerce platform focusing on conversion optimization',
    tools: ['Figma', 'Protopie', 'Illustrator'],
    caseStudy: {
      problem: 'High cart abandonment rates and poor mobile experience were hurting sales and customer retention.',
      solution: 'Redesigned the entire shopping flow with mobile-first approach, simplified checkout, and personalized recommendations.',
      process: ['Data Analysis', 'User Interviews', 'Journey Mapping', 'A/B Testing', 'Design System Creation'],
      impact: 'Increased conversion rate by 28% and reduced cart abandonment by 45%',
      figmaLink: '#',
    },
  },
  {
    id: 'portfolio',
    title: 'Portfolio UI',
    category: 'Web Design',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    description: 'Modern portfolio website design with clean aesthetics and micro-interactions',
    tools: ['Figma', 'After Effects', 'Spline'],
    caseStudy: {
      problem: 'Creative professionals need standout portfolios that showcase their work while maintaining usability.',
      solution: 'Designed a visually striking portfolio template with smooth animations and optimal content hierarchy.',
      process: ['Mood Boarding', 'Style Exploration', 'Component Design', 'Animation Planning', 'Responsive Design'],
      impact: 'Template downloaded 500+ times with 4.8/5 average rating',
      figmaLink: '#',
    },
  },
  {
    id: 'firewall',
    title: 'Firewall Automation',
    category: 'Tech Project',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    description: 'Automated firewall management system with intuitive dashboard interface',
    tools: ['Python', 'Bash', 'Linux', 'Figma'],
    caseStudy: {
      problem: 'Manual firewall configuration is time-consuming, error-prone, and requires deep technical knowledge.',
      solution: 'Built an automated system with a user-friendly dashboard that simplifies firewall management for IT teams.',
      process: ['Requirements Gathering', 'System Architecture', 'UI Design', 'Script Development', 'Testing & Deployment'],
      impact: 'Reduced configuration time by 70% and eliminated common human errors',
      figmaLink: '#',
    },
  },
];

const ProjectCard = ({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer pro-card overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-2.5 py-1 text-xs font-medium rounded-md bg-background/90 border border-border">
          {project.category}
        </span>
        
        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="gap-2">
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent mb-2">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of design projects demonstrating problem-solving and user-centric thinking
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Case Study Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent">
                      {selectedProject.category}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription>
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Thumbnail */}
                <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden my-4">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Case Study Content */}
                <div className="space-y-5">
                  {/* Problem */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">The Problem</h4>
                      <p className="text-sm text-muted-foreground">{selectedProject.caseStudy.problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">The Solution</h4>
                      <p className="text-sm text-muted-foreground">{selectedProject.caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Process */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Design Process</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.caseStudy.process.map((step, i) => (
                          <span key={step} className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">
                            {i + 1}. {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Impact & Results</h4>
                      <p className="text-sm text-muted-foreground">{selectedProject.caseStudy.impact}</p>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="font-medium mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tools.map((tool) => (
                        <span key={tool} className="px-2.5 py-1 text-sm rounded-md bg-secondary">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3 pt-2">
                    <Button className="gap-2" asChild>
                      <a href={selectedProject.caseStudy.figmaLink} target="_blank" rel="noopener noreferrer">
                        <Figma className="w-4 h-4" />
                        View in Figma
                      </a>
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
