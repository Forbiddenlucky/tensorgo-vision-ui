import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Palette, Code, Brain, Shield, Layers, Figma, PenTool, Monitor, Terminal } from 'lucide-react';

const skillCategories = [
  {
    id: 'design',
    title: 'Design Tools',
    icon: Palette,
    color: 'primary',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Photoshop', level: 80 },
      { name: 'Canva', level: 95 },
    ],
  },
  {
    id: 'ux',
    title: 'UX Process',
    icon: Brain,
    color: 'secondary',
    skills: [
      { name: 'Wireframing', level: 90 },
      { name: 'Prototyping', level: 88 },
      { name: 'UX Research', level: 82 },
      { name: 'User Testing', level: 78 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code,
    color: 'accent',
    skills: [
      { name: 'HTML/CSS', level: 92 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    id: 'tech',
    title: 'Tech & Automation',
    icon: Shield,
    color: 'primary',
    skills: [
      { name: 'Linux', level: 85 },
      { name: 'Bash Scripting', level: 78 },
      { name: 'Python', level: 72 },
      { name: 'Git', level: 80 },
    ],
  },
];

const softSkills = [
  { name: 'Communication', icon: Layers },
  { name: 'Problem Solving', icon: Brain },
  { name: 'Time Management', icon: Monitor },
  { name: 'Team Collaboration', icon: Terminal },
];

const SkillBar = ({ skill, delay, isInView }: { skill: { name: string; level: number }; delay: number; isInView: boolean }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('design');

  const getColorClass = (color: string, type: 'text' | 'bg' | 'border' | 'glow') => {
    const colorMap: Record<string, Record<string, string>> = {
      primary: {
        text: 'text-primary',
        bg: 'bg-primary',
        border: 'border-primary',
        glow: 'glow-blue',
      },
      secondary: {
        text: 'text-secondary',
        bg: 'bg-secondary',
        border: 'border-secondary',
        glow: 'glow-purple',
      },
      accent: {
        text: 'text-accent',
        bg: 'bg-accent',
        border: 'border-accent',
        glow: 'glow-green',
      },
    };
    return colorMap[color]?.[type] || '';
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-primary mb-4">
            My Expertise
          </span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit spanning design, development, and technical automation
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? `glass-card ${getColorClass(category.color, 'glow')} ${getColorClass(category.color, 'text')}`
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 lg:p-8"
          >
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`space-y-4 ${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                <div className={`flex items-center gap-3 mb-6 ${getColorClass(category.color, 'text')}`}>
                  <category.icon className="w-6 h-6" />
                  <h3 className="font-space font-semibold text-xl">{category.title}</h3>
                </div>
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.4 + index * 0.1}
                    isInView={isInView && activeCategory === category.id}
                  />
                ))}
              </div>
            ))}
          </motion.div>

          {/* 3D Skill Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`card-3d cursor-pointer glass-card rounded-2xl p-6 text-center transition-all duration-300 ${
                    isActive ? getColorClass(category.color, 'glow') : ''
                  }`}
                >
                  <div className={`w-14 h-14 mx-auto rounded-xl ${getColorClass(category.color, 'bg')}/20 flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${getColorClass(category.color, 'text')}`} />
                  </div>
                  <h4 className="font-space font-semibold text-sm mb-1">{category.title}</h4>
                  <p className="text-xs text-muted-foreground">{category.skills.length} skills</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-space font-semibold text-xl text-center mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
