import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  primaryGradient,
  primaryGradientText,
  pinkToPurple,
  softCardGradient,
  particleGradient,
} from "../ui/gradients";


// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 6,
    scale: 0.5 + Math.random() * 1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particleGradient,

          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [particle.scale, particle.scale * 1.3, particle.scale],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

type AnimatedWordProps = {
  children: React.ReactNode;
  delay?: number;
  gradient?: boolean;
};


// Word Component with animation
const AnimatedWord: React.FC<AnimatedWordProps> = ({
  children,
  delay = 0,
  gradient = false,
}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={gradient ? "inline-block pb-[0.1em]" : "inline"}
      style={gradient ? primaryGradientText : {}}
    >
      {children}
    </motion.span>
  );
};

const AboutUs = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-whitecustom via-white to-gray-50 overflow-hidden"
    >
      {/* Blur overlay that fades out */}
      <motion.div
        initial={{ opacity: 1, backdropFilter: "blur(20px)" }}
        animate={isInView ? { opacity: 0, backdropFilter: "blur(0px)" } : { opacity: 1, backdropFilter: "blur(20px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-20 bg-white/30 pointer-events-none"
      />
      
      <div ref={sectionRef}>
      {/* Subtle dark gradient overlay at top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Gradient Orbs - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-pinkcustom/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-purplecustom/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
             font-light text-gray-800 leading-[1.2] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <AnimatedWord delay={0.1}>We put </AnimatedWord>
            <AnimatedWord delay={0.2} gradient={true}>growth </AnimatedWord>
            <AnimatedWord delay={0.3}> at the center</AnimatedWord>
            <br className="hidden sm:block" />
            <AnimatedWord delay={0.4}>of everything we do.</AnimatedWord>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-4xl mx-auto px-4"
          >
            If it makes sense, we automate it. If it doesn't we don't. It's that simple.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 sm:mt-16 mx-auto w-24 sm:w-32 md:w-40 h-1 rounded-full ${pinkToPurple}"
          />

          {/* Animated Stats or Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-16 sm:mt-20 md:mt-24 max-w-4xl mx-auto">
            {[
              { number: "100%", label: "Growth Focused" },
              { number: "Smart", label: "Automation" },
              { number: "Simple", label: "Approach" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl ${softCardGradient}`}

                />
                <div className="relative z-10">
                  <h3 
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
    
                    style={primaryGradientText}

                  >
                    {item.number}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                    {item.label}
                  </p>
                </div>
                
                {/* Floating particle inside card */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full ${pinkToPurple}"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      </div>   {/* ✅ closes <div ref={sectionRef}> */}

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </div>
  );
};

export default AboutUs;