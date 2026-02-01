const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aishwarya Senthilnathan. Built with care.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Developed by{" "}
            <span className="text-primary">Aishwarya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
