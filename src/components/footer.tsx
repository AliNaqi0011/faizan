import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    ariaLabel: "Visit my GitHub profile",
    href: "https://github.com/your-username",
    icon: <Github className="h-5 w-5" />,
  },
  {
    ariaLabel: "Visit my LinkedIn profile",
    href: "https://linkedin.com/in/your-username",
    icon: <Linkedin className="h-5 w-5" />,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left space-y-2">
             <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Kashaf Fatima Bukhari. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Button variant="ghost" size="icon" asChild key={link.href}>
                <Link href={link.href} target="_blank" aria-label={link.ariaLabel}>
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
