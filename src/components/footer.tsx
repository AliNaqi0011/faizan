import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    ariaLabel: "Visit my GitHub profile",
    href: "https://github.com/laraibfatimaawan",
    icon: <Github className="h-5 w-5" />,
  },
  {
    ariaLabel: "Visit my LinkedIn profile",
    href: "https://linkedin.com/in/laraib-fatima-awan",
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
              &copy; {currentYear} Laraib Fatima Awan. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <a
                    href="mailto:laraibfatimaawan@gmail.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                    <Mail className="h-4 w-4" />
                    laraibfatimaawan@gmail.com
                </a>
                <span className="hidden md:inline">|</span>
                <a
                    href="tel:03316866767"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                    <Phone className="h-4 w-4" />
                    0331 6866767
                </a>
             </div>
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
