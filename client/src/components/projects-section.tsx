import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Chatbot as a packaged microservice",
    description: "Groq-LLM based chatbot integrated with Flask backend, with an interacitve and convo based interface",
    tech: "Next • Node.js •Flask •Groq LLM",
    gradient: "from-blue-500 to-purple-600",
    icon: "📊",
  },
  {
    title: "Weather Prediction web service",
    description: "prediction engine with Accuweather API integration",
    tech: "Scikit-learn • Pytorch •RandomForest",
    gradient: "from-green-500 to-emerald-600",
    icon: "🛍️",
  },
  {
    title: "Portfolio Site",
    description: "Creative portfolio website with interactive animations and smooth transitions.",
    tech: "Vue.JS • GSAP",
    gradient: "from-purple-500 to-pink-600",
    icon: "🎨",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-sf font-light text-foreground mb-20 text-center"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="project-card bg-card border-2 border-border dark:border-border/40 hover:border-border transition-all duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className="h-32 bg-muted/20 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-2xl">{project.icon}</div>
                  </div>
                  
                  <h3 className="text-base font-sf font-medium text-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide flex-shrink-0">
                      {project.tech}
                    </span>
                    <div className="flex space-x-1 flex-shrink-0">
                      <Button size="sm" variant="ghost" className="p-1.5 h-6 w-6 min-w-6">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-1.5 h-6 w-6 min-w-6">
                        <Github className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
