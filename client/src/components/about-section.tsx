import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "Python/Django",
  "React / Next.js",
  "Machine-Learning algos",
  "Database Design",
];

const experience = [
  "Freelance projects",
  "Machine-learning",
  "Data-analytics",
  "fullstack web-dev",
  "Team collaboration",
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-sf font-light text-foreground mb-20"
        >
          About
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-card border-2 border-border dark:border-border/40 rounded-2xl">
            <CardContent className="p-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-base font-sf text-foreground leading-relaxed mb-8">
                  I'm a passionate developer with a keen interest for building machine-learning and LLM models. 
                  I'm improvizing myself in creating ML models, Finetune and integrate them with backend for interactive web-apps</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="text-left">
                    <h3 className="text-lg font-sf font-medium text-foreground mb-4">Skills</h3>
                    <ul className="text-muted-foreground space-y-2 text-sm font-sf">
                      {skills.map((skill, index) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="text-lg font-sf font-medium text-foreground mb-4">Experience</h3>
                    <ul className="text-muted-foreground space-y-2 text-sm font-sf">
                      {experience.map((exp, index) => (
                        <motion.li
                          key={exp}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {exp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
