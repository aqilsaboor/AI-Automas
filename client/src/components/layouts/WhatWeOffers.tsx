import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  primaryGradient,
  primaryGradientText,
  pinkToPurple,
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

const services = [
  {
    title: "AI Voice Agents",
    description: "Transform customer interactions with intelligent voice automation that operates 24/7. Our AI voice agents handle calls with natural, human-like conversations, manage inquiries, schedule appointments, and provide instant support—never missing a call or opportunity.",
    number: "01",
  },
  {
    title: "Custom AI Software Development",
    description: "Purpose-built AI solutions engineered specifically for your business. We analyze your unique workflows, challenges, and goals to create intelligent systems that integrate seamlessly with your operations and deliver measurable improvements.",
    number: "02",
  },
  {
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks and optimize business processes with intelligent automation. From data entry to complex multi-step workflows, we help you reclaim time, reduce errors, and focus your team on high-value activities that drive growth.",
    number: "03",
  },
  {
    title: "Appointment Scheduling",
    description: "Automated booking systems that manage your calendar intelligently. Reduce no-shows with smart reminders, handle rescheduling seamlessly, and ensure optimal scheduling—all while providing a frictionless experience for your clients.",
    number: "04",
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    description: "Deploy conversational AI that provides instant, personalized support across all customer touchpoints. Our chatbots learn from interactions, handle complex queries, and scale to manage thousands of conversations simultaneously.",
    number: "05",
  },
  {
    title: "Email & Communication Automation",
    description: "Streamline your communication workflows with intelligent email management. Automate responses, prioritize important messages, trigger personalized follow-ups, and ensure no customer inquiry goes unanswered.",
    number: "06",
  },
  {
    title: "Review Management",
    description: "Build and protect your online reputation with automated review systems. Collect customer feedback at the perfect moment, respond promptly to reviews, and turn satisfied customers into brand advocates—all on autopilot.",
    number: "07",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
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

        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
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
            className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20 md:mb-28">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
               className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
    font-light text-gray-800
    leading-[1.35]
    mb-4"
>
              <span className="inline-block">Empowering&nbsp;</span>
              <span
                className="inline-block py-[0.12em]"
                style={primaryGradientText}
                >
                Businesses
            </span>

            <br className="hidden sm:block" />
            <span className="inline-block">with&nbsp;</span>
            <span
                className="inline-block py-[0.12em]"
                style={primaryGradientText}
                >
                Intelligent Solutions
            </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-4xl mx-auto px-4"
            >
              AI-powered automation that helps you work smarter, scale faster, and reduce operational costs by up to 70%
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            //   className="mt-8 sm:mt-12 mx-auto w-24 sm:w-32 md:w-40 h-1 rounded-full"
            className="mt-8 sm:mt-12 mx-auto w-24 sm:w-32 md:w-40 h-1 rounded-full bg-gradient-to-r from-pinkcustom to-purplecustom"

            //   style={{
            //     background: primaryGradient,
            //   }}
            
            />
          </div>

          {/* Services List */}
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  {/* Number and Title Row */}
                  <div className="flex items-start gap-4 sm:gap-6 md:gap-8 mb-3 sm:mb-4">
                    {/* Large Number */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      className="flex-shrink-0"
                    >
                      <span
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        style={primaryGradientText}
                      >
                        {service.number}
                      </span>
                    </motion.div>

                    {/* Title and Description */}
                    <div className="flex-1 pt-2 sm:pt-3 md:pt-4">
                      <motion.h3
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 md:mb-5"
                        style={primaryGradientText}
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-3xl"
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Animated Bottom Border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent origin-left"
                  />

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    // className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                    // style={{
                    //   background: primaryGradient,
                    // }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-pinkcustom to-purplecustom"

                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mt-20 sm:mt-24 md:mt-32"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
              <span className="inline-block">Technology that&nbsp;</span>
              <span className="inline-block" style={primaryGradientText}>learns, adapts,</span>
              <br className="hidden sm:block" />
              <span className="inline-block">and&nbsp;</span>
              <span className="inline-block" style={primaryGradientText}>grows with your business</span>
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            //   className="mt-8 sm:mt-10 md:mt-12 mx-auto w-32 sm:w-40 md:w-48 h-1 rounded-full"
            //   style={{
            //     background: primaryGradient,
            //   }}
            className="mt-8 sm:mt-10 md:mt-12 mx-auto w-32 sm:w-40 md:w-48 h-1 rounded-full bg-gradient-to-r from-pinkcustom to-purplecustom"

            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default Services;