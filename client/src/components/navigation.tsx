import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          {/* Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="w-12 h-12 rounded-full bg-foreground hover:bg-foreground/80 flex items-center justify-center transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center space-y-1"
              >
                <div className="w-4 h-0.5 bg-background"></div>
                <div className="w-4 h-0.5 bg-background"></div>
                <div className="w-4 h-0.5 bg-background"></div>
              </motion.div>
            </div>
          </motion.button>
        </div>

        <div className="pointer-events-auto">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-12 h-12 rounded-full backdrop-blur-md border ${
              theme === "light" 
                ? "bg-black hover:bg-black/80 border-black/20" 
                : "bg-foreground/10 hover:bg-foreground/20 border-foreground/20"
            }`}
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 text-foreground" />
            ) : (
              <Moon className="w-6 h-6 text-white" />
            )}
          </Button>
        </div>
      </nav>

      {/* Menu Items with Spring Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex items-center justify-start pl-16"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="space-y-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-4xl font-sf font-light text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
