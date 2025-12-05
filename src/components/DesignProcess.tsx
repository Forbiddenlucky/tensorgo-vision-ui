import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Target, Lightbulb, PenTool, TestTube, RefreshCw } from 'lucide-react';

const processSteps = [
  {
    id: 'empathize',
    title: 'Empathize',
    description: 'Understanding user needs through research, interviews, and observation',
    icon: Heart,
    color: 'primary',
    activities: ['User Interviews', 'Surveys', 'Observation', 'Persona Creation'],
  },
  {
    id: 'define',
    title: 'Define',
    description: 'Synthesizing research to identify core problems and opportunities',
    icon: Target,
    color: 'secondary',
    activities: ['Problem Statement', 'User Journey Maps', 'Pain Points', 'Requirements'],
  },
  {
    id: 'ideate',
    title: 'Ideate',
    description: 'Generating diverse solutions through brainstorming and exploration',
    icon: Lightbulb,
    color: 'accent',
    activities: ['Brainstorming', 'Sketching', 'Mind Mapping', 'Competitive Analysis'],
  },
  {
    id: 'prototype',
    title: 'Prototype',
    description: 'Creating tangible representations of ideas for testing',
    icon: PenTool,
    color: 'primary',
    activities: ['Wireframes', 'Lo-fi Mockups', 'Hi-fi Designs', 'Interactive Prototypes'],
  },
  {
    id: 'test',
    title: 'Test',
    description: 'Validating solutions with real users and gathering feedback',
    icon: TestTube,
    color: 'secondary',
    activities: ['Usability Testing', 'A/B Testing', 'Feedback Collection', 'Analytics'],
  },
  {
    id: 'iterate',
    title: 'Iterate',
    description: 'Refining designs based on testing insights and feedback',
    icon: RefreshCw,
    color: 'accent',
    activities: ['Refinement', 'Documentation', 'Handoff', 'Continuous Improvement'],
  },
];

export const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string; text: string; border: string; glow: string }> = {
      primary: {
        bg: 'bg-primary/20',
        text: 'text-primary',
        border: 'border-primary/30',
        glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.4)]',
      },
      secondary: {
        bg: 'bg-secondary/20',
        text: 'text-secondary',
        border: 'border-secondary/30',
        glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.4)]',
      },
      accent: {
        bg: 'bg-accent/20',
        text: 'text-accent',
        border: 'border-accent/30',
        glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.4)]',
      },
    };
    return map[color] || map.primary;
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.1)_25%,hsl(var(--primary)/0.1)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.1)_75%)] bg-[length:60px_60px]" />
      </div>
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-primary mb-4">
            How I Work
          </span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Design <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A human-centered design approach aligned with industry best practices
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const colors = getColorClasses(step.color);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index !== processSteps.length - 1 ? 'lg:pb-16' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`group glass-card rounded-2xl p-6 border ${colors.border} ${colors.glow} transition-all duration-300`}
                    >
                      {/* Header */}
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div className={isEven ? 'lg:text-right' : ''}>
                          <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>
                            Step {index + 1}
                          </span>
                          <h3 className="font-space font-semibold text-xl">{step.title}</h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4">{step.description}</p>

                      {/* Activities */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                        {step.activities.map((activity) => (
                          <span
                            key={activity}
                            className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                      className={`w-8 h-8 rounded-full ${colors.bg} border-4 border-background flex items-center justify-center`}
                    >
                      <span className={`text-xs font-bold ${colors.text}`}>{index + 1}</span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Interested in how I can apply this process to your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Let's discuss your needs
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
