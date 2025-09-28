"use client";

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="py-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Ricky Laikhuram. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("about")}
          >
            About
          </button>
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("skills")}
          >
            Skills
          </button>
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("projects")}
          >
            Projects
          </button>
          <button
            className="hover:text-primary transition-colors"
            onClick={() => go("experience")}
          >
            Experience
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
