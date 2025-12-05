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
    color: 'primary',
    description: 'Professional Certificate in UX Design fundamentals',
    link: '#',
  },
  {
    id: 'figma',
    title: 'Figma for Beginners',
    issuer: 'Figma',
    icon: Palette,
    color: 'secondary',
    description: 'Mastering the fundamentals of Figma design tool',
    link: '#',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    issuer: 'Google',
    icon: Brain,
    color: 'accent',
    description: 'Understanding AI fundamentals and applications',
    link: '#',
  },
  {
    id: 'linux',
    title: 'Linux Administration',
    issuer: 'LPI',
    icon: Code,
    color: 'primary',
    description: 'Linux system administration and command line',
    link: '#',
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    issuer: 'EC-Council',
    icon: Shield,
    color: 'secondary',
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
    color: 'accent',
  },
  {
    id: 'tryhackme',
    title: 'TryHackMe Progress',
    description: 'Active learner on cybersecurity platform',
    icon: Code,
    color: 'primary',
  },
];

export const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string; text: string; border: string }> = {
      primary: { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/30' },
      secondary: { bg: 'bg-secondary/20', text: 'text-secondary', border: 'border-secondary/30' },
      accent: { bg: 'bg-accent/20', text: 'text-accent', border: 'border-accent/30' },
    };
    return map[color] || map.primary;
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-primary mb-4">
            Credentials
          </span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in design and technology
          </p>
        </motion.div>

        {/* Certificates Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-space font-semibold text-xl mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Professional Certificates
          </h3>
          
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              const colors = getColorClasses(cert.color);

              return (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-shrink-0 w-72 snap-start glass-card rounded-2xl p-6 border ${colors.border} hover:border-opacity-60 transition-all duration-300 group`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h4 className="font-space font-semibold text-lg mb-1 group-hover:text-gradient transition-colors">
                    {cert.title}
                  </h4>
                  <p className={`text-sm ${colors.text} mb-2`}>{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-4">{cert.description}</p>

                  {/* Link Indicator */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-space font-semibold text-xl mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-secondary" />
            Notable Achievements
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const colors = getColorClasses(achievement.color);

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`glass-card rounded-2xl p-6 border ${colors.border} flex items-start gap-4`}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h4 className="font-space font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* TryHackMe Badge Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://tryhackme.com/p/abhishek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:glow-green transition-all duration-300"
          >
            <Shield className="w-5 h-5 text-accent" />
            <span className="font-medium">View TryHackMe Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
