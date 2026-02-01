import { Award, BookOpen } from "lucide-react";

const certifications = [
  {
    category: "Programming",
    icon: BookOpen,
    items: [
      { title: "Introduction to Python", provider: "Infosys Springboard" },
      { title: "Joy of Computing Using Python", provider: "NPTEL" },
      { title: "Oracle SQL", provider: "Oracle" },
    ],
  },
  {
    category: "Web Development",
    icon: Award,
    items: [
      { title: "HTML Fundamentals", provider: "Infosys Springboard" },
      { title: "CSS Essentials", provider: "Infosys Springboard" },
      { title: "JavaScript Basics", provider: "Infosys Springboard" },
    ],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="section-subheading mx-auto">
            Continuous learning through structured courses and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((category) => (
            <div key={category.category} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-xl">
                  {category.category}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.items.map((cert) => (
                  <li
                    key={cert.title}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.provider}</p>
                    </div>
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

export default Certifications;
