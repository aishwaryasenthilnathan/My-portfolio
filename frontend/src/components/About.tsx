import { GraduationCap, Code2, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About text */}
          <div>
            <h2 className="section-heading">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Aishwarya—a Computer Science student who genuinely enjoys turning ideas into 
                working code. I started with curiosity about how websites work, and now I find 
                myself deep in React components and database queries.
              </p>
              <p>
                My approach is simple: understand the problem first, then write code that's clean 
                enough for my future self to read. I'm not chasing every new framework—I'd rather 
                master the fundamentals and build things that actually work.
              </p>
              <p>
                When I'm not coding, I'm probably tweaking my VS Code setup (again) or exploring 
                new web technologies. Currently focused on becoming a well-rounded full-stack 
                developer who can ship products, not just features.
              </p>
            </div>
          </div>

          {/* Right: Education & highlights */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">
                    B.E. Computer Science Engineering
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Pursuing • Expected 2026
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    Building a strong foundation in algorithms, data structures, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>

            {/* What I bring */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">
                    What I Bring
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground/80">
                    <li className="flex items-center gap-2">
                      <Sparkles size={14} className="text-primary" />
                      Clean, maintainable code that scales
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles size={14} className="text-primary" />
                      User-first design thinking
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles size={14} className="text-primary" />
                      Quick learner with attention to detail
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles size={14} className="text-primary" />
                      Strong communication & collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
