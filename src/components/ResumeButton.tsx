"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ResumeButtonProps {
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "sm" | "default" | "lg" | "icon";
  className?: string;
}

export function ResumeButton({
  variant = "default",
  size = "default",
  className = "",
}: ResumeButtonProps) {
  return (
    <a href="/rickyresume.pdf" download target="_blank" rel="noopener noreferrer">
      <Button className={`gap-2 ${className}`} variant={variant} size={size}>
        <Download className="h-4 w-4" />
        <span>Download Resume</span>
      </Button>
    </a>
  );
}
