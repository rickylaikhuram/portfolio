"use client";

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="font-mono text-xs text-foreground/45">© {new Date().getFullYear()} Ricky Laikhuram</p>
        <p className="text-xs text-foreground/40 md:ml-2">Designed & built from Manipur, India</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("about")}
          >
            About
          </button>
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("experience")}
          >
            Experience
          </button>
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("projects")}
          >
            Projects
          </button>
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("skills")}
          >
            Skills
          </button>
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </footer>
  );
}
