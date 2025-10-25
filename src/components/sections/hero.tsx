"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/particles";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <ParticleBackground />
      <motion.div
        className="z-10 flex flex-col items-center gap-6 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight"
          variants={itemVariants}
        >
          Building Scalable and Intelligent Software Solutions.
        </motion.h1>
        <motion.p
          className="max-w-3xl text-lg md:text-xl text-foreground/80"
          variants={itemVariants}
        >
          I’m Laraib Fatima, a Software Engineering student passionate about creating high-quality, impactful applications.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          variants={itemVariants}
        >
          <Button size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
