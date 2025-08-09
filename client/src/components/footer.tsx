import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border/20 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm font-sf text-muted-foreground">
              © 2025 Farsin. All rights reserved.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm font-sf text-muted-foreground">
              Mumbai, India
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}