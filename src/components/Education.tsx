import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

const coursework = [
  "Data Structures",
  "Algorithm Design",
  "Computer Architecture",
  "Linear Algebra",
  "Discrete Math 1 & 2",
  "Data 101",
  "Statistical Inference for Data Science",
  "Regression Methods",
  "Applied Multivariate Analysis",
];

const leadership = [
  "Chi Psi Fraternity - Risk Management Chair (Executive Committee)",
  "Chi Psi Fraternity - House Manager",
  "Chi Psi Fraternity - Network Administrator",
];

const extracurriculars = [
  "Rutgers Brazilian Jiu-Jitsu Club - Member",
  "Rutgers Entrepreneurship Club - Member",
];

const Education = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-32 px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Education</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Rutgers University</h2>
        <p className="mt-2 text-foreground text-lg">
          B.S. Computer Science & B.S. Data Science · Expected May 2026
        </p>

        <div className="mt-10">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <Badge key={c} variant="secondary" className="font-normal text-sm px-3 py-1">
                {c}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Leadership
          </h3>
          <ul className="space-y-2">
            {leadership.map((item) => (
              <li key={item} className="text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Extracurriculars
          </h3>
          <ul className="space-y-2">
            {extracurriculars.map((e) => (
              <li key={e} className="text-foreground">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
