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
    activities: ['User Interviews', 'Surveys', 'Observation', 'Persona Creation'],
  },
  {
    id: 'define',
    title: 'Define',
    description: 'Synthesizing research to identify core problems and opportunities',
    icon: Target,
    activities: ['Problem Statement', 'User Journey Maps', 'Pain Points', 'Requirements'],
  },
  {
    id: 'ideate',
    title: 'Ideate',
    description: 'Generating diverse solutions through brainstorming and exploration',
    icon: Lightbulb,
    activities: ['Brainstorming', 'Sketching', 'Mind Mapping', 'Competitive Analysis'],
  },
  {
    id: 'prototype',
    title: 'Prototype',
    description: 'Creating tangible representations of ideas for testing',
    icon: PenTool,
    activities: ['Wireframes', 'Lo-fi Mockups', 'Hi-fi Designs', 'Interactive Prototypes'],
  },
  {
    id: 'test',
    title: 'Test',
    description: 'Validating solutions with real users and gathering feedback',
    icon: TestTube,
    activities: ['Usability Testing', 'A/B Testing', 'Feedback Collection', 'Analytics'],
  },
  {
    id: 'iterate',
    title: 'Iterate',
    description: 'Refining designs based on testing insights and feedback',
    icon: RefreshCw,
    activities: ['Refinement', 'Documentation', 'Handoff', 'Continuous Improvement'],
  },
];

export const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent mb-2">How I Work</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Design Process
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A human-centered design approach aligned with industry best practices
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pro-card p-6"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Step {index + 1}
                    </span>
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                {/* Activities */}
                <div className="flex flex-wrap gap-1.5">
                  {step.activities.map((activity) => (
                    <span
                      key={activity}
                      className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-3">
            Interested in how I can apply this process to your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Let's discuss your needs →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
