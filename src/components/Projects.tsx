import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "BeatLens",
    desc: "A browser extension that analyzes music playing in the browser, displaying real-time BPM, key, and mood detection.",
    tech: ["JavaScript", "Chrome API", "Web Audio API", "Spotify API",],
  },
  {
    name: "Music Tinder",
    desc: "A swipe-based music discovery web app where users pick a genre, get Spotify-powered recommendations, swipe to like or skip, and save tracks to a personal 'Liked Songs' library.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Spotify API",
      "Figma",
    ],
  },
  {
    name: "Artist Event Tracker",
    desc: "A Python-based tool to look up upcoming events for music artists using the Ticketmaster API with a clean CLI.",
    tech: ["Python", "REST APIs", "Ticketmaster API"],
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-32 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-12">Things I've Built</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
