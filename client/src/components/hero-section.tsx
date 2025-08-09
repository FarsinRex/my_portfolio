import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-end justify-end relative px-8">
      <div className="text-right absolute bottom-0 right-0 p-8 z-30" style={{ marginBottom: "4cm", marginRight: "2rem" }}>
        <div className="relative">
          <h1 className="text-5xl font-sf font-light tracking-tight text-foreground mb-1">
            farsin
          </h1>
          
          <p className="text-4xl font-sf text-muted-foreground tracking-wide">
            web-dev
          </p>
        </div>
      </div>
    </section>
  );
}
