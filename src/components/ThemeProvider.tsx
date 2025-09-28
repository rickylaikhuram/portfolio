"use client";
import { useEffect, useState, PropsWithChildren } from "react";

export type Theme = "light" | "dark";

// Use PropsWithChildren<object> or Record<string, unknown> instead of {}
export default function ThemeProvider({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial: Theme = stored ?? "dark"; // default dark on first load
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);

  // Prevent hydration mismatch flicker
  if (!mounted) return <>{children}</>;
  return <>{children}</>;
}
