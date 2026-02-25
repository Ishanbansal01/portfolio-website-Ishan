import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    company: "Allegis Group",
    role: "Salesforce Developer",
    dates: "Jun 2024 – Present",
    timeline: [
      {
        phase: "Intern",
        dates: "Jun 2025 – Aug 2025",
      },
      {
        phase: "Part Time",
        dates: "Aug 2025 – Present",
      },
    ],
    points: [
      "Delivered 20 cross team feature and defect stories by architecting and deploying solutions in multiple Salesforce sandboxes, optimizing Lightning Web Components (LWC) and Visualforce to strengthen platform stability and user experience.",
      "Implemented an AI driven AgentForce tool that automated custom label discovery and maintenance using Apex and Salesforce metadata APIs, cutting developer lookup time by 40% and boosting sprint velocity.",
      "Built and integrated a personalized AI platform assistant that surfaces contextual code dependencies and file explanations through Apex triggers and dynamic metadata queries, enabling new engineers to reach full productivity 50% faster",
    ],
  },
  {
    company: "Cuesic",
    role: "Co-Founder",
    dates: "March 2025 – Present",
    points: [
      "Co-founded an EDM events, promotion, and music tech startup, producing curated showcases that connect artists, DJs, and local venues through live events and short form content.",
      "Lead Cuesic’s tech stack end-to-end, handling website updates, data storage, and backend workflows to support events,promotions, and community features.",
      "Built and scaled Cuesic’s social engine to 18K+ followers and 600K+ likes in 5 months, using analytics driven content and artist partnerships to create a platform for 30+ DJs and deliver venue promos reaching 10,000+ new customers, resulting in 2x event day sales for partners.",
      "Self taught merch production end-to-end, selling 40+ items in 1 week and generating $1,000+ in revenue and $680 in profit.",
    ],
  },
  {
    company: "4ForceCloudSolutions",
    role: "Founder",
    dates: "Jan 2023 – Present",
    points: [
      "Founded a cloud consulting startup providing AWS architecture and migration services",
      "Managed client relationships and delivered solutions for small-to-mid-size businesses",
      "Built serverless applications using Lambda, API Gateway, and DynamoDB",
    ],
  },
  {
    company: "NRG",
    role: "AI Risk Landscape Extern",
    dates: "Jan 2024 – Mar 2024",
    points: [
      "Researched AI risk frameworks and their implications for energy sector compliance",
      "Presented findings to stakeholders, influencing policy recommendations",
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-32 px-6 bg-secondary/50">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-12">Where I've Worked</h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary" />
              <p className="text-xs text-foreground uppercase tracking-wider">
                {exp.dates}
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-1">{exp.role}</h3>
              <p className="text-primary font-medium">{exp.company}</p>

              {exp.timeline && (
                <div className="mt-3 ml-1 border-l border-border/60 pl-3 space-y-1.5">
                  {exp.timeline.map((t, k) => (
                    <div key={k} className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium text-foreground">
                        {t.phase}{" "}
                        <span className="text-[11px] text-foreground uppercase tracking-wide">· {t.dates}</span>
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="mt-3 space-y-1.5">
                {exp.points.map((p, j) => (
                  <li key={j} className="text-foreground text-sm leading-relaxed">
                    • {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
