export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left space-y-2">
             <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Faizan Enterprises. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
