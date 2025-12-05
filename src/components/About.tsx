import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Target } from 'lucide-react';

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
    <section id="about" className="py-20" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent mb-2">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A passionate product designer focused on creating scalable, human-centric solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="pro-card p-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-primary/10 mb-6 flex items-center justify-center">
                <span className="font-semibold text-2xl text-primary">AK</span>
              </div>
              
              <h3 className="font-semibold text-xl mb-1">Abhishek Kushwaha</h3>
              <p className="text-accent text-sm mb-4">Product Design Intern</p>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>

              {/* Quick Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-md bg-secondary">
                  <GraduationCap className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">B.Tech CSE</p>
                    <p className="text-xs text-muted-foreground">Lovely Professional University</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md bg-secondary">
                  <Target className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">CGPA: 7.34</p>
                    <p className="text-xs text-muted-foreground">Academic Performance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a Computer Science student with a deep passion for design, I bridge the gap between 
                technical functionality and user-centric aesthetics. My journey in UI/UX design started 
                with curiosity about how digital products shape human behavior.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating enterprise-grade interfaces and design systems that 
                scale. With expertise in Figma, Adobe XD, and frontend technologies, I transform complex 
                problems into elegant, accessible solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to AI-driven product ecosystems like Computer Vision 
                applications, where thoughtful design meets cutting-edge technology to create meaningful 
                user experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 pro-card"
                >
                  <p className="font-semibold text-2xl text-primary">{stat.value}</p>
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
