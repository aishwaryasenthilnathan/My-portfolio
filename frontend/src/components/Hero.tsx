import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 animate-fade-up opacity-0">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 animate-delay-100">
            Aishwarya{" "}
            <span className="text-gradient">Senthilnathan</span>
          </h1>
          
          {/* Role */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-up opacity-0 animate-delay-200">
            Front-End Developer & CS Engineering Student
          </p>
          
          {/* Bio */}
          <p className="text-lg text-muted-foreground/80 leading-relaxed mb-10 max-w-2xl animate-fade-up opacity-0 animate-delay-300">
            I build web experiences that feel right. Currently exploring the full-stack world 
            while crafting responsive, thoughtful interfaces that solve real problems.
          </p>
          
          {/* Contact chips */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-up opacity-0 animate-delay-400">
            <a
              href="mailto:aishwaryasenthil987@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card hover:border-primary/50 transition-all"
            >
              <Mail size={16} className="text-primary" />
              <span className="text-sm">aishwaryasenthil987@gmail.com</span>
            </a>
            <a
              href="tel:+918124845717"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card hover:border-primary/50 transition-all"
            >
              <Phone size={16} className="text-primary" />
              <span className="text-sm">+91 8124845717</span>
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm">Nagapattinam, Tamil Nadu</span>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
            <a
              href="https://github.com/aishwaryasenthilnathan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:border-primary/50 hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/aishwaryasenthilnathan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:border-primary/50 hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
