import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial
        color="#0EA5E9"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-30 animate-float ${className}`} />
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <FloatingOrb className="w-96 h-96 bg-primary -top-20 -left-20" />
      <FloatingOrb className="w-80 h-80 bg-secondary top-1/2 -right-20 delay-300" />
      <FloatingOrb className="w-64 h-64 bg-accent bottom-20 left-1/3 delay-500" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
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
              transition={{ delay: 0.3 }}
              className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient glow-text-blue">Abhishek</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 font-light"
            >
              Product Design Intern | UI/UX Designer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Building <span className="text-primary">Scalable Human-Centric Products</span> with 
              a focus on enterprise-grade UI systems and AI-driven experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button size="lg" className="gap-2 glow-blue pulse-glow" asChild>
                <a href="#projects">
                  <Sparkles className="w-5 h-5" />
                  View Portfolio
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 glow-purple" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Hire Me
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://linkedin.com/in/abhisheklpu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:glow-blue transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/Forbiddenlucky"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:glow-purple transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#A855F7" />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              </Suspense>
            </Canvas>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10 p-4 glass-card rounded-xl"
            >
              <span className="text-sm font-medium text-primary">UI/UX</span>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-20 left-0 p-4 glass-card rounded-xl"
            >
              <span className="text-sm font-medium text-secondary">Figma</span>
            </motion.div>
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 right-0 p-4 glass-card rounded-xl"
            >
              <span className="text-sm font-medium text-accent">React</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
