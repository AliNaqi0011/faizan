"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Code, Calendar } from "lucide-react";

const developerPhoto = PlaceHolderImages.find(p => p.id === 'developer-photo');

const stats = [
  { icon: <Briefcase className="h-8 w-8 text-primary" />, value: "150+", label: "Projects Delivered" },
  { icon: <Users className="h-8 w-8 text-primary" />, value: "80+", label: "Clients Worldwide" },
  { icon: <Calendar className="h-8 w-8 text-primary" />, value: "20+", label: "Years of Experience" },
  { icon: <Code className="h-8 w-8 text-primary" />, value: "15+", label: "Technologies Mastered" },
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
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Image
                  src={developerPhoto.imageUrl}
                  alt={developerPhoto.description}
                  data-ai-hint={developerPhoto.imageHint}
                  width={400}
                  height={400}
                  className="rounded-full relative object-cover aspect-square shadow-2xl"
                />
              </div>
            )}
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
            <p className="text-lg text-foreground/80">
              For over two decades, I have been at the forefront of web technology, evolving from classic PHP architectures to the dynamic world of modern JavaScript frameworks. My journey is one of continuous adaptation and a relentless pursuit of excellence. I don't just write code; I architect robust, scalable, and user-centric web applications that stand the test of time.
            </p>
            <p className="text-lg text-foreground/80">
              My leadership in project architecture has guided teams to deliver high-impact solutions for a diverse range of clients, from startups to enterprise-level corporations. I believe in blending deep-seated wisdom with innovative technologies to create digital experiences that are not only functional but truly exceptional.
            </p>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 border-border/50 text-center p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                <CardContent className="flex flex-col items-center gap-4 p-0">
                  {stat.icon}
                  <p className="text-4xl font-bold font-headline text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
