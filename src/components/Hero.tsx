import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";
import { SiPython, SiJavascript, SiHtml5, SiC } from "react-icons/si";
import avatarImage from "@/assets/daniel-profile.jpg";

const Hero = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/danieltripura",
      color: "hover:bg-[#0077B5]"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/danieltripura",
      color: "hover:bg-[#333333]"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/danieltripura",
      color: "hover:bg-[#1DA1F2]"
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/danieltripura",
      color: "hover:bg-[#0088cc]"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:daniel.tripura@outlook.com",
      color: "hover:bg-[#EA4335]"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 md:pt-24 network-bg overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-up order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hi There,</span>
                <br />
                <span className="accent-text">Hi it's me</span>
              </h1>
              
              <div className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl">
                <span className="text-foreground">I Am Into</span>
                <span className="accent-text font-semibold">Software Engineer</span>
                <span className="accent-text animate-pulse">|</span>
              </div>
            </div>

            {/* Social Links */}
            <div 
              className="flex flex-wrap gap-3 md:gap-4 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-foreground text-background flex items-center justify-center transition-all duration-300 hover:scale-110 ${link.color} hover:text-white shadow-md hover:shadow-xl`}
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Avatar Image */}
          <div 
            className="flex justify-center items-center animate-fade-up order-1 lg:order-2"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative">
              {/* Avatar Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[#FFD93D] flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src={avatarImage}
                  alt="Daniel Tripura - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background shadow-lg flex items-center justify-center animate-float">
                <SiPython className="w-8 h-8 text-[#3776AB]" />
              </div>
              <div className="absolute top-1/4 -right-8 w-16 h-16 rounded-full bg-background shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />
              </div>
              <div className="absolute bottom-1/4 -left-8 w-16 h-16 rounded-full bg-background shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <SiHtml5 className="w-8 h-8 text-[#E34F26]" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <SiC className="w-8 h-8 text-[#A8B9CC]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-[15%] w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
