import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subheading mx-auto mb-12">
            Looking for internship opportunities, collaborations, or just want to chat about 
            code and tech? I'd love to hear from you.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <a
              href="mailto:aishwaryasenthil987@gmail.com"
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <Mail size={28} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium mb-1">Email</p>
              <p className="text-sm text-muted-foreground break-all">aishwaryasenthil987@gmail.com</p>
            </a>
            <a
              href="tel:+918124845717"
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <Phone size={28} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium mb-1">Phone</p>
              <p className="text-sm text-muted-foreground">+91 8124845717</p>
            </a>
            <div className="glass-card rounded-2xl p-6">
              <MapPin size={28} className="text-primary mx-auto mb-3" />
              <p className="font-medium mb-1">Location</p>
              <p className="text-sm text-muted-foreground">Nagapattinam, Tamil Nadu</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/aishwaryasenthilnathan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg glass-card hover:border-primary/50 hover:text-primary transition-all"
            >
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/aishwaryasenthilnathan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg glass-card hover:border-primary/50 hover:text-primary transition-all"
            >
              <Linkedin size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:aishwaryasenthil987@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-shadow"
          >
            <Send size={20} />
            Send me a message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
