import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/use-theme";

export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const grains: { x: number; y: number; size: number; opacity: number }[] = [];
    const numGrains = 200;
    const waveWidth = window.innerWidth / 5; // 1/5th of screen width

    // Initialize grains within wave area
    for (let i = 0; i < numGrains; i++) {
      grains.push({
        x: Math.random() * waveWidth,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      grains.forEach((grain, index) => {
        // Gentle wave movement
        grain.y += 0.3;
        grain.x += Math.sin(Date.now() * 0.0005 + index) * 0.1;

        // Keep grains within wave bounds
        if (grain.x < 0) grain.x = 0;
        if (grain.x > waveWidth) grain.x = waveWidth;

        // Reset grain if it goes off screen
        if (grain.y > canvas.height) {
          grain.y = -10;
          grain.x = Math.random() * waveWidth;
        }

        // Draw grain with theme-appropriate color
        const grainColor = theme === "dark" ? "255, 255, 255" : "200, 200, 200";
        ctx.fillStyle = `rgba(${grainColor}, ${grain.opacity})`;
        ctx.fillRect(grain.x, grain.y, grain.size, grain.size);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  );
}
