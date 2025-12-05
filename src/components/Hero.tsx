import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="text-primary">Abhishek Kushwaha</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground mb-4"
          >
            Product Design Intern · UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Building scalable, human-centric products with a focus on enterprise-grade UI systems and thoughtful user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            <Button size="lg" asChild>
              <a href="#projects">View Portfolio</a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 justify-center"
          >
            <a
              href="https://linkedin.com/in/abhisheklpu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md border border-border hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href="https://github.com/Forbiddenlucky"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md border border-border hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
