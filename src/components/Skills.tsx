import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "SQL", "JavaScript", "HTML", "CSS", "R", "C", "Apex"],
  },
  {
    label: "Developer Tools",
    items: [
      "VSCode",
      "RStudio",
      "Bubble.io",
      "Xcode",
      "Node.js",
      "React",
      "Figma",
      "Salesforce Sandbox",
      "Git",
      "GitHub",
    ],
  },
  {
    label: "Additional Skills",
    items: [
      "CI/CD",
      "Agile DevOps",
      "Strategic creativity",
      "Proactive problem solving",
      "Initiative & Ownership",
    ],
  },
  {
    label: "Other Certifications",
    items: [
      "SQL For Beginners",
      "Salesforce AI Agent Specialist",
      "AgentBlazer Champion",
      "Verizon Cloud Platform",
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/50">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-12">What I Work With</h2>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm font-normal px-3 py-1.5">
                    {item}
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

export default Skills;
