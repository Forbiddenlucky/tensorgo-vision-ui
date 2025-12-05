import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Palette, Code, Brain, Shield } from 'lucide-react';

const skillCategories = [
  {
    id: 'design',
    title: 'Design Tools',
    icon: Palette,
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
    skills: [
      { name: 'Linux', level: 85 },
      { name: 'Bash Scripting', level: 78 },
      { name: 'Python', level: 72 },
      { name: 'Git', level: 80 },
    ],
  },
];

const softSkills = ['Communication', 'Problem Solving', 'Time Management', 'Team Collaboration'];

const SkillBar = ({ skill, delay, isInView }: { skill: { name: string; level: number }; delay: number; isInView: boolean }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('design');

  return (
    <section id="skills" className="py-20 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent mb-2">My Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A diverse toolkit spanning design, development, and technical automation
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pro-card p-6"
          >
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`space-y-4 ${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                <div className="flex items-center gap-2 mb-6">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.3 + index * 0.1}
                    isInView={isInView && activeCategory === category.id}
                  />
                ))}
              </div>
            ))}
          </motion.div>

          {/* Category Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <div
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`cursor-pointer pro-card p-5 text-center transition-all ${
                    isActive ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div className="w-12 h-12 mx-auto rounded-md bg-secondary flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm mb-1">{category.title}</h4>
                  <p className="text-xs text-muted-foreground">{category.skills.length} skills</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="font-semibold text-lg text-center mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-card border border-border rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
