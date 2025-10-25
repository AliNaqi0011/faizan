"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Cpu, Lightbulb, Factory } from "lucide-react";

const developerPhoto = PlaceHolderImages.find(p => p.id === 'developer-photo');

const stats = [
  { icon: <Zap className="h-8 w-8 text-primary" />, label: "Power Systems" },
  { icon: <Cpu className="h-8 w-8 text-primary" />, label: "Automation" },
  { icon: <Lightbulb className="h-8 w-8 text-primary" />, label: "Renewable Energy" },
  { icon: <Factory className="h-8 w-8 text-primary" />, label: "Industrial Controls" },
];

export function AboutSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div variants={itemVariants} className="flex justify-center">
            {developerPhoto && (
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Image
                  src={developerPhoto.imageUrl}
                  alt={developerPhoto.description}
                  data-ai-hint={developerPhoto.imageHint}
                  width={400}
                  height={400}
                  className="rounded-full relative object-cover aspect-square shadow-2xl"
                />
              </motion.div>
            )}
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
            <p className="text-lg text-foreground/80">
              I am a results-driven Electrical Engineer with a passion for designing and implementing innovative solutions in power systems, automation, and control. With a strong foundation in theoretical principles and hands-on experience in industrial settings, I thrive on solving complex challenges. My journey has taken me from developing robust engineering solutions in Lahore to optimizing large-scale logistics systems in the USA, always with a focus on efficiency, safety, and sustainability.
            </p>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card/50 border-border/50 text-center p-4 sm:p-6 h-full transform transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="flex flex-col items-center justify-center gap-2 sm:gap-4 p-0">
                    {stat.icon}
                    <p className="text-sm sm:text-md font-semibold text-muted-foreground mt-2 text-center">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
