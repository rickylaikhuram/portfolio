import { useMemo, useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Terminal } from "lucide-react";
import { ResumeButton } from "@/components/ResumeButton";
import { useActiveSection } from "@/hooks/useActiveSection";
import Image from "next/image";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XTwitterIcon,
  YouTubeIcon,
} from "./ui/svg";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const TerminalLogo = ({ className }: { className?: string }) => (
  <div
    className={`${className} rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground`}
  >
    <Terminal className="h-4 w-4" />
  </div>
);

export function Navbar() {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const { active, scrollTo } = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false);

  // Track scroll position to show/hide profile image
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Show profile image when scrolled past hero section
        setShowProfileImage(scrollPosition > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex flex-col gap-2">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          className={`text-left px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg ${
            active === s.id
              ? "text-foreground bg-background"
              : "text-foreground/70 hover:text-foreground hover:bg-background/50"
          }`}
          onClick={() => {
            scrollTo(s.id);
            onClick?.();
          }}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );

  const SocialLinks = () => (
    <div className="flex items-center justify-center gap-3">
      <a
        href="https://linkedin.com/in/rickylaikhuram"
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-2xl text-foreground/60 hover:text-foreground bg-background/50 hover:bg-background transition-all duration-200"
        aria-label="LinkedIn"
      >
        <LinkedInIcon className="h-4 w-4" />
      </a>
      <a
        href="https://github.com/rickylaikhuram"
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-2xl text-foreground/60 hover:text-foreground bg-background/50 hover:bg-background transition-all duration-200"
        aria-label="GitHub"
      >
        <GitHubIcon className="h-4 w-4" />
      </a>
      <a
        href="https://www.instagram.com/ricky_laikhuram"
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-2xl text-foreground/60 hover:text-foreground bg-background/50 hover:bg-background transition-all duration-200"
        aria-label="Instagram"
      >
        <InstagramIcon className="h-4 w-4" />
      </a>
      <a
        href="https://www.youtube.com/@ricky_laikhuram"
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-2xl text-foreground/60 hover:text-foreground bg-background/50 hover:bg-background transition-all duration-200"
        aria-label="YouTube"
      >
        <YouTubeIcon className="h-4 w-4" />
      </a>
      <a
        href="https://x.com/ricky_laikhuram"
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-2xl text-foreground/60 hover:text-foreground bg-background/50 hover:bg-background transition-all duration-200"
        aria-label="X (Twitter)"
      >
        <XTwitterIcon className="h-4 w-4" />
      </a>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border mb-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="h-16 flex items-center justify-between">
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 group relative"
            >
              <div className="relative h-8 w-8 overflow-hidden">
                {/* Profile Image (shows when scrolled) */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    showProfileImage
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 -rotate-90"
                  }`}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Ricky Laikhuram"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover ring-1 ring-border"
                    onError={(e) => {
                      console.log("Image failed to load:", e);
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Initial Logo (shows initially) */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    !showProfileImage
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 rotate-90"
                  }`}
                >
                  <TerminalLogo className="h-8 w-8" />
                </div>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-6">
              <ul className="flex gap-6">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <button
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        active === s.id ? "text-primary" : "text-foreground/80"
                      }`}
                      onClick={() => scrollTo(s.id)}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
              <ResumeButton variant="outline" />
              <ThemeToggle />
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="transition-transform duration-200 ease-out hover:scale-105"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-background border-border data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right data-[state=open]:duration-700 data-[state=closed]:duration-500"
                >
                  <div className="h-full flex flex-col">
                    <SheetHeader className="text-left border-b border-border pb-5">
                      <SheetTitle className="text-lg font-semibold">
                        Navigation
                      </SheetTitle>
                    </SheetHeader>

                    <div className="flex-1 flex flex-col pt-6">
                      <div className="flex-1">
                        <NavLinks onClick={() => setOpen(false)} />
                      </div>

                      <div className="mb-6 p-2">
                        <ResumeButton variant="outline" className="w-full" />
                      </div>

                      <div className="border-t border-border pt-6 mb-5">
                        <div>
                          <p className="text-xs text-foreground/60 text-center mb-4 font-medium">
                            Connect with me
                          </p>
                          <SocialLinks />
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
