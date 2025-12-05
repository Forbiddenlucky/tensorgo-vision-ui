import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Shield, Code, Palette, Brain } from 'lucide-react';

const certificates = [
  {
    id: 'google-ux',
    title: 'Google UX Design',
    issuer: 'Google',
    icon: Palette,
    description: 'Professional Certificate in UX Design fundamentals',
    link: '#',
  },
  {
    id: 'figma',
    title: 'Figma for Beginners',
    issuer: 'Figma',
    icon: Palette,
    description: 'Mastering the fundamentals of Figma design tool',
    link: '#',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    issuer: 'Google',
    icon: Brain,
    description: 'Understanding AI fundamentals and applications',
    link: '#',
  },
  {
    id: 'linux',
    title: 'Linux Administration',
    issuer: 'LPI',
    icon: Code,
    description: 'Linux system administration and command line',
    link: '#',
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    issuer: 'EC-Council',
    icon: Shield,
    description: 'Cybersecurity and penetration testing fundamentals',
    link: '#',
  },
];

const achievements = [
  {
    id: 'overthewire',
    title: 'OverTheWire Wargames',
    description: 'Completed multiple levels of security challenges',
    icon: Shield,
  },
  {
    id: 'tryhackme',
    title: 'TryHackMe Progress',
    description: 'Active learner on cybersecurity platform',
    icon: Code,
  },
];

export const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-20" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent mb-2">Credentials</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Continuous learning and professional development in design and technology
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="mb-12">
          <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Professional Certificates
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;

              return (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="pro-card p-5 group"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-accent mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-3">{cert.description}</p>

                  {/* Link Indicator */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Notable Achievements
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="pro-card p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TryHackMe Badge Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://tryhackme.com/p/abhishek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-card hover:bg-secondary transition-colors"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-medium text-sm">View TryHackMe Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
