"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "UPS",
    location: "USA",
    role: "Electrical Engineer",
    period: "2022 - Present",
    description: "Responsible for the design, maintenance, and optimization of automated sorting systems and power distribution networks within large-scale logistics hubs. Focus on ensuring system reliability, safety compliance, and energy efficiency."
  },
  {
    company: "Ocentra",
    location: "Lahore, Pakistan",
    role: "Junior Electrical Engineer",
    period: "2020 - 2022",
    description: "Assisted in the design and implementation of industrial control panels and automation solutions for various clients. Gained hands-on experience with PLC programming, schematic design, and on-site commissioning."
  },
];

export function ExperienceSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="experience"
      className="py-24 sm:py-32 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Professional Experience</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            My journey in applying engineering principles to solve real-world challenges.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/20 pl-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="absolute -left-[1.6rem] top-1.5 h-6 w-6 rounded-full bg-primary flex items-center justify-center ring-8 ring-secondary">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>
                <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <CardTitle className="font-headline text-xl md:text-2xl">{exp.role}</CardTitle>
                        <p className="text-sm text-primary font-semibold mt-1 sm:mt-0">{exp.period}</p>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-md">
                        <Building className="h-4 w-4" />
                        {exp.company} - {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
