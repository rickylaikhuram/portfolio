"use client";
import { useEffect, useState, PropsWithChildren } from "react";

export type Theme = "light" | "dark";

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? "dark"; // default dark on first load
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);

  // Prevent hydration mismatch flicker
  if (!mounted) return <>{children}</>;
  return <>{children}</>;
}
