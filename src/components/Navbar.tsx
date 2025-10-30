const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Centered Name */}
          <a 
            href="#home" 
            className="text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-colors duration-300"
          >
            Daniel <span className="text-accent">Tripura</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
