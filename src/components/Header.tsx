import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Sparkles className="h-5 w-5 text-primary" />
          <span>Gen Forms AI</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/form-builder"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Form Builder
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
