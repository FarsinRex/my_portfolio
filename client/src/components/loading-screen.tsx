import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "<!DOCTYPE html>",
  "<html lang=\"en\">",
  "  <head>",
  "    <meta charset=\"UTF-8\">",
  "    <title>Portfolio</title>",
  "  </head>",
  "  <body>",
  "    <div id=\"root\">",
  "      <h1>farsin</h1>",
  "      <p>freelance web developer</p>",
  "    </div>",
  "  </body>",
  "</html>",
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setVisibleLines((prev) => [...prev, codeLines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentLine, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-sf font-light text-white mb-2">
          Loading Portfolio..
        </h2>
      </div>
      
      <div className="font-mono text-sm max-w-md bg-black border border-gray-800 rounded-lg p-6 overflow-hidden">
        {visibleLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="text-white mb-1"
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
