import { Badge } from "@/components/ui/badge";
import { BookOpen, Briefcase, Code, Globe } from "lucide-react";

const About = () => {
  const skills = ["Python", "C", "JavaScript", "HTML"];
  
  return (
    <section id="about" className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="accent-text">Jotho No Khulumbai</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                My name is <span className="accent-text font-semibold">Daniel Tripura</span>. I am belong to Tipura Tribal Community. 
                I proud to my identity and Culture.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3">
              <Code className="w-8 h-8 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="px-6 py-3 text-base md:text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Education</h3>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow">
              <p className="text-lg text-foreground">
                Currently pursuing <span className="font-semibold accent-text">Bachelor in Computer Science and Engineering</span>
              </p>
            </div>
          </div>

          {/* Work & Experience Section */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {/* Work */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-accent" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Work</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow">
                  <p className="text-lg font-semibold text-foreground">World Scouting</p>
                  <p className="text-muted-foreground">On Campus</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow">
                  <p className="text-lg font-semibold text-foreground">Google</p>
                  <p className="text-muted-foreground">On Campus</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-accent" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h3>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <p className="text-lg font-semibold text-foreground">Codec Technology</p>
                <p className="text-muted-foreground">Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;