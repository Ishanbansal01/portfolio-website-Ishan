const links = ["Education", "Experience", "Projects", "Skills"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-tight text-foreground">
          IB
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-[#cb6ce6] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="mailto:ishanbansal119@gmail.com"
          className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
