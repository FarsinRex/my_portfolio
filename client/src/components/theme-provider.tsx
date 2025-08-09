import { ThemeProvider } from "@/hooks/use-theme";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      {children}
    </ThemeProvider>
  );
}
