const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java (Basics)", "SQL"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "VS Code", "Canva", "Netlify", "Vercel"],
  },
  {
    title: "Currently Learning",
    skills: ["TypeScript", "Node.js", "MongoDB", "REST APIs"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subheading mx-auto">
            The tools I use to bring ideas to life. Always learning, always improving.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
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
