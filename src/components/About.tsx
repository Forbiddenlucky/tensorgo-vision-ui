import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Target, Zap } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Design Tools', value: '8+' },
  { label: 'Years Learning', value: '3+' },
  { label: 'Certifications', value: '5+' },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-primary mb-4">
            About Me
          </span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Crafting <span className="text-gradient">Digital Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate product designer focused on creating scalable, human-centric solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent animate-spin-slow opacity-20 blur-xl" />
              
              {/* Main card */}
              <div className="relative glass-card rounded-3xl p-8 h-full flex flex-col justify-center">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary mb-6 flex items-center justify-center">
                  <span className="font-space font-bold text-4xl text-primary-foreground">AK</span>
                </div>
                
                <h3 className="font-space font-semibold text-2xl text-center mb-2">
                  Abhishek Kushwaha
                </h3>
                <p className="text-primary text-center mb-4">Product Design Intern</p>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>

                {/* Quick Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">B.Tech CSE</p>
                      <p className="text-xs text-muted-foreground">Lovely Professional University</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                    <Target className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-sm font-medium">CGPA: 7.34</p>
                      <p className="text-xs text-muted-foreground">Academic Performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-space font-semibold text-2xl flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As a Computer Science student with a deep passion for design, I bridge the gap between 
                technical functionality and user-centric aesthetics. My journey in UI/UX design started 
                with curiosity about how digital products shape human behavior.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating <span className="text-primary font-medium">enterprise-grade 
                interfaces</span> and <span className="text-secondary font-medium">design systems</span> that 
                scale. With expertise in Figma, Adobe XD, and frontend technologies, I transform complex 
                problems into elegant, accessible solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to <span className="text-accent font-medium">AI-driven product 
                ecosystems</span> like Computer Vision applications, where thoughtful design meets 
                cutting-edge technology to create meaningful user experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 glass-card rounded-xl"
                >
                  <p className="font-space font-bold text-2xl text-gradient">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
