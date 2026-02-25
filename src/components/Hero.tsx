import { Mail, Linkedin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="text-center max-w-3xl mx-auto">
        <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full opacity-0 animate-fade-in" />
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up">
          Ishan Bansal
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Computer Science & Data Science @ Rutgers
        </p>
        <div
          className="mt-8 flex items-center justify-center gap-5 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="mailto:ibansal0319@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/bansalishan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div
          className="mt-8 flex justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <img
            src="/headshot.png"
            alt="Ishan Bansal"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover object-[62%_50%] border-2 border-primary/60 shadow-lg shadow-primary/20"
          />
        </div>
      </div>
      <a
        href="#education"
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
