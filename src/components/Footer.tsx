import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-5 mb-6">
          <a
            href="mailto:ishanbansal119@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ishan-bansal-rutgers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Built by Ishan Bansal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
